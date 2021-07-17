import { useState } from "react";
import InternalCard from "./InternalCard";
import ExternalCard from "./ExternalCard";
import { Grid } from "@material-ui/core";
import { H1, Subtitle1 } from "../../styledComponents";

const ApplicationDetails = () => {
    const intitalState = { externalUrl: "", external: false, internal: false };
    const [selection, setSelection] = useState(intitalState);

    const setExternalUrl = (externalUrl: string) => {
        setSelection({ ...selection, externalUrl });
    };

    const setExternal = (external: boolean) => {
        setSelection({ ...selection, external });
    };

    const setInternal = (internal: boolean) => {
        setSelection({ ...selection, internal });
    };

    return (
        <div>
            <H1>How to Apply</H1>
            <Subtitle1>
                Choose to receive applications through iContribute or redirect
                volunteers to an external link
            </Subtitle1>
            <Grid container spacing={2}>
                <Grid item md={6}>
                    <InternalCard
                        selected={selection["internal"]}
                        disabled={selection["external"]}
                        setInternal={setInternal}
                    />
                </Grid>
                <Grid item md={6}>
                    <ExternalCard
                        selected={selection["external"]}
                        disabled={selection["internal"]}
                        url={selection["externalUrl"]}
                        setUrl={setExternalUrl}
                        setExternal={setExternal}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default ApplicationDetails;
