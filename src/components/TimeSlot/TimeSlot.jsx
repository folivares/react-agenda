import React from "react";
import PropTypes from 'prop-types';
import './TimeSlot.scss';
import { DEFAULT_TIMESLOT_VALUE } from "../../utils/constants";
import { calculateMinutesOfDayFromTimeSlot, calculateMinutesOfTimeSlotBlock, calculatePositionFromClick } from "../../utils/helpers";
import AgendaContext from "../AgendaContext";

export default class TimeSlot extends React.Component {

    static contextType = AgendaContext;

    constructor(props) {
        super(props)
    }

    /**
     * Calculate numbers of blocks based on minutes of every timeslot
     */
    calculateTimeslotValue() {
        if (this.props.timeslot) {
            return (Math.round(60 / this.props.timeslot));
        } else {
            return DEFAULT_TIMESLOT_VALUE;
        }
    }

    /**
     * Generate items for timeslot group based on interval
     */
    getTimeslotBlocks() {
        const timeslotValue = this.calculateTimeslotValue();
        let timeslotBlocks = [];
        for (let i = 0; i < timeslotValue; i++) {
            const currentTimeslotValue = calculateMinutesOfTimeSlotBlock(i, timeslotValue);
            timeslotBlocks.push(
                <div key={i} className="fra-time-slot-item" onClick={(e) => this.handleClick(e, this.props.time, this.props.timeslot, currentTimeslotValue, this.props.day, this.props.resource)}>
                    {i == 0 && null != this.props.timeLabel && (
                        <span className="fra-time-slot-label">{this.props.timeLabel}</span>
                    )
                    }
                </div>
            );
        }
        return timeslotBlocks;
    }


    handleClick(e, timeslotGroupStartTime, timeslotSingleBlockMinutes, timeslotCurrentBlockMinutes, day, resource = null) {
        const { onTimeslotClick } = this.context;
        const y = calculatePositionFromClick(e);
        const minutes = calculateMinutesOfDayFromTimeSlot(timeslotGroupStartTime, timeslotSingleBlockMinutes, timeslotCurrentBlockMinutes, y);
        if (!!onTimeslotClick) {
            onTimeslotClick({
                timeslotGroupMinutes: timeslotGroupStartTime,
                timeslotBlockMinutes: timeslotSingleBlockMinutes,
                day: day.toISOString(),
                minutes,
                resource
            });
        }
    }

    render() {
        return (
            <div className="fra-time-slot-container">
                {this.getTimeslotBlocks()}
            </div>
        )
    }

}

TimeSlot.propTypes = {
    time: PropTypes.number,
    timeslot: PropTypes.number,
    timeLabel: PropTypes.string,
    day: PropTypes.instanceOf(Date),
    resource: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }),
}