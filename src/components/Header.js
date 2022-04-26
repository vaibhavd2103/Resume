import React from "react";
import { styles } from "../styles";
import NavBar from "./NavBar";

function Header() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				width: "100vw",
				marginTop: 40,
			}}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
				}}
			>
				<img
					src={require("../assets/profile.jpeg")}
					style={styles.profileImage}
				/>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						marginLeft: 10,
					}}
				>
					<a style={styles.name}>
						<span style={{ color: "#89a" }}>
							Hey!{" "}
							<img
								src={require("../assets/handwave.png")}
								className="hello_image"
							/>{" "}
							<br />
							I'm
						</span>{" "}
						<span style={{ textShadow: "2px 4px 5px #000" }}>
							Vaibhav Dange
						</span>
					</a>
					<a style={styles.bio}>
						Computer engineering student, software developer and a sports
						enthusiast...
					</a>
				</div>
			</div>
		</div>
	);
}

export default Header;
