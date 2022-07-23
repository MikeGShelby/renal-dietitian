import NutritionProblemDataType from "./NutritionProblemDataType";

export default interface NutritionSubsectionDataType {
  title: string;
  name: string;
  labelID: string;
  problems: NutritionProblemDataType[];
}
