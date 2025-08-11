import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog"; // Adjust the import path based on your setup
import { Button } from "@/components/ui/button"; // shadcn button component

interface DeleteModalProps {
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	propertyName?: string; // Optional property name to show in the message
}

const DeleteModal: React.FC<DeleteModalProps> = ({
	isOpen,
	onClose,
	onConfirm,
	propertyName
}) => {
	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<div className="flex justify-center mt-4">
					<div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
						<svg
							className="w-6 h-6 text-red-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</div>
				</div>
				<DialogHeader>
					<DialogTitle className="text-lg font-medium text-gray-900 text-center">
						Delete Property
					</DialogTitle>
					<DialogDescription className="text-sm text-gray-500 text-center">
						Are you sure you want to delete{" "}
						{propertyName ? `"${propertyName}"` : "this property"}?
						This action cannot be undone and will remove all
						associated data including images, details, and listing
						information.
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex flex-col gap-2 mt-4">
					<Button
						variant="destructive"
						className="sm:w-1/2"
						onClick={onConfirm}>
						Delete Property
					</Button>
					<Button
						variant="outline"
						className="sm:w-1/2"
						onClick={onClose}>
						Cancel
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default DeleteModal;
