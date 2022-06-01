import React from "react";
import PropTypes from 'prop-types';
import './DayColumn.scss';
import { filterEventsByDate, filterEventsByResourceAndDate } from "../../utils/helpers";
import CurrentTime from "../CurrentTime";
import Events from "../Events";
import AgendaContext from "../AgendaContext";

export default class DayColumn extends React.Component {

    static contextType = AgendaContext;

    filterEvents() {
        return !!this.props.resource ?
            filterEventsByResourceAndDate(this.props.events, this.props.date, this.props.resource.id) :
            filterEventsByDate(this.props.events, this.props.date);
    }

    isActive() {
        const { dateService } = this.context;
        return dateService.isToday(this.props.date);
    }

    render() {
        return (
            <div className="fra-column fra-day-column">
                {this.props.children}
                <Events date={this.props.date} events={this.filterEvents()}></Events>

                {this.isActive() === true &&
                    <CurrentTime></CurrentTime>
                }
            </div>
        )
    }

}

DayColumn.propTypes = {
    date: PropTypes.instanceOf(Date),
    events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        resourceId: PropTypes.string,
        color: PropTypes.string
    })),
    resource: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })

}

DayColumn.defaultProps = {
    resource: null
}