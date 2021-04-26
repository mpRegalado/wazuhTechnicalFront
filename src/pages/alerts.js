import React, { useState } from 'react'
import TimeDistribution from '../components/charts/timeDistribution';
import {EuiPanel} from '@elastic/eui'

import AlertTable from '../components/tables/alertTable';
import useAlerts from '../hooks/useAlerts';
import { MapTimestampsToArray } from '../lib/dataMapper';
import AsyncWrapper from '../components/hoc/asyncWrapper';

const Alerts = props => {
    const [idFilter,setIdFilter] = useState(null);
    const {alerts, error, loading} = useAlerts();

    const histogramData = MapTimestampsToArray(alerts);
    return (
        <AsyncWrapper loading={loading} error={error}>
            <EuiPanel>
                <TimeDistribution data={histogramData}/>
            </EuiPanel>
            <EuiPanel>
                <AlertTable 
                    alerts={alerts}
                    idFilter={idFilter}
                    setIdFilter={setIdFilter}
                />
            </EuiPanel>
        </AsyncWrapper>
    )
}

export default Alerts