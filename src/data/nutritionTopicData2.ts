export const nutritionTopicData = [
  {
    title: "Weight & Fluid",
    description: "???",
    subsections: [
      {
        title: "Weight",
        problems: [
          {
            title: ">= 5% EDW loss in 1 month",
            group: "Weight Loss",
            causesAndInterventions: [
              {
                rootCause: "Inadequate oral intake.",
                intervention: "Provided education and counseling on ways to increase nutritional intake.",
              },
              {
                rootCause: "Recent hospitalization in 1 month.",
                intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
              },
              {
                rootCause: "No clear nutritional cause identified.",
                intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
              },
            ],
          },
          {
            title: ">= 7.5% EDW loss in 3 months",
            group: "Weight Loss",
            causesAndInterventions: [
              {
                rootCause: "Inadequate oral intake.",
                intervention: "Provided education and counseling on ways to increase nutritional intake.",
              },
              {
                rootCause: "Recent hospitalization in 1 month.",
                intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
              },
              {
                rootCause: "No clear nutritional cause identified.",
                intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
              },
            ],
          },
        ],
      },
      {
        title: "Fluid",
        description: "???",
        problems: [
          {
            title: "Average IDWG > 4% EDW",
            group: "High Fluid",
            causesAndInterventions: [
              {
                rootCause: "Patient reporting fluid intake exceeding 1.5 L daily.",
                intervention: "Provided education and counseling on reducing fluid intake.",
              },
              {
                rootCause: "Frequent missed/shortened treatments.",
                intervention: "Encouraged patient to attend all dialysis treatments.",
              },
              {
                rootCause: "Diagnosed medical condition (e.g. liver condition). ",
                intervention: "Encouraged patient to limit fluid intake and attend all dialysis treatments.",
              },
            ],
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
        problems: [
          {
            title: "Albumin < 4.0 g/dL",
            group: "Low Albumin",
            causesAndInterventions: [
              {
                rootCause: "No ONSP order.",
                intervention: "Initiate ONSP order, 3x weekly, per ONSP Policy (FMS-CS-IC-I-111-005A)",
              },
              {
                rootCause: "Inadequate nutritional intake (below 1.2 g of protein and/or 30-35 calories per kilogram of adjusted Edema-Free BodyWeight)",
                intervention: "Provided education and counseling on ways to increase nutritional intake.",
              },
              {
                rootCause: "IDWG >4% EDW, related to excessive daily fluid intake.",
                intervention: "Provided education and counseling on reducing fluid intake.",
              },
              {
                rootCause: "Vitamin D 25 (OH) < 30 ng/mL, related to inadequate intake and/or increased need.",
                intervention: "Recommended ProRenal+D multivitamin, providing 1000 IU of vitamin D daily. Recheck levels in 6 months.",
              },
              {
                rootCause: "Active CV Catheter.",
                intervention: "Provided education on importance of catheter removal.",
              },
              {
                rootCause: "Recent hospitalization in 1 month.",
                intervention: "Encouraged patient to eat adequate protein / calories from meals and snacks.",
              },
              {
                rootCause: "Frequent missed/shortened treatments.",
                intervention: "Encouraged patient to attend all dialysis treatments.",
              },
              {
                rootCause: "spKt/V < 1.2.",
                intervention: "Consult with physician/IDT.",
              },
              {
                rootCause: "HCO3 < 22.",
                intervention: "Consult Physician/NP/PA and RN to obtain order for HCO3 dialysate prescription.",
              },
              {
                rootCause: "Diagnosed hepatic comorbidity (e.g. cirrhosis).",
                intervention: "Encouraged patient to following treatment plan for condition.",
              },
              {
                rootCause: "No clear nutritional cause identified in the Hypoalbuminemia Algorithm.",
                intervention: "Encouraged adequate intake. Continue to monitor albumin levels closely.",
              },
            ],
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
        problems: [
          {
            title: "Phosphorus > 5.5",
            group: "High Phosphorus",
            causesAndInterventions: [
              {
                rootCause: "No phosphate binder order.",
                intervention: "Recommended phosphate binder, per FMC Binder Optimization Program monthly report. Provided RN with FMC's recommendations to confirm with MD.",
              },
              {
                rootCause: "Inadequate phosphate binder dose.",
                intervention: "Recommended phosphate binder dose increase, per FMC hyperphosphatemia algorithm.",
              },
              {
                rootCause: "Ineffective phosphate binder.",
                intervention: "Recommended phosphate binder change, per FMC Binder Optimization Report.",
              },
              {
                rootCause: "Poor binder adherence. Patient reports taking binder < 50% of the time.",
                intervention: "Provided education and counseling on importance of binder adherence for phosphorus control.",
              },
              {
                rootCause: "Frequent intake of high-phosphate foods & beverages (e.g. fast food and processed foods containing phosphate additives).",
                intervention: "Provided education and counseling on ways to decrease intake of high-phosphate foods.",
              },
              {
                rootCause: "High vitamin D analog dose.",
                intervention: "Recommended vitamin D decrease and Sensipar increase, per FMC BMM algorithm.",
              },
              {
                rootCause: "Frequent missed/shortened treatments.",
                intervention: "Encouraged patient to attend all dialysis treatments.",
              },
            ],
          },
          {
            title: "Phosphorus < 3.0",
            group: "Low Phosphorus",
            causesAndInterventions: [
              {
                rootCause: "Patient taking phosphate binder.",
                intervention: "Recommmended dose reduction or discontinuation of phosphate lowering therapy, per FMC hyperphosphatemia algorithm.",
              },
              {
                rootCause: "New to dialysis.",
                intervention: "Monitor phosphorus levels closely to ensure blood levels stabilize.",
              },
              {
                rootCause: "Inadequate oral intake.",
                intervention: "Counseled patient to increase oral intake and check phosphorous at next monthly lab draw.",
              },
              {
                rootCause: "No clear nutritional cause identified.",
                intervention: "Encouraged adequate intake. Continue to monitor phosphorus levels closely.",
              },
            ],
          },
        ],
      },
      {
        title: "PTH",
        problems: [
          {
            title: "PTH > 760",
            group: "High PTH",
            causesAndInterventions: [
              {
                rootCause: "No vitamin D analog order.",
                intervention: "Recommended vitamin D analog, per BMM algorithm.",
              },
              {
                rootCause: "Inadequate vitamin D analog order.",
                intervention: "Recommended vitamin D analog dose increase, per BMM algorithm.",
              },
              {
                rootCause: "No calcimimetic order.",
                intervention: "Recommended Sensipar, per BMM algorithm.",
              },
              {
                rootCause: "Inadequate calcimimetic order.",
                intervention: "Recommended Sensipar dose increase, per BMM algorithm.",
              },
              {
                rootCause: "Poor calcimimetic adherence (taking less than 50% of the time).",
                intervention: "Provided education and counseling on importance of calcimimetic adherence for PTH control.",
              },
              {
                rootCause: "Hyperphosphatemia.",
                intervention: "See hyperphosphatemia root causes and interventions.",
              },
            ],
          },
          {
            title: "PTH < 150",
            group: "Low PTH",
            causesAndInterventions: [
              {
                rootCause: "Vitamin D analog order.",
                intervention: "Recommended discontinuation of vitamin D analog, per BMM algorithm.",
              },
              {
                rootCause: "Calcimimetic order.",
                intervention: "Recommended discontinuation of Sensipar, per BMM algorithm.",
              },
              {
                rootCause: "S/P hyperparathyroidectomy.",
                intervention: "N/A",
              },
            ],
          },
        ],
      },
      {
        title: "Calcium",
        problems: [
          {
            title: "Calcium > 10.2",
            group: "High Calcium",
            causesAndInterventions: [
              {
                rootCause: "Patient taking a calcium-based binder.",
                intervention: "Recommended discontinuation of calcium-based binder.",
              },
            ],
          },
        ],
      },
    ],
  },
];
