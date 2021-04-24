import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useAgents = (offset,limit) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [agents, setAgents] = useState(null);

    useEffect(()=>{
        setLoading(true)
        DataEndpoint.getAgents(offset,limit)
            .then(response => {
                setAgents(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message)
                setLoading(false);
            })
    }, [offset,limit,id])
    return {
        loading,
        error,
        agents
    }
}

export default useAgents