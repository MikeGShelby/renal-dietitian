import Button from "@mui/material/Button";
import ResponsiveSideBar from "./components/SideBarAndHeader";

// Context imports
import NutritionProblemContext from "./context/NutritionProblemContext";
import SideBarAndHeader from "./components/SideBarAndHeader";

function App() {
  return (
    <NutritionProblemContext>
      <div className="App">
        <SideBarAndHeader />
      </div>
    </NutritionProblemContext>
  );
}

export default App;
