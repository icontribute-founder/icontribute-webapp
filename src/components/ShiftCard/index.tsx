import React from "react";

import Menu from "../Menu";
import TrashButton from "../TrashButton";
import { clone, pullAt } from "lodash";
import DateTimeRangePicker from "../DateTimeRangePicker";
import {
    NewShiftCardBackground,
    ShiftCardBackground,
    ShiftContent,
    ShiftHeader,
    ShiftName,
    StyledButton,
} from "./style";

interface props {
    isNewShift?: boolean;
    setShifts: any;
    shifts: any[];
    i?: number;
}

const ShiftCard = ({ isNewShift = false, setShifts, shifts, i = 0 }: props) => {
    if (!isNewShift) {
        const { start, end, type, name } = shifts[i];
        const handleDelete = () => {
            const tmp = clone(shifts);
            pullAt(tmp, [i]);
            setShifts(tmp);
        };

        return (
            <ShiftCardBackground>
                <ShiftHeader>
                    <ShiftName>{name}</ShiftName>
                    <TrashButton onClick={handleDelete} />
                </ShiftHeader>
                <ShiftContent>
                    <DateTimeRangePicker
                        start={start}
                        end={end}
                        timePickerStart={9}
                        timePickerEnd={12}
                        timePickerGap={30}
                    />
                </ShiftContent>
                <Menu>{type}</Menu>
            </ShiftCardBackground>
        );
    } else {
        const hanldeNewShiftButtonClick = () => {
            const start = new Date();
            const end = new Date();
            start.setHours(9, 0, 0);
            end.setHours(9, 30, 0);

            setShifts([
                ...shifts,
                {
                    start,
                    end,
                    type: "Does not Repeat",
                    name: `Shift ${shifts.length + 1}`,
                },
            ]);
        };
        return (
            <NewShiftCardBackground>
                <StyledButton onClick={hanldeNewShiftButtonClick}>
                    Create Another Shift
                </StyledButton>
            </NewShiftCardBackground>
        );
    }
};

export default ShiftCard;
