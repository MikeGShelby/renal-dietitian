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
import SelectedPageContent from "./SelectedPageContent";

// Context imports
import { useNutritionProblemContext } from "../context/NutritionProblemContext";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";

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

export default function SideBarAndHeader(props: Props) {
  // Context hooks
  const {
    pageList,
    setPageList,
    selectedPage,
    setSelectedPage,
    subsectionList,
    setSubsectionList,
    selectedSubsection,
    setSelectedSubsection,
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

  // This filtered version of the array will not contain any undefined values
  const selectedProblemsArrayWithoutUndefined = selectedProblemsArray.filter((element) => {
    return element !== undefined;
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            {/* <MenuIcon /> */}
            MenuIcon
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* {drawer} */}
          <DrawerContent />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {/* {drawer} */}
          <DrawerContent />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingLeft: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <SelectedPageContent />
      </Box>
    </Box>
  );
}
