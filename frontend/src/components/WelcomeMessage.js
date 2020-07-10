import React from 'react';
import "./WelcomeMessage.css"

export default function WelcomeMessage() {
    const myDate = new Date();
    const hrs = myDate.getHours();
    let greet = "Welcome";

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    return (
        <h2 className={"message"}> {greet},<span className={"colored"}> Christopher!</span></h2>
    )
}

