import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useAgent = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [agent, setAgent] = useState(null);

    useEffect(()=>{
        setLoading(true)
        DataEndpoint.getAgent(id)
            .then(response => {
                setAgent(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message)
                setLoading(false);
            })
    }, [id])
    return {
        loading,
        error,
        agent
    }
}

export default useAgent