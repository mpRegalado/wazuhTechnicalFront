import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useRule = (id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rule, setRule] = useState(null);

    useEffect(()=>{
        if(loading) {
            DataEndpoint.getRule(id)
                .then(response => {
                    setRule(response.data);
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
        rule
    }
}

export default useRule