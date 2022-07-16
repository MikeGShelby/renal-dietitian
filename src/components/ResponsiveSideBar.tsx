/* eslint-disable prettier/prettier */

// React, Next, and Material UI imports
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import {
  AppBar,
  Box,
  Button,
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
  Toolbar,
  Typography,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

import { GiLiver as LiverIcon, GiWaterBottle as WaterBottleIcon, GiWeightScale as WeightScaleIcon, GiBanana as BananaIcon } from "react-icons/gi";
import { TbBone as BoneIcon } from "react-icons/tb";

// data imports
import { nutritionTopicData } from "../data/nutritionTopicData2";
import { rootCausesAndInterventions } from "../data/rootCausesAndInterventions";
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

  // const selectPhosphorusProblem = watch("selectPhosphorusProblem");
  // Create problem selection each time the selection variable changes
  // useEffect(() => {
  //   setSelectedPhosphorusProblem(selectPhosphorusProblem);
  // }, [selectPhosphorusProblem]);

  // State hooks
  const [selectedPage, setSelectedPage] = useState<NutritionTopicDataType>(nutritionTopicData[0]);
  const [selectedSubsection, setSelectedSubsection] = useState<NutritionSubsectionDataType>(selectedPage.subsections[0]);
  const [selectedProblemsArray, setSelectedProblemsArray] = useState<string[] | null>([]);
  const [selectedPhosphorusProblem, setSelectedPhosphorusProblem] = useState<string>("");
  const [selectedAlbuminProblem, setSelectedAlbuminProblem] = useState<string>("");

  useEffect(() => {
    setSelectedSubsection(selectedPage.subsections[0]);
  }, [selectedPage]);

  useEffect(() => {
    setSelectedProblemsArray([selectedPhosphorusProblem, selectedAlbuminProblem]);
  }, [selectedPage, selectedAlbuminProblem, selectedPhosphorusProblem]);

  useEffect(() => {
    // setSelectedProblemsArray(null);
  }, [selectedSubsection]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (selectedSubsection.title) {
      case "Phosphorus":
        setSelectedPhosphorusProblem((event.target as HTMLInputElement).value);
        // setSelectedProblemsArray.push((event.target as HTMLInputElement).value);
        break;
      case "Albumin":
        setSelectedAlbuminProblem((event.target as HTMLInputElement).value);
        break;
    }
  };

  function handleClick(event: any) {
    if (event.target.value === selectedPhosphorusProblem) {
      setSelectedPhosphorusProblem("");
    } else {
      setSelectedPhosphorusProblem(event.target.value);
    }
  }

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
        {selectedProblemsArray?.map((problem, index) => (
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
          <Grid container>
            {selectedPage?.subsections.length > 1 && (
              <>
                {selectedPage?.subsections.map((subsection, index) => (
                  <Grid item key={subsection.title}>
                    <Button onClick={() => setSelectedSubsection(subsection)}>{subsection.title}</Button>
                  </Grid>
                ))}
              </>
            )}
          </Grid>
        </Box>
        <Typography variant="h4" gutterBottom>
          Selected Subsection: {selectedSubsection?.title}
        </Typography>

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Select a Problem</FormLabel>
          <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={selectedPhosphorusProblem}>
            {selectedSubsection?.problems.map((problem, index) => (
              <>
                <FormControlLabel key={problem.group} value={problem.group} control={<Radio onClick={handleClick} />} label={problem.title} />
              </>
            ))}
          </RadioGroup>
        </FormControl>

        <Typography variant="body1">Selected Problem: {"N/A"}</Typography>

        {selectedSubsection && (
          <>
            <Typography variant="h5" gutterBottom>
              Select Root Causes
            </Typography>
            <Grid container>
              {rootCausesAndInterventions
                .filter((item) => item.groups.includes(selectedPhosphorusProblem))
                .map((item) => (
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
