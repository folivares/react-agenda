import React from "react";
import PropTypes from 'prop-types';
import './DayHeader.scss';
import AgendaContext from "../AgendaContext";

export default class DayHeader extends React.Component {

    static contextType = AgendaContext;

    isActive() {
        const { dateService } = this.context
        return dateService.isToday(this.props.date)
    }

    switchToDayView(date) {
        const { daysNumber, setDaysNumber, setFirstDay, setCurrentDate } = this.context
        if (daysNumber > 1) {
            setCurrentDate(date)
            setDaysNumber(1)
            setFirstDay(-1)
        }
    }

    render() {

        const { dateService } = this.context

        return (
            <div className="fra-column fra-day-column-header">
                <h2 className={this.isActive() ? 'today' : ''}>
                    {this.props.resource ? (
                        <>
                            <div className="day-label">
                                {this.props.resource.name}
                            </div>
                            <div className="day-number" onClick={() => this.switchToDayView(this.props.date)}>
                                {dateService.getDayNumberFromDate(this.props.date)}
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="day-label">
                                {dateService.getDayNameFromDate(this.props.date)}
                            </div>
                            <div className="day-number" onClick={() => this.switchToDayView(this.props.date)}>
                                {dateService.getDayNumberFromDate(this.props.date)}
                            </div>
                        </>
                    )
                    }
                </h2>
                <div className="day-footer">

                </div>
            </div>
        )
    }

}

DayHeader.propTypes = {
    date: PropTypes.instanceOf(Date),
    resource: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

DayHeader.defaultProps = {
    resource: null
}