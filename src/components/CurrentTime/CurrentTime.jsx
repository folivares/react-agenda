import React from "react";
import './CurrentTime.scss';
import { MINUTES_IN_HOUR } from "../../utils/constants";
import AgendaContext from "../AgendaContext";

export default class CurrentTime extends React.Component {

    static contextType = AgendaContext;

    constructor(props) {
        super(props);

        this.state = {
            position: '',
        };
    }

    setPosition = (position) => {
        this.setState(() => ({ position }));
    }

    componentDidMount() {
        this.setPosition(this.calculatePosition());
        this.interval = setInterval(() => this.setPosition(this.calculatePosition()), 60 * 1000);
    }
    
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    /**
     * Calculate the position of the current time indicator
     */
    calculatePosition() {
        let { startTime, endTime, dateService } = this.context
        const currentMinutesFromMidnight = dateService.calculateMinutesFromMidnight(new Date())
        let normalizedStartTime = currentMinutesFromMidnight - startTime
        let normalizedTotalEndTime = (endTime + MINUTES_IN_HOUR) - startTime
        let top = (normalizedStartTime / normalizedTotalEndTime) * 100 + "%"
        return top
    }

    /**
     * Show the indicator only if current time is into the range
     * of the agenda time window
     */
    isVisible() {
        let { startTime, endTime, dateService } = this.context
        const currentMinutesFromMidnight = dateService.calculateMinutesFromMidnight(new Date())
        return (currentMinutesFromMidnight >= startTime && currentMinutesFromMidnight <= endTime)
    }

    render() {

        return (
            <>
                {
                    this.isVisible() === true &&
                    <div className="fra-current-time" style={{ top: this.state.position }}>
                        <div className="bullet"></div>
                        <div className="line"></div>
                    </div>
                }
            </>
        )
    }

}