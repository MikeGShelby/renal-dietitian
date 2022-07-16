import NutritionSubsectionDataType from "./NutritionSubsectionDataType";

export default interface NutritionTopicDataType {
  title: string;
  description: string;
  subsections: NutritionSubsectionDataType[];
}
