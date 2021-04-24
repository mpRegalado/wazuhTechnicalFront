import React, { useState } from 'react'

import AlertTable from '../components/tables/alertTable';
import useAlerts from '../hooks/useAlerts';

const Alerts = props => {
    const [idFilter,setIdFilter] = useState(null);
    const {alerts, error, loading} = useAlerts(0,0,idFilter);
    return <AlertTable 
        alerts={alerts}
        error={error}
        loading={loading}
        idFilter={idFilter}
        setIdFilter={setIdFilter}
    />
}

export default Alerts