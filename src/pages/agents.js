import { EuiPanel} from '@elastic/eui';
import React from 'react'
import IncidenceChart from '../components/charts/incidenceChart';
import AsyncWrapper from '../components/hoc/asyncWrapper';

import AgentTable from '../components/tables/agentTable';
import useAgents from '../hooks/useAgents';
import { MapLabelToAlerts } from '../lib/dataMapper';

const Agents = props => {
    const {agents, error, loading} = useAgents();
    const data = MapLabelToAlerts(agents,"name");
    return (
        <AsyncWrapper loading={loading} error={error}>
            <EuiPanel>                
                <IncidenceChart 
                    title="Alerts per agent"
                    data={data}
                />
            </EuiPanel>
            <EuiPanel>
                <AgentTable
                    agents={agents}
                    loading={loading}
                    error={error}
                />
            </EuiPanel>
        </AsyncWrapper>
    )
}

export default Agents