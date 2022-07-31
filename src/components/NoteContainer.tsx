/* eslint-disable prettier/prettier */

// React, Next, and Material UI imports
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Grid, Paper, Box, Typography, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { VscClearAll as ClearAllIcon } from "react-icons/vsc";

// component imports
import CopyToClipboardButton from "./CopyToClipboardButton";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import NutritionTopicDataType from "../lib/interfaces/NutritionTopicDataType";
import NoteContainerB from "./NoteContainer";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

interface Props {
  title: string;
}

export default function NoteContainer({ title }: Props) {
  // Context hooks

  // State hooks
  const [selectedPage, setSelectedPage] = useState<NutritionTopicDataType>(nutritionTopicData[0]);

  return (
    <Box sx={{ display: "flex" }}>
      <Paper style={{ padding: 40, width: 1000 }}>
        <Typography variant="h4" gutterBottom>
          {title} Notes
        </Typography>
        <IconButton onClick={() => console.log("clear all notes for this section")} sx={{ backgroundColor: "red" }}>
          <ClearAllIcon />
        </IconButton>
        <CopyToClipboardButton buttonText={title} notes={title} />
        <Typography variant="body1" gutterBottom>
          Note Text{" "}
        </Typography>
      </Paper>
    </Box>
  );
}
