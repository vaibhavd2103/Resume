import React from "react";
import { styles } from "../../styles";
import { Colors, useWindowDimensions } from "../constants";
import "./Education.css";

function Education() {
	const { width, height } = useWindowDimensions();
	return (
		<div
			style={{
				width: width,
				margin: 20,
				display: "flex",
				flexDirection: "column",
				objectFit: "repeat",
				position: "relative",
				//    opacity: 0.3,
				//    backgroundImage:
				//      "url(https://www.teahub.io/photos/full/190-1905414_books-library-wallpaper-hd-wallpapers-for-pc-book.jpg)",
			}}
		>
			{/* <img
        src="https://www.teahub.io/photos/full/190-1905414_books-library-wallpaper-hd-wallpapers-for-pc-book.jpg"
        style={{
          width: width,
          objectFit: "repeat",
          position: "absolute",
          opacity: 0.3,
          // height: (1200000 * 1.6) / width,
          // maxHeight: 1200,
        }}
      /> */}
			<a style={styles.sectionTitle}>Education</a>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginBottom: 20,
					backgroundColor: "rgba(0,0,0,0.2)",
					// backdropFilter: "blur(5px)",
					width: width - 40,
					alignSelf: "center",
					borderRadius: 20,
					padding: 20,
				}}
			>
				<div style={{ ...styles.educationCard }}>
					<a
						style={{
							...styles.details,
						}}
						className="w3-animate-left details"
					>
						Current Education :{" "}
						<span style={{ color: Colors.primary, fontWeight: "bold" }}>
							Bachelor of Engineering , Computer Engineering (2019 - 2023)
						</span>
					</a>
					<a style={{ ...styles.details, color: Colors.yellow }}>
						Dhole Patil College of Engineering
					</a>
					<img
						src="https://dpcoepune.edu.in/wp-content/uploads/2019/12/college.jpg"
						style={{
							width: "40vw",
							objectFit: "contain",
							borderRadius: 20,
							maxWidth: 800,
							marginTop: 10,
						}}
						className="w3-animate-left"
					/>
				</div>
				<div
					style={{
						marginLeft: 20,
						paddingRight: 20,
					}}
				>
					<a
						style={{
							color: "white",
							paddingRight: 10,
							zIndex: 5,
							fontSize: 16,
						}}
					>
						Dhole Patil College of Engineering (DPCOE) is a leading Engineering
						College in Pune, Maharashtra, India. The Institute was founded in
						2008 with the objective of providing quality technical education of
						International standards and to help students to match contemporary
						global requirements. Young and dynamic Shri. Sagar Dhole Patil, a
						visionary entrepreneur and sportsman founded DPCOE. He is backed by
						a rich history and social development activities of his family – the
						Dhole Patils. Today, the institution is at the forefront of
						education including academics, sports and social activity, among the
						Pune colleges. DPCOE has infrastructure, technical support and
						facilities comparable to the best in the country.
					</a>
					<a
						style={{
							color: Colors.primary,
							paddingRight: 10,
							zIndex: 5,
							fontWeight: "bold",
						}}
						href="https://www.google.com/maps/@18.555001,73.9615233,3a,75y,209.12h,77.08t/data=!3m6!1e1!3m4!1sAF1QipPfQG38JT-PsYhzIkD-vGmKPbz9lfqhU3qO9RQ9!2e10!7i13312!8i6656"
					>
						Have a virtual tour!
					</a>
				</div>
			</div>
			<div
				style={{
					...styles.educationCard,
					alignSelf: "center",
					marginBottom: 20,
					width: width - 40,
				}}
			>
				<a
					style={{
						...styles.details,
					}}
					className="w3-animate-left details"
				>
					Senior Secondary (XII) :{" "}
					<span style={{ color: Colors.primary, fontWeight: "bold" }}>
						Ashok Vidyalaya (2017 - 2019){" "}
					</span>
				</a>
				<a style={{ ...styles.details, color: Colors.yellow }}>
					Ashok Vidyalaya, Tilak Road, Deccan, Pune
				</a>
				<div
					style={{
						//     marginLeft: 20,
						maxWidth: width,
						paddingRight: 20,
					}}
				>
					<a
						style={{
							color: "white",
							paddingRight: 10,
							zIndex: 5,
							fontSize: 16,
							//     maxWidth: width,
						}}
					>
						ASHOK VIDYALAYA was established in 1966 and it is managed by the
						Pvt. Aided. It is located in Urban area. It is located in Bibwewadi
						block of PUNE district of Maharashtra. The school consists of Grades
						from 5 to 12. The school is Co-educational and it doesn't have an
						attached pre-primary section. The school is N/A in nature and is not
						using school building as a shift-school. Marathi is the medium of
						instructions in this school. This school is approachable by all
						weather road. In this school academic session starts in April. The
						school has Rented building. It has got 5 classrooms for
						instructional purposes. All the classrooms are in good condition. It
						has 2 other rooms for non-teaching activities. The school has a
						separate room for Head master/Teacher. The school has Pucca boundary
						wall. The school has have electric connection. The source of
						Drinking Water in the school is Tap Water and it is functional. The
						school has 5 boys toilet and it is functional. and 3 girls toilet
						and it is functional. The school has a playground. The school has a
						library and has 10000 books in its library. The school does not need
						ramp for disabled children to access classrooms. The school has 25
						computers for teaching and learning purposes and all are functional.
						The school is not having a computer aided learning lab. The school
						is Provided but not Prepared in School Premises providing mid-day
						meal.
					</a>
					<a
						style={{
							color: Colors.primary,
							paddingRight: 10,
							zIndex: 5,
							fontWeight: "bold",
						}}
						href="https://no1afspune.kvs.ac.in/"
					>
						Know more !
					</a>
				</div>
			</div>
			<div
				style={{
					...styles.educationCard,
					alignSelf: "center",
					marginBottom: 20,
					width: width - 40,
				}}
			>
				<a
					style={{
						...styles.details,
					}}
					className="w3-animate-left details"
				>
					Secondary (X) :{" "}
					<span style={{ color: Colors.primary, fontWeight: "bold" }}>
						Kendriya Vidyalaya No.1 (2007 - 2017){" "}
					</span>
				</a>
				<a style={{ ...styles.details, color: Colors.yellow }}>
					Kendriya Vidyalaya No.1, Lohegaon, Pune
				</a>
				<div
					style={{
						//     marginLeft: 20,
						maxWidth: width,
						paddingRight: 20,
					}}
				>
					<a
						style={{
							color: "white",
							paddingRight: 10,
							zIndex: 5,
							fontSize: 16,
							//     maxWidth: width / 2,
						}}
					>
						Kendriya Vidyalaya No. 1, AFS, PUNE came into existence in
						salubrious environs in the month of September 1965 to provide an
						opportunity through quality education. A co-educational school with
						unity in diversity is affiliated to Central Board of Secondary
						Education (CBSE). Students take the AISSE (class X) and AISSCE
						(class XII) Exam in the month of March every year.
					</a>
					<a
						style={{
							color: Colors.primary,
							paddingRight: 10,
							zIndex: 5,
							fontWeight: "bold",
						}}
						href="https://no1afspune.kvs.ac.in/"
					>
						Know more !
					</a>
				</div>
			</div>
		</div>
	);
}

export default Education;
