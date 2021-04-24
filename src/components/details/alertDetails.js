import React from 'react'
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiDescriptionList,
    EuiTitle
} from '@elastic/eui'
import { formatDate } from '@elastic/eui/lib/services/format'
import AgentDetail from './agentDetails'
import RuleDetail from './ruleDetails'

const AlertDetails = ({alertData, showAgent = true, showRule = true}) => {
    const listItems = [
        {
            title: "@sampledata",
            description: alertData["@sampledata"] ? "True" : "False"
        },
        {
            title: "Date and time",
            description: formatDate(alertData.timestamp)
        },
        {
            title: "Manager",
            description: alertData.manager.name
        },
        {
            title: "Cluster",
            description: alertData.cluster.name
        },
        {
            title: "Id",
            description: alertData.id
        },
        {
            title: "Predecoder",
            description: JSON.stringify(alertData.predecoder)
        },
        {
            title: "Decoder",
            description: JSON.stringify(alertData.decoder)
        },
        {
            title: "Location",
            description: alertData.location
        },
        {
            title: "Syscheck",
            description: JSON.stringify(alertData.syscheck)
        },

    ]
    return <EuiFlexGroup>
        <EuiFlexItem>
            <EuiDescriptionList 
                listItems={listItems}
                type="responsiveColumn"
            />
        </EuiFlexItem>
        
        {showAgent ? 
        <EuiFlexItem>
            <EuiPanel>
                <EuiTitle size="m" text><h1>Agent</h1></EuiTitle>
                <AgentDetail agentData={alertData.agent} />
            </EuiPanel>
        </EuiFlexItem>
        : null}
        {showRule ? 
        <EuiFlexItem>
            <EuiPanel>
                <EuiTitle size="m"><h1>Rule</h1></EuiTitle>
                <RuleDetail ruleData={alertData.rule} />
            </EuiPanel>
        </EuiFlexItem>
        : null}
    </EuiFlexGroup>
}

export default AlertDetails