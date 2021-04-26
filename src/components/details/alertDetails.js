import React from 'react'
import {
    EuiFlexGroup,
    EuiFlexItem,
    EuiPanel,
    EuiDescriptionList,
    EuiTitle,
    EuiCodeBlock
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
            description: <EuiCodeBlock>{JSON.stringify(alertData.predecoder)}</EuiCodeBlock>
        },
        {
            title: "Decoder",
            description: <EuiCodeBlock>{JSON.stringify(alertData.decoder)}</EuiCodeBlock>
        },
        {
            title: "Location",
            description: alertData.location
        },
        {
            title: "Syscheck",
            description: <EuiCodeBlock>{JSON.stringify(alertData.syscheck)}</EuiCodeBlock>
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
                <EuiTitle size="m"><h1>Agent</h1></EuiTitle>
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