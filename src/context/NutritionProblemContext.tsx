// React, Next, and Material UI imports
import { createContext, useContext, Dispatch, ReactElement, SetStateAction, useState } from "react";

// Context imports

// JSON imports
import { nutritionTopicData } from "../data/nutritionTopicData";
import { rootCausesAndInterventionsData } from "../data/rootCausesAndInterventionsData";

// Type imports
import CauseAndInterventionDataType from "../lib/interfaces/CauseAndInterventionDataType";
import NutritionProblemDataType from "../lib/interfaces/NutritionProblemDataType";
import NutritionSubsectionDataType from "../lib/interfaces/NutritionSubsectionDataType";
import NutritionTopicDataType from "../lib/interfaces/NutritionTopicDataType";

interface NutritionProblemContextType {
  // ************************** PAGE SELECTIONS ************************** //
  pageList: NutritionTopicDataType[];
  setPageList: Dispatch<SetStateAction<NutritionTopicDataType[]>>;

  selectedPage: NutritionTopicDataType;
  setSelectedPage: Dispatch<SetStateAction<NutritionTopicDataType>>;

  subsectionList: NutritionSubsectionDataType[];
  setSubsectionList: Dispatch<SetStateAction<NutritionSubsectionDataType[]>>;

  selectedSubsection: NutritionSubsectionDataType;
  setSelectedSubsection: Dispatch<SetStateAction<NutritionSubsectionDataType>>;

  problemList: NutritionProblemDataType[];
  setProblemList: Dispatch<SetStateAction<NutritionProblemDataType[]>>;

  selectedProblem: NutritionProblemDataType | null | undefined;
  setSelectedProblem: Dispatch<SetStateAction<NutritionProblemDataType | null | undefined>>;

  selectedProblemsArray: string[];
  setSelectedProblemsArray: Dispatch<SetStateAction<string[]>>;

  // ************************** NUTRITION PROBLEM SELECTIONS ************************** //
  selectedWeightProblem: string | null;
  setSelectedWeightProblem: Dispatch<SetStateAction<string | null>>;

  selectedFluidProblem: string | null;
  setSelectedFluidProblem: Dispatch<SetStateAction<string | null>>;

  selectedAlbuminProblem: string | null;
  setSelectedAlbuminProblem: Dispatch<SetStateAction<string | null>>;

  selectedPhosphorusProblem: string | null;
  setSelectedPhosphorusProblem: Dispatch<SetStateAction<string | null>>;

  selectedPTHProblem: string | null;
  setSelectedPTHProblem: Dispatch<SetStateAction<string | null>>;

  selectedCalciumProblem: string | null;
  setSelectedCalciumProblem: Dispatch<SetStateAction<string | null>>;

  selectedPotassiumProblem: string | null;
  setSelectedPotassiumProblem: Dispatch<SetStateAction<string | null>>;

  defaultProblemSelection: string;
  setDefaultProblemSelection: Dispatch<SetStateAction<string>>;

  // ************************** ROOT CAUSE/INTERVENTION SELECTIONS ************************** //
  rootCauseList: CauseAndInterventionDataType[];
  setRootCauseList: Dispatch<SetStateAction<CauseAndInterventionDataType[]>>;
  selectedRootCauses: CauseAndInterventionDataType[];
  setSelectedRootCauses: Dispatch<SetStateAction<CauseAndInterventionDataType[]>>;
}

const NutritionProblemContext = createContext<NutritionProblemContextType>({} as NutritionProblemContextType);

interface Props {
  children: React.ReactElement;
}

export default function NutritionProblemContextComponent({ children }: Props): ReactElement {
  // ************************** PAGE SELECTIONS ************************** //
  const [pageList, setPageList] = useState<NutritionTopicDataType[]>(nutritionTopicData);
  const [selectedPage, setSelectedPage] = useState<NutritionTopicDataType>(nutritionTopicData[0]);

  const [subsectionList, setSubsectionList] = useState<NutritionSubsectionDataType[]>(nutritionTopicData[0].subsections);
  const [selectedSubsection, setSelectedSubsection] = useState<NutritionSubsectionDataType>(selectedPage.subsections[0]);

  // ************************** PROBLEM SELECTIONS ************************** //
  const [problemList, setProblemList] = useState<NutritionProblemDataType[]>([]);
  const [selectedProblem, setSelectedProblem] = useState<NutritionProblemDataType | null | undefined>(null);

  const [selectedProblemsArray, setSelectedProblemsArray] = useState<string[]>([]);

  const [selectedWeightProblem, setSelectedWeightProblem] = useState<string | null>(null);
  const [selectedFluidProblem, setSelectedFluidProblem] = useState<string | null>(null);
  const [selectedAlbuminProblem, setSelectedAlbuminProblem] = useState<string | null>(null);
  const [selectedPhosphorusProblem, setSelectedPhosphorusProblem] = useState<string | null>(null);
  const [selectedPTHProblem, setSelectedPTHProblem] = useState<string | null>(null);
  const [selectedCalciumProblem, setSelectedCalciumProblem] = useState<string | null>(null);
  const [selectedPotassiumProblem, setSelectedPotassiumProblem] = useState<string | null>(null);

  const [defaultProblemSelection, setDefaultProblemSelection] = useState<string>("");

  // ************************** ROOT CAUSE/INTERVENTION SELECTIONS ************************** //
  const [rootCauseList, setRootCauseList] = useState<CauseAndInterventionDataType[]>(rootCausesAndInterventionsData);
  const [selectedRootCauses, setSelectedRootCauses] = useState<CauseAndInterventionDataType[]>([]);

  return (
    <NutritionProblemContext.Provider
      value={{
        // FILTER CONTROLS
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

        // ROOT CAUSE AND INTERVENTIONS
        rootCauseList,
        setRootCauseList,
        selectedRootCauses,
        setSelectedRootCauses,
      }}
    >
      {children}
    </NutritionProblemContext.Provider>
  );
}

export const useNutritionProblemContext = (): NutritionProblemContextType => useContext(NutritionProblemContext);
