import { Grid, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateDescription,
    updateImageUrl,
    updateLocation,
    updateTitle,
} from "../../features/newOpportunity";
import Shift from "../../firebase-access/src/models/Shift";
import { upload } from "../../imageUploader";
import { RootState } from "../../store";
import ImageDropzone from "../FormElements/ImageDropzone";
// import InputField from "../FormElements/InputField";
import TextareaField from "../FormElements/TextareaField";
import ShiftCard from "../ShiftCard";
import { Subtitle } from "../styles";
import Section from "./Section";
import InputField from "../common/InputField";

const OpportunityDetails = ({ setImageUploading }: any) => {
    const dispatch = useDispatch();
    const { eventName, address, description, shifts } = useSelector(
        (state: RootState) => state.newOpportunity
    );

    const [orgImage, setOrgImage] = useState<any>();

    const handleImageOnChange = async (files: File[]) => {
        if (files === null) {
            console.log(orgImage);
            return;
        }

        if (files.length < 1) return;

        try {
            setOrgImage(files[0]);
            setImageUploading(true);
            const imagePath = await upload(files[0]);
            dispatch(updateImageUrl(imagePath));
            console.log(imagePath);
        } catch (error) {
            console.log(error);
        }
        setImageUploading(false);
    };

    const handleTitleOnChange = (e: any) => {
        dispatch(updateTitle(e.target.value));
    };

    const handleLocationOnChange = (e: any) => {
        dispatch(updateLocation(e.target.value));
    };

    const handleDescriptionOnChange = (e: any) => {
        dispatch(updateDescription(e.target.value));
    };

    const content = (
        <>
            <InputField
                label="Title *"
                type="text"
                placeholder="Enter the opportunity name"
                name="opportunity-details-title"
                id="opportunity-details-title"
                value={eventName}
                // checkMarkVisible={passwordConfirmCheckMark}
                // errorVisible={errorVisible}
                fullWidth
                onChange={handleTitleOnChange}
            />
            <InputField
                label="Location *"
                type="text"
                placeholder="Enter organization’s address"
                name="opportunity-details-location"
                id="opportunity-details-location"
                value={address}
                fullWidth
                onChange={handleLocationOnChange}
            />
            <InputField
                label="Description"
                type="textarea"
                name="opportunity-details-description"
                id="opportunity-details-description"
                onChange={handleDescriptionOnChange}
                value={description}
                placeholder="Enter position’s primary duties and responsibilities"
                fullWidth
                rows={8}
            />

            <h3>Shift</h3>
            <Grid container spacing={2}>
                {shifts.map((shift: Shift, i: number) => (
                    <Grid item md={6} key={`grid-shift-${i}`}>
                        <ShiftCard shift={shift} index={i} />
                    </Grid>
                ))}
                <Grid item md={6}>
                    <ShiftCard />
                </Grid>
            </Grid>
            <h4>Upload Photo (Optional)</h4>
            <ImageDropzone setOrgImage={handleImageOnChange} />
        </>
    );

    return (
        <Section
            title="Opportunity Details"
            subtitle="Let the applicants know more about the open role and their
            primary responsibilities."
            content={content}
        />
    );
};

export default OpportunityDetails;
