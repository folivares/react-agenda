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