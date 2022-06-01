import React from "react";
import './DaysGridContent.scss';
import AgendaContext from "../AgendaContext";
import TimeColumn from "../TimeColumn";
import DaysGridView from "../DaysGridView";
import TimeSlot from "../TimeSlot";
import { MINUTES_IN_HOUR } from "../../utils/constants";

export default class DaysGridContent extends React.Component {

    static contextType = AgendaContext;

    /**
     * Generate TimeSlot for the range time specified
     * Every slot is one hour long
     */
    generateTimeTables() {
        const { startTime, endTime, timeslot } = this.context
        let times = []
        let currentTime = startTime
        while (currentTime <= endTime) {
            times.push(<TimeSlot key={currentTime} time={currentTime} timeslot={timeslot}></TimeSlot>)
            currentTime += MINUTES_IN_HOUR
        }

        return times
    }

    render() {

        return (
            <div className="fra-content-row">
                <TimeColumn>
                    {this.generateTimeTables()}
                </TimeColumn>
                <DaysGridView>
                    {this.generateTimeTables()}
                </DaysGridView>
            </div>
        )
    }

}