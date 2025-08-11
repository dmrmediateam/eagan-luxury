"use client";

import React, { useEffect, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";
import { LinkNode, $createLinkNode } from "@lexical/link";
import {
	ListNode,
	ListItemNode,
	$createListNode,
	$createListItemNode
} from "@lexical/list";
import {
	$getRoot,
	$createParagraphNode,
	$createTextNode,
	$getSelection,
	$isRangeSelection,
	$setSelection,
	EditorState,
	LexicalEditor,
	$createRangeSelection,
	KEY_ENTER_COMMAND // Import the correct command
} from "lexical";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define interfaces for Portable Text
interface PortableTextSpan {
	_type: string;
	text?: string;
	marks?: string[];
	[key: string]: unknown;
}

interface PortableTextBlock {
	_type: string;
	style?: string;
	children?: PortableTextSpan[];
	alt?: string;
	[key: string]: unknown;
}

// InitialContentPlugin (updated to handle Portable Text)
function InitialContentPlugin({ content }: { content: string }) {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		if (!content) return;

		editor.update(() => {
			const root = $getRoot();
			try {
				// Check if content is empty or just empty array
				if (content === "" || content === "[]") {
					// Handle empty content
					const paragraph = $createParagraphNode();
					root.clear();
					root.append(paragraph);
					return;
				}

				// Check if content is Portable Text (JSON string)
				if (content.startsWith("[") && content.includes("_type")) {
					// This is likely Portable Text JSON
					try {
						const portableTextBlocks = JSON.parse(
							content
						) as PortableTextBlock[];
						root.clear();

						// If there are no blocks, create an empty paragraph
						if (portableTextBlocks.length === 0) {
							const paragraph = $createParagraphNode();
							root.append(paragraph);
							return;
						}

						// Convert Portable Text to Lexical nodes
						portableTextBlocks.forEach(
							(block: PortableTextBlock) => {
								if (block._type === "block") {
									let node;

									// Handle different block types
									switch (block.style) {
										case "h1":
											node = $createHeadingNode("h1");
											break;
										case "h2":
											node = $createHeadingNode("h2");
											break;
										case "h3":
											node = $createHeadingNode("h3");
											break;
										case "blockquote":
											// For simplicity, we'll use a paragraph with styling
											node = $createParagraphNode();
											break;
										default:
											node = $createParagraphNode();
									}

									// Handle marks and text spans
									if (block.children) {
										block.children.forEach(
											(child: PortableTextSpan) => {
												if (child._type === "span") {
													const textNode =
														$createTextNode(
															child.text || ""
														);

													// Apply marks if they exist
													if (
														child.marks &&
														child.marks.length > 0
													) {
														child.marks.forEach(
															(mark: string) => {
																if (
																	mark.startsWith(
																		"strong"
																	)
																) {
																	textNode.toggleFormat(
																		"bold"
																	);
																} else if (
																	mark.startsWith(
																		"em"
																	)
																) {
																	textNode.toggleFormat(
																		"italic"
																	);
																}
																// Add more mark types as needed
															}
														);
													}

													node.append(textNode);
												}
											}
										);
									}

									root.append(node);
								} else if (block._type === "image") {
									// For images, we'll just add a placeholder text
									const paragraph = $createParagraphNode();
									paragraph.append(
										$createTextNode(
											"[Image: " +
												(block.alt || "Image") +
												"]"
										)
									);
									root.append(paragraph);
								}
							}
						);
					} catch (e) {
						console.error("Error parsing Portable Text:", e);
						// Fallback to simple text
						const paragraph = $createParagraphNode();
						paragraph.append($createTextNode(content));
						root.append(paragraph);
					}
				} else {
					// Try to parse as HTML first
					try {
						const parser = new DOMParser();
						const doc = parser.parseFromString(
							content,
							"text/html"
						);
						const nodes = $generateNodesFromDOM(editor, doc);
						root.clear();
						if (nodes.length > 0) {
							root.append(...nodes);
						} else {
							// If HTML parsing didn't work, just use the content as plain text
							const paragraph = $createParagraphNode();
							paragraph.append($createTextNode(content));
							root.append(paragraph);
						}
					} catch (error) {
						console.error("Error parsing HTML content:", error);
						// Fallback to plain text
						const paragraph = $createParagraphNode();
						paragraph.append($createTextNode(content));
						root.append(paragraph);
					}
				}
			} catch (error) {
				console.error("Error parsing content:", error);
				const paragraph = $createParagraphNode();
				paragraph.append($createTextNode(content));
				root.append(paragraph);
			}
		});
	}, [editor, content]);

	return null;
}

