import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Preview,
	Section,
	Text
} from "@react-email/components";
import * as React from "react";
import { config } from "@/config";

interface AdminNotificationEmailProps {
	name: string;
	email: string;
	phone?: string;
	message?: string;
}

export const AdminNotificationEmail = ({
	name = "Unknown",
	email = "contact@legendaryrealestateservices.com",
	phone = "Not provided",
	message = "No message provided"
}: AdminNotificationEmailProps) => {
	// Use the CDN URL from config
	const cdnUrl = config.cdn;

	// Logo URLs from CDN
	const goodrichLogoUrl = `${cdnUrl}keytextlogogray.png`;
	const sothebysLogoUrl = `${cdnUrl}sothebysdark.png`;

	return (
		<Html>
			<Head />
			<Preview>New Contact Form Submission: {name}</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Top margin space */}
					<Section style={{ height: "60px" }} />

					{/* Goodrich Logo */}
					<Section
						style={{ textAlign: "center", marginBottom: "40px" }}>
						<Img
							src={goodrichLogoUrl}
							width="240"
							height="72"
							alt="Cheryl Towey"
							style={{ margin: "0 auto" }}
						/>
					</Section>

					{/* Decorative line */}
					<Section style={headerLineStyle} />

					{/* Heading */}
					<Heading style={heading}>New Inquiry</Heading>

					<Section style={section}>
						<Text style={text}>
							The following inquiry has been received from the
							website contact form.
						</Text>

						<Section style={infoBox}>
							<Text style={infoTitle}>Contact Information</Text>
							<div style={infoGrid}>
								<div style={infoRow}>
									<div style={infoLabelContainer}>
										<Text style={infoLabel}>Name</Text>
									</div>
									<div style={infoValueContainer}>
										<Text style={infoValue}>{name}</Text>
									</div>
								</div>
								<div style={infoRow}>
									<div style={infoLabelContainer}>
										<Text style={infoLabel}>Email</Text>
									</div>
									<div style={infoValueContainer}>
										<Text style={infoValue}>{email}</Text>
									</div>
								</div>
								<div style={infoRow}>
									<div style={infoLabelContainer}>
										<Text style={infoLabel}>Phone</Text>
									</div>
									<div style={infoValueContainer}>
										<Text style={infoValue}>{phone}</Text>
									</div>
								</div>
							</div>
						</Section>

						<Section style={messageBox}>
							<Text style={messageTitle}>Client Message</Text>
							<Text style={messageContent}>{message}</Text>
						</Section>

						<Button href={`mailto:${email}`} style={button}>
							Reply to Client
						</Button>
					</Section>

					<Hr style={hrStyle} />

					{/* Footer */}
					<Section style={footer}>
						<Text style={footerText}>Cheryl Towey</Text>
						<Text style={footerAddress}>
							1381 Main Street, Suite 01 | St. Helena, California
							94574
						</Text>
						<Text style={footerContact}>
							415.735.8779 | arthur.goodrich@sothebys.realty
						</Text>

						{/* Sotheby's Logo in footer */}
						<Section
							style={{
								textAlign: "center",
								margin: "25px auto 20px"
							}}>
							<Img
								src={sothebysLogoUrl}
								width="140"
								height="50"
								alt="Sotheby's International Realty"
								style={{ margin: "0 auto" }}
							/>
						</Section>

						<Text style={footerCopyright}>
							© {new Date().getFullYear()} Cheryl Towey
						</Text>
						<Text style={footerNote}>
							This is an automated notification. Please do not
							reply to this email.
						</Text>
					</Section>

					{/* Bottom margin space */}
					<Section style={{ height: "60px" }} />
				</Container>
			</Body>
		</Html>
	);
};

export default AdminNotificationEmail;

// Styles
const main = {
	backgroundColor: "#f9f9f9",
	fontFamily: '"Helvetica Neue", "Playfair Display", serif',
	padding: "30px 0",
	color: "#414141"
};

const container = {
	backgroundColor: "#ffffff",
	margin: "0 auto",
	maxWidth: "600px",
	border: "1px solid #efefef",
	boxShadow: "0 1px 5px rgba(0, 0, 0, 0.03)"
};

const headerLineStyle = {
	borderBottom: "1px solid #f0f0f0",
	maxWidth: "60%",
	margin: "0 auto",
	height: "1px"
};

const heading = {
	fontSize: "32px",
	color: "#333333",
	fontWeight: "300",
	textAlign: "center" as const,
	letterSpacing: "2px",
	marginBottom: "30px",
	marginTop: "40px",
	fontFamily: '"Playfair Display", "Times New Roman", serif'
};

const section = {
	padding: "0 70px"
};

const text = {
	fontSize: "15px",
	lineHeight: "1.7",
	color: "#4c4c4c",
	margin: "24px 0 30px",
	fontWeight: "300",
	letterSpacing: "0.2px",
	textAlign: "center" as const
};

const infoBox = {
	padding: "30px",
	backgroundColor: "#fcfcfc",
	border: "1px solid #f0f0f0",
	borderRadius: "0",
	margin: "35px 0"
};

const infoTitle = {
	fontSize: "18px",
	fontWeight: "300",
	color: "#333333",
	margin: "0 0 25px",
	borderBottom: "1px solid #eaeaea",
	paddingBottom: "12px",
	textAlign: "center" as const,
	letterSpacing: "1px",
	fontFamily: '"Playfair Display", "Times New Roman", serif'
};

const infoGrid = {
	width: "100%"
};

const infoRow = {
	display: "flex",
	marginBottom: "16px"
};

const infoLabelContainer = {
	width: "90px",
	flexShrink: 0
};

const infoValueContainer = {
	flex: 1
};

const infoLabel = {
	fontSize: "14px",
	fontWeight: "500",
	color: "#505050",
	margin: "0",
	letterSpacing: "0.5px"
};

const infoValue = {
	fontSize: "14px",
	color: "#4c4c4c",
	margin: "0",
	fontWeight: "300",
	letterSpacing: "0.2px"
};

const messageBox = {
	padding: "30px",
	backgroundColor: "#fcfcfc",
	border: "1px solid #f0f0f0",
	borderRadius: "0",
	margin: "35px 0"
};

const messageTitle = {
	fontSize: "18px",
	fontWeight: "300",
	color: "#333333",
	margin: "0 0 25px",
	borderBottom: "1px solid #eaeaea",
	paddingBottom: "12px",
	textAlign: "center" as const,
	letterSpacing: "1px",
	fontFamily: '"Playfair Display", "Times New Roman", serif'
};

const messageContent = {
	fontSize: "14px",
	lineHeight: "1.7",
	color: "#4c4c4c",
	margin: "0",
	whiteSpace: "pre-wrap",
	fontWeight: "300",
	letterSpacing: "0.2px"
};

const button = {
	backgroundColor: "#4a4a4a",
	color: "#ffffff",
	fontSize: "13px",
	fontWeight: "400",
	textDecoration: "none",
	textAlign: "center" as const,
	display: "block",
	padding: "12px 30px",
	borderRadius: "0",
	margin: "50px auto",
	width: "200px",
	maxWidth: "100%",
	letterSpacing: "1.5px",
	textTransform: "uppercase" as const
};

const hrStyle = {
	borderTop: "1px solid #f0f0f0",
	borderRight: "none",
	borderBottom: "none",
	borderLeft: "none",
	width: "80%",
	margin: "50px auto 30px"
};

const footer = {
	padding: "0 70px 20px",
	textAlign: "center" as const
};

const footerText = {
	fontSize: "13px",
	lineHeight: "1.5",
	color: "#6e6e6e",
	textAlign: "center" as const,
	margin: "8px 0",
	fontWeight: "400",
	letterSpacing: "0.5px"
};

const footerAddress = {
	fontSize: "13px",
	lineHeight: "1.5",
	color: "#909090",
	textAlign: "center" as const,
	margin: "4px 0",
	fontWeight: "300",
	letterSpacing: "0.5px"
};

const footerContact = {
	fontSize: "13px",
	lineHeight: "1.5",
	color: "#909090",
	textAlign: "center" as const,
	margin: "4px 0 0",
	fontWeight: "300",
	letterSpacing: "0.5px"
};

const footerCopyright = {
	fontSize: "12px",
	lineHeight: "1.5",
	color: "#b0b0b0",
	textAlign: "center" as const,
	margin: "30px 0 8px",
	fontWeight: "300",
	letterSpacing: "0.5px"
};

const footerNote = {
	fontSize: "12px",
	lineHeight: "1.5",
	color: "#b0b0b0",
	textAlign: "center" as const,
	fontStyle: "italic",
	margin: "8px 0 0",
	fontWeight: "300",
	letterSpacing: "0.2px"
};
