import React from "react";

import { Details } from "./Details";
import { Signup } from "@components/User/Signup";

import "../index.css";

export const App = () => {
    // useEffect(() => {
    //     const testFetch = async () => {
    //         const data = await axios.get("http://localhost:3000/test/12");
    //         console.log(data);
    //     };
    //     testFetch();
    // }, []);

    return (
        <div>
            <h2>Hello mebay!</h2>
            <p>Another paragrapjh</p>
            <p>Another one</p>
            <p>and again!</p>
            <span>Seriusly is this it?@</span>
            <Details text={"Neil Berg"} />
            <Signup />
        </div>
    );
};
