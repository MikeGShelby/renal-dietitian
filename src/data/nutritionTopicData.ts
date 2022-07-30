export const nutritionTopicData = [
  {
    title: "Weight & Fluid",
    description: "???",
    subsections: [
      {
        title: "Weight",
        name: "selectWeightProblem",
        labelID: "weight-problem-select",
        problems: [
          {
            title: ">= 5% EDW loss in 1 month",
            group: "Weight Loss",
          },
          {
            title: ">= 7.5% EDW loss in 3 months",
            group: "Weight Loss",
          },
        ],
      },
      {
        title: "Fluid",
        name: "selectFluidProblem",
        labelID: "fluid-problem-select",
        problems: [
          {
            title: "Average IDWG > 4% EDW",
            group: "High Fluid",
          },
        ],
      },
    ],
  },

  {
    title: "Albumin",
    description: "???",
    subsections: [
      {
        title: "Albumin",
        name: "selectAlbuminProblem",
        labelID: "albumin-problem-select",
        problems: [
          {
            title: "Albumin < 4.0 g/dL",
            group: "Low Albumin",
          },
        ],
      },
    ],
  },
  {
    title: "Bone & Mineral",
    description: "???",
    subsections: [
      {
        title: "Phosphorus",
        name: "selectPhosphorusProblem",
        labelID: "phosphorus-problem-select",
        problems: [
          {
            title: "Phosphorus > 5.5",
            group: "High Phosphorus",
          },
          {
            title: "Phosphorus < 3.0",
            group: "Low Phosphorus",
          },
        ],
      },
      {
        title: "PTH",
        name: "selectPTHProblem",
        labelID: "PTH-problem-select",
        problems: [
          {
            title: "PTH > 760",
            group: "High PTH",
          },
          {
            title: "PTH < 150",
            group: "Low PTH",
          },
        ],
      },
      {
        title: "Calcium",
        name: "selectCalciumProblem",
        labelID: "calcium-problem-select",
        problems: [
          {
            title: "Calcium > 10.2",
            group: "High Calcium",
          },
        ],
      },
    ],
  },
];
