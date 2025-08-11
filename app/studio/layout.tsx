export default function StudioLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div style={{ height: "100vh", width: "100vw", padding: 0, margin: 0 }}>
			{children}
		</div>
	);
}
