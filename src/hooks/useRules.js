import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useRules = (offset,limit) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rules, setRules] = useState(null);

    useEffect(()=>{
        if(loading) {
            DataEndpoint.getRules(offset,limit)
                .then(response => {
                    setRules(response.data);
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
        rules
    }
}

export default useRules