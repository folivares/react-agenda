import React from "react";
import DayColumn from "../DayColumn";
import './DaysGridView.scss';
import AgendaContext from "../AgendaContext";

export default class DaysGridView extends React.Component {

    static contextType = AgendaContext;

    generateDayColumns() {

        const { dateService, firstDay, daysNumber, currentDate, events, resources } = this.context

        const dates = dateService.generateDatesForPeriod(firstDay, daysNumber, currentDate)
        
        let dayColumnBlocks = []
        
        if (resources.length > 0) {
            for (let i = 0; i < resources.length; i++) {
                for (let j = 0; j < dates.length; j++) {
                    dayColumnBlocks.push(
                        <DayColumn key={`${i}-${j}`} date={dates[j]} events={events} resource={resources[i]}>{this.props.children}</DayColumn>
                    )
                }
            }
        } else {
            for (let i = 0; i < dates.length; i++) {
                dayColumnBlocks.push(
                    <DayColumn key={i} date={dates[i]} events={events}>{this.props.children}</DayColumn>
                )
            }
        }

        return dayColumnBlocks
    }


    render() {
        return <>{this.generateDayColumns()}</>
    }

}