"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ContentContextType {
	activeCategory: string;
	setActiveCategory: (category: string) => void;
	currentPage: number;
	setCurrentPage: (page: number) => void;
	contentType: "blog" | "press";
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

interface ContentContextProviderProps {
	children: ReactNode;
	contentType: "blog" | "press";
}

export function ContentContextProvider({
	children,
	contentType
}: ContentContextProviderProps) {
	const [activeCategory, setActiveCategory] = useState("All");
	const [currentPage, setCurrentPage] = useState(1);

	return (
		<ContentContext.Provider
			value={{
				activeCategory,
				setActiveCategory,
				currentPage,
				setCurrentPage,
				contentType
			}}>
			{children}
		</ContentContext.Provider>
	);
}

export function useContentContext() {
	const context = useContext(ContentContext);
	if (context === undefined) {
		throw new Error(
			"useContentContext must be used within a ContentContextProvider"
		);
	}
	return context;
}
