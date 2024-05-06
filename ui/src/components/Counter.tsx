import { useEffect, useState } from "react";

function Counter({HandleNumber}) {
    let [number, setNumber] = useState(0);

    useEffect(() = {
        HandleNumber()
    }, [])

    function HandleNumber() {
        sendNumber(number)
    }

    function Minus() {
        if (number > 0) {
            number = number - 1;
            setNumber(number);
        }
    }
    function Plus() {
        number = number + 1;
        setNumber(number);
    }

    return (
        <div className="mt-4 flex justify-between">
        <button
            onClick={Minus}
            className="py-1 px-3 bg-green-500 rounded-md text-white"
        >
            -
        </button>
        <p className="font-normal">{number}</p>
        <button
            onClick={Plus}
            className="py-1 px-3 bg-green-500 rounded-md text-white"
        >
            +
        </button>
    </div>
    )
}

export default Counter;