import React from 'react'
import {
    EuiDescriptionList
} from '@elastic/eui'

const RuleDetail = ({ruleData}) => {
    const listItems = [
        {
            title:"Fired Times",
            description:ruleData.firedtimes,
        },
        {
            title:"Mail",
            description:ruleData.mail ? "True":"False",
        },
        {
            title:"Level",
            description:ruleData.level,
        },
        {
            title:"Pci dss",
            description:JSON.stringify(ruleData.pci_dss),
        },
        {
            title:"Hipaa",
            description:JSON.stringify(ruleData.hipaa),
        },
        {
            title:"Description",
            description:ruleData.description,
        },
        {
            title:"Groups",
            description:JSON.stringify(ruleData.groups),
        },
        {
            title:"Id",
            description:ruleData.id,
        },
        {
            title:"nist 800 53",
            description:JSON.stringify(ruleData["nist_800_53"]),
        },
        {
            title:"gpg13",
            description:JSON.stringify(ruleData.gpg13),
        },
        {
            title:"gdpr",
            description:JSON.stringify(ruleData.gdpr),
        },
    ]
    return <EuiDescriptionList 
        listItems={listItems}
        type="responsiveColumn"
    />
}
export default RuleDetail