import { Button } from "@material-ui/core";
import { FilterSharp } from "@material-ui/icons";
import React, { useState, useCallback } from "react";
import { Grid, Container } from '@material-ui/core';
import { useDropzone } from 'react-dropzone'
import styled from "styled-components";
import DropIcon from "../../assets/images/image-drop.png";
import BlueButton from "../Buttons/BlueButton";

const ImageDropzone = () => {

    const [files, setFiles] = useState<File[]>([])

    const onDrop = useCallback(acceptedFiles => {
        setFiles(prevState => [...prevState, acceptedFiles[0]])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const hiddenFileUploader: any = React.useRef(null)

    const handleUploadClick = () => {
        hiddenFileUploader.current.click();
    }

    const handleFileUploaderChange = (e: any) => {
        setFiles(prevState => [...prevState, e.target.files[0]])
    }

    console.log(files)

    if (files.length === 0) {
        return (
            <ImageDroper {...getRootProps()}>
                <ImageDropIcon />
                <p>Drag photo here</p>
                <p>or</p>
                <input {...getInputProps()} type="file" style={{ display: "none" }} ref={hiddenFileUploader} onChange={handleFileUploaderChange} />
                <BlueButton onClick={handleUploadClick} text="Upload from computer" />
            </ImageDroper>
        )
    } else {
        return (
            <ImageDroper {...getRootProps()}>
                <Grid container>
                    <Grid item xs={8}>
                        {files.map((image) => (
                            <p key={image.name}>{image.name}</p>
                        ))}
                    </Grid>
                    <Grid item xs={4}>
                        <ImageDropIcon />
                        <p>Drag photo here</p>
                        <p>or</p>
                        <input {...getInputProps()} type="file" style={{ display: "none" }} ref={hiddenFileUploader} onChange={handleFileUploaderChange} />
                        <BlueButton onClick={handleUploadClick} text="Upload from computer" />
                    </Grid>
                </Grid>
            </ImageDroper>
        )
    }

}

export default ImageDropzone;

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