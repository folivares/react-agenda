import React from "react";
import PropTypes from 'prop-types';
import './TimeSlot.scss';
import { DEFAULT_TIMESLOT_VALUE } from "../../utils/constants";

export default class TimeSlot extends React.Component {

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
            timeslotBlocks.push(
                <div key={i} className="fra-time-slot-item">
                    {i == 0 && null != this.props.timeLabel && (
                        <span className="fra-time-slot-label">{this.props.timeLabel}</span>
                    )
                    }
                </div>
            );
        }
        return timeslotBlocks;
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
    timeLabel: PropTypes.string
}