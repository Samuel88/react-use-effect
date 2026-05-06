import { useEffect } from "react";

function Dialog() {
    useEffect(() => {
        console.log("Dialog useEffect: setup");

        return () => {
            console.log("Dialog useEffect: cleanup");
        };
    }, []);

    return <div>Dialog aperto</div>;
}

export default Dialog;