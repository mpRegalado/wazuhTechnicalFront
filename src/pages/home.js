import {
    EuiPageContent,
    EuiPanel,
    EuiText,
    EuiPageHeader,
    EuiFlexGroup,
    EuiFlexItem
} from '@elastic/eui'

const Home = props => {
    return (
        <>
            <EuiPageHeader
                pageTitle="Welcome to your monitoring station!"
                description="In this page you will be able to review your logs"
                iconType="logoKibana"
                iconProps={{"size":"xxl"}}
            />
            <EuiPageContent>
                <EuiFlexGroup>
                    <EuiFlexItem>
                        <EuiPanel>
                            <EuiText>
                                Find all your alerts and easily browse through them.
                            </EuiText>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiPanel>
                            <EuiText>
                                See all the active agents in your system and their activity.
                            </EuiText>
                        </EuiPanel>
                    </EuiFlexItem>
                    <EuiFlexItem>
                        <EuiPanel>
                            <EuiText>
                                Examine all your rules and how often they are used.
                            </EuiText>
                        </EuiPanel>
                    </EuiFlexItem>
                </EuiFlexGroup>
            </EuiPageContent>
        </>
    )
}
export default Home