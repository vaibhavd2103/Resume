import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Colors, useWindowDimensions } from "./constants";
import Header from "./Header";
import NavBar from "./NavBar";
import Education from "./NavbarComponents/Education";
import Hobbies from "./NavbarComponents/Hobbies";
import Skills from "./NavbarComponents/Skills";
import "./Landing.css";
import Projects from "./NavbarComponents/Projects";

// const useMountEffect = (fun) => useEffect(fun, []);

function Landing() {
	const [color, setColor] = useState(false);

	useEffect(() => {
		const changeBackground = () => {
			console.log(window.scrollTop);
			if (window.scrollTop >= 300) {
				setColor(true);
			} else {
				setColor(false);
			}
		};
		changeBackground();
		// adding the event when scroll change background
		window.addEventListener("scroll", changeBackground);
	});
	const eduRef = useRef(null);
	const skillRef = useRef(null);
	const hobRef = useRef(null);
	const proRef = useRef(null);

	const executeScroll = () => eduRef.current.scrollIntoView(); // run this function from an event handler or pass it to useEffect to execute scroll

	//   useMountEffect(executeScroll); // Scroll on mount
	const { width, height } = useWindowDimensions();
	return (
		<div
			style={{
				...styles.container,
				width,
			}}
		>
			<NavBar
				color={window.scrollY > 1000 ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.8)"}
				eduClick={() => eduRef.current.scrollIntoView()}
				skillClick={() => skillRef.current.scrollIntoView()}
				hobClick={() => hobRef.current.scrollIntoView()}
				proClick={() => proRef.current.scrollIntoView()}
			/>
			<Header />

			<div ref={eduRef}>
				<Education />
			</div>
			<div ref={skillRef}>
				<Skills />
			</div>
			<div ref={proRef}>
				<Projects />
			</div>
			<div ref={hobRef}>
				<Hobbies />
			</div>
		</div>
	);
}

export default Landing;
