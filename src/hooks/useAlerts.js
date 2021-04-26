import { useEffect, useState } from "react"
import DataEndpoint from "../lib/dataEndpoint";


const useAlerts = (offset=0,limit=0,id = null) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [alerts, setAlerts] = useState(null);

    useEffect(()=>{
        setLoading(true)
        DataEndpoint.getAlerts(offset,limit,id)
            .then(response => {
                setAlerts(response.data);
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
        alerts
    }
}

export default useAlerts