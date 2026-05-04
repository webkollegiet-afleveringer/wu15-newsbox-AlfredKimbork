import { useEffect, useState } from "react"

const useFetch = (url, key) => {
    const [pending, setPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setPending(true)
            setError(null)
            setData(null)
        
            try {
                const data = await fetch(url, key)
                    .then(response => {
                        if (!response.ok) throw new Error(response.status);

                        if (response.headers.get("content-type").includes("application/json")) return response.json();
                            else if (response.headers.get("content-type").includes("application/text")) return response.text();
                    })
                setPending(false);
                setData(data);
                setError(null);

                if (key) {
                    sessionStorage.setItem(key, JSON.stringify(data));
                    /* get time now (in ms) and add time (ms, s, m)*/
                    sessionStorage.setItem (`${key}_exp`, JSON.stringify(Date.now() + 1000 * 60 * 1));
                }
            }

            catch(error) {
                setPending(false);
                setData(null);
                setError(error.message);
            }
        }

        const cache = sessionStorage.getItem(key);
        const cacheExp = sessionStorage.getItem(`${key}_exp`);

        if(cache && JSON.parse(cacheExp) > Date.now()) {
            setPending(false);
            setData(JSON.parse(cache));    
        } else {
            fetchData();
        }
        
    }, [url, key])
    
    return {pending, data, error}
}

export default useFetch