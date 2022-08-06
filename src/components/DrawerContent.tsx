/* eslint-disable prettier/prettier */

// React, Next, and Material UI imports
import React, { useEffect, useState, useContext } from "react";
import { FormProvider, useForm, Controller } from "react-hook-form";
import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Drawer,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { GiLiver as LiverIcon, GiWaterBottle as WaterBottleIcon, GiWeightScale as WeightScaleIcon, GiBanana as BananaIcon } from "react-icons/gi";
import { TbBone as BoneIcon } from "react-icons/tb";

// Component imports
import SingleSelectRadioInput from "./FormInputs/SingleSelectRadioInput";
import SelectStringInput from "./FormInputs/SelectStringInput";
import NoteContainer from "./NoteContainer";

// Context imports
import { useNutritionProblemContext } from "../context/NutritionProblemContext";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import { rootCausesAndInterventionsData } from "../data/rootCausesAndInterventionsData";

// Type imports
import NutritionTopicDataType from "../lib/interfaces/NutritionTopicDataType";
import NutritionSubsectionDataType from "../lib/interfaces/NutritionSubsectionDataType";
import NutritionProblemDataType from "../lib/interfaces/NutritionProblemDataType";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DrawerContent(props: Props) {
  // Context hooks
  const {
    // PAGE AND SUBSECTION STATE
    pageList,
    setPageList,
    selectedPage,
    setSelectedPage,
    subsectionList,
    setSubsectionList,
    selectedSubsection,
    setSelectedSubsection,

    // PROBLEM STATE
    problemList,
    setProblemList,
    selectedProblem,
    setSelectedProblem,
    selectedProblemsArray,
    setSelectedProblemsArray,
    selectedWeightProblem,
    setSelectedWeightProblem,
    selectedFluidProblem,
    setSelectedFluidProblem,
    selectedAlbuminProblem,
    setSelectedAlbuminProblem,
    selectedPhosphorusProblem,
    setSelectedPhosphorusProblem,
    selectedPTHProblem,
    setSelectedPTHProblem,
    selectedCalciumProblem,
    setSelectedCalciumProblem,
    selectedPotassiumProblem,
    setSelectedPotassiumProblem,
    defaultProblemSelection,
    setDefaultProblemSelection,

    // **** ROOT CAUSE AND INTERVENTION STATE **** //
    rootCauseList,
    setRootCauseList,
    selectedRootCauses,
    setSelectedRootCauses,
  } = useNutritionProblemContext();

  // Misc. hooks
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // const {
  //   watch,
  //   control,
  //   formState: { errors },
  // } = useFormContext();

  // Add default values here
  const formMethods = useForm<any>({
    reValidateMode: "onChange",
  });

  // Use this if FormProvider is needed
  const { watch, control } = formMethods;

  // State hooks

  // const selectProblem = watch("selectProblem");
  const selectWeightProblem = watch("selectWeightProblem");
  const selectFluidProblem = watch("selectFluidProblem");
  const selectAlbuminProblem = watch("selectAlbuminProblem");
  const selectPhosphorusProblem = watch("selectPhosphorusProblem");
  const selectPTHProblem = watch("selectPTHProblem");
  const selectCalciumProblem = watch("selectCalciumProblem");
  const selectPotassiumProblem = watch("selectPotassiumProblem");

  // ************************** PAGE SELECTION ************************** //
  useEffect(() => {
    setSubsectionList(selectedPage?.subsections);
  }, [selectedPage]);

  // ************************** SUBSECTION SELECTION ************************** //
  useEffect(() => {
    setProblemList(selectedSubsection?.problems);
  }, [selectedSubsection]);

  // This filtered version of the array will not contain any undefined or null values. This should be displayed in the side drawer above the notes for all selected problems.
  // const selectedProblemsArrayWithoutUndefined = selectedProblemsArray.filter((element) => element !== undefined && element !== null);
  const selectedProblemsArrayWithoutUndefined = [...new Set(selectedProblemsArray.filter((element) => element !== undefined && element !== null))];

  // Root causes and interventions, filtered based on the selected problem
  const filteredRootCausesAndInterventions = rootCausesAndInterventionsData.filter((item) => item.groups.includes(defaultProblemSelection));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {nutritionTopicData.map((nutritionTopic) => (
          <ListItem key={nutritionTopic.title} disablePadding>
            <ListItemButton onClick={() => setSelectedPage(nutritionTopic)}>
              <ListItemIcon>
                {nutritionTopic.title === "Weight & Fluid" && <WeightScaleIcon />}
                {nutritionTopic.title === "Albumin" && <LiverIcon />}
                {nutritionTopic.title === "Bone & Mineral" && <BoneIcon />}
                {nutritionTopic.title === "Potassium" && <BananaIcon />}
              </ListItemIcon>
              <ListItemText primary={nutritionTopic.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {selectedProblemsArrayWithoutUndefined?.map((problem, index) => (
          <>
            <ListItem key={problem} disablePadding sx={{ backgroundColor: "red" }}>
              <ListItemText primary={problem} />
            </ListItem>
            <List>
              {rootCausesAndInterventionsData
                .filter((item) => item.groups.includes(problem))
                .filter((item) => selectedRootCauses?.includes(item.rootCause))
                .map((item) => (
                  <>
                    <ListItem key={item.rootCause} disablePadding>
                      <ListItemText primary={item.rootCause} />
                    </ListItem>
                  </>
                ))}
            </List>
          </>
        ))}
      </List>
    </div>
  );
}
