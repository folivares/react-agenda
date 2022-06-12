import { MINUTES_IN_HOUR } from "./constants";

export const calculateMinutesOfTimeSlotBlock = (blockIndex, totalBlocks) => {
    return Math.round(((blockIndex + 1) / totalBlocks) * MINUTES_IN_HOUR);
}

export const calculateMinutesOfDayFromTimeSlot = (timeslotGroupStartTime, timeslotSingleBlockMinutes, timeslotCurrentBlockMinutes, currentPosition) => {
    const minutesInBlock = timeslotCurrentBlockMinutes - (timeslotSingleBlockMinutes - currentPosition);
    return timeslotGroupStartTime + minutesInBlock;
}

export const calculatePositionFromClick = (clickEvent) => {
    let rect = clickEvent.currentTarget.getBoundingClientRect();
    let y = clickEvent.clientY - rect.top;
    return y;
}

export const calculateMinutesFromPosition = (position, agendaStartTime) => {
    return position + agendaStartTime;
}

export const filterEventsByDate = (events, date) => {
    return events?.filter(event => event?.startDate?.toDateString() === date?.toDateString());
}

export const filterEventsByResource = (events, resourceId) => {
    return events?.filter(event => event?.resourceId === resourceId);
}

export const filterEventsByResourceAndDate = (events, date, resourceId) => {
    return events?.filter(event => (event?.startDate?.toDateString() === date?.toDateString() && event?.resourceId === resourceId));
}