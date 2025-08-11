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

interface ContactConfirmationEmailProps {
	name: string;
	message?: string;
}

export const ContactConfirmationEmail = ({
	name = "Valued Client",
	message
}: ContactConfirmationEmailProps) => {
	// Use the CDN URL from config
	const cdnUrl = config.cdn;

	// Logo URLs from CDN
	const goodrichLogoUrl = `${cdnUrl}keytextlogogray.png`;
	const sothebysLogoUrl = `${cdnUrl}sothebysdark.png`;

	return (
		<Html>
			<Head />
			<Preview>Thank you for contacting Legendary Real Estate</Preview>
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
							alt="Legendary Real Estate"
							style={{ margin: "0 auto" }}
						/>
					</Section>

					{/* Decorative line */}
					<Section style={headerLineStyle} />

					{/* Heading */}
					<Heading style={heading}>Thank You</Heading>

					<Section style={section}>
						<Text style={salutationText}>Dear {name},</Text>
						<Text style={text}>
							We appreciate your interest in Legendary Real Estate.
							We have received your inquiry and will be in touch
							shortly.
						</Text>

						{message && (
							<>
								<Text style={messageHeader}>Your Message:</Text>
								<Text style={messageText}>
									&ldquo;{message}&rdquo;
								</Text>
							</>
						)}

						<Text style={text}>
							Legendary Real Estate delivers an unparalleled level of
							expertise and personalized service to each client.
							We look forward to assisting you with your real
							estate journey in Lake Geneva area Valley.
						</Text>

						<Button
							href="https://goodrichgroup.com/listings"
							style={button}>
							View Our Properties
						</Button>
					</Section>

					<Hr style={hrStyle} />

					{/* Footer */}
					<Section style={footer}>
						<Text style={footerText}>Legendary Real Estate</Text>
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
							© {new Date().getFullYear()} Legendary Real Estate
						</Text>

						<Text style={footerDisclaimer}>
							This email is not the official communication of
							Sotheby&apos;s International Realty®, Inc.
							Sotheby&apos;s International Realty® is a
							registered trademark licensed to Sotheby&apos;s
							International Realty Affiliates LLC. Each Office Is
							Independently Owned And Operated.
						</Text>
					</Section>

					{/* Bottom margin space */}
					<Section style={{ height: "60px" }} />
				</Container>
			</Body>
		</Html>
	);
};

export default ContactConfirmationEmail;

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

const salutationText = {
	fontSize: "17px",
	lineHeight: "1.5",
	color: "#414141",
	margin: "25px 0 20px",
	fontWeight: "500",
	letterSpacing: "0.5px"
};

const text = {
	fontSize: "15px",
	lineHeight: "1.7",
	color: "#4c4c4c",
	margin: "24px 0",
	fontWeight: "300",
	letterSpacing: "0.2px"
};

const messageHeader = {
	fontSize: "15px",
	color: "#505050",
	marginTop: "35px",
	marginBottom: "8px",
	fontStyle: "italic",
	fontWeight: "400",
	letterSpacing: "0.2px"
};

const messageText = {
	fontSize: "15px",
	lineHeight: "1.7",
	color: "#4c4c4c",
	margin: "0 0 24px",
	padding: "24px",
	backgroundColor: "#fcfcfc",
	borderLeft: "2px solid #e6e6e6",
	fontStyle: "italic",
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

const footerDisclaimer = {
	fontSize: "10px",
	lineHeight: "1.5",
	color: "#b8b8b8",
	textAlign: "center" as const,
	fontWeight: "300",
	letterSpacing: "0.2px",
	maxWidth: "450px",
	margin: "8px auto 0"
};
