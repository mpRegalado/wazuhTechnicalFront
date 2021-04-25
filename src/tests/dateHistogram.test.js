import moment from 'moment-timezone';
import DateHistogram from '../lib/dateHistogram'

const createTestDates = () => {
    const arr = [];
    for (let i=0; i<12; i++){
        arr.push(moment([2020,i]));
        arr.push(moment([2019,i]));
    }
    return arr;
}

it('creates an object', () =>{
    const histogram = new DateHistogram(createTestDates());
    expect(histogram).toBeInstanceOf(DateHistogram);
})
it('finds earliest date', () => {
    const histogram = new DateHistogram(createTestDates());
    expect(histogram.getOldest()).toEqual(moment([2019,0]))
})
it('finds latest date', () => {
    const histogram = new DateHistogram(createTestDates());
    expect(histogram.getNewest().format()).toEqual(moment([2020,11]).format())
})
it('counts events in a day', () => {
    const testDates = [[2020,0,1,1],[2020,0,1,6],[2020,0,1,6]].map((value) => moment(value));
    const histogram = new DateHistogram(testDates);
    expect(histogram.getDailyHistogram([2020,0,1])[6].count).toEqual(2);
})