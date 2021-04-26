import { 
    EuiPanel
} from '@elastic/eui';
import React from 'react'
import IncidenceChart from '../components/charts/incidenceChart';
import AsyncWrapper from '../components/hoc/asyncWrapper';
import RuleTable from '../components/tables/ruleTable';
import useRules from '../hooks/useRules'
import { MapLabelToAlerts } from '../lib/dataMapper';

const Rules = props => {
    const {rules, error, loading} = useRules();
    const data = MapLabelToAlerts(rules,"description");
    return (
        <>
            <EuiPanel>
                <AsyncWrapper loading={loading} error={error}>
                    <IncidenceChart 
                        title="Alerts per rule"
                        data={data}
                    />
                </AsyncWrapper>
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