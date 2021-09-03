import React, { useState, useCallback } from "react";
import { Grid } from '@material-ui/core';
import { useDropzone } from 'react-dropzone'
import styled from "styled-components";
import DropIcon from "../../assets/images/image-drop.png";
import StaticButton from "../Buttons/StaticButton";

interface ImageDropzoneProps {
    setOrgImage: Function
}

const ImageDropzone: React.FC<ImageDropzoneProps> = ({ setOrgImage }) => {

    const [files, setFiles] = useState<File[]>([])

    const onDrop = useCallback(acceptedFiles => {
        setFiles([acceptedFiles[0]])
        setOrgImage([acceptedFiles[0]])
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    const hiddenFileUploader: any = React.useRef(null)

    const handleUploadClick = () => {
        hiddenFileUploader.current.click();
    }

    const handleFileUploaderChange = (e: any) => {
        let uploadedFile = e.target.files[0]
        uploadedFile.path = uploadedFile.name
        setFiles([uploadedFile])
        setOrgImage([uploadedFile])
    }

    const handleDeleteImage = () => {
        setFiles([])
        setOrgImage(null)
    }

    // console.log(files)

    if (files.length === 0) {
        return (
            <ImageDroper {...getRootProps()}>
                <ImageDropIcon />
                <p>Drag photo here</p>
                <p>or</p>
                <input {...getInputProps()} type="file" style={{ display: "none" }} ref={hiddenFileUploader} onChange={handleFileUploaderChange} />
                <StaticButton onClick={handleUploadClick} text="Upload from computer" />
            </ImageDroper>
        )
    } else {
        return (
            <ImageDroper {...getRootProps()}>
                <Grid container>
                    <Grid container item xs={12} lg={8} style={{ paddingLeft: "20px", paddingRight: "20px" }} >
                        {files.map((image) => (
                            <ImageContainer key={image.name}>
                                <button onClick={handleDeleteImage}>x</button>
                                <ImagePreview src={URL.createObjectURL(image)} />
                            </ImageContainer>
                        ))}
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <ImageDropIcon />
                        <p>Drag photo here</p>
                        <p>or</p>
                        <input {...getInputProps()} type="file" style={{ display: "none" }} ref={hiddenFileUploader} onChange={handleFileUploaderChange} />
                        <StaticButton onClick={handleUploadClick} text="Upload from computer" />
                    </Grid>
                </Grid>
            </ImageDroper >
        )
    }

}

export default ImageDropzone;

const ImageDroper = styled.div`
    border: 2px dashed black;
    min-height: 345px;
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

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-bottom: 40px;
    button {
        position: absolute;
        right: -10px;
        top: -10px;
        border-radius: 50%;
        background-color: #BABCBD;
        border: none;
        outline: none;
        color: white;
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

const ImagePreview = styled.img.attrs(props => ({
    src: props.src
}))`
    width: 100%;
    height: auto;
    border-radius: 8px;
`