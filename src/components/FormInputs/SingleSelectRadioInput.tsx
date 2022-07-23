import React, { ReactElement } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

// Context imports
interface Props {
  name: string;
  labelID: string;
  labelText: string;
  defaultValue: string | null;
  array: string[];
}
export default function SingleSelectToggleInput({ name, labelID, labelText, defaultValue, array }: Props): ReactElement {
  // Context hooks
  const { control } = useFormContext();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{labelText}</FormLabel>
      <Controller
        rules={{ required: true }}
        control={control}
        name={name}
        render={({ field }) => (
          <RadioGroup {...field}>
            {array.map((item) => (
              <>
                <FormControlLabel style={{ backgroundColor: "blue", padding: 5, margin: 5, borderRadius: 10 }} value={item} control={<Radio />} label={item} />
              </>
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}
