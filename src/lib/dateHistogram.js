import moment from 'moment';
class DateHistogram {
    constructor(dates) {
        this.dates = [...dates];
    }
    getOldest = () =>{
        return moment.min(this.dates);
    }
    getNewest = () => {
        return moment.max(this.dates);
    }
    getDailyHistogram = (date) => {
        const arr = [];
        const ref = moment(date).hour(0);
        //We make sure our array has a count of 0 for every hour of the date to begin with
        for (let i = 0; i<24; i++){
            arr[i] = {
                date:moment(ref).hour(i),
                count:0
            }
        }
        //For every date in the stored array, for each hour, we count dates matching the date
        for (let key in this.dates){
            let date = this.dates[key];
            if (
                date.date() === ref.date() &&
                date.month() === ref.month() &&
                date.year() === ref.year()
            ){
                arr[date.hour()].count +=1;
            }
        };
        return arr;
    }
}

export default DateHistogram