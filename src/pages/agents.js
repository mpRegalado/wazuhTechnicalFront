import { EuiPanel, EuiLoadingChart } from '@elastic/eui';
import React from 'react'
import IncidenceChart from '../components/charts/incidenceChart';

import AgentTable from '../components/tables/agentTable';
import useAgents from '../hooks/useAgents';

const Agents = props => {
    const {agents, error, loading} = useAgents(0,0);
    let data = [];
    if (!loading && !error){
        data = agents.data.map((agent) => {
            return {
                label: agent.name,
                count: agent.total_alerts
            }
        })
    }
    let chart = null;
    if(loading){
        chart = <EuiLoadingChart />
    } else if (!error) {
        chart = (
            <IncidenceChart 
                title="Alerts per agent"
                data={data}
            />
        )
    }
    return (
        <>
            <EuiPanel>
                {chart}
            </EuiPanel>
            <EuiPanel>
                <AgentTable
                    agents={agents}
                    loading={loading}
                    error={error}
                />
            </EuiPanel>
        </>
    )
}

export default Agents