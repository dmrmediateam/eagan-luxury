// editor/plugins/ToolbarPlugin.tsx
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import { useCallback, useState } from "react";
import { $getSelection, $isRangeSelection } from "lexical";
import {
	$createHeadingNode,
	$isHeadingNode,
	HeadingTagType
} from "@lexical/rich-text";
import { $createParagraphNode } from "lexical";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from "@lexical/link";
import {
	$isListNode,
	INSERT_ORDERED_LIST_COMMAND,
	INSERT_UNORDERED_LIST_COMMAND,
	REMOVE_LIST_COMMAND
} from "@lexical/list";

export function ToolbarPlugin() {
	const [editor] = useLexicalComposerContext();
	const [linkUrl, setLinkUrl] = useState<string>("");

	const formatBold = useCallback(() => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
	}, [editor]);

	const formatItalic = useCallback(() => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
	}, [editor]);

	const formatUnderline = useCallback(() => {
		editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
	}, [editor]);

	const formatHeading = useCallback(
		(headingSize: HeadingTagType) => {
			editor.update(() => {
				const selection = $getSelection();
				if ($isRangeSelection(selection)) {
					const nodes = selection.getNodes();
					nodes.forEach((node) => {
						if (
							$isHeadingNode(node) ||
							node.getType() === "paragraph"
						) {
							const newNode = $createHeadingNode(headingSize);
							node.replace(newNode);
						}
					});
				}
			});
		},
		[editor]
	);

	const formatParagraph = useCallback(() => {
		editor.update(() => {
			const selection = $getSelection();
			if ($isRangeSelection(selection)) {
				const nodes = selection.getNodes();
				nodes.forEach((node) => {
					if ($isHeadingNode(node)) {
						const newNode = $createParagraphNode();
						node.replace(newNode);
					}
				});
			}
		});
	}, [editor]);

	const toggleLink = useCallback(() => {
		editor.update(() => {
			const selection = $getSelection();
			if ($isRangeSelection(selection)) {
				const nodes = selection.getNodes();
				const isLink = nodes.some((node) => $isLinkNode(node));

				if (isLink) {
					editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
				} else if (linkUrl) {
					editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
				}
			}
		});
	}, [editor, linkUrl]);

	const formatList = useCallback(
		(listType: "number" | "bullet") => {
			editor.update(() => {
				const selection = $getSelection();
				if ($isRangeSelection(selection)) {
					const nodes = selection.getNodes();
					const isList = nodes.some((node) => $isListNode(node));

					if (isList) {
						editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined);
						return;
					}

					editor.dispatchCommand(
						listType === "number"
							? INSERT_ORDERED_LIST_COMMAND
							: INSERT_UNORDERED_LIST_COMMAND,
						undefined
					);
				}
			});
		},
		[editor]
	);

	return (
		<div className="toolbar p-2 border-b border-gray-300 bg-gray-50 flex flex-wrap gap-2">
			<button
				type="button"
				onClick={formatBold}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Bold">
				B
			</button>
			<button
				type="button"
				onClick={formatItalic}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Italic">
				I
			</button>
			<button
				type="button"
				onClick={formatUnderline}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Underline">
				U
			</button>
			<button
				type="button"
				onClick={() => formatHeading("h1")}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Heading 1">
				H1
			</button>
			<button
				type="button"
				onClick={() => formatHeading("h2")}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Heading 2">
				H2
			</button>
			<button
				type="button"
				onClick={() => formatHeading("h3")}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Heading 3">
				H3
			</button>
			<button
				type="button"
				onClick={formatParagraph}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Paragraph">
				P
			</button>
			<div className="flex items-center gap-1">
				<input
					type="text"
					value={linkUrl}
					onChange={(e) => setLinkUrl(e.target.value)}
					placeholder="Enter URL"
					className="px-2 py-1 border rounded text-gray-800"
					onKeyDown={(e) => e.key === "Enter" && toggleLink()}
				/>
				<button
					type="button"
					onClick={toggleLink}
					className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
					title="Link/Unlink">
					🔗
				</button>
			</div>
			<button
				type="button"
				onClick={() => formatList("number")}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Ordered List">
				1.
			</button>
			<button
				type="button"
				onClick={() => formatList("bullet")}
				className="px-2 py-1 bg-white border rounded hover:bg-gray-100 text-gray-800"
				title="Unordered List">
				•
			</button>
		</div>
	);
}
