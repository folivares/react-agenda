import React from "react";
import './TimeColumn.scss';
import { convertMinutesToTimeString } from "../../utils/time";

export default class TimeColumn extends React.Component {

    addTimeLabelToBlocks() {
        let children = this.props.children.map(function (item, i) {
            let timeLabel = convertMinutesToTimeString(item.props.time)
            return React.cloneElement(item, {
                timeLabel
            });
        });
        return children
    }

    render() {
        return (
            <>
                <div className="fra-column fra-time-column">
                    {this.addTimeLabelToBlocks()}
                </div>
                <div className="fra-column fra-time-column-separator">
                    {this.props.children}
                </div>
            </>
        )
    }

}