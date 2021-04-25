import moment from 'moment-timezone';
import React, { useState } from 'react'
import TimeDistribution from '../components/charts/timeDistribution';
import {EuiPanel} from '@elastic/eui'

import AlertTable from '../components/tables/alertTable';
import useAlerts from '../hooks/useAlerts';
import { MapTimestampsToArray } from '../lib/dataMapper';
import AsyncWrapper from '../components/hoc/asyncWrapper';

const Alerts = props => {
    const [idFilter,setIdFilter] = useState(null);
    const {alerts, error, loading} = useAlerts(0,0,idFilter);

    const histogramData = MapTimestampsToArray(alerts);
    return (
        <>
            <EuiPanel>
                <AsyncWrapper loading={loading} error={error}>
                    <TimeDistribution data={histogramData}/>
                </AsyncWrapper>
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