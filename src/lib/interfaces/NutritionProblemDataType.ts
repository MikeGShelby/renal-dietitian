import CauseAndInterventionDataType from "./CauseAndInterventionDataType";

export default interface NutritionProblemDataType {
  title: string;
  group: string;
  causesAndInterventions: CauseAndInterventionDataType[];
}
