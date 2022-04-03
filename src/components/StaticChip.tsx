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
  margin: 8px 16px 8px 0px;
`

const StyledChip = styled.div`
  display: inline-block;
  background-color: #FFBC3B;
  padding: 8px;
  border-radius: 8px;
`;

export default StaticChip;
