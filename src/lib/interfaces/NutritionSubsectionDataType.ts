import NutritionProblemDataType from "./NutritionProblemDataType";

export default interface NutritionSubsectionDataType {
  title: string;
  problems: NutritionProblemDataType[];
}
