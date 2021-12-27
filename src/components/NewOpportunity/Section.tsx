import styled from "styled-components";
import { Subtitle } from "../styles";

const SectionContainer = styled.div`
    margin-bottom: 0px;
`;

const Section = ({id, title, subtitle, content }: any) => {
    return (
        <SectionContainer id={id}>
            <h2>{title}</h2>
            <Subtitle>{subtitle}</Subtitle>
            {content}
        </SectionContainer>
    );
};

export default Section;
