export const convertMinutesToTimeString = (minutes) => {
    if (null != minutes && minutes >= 0) {
        let m = minutes % 60;
        let h = (minutes - m) / 60;
        return h.toString() + ':' + (m < 10 ? '0' : '') + m.toString();
    }
    return 'Invalid minutes number'
}

export const convertTimeStringToMinutes = (timeString) => {
    if (!!timeString && timeString.indexOf(':') > -1) {
        const arr = timeString.split(':');
        const h = parseInt(arr[0]);
        const m = parseInt(arr[1]);
        return h * 60 + m;
    }
    return 'Invalid timeString value'
}

export const convertMinutesToDuration = (minutes) => {
    const d = Number(minutes);
    var h = Math.floor(d / 60).toString();
    var m = Math.floor(d % 60).toString();
    if (h >= 1) {
        return [h, 'h', ' ', m.padStart(2, '0'), 'm'].join('');
    }
    return `${m} m`
}