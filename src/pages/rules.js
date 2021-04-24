import React from 'react'
import RuleTable from '../components/tables/ruleTable';
import useRules from '../hooks/useRules'

const Rules = props => {
    const {rules, error, loading} = useRules(0,0);
    return <RuleTable
        rules={rules}
        loading={loading}
        error={error}
    />
}

export default Rules