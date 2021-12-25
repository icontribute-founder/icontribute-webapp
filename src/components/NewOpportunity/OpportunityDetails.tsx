import { Grid } from "@material-ui/core";
import { useState, useRef } from "react";
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
import { HostingType } from "@icontribute-founder/firebase-access";
import styled from "styled-components";

const ErrorMessage = styled.p`
  color: #d63334;
  margin-left: 0px;
  line-height: 24px;
`;

const OpportunityDetails = ({ setImageUploading, isHandleDisplayErrorMsg}: any) => {
  const dispatch = useDispatch();
  const {
    opportunity: {
      eventName,
      address,
      description,
      requirements,
      role,
      notes,
      shift,
      type
    },
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
        errorMessage={isHandleDisplayErrorMsg && !eventName ?"Please enter the title of the opportunity" : ""}
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
        errorMessage={isHandleDisplayErrorMsg && !address ?"Please enter the location of the opportunity":""}
        fullWidth
        onChange={handleLocationOnChange}
      />
      <InputField
        label="Description*"
        type="textarea"
        name="opportunity-details-description"
        id="opportunity-details-description"
        onChange={handleDescriptionOnChange}
        value={description}
        errorMessage={isHandleDisplayErrorMsg && !description ?"Please enter the description of the opportunity":""}
        placeholder="Enter position’s primary duties and responsibilities"
        fullWidth
        rows={8}
      />

      <InputField
        label="Mandatory Requirements *"
        type="textarea"
        name="opportunity-details-requirements"
        id="opportunity-details-requirements"
        onChange={handleRequirementsOnChange}
        value={requirements}
        errorMessage={isHandleDisplayErrorMsg && !requirements ?"Please enter the requirements of the opportunity":""}
        placeholder="Enter the necessary requirements"
        fullWidth
        rows={8}
      />

      <InputField
        label="What will the volunteer accomplish throughout the role *"
        type="textarea"
        name="opportunity-details-role"
        id="opportunity-details-role"
        onChange={handleRoleOnChange}
        value={role}
        errorMessage={isHandleDisplayErrorMsg && !role ? "Please enter the primary duties and responsibilities in this opportunity":""}
        placeholder="Enter the possible tasks given"
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
        placeholder="Enter anything that volunteers should know"
        fullWidth
        rows={8}
      />

      {type !== HostingType.External ? (
        <div id="section-opportunity-details-shift">
          <h3>Shift</h3>
          {isHandleDisplayErrorMsg && shift.length===0 ? (<ErrorMessage>Please create at least 1 shift</ErrorMessage>) : ""}
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
        </div>
      ) : (
        ""
      )}

      <h4>Upload Photo (Optional)</h4>
      <ImageDropzone setOrgImage={handleImageOnChange} />
    </>
  );

  return (
    <Section
      id="section-opportunity-details"
      title="Opportunity Details"
      subtitle="Let the applicants know more about the open role and their
            primary responsibilities."
      content={content}
    />
  );
};

export default OpportunityDetails;
