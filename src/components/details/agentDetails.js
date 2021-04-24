import React from 'react'
import {
    EuiDescriptionList
} from '@elastic/eui'

const AgentDetail = ({agentData}) => {
    const listItems = [
        {
            title:"Id",
            description:agentData.id,
        },
        {
            title:"Name",
            description:agentData.name,
        },
        {
            title:"Ip",
            description:agentData.ip,
        },
    ]
    return <EuiDescriptionList 
        listItems={listItems}
        type="responsiveColumn"
    />
}
export default AgentDetail