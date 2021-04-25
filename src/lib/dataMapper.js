import moment from 'moment-timezone'


export const MapTimestampsToArray = (alerts) => {
    try {
        return alerts.data.map((value) => moment(value.timestamp));
    } catch (TypeError) {
        return [];
    }
}
export const MapLabelToAlerts = (items,label) => {
    try {
        return items.data.map((item) => {
            return {
                label: item[label],
                count: item.total_alerts
            }
        })
    } catch (TypeError) {
        return [];
    }
}