import React from 'react'

import AgentTable from '../components/tables/agentTable';
import useAgents from '../hooks/useAgents';

const Agents = props => {
    const {agents, error, loading} = useAgents(0,0);
    return <AgentTable
        agents={agents}
        loading={loading}
        error={error}
    />
}

export default Agents