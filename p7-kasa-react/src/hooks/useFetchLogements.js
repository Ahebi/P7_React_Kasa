import { useEffect, useState } from "react";
export default function useFetchLogements(url) {
    const [Logements, setLogements] = useState({});

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        setLoading(true);

        async function fetchLogements() {
            try {
                const response = await fetch(url);

                const Logements = await response.json();

                setLogements(Logements);
            } catch (err) {
                console.log(err);

                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchLogements();
    }, [url]);

    return { Logements, isLoading, error };
}
