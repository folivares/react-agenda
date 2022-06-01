import { createDateWithTime } from "../helpers/utils";


export const todayEvents = [
    {
        id: "1",
        title: "Read news",
        subtitle: "Good morning!",
        startDate: createDateWithTime(9, 0),
        endDate: createDateWithTime(9, 30),
    },
    {
        id: "2",
        title: "Run is fun",
        subtitle: "",
        startDate: createDateWithTime(10, 0),
        endDate: createDateWithTime(11, 30),
    },
    {
        id: "3",
        title: "Lunch",
        subtitle: "Remember to eat a fruit",
        startDate: createDateWithTime(13, 0),
        endDate: createDateWithTime(14, 0),
    },
    {
        id: "4",
        title: "Meeting",
        subtitle: "",
        startDate: createDateWithTime(15, 0),
        endDate: createDateWithTime(18, 0),
    },
    {
        id: "5",
        title: "Dinner",
        subtitle: "",
        startDate: createDateWithTime(20, 0),
        endDate: createDateWithTime(21, 0),
    }

]

export const tomorrowEvents = [
    {
        id: "6",
        title: "Kick-off meeting",
        subtitle: "Send link to all partecipants",
        startDate: createDateWithTime(9, 25, 1),
        endDate: createDateWithTime(11, 10, 1),
    },
    {
        id: "7",
        title: "Minuta",
        subtitle: "",
        startDate: createDateWithTime(11, 15, 1),
        endDate: createDateWithTime(11, 45, 1),
    },
    {
        id: "8",
        title: "Call with devs",
        startDate: createDateWithTime(12, 30, 1),
        endDate: createDateWithTime(13, 0, 1),
    },
    {
        id: "9",
        title: "Test new features",
        subtitle: "",
        startDate: createDateWithTime(14, 0, 1),
        endDate: createDateWithTime(15, 30, 1),
    },
    {
        id: "10",
        title: "Dinner",
        subtitle: "",
        startDate: createDateWithTime(20, 0, 1),
        endDate: createDateWithTime(21, 0, 1),
    }

]

export const fourDaysFromNowEvents = [
    {
        id: "11",
        title: "Go to airport",
        subtitle: "Passport",
        startDate: createDateWithTime(8, 15, 4),
        endDate: createDateWithTime(8, 45, 4),
    },
    {
        id: "12",
        title: "Card with custom color",
        subtitle: "Use hex",
        startDate: createDateWithTime(10, 0, 4),
        endDate: createDateWithTime(11, 30, 4),
        color: "#a1790d"
    },
    {
        id: "13",
        title: "<select><option>Custom code</option><select/>",
        subtitle: "HTML",
        startDate: createDateWithTime(13, 0, 4),
        endDate: createDateWithTime(14, 0, 4),
    },
    {
        id: "14",
        title: "Meeting",
        subtitle: "",
        startDate: createDateWithTime(15, 0, 4),
        endDate: createDateWithTime(18, 0, 4),
    },
    {
        id: "15",
        title: "Dinner",
        subtitle: "",
        startDate: createDateWithTime(20, 0, 4),
        endDate: createDateWithTime(21, 0, 4),
    }

]