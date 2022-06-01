import React from "react";
import './ControlsHeader.scss';
import AgendaContext from "../AgendaContext";

export default class ControlsHeader extends React.Component {

    static contextType = AgendaContext;

    getCurrentDate() {
        const { daysNumber, currentDate, locale, dateService } = this.context;
        if (daysNumber > 1) {
            return dateService.getMonthAndYearFromDate(currentDate, locale);
        }
        return dateService.getFullNameFromDate(currentDate, locale);
    }

    incrementDate() {
        const { firstDay, daysNumber, currentDate, setCurrentDate, dateService } = this.context;
        setCurrentDate(dateService.incrementDatesPeriod(firstDay, daysNumber, currentDate));
    }

    decrementDate() {
        const { firstDay, daysNumber, currentDate, setCurrentDate, dateService } = this.context;
        setCurrentDate(dateService.decrementDatesPeriod(firstDay, daysNumber, currentDate));
    }

    setTodayDate() {
        const { setCurrentDate } = this.context;
        setCurrentDate(new Date());
    }

    handleType(event) {
        const { setDaysNumber, setFirstDay, initialDaysNumber, initialFirstDay } = this.context;
        const weekDays = initialDaysNumber == 1 ? 7 : initialDaysNumber;
        const daysNumber = event.target.value == "day" ? 1 : weekDays;
        setDaysNumber(daysNumber);
        if (daysNumber == 1) {
            setFirstDay(-1);
        } else {
            setFirstDay(initialFirstDay);
        }
    }

    render() {


        const { showPeriodSelector, firstDay, daysNumber, translations, dateService } = this.context

        const type = daysNumber == 1 ? "day" : "week"

        return (
            <div className="fra-header">
                <div className="fra-headers-controls">
                    <button className="fra-button fra-button-transparent" onClick={() => this.decrementDate()}><i className="arrow left"></i></button>
                    <button className="fra-button fra-button-transparent" onClick={() => this.incrementDate()}><i className="arrow right"></i></button>
                    {dateService.isDayInDatesRange(dateService.getToday().getDay(), firstDay, daysNumber) &&
                        <button className="fra-button fra-button-primary" onClick={() => this.setTodayDate()}>{translations.todayLabel}</button>
                    }
                </div>
                <div className="fra-headers-controls">
                    <span className="fra-header-title">{this.getCurrentDate()}</span>
                </div>
                {showPeriodSelector ?
                    (<div className="fra-headers-controls">
                        <select className="fra-header-type fra-button fra-button-primary" value={type} onChange={(e) => this.handleType(e)}>
                            <option value="day">{translations.selectViewDayLabel}</option>
                            <option value="week">{translations.selectViewWeekLabel}</option>
                        </select>
                    </div>) :
                    (
                        <div className="fra-headers-controls">
                        </div>
                    )
                }
            </div>
        )
    }

}