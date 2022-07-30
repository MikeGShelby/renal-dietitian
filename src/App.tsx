import Button from "@mui/material/Button";
import ResponsiveSideBar from "./components/ResponsiveSideBar";

// Context imports
import NutritionProblemContext from "./context/NutritionProblemContext";

function App() {
  return (
    <NutritionProblemContext>
      <div className="App">
        :D !!!!
        <Button variant="contained">First MUI Component</Button>
        <ResponsiveSideBar />
      </div>
    </NutritionProblemContext>
  );
}

export default App;
