import React, { useState } from "react";
import "./PhotosModal.css";

function PhotosModal({ photoModal }) {
	const [fullPhoto, setFullPhoto] = useState("");
	const images = [
		{ name: require("../assets/photo_candle.jpg") },
		{ name: require("../assets/ball.jpg") },
		{ name: require("../assets/amanora.jpg") },
		{ name: require("../assets/autumn_leaffall.jpg") },
		{ name: require("../assets/flower_in_hand.jpg") },
		{ name: require("../assets/bulb.jpg") },
		{ name: require("../assets/landscape.jpg") },
		{ name: require("../assets/fire_trails.jpg") },
		{ name: require("../assets/cork.jpg") },
		{ name: require("../assets/eye.jpg") },
		{ name: require("../assets/photo_bird.jpg") },
		{ name: require("../assets/hibiscus_dark.jpg") },
		{ name: require("../assets/photo_lamp.jpg") },
		{ name: require("../assets/photo_love.jpg") },
		{ name: require("../assets/pink_flower.jpg") },
		{ name: require("../assets/piyu.jpg") },
		{ name: require("../assets/space.jpg") },
		{ name: require("../assets/star_tree_college.jpg") },
		{ name: require("../assets/sun_rays_leaves.jpg") },
		{ name: require("../assets/sunset_trees.jpg") },
		{ name: require("../assets/tree_bark.jpg") },
		{ name: require("../assets/white_flower.jpg") },
		{ name: require("../assets/tree_bottomup.jpg") },
		{ name: require("../assets/water_drop.jpg") },
	];

	return (
		<>
			<div
				className="photos_modal_container"
				style={{
					transform: photoModal ? "scale(1)" : "scale(0)",
					opacity: photoModal ? 1 : 0,
				}}
			>
				{images.map((item) => {
					return (
						// <a>{item.name}</a>
						<img
							src={item.name}
							className="photos"
							onClick={() => {
								setFullPhoto(item.name);
							}}
						/>
					);
				})}
			</div>
			{fullPhoto !== "" ? (
				<div className="backdrop" onClick={() => setFullPhoto("")}>
					<img
						src={fullPhoto}
						style={{ height: "90vh", objectFit: "contain" }}
						className="full_photo"
					/>
				</div>
			) : null}
		</>
	);
}

export default PhotosModal;
