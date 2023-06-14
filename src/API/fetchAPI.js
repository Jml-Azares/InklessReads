import { useState, useEffect } from "react";

export const useFetch = ({ url }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data))
            .then(() => setLoading(false));
    }, []);

    return {
        data,
        loading,
    };
};
