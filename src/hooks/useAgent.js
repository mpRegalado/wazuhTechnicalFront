import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useAgent = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [agent, setAgent] = useState(null);

    useEffect(()=>{
        if(loading) {
            DataEndpoint.getAgent(id)
                .then(response => {
                    setAgent(response.data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message)
                    setLoading(false);
                })
        }
    }, [offset,limit,id,loading])
    return {
        loading,
        error,
        agent
    }
}

export default useAgent