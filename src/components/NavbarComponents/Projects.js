import React from "react";
import { styles } from "../../styles";
import { Colors, useWindowDimensions } from "../constants";

function Projects() {
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
			<a style={{ ...styles.sectionTitle }}>Projects</a>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ app :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							A native app which delivers data and trailers of all movies. This
							project is related to the MOVEEZ-website. The app's front-end is
							being made by react-native and back-end is handled by firebase.
							The same API TMDB is used to get the required data. This app has
							the same theme as of website, and again tried to make a better UI
							than other movie apps out there.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/MovieApp");
							}}
						>
							https://github.com/vaibhavd2103/MovieApp
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
				<div style={{ padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							fontSize: 18,
							margin: 0,
							// marginBottom: 0,
						}}
					>
						MOVEEZ website :{" "}
						<span
							style={{
								opacity: 0.5,
								fontSize: 16,
								textShadow: "none",
							}}
						>
							An entertainment website which consists all movies and their
							information. The front-end is being made by ReactJS and backend is
							handled by firebase. The information source for the movies was
							delivered from TMDB (The Movie Data Base). It resembles netflix,
							but I tried to make it more elegant.
							<br />
							The link for source code : {"  "}
						</span>
						<span
							style={{
								fontSize: 16,
								cursor: "pointer",
								color: Colors.primary,
							}}
							onClick={() => {
								window.open("https://github.com/vaibhavd2103/moveez-website");
							}}
						>
							https://github.com/vaibhavd2103/moveez-website
						</span>
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects;
