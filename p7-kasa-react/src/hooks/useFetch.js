import { useEffect, useState } from "react";
export default function useFetch() {
    const [logements, setLogements] = useState([]);

    const fetchLogements = async (url) => {
        const response = await fetch("/logements.json");
        const logements = await response.json();

        setLogements(logements);
    };

    useEffect(() => {
        fetchLogements();
    }, []);
    return logements;
}
