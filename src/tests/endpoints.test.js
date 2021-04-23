import DataEndpoint from '../lib/dataEndpoint'

it('gets alerts', async () => {
    const response = await DataEndpoint.getAlerts(0,10,[1580123327.49031]);
    expect(response.status).toEqual(200);
    expect(response.data.data.length).toEqual(10);
});

it('gets agents', async () => {
    const response = await DataEndpoint.getAgents(0,10);
    expect(response.status).toEqual(200);
});

it('gets agent by id', async () => {
    const response = await DataEndpoint.getAgent(4);
    expect(response.status).toEqual(200);
});

it('gets rules', async () => {
    const response = await DataEndpoint.getRules(0,10);
    expect(response.status).toEqual(200);
})

it('gets rule by id', async () => {
    const response = await DataEndpoint.getRule(554);
    expect(response.status).toEqual(200);
});