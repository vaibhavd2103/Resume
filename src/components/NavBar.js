import React from "react";
import { styles } from "../styles";
import { Colors, useWindowDimensions } from "./constants";
import { GiSkills } from "react-icons/gi";
import { BsBook, BsStars } from "react-icons/bs";
import { FaCertificate } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import "./Navbar.css";

function NavBar({ color, eduClick, skillClick }) {
  const { width, height } = useWindowDimensions();
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
          backgroundColor: color,
        }}
      >
        <a className="navbar_options" onClick={eduClick}>
          Education
        </a>
        <a className="navbar_options" onClick={skillClick}>
          Skills
        </a>

        <a className="navbar_options" onClick={eduClick}>
          Projects
        </a>
        <a className="navbar_options" onClick={eduClick}>
          Experiences
        </a>
        <a className="navbar_options" onClick={eduClick}>
          Achievements
        </a>
        <a className="navbar_options" onClick={eduClick}>
          Hobbies
        </a>
        <a className="navbar_options" onClick={eduClick}>
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
