"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface DropdownOption {
	value: string;
	label: string;
}

export interface DropdownProps {
	options: DropdownOption[];
	value: string;
	onValueChange: (value: string) => void;
	placeholder?: string;
	disabled?: boolean;
	className?: string;
	triggerClassName?: string;
	contentClassName?: string;
	itemClassName?: string;
}

export function CustomDropdown({
	options,
	value,
	onValueChange,
	placeholder = "Select an option",
	disabled = false,
	className,
	triggerClassName,
	contentClassName,
	itemClassName
}: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const scrollPositionRef = useRef(0);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	// Handle opening and closing the dropdown
	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault();
		// Store scroll position before opening dropdown
		if (!isOpen) {
			scrollPositionRef.current = window.scrollY;
		}

		setIsOpen(!isOpen);

		// Restore scroll position immediately after state change
		if (!isOpen) {
			setTimeout(() => {
				window.scrollTo({
					top: scrollPositionRef.current,
					behavior: "auto"
				});
			}, 0);
		}
	};

	// Find the selected option
	const selectedOption = options.find((option) => option.value === value);

	return (
		<div
			className={cn("relative inline-block w-full", className)}
			ref={dropdownRef}>
			<button
				type="button"
				onClick={handleToggle}
				className={cn(
					"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
					triggerClassName
				)}
				disabled={disabled}
				aria-expanded={isOpen}>
				<span
					className={
						!selectedOption ? "text-muted-foreground" : undefined
					}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<ChevronDown
					className={cn(
						"h-4 w-4 opacity-50 transition-transform",
						isOpen && "rotate-180"
					)}
				/>
			</button>

			{isOpen && (
				<div
					className={cn(
						"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
						"animate-in fade-in-80",
						contentClassName
					)}>
					<ul>
						{options.map((option) => (
							<li
								key={option.value}
								className={cn(
									"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
									"hover:bg-accent hover:text-accent-foreground",
									"focus:bg-accent focus:text-accent-foreground",
									value === option.value &&
										"bg-accent text-accent-foreground",
									itemClassName
								)}
								onClick={() => {
									onValueChange(option.value);
									setIsOpen(false);
								}}>
								<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
									{value === option.value && (
										<Check className="h-4 w-4" />
									)}
								</span>
								<span>{option.label}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

// With option groups support
export interface OptionGroup {
	label: string;
	options: DropdownOption[];
}

export interface GroupedDropdownProps extends Omit<DropdownProps, "options"> {
	groups: OptionGroup[];
}

export function GroupedCustomDropdown({
	groups,
	value,
	onValueChange,
	placeholder = "Select an option",
	disabled = false,
	className,
	triggerClassName,
	contentClassName,
	itemClassName
}: GroupedDropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const scrollPositionRef = useRef(0);

	// Get all options flattened for finding the selected one
	const allOptions = groups.flatMap((group) => group.options);
	const selectedOption = allOptions.find((option) => option.value === value);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	// Handle opening and closing the dropdown
	const handleToggle = (e: React.MouseEvent) => {
		e.preventDefault();
		// Store scroll position before opening dropdown
		if (!isOpen) {
			scrollPositionRef.current = window.scrollY;
		}

		setIsOpen(!isOpen);

		// Restore scroll position immediately after state change
		if (!isOpen) {
			setTimeout(() => {
				window.scrollTo({
					top: scrollPositionRef.current,
					behavior: "auto"
				});
			}, 0);
		}
	};

	return (
		<div
			className={cn("relative inline-block w-full", className)}
			ref={dropdownRef}>
			<button
				type="button"
				onClick={handleToggle}
				className={cn(
					"flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
					"disabled:cursor-not-allowed disabled:opacity-50",
					"focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
					triggerClassName
				)}
				disabled={disabled}
				aria-expanded={isOpen}>
				<span
					className={
						!selectedOption ? "text-muted-foreground" : undefined
					}>
					{selectedOption ? selectedOption.label : placeholder}
				</span>
				<ChevronDown
					className={cn(
						"h-4 w-4 opacity-50 transition-transform",
						isOpen && "rotate-180"
					)}
				/>
			</button>

			{isOpen && (
				<div
					className={cn(
						"absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
						"animate-in fade-in-80",
						contentClassName
					)}>
					<ul>
						{groups.map((group, groupIndex) => (
							<React.Fragment key={groupIndex}>
								<li className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
									{group.label}
								</li>
								{group.options.map((option) => (
									<li
										key={option.value}
										className={cn(
											"relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
											"hover:bg-accent hover:text-accent-foreground",
											"focus:bg-accent focus:text-accent-foreground",
											value === option.value &&
												"bg-accent text-accent-foreground",
											itemClassName
										)}
										onClick={() => {
											onValueChange(option.value);
											setIsOpen(false);
										}}>
										<span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
											{value === option.value && (
												<Check className="h-4 w-4" />
											)}
										</span>
										<span>{option.label}</span>
									</li>
								))}
								{groupIndex < groups.length - 1 && (
									<li className="my-1 h-px bg-muted"></li>
								)}
							</React.Fragment>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
