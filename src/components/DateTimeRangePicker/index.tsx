import React from "react";
import { useState } from "react";
import DateTimePicker from "../DateTimePicker";
import { StartEndDates } from "./style";

const DateTimeRangePicker = ({
    start,
    end,
    timePickerStart,
    timePickerEnd,
    timePickerGap,
}: any) => {
    const [startEndDateTime, setStartEndDateTime] = useState({ start, end });

    const shouldDisableDate = (day: any) => {
        const { start } = startEndDateTime;
        const currentDate = day.toDate();
        const isStartFull =
            compareDate(currentDate, start) === 0 &&
            start.getHours() === timePickerEnd;
        return compareDate(currentDate, start) === -1 || isStartFull;
    };

    const shouldDisableTime = (time: Date) => {
        const { start, end } = startEndDateTime;
        return compareDate(start, end) === 0 && compareTime(time, start) <= 0;
    };

    // handlers for start and end dates change
    const handleStartDateOnChange = (date: any) => {
        const { start, end } = startEndDateTime;
        const newStart = changeDate(start, date);

        // the end needs to be later than the start
        let newEnd = new Date(end.getTime());
        if (compareDate(newStart, end) === 1) {
            newEnd = new Date(newStart.getTime());
            newEnd.setDate(newEnd.getDate());
        }
        setStartEndDateTime({ start: newStart, end: newEnd });
    };

    const handleEndDateOnChange = (date: any) => {
        const { end } = startEndDateTime;
        const newEnd = changeDate(end, date);
        setStartEndDateTime({ ...startEndDateTime, end: newEnd });
    };

    // handlers for start and end time change
    const handleStartTimeOnChange = (time: any) => {
        const { start, end } = startEndDateTime;

        const newStart = changeTime(start, time);
        let newEnd = end;
        // if the new start and end are the same day, then time of the end needs to be later
        if (
            compareDate(newStart, end) === 0 &&
            compareTime(end, newStart) <= 0
        ) {
            let hour = newStart.getHours();
            let min = newStart.getMinutes() + timePickerGap;

            // mins === 60, add 1 hour, mins = 0
            if (min === 60) {
                min = 0;
                hour += 1;
            }

            // new time === timePickerEnd, hours = 0, mins = 0, date + 1
            if (hour > timePickerEnd || (hour === timePickerEnd && min > 0)) {
                hour = timePickerStart;
                min = 0;
                newEnd = changeDate(end, {
                    year: end.getFullYear(),
                    month: end.getMonth(),
                    date: end.getDate() + 1,
                });
            }

            newEnd = changeTime(newEnd, { hour, min });
        }

        setStartEndDateTime({ start: newStart, end: newEnd });
    };

    const handleEndTimeOnChange = (time: any) => {
        const { end } = startEndDateTime;
        const newEnd = changeTime(end, time);
        setStartEndDateTime({ ...startEndDateTime, end: newEnd });
    };

    return (
        <StartEndDates>
            <DateTimePicker
                dateTime={startEndDateTime.start}
                disablePast={true}
                dateOnChange={handleStartDateOnChange}
                timeOnChange={handleStartTimeOnChange}
                timePickerStart={timePickerStart}
                timePickerEnd={timePickerEnd}
                timePickerGap={timePickerGap}
                style={{ marginRight: "5px" }}
            />
            <DateTimePicker
                dateTime={startEndDateTime.end}
                shouldDisableDate={shouldDisableDate}
                shouldDisableTime={shouldDisableTime}
                dateOnChange={handleEndDateOnChange}
                timeOnChange={handleEndTimeOnChange}
                timePickerStart={timePickerStart}
                timePickerEnd={timePickerEnd}
                timePickerGap={timePickerGap}
                style={{ marginLeft: "5px" }}
            />
        </StartEndDates>
    );
};

function changeDate(dateTime: Date, { year, month, date }: any) {
    const dt = new Date(dateTime.getTime());
    dt.setFullYear(year);
    dt.setMonth(month);
    dt.setDate(date);
    return dt;
}

function changeTime(dateTime: Date, { hour, min }: any) {
    const dt = new Date(dateTime.getTime());
    dt.setHours(hour, min, 0);
    return dt;
}

function compareDate(d1: Date, d2: Date) {
    const dd1 = new Date(d1.getFullYear(), d1.getMonth(), d1.getDate());
    const dd2 = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
    if (dd1 > dd2) {
        return 1;
    }
    if (dd1 < dd2) {
        return -1;
    }
    return 0;
}

function compareTime(t1: Date, t2: Date) {
    const ts = [
        [t1.getHours(), t2.getHours()],
        [t1.getMinutes(), t2.getMinutes()],
        [t1.getSeconds(), t2.getSeconds()],
    ];
    for (const t of ts) {
        if (t[0] > t[1]) {
            return 1;
        }
        if (t[0] < t[1]) {
            return -1;
        }
    }
    return 0;
}

export default DateTimeRangePicker;
