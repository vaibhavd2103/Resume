import { useState, useEffect } from "react";

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

const useIntersection = (element, rootMargin) => {
	const [isVisible, setState] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setState(entry.isIntersecting);
			},
			{ rootMargin }
		);

		element.current && observer.observe(element.current);

		return () => observer.unobserve(element.current);
	}, []);

	return isVisible;
};

const Colors = {
	background: "#0A1931",
	primary: "#1089FF",
	light: "#E5E5E5",
	grey: "#9BA4B4",
	white: "#ffffff",
	darkBlue: "#3F72AF",
	red: "#FF2626",
	yellow: "#FFC947",
};

export { useWindowDimensions, Colors, useIntersection };
