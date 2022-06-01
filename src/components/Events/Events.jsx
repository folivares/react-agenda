import React from "react";
import './Events.scss';
import { MINUTES_IN_HOUR } from "../../utils/constants";
import { calculateMinutesFromPosition, calculatePositionFromClick } from "../../utils/helpers";
import AgendaContext from "../AgendaContext";
import EventCard from "../EventCard";

export default class Events extends React.Component {

    static contextType = AgendaContext;

    /**
     * Calculate top percentage and height percentage
     * for the card of a specific event
     * 
     */
    calculateEventCardSize(event) {
        const { startTime, endTime, dateService } = this.context;
        const startMinutes = dateService.calculateMinutesFromMidnight(event.startDate);
        const endMinutes = dateService.calculateMinutesFromMidnight(event.endDate);
        const normalizedStartTime = startMinutes - startTime;
        const normalizedTotalEndTime = (endTime + MINUTES_IN_HOUR) - startTime;
        const top = (normalizedStartTime / normalizedTotalEndTime) * 100;
        const height = ((endMinutes - startMinutes) / normalizedTotalEndTime) * 100;

        return { top, height };
    }

    /**
     * Create event cards and put its on agenda
     * Discard events that not matches with
     * the range time of the agenda
     * 
     */
    generateEventCards() {
        const eventCards = [];
        if (!!this.props.events && this.props.events.length > 0) {
            for (const event of this.props.events) {
                const { top, height } = this.calculateEventCardSize(event);

                let classNames = [];

                if (top <= 100 && (top + height) >= 0) {
                    const topPercentage = top + "%";

                    let heightPercentage = height + "%";

                    if (top + height > 100) {
                        heightPercentage = (100 - top) + "%";
                        classNames.push("no-end-today");
                    }

                    eventCards.push(<EventCard
                        key={event.id}
                        className={classNames.join(" ")}
                        style={{ top: topPercentage, height: heightPercentage, backgroundColor: event.color }} event={event}>
                    </EventCard>);
                }

            }
        }
        return eventCards
    }

    onTimeslotClick(e, day) {
        const { startTime, onTimeslotClick } = this.context;
        if (!!onTimeslotClick) {
            const y = calculatePositionFromClick(e);
            const minutes = calculateMinutesFromPosition(y, startTime);
            onTimeslotClick({
                day: day.toISOString(),
                minutes
            });
        }
    }

    render() {

        return (
            <div className="fra-events-container" onClick={(e) => this.onTimeslotClick(e, this.props.date)}>
                {this.generateEventCards()}
            </div>
        )
    }

}