export const createDateWithTime = (hours, minutes, daysToAdd = 0) => {
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const date = new Date(todayYear, todayMonth, todayDay, hours, minutes);
    return new Date(date.setDate(date.getDate() + daysToAdd));
};