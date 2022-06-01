import React from "react";
import './DaysGridHeader.scss';
import AgendaContext from "../AgendaContext";
import DayHeader from "../DayHeader";

export default class DaysGridHeader extends React.Component {

    static contextType = AgendaContext;

    /**
     * Generate the headers based on first day and day number
     */
    generateDayHeaders() {

        const { firstDay, daysNumber, resources, dateService, currentDate } = this.context

        const dates = dateService.generateDatesForPeriod(firstDay, daysNumber, currentDate)

        let dayHeaderBlocks = []

        if (resources.length > 0) {
            for (let i = 0; i < resources.length; i++) {
                for (let j = 0; j < dates.length; j++) {
                    dayHeaderBlocks.push(
                        <DayHeader key={`${i}-${j}`} date={dates[j]} resource={resources[i]}></DayHeader>
                    )
                }
            }
        } else {
            for (let i = 0; i < dates.length; i++) {
                dayHeaderBlocks.push(
                    <DayHeader key={i} date={dates[i]}></DayHeader>
                )
            }
        }

        return dayHeaderBlocks
    }

    render() {

        const { dateService } = this.context

        return (
            <div className="fra-header-row">
                <div className="fra-time-column-header">
                    <span className="fra-timezone-label">{dateService.getTimeZoneAbbreviationName()}</span>
                </div>
                {this.generateDayHeaders()}
            </div>
        )
    }

}