import { useState } from "react";
import ShiftDialog from "./ShiftDialog";
import { Shift } from "@icontribute-founder/firebase-access";
import StaticButton from "./Buttons/StaticButton";
import { CardBase, LightBlueButton, BlueButton } from "./styles";
import styled from "styled-components";

interface ShiftCardProps {
    index?: number;
    shift?: Shift | undefined;
}

const Card = styled(CardBase)`
    height: 145px;
`;

const NewCard = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 145px;
`;

const StyledLightBlueButton = styled(LightBlueButton)`
    position: absolute;
    top: 14px;
    right: 14px;
`;

const ShiftCard = ({ shift, index = -1 }: ShiftCardProps) => {
    const [openNew, setOpenNew] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);

    const handleClickOpenNew = () => {
        setOpenNew(true);
    };
    const handleCloseNew = () => {
        setOpenNew(false);
    };

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const createShift =
        index === -1 ? (
            <NewCard>
                <StaticButton onClick={handleClickOpenNew} text="Create New" />
                <ShiftDialog
                    open={openNew}
                    onClose={handleCloseNew}
                    index={index}
                />
            </NewCard>
        ) : (
            ""
        );

    const showShift =
        index !== -1 ? (
            <Card>
                <StyledLightBlueButton onClick={handleClickOpenEdit}>
                    Edit
                </StyledLightBlueButton>
                <ShiftDialog
                    open={openEdit}
                    onClose={handleCloseEdit}
                    edit={true}
                    index={index}
                />
                <h4 style={{ margin: "0px" }}>Shift {index + 1}</h4>
                <p>Start: {toDateString(shift?.start)}</p>
                <p>End: {toDateString(shift?.end)}</p>
                <p>Number of Participants: {(shift?.limit)}</p>
            </Card>
        ) : (
            ""
        );

    return <div>{!shift ? createShift : showShift}</div>;
};

const toDateString = (d: Date | number | undefined) => {
    const dateTime = new Date(d || Date.now());
    const convert = (n: number, isMonth = false) =>
        n < 9 ? `0${isMonth ? n + 1 : n}` : `${n}`;
    const month = convert(dateTime.getMonth(), true);
    const year = dateTime.getFullYear();
    const date = convert(dateTime.getDate());
    const hour = convert(dateTime.getHours());
    const minute = convert(dateTime.getMinutes());
    return `${month}/${date}/${year}, ${hour}:${minute}`;
};

export default ShiftCard;
