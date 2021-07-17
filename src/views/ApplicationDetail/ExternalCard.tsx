import { ICCard, ICCardTitle } from "../../styledComponents";
import {
    StyledICCardContent,
    StyledICButton,
    StyledIconInput,
    StyledInput,
} from "./style";

const ExternalCard = ({
    url,
    setUrl,
    disabled,
    selected,
    setExternal,
}: any) => {
    const handleOnClick = () => {
        setExternal(!selected);
    };

    const handleOnChange = (e: any) => {
        setUrl(e.target.value);
    };

    return (
        <ICCard>
            <ICCardTitle>External Website</ICCardTitle>
            <StyledICCardContent>
                Have a volunteer opportunity on your website? Provide a link and
                we'll redirect applicants to your organization's website
                directly to apply
            </StyledICCardContent>
            <StyledICButton
                selected={selected}
                disabled={disabled}
                onClick={handleOnClick}
            >
                Add Your Site Link
            </StyledICButton>
            {selected ? (
                <StyledIconInput>
                    <StyledInput
                        type="text"
                        onChange={handleOnChange}
                        value={url}
                        placeholder="Paste your link here"
                    />
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15.0127 2.87399C16.678 1.20867 19.378 1.20867 21.0434 2.87399C22.7087 4.53931 22.7087 7.23932 21.0434 8.90464L17.1137 12.8343C15.4483 14.4997 12.7483 14.4997 11.083 12.8343C10.9606 12.7119 10.8474 12.5842 10.7433 12.4519C10.4657 12.0993 9.95489 12.0385 9.6023 12.3161C9.2497 12.5936 9.18887 13.1045 9.46642 13.4571C9.61015 13.6396 9.76603 13.8155 9.93396 13.9834C12.2339 16.2833 15.9628 16.2833 18.2627 13.9834L22.1924 10.0537C24.4923 7.75377 24.4923 4.02486 22.1924 1.72494C19.8925 -0.57498 16.1636 -0.57498 13.8637 1.72494L10.6136 4.97498C10.2963 5.29228 10.2963 5.80673 10.6136 6.12403C10.9309 6.44133 11.4454 6.44133 11.7627 6.12403L15.0127 2.87399Z"
                            fill="#736B6B"
                        />
                        <path
                            d="M6.88768 10.999C8.55299 9.33367 11.253 9.33367 12.9183 10.999C13.0408 11.1215 13.154 11.2492 13.2581 11.3813C13.5356 11.7339 14.0465 11.7948 14.399 11.5172C14.7516 11.2396 14.8125 10.7288 14.5349 10.3762C14.3911 10.1936 14.2352 10.0178 14.0674 9.84994C11.7675 7.55002 8.03855 7.55002 5.73863 9.84994L1.80893 13.7796C-0.490996 16.0796 -0.490996 19.8085 1.80893 22.1084C4.10885 24.4083 7.83775 24.4083 10.1377 22.1084L13.3877 18.8584C13.705 18.5411 13.705 18.0266 13.3877 17.7093C13.0704 17.392 12.5559 17.392 12.2386 17.7093L8.98863 20.9593C7.32331 22.6247 4.62329 22.6247 2.95797 20.9593C1.29265 19.294 1.29265 16.594 2.95797 14.9287L6.88768 10.999Z"
                            fill="#736B6B"
                        />
                    </svg>
                </StyledIconInput>
            ) : (
                ""
            )}
        </ICCard>
    );
};

export default ExternalCard;
