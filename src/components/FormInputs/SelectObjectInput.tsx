import React, { ReactElement, useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

interface Props {
  name: string;
  labelID: string;
  labelText: string;
  defaultValue?: string;
  array: object[];
}

export default function SelectObjectInput({ name, labelID, labelText, defaultValue, array }: Props): ReactElement {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl fullWidth>
      <InputLabel htmlFor={labelID}>{labelText}</InputLabel>
      <>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <Select {...field} id={labelID} style={{ color: "white", backgroundColor: "black" }}>
              <MenuItem value="None" key="">
                None
              </MenuItem>
              {array?.map((arrayItem) => (
                <></>
                // <MenuItem
                //   value={arrayItem?.title}
                //   key={arrayItem?.title}
                // >
                //   {arrayItem?.title}
                // </MenuItem>
              ))}
            </Select>
          )}
        />
      </>
    </FormControl>
  );
}
