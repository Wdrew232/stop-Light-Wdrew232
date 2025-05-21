import React, { useState, useEffect } from "react";

const Home = () => {
    const [color, setColor] = useState("red");
    const [purpleActive, setPurpleActive] = useState(false);
    const colors = ["red", "yellow", "green"];

    useEffect(() => {
        const interval = setInterval(() => {
            setColor((prevColor) => {
                const nextIndex = (colors.indexOf(prevColor) + 1) % colors.length;
                return colors[nextIndex];
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const activatePurple = () => {
        setPurpleActive(!purpleActive);
    };

    return (
        <div className="trafficContainer">
            {/* Main Stoplight */}
            <div className="pole"></div>
            <div className="trafficLight">
                <div className="Lights">
                    {colors.map((c) => (
                        <div key={c} className={`circle ${color === c ? `${c}-glow` : ""}`}></div>
                    ))}
                </div>
            </div>

            {/* Purple Light Below */}
            <div className="purpleSection">
                <div className={`circle ${purpleActive ? "purple-glow" : ""}`}></div>
                <button onClick={activatePurple} className="btn bg-purple">
                    Toggle Light
                </button>
            </div>
        </div>
    );
};

export default Home;
