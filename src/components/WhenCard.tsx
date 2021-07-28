import { useState } from "react";
import { ICCard, ICCardTitle, ICCardContent } from "../styledComponents";
import DatePicker from "../components/DatePicker";
import { Grid } from "@material-ui/core";

const WhenCard = ({
    start = new Date(),
    end = new Date(),
    deadline = new Date(),
}: any) => {
    const [dates, setDates] = useState({
        start,
        end,
        deadline,
    });

    const [selectedDates, setSelectedDates] = useState({
        start: false,
        end: false,
        deadline: false,
    });

    const shouldDisableDate = (day: any) => {
        const { start } = dates;
        const currentDate = day.toDate();
        return compareDate(currentDate, start) === -1;
    };

    // handlers for start and end dates change
    const handleStartDateOnChange = (date: any) => {
        const { start, end } = dates;
        const newStart = changeDate(start, date);

        // the end needs to be later than the start
        let newEnd = new Date(end.getTime());
        if (compareDate(newStart, end) === 1) {
            newEnd = new Date(newStart.getTime());
            newEnd.setDate(newEnd.getDate());
        }
        setDates({ ...dates, start: newStart, end: newEnd });
        setSelectedDates({ ...selectedDates, start: true });
    };

    const handleEndDateOnChange = (date: any) => {
        const { end } = dates;
        const newEnd = changeDate(end, date);
        setDates({ ...dates, end: newEnd });
        setSelectedDates({ ...selectedDates, end: true });
    };

    const handleDeadlineOnChange = (date: any) => {
        const { deadline } = dates;
        const newDeadline = changeDate(deadline, date);
        setDates({ ...dates, deadline: newDeadline });
        setSelectedDates({ ...selectedDates, deadline: true });
    };

    return (
        <ICCard>
            <ICCardTitle>When</ICCardTitle>
            <ICCardContent>
                <Grid container spacing={2}>
                    <Grid item md={6}>
                        <DatePicker
                            label="Opportunity Start Date"
                            dateTime={dates.start}
                            disablePast={true}
                            dateOnChange={handleStartDateOnChange}
                            showPlaceHolder={!selectedDates.start}
                        />
                    </Grid>
                    <Grid item md={6}>
                        <DatePicker
                            label="Opportunity End Date"
                            dateTime={dates.end}
                            shouldDisableDate={shouldDisableDate}
                            dateOnChange={handleEndDateOnChange}
                            showPlaceHolder={!selectedDates.end}
                        />
                    </Grid>
                    <Grid item md={12}>
                        <DatePicker
                            label="Deadline to Apply"
                            dateTime={dates.deadline}
                            disablePast={true}
                            dateOnChange={handleDeadlineOnChange}
                            showPlaceHolder={!selectedDates.deadline}
                        />
                    </Grid>
                </Grid>
            </ICCardContent>
        </ICCard>
    );
};

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

// deep copy a date
function changeDate(dateTime: Date, { year, month, date }: any) {
    const dt = new Date(dateTime.getTime());
    dt.setFullYear(year);
    dt.setMonth(month);
    dt.setDate(date);
    return dt;
}

export default WhenCard;
