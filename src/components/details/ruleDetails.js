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
            description:ruleData.pci_dss.join(", "),
        },
        {
            title:"Hipaa",
            description:ruleData.hipaa.join(", "),
        },
        {
            title:"Description",
            description:ruleData.description,
        },
        {
            title:"Groups",
            description:ruleData.groups.join(", "),
        },
        {
            title:"Id",
            description:ruleData.id,
        },
        {
            title:"nist 800 53",
            description:ruleData["nist_800_53"].join(", "),
        },
        {
            title:"gpg13",
            description:ruleData.gpg13.join(", "),
        },
        {
            title:"gdpr",
            description:ruleData.gdpr.join(", "),
        },
    ]
    return <EuiDescriptionList 
        listItems={listItems}
        type="responsiveColumn"
    />
}
export default RuleDetail