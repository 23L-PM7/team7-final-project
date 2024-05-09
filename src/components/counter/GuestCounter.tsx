import { useState } from "react"
import Counter from "./Counter";
import { Typography } from "@mui/joy";

export function GuestCounter() {
    let [adultNumber, setAdultNumber] = useState(0);
    let [childrenNumber, setChildrenNumber] = useState(0);
    let [infantNumber, setInfantNumber] = useState(0);
    let [petNumber, setPetsNumber] = useState(0);

    function handleAdultNumber(number) {
        setAdultNumber(number);
    }

    function handleChildrenNumber(number) {
        setChildrenNumber(number);
    }

    function handleInfantNumber(number) {
        setInfantNumber(number);
    }

    function handlePetNumber(number) {
        setPetsNumber(number);
    }

    return (
        <div>
            <div>
                <Typography>Adult</Typography>
                <Counter handleNumber={handleAdultNumber}/>
            </div>
            <div>
                <Typography>Children</Typography>
                <Counter handleNumber={handleChildrenNumber}/>
            </div>
            <div>
                <Typography>Infant</Typography>
                <Counter handleNumber={handleInfantNumber}/>
            </div>
            <div>
                <Typography>Pets</Typography>
                <Counter handleNumber={handlePetNumber}/>
            </div>
        </div>
    )
}