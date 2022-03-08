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
      <NavBar />
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
            <span style={{ opacity: 0.5 }}>Hey! I'm</span> Vaibhav Dange
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
