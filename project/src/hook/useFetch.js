import { useEffect, useState } from "react"

const useFetch = url => {
    const [pending, setPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            setPending(true)
            setError(null)
            setData(null)
        
            try {
                const data = await fetch(url, { cache: "force-cache" })
                .then(response => {
                    if(!response.ok) throw new Error(response.status)
                        return response.json()
                })
                setPending(false)
                setData(data)
                setError(null)
            }

            catch(error) {
                setPending(false)
                setData(null)
                setError(error.message)
            }
        }
        
        fetchData()
    }, [url])
    
    return {pending, data, error}
}

export default useFetch