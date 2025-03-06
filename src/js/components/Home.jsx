import React, { useState } from "react";

// Include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// Create your first component
const Home = () => {
    const [color, setColor] = useState("red");

    const Click = () => {
        if (color === "red") {
            setColor("yellow");
        } else if (color === "yellow") {
            setColor("green");
        } else {
            setColor("red");
        }
    };

	const Clicked = () => {
		if (color === "green"){
			setColor("purple")
		}
	};

    return (
        <div className="text-center">
            <div className="trafficLight">
                <div className="container">
                    <div className={`circle ${color === "red" ? "red-glow" : ""}`}></div>
                    <div className={`circle ${color === "yellow" ? "yellow-glow" : ""}`}></div>
                    <div className={`circle ${color === "green" ? "green-glow" : ""}`}></div>
					<div className={`circle ${color === "green" ? "purple-glow" : ""}`}></div>
                </div>
                <button onClick={Click} onclick={Clicked} className="btn bg-danger">
					<img src="https://img.icons8.com/?size=60&id=107514&format=png" />
				</button>
				
            </div>
        </div>
    );
};

export default Home;
