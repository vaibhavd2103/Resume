import React from "react";
import { styles } from "../../styles";
import { useWindowDimensions } from "../constants";
import { GiPentarrowsTornado } from "react-icons/gi";
import "./Skills.css";

function Skills() {
	const { width, height } = useWindowDimensions();
	return (
		<div
			style={{
				width: width,
				margin: 20,
				display: "flex",
				flexDirection: "column",
				position: "relative",
			}}
		>
			<a style={styles.sectionTitle}>Skills</a>
			<a
				style={{
					...styles.sectionTitle,
					opacity: 0.5,
					marginTop: 0,
					fontSize: 20,
					marginBottom: 0,
					// textAlign: "center",
					// marginLeft: 0,
				}}
			>
				Technical Skills
			</a>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					paddingInline: 20,
					// justifyContent: "center",
					width: width,
					overflowX: "scroll",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/react-native.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>ReactJs</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/html.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>HTML</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/flutter.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Flutter</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/css.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>CSS</a>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/react-native.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>React-Native</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/firebase.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Firebase</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/aws.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>AWS</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/mongodb.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>MongoDB</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/node.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Node</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/graphql.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>GraphQl</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/python.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Python</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/javascript.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Javascript</a>
				</div>
			</div>
			<a
				style={{
					...styles.sectionTitle,
					opacity: 0.5,
					marginTop: 20,
					fontSize: 20,
					marginBottom: 0,
					// textAlign: "center",
					// marginLeft: 0,
				}}
			>
				Designing Skills
			</a>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					paddingInline: 20,
					// justifyContent: "center",
					width: width,
					overflowX: "scroll",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/adobeXd.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Adobe Xd</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/figma.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Figma</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/photoshop.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Adobe Photoshop</a>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						//   marginRight: 20,
						alignItems: "center",
						margin: 10,
					}}
				>
					<img
						src={require("../../assets/lightroom.png")}
						style={{
							height: 100,
							width: 100,
							objectFit: "contain",
						}}
						className="skill_image"
					/>
					<a>Adobe Lightroom</a>
				</div>
			</div>
			<a
				style={{
					...styles.sectionTitle,
					opacity: 0.5,
					marginTop: 20,
					fontSize: 20,
					marginBottom: 20,
					// textAlign: "center",
					// marginLeft: 0,
				}}
			>
				Soft Skills
			</a>
			<div
				style={{
					display: "inline-block",
					paddingInline: 20,
					// alignSelf: "center",
					// maxWidth: 800,
					width: "70vw",
				}}
			>
				<a style={styles.skills}>Communication</a>
				<a style={styles.skills}>Adaptability</a>
				<a style={styles.skills}>Visual thinking</a>
				<a style={styles.skills}>Creativity</a>
				<a style={styles.skills}>Enthusiasm</a>
				<a style={styles.skills}>Collaboration</a>
				<a style={styles.skills}>Leadership</a>
				<a style={styles.skills}>Negotiation</a>
				<a style={styles.skills}>Patience</a>
				<a style={styles.skills}>Time management</a>
			</div>
		</div>
	);
}

export default Skills;
