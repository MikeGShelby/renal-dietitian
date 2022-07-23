/* eslint-disable prettier/prettier */

// React, Next, and Material UI imports
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { HiOutlineClipboardCopy as CopyIcon } from "react-icons/hi";
import { ImCheckmark2 as CheckmarkIcon } from "react-icons/im";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import { rootCausesAndInterventions } from "../data/rootCausesAndInterventions";
import NutritionTopicDataType from "../lib/interfaces/NutritionTopicDataType";

interface Props {
  buttonText: string;
  notes: string;
}

export default function CopyToClipboardButton({ buttonText, notes }: Props) {
  // Context hooks

  // State hooks
  const [copied, setCopied] = useState<string>(`Copy ${buttonText} Notes`);

  // Reset the copied text when the notes change (e.g. when the user selects a differet page/subsection)
  useEffect(() => {
    setCopied(`Copy ${buttonText} Notes`);
  }, [notes]);

  let buttonBackgroundColor = { backgroundColor: "green" };
  if (copied.includes(`Copied`)) {
    buttonBackgroundColor = { backgroundColor: "#C0C0C0" };
  }

  return (
    <Button
      color="inherit"
      variant="contained"
      disabled={copied.includes(`Copied`)}
      aria-label="open drawer"
      onClick={() => {
        navigator.clipboard.writeText(notes);
        setCopied(`${buttonText} Notes Copied`);
      }}
      sx={{ font: "medium", cursor: "pointer", padding: 1, width: "100%" }}
      style={buttonBackgroundColor}
    >
      {copied.includes(`Copied`) ? <CheckmarkIcon /> : <CopyIcon />}
      <Typography variant="body1" gutterBottom sx={{ marginLeft: 2 }}>
        {copied}
      </Typography>
    </Button>
  );
}
