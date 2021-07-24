import { ICCard, ICCardTitle } from "../../styledComponents";
import { StyledICButton, StyledICCardContent } from "./style";

const InternalCard = ({ setInternal, disabled, selected }: any) => {
    const handleOnClick = () => {
        setInternal(!selected);
    };

    return (
        <ICCard>
            <ICCardTitle>iContribute</ICCardTitle>
            <StyledICCardContent>
                Choose to recieve applications throught iContribute, and we'll
                store all the opportunity details and provide applicants your
                email address.
            </StyledICCardContent>
            <StyledICButton
                selected={selected}
                onClick={handleOnClick}
                disabled={disabled}
            >
                Host on iContribute
            </StyledICButton>
        </ICCard>
    );
};

export default InternalCard;
