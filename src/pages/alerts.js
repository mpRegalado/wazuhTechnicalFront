import moment from 'moment-timezone';
import React, { useState } from 'react'
import TimeDistribution from '../components/charts/timeDistribution';
import {EuiPanel} from '@elastic/eui'

import AlertTable from '../components/tables/alertTable';
import useAlerts from '../hooks/useAlerts';

const Alerts = props => {
    const [idFilter,setIdFilter] = useState(null);
    const {alerts, error, loading} = useAlerts(0,0,idFilter);

    let histogramData = [];
    if (!loading && !error){
        histogramData = alerts.data.map((value) => moment(value.timestamp));
    }
    return (
        <>
            <EuiPanel>
                <TimeDistribution data={histogramData}/>
            </EuiPanel>
            <EuiPanel>
                <AlertTable 
                    alerts={alerts}
                    error={error}
                    loading={loading}
                    idFilter={idFilter}
                    setIdFilter={setIdFilter}
                />
            </EuiPanel>
        </>
    )
}

export default Alerts