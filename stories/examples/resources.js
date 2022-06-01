import { createDateWithTime } from "../helpers/utils";

export const resources = [
    {
        id: "1",
        name: "Room A"
    },
    {
        id: "2",
        name: "Room B"
    },
    {
        id: "3",
        name: "Hall"
    }
];

export const todayResourcesEvents = [
    {
        id: "1",
        title: "Conference Call",
        subtitle: "New project",
        startDate: createDateWithTime(10, 0),
        endDate: createDateWithTime(11, 30),
        resourceId: "1"
    },
    {
        id: "2",
        title: "Internal Meeting",
        subtitle: "Dev",
        startDate: createDateWithTime(11, 0),
        endDate: createDateWithTime(12, 0),
        resourceId: "2"
    },
    {
        id: "3",
        title: "Workshop",
        subtitle: "Hands on lab",
        startDate: createDateWithTime(8, 30),
        endDate: createDateWithTime(13, 30),
        resourceId: "3"
    },
    {
        id: "4",
        title: "Marketing",
        subtitle: "",
        startDate: createDateWithTime(12, 15),
        endDate: createDateWithTime(14, 0),
        resourceId: "2"
    },
    {
        id: "5",
        title: "Sales",
        subtitle: "",
        startDate: createDateWithTime(14, 15),
        endDate: createDateWithTime(18, 0),
        resourceId: "2"
    }

];