import React, {useEffect, useState} from "react";
import {fetchCreatedBooster} from "../utils/booster-utils";

export default function BoosterList(){

    const [booster, setBooster] = useState();
    useEffect(()=> {
        fetchCreatedBooster()
            .then((data) => setBooster(data))
            .catch((e) => console.error(e));
    })

    return(
        <div>{booster}</div>

)

}