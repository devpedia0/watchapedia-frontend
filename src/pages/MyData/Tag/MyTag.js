import React, { useState, useEffect } from "react";
import ReactWordcloud from "react-wordcloud";
import api from "../../../services/api";

import words from "./dummyTag";
const options = {
    colors: ["#ff2f6e"],
    enableTooltip: false,
    deterministic: true,
    fontSizes: [17, 17],
    fontStyle: "normal",
    fontWeight: "bold",
    padding: 10,
    rotations: 0,
    transitionDuration: 0,
};

export default function MyTag() {
    //const [tag, setTag] = useState({}); // api key 값 바꿔달라고 하기
    const [, setTag] = useState({}); // api key 값 바꿔달라고 하기
    useEffect(() => {
        const id = JSON.parse(localStorage.getItem("id"));
        const getData = async () => {
            const response = await api.get(`/users/${id}/analysis`);
            console.log("useEffect", response.data.movie.tag);
            setTag(() => response.data.movie.tag);
            // const words = tag;
        };
        getData();
    }, []);

    return (
        <div style={{ height: 300, width: 300 }}>
            <ReactWordcloud options={options} words={words} />
        </div>
    );
}