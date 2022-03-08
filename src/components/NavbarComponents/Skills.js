import React from "react";
import { styles } from "../../styles";
import { useWindowDimensions } from "../constants";
import { GiPentarrowsTornado } from "react-icons/gi";

function Skills() {
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
      <a style={styles.sectionTitle}>Skills</a>
      <a
        style={{
          ...styles.sectionTitle,
          opacity: 0.5,
          marginTop: 0,
          fontSize: 20,
          marginBottom: 0,
          // textAlign: "center",
          // marginLeft: 0,
        }}
      >
        Technical Skills
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingInline: 20,
          // justifyContent: "center",
          width: width,
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/react-native.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>ReactJs</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/html.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>HTML</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/flutter.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Flutter</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/css.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>CSS</a>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/react-native.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>React-Native</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/firebase.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Firebase</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/aws.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>AWS</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/mongodb.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>MongoDB</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/node.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Node</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/graphql.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>GraphQl</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/python.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Python</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/javascript.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Javascript</a>
        </div>
      </div>
      <a
        style={{
          ...styles.sectionTitle,
          opacity: 0.5,
          marginTop: 20,
          fontSize: 20,
          marginBottom: 0,
          // textAlign: "center",
          // marginLeft: 0,
        }}
      >
        Designing Skills
      </a>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingInline: 20,
          // justifyContent: "center",
          width: width,
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/adobeXd.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Adobe Xd</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/figma.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Figma</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/photoshop.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Adobe Photoshop</a>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //   marginRight: 20,
            alignItems: "center",
            margin: 10,
          }}
        >
          <img
            src={require("../../assets/lightroom.png")}
            style={{
              height: 100,
              width: 100,
              objectFit: "contain",
            }}
          />
          <a>Adobe Lightroom</a>
        </div>
      </div>
      <a
        style={{
          ...styles.sectionTitle,
          opacity: 0.5,
          marginTop: 20,
          fontSize: 20,
          marginBottom: 20,
          // textAlign: "center",
          // marginLeft: 0,
        }}
      >
        Soft Skills
      </a>
      <div
        style={{
          display: "inline-block",
          paddingInline: 20,
          // alignSelf: "center",
          maxWidth: 800,
        }}
      >
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Communication
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Adaptability
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Visual thinking
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Creativity
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Enthusiasm
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Collaboration
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Leadership
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Negotiation
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Patience
        </a>
        <a style={styles.skills}>
          <GiPentarrowsTornado /> Time management
        </a>
      </div>
    </div>
  );
}

export default Skills;
