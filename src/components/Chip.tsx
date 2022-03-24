import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import CheckIcon from "@material-ui/icons/Check";
import { useState } from "react";

interface Chip {
  title: string;
  options: any[];
}

const Chip = ({ title, options }: Chip) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropDownShown, setIsDropDownShown] = useState(false);

  //FOR CHIP WITHOUT OPTIONS (dropdown list)
  const [isSelected, setIsSelected] = useState(false);

  //CLOSE ICON
  const closeIconClick = () => {
    setSelectedOption("");
    setIsDropDownShown(false);
    setIsSelected(false);
  };
  const StyledCloseIcon = selectedOption ? (
    <CloseIcon
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        fontSize: 15,
        marginLeft: 4.46,
      }}
      onClick={closeIconClick}
    ></CloseIcon>
  ) : (
    ""
  );

  //OPTIONS
  const listOptions = options.map((option) => (
    <OptionBox
      isSelected={option == selectedOption}
      onClick={() => {
        setSelectedOption(option);
        //SET VALUE (selectedOption) TO VARIABLE BASED ON TITLE OR PASS THE VARIABLE NAME IN DISPATCH HERE
        
      }}
    >
      {option == selectedOption ? (
        <CheckIcon style={{ color: "#2836D1", float: "right" }}></CheckIcon>
      ) : (
        ""
      )}
      {option}
    </OptionBox>
  ));

  //TITLE
  const toggleDropdown = () => {
    setIsDropDownShown(isDropDownShown ? false : true);
    if(options.length===0){
      setIsSelected(true);
      //CUSTOME "123" FOR
      setSelectedOption("123");
      //SET VALUE (selectedOption) BASED ON TITLE OR PASS THE VARIABLE NAME IN DISPATCH HERE
    }
  };
  const Title = <span onClick={toggleDropdown}>{title}</span>;

  return (
    <ChipContainer>

      <StyledChip selected={selectedOption != "" || isSelected}>
        {Title}
        {StyledCloseIcon}
      </StyledChip>

      <DropDownList isDropDownShown={isDropDownShown}>
        {listOptions}
      </DropDownList>

    </ChipContainer>
  );
};

const ChipContainer = styled.div`
  display: inline-block; 
  margin: 0px 16px 0px 0px;
`

const DropDownList = styled.div<{ isDropDownShown: boolean }>`
  display: ${(props) => (props.isDropDownShown ? "block" : "none")};
  position: absolute;
  margin-top: 6px;
  min-width: 160px;
  z-index: 1;
  background: #fefeff;
  box-shadow: 1px 2px 4px rgb(0 0 0 / 0.2);
  border-radius: 8px;
`;

const OptionBox = styled.div<{ isSelected: boolean }>`
  padding: 6px 16px 10px 16px;
  &:hover {
    background-color: #757a7c14;
  }
  &:active {
    background-color: #757a7c3d;
  }
  background-color: ${(props) => (props.isSelected ? "#EDECFF" : "#FFFFFF")};
  cursor: pointer;
`;

const StyledChip = styled.div<{ selected: boolean }>`
  display: inline-block;
  background-color: ${(props) =>
    props.selected ? "#FFBC3B" : "rgba(117, 122, 124, 0.16)"};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;

export default Chip;
