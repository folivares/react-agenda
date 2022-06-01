import React from "react";
import PropTypes from 'prop-types';
import { DEFAULT_DAYS_NUMBER, DEFAULT_END_TIME, DEFAULT_FIRST_DAY, DEFAULT_LOCALE, DEFAULT_SHOW_PERIOD_SELECTOR, DEFAULT_START_TIME, DEFAULT_TIMESLOT, DEFAULT_TIMEZONE, DEFAULT_TRANSLATE_LABELS } from "../../utils/constants";
import './Agenda.scss';
import AgendaContext from "../AgendaContext";
import ControlsHeader from "../ControlsHeader";;
import DateService from "../../services/DateService";
import DaysGridHeader from "../DaysGridHeader";
import DaysGridContent from "../DaysGridContent";

export default class Agenda extends React.Component {

    config;
    dateService;

    constructor(props) {
        super(props);

        this.dateService = new DateService(props.locale, props.timeZone);

        this.state = {
            currentDate: this.dateService.getAgendaStartDay(this.props.firstDay, this.props.daysNumber),
            daysNumber: this.props.daysNumber,
            firstDay: this.props.firstDay
        };
    }


    setCurrentDate = (currentDate) => {
        this.setState(() => ({ currentDate }))
        if (!!this.props.onDateChanged) {
            this.props.onDateChanged(currentDate)
        };
    }

    setDaysNumber = (daysNumber) => {
        this.setState(() => ({ daysNumber }));
    }

    setFirstDay = (firstDay) => {
        this.setState(() => ({ firstDay }));
    }

    render() {

        const { currentDate, daysNumber, firstDay } = this.state;

        const { setCurrentDate, setDaysNumber, setFirstDay, dateService } = this;

        return (
            <div className="fra-container">

                <AgendaContext.Provider value={
                    {
                        timeslot: this.props.timeslot,
                        startTime: this.props.startTime,
                        endTime: this.props.endTime,
                        initialDaysNumber: this.props.daysNumber,
                        initialFirstDay: this.props.firstDay,
                        locale: this.props.locale,
                        timeZone: this.props.timeZone,
                        showPeriodSelector: this.props.showPeriodSelector,
                        resources: this.props.resources,
                        translations: this.props.translations,
                        events: this.props.events,
                        currentDate,
                        daysNumber,
                        firstDay,
                        setCurrentDate,
                        setDaysNumber,
                        setFirstDay,
                        onEventClick: this.props.onEventClick,
                        onTimeslotClick: this.props.onTimeslotClick,
                        onDateChanged: this.props.onDateChanged,
                        dateService
                    }
                }>

                    <ControlsHeader></ControlsHeader>

                    <div className="fra-content">

                        <DaysGridHeader></DaysGridHeader>

                        <DaysGridContent></DaysGridContent>

                    </div>

                </AgendaContext.Provider>

            </div>
        )
    }

}

Agenda.propTypes = {
    timeslot: PropTypes.number,
    startTime: PropTypes.number,
    endTime: PropTypes.number,
    locale: PropTypes.string,
    timeZone: PropTypes.string,
    daysNumber: PropTypes.number,
    firstDay: PropTypes.number,
    showPeriodSelector: PropTypes.bool,
    events: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date).isRequired,
        resourceId: PropTypes.string,
        color: PropTypes.string
    })),
    resources: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    translations: PropTypes.shape({
        todayLabel: PropTypes.string.isRequired,
        selectViewDayLabel: PropTypes.string.isRequired,
        selectViewWeekLabel: PropTypes.string.isRequired
    }),
    onEventClick: PropTypes.func,
    onTimeslotClick: PropTypes.func,
    onDateChanged: PropTypes.func
}

Agenda.defaultProps = {
    timeslot: DEFAULT_TIMESLOT,
    startTime: DEFAULT_START_TIME,
    endTime: DEFAULT_END_TIME,
    locale: DEFAULT_LOCALE,
    timeZone: DEFAULT_TIMEZONE,
    daysNumber: DEFAULT_DAYS_NUMBER,
    firstDay: DEFAULT_FIRST_DAY,
    showPeriodSelector: DEFAULT_SHOW_PERIOD_SELECTOR,
    events: [],
    resources: [],
    translations: {
        todayLabel: DEFAULT_TRANSLATE_LABELS.TODAY_LABEL,
        selectViewDayLabel: DEFAULT_TRANSLATE_LABELS.SELECT_VIEW_DAY_LABEL,
        selectViewWeekLabel: DEFAULT_TRANSLATE_LABELS.SELECT_VIEW_WEEK_LABEL
    }
}