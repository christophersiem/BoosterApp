import React from 'react';
import Alert from "@material-ui/lab/Alert";


export default function ShowAlerts({addStatus}) {

    return (
        <>
            {addStatus === "SUCCESS" && <Alert
                variant="filled" severity="success"
            > Booster successfully created :) </Alert>}
            {addStatus === "FAIL" && <Alert
                variant="filled" severity="error"
            > Check entries! </Alert>}
        </>)
};