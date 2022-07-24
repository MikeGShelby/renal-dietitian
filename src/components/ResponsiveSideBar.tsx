/* eslint-disable prettier/prettier */

// React, Next, and Material UI imports
import React, { useEffect, useState } from "react";
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

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import { rootCausesAndInterventions } from "../data/rootCausesAndInterventions";

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

export default function ResponsiveDrawer(props: Props) {
  // Context hooks
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
  const [pageList, setPageList] = useState<NutritionTopicDataType[]>(nutritionTopicData);
  const [selectedPage, setSelectedPage] = useState<NutritionTopicDataType>(nutritionTopicData[0]);

  const [subsectionList, setSubsectionList] = useState<NutritionSubsectionDataType[]>(nutritionTopicData[0].subsections);
  const [selectedSubsection, setSelectedSubsection] = useState<NutritionSubsectionDataType>(selectedPage.subsections[0]);

  const [problemList, setProblemList] = useState<NutritionProblemDataType[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<NutritionProblemDataType | null>();

  const [selectedProblemsArray, setSelectedProblemsArray] = useState<string[]>([]);

  const [selectedWeightProblem, setSelectedWeightProblem] = useState<string | null>();
  const [selectedFluidProblem, setSelectedFluidProblem] = useState<string | undefined>();
  const [selectedAlbuminProblem, setSelectedAlbuminProblem] = useState<string | null>();
  const [selectedPhosphorusProblem, setSelectedPhosphorusProblem] = useState<string | null>();
  const [selectedPTHProblem, setSelectedPTHProblem] = useState<string | null>();
  const [selectedCalciumProblem, setSelectedCalciumProblem] = useState<string | null>();
  const [selectedPotassiumProblem, setSelectedPotassiumProblem] = useState<string | null>();

  const [defaultProblemSelection, setDefaultProblemSelection] = useState<string>("");

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

  const getProblemFromName = (groupName: string) => {
    setSelectedProblem(problemList.find((problem) => problem.group === groupName));
  };

  // Each time a page subsection is selected, update the default value to display the selected problem for that particular subsection.
  useEffect(() => {
    switch (selectedSubsection?.title) {
      case "Weight":
        setSelectedProblem(problemList.find((problem) => problem.group === selectWeightProblem));
        setSelectedWeightProblem(selectWeightProblem);
        break;
      case "Fluid":
        setSelectedProblem(problemList.find((problem) => problem.group === selectFluidProblem));
        setSelectedFluidProblem(selectFluidProblem);
        break;
      case "Albumin":
        setSelectedProblem(problemList.find((problem) => problem.group === selectAlbuminProblem));
        setSelectedAlbuminProblem(selectAlbuminProblem);
        break;
      case "Phosphorus":
        setSelectedProblem(problemList.find((problem) => problem.group === selectPhosphorusProblem));
        setSelectedPhosphorusProblem(selectPhosphorusProblem);
        break;
      case "PTH":
        setSelectedProblem(problemList.find((problem) => problem.group === selectPTHProblem));
        setSelectedPTHProblem(selectPTHProblem);
        break;
      case "Calcium":
        setSelectedProblem(problemList.find((problem) => problem.group === selectCalciumProblem));
        setSelectedCalciumProblem(selectCalciumProblem);
        break;
      case "Potassium":
        setSelectedProblem(problemList.find((problem) => problem.group === selectFluidProblem));
        setSelectedPotassiumProblem(selectPotassiumProblem);
        break;
    }
    console.log("currently selected problem", selectedProblem);
  }, [
    selectedSubsection,
    selectedProblem,
    selectWeightProblem,
    selectFluidProblem,
    selectAlbuminProblem,
    selectPhosphorusProblem,
    selectPTHProblem,
    selectCalciumProblem,
    selectPotassiumProblem,
  ]);

  // ************************** SUBSECTION SELECTION ************************** //
  // useEffect(() => {
  //   setSelectedProblem(selectProblem);

  //   // console.log(subsectionList?.find((subsection) => subsection.title == selectSubsection));

  //   // setSelectedSubsection(subsectionList?.find((subsection) => subsection.title == selectSubsection));
  //   // setAreaList(locationList?.find((location) => location.title == selectLocation)?.areas);
  // }, [selectProblem]);

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

  // Each time the selected page or problem changes, add the selected problem to the selected problems array.
  useEffect(() => {
    setSelectedProblemsArray([
      selectWeightProblem?.title,
      selectFluidProblem?.title,
      selectAlbuminProblem?.title,
      selectPhosphorusProblem?.title,
      selectPTHProblem?.title,
      selectCalciumProblem?.title,
      selectPotassiumProblem?.title,
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

  // This filtered version of the array will not contain any undefined values
  const selectedProblemsArrayWithoutUndefined = selectedProblemsArray.filter((element) => {
    return element !== undefined;
  });

  // Root causes and interventions, filtered based on the selected problem
  const filteredRootCausesAndInterventions = rootCausesAndInterventions.filter((item) => item.groups.includes(defaultProblemSelection));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {nutritionTopicData.map((nutritionTopic, index) => (
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
        {["All"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LiverIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {selectedProblemsArrayWithoutUndefined?.map((problem, index) => (
          <>
            <ListItem key={problem} disablePadding>
              <ListItemButton>
                <ListItemText primary={problem} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </div>
  );

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
          {drawer}
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
          {drawer}
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

        <NoteContainer title={selectedSubsection?.title} />

        {/* Nutrition Problem Buttons */}
        {problemList.map((problem) => problem.title)}

        <FormProvider {...formMethods}>
          <SingleSelectRadioInput
            key={selectedSubsection?.title}
            name={selectedSubsection?.name}
            labelID={selectedSubsection?.labelID}
            labelText={selectedSubsection?.title}
            // defaultValue={defaultProblemSelection}
            array={selectedSubsection?.problems.map((problem, index) => problem.group)}
          />

          <SelectStringInput
            name={selectedSubsection?.name}
            labelID={selectedSubsection?.labelID}
            labelText={selectedSubsection?.title}
            defaultValue={selectedProblem?.group}
            array={problemList.map((problem) => problem.group)}
          />
        </FormProvider>

        <Typography variant="body1">
          <>Selected Problem: {selectedProblem?.title}</>
        </Typography>

        {selectedSubsection && (
          <>
            <Typography variant="h5" gutterBottom>
              Select Root Causes
            </Typography>
            <Grid container>
              {filteredRootCausesAndInterventions.map((item) => (
                <>
                  <Grid item xs={6}>
                    <Button onClick={() => console.log(item.rootCause)} value={item.rootCause}>
                      {item.rootCause}
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button onClick={() => console.log(item.intervention)} value={item.intervention}>
                      {item.intervention}
                    </Button>
                  </Grid>
                </>
              ))}
            </Grid>
          </>
        )}
      </Box>
    </Box>
  );
}
