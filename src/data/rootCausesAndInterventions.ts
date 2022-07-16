export const rootCausesAndInterventions = [
  {
    rootCause: "spKt/V < 1.2.",
    intervention: "Consult with physician/IDT.",
    type: "Clinical/Medical",
    groups: ["Low Albumin", "High Phosphorus", "High Potassium"],
  },

  {
    rootCause: "Inadequate oral intake.",
    intervention: "Provided education and counseling on ways to increase nutritional intake.",
    type: "Nuritional",
    groups: ["Weight Loss", "Low Albumin", "Low Phosphorus", "Low Potassium"],
  },
  {
    rootCause: "Inadequate nutritional intake (below 1.2 g of protein and/or 30-35 calories per kilogram of adjusted Edema-Free BodyWeight)",
    intervention: "Provided education and counseling on ways to increase nutritional intake.",
    type: "Nuritional",
    groups: ["Weight Loss", "Low Albumin"],
  },
  {
    rootCause: "Recent hospitalization in 1 month.",
    intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
    type: "Clinical/Medical",
    groups: ["Weight Loss", "Low Albumin"],
  },
  {
    rootCause: "Recent hospitalization in 1 month.",
    intervention: "Encouraged patient to eat adequate protein / calories from meals and snacks.",
    type: "Clinical/Medical",
    groups: ["Weight Loss", "Low Albumin"],
  },
  {
    rootCause: "No clear nutritional cause identified.",
    intervention: "Encouraged adequate intake. Continue to monitor weight trend closely.",
    type: "Nuritional",
    groups: ["Weight Loss", "Low Albumin"],
  },
  {
    rootCause: "No clear nutritional cause identified in the Hypoalbuminemia Algorithm.",
    intervention: "Encouraged adequate intake. Continue to monitor albumin levels closely.",
    type: "Nuritional",
    groups: ["Weight Loss", "Low Albumin"],
  },

  {
    rootCause: "Patient reporting fluid intake exceeding 1.5 L daily.",
    intervention: "Provided education and counseling on reducing fluid intake.",
    type: "Nuritional",
    groups: ["High Fluid"],
  },
  {
    rootCause: "Frequent missed/shortened treatments.",
    intervention: "Encouraged patient to attend all dialysis treatments.",
    type: "Clinical/Medical",
    groups: ["High Fluid", "Low Albumin", "High Phosphorus", "High Potassium"],
  },
  {
    rootCause: "Frequent missed/shortened treatments.",
    intervention: "Encouraged patient to attend all dialysis treatments.",
    type: "Clinical/Medical",
    groups: ["High Fluid", "Low Albumin", "High Phosphorus", "High Potassium"],
  },

  {
    rootCause: "Diagnosed medical condition (e.g. liver condition).",
    intervention: "Encouraged patient to limit fluid intake and attend all dialysis treatments.",
    type: "Clinical/Medical",
    groups: ["High Fluid", "Low Albumin"],
  },
  {
    rootCause: "Diagnosed hepatic comorbidity (e.g. cirrhosis).",
    intervention: "Encouraged patient to following treatment plan for condition.",
    type: "Clinical/Medical",
    groups: ["High Fluid", "Low Albumin"],
  },

  {
    rootCause: "No ONSP order.",
    intervention: "Initiate ONSP order, 3x weekly, per ONSP Policy (FMS-CS-IC-I-111-005A)",
    type: "Medication/Supplement-Related",
    groups: ["Low Albumin"],
  },

  {
    rootCause: "IDWG >4% EDW, related to excessive daily fluid intake.",
    intervention: "Provided education and counseling on reducing fluid intake.",
    type: "Nuritional",
    groups: ["Low Albumin"],
  },
  {
    rootCause: "Vitamin D 25 (OH) < 30 ng/mL, related to inadequate intake and/or increased need.",
    intervention: "Recommended ProRenal+D multivitamin, providing 1000 IU of vitamin D daily. Recheck levels in 6 months.",
    type: "Medication/Supplement-Related",
    groups: ["Low Albumin"],
  },
  {
    rootCause: "Active CV Catheter.",
    intervention: "Provided education on importance of catheter removal.",
    type: "Clinical/Medical",
    groups: ["Low Albumin"],
  },

  {
    rootCause: "HCO3 < 22.",
    intervention: "Consult Physician/NP/PA and RN to obtain order for HCO3 dialysate prescription.",
    type: "Clinical/Medical",
    groups: ["Low Albumin"],
  },

  {
    rootCause: "No phosphate binder order.",
    intervention: "Recommended phosphate binder, per FMC Binder Optimization Program monthly report. Provided RN with FMC's recommendations to confirm with MD.",
    type: "Medication/Supplement-Related",
    groups: ["High Phosphorus"],
  },
  {
    rootCause: "Inadequate phosphate binder dose.",
    intervention: "Recommended phosphate binder dose increase, per FMC hyperphosphatemia algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High Phosphorus"],
  },
  {
    rootCause: "Ineffective phosphate binder.",
    intervention: "Recommended phosphate binder change, per FMC Binder Optimization Report.",
    type: "Medication/Supplement-Related",
    groups: ["High Phosphorus"],
  },
  {
    rootCause: "Poor binder adherence. Patient reports taking binder < 50% of the time.",
    intervention: "Provided education and counseling on importance of binder adherence for phosphorus control.",
    type: "Medication/Supplement-Related",
    groups: ["High Phosphorus"],
  },
  {
    rootCause: "Frequent intake of high-phosphate foods & beverages (e.g. fast food and processed foods containing phosphate additives).",
    intervention: "Provided education and counseling on ways to decrease intake of high-phosphate foods.",
    type: "Nutritional",
    groups: ["High Phosphorus"],
  },
  {
    rootCause: "High vitamin D analog dose.",
    intervention: "Recommended vitamin D decrease and Sensipar increase, per FMC BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High Phosphorus"],
  },

  {
    rootCause: "Patient taking phosphate binder.",
    intervention: "Recommmended dose reduction or discontinuation of phosphate lowering therapy, per FMC hyperphosphatemia algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["Low Phosphorus"],
  },
  {
    rootCause: "New to dialysis.",
    intervention: "Monitor phosphorus levels closely to ensure blood levels stabilize.",
    type: "Clinical/Medical",
    groups: ["Low Phosphorus"],
  },

  {
    rootCause: "No clear nutritional cause identified.",
    intervention: "Encouraged adequate intake. Continue to monitor phosphorus levels closely.",
    type: "Nutritional",
    groups: ["Low Phosphorus"],
  },

  {
    rootCause: "No vitamin D analog order.",
    intervention: "Recommended vitamin D analog, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High PTH"],
  },
  {
    rootCause: "Inadequate vitamin D analog order.",
    intervention: "Recommended vitamin D analog dose increase, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High PTH"],
  },
  {
    rootCause: "No calcimimetic order.",
    intervention: "Recommended Sensipar, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High PTH"],
  },
  {
    rootCause: "Inadequate calcimimetic order.",
    intervention: "Recommended Sensipar dose increase, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["High PTH"],
  },
  {
    rootCause: "Poor calcimimetic adherence (taking less than 50% of the time).",
    intervention: "Provided education and counseling on importance of calcimimetic adherence for PTH control.",
    type: "Medication/Supplement-Related",
    groups: ["High PTH"],
  },
  {
    rootCause: "Hyperphosphatemia.",
    intervention: "See hyperphosphatemia root causes and interventions.",
    type: "Clinical/Medical",
    groups: ["High PTH"],
  },

  {
    rootCause: "Vitamin D analog order.",
    intervention: "Recommended discontinuation of vitamin D analog, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["Low PTH"],
  },
  {
    rootCause: "Calcimimetic order.",
    intervention: "Recommended discontinuation of Sensipar, per BMM algorithm.",
    type: "Medication/Supplement-Related",
    groups: ["Low PTH"],
  },
  {
    rootCause: "S/P hyperparathyroidectomy.",
    intervention: "N/A",
    type: "Clinical/Medical",
    groups: ["Low PTH"],
  },

  {
    rootCause: "Patient taking a calcium-based binder.",
    intervention: "Recommended discontinuation of calcium-based binder.",
    type: "Medication/Supplement-Related",
    groups: ["High Calcium"],
  },
];
