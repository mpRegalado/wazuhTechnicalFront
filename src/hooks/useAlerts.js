import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useAlerts = (offset,limit,id) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [alerts, setAlerts] = useState(null);

    useEffect(()=>{
        if(loading) {
            DataEndpoint.getAlerts(offset,limit,id)
                .then(response => {
                    setAlerts(response.data);
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
        alerts
    }
}

export default useAlerts