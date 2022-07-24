import React, { ReactElement } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

// Type imports
import NutritionProblemDataType from "../../lib/interfaces/NutritionProblemDataType";

// Context imports
interface Props {
  name: string;
  labelID: string;
  labelText: string;
  // defaultValue: NutritionProblemDataType | null;
  array: string[];
  // array: NutritionProblemDataType[];
}
export default function SingleSelectToggleInput({ name, labelID, labelText, array }: Props): ReactElement {
  // Context hooks
  const { control } = useFormContext();

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{labelText} Problems</FormLabel>
      <Controller
        rules={{ required: true }}
        name={name}
        control={control}
        render={({ field }) => (
          <RadioGroup {...field}>
            {array.map((item) => (
              <>
                <FormControlLabel value={item} control={<Radio />} label={item} style={{ backgroundColor: "blue", padding: 5, margin: 5, borderRadius: 10 }} />
              </>
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
}