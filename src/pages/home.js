import {
    EuiPageContent,
    EuiPanel,
    EuiText,
    EuiPageHeader,
    EuiFlexGroup,
    EuiFlexItem,
    EuiButton
} from '@elastic/eui'
import IncidenceChart from '../components/charts/incidenceChart';
import TimeDistribution from '../components/charts/timeDistribution';
import AsyncWrapper from '../components/hoc/asyncWrapper';
import useAgents from '../hooks/useAgents';
import useAlerts from '../hooks/useAlerts';
import useLink from '../hooks/useLink';
import useRules from '../hooks/useRules';
import { MapLabelToAlerts, MapTimestampsToArray } from '../lib/dataMapper';

const Home = props => {
    const {alerts, loading: alertsLoading, error: alertsError} = useAlerts();
    const {agents, loading: agentsLoading, error: agentsError} = useAgents();
    const {rules, loading: rulesLoading, error: rulesError} = useRules();
    const { linkTo } = useLink();
    return (
        <>
            <EuiPageHeader
                pageTitle="Welcome to your monitoring station!"
                description="In this page you will be able to review your logs"
                iconType="logoKibana"
                iconProps={{"size":"xxl"}}
            />
            <EuiPageContent>
                <EuiFlexGroup direction="column">
                    <EuiFlexItem>
                        <EuiPanel>
                            <EuiFlexGroup
                                direction="column"
                                justifyContent="center"
                            >
                                <EuiFlexItem>
                                    <EuiText textAlign="center">
                                        Find all your alerts and easily browse through them.
                                    </EuiText>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <AsyncWrapper loading={alertsLoading} error={alertsError}>
                                        <TimeDistribution data={MapTimestampsToArray(alerts)}/>
                                    </AsyncWrapper>
                                </EuiFlexItem>
                                <EuiFlexItem>
                                    <EuiButton {...linkTo('/alerts')} fullWidth>See your alerts here</EuiButton>
                                </EuiFlexItem>
                                
                            </EuiFlexGroup>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiFlexGroup>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiText textAlign="center">
                                        See all the active agents in your system and their activity.
                                    </EuiText>
                                    <AsyncWrapper loading={agentsLoading} error={agentsError}>
                                        <IncidenceChart data={MapLabelToAlerts(agents,"name")} title="" />
                                    </AsyncWrapper>
                                    <EuiButton {...linkTo('/agents')} fullWidth>See your agents here</EuiButton>
                                </EuiPanel>
                            </EuiFlexItem>
                            <EuiFlexItem>
                                <EuiPanel>
                                    <EuiText textAlign="center">
                                        Examine all your rules and how often they are used.
                                    </EuiText>
                                    <AsyncWrapper loading={rulesLoading} error={rulesError}>
                                        <IncidenceChart data={MapLabelToAlerts(rules,"description")} title="" />
                                    </AsyncWrapper>
                                    <EuiButton fullWidth {...linkTo('/rules')}>See your rules here</EuiButton>
                                </EuiPanel>
                            </EuiFlexItem>
                        </EuiFlexGroup>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageContent>
        </>
    )
}
export default Home