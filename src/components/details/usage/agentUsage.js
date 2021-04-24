import React from 'react'
import useAgent from '../../../hooks/useAgent'
import {
    EuiLoadingChart,
    EuiFlexItem,
    EuiFlexGroup,
    EuiTitle,
    EuiAccordion
} from '@elastic/eui'
import AgentDetail from '../agentDetails';
import { formatDate } from '@elastic/eui/lib/services/format';
import AlertDetails from '../alertDetails';

const AgentUsage = ({agentID}) => {
    const { agent,loading,error } = useAgent(agentID);

    let render = <p>Nothing Here</p>
    if (loading){
        render = <EuiLoadingChart />
    } else if(error) {
        render = <p>ERROR: {error}</p>
    
    } else {
        render = (
            <EuiFlexGroup>
                <EuiFlexItem>
                    <AgentDetail agentData={agent} />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiTitle size="m"><h1>Total alerts: {agent.total_alerts}</h1></EuiTitle>
                    <div>
                        {
                            agent.alerts.map((alert) => {
                                return (
                                <EuiAccordion 
                                    key={alert.uid}
                                    buttonContent={`${formatDate(alert.timestamp)}: ${alert.rule.description}`}
                                >
                                    <AlertDetails alertData={alert} showAgent={false} />
                                </EuiAccordion>)
                            })
                        }
                    </div>
                </EuiFlexItem>
           </EuiFlexGroup>
        )
    }

    return render
}

export default AgentUsage