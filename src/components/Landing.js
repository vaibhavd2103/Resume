import React, { useEffect, useRef, useState } from "react";
import { styles } from "../styles";
import { Colors, useWindowDimensions } from "./constants";
import Header from "./Header";
import NavBar from "./NavBar";
import Education from "./NavbarComponents/Education";
import Skills from "./NavbarComponents/Skills";

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
      {/* <Header /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100vw",
          marginTop: 40,
        }}
      >
        <NavBar
          color={window.scrollY > 1000 ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.8)"}
          eduClick={() => eduRef.current.scrollIntoView()}
          skillClick={() => skillRef.current.scrollIntoView()}
        />
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
      <div ref={eduRef}>
        <Education />
      </div>
      <div ref={skillRef}>
        <Skills />
      </div>
    </div>
  );
}

export default Landing;
