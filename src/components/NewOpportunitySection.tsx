import styled from "styled-components";

const Title1 = styled.h2`
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    font-family: Source Sans Pro;
    margin: 0px;
`;

const Title2 = styled.h3`
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    font-family: Source Sans Pro;
    margin: 0px;
`;

const Subtitle = styled.p`
    font-family: Source Sans Pro;
    font-weight: normal;
    font-size: 14px;
    line-height: 143%;
    color: #676767;
    margin-top: 0px;
`;

interface NewOpportunitySectionProps {
    title: string;
    subtitle: string;
    content: JSX.Element;
    isSubSection?: boolean;
}

const NewOpportunitySection = ({
    title,
    subtitle,
    content,
    isSubSection = false,
}: NewOpportunitySectionProps) => {
    const Title = isSubSection ? Title2 : Title1;
    return (
        <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {content}
        </div>
    );
};

export default NewOpportunitySection;
