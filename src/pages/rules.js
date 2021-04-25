import { 
    EuiLoadingChart,
    EuiPanel
} from '@elastic/eui';
import React from 'react'
import IncidenceChart from '../components/charts/incidenceChart';
import RuleTable from '../components/tables/ruleTable';
import useRules from '../hooks/useRules'

const Rules = props => {
    const {rules, error, loading} = useRules(0,0);
    let data = [];
    if (!loading && !error){
        data = rules.data.map((rule) => {
            return {
                label: `${rule.description}`,
                count: rule.total_alerts
            }
        })
    }
    let chart = null;
    if(loading){
        chart = <EuiLoadingChart />
    } else if (!error) {
        chart = (
            <IncidenceChart 
                title="Alerts per rule"
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
                <RuleTable
                    rules={rules}
                    loading={loading}
                    error={error}
                />
            </EuiPanel>
        </>
    )
}

export default Rules