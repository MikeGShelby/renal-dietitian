import React, { ReactElement } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, FormControlLabel, Grid, Typography } from "@mui/material";
// import { createStyles, makeStyles, Theme } from "@mui/material/styles";
import _ from "lodash";

// Context imports

// Type imports
import CauseAndInterventionDataType from "../../lib/interfaces/CauseAndInterventionDataType";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     input: {
//       "&:hover": {
//         backgroundColor: "rgb(7, 200, 200, 0.12)",
//         borderRadius: "0.25rem",
//       },
//     },
//   })
// );

interface Props {
  name: string;
  labelID: string;
  labelText: string;
  defaultValue: string[];
  array: string[];
  // defaultValue: CauseAndInterventionDataType[];
  // array: CauseAndInterventionDataType[];
}

export function MultiSelectCheckboxInput({ name, labelID, labelText, defaultValue, array }: Props): ReactElement {
  // Context hooks
  const {
    control,
    reset,
    formState: { errors },
  } = useFormContext();

  // const classes = useStyles();

  return (
    // If this component is either for a non-filter input (e.g. for the admin forms) or for the selectLocations filter, then display subheaders. Otherwise there is no need for the subheaders, as the Accordion summary headers will suffice.
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { value, onChange, ...inputProps }, fieldState: { error } }) => (
          <Grid container>
            {array.map((item) => (
              // If this component is for filter input, then display checkboxes in a single column. Otherwise, display the checkboxes in a multi-column grid.
              <Grid item key={item} xs={12}>
                <FormControlLabel
                  style={{ width: "100%" }}
                  // className={classes.input}
                  key={item}
                  label={item}
                  control={<Checkbox checked={value?.includes(item)} onChange={() => onChange(_.xor(value, [item]))} />}
                />
              </Grid>
            ))}
          </Grid>
        )}
      />
    </>
  );
}

export const MemoizedMultiSelectCheckboxInput = React.memo(MultiSelectCheckboxInput);
