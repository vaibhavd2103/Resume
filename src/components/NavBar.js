import React, { useState } from "react";
import { styles } from "../styles";
import { Colors, useWindowDimensions } from "./constants";
import { GiSkills } from "react-icons/gi";
import { BsBook, BsStars } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import "./Navbar.css";

function NavBar({
	color,
	eduClick,
	skillClick,
	exClick,
	proClick,
	achClick,
	hobClick,
	conClick,
}) {
	const { width, height } = useWindowDimensions();

	const [navHover, setNavHover] = useState("");

	if (width < 1100) {
		return (
			<div
				style={{
					...styles.navBarContainer,
					width: width / 2.2,
					minWidth: 300,
				}}
			>
				<BsBook color={Colors.grey} size={24} />
				<GiSkills color={Colors.grey} size={24} />
				<AiOutlineFundProjectionScreen color={Colors.grey} size={24} />
				<BsStars color={Colors.grey} size={24} />
				<FaCertificate color={Colors.grey} size={24} />
				<MdOutlineSportsBasketball color={Colors.grey} size={24} />
				<IoIosContact color={Colors.grey} size={28} />
			</div>
		);
	} else {
		return (
			<div
				style={{
					...styles.navBarContainer,
					width: width / 2,
					minWidth: 800,
					// backgroundColor: color,
				}}
			>
				<a
					className="navbar_options"
					onClick={eduClick}
					onMouseEnter={() => {
						setNavHover("edu");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "edu" ? { ...styles.navHover } : null}
				>
					Education
				</a>
				<a
					className="navbar_options"
					onClick={skillClick}
					onMouseEnter={() => {
						setNavHover("skill");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "skill" ? { ...styles.navHover } : null}
				>
					Skills
				</a>

				<a
					className="navbar_options"
					onClick={proClick}
					onMouseEnter={() => {
						setNavHover("pro");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "pro" ? { ...styles.navHover } : null}
				>
					Projects
				</a>
				<a
					className="navbar_options"
					onClick={exClick}
					onMouseEnter={() => {
						setNavHover("exp");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "exp" ? { ...styles.navHover } : null}
				>
					Experiences
				</a>
				<a
					className="navbar_options"
					onClick={achClick}
					onMouseEnter={() => {
						setNavHover("ach");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "ach" ? { ...styles.navHover } : null}
				>
					Achievements
				</a>
				<a
					className="navbar_options"
					onClick={hobClick}
					onMouseEnter={() => {
						setNavHover("hob");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "hob" ? { ...styles.navHover } : null}
				>
					Hobbies
				</a>
				<a
					className="navbar_options"
					onClick={conClick}
					onMouseEnter={() => {
						setNavHover("con");
					}}
					onMouseOut={() => {
						setNavHover("");
					}}
					style={navHover === "con" ? { ...styles.navHover } : null}
				>
					Contact me
				</a>
			</div>
		);
	}
}

export default NavBar;

{
	/*
Education,
Skills,
Achievements,
Projects,
Experiences,
Hobbies,
Contact me
*/
}
