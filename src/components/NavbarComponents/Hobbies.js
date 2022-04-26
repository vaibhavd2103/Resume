import React, { useRef, useState } from "react";
import YouTube from "react-youtube";
import { styles } from "../../styles";
import { useIntersection, useWindowDimensions } from "../constants";
import PhotosModal from "../PhotosModal";
import "./Hobbies.css";
import { RiCloseFill } from "react-icons/ri";

function Hobbies() {
	const { width, height } = useWindowDimensions();
	const opts = {
		height: "390",
		width: "640",
		playerVars: {
			// https://developers.google.com/youtube/player_parameters
			autoplay: 1,
		},
	};
	const photoRef = useRef();
	const videoRef = useRef();
	const photoInViewPort = useIntersection(photoRef, "-200px");
	const videoInViewPort = useIntersection(videoRef, "-200px");
	if (photoInViewPort) {
		// console.log("in viewport:", photoRef.current);
	}

	const [photoHover, setPhotoHover] = useState(false);
	const [photoModal, setPhotoModal] = useState(false);

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
			<a style={styles.sectionTitle}>Hobbies</a>
			<div style={{ display: "flex" }} ref={photoRef}>
				<div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							opacity: 0.5,
							marginTop: 0,
							fontSize: 20,
							marginLeft: 0,
							marginBottom: 20,
						}}
					>
						Singing
					</a>
					<div
						style={{
							opacity: photoInViewPort ? 1 : 0,
						}}
					>
						<YouTube
							videoId="XWEiCG-k_C8"
							opts={opts}
							onReady={() => {}}
							className={photoInViewPort ? "youtube_video" : ""}
						/>
					</div>
				</div>
				<div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
					<a
						style={{
							...styles.sectionTitle,
							opacity: 0.5,
							marginTop: 0,
							fontSize: 20,
							marginLeft: 0,
							marginBottom: 20,
						}}
					>
						Photography
					</a>
					{photoInViewPort && (
						<div
							style={{
								height: 390,
								width: 390,
								position: "relative",
								// opacity: photoInViewPort ? 1 : 0,
							}}
							className="photos_container"
						>
							<img
								src={require("../../assets/photo_lamp.jpg")}
								style={{
									...styles.photoPreview,
									right: photoHover ? -90 : 0,
									transform: photoHover ? "scale(0.95)" : "",
									boxShadow: "7px 7px 7px #000",
									// bottom: 0,
									// right: 0,
									// opacity: 0.5,
								}}
								className={"fourth"}
							/>
							<img
								src={require("../../assets/photo_love.jpg")}
								style={{
									...styles.photoPreview,
									right: photoHover ? -60 : 0,
									boxShadow: photoHover ? "7px 7px 7px #000" : "",
									// bottom: 10,
									// right: 10,
									// opacity: 0.5,
								}}
								className={"third"}
							/>
							<img
								src={require("../../assets/photo_bird.jpg")}
								style={{
									...styles.photoPreview,
									right: photoHover ? -30 : 0,
									transform: photoHover ? "scale(1.05)" : "",
									boxShadow: photoHover ? "7px 7px 7px #000" : "",
									// bottom: 20,
									// right: 20,
									// opacity: 0.5,
								}}
								className={photoInViewPort ? "second" : "second"}
							/>
							<img
								src={require("../../assets/photo_candle.jpg")}
								onMouseEnter={() => {
									setPhotoHover(true);
								}}
								onMouseOut={() => {
									setPhotoHover(false);
								}}
								style={{
									...styles.photoPreview,
									boxShadow: photoHover
										? "7px 10px 10px #000"
										: "7px 7px 7px #000",
									// right: photoHover ? -100 : 0,
								}}
								onClick={() => {
									setPhotoModal(true);
								}}
								className={"photography_image"}
							/>
						</div>
					)}
					{photoModal && (
						<>
							<div
								onClick={() => {
									// setPhotoModal(false);
								}}
								className="photo_modal_backdrop"
								style={{
									zIndex: photoModal ? 50 : -50,
									opacity: photoModal ? 1 : 0,
									// transform: photoModal ? "scale(1)" : "scale(0)",
								}}
							>
								<RiCloseFill
									onClick={() => {
										setPhotoModal(false);
									}}
									className="close_icon"
									size={40}
									// color={"white"}
								/>
								<PhotosModal
									photoModal={photoModal}
									setPhotoModal={setPhotoModal}
								/>
							</div>
						</>
					)}
				</div>
			</div>
			{/* <div style={{ display: "flex", flexDirection: "column", padding: 20 }}>
				<a
					style={{
						...styles.sectionTitle,
						opacity: 0.5,
						marginTop: 0,
						fontSize: 20,
						marginLeft: 0,
						marginBottom: 0,
					}}
				>
					Basketball
				</a>
			</div> */}
		</div>
	);
}

export default Hobbies;