// LinkDialog (unchanged)
interface LinkDialogProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (url: string, text: string) => void;
	initialText: string;
}

const LinkDialog: React.FC<LinkDialogProps> = ({
	isOpen,
	onClose,
	onSubmit,
	initialText
}) => {
	const [url, setUrl] = useState("");
	const [text, setText] = useState("");

	useEffect(() => {
		if (isOpen) {
			setText(initialText);
			setUrl("");
		}
	}, [isOpen, initialText]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(url, text);
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose} modal>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Insert Link</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="text" className="text-right">
								Text
							</Label>
							<Input
								id="text"
								value={text}
								onChange={(e) => setText(e.target.value)}
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="url" className="text-right">
								URL
							</Label>
							<Input
								id="url"
								value={url}
								onChange={(e) => setUrl(e.target.value)}
								className="col-span-3"
								placeholder="https://"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button
							type="button"
							variant="outline"
							onClick={onClose}>
							Cancel
						</Button>
						<Button type="submit">Insert Link</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
};

// CursorManagementPlugin with fixes
function CursorManagementPlugin() {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		const unregisterKeyDown = editor.registerCommand(
			KEY_ENTER_COMMAND, // Use the Lexical-provided command
			(event: KeyboardEvent) => {
				editor.update(() => {
					const selection = $getSelection();
					if ($isRangeSelection(selection)) {
						const anchor = selection.anchor;
						const anchorNode = anchor.getNode();
						const parentNode = anchorNode.getParent();

						if (parentNode) {
							// Null check
							const newParagraph = $createParagraphNode();
							parentNode.insertAfter(newParagraph);

							// Move cursor to the new paragraph
							const newSelection = $createRangeSelection();
							newSelection.anchor.set(
								newParagraph.getKey(),
								0,
								"text"
							);
							newSelection.focus.set(
								newParagraph.getKey(),
								0,
								"text"
							);
							$setSelection(newSelection);
						}

						event.preventDefault();
						return true;
					}
				});
				return false;
			},
			4 // Higher priority
		);

		return () => {
			unregisterKeyDown();
		};
	}, [editor]);

	return null;
}

// Toolbar (unchanged except for clarity)
const Toolbar: React.FC = () => {
	const [editor] = useLexicalComposerContext();
	const [showLinkDialog, setShowLinkDialog] = useState(false);
	const [selectedText, setSelectedText] = useState("");

	const applyFormat = (type: string) => {
		editor.update(() => {
			const selection = $getSelection();
			if ($isRangeSelection(selection)) {
				const anchorKey = selection.anchor.key;
				const anchorOffset = selection.anchor.offset;
				const focusKey = selection.focus.key;
				const focusOffset = selection.focus.offset;

				switch (type) {
					case "bold":
						selection.formatText("bold");
						break;
					case "italic":
						selection.formatText("italic");
						break;
					case "h1": {
						const headingNode = $createHeadingNode("h1");
						headingNode.append(
							$createTextNode(selection.getTextContent())
						);
						selection.insertNodes([headingNode]);
						break;
					}
					case "h2": {
						const headingNode = $createHeadingNode("h2");
						headingNode.append(
							$createTextNode(selection.getTextContent())
						);
						selection.insertNodes([headingNode]);
						break;
					}
					case "body": {
						const paragraphNode = $createParagraphNode();
						paragraphNode.append(
							$createTextNode(selection.getTextContent())
						);
						selection.insertNodes([paragraphNode]);
						break;
					}
					case "bullet": {
						const listNode = $createListNode("bullet");
						const listItemNode = $createListItemNode();
						listItemNode.append(
							$createTextNode(selection.getTextContent())
						);
						listNode.append(listItemNode);
						selection.insertNodes([listNode]);
						break;
					}
					case "number": {
						const listNode = $createListNode("number");
						const listItemNode = $createListItemNode();
						listItemNode.append(
							$createTextNode(selection.getTextContent())
						);
						listNode.append(listItemNode);
						selection.insertNodes([listNode]);
						break;
					}
					case "link": {
						setSelectedText(selection.getTextContent());
						setShowLinkDialog(true);
						return;
					}
				}

				const newSelection = $createRangeSelection();
				newSelection.anchor.set(anchorKey, anchorOffset, "text");
				newSelection.focus.set(focusKey, focusOffset, "text");
				$setSelection(newSelection);
			}
		});
	};

	const handleLinkSubmit = (url: string, text: string) => {
		editor.update(() => {
			const selection = $getSelection();
			if ($isRangeSelection(selection)) {
				const linkNode = $createLinkNode(url);
				linkNode.append($createTextNode(text));
				selection.insertNodes([linkNode]);
			}
		});
	};

	return (
		<>
			<div className="border-b p-2 flex gap-2 items-center">
				<Select onValueChange={applyFormat} defaultValue="body">
					<SelectTrigger className="w-[120px]">
						<SelectValue placeholder="Text Style" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="h1">Heading 1</SelectItem>
						<SelectItem value="h2">Heading 2</SelectItem>
						<SelectItem value="body">Body Text</SelectItem>
					</SelectContent>
				</Select>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => applyFormat("bold")}>
					B
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => applyFormat("italic")}>
					I
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => applyFormat("bullet")}>
					• List
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => applyFormat("number")}>
					1. List
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={() => applyFormat("link")}>
					🔗
				</Button>
			</div>
			<LinkDialog
				isOpen={showLinkDialog}
				onClose={() => setShowLinkDialog(false)}
				onSubmit={handleLinkSubmit}
				initialText={selectedText}
			/>
		</>
	);
};

