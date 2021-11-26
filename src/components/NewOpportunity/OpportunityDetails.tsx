import { Grid } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDescription,
  updateImage,
  updateLocation,
  updateNotes,
  updateRequirements,
  updateRole,
  updateTitle,
} from "../../features/opportunity";
import { Shift } from "@icontribute-founder/firebase-access";
import { upload } from "../../imageUploader";
import { RootState } from "../../store";
import ImageDropzone from "../FormElements/ImageDropzone";
import ShiftCard from "../ShiftCard";
import Section from "./Section";
import InputField from "../common/InputField";

const OpportunityDetails = ({ setImageUploading }: any) => {
  const dispatch = useDispatch();
  const {
    opportunity: { eventName, address, description, requirements, role, notes, shift },
  } = useSelector((state: RootState) => state.opportunity);

  const [orgImage, setOrgImage] = useState<any>();

  const handleImageOnChange = async (files: File[]) => {
    if (files === null) {
      console.log(orgImage);
      return;
    }

    if (files.length < 1) return;

    dispatch(updateImage(files[0]));

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
  const handleRequirementsOnChange = (e: any) => {
    dispatch(updateRequirements(e.target.value));
  };
  const handleRoleOnChange = (e: any) => {
    dispatch(updateRole(e.target.value));
  };
  const handleNotesOnChange = (e: any) => {
    dispatch(updateNotes(e.target.value));
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

      <InputField
        label="Mandatory Requirements"
        type="textarea"
        name="opportunity-details-requirements"
        id="opportunity-details-requirements"
        onChange={handleRequirementsOnChange}
        value={requirements}
        placeholder="Begin Typing..."
        fullWidth
        rows={8}
      />

      <InputField
        label="What will the volunteer accomplish throughout the role"
        type="textarea"
        name="opportunity-details-role"
        id="opportunity-details-role"
        onChange={handleRoleOnChange}
        value={role}
        placeholder="Begin Typing..."
        fullWidth
        rows={8}
      />

      <InputField
        label="Other things to note"
        type="textarea"
        name="opportunity-details-notes"
        id="opportunity-details-notes"
        onChange={handleNotesOnChange}
        value={notes}
        placeholder="Begin Typing..."
        fullWidth
        rows={8}
      />

      <h3>Shift</h3>
      <Grid container spacing={2}>
        {shift.map((s: Shift, i: number) => (
          <Grid item md={6} key={`grid-shift-${i}`}>
            <ShiftCard shift={s} index={i} />
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
