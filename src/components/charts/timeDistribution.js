import React, {useState, useEffect, useMemo} from 'react'
import {
    Chart,
    Settings,
    BarSeries,
    Axis,
    timeFormatter,
    niceTimeFormatByDay
} from '@elastic/charts'
import { dateFormatAliases, formatDate } from '@elastic/eui/lib/services/format'
import DateHistogram from '../../lib/dateHistogram'
import moment from 'moment-timezone'
import { 
    EuiDatePicker
} from '@elastic/eui'

const TimeDistribution = ({data, height = 200}) => {
    const histogram = useMemo (() => new DateHistogram(data),[data])
    const [displayDate, setDisplayDate] = useState(moment());
    //We format the dates in our data so 
    const dateData = histogram.getDailyHistogram(displayDate).map((value) => {return {date:value.date.format(),count:value.count}});

    const onDateChange = (date) => {
        setDisplayDate(date);
    };

    useEffect(() => {
        setDisplayDate(histogram.getNewest());
    },[histogram])


    return (
        <div>
            <div>
                <Chart size={{height: height}}>
                    <Settings
                        showLegend={false}
                    />
                    <BarSeries
                        id="alertHistogram"
                        name="Alerts"
                        data={dateData}
                        xScaleType="time"
                        yScaleType="linear"
                        xAccessor={"date"}
                        yAccessors={["count"]}
                        
                    />
                    
                    <Axis
                        title={`Distribution of alerts on: ${formatDate(moment(displayDate).toDate(), dateFormatAliases.date)}`}
                        id="bottom-axis"
                        position="bottom"
                        tickFormat={timeFormatter(niceTimeFormatByDay(1))}
                        
                    />
                    <Axis
                        id="left-axis"
                        position="left"
                        showGridLines
                    />
                </Chart>
            </div>
            <div>
                <EuiDatePicker 
                    selected={displayDate}
                    onChange={onDateChange}
                    minDate={histogram.getOldest()}
                    maxDate={histogram.getNewest()}
                />
            </div>
        </div>
    )
}

export default TimeDistribution