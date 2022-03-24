import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import { NoEncryption } from "@material-ui/icons";
import { log } from "console";

const InputChip = () => {
  const [inputValue, setInputValue] = useState("");
  const [hasFocus, setFocus] = useState(false);

  //CLOSE ICON
  const closeIconClick = () => {
    setInputValue("");
    // setIsSelected(false);
  };
  const StyledCloseIcon = inputValue ? (
    <CloseIcon
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        fontSize: 15,
        margin: "0px 2px 0px 0px",
        cursor: "pointer",
      }}
      onClick={closeIconClick}
    ></CloseIcon>
  ) : (
    ""
  );

  const StyledAddIcon =
    !hasFocus && !inputValue ? (
      <AddIcon
        style={{
          display: "inline-block",
          verticalAlign: "middle",
          fontSize: 15,
          margin: "0px 2px 0px 0px",
          color: "#1B28B6",
        }}
      ></AddIcon>
    ) : (
      ""
    );

  const inputOnChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return (
    // <ChipContainer>
    <StyledChip hasFocus={hasFocus} inputValue={inputValue}>
      <StyledInput
        type="text"
        hasFocus={hasFocus}
        inputValue={inputValue}
        value={inputValue}
        maxLength={119}
        placeholder={hasFocus ? "Type requirement" : "Add requirement"}
        onChange={inputOnChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      ></StyledInput>
      {StyledAddIcon}
      {StyledCloseIcon}
    </StyledChip>
    // {/* </ChipContainer> */}
  );
};

const StyledInput = styled.input<{ hasFocus: boolean; inputValue: string }>`
  display: inline-block;
  border: none;
  width: ${(props) =>
    props.hasFocus
      ? props.inputValue
        ? props.inputValue.length * 0.9 + "ch"
        : "110px"
      : props.inputValue
      ? props.inputValue.length * 0.9 + "ch"
      : "110px"};
  &:focus {
    outline: none;
  }
  background-color: ${(props) =>
    props.hasFocus ? "#fefeff" : props.inputValue ? "#FFBC3B" : "#fefeff"};
  padding: 7px 7px 6px 7px;
  font-size: 14px;
`;

const ChipContainer = styled.div`
  display: inline-block;
  margin: 0px 16px 0px 0px;
`;

const StyledChip = styled.div<{ hasFocus: boolean; inputValue: string }>`
  display: inline-block;
  margin: 24px 16px 24px 0px;
  background-color: ${(props) =>
    props.hasFocus ? "#fefeff" : props.inputValue ? "#FFBC3B" : "#fefeff"};
  padding: 2px;
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.hasFocus ? "#2836D1" : props.inputValue ? "#FFBC3B" : "#BABCBD"};
`;

export default InputChip;
