import { useEffect, useState } from "react";
export default function useFetchLogements(url) {
    const [logements, setLogements] = useState({});

    const [isLoading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (!url) return;

        setLoading(true);

        async function fetchLogements() {
            try {
                const response = await fetch(url);

                const logements = await response.json();

                setLogements(logements);
            } catch (err) {
                console.log(err);

                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchLogements();
    }, [url]);

    return { logements, isLoading, error };
}
