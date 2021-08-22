import React from "react";
import styled from "styled-components";
import DropIcon from "../../assets/images/image-drop.png";
import BlueButton from "../Buttons/BlueButton";

const ImageDroper = styled.div`
    border: 2px dashed black;
    height: 345px;
    width: 100%;
    text-align: center;
    padding: 75px 0;

    p {
        font-family: Source Sans Pro;
        font-size: 16px;
        line-height: 34px;
        margin: 14px 0;
        color: #736B6B;
    }
`

const ImageDropIcon = styled.img`

`

ImageDropIcon.defaultProps = {
    src: DropIcon
}

const ImageDropzone = () => {

    return (
        <ImageDroper>
            <ImageDropIcon />
            <p>Drag photo here</p>
            <p>or</p>
            <BlueButton text="Upload from computer" />
        </ImageDroper>
    )
}

export default ImageDropzone;