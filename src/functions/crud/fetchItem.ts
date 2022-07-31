// data imports
import { nutritionTopicData } from "../../data/nutritionTopicData";

// Type imports
import NutritionTopicDataType from "../../lib/interfaces/NutritionTopicDataType";
import NutritionSubsectionDataType from "../../lib/interfaces/NutritionSubsectionDataType";
import NutritionProblemDataType from "../../lib/interfaces/NutritionProblemDataType";

// DINING LOCATION
const fetchNutritionProblem = async (groupName: string) => {
  const nutritionProblem = nutritionTopicData;

  return nutritionProblem;
};

export { fetchNutritionProblem };