// RichTextEditor (unchanged)
interface RichTextEditorProps {
	initialContent?: string;
	onChange?: (content: string) => void;
	className?: string;
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({
	initialContent = "",
	onChange,
	className = ""
}) => {
	// Process initialContent to handle empty arrays or invalid content
	const processedInitialContent = React.useMemo(() => {
		if (!initialContent || initialContent === "[]") {
			return "";
		}
		return initialContent;
	}, [initialContent]);

	const initialConfig = {
		namespace: "RichTextEditor",
		theme: {
			root: "p-4 prose max-w-none min-h-[400px] focus:outline-none",
			paragraph: "mb-2",
			heading: {
				h1: "text-3xl font-bold mb-4",
				h2: "text-2xl font-semibold mb-3",
				h3: "text-xl font-semibold mb-3"
			},
			text: {
				bold: "font-bold",
				italic: "italic",
				underline: "underline"
			},
			list: {
				ul: "list-disc pl-6 mb-4",
				ol: "list-decimal pl-6 mb-4",
				listitem: "mb-1"
			},
			link: "text-blue-500 underline"
		},
		nodes: [HeadingNode, ListNode, ListItemNode, LinkNode],
		onError: (error: Error) => {
			console.error("Editor Error:", error);
		},
		editable: true
	};

	const handleEditorChange = (
		editorState: EditorState,
		editor: LexicalEditor
	) => {
		editorState.read(() => {
			// Generate HTML from the editor state
			const html = $generateHtmlFromNodes(editor);

			// If the editor is empty, return an empty array for Portable Text compatibility
			if (html === "<p></p>" || html === "<p><br></p>" || !html.trim()) {
				if (onChange) onChange("[]");
				return;
			}

			if (onChange) onChange(html);
		});
	};

	return (
		<LexicalComposer initialConfig={initialConfig}>
			<div className={`border rounded-md ${className}`}>
				<Toolbar />
				<RichTextPlugin
					contentEditable={
						<ContentEditable className="p-4 prose max-w-none min-h-[400px] focus:outline-none" />
					}
					placeholder={
						<div className="p-4 text-gray-500">Start typing...</div>
					}
					ErrorBoundary={() => {
						console.error("RichTextPlugin Error");
						return <div>Error in editor</div>;
					}}
				/>
				<HistoryPlugin />
				<OnChangePlugin onChange={handleEditorChange} />
				<InitialContentPlugin content={processedInitialContent} />
				<CursorManagementPlugin />
			</div>
		</LexicalComposer>
	);
};

export default RichTextEditor;
