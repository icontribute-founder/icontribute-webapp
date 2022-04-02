import styled from "styled-components";

interface StaticChip {
    label: string;
  }

const StaticChip = ({label}:StaticChip) => {

  return (
    <ChipContainer>

      <StyledChip>
        {label}
      </StyledChip>

    </ChipContainer>
  );
};

const ChipContainer = styled.div`
  display: inline-block; 
  margin: 24px 16px 24px 0px;
`

const StyledChip = styled.div`
  display: inline-block;
  background-color: #FFBC3B;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default StaticChip;
