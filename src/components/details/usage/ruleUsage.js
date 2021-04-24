import React from 'react'
import {
    EuiLoadingChart,
    EuiFlexItem,
    EuiFlexGroup,
    EuiTitle,
    EuiAccordion
} from '@elastic/eui'
import { formatDate } from '@elastic/eui/lib/services/format';
import AlertDetails from '../alertDetails';
import useRule from '../../../hooks/useRule';
import RuleDetail from '../ruleDetails';

const RuleUsage = ({ruleID}) => {
    const { rule,loading,error } = useRule(ruleID);

    let render = <p>Nothing Here</p>
    if (loading){
        render = <EuiLoadingChart />
    } else if(error) {
        render = <p>ERROR: {error}</p>
    
    } else {
        render = (
            <EuiFlexGroup>
                <EuiFlexItem>
                    <RuleDetail ruleData={rule} />
                </EuiFlexItem>
                <EuiFlexItem>
                    <EuiTitle size="m"><h1>Total alerts: {rule.total_alerts}</h1></EuiTitle>
                    <div>
                        {
                            rule.alerts.map((alert) => {
                                return (
                                <EuiAccordion 
                                    key={alert.uid}
                                    buttonContent={`${formatDate(alert.timestamp)}: ${alert.rule.description}`}
                                >
                                    <AlertDetails alertData={alert} showRule={false} />
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

export default RuleUsage