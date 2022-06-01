import React from "react";
import PropTypes from 'prop-types';
import './EventCard.scss';
import { convertMinutesToDuration } from "../../utils/time";
import AgendaContext from "../AgendaContext";

export default class EventCard extends React.Component {

    static contextType = AgendaContext;

    calculateTotalTimeInMinutes() {
        const { dateService } = this.context;
        let startMinutes = dateService.calculateMinutesFromMidnight(this.props.event.startDate);
        let endMinutes = dateService.calculateMinutesFromMidnight(this.props.event.endDate);
        return endMinutes - startMinutes;
    }

    calculateFontSize() {
        const { timeslot } = this.context;
        let fontSizeClass = "font-size-normal";
        const totalTimeMinutes = this.calculateTotalTimeInMinutes();
        if (totalTimeMinutes <= (timeslot * 2)) {
            fontSizeClass = "font-size-medium";
        }
        if (totalTimeMinutes <= timeslot) {
            fontSizeClass = "font-size-small";
        }
        return fontSizeClass;
    }

    getTotalDuration() {
        const totalTimeMinutes = this.calculateTotalTimeInMinutes();
        return convertMinutesToDuration(totalTimeMinutes)
    }

    eventClicked(e) {
        let { onEventClick } = this.context;
        e.stopPropagation()
        if (!!onEventClick) {
            onEventClick(this.props.event)
        }
    }

    render() {


        return (
            <div className={`fra-event-card ${this.props.className}`} onClick={(e) => this.eventClicked(e)} style={this.props.style}>
                <span className={`fra-event-card-title ${this.calculateFontSize()}`} dangerouslySetInnerHTML={{ __html: this.props.event.title }} />
                <span className={`fra-event-card-subtitle ${this.calculateFontSize()}`} dangerouslySetInnerHTML={{ __html: this.props.event.subtitle}}>
                </span>
                <span className="fra-event-card-time">
                    {this.getTotalDuration()}
                </span>
            </div>
        )
    }

}

EventCard.propTypes = {
    style: PropTypes.shape({
        top: PropTypes.string,
        height: PropTypes.string,
        backgroundColor: PropTypes.string
    }),
    event: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        resourceId: PropTypes.string,
        color: PropTypes.string
    })
}