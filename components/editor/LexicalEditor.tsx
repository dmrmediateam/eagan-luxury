"use client";

import { useEffect } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
	$getRoot,
	$createParagraphNode,
	$createTextNode,
	EditorState
} from "lexical";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

// Error Boundary Component
function LexicalErrorBoundary({ children }: { children: React.ReactNode }) {
	return <div>{children}</div>;
}

// Custom plugin to update content when initialContent changes
function UpdatePlugin({ initialContent }: { initialContent: string }) {
	const [editor] = useLexicalComposerContext();

	useEffect(() => {
		if (initialContent) {
			editor.update(() => {
				const root = $getRoot();
				// Clear the editor
				root.clear();

				// Try to parse the HTML content
				try {
					const parser = new DOMParser();
					const dom = parser.parseFromString(
						initialContent,
						"text/html"
					);

					// For simplicity, we're just extracting text content
					const textContent = dom.body.textContent || "";

					const paragraph = $createParagraphNode();
					const text = $createTextNode(textContent);
					paragraph.append(text);
					root.append(paragraph);
				} catch (err) {
					// If parsing fails, just set the content as plain text
					console.error("Error parsing HTML content:", err);
					const paragraph = $createParagraphNode();
					const text = $createTextNode(initialContent);
					paragraph.append(text);
					root.append(paragraph);
				}
			});
		}
	}, [editor, initialContent]);

	return null;
}

// Define the editor theme
const theme = {
	ltr: "ltr",
	rtl: "rtl",
	paragraph: "editor-paragraph",
	quote: "editor-quote",
	heading: {
		h1: "editor-heading-h1",
		h2: "editor-heading-h2",
		h3: "editor-heading-h3"
	},
	list: {
		nested: {
			listitem: "editor-nested-listitem"
		},
		ol: "editor-list-ol",
		ul: "editor-list-ul",
		listitem: "editor-listitem"
	},
	image: "editor-image",
	link: "editor-link",
	text: {
		bold: "editor-text-bold",
		italic: "editor-text-italic",
		underline: "editor-text-underline",
		code: "editor-text-code"
	}
};

// Define the editor nodes
const editorNodes = [
	HeadingNode,
	ListNode,
	ListItemNode,
	QuoteNode,
	CodeNode,
	CodeHighlightNode,
	TableNode,
	TableCellNode,
	TableRowNode,
	AutoLinkNode,
	LinkNode
];

interface LexicalEditorProps {
	initialContent: string;
	onChange: (html: string) => void;
	placeholder?: string;
}

export default function LexicalEditor({
	initialContent = "",
	onChange,
	placeholder = "Enter some text..."
}: LexicalEditorProps) {
	// Function to handle editor changes
	const handleEditorChange = (editorState: EditorState) => {
		editorState.read(() => {
			// For now, we'll just get the text content
			// In a real implementation, you'd want to convert to HTML
			const root = $getRoot();
			const textContent = root.getTextContent();
			onChange(textContent);
		});
	};

	// Initial editor config
	const initialConfig = {
		namespace: "BlogEditor",
		theme,
		onError: (error: Error) => console.error(error),
		nodes: editorNodes
	};

	return (
		<div className="lexical-editor-container">
			<LexicalComposer initialConfig={initialConfig}>
				<div className="editor-container border border-gray-300 rounded-md">
					<ToolbarPlugin />
					<div className="editor-inner">
						<RichTextPlugin
							contentEditable={
								<ContentEditable className="editor-input p-4 min-h-[250px] focus:outline-none" />
							}
							placeholder={
								<div className="editor-placeholder text-gray-400">
									{placeholder}
								</div>
							}
							ErrorBoundary={LexicalErrorBoundary}
						/>
						<HistoryPlugin />
						<AutoFocusPlugin />
						<ListPlugin />
						<LinkPlugin />
						<OnChangePlugin onChange={handleEditorChange} />
						<UpdatePlugin initialContent={initialContent} />
					</div>
				</div>
			</LexicalComposer>

			{/* Add some basic styles for the editor */}
			<style jsx global>{`
				.editor-paragraph {
					margin: 0;
					margin-bottom: 8px;
					position: relative;
				}

				.editor-heading-h1 {
					font-size: 24px;
					font-weight: 700;
					margin-bottom: 12px;
				}

				.editor-heading-h2 {
					font-size: 20px;
					font-weight: 700;
					margin-bottom: 10px;
				}

				.editor-heading-h3 {
					font-size: 16px;
					font-weight: 700;
					margin-bottom: 8px;
				}

				.editor-quote {
					margin: 0;
					margin-left: 20px;
					margin-bottom: 10px;
					font-style: italic;
					border-left: 4px solid #ccc;
					padding-left: 16px;
				}

				.editor-list-ol {
					padding: 0;
					margin: 0;
					margin-left: 16px;
				}

				.editor-list-ul {
					padding: 0;
					margin: 0;
					margin-left: 16px;
				}

				.editor-listitem {
					margin: 8px 32px;
				}

				.editor-nested-listitem {
					list-style-type: none;
				}

				.editor-text-bold {
					font-weight: bold;
				}

				.editor-text-italic {
					font-style: italic;
				}

				.editor-text-underline {
					text-decoration: underline;
				}

				.editor-text-code {
					background-color: rgb(240, 242, 245);
					padding: 1px 0.25rem;
					font-family: Menlo, Consolas, Monaco, monospace;
					font-size: 94%;
				}

				.editor-link {
					color: rgb(33, 111, 219);
					text-decoration: none;
				}

				.editor-placeholder {
					color: #999;
					overflow: hidden;
					position: absolute;
					top: 15px;
					left: 15px;
					user-select: none;
					pointer-events: none;
				}
			`}</style>
		</div>
	);
}
