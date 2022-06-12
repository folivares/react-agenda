import { DAYS_IN_WEEK } from "../utils/constants"

export default class DateService {

    locale;
    timezone;

    /**
     * 
     * @param {string} locale BCP 47 tag 
     * @param {string} timeZone IANA timezone https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
     */
    constructor(locale = undefined, timeZone = undefined) {
        this.locale = this.isValidLocale(locale) ? locale : undefined;
        this.timeZone = this.isValidTimeZone(timeZone) ? timeZone : undefined;
    }

    isValidLocale = (locale) => {
        try {
            Intl.getCanonicalLocales(locale);
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    isValidTimeZone = (timeZone) => {
        try {
            Intl.DateTimeFormat(undefined, { timeZone });
            return true;
        }
        catch (e) {
            console.log(e);
            return false;
        }
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    getDateWithTimeZone = (date) => {
        return new Date(date.toLocaleString('en-US', { timeZone: this.timeZone }));
    }

    getDateAtMidnight = (date) => {
        return new Date(date.setHours(0, 0, 0, 0));
    }

    calculateMinutesFromMidnight = (date) => {
        const endDate = this.getDateWithTimeZone(new Date(date));
        const startDate = this.getDateAtMidnight(new Date(endDate));
        const diffTime = endDate - startDate;
        const minutesFromMidnight = Math.round(diffTime / 1000 / 60);
        return minutesFromMidnight;
    }

    addDaysToDate = (days, date) => {
        return new Date(date.setDate(date.getDate() + days));
    }

    /**
     * Get the start date of the agenda based on first day and days number of the view
     * 
     * Returns current date if it's within range, next available date otherwise
     * 
     * @param {number} firstDay First day of the agenda view
     * @param {number} daysNumber Total days in agenda view
     * @returns {Date} Start date of the agenda view
     */
    getAgendaStartDay = (firstDay, daysNumber) => {
        let startDay = this.getDateWithTimeZone(new Date());
        const currentDay = startDay.getDay();
        const today = this.getToday();

        if (firstDay < 0) {
            return startDay;
        }

        if (this.isDayInDatesRange(today.getDay(), firstDay, daysNumber)) {
            return startDay;
        } else {
            const daysToAdd = Math.abs(firstDay - currentDay);
            startDay = this.addDaysToDate(daysToAdd, startDay);
        }

        return startDay;
    }

    /**
     * Generate dates for period based on:
     * - first day of the day grid view
     * - total number of the days to be shown on the grid view
     * 
     * @param {number} firstDay First day of the agenda view
     * @param {number} daysNumber Total days in agenda view
     * @param {Date} currentDate 
     * @returns {Date[]} list of dates
     */
    generateDatesForPeriod = (firstDay, daysNumber, currentDate) => {
        let dates = [];
        let currentDay = currentDate.getDay();
        firstDay = firstDay < 0 ? currentDay : firstDay;
        const todayDay = this.getToday().getDay();

        if (this.isDayInDatesRange(todayDay, firstDay, daysNumber) && currentDay == todayDay) {
            const cDate = new Date(currentDate);
            const deltaForFirstDay = this.isDayInCurrentWeekRange(todayDay, firstDay, daysNumber) ?
                (todayDay - firstDay)
                : (DAYS_IN_WEEK - firstDay) + todayDay;
            const startDate = new Date(cDate.setDate(cDate.getDate() - deltaForFirstDay));
            for (let i = 0; i < daysNumber; i++) {
                const cDate = new Date(startDate);
                const otherDayDate = new Date(cDate.setDate(cDate.getDate() + i));
                dates.push(otherDayDate);
            }
        } else {
            let startDay = firstDay < 0 ? 0 : firstDay;
            for (let i = startDay; i < (startDay + daysNumber); i++) {
                const delta = Math.abs(i - currentDay);
                const cDate = new Date(currentDate);
                const otherDayDate = new Date(cDate.setDate(cDate.getDate() + delta));
                dates.push(otherDayDate);
            }
        }
        return dates;
    }

    calculateOffset = (firstDay, currentDate) => {
        const currentDay = currentDate.getDay();
        const offset = currentDay - firstDay;
        return offset;
    }

    incrementDatesPeriod = (firstDay, daysNumber, currentDate) => {
        let daysToAdd = daysNumber;
        if (firstDay >= 0) {
            const offset = this.calculateOffset(firstDay, currentDate);
            daysToAdd = offset >= 0 ? DAYS_IN_WEEK - offset : Math.abs(offset);
        }
        return this.addDaysToDate(daysToAdd, currentDate);
    }

    decrementDatesPeriod = (firstDay, daysNumber, currentDate) => {
        let daysToSubtract = daysNumber;
        if (firstDay >= 0) {
            const offset = this.calculateOffset(firstDay, currentDate);
            daysToSubtract = (offset > 0 ? DAYS_IN_WEEK + offset : DAYS_IN_WEEK - Math.abs(offset));
        }
        daysToSubtract *= -1;
        return this.addDaysToDate(daysToSubtract, currentDate);
    }

    getToday = () => {
        return this.getDateWithTimeZone(new Date());
    }

    isToday = (date) => {
        const today = this.getDateWithTimeZone(new Date());
        return today.toDateString() === date.toDateString();
    }

    getWeekRange = (firstDay, daysNumber) => {
        const rangePeriod = firstDay + daysNumber;
        return rangePeriod;
    }

    extractCurrentWeekRange = (firstDay, daysNumber) => {
        const rangePeriod = this.getWeekRange(firstDay, daysNumber);
        const rangeCurrentWeek = rangePeriod > DAYS_IN_WEEK ? DAYS_IN_WEEK : rangePeriod;
        return rangeCurrentWeek;
    }

    extractNextWeekRange = (firstDay, daysNumber) => {
        const rangeNextWeek = daysNumber - (DAYS_IN_WEEK - firstDay);
        return rangeNextWeek;
    }

    isDayInCurrentWeekRange = (day, firstDay, daysNumber) => {
        const rangeCurrentWeek = this.extractCurrentWeekRange(firstDay, daysNumber);
        if (day >= firstDay && day < rangeCurrentWeek) {
            return true;
        }
        return false;
    }

    isDayInNextWeekRange = (day, firstDay, daysNumber) => {
        const rangePeriod = this.getWeekRange(firstDay, daysNumber);
        const rangeNextWeek = this.extractNextWeekRange(firstDay, daysNumber);
        if (rangePeriod > DAYS_IN_WEEK && day >= 0 && day < rangeNextWeek) {
            return true;
        }
        return false;
    }

    /**
     * Check if a day number is included whitin the dates range
     * Evalutes this types of periods:
     * - period whitin one week (e.g.: MON - TUE - WED)
     * - period whitin two weeks (e.g.: SAT - SUN - MON)
     */
    isDayInDatesRange = (day, firstDay, daysNumber) => {
        if (firstDay < 0) return true;

        return this.isDayInCurrentWeekRange(day, firstDay, daysNumber)
            || this.isDayInNextWeekRange(day, firstDay, daysNumber);
    }

    getTimeZoneAbbreviationName = () => {
        return new Intl.DateTimeFormat(undefined, { timeZone: this.timeZone, day: '2-digit', timeZoneName: 'short' }).format(new Date()).slice(4);
    }

    getTimeZoneName = () => {
        if (undefined == this.timeZone) {
            return Intl.DateTimeFormat().resolvedOptions().timeZone;
        }
        return this.timeZone;
    }

    getFullNameFromDate = (date) => {
        if (!!date && date instanceof Date) {
            return date.toLocaleDateString(this.locale, { day: 'numeric', year: 'numeric', month: 'long' });
        }
        return 'Invalid date';
    }

    getMonthAndYearFromDate = (date) => {
        if (!!date && date instanceof Date) {
            return date.toLocaleDateString(this.locale, { year: 'numeric', month: 'long' });
        }
        return 'Invalid date';
    }

    getDayNameFromDate = (date) => {
        if (!!date && date instanceof Date) {
            return date.toLocaleDateString(this.locale, { weekday: 'short' });
        }
        return 'Invalid date';
    }

    getDayNumberFromDate = (date) => {
        if (!!date && date instanceof Date) {
            return date.toLocaleDateString(this.locale, { day: 'numeric' });
        }
        return 'Invalid date';
    }

}