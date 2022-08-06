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
import DrawerContent from "./DrawerContent";
import { MemoizedMultiSelectCheckboxInput } from "./FormInputs/MultiSelectCheckboxInput";

// Context imports
import { useNutritionProblemContext } from "../context/NutritionProblemContext";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import { rootCausesAndInterventionsData } from "../data/rootCausesAndInterventionsData";

// Type imports
import NutritionTopicDataType from "../lib/interfaces/NutritionTopicDataType";
import NutritionSubsectionDataType from "../lib/interfaces/NutritionSubsectionDataType";
import NutritionProblemDataType from "../lib/interfaces/NutritionProblemDataType";
import CauseAndInterventionDataType from "../lib/interfaces/CauseAndInterventionDataType";

const drawerWidth = 240;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function SideBarAndHeader(props: Props) {
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

  const selectRootCausesAndInterventions = watch("selectRootCausesAndInterventions");

  // ************************** PAGE SELECTION ************************** //
  // useEffect(() => {
  //   setSubsectionList(selectedPage?.subsections);
  // }, [selectedPage]);

  // // ************************** SUBSECTION SELECTION ************************** //
  // useEffect(() => {
  //   setProblemList(selectedSubsection?.problems);
  // }, [selectedSubsection]);

  // Each time a page subsection or specific problem is selected, update the default problem value and the specific problem value to display the selected problem for the selected subsection.
  useEffect(() => {
    switch (selectedSubsection?.title) {
      case "Weight":
        setSelectedProblem(problemList.find((problem) => problem.group === selectWeightProblem) || null);
        setSelectedWeightProblem(selectWeightProblem);
        break;
      case "Fluid":
        setSelectedProblem(problemList.find((problem) => problem.group === selectFluidProblem) || null);
        setSelectedFluidProblem(selectFluidProblem);
        break;
      case "Albumin":
        setSelectedProblem(problemList.find((problem) => problem.group === selectAlbuminProblem) || null);
        setSelectedAlbuminProblem(selectAlbuminProblem);
        break;
      case "Phosphorus":
        setSelectedProblem(problemList.find((problem) => problem.group === selectPhosphorusProblem) || null);
        setSelectedPhosphorusProblem(selectPhosphorusProblem);
        break;
      case "PTH":
        setSelectedProblem(problemList.find((problem) => problem.group === selectPTHProblem) || null);
        setSelectedPTHProblem(selectPTHProblem);
        break;
      case "Calcium":
        setSelectedProblem(problemList.find((problem) => problem.group === selectCalciumProblem) || null);
        setSelectedCalciumProblem(selectCalciumProblem);
        break;
      case "Potassium":
        setSelectedProblem(problemList.find((problem) => problem.group === selectFluidProblem) || null);
        setSelectedPotassiumProblem(selectPotassiumProblem);
        break;
    }
  }, [
    selectedSubsection,
    // selectedProblem,
    selectWeightProblem,
    selectFluidProblem,
    selectAlbuminProblem,
    selectPhosphorusProblem,
    selectPTHProblem,
    selectCalciumProblem,
    selectPotassiumProblem,
  ]);

  // If phosphorus problem changes, then update hyperphosphatemia root cause and intervention selections.
  useEffect(() => {
    if (selectPhosphorusProblem === "High Phosphorus" && !selectedRootCauses?.includes("Hyperphosphatemia.")) {
      setSelectedRootCauses([...(selectedRootCauses || ""), "Hyperphosphatemia."]);
      console.log("high phosphorus is a problem and hyperphosphatemia is not a selected root cause");
      console.log("select root causes", selectRootCausesAndInterventions);
      console.log("selected root causes", selectedRootCauses);
    } else if (selectPhosphorusProblem === "Low Phosphorus" && selectedRootCauses?.includes("Hyperphosphatemia.")) {
      setSelectedRootCauses(selectedRootCauses?.filter((rootCause) => rootCause !== "Hyperphosphatemia") || []);

      console.log("Low phosphorus is a problem and hyperphosphatemia IS a selected root cause");
      console.log("select root causes", selectRootCausesAndInterventions);
      console.log("selected root causes", selectedRootCauses);
    }
  }, [selectPhosphorusProblem, selectPTHProblem]);

  /// ******
  useEffect(() => {
    setSelectedSubsection(selectedPage.subsections[0]);
  }, [selectedPage]);

  // Create problem selection each time the selection variable changes
  useEffect(() => {
    setSelectedWeightProblem(selectWeightProblem);
  }, [selectWeightProblem]);

  useEffect(() => {
    setSelectedFluidProblem(selectFluidProblem);
  }, [selectFluidProblem]);

  useEffect(() => {
    setSelectedAlbuminProblem(selectAlbuminProblem);
  }, [selectAlbuminProblem]);

  useEffect(() => {
    setSelectedPhosphorusProblem(selectPhosphorusProblem);
  }, [selectPhosphorusProblem]);

  useEffect(() => {
    setSelectedPTHProblem(selectPTHProblem);
  }, [selectPTHProblem]);

  useEffect(() => {
    setSelectedCalciumProblem(selectCalciumProblem);
  }, [selectCalciumProblem]);

  useEffect(() => {
    setSelectedPotassiumProblem(selectPotassiumProblem);
  }, [selectPotassiumProblem]);

  // ROOT CAUSES AND INTERVENTIONS //
  useEffect(() => {
    setSelectedRootCauses(selectRootCausesAndInterventions);
  }, [selectRootCausesAndInterventions]);

  // Each time the selected page or problem changes, add the selected problem to the selected problems array.
  useEffect(() => {
    setSelectedProblemsArray([
      selectWeightProblem,
      selectFluidProblem,
      selectAlbuminProblem,
      selectPhosphorusProblem,
      selectPTHProblem,
      selectCalciumProblem,
      selectPotassiumProblem,
    ]);
  }, [
    selectedPage,
    selectedProblem,
    selectWeightProblem,
    selectFluidProblem,
    selectAlbuminProblem,
    selectPhosphorusProblem,
    selectPTHProblem,
    selectCalciumProblem,
    selectPotassiumProblem,
  ]);

  // Each time the selected problem changes, update the selected root cause array to include any root cause that matches the selected problem.

  // Root causes and interventions, filtered based on the selected problem
  const filteredRootCausesAndInterventions = rootCausesAndInterventionsData.filter((item) => item.groups.includes(selectedProblem?.group || ""));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <FormProvider {...formMethods}>
        {/* Page Title and subsection header nav bar*/}
        <Box
          sx={{
            paddingBottom: 2,
            backgroundColor: "yellow",
            height: "125px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            {selectedPage?.title}
          </Typography>

          {/* Subsection Buttons */}
          {selectedPage?.subsections.length > 1 && (
            <Grid container>
              {subsectionList?.length > 1 && (
                <>
                  {subsectionList.map((subsection) => (
                    <Grid item key={subsection.title}>
                      <Button onClick={() => setSelectedSubsection(subsection)}>{subsection.title}</Button>
                    </Grid>
                  ))}
                </>
              )}
            </Grid>
          )}
        </Box>

        {/* Note container */}
        <NoteContainer title={selectedSubsection?.title} />

        {/* Nutrition problem selectors */}

        <SingleSelectRadioInput
          key={selectedSubsection?.title}
          name={selectedSubsection?.name}
          labelID={selectedSubsection?.labelID}
          labelText={selectedSubsection?.title}
          defaultValue={selectedProblem?.group || null}
          array={selectedSubsection?.problems.map((problem, index) => problem.group)}
        />

        <Typography variant="body1">
          <>Selected Problem: {selectedProblem?.title}</>
        </Typography>

        {/* Root Causes and Interventions */}

        {selectedProblem && (
          <>
            <Typography variant="h5" gutterBottom>
              Select Root Causes
              {selectRootCausesAndInterventions?.map((item: any) => item)}
            </Typography>

            {["Medication/Supplement-Related", "Nutritional", "Clinical/Medical"].map((category) => (
              <>
                {filteredRootCausesAndInterventions.filter((item) => item.type === category).length > 0 && (
                  <>
                    <Typography variant="h5" gutterBottom>
                      {category}
                    </Typography>

                    <MemoizedMultiSelectCheckboxInput
                      key={category}
                      name={"selectRootCausesAndInterventions"}
                      labelID={"label-id-selectRootCausesAndInterventions"}
                      labelText={"Select Root Causes and Interventions"}
                      defaultValue={selectedRootCauses}
                      // defaultValue={selectedRootCauses?.map((item) => item.rootCause)}
                      array={filteredRootCausesAndInterventions.filter((item) => item.type === category).map((item) => item.rootCause)}
                    />
                  </>
                )}
              </>
            ))}
          </>
        )}
      </FormProvider>
    </>
  );
}
