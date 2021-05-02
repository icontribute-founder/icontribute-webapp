import React from "react";
import { ListItem } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import {
    TimePickerList,
    TimePickerListItem,
    TimePickerListItemText,
    TimePickerListSubheader,
    TimePickerListUl,
} from "./style";

const TimePicker = ({
    dateString,
    start,
    end,
    gap,
    selectedTime,
    handleSelectTime,
    shouldDisableTime,
}: any) => {
    const timePoints = getTime(start, end, gap);

    const disabled = (isoTime: string) => {
        const ds = isoTime.split(":");
        const date = new Date();
        date.setHours(parseInt(ds[0]), parseInt(ds[1]), parseInt(ds[2]));
        return shouldDisableTime !== undefined && shouldDisableTime(date);
    };

    return (
        <TimePickerList subheader={<TimePickerListItem />}>
            <TimePickerListItem>
                <TimePickerListUl>
                    <TimePickerListSubheader>
                        {dateString}
                    </TimePickerListSubheader>
                    {timePoints.map(({ isoTime, timeString }: any) => (
                        <ListItem
                            button
                            key={uuidv4()}
                            onClick={() => handleSelectTime(isoTime)}
                            selected={selectedTime === timeString}
                            disabled={disabled(isoTime)}
                        >
                            <TimePickerListItemText primary={timeString} />
                        </ListItem>
                    ))}
                </TimePickerListUl>
            </TimePickerListItem>
        </TimePickerList>
    );
};

function getTime(start: number, end: number, gap: number) {
    if (60 % gap !== 0) {
        return [];
    }

    const hours: number[] = [];
    for (let i = start; i < end; i++) {
        hours.push(i);
    }

    const mins: number[] = [];
    for (let i = 0; i < 60 / gap; i++) {
        mins.push(gap * i);
    }

    const time: { isoTime: string; timeString: string }[] = [];
    hours.forEach((hour) => {
        mins.forEach((min) => {
            time.push({
                isoTime: `${hour < 10 ? 0 : ""}${hour}:${
                    min < 10 ? 0 : ""
                }${min}:00`,
                timeString: convert24To12(hour, min),
            });
        });
    });
    time.push({
        isoTime: `${end < 10 ? 0 : ""}${end}:00:00`,
        timeString: convert24To12(end, 0),
    });
    return time;
}

function convert24To12(hour: number, min: number) {
    if (hour < 12) {
        return `${hour}:${min < 10 ? 0 : ""}${min} AM`;
    }
    if (hour === 12) {
        return `12:${min < 10 ? 0 : ""}${min} PM`;
    }
    const hourMod = hour % 12;
    return `${hourMod < 10 ? 0 : ""}${hourMod}:${min < 10 ? 0 : ""}${min} PM`;
}

export default TimePicker;
