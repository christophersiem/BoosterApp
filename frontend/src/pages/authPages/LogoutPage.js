import React, {useEffect} from "react";
import {removeJWTToken} from "../../utils/jwt-utils";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router";

export default function LogoutPage() {

    const history = useHistory();
    const handleChange = () => {
        history.push(`/login`);
    };

    useEffect(() => {
            removeJWTToken()

        }, []
    )

    return (
        <>
            <h3>See you soon!</h3>
            <Button
                onClick={handleChange}>Login again</Button>
        </>

    )

}