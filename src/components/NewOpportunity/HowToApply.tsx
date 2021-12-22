import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import { updateHostingType, updateUrl } from "../../features/opportunity";

import Section from "./Section";
import { HostingType } from "@icontribute-founder/firebase-access";
import ExternalIcon from "../Svgs/ExternalIcon";
import InternalIcon from "../Svgs/InternalIcon";
import InputField from "../common/InputField";

const HostingTypeDescription = styled.p`
  font-style: normal;
  font-weight: normal;
  // font-size: 14px;
  line-height: 20px;
  color: #736b6b;
  font-family: Source Sans Pro;
  margin: 0px;
`;

const StyledRadioLabel = styled.div`
  color: #192226;
  // font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-right: 10px;
`;

const RadioLabel = ({ label, svg }: any) => {
  return (
    <StyledRadioLabel>
      <StyledSpan>{label}</StyledSpan>
      {svg}
    </StyledRadioLabel>
  );
};

const PrimaryRadio = <Radio color="primary" />;

const HowToApply = () => {
  const dispatch = useDispatch();
  const {
    opportunity: { type: hostingType, url, type},
  } = useSelector((state: RootState) => state.opportunity);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch ((e.target as HTMLInputElement).value) {
      case HostingType.Internal:
        return dispatch(updateHostingType(HostingType.Internal));
      case HostingType.External:{
        dispatch(updateUrl(""));
        return dispatch(updateHostingType(HostingType.External));
      }
      default:
        return;
    }
  };

  const handleUrlOnChange = (e: any) => {
    dispatch(updateUrl(e.target.value));
  }

  const content = (
    <RadioGroup
      value={hostingType.toString()}
      onChange={handleRadioChange}
      aria-label="hosting-type"
      name="hosting-type"
    >
      <Grid container>
        <Grid item md={6}>
          <FormControlLabel
            value={HostingType.Internal}
            control={PrimaryRadio}
            label={<RadioLabel label="iContribute" svg={<InternalIcon />} />}
          />
          <HostingTypeDescription>
            Choose to receive applications through iContribute. We'll store all
            the opportunity details.
          </HostingTypeDescription>
        </Grid>
        <Grid item md={6}>
          <FormControlLabel
            value={HostingType.External}
            control={PrimaryRadio}
            label={
              <RadioLabel label="External Website" svg={<ExternalIcon />} />
            }
          />
          <HostingTypeDescription>
            Provide a link to you website. We’ll redirect applicants to your
            organization's website to apply for an opportunity.
          </HostingTypeDescription>
          
          {type === HostingType.External ? 
          (
<<<<<<< HEAD
          <InputField
            label="Website URL*"
            type="text"
            placeholder="example.org.com"
            fullWidth={true}
            onChange={handleUrlOnChange}
            value={url}
            id="opportunity-details-url"
          />
=======
          <div style={{ marginBottom: "-30px" }}>
            <InputField
              label="Website URL*"
              type="text"
              placeholder="example.org.com"
              fullWidth={true}
              onChange={handleUrlOnChange}
              value={url}
              id="opportunity-details-url"
            />
          </div>
>>>>>>> main
          ) : ''}
          
        </Grid>
      </Grid>
    </RadioGroup>
  );

  return (
    <Section
      title="How to apply"
      subtitle="Choose to receive applications through iContribute or redirect
                volunteers to an external link."
      content={content}
    />
  );
};

export default HowToApply;
