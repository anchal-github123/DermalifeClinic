import skinimg from "../assets/images/Skincare2.webp";
import Hairimg from "../assets/images/Hairimg.webp";
import lazer from "../assets/images/Skincare.webp";
import Antiagingimg from "../assets/images/Anti-agingimg (1).webp";
import semipaermanetmakeup from "../assets/images/semi-permanentimg.webp";
import weightlossimg from "../assets/images/Weightlossimg.webp";
import IVRimg from "../assets/images/IVR.webp";

export const services = [
  /* --------------------------------------------------
     1. SKIN CARE & AESTHETICS
  -------------------------------------------------- */
  {
    id: 1,
    imageName: skinimg,
    serviceName: "Skin Care & Aesthetics",
    subHeading:
      "Advanced cosmetology treatments for glowing, clear and healthy skin.",
    buttonLink: "/services/skin",

    details: {
      FacialTreatments: [
        "Hydrafacial",
        "Microdermabrasion",
        "PRP Facial (Vampire Facial)",
        "Glass Skin Facial",
        "Medi-Facial",
        "Anti-Aging Facial",
        "Glow Facial",
        "Hollywood Facial",
        "Salmon DNA Facial",
        "Black Doll Facial",
        "Collagen Peptide Facial",
        "Snail Mucin Facial",
        "BB Glow Facial",
        "Dermaplaning Hydrafacial"
      ],

      LaserSkinTreatments: [
        "Carbon Peel Laser",
        "Hollywood Laser Peel",
        "Laser Skin Rejuvenation",
        "Laser Toning",
        "Laser for Pigmentation & Dark Spots"
      ],

      PigmentationBrightening: [
        "Chemical Peels",
        "Body Peels (knees, elbows, feet, back)",
        "Melasma Correction",
        "Pigmentation Reduction",
        "Tan Removal",
        "Skin Brightening Treatments"
      ],

      AcneCare: [
        "Acne Care Solutions",
        "Acne Scar Reduction",
        "Laser Acne Scar Treatment",
        "Subcision",
        "PRP for Acne Scars"
      ],

      SkinRejuvenation: [
        "Microneedling",
        "Mesotherapy",
        "Skin Booster Treatments",
        "Collagen Induction Therapy"
      ],

      OtherSkinSolutions: [
        "Wart Removal",
        "Mole Removal",
        "Skin Tag Removal",
        "Open Pores Treatment",
        "Skin Tightening",
        "Under-Eye Dark Circle Treatment",
        "Lip & Peri-Oral Pigmentation Care",
        "Earlobe Repair"
      ]
    }
  },

  /* --------------------------------------------------
     2. HAIR CARE & RESTORATION
  -------------------------------------------------- */
  {
    id: 2,
    imageName: Hairimg,
    serviceName: "Hair Care & Restoration",
    subHeading:
      "Advanced hair care solutions to strengthen, restore and rejuvenate hair.",
    buttonLink: "/services/hair",

    details: {
      HairGrowthTherapies: [
        "PRP Hair Therapy",
        "GFC Hair Therapy",
        "Hair Mesotherapy",
        "Exosomes Hair Therapy",
        "Scalp Micropigmentation",
        "Dandruff Control Treatments",
        "Laser Hair Reduction"
      ],

      AdvancedHairSolutions: [
        "Hair Transplant (FUE / FUT)",
        "Beard Transplant"
      ]
    }
  },

  /* --------------------------------------------------
     3. LASER TREATMENTS
  -------------------------------------------------- */
  {
    id: 3,
    imageName: lazer,
    serviceName: "Laser Treatments",
    subHeading:
      "Safe and effective laser treatments for skin, hair and body concerns.",
    buttonLink: "/services/laser",

    details: {
      LaserHairRemoval: [
        "Full Body Laser Hair Reduction",
        "Face Laser Hair Reduction",
        "Underarm Laser",
        "Bikini Line Laser",
        "Hands & Legs Laser",
        "Chest & Back Laser",
        "Small Area Laser (Upper Lip, Chin)"
      ],

      LaserPigmentation: [
        "Laser Pigmentation Reduction",
        "Laser Melasma Treatment",
        "Laser Skin Brightening"
      ],

      LaserTattooRemoval: [
        "Black Tattoo Removal",
        "Color Tattoo Removal"
      ],

      LaserScarReduction: [
        "Acne Scar Laser",
        "Burn Scar Reduction",
        "Stretch Marks Laser"
      ],

      OtherLaserTreatments: [
        "Laser Skin Lightening",
        "Laser Earlobe Repair",
        "Fractional CO2 Laser Resurfacing"
      ]
    }
  },

  /* --------------------------------------------------
     4. ANTI-AGEING & FACIAL REJUVENATION
  -------------------------------------------------- */
  {
    id: 4,
    imageName: Antiagingimg,
    serviceName: "Anti-Ageing & Rejuvenation",
    subHeading:
      "Non-surgical anti-ageing and facial rejuvenation treatments.",
    buttonLink: "/services/anti-ageing",

    details: {
      Injectables: [
        "Botox Wrinkle Reduction",
        "Dermal Fillers (Cheek, Chin, Jawline, Under-Eye)",
        "Lip Enhancement Fillers",
        "Smile Line Correction",
        "Fillers Facelift"
      ],

      SkinTightening: [
        "Thread Lift",
        "Non-Surgical Face Lift",
        "HIFU Face Lift",
        "Double Chin Tightening"
      ],

      SkinBoosters: [
        "Skin Booster Injections",
        "Collagen Boosting Treatments",
        "RF Skin Tightening",
        "PDRN Treatment",
        "Exosomes Treatment"
      ]
    }
  },

  /* --------------------------------------------------
     5. SEMI-PERMANENT MAKEUP
  -------------------------------------------------- */
  {
    id: 5,
    imageName: semipaermanetmakeup,
    serviceName: "Semi-Permanent Makeup",
    subHeading:
      "Enhance facial features with long-lasting semi-permanent makeup.",
    buttonLink: "/services/semi-permanent-makeup",

    details: {
      Eyebrows: [
        "Microblading",
        "Microshading",
        "Ombre Brows",
        "Combination Brows",
        "Eyebrow Lamination"
      ],

      Lips: [
        "Lip Blush",
        "Lip Neutralization",
        "Permanent Lip Tint"
      ],

      Face: [
        "BB Glow",
        "Mole Creation"
      ],

      Hair: [
        "Scalp Micropigmentation"
      ]
    }
  },

  /* --------------------------------------------------
     6. WEIGHT LOSS & BODY CONTOURING
  -------------------------------------------------- */
  {
    id: 6,
    imageName: weightlossimg,
    serviceName: "Weight Loss & Body Contouring",
    subHeading:
      "Non-surgical fat loss and body shaping treatments.",
    buttonLink: "/services/weight-loss",

    details: {
      FatLossInjections: [
        "Double Chin Fat Loss Injection",
        "Belly Fat Loss Injection",
        "Arm Fat Loss Injection",
        "Thigh Fat Loss Injection",
        "Buttock Fat Loss Injection",
        "Body Contouring Injection",
        "Mounjaro Treatment"
      ],

      BodyCare: [
        "Stretch Mark Reduction",
        "Body Skin Tightening",
        "Body Brightening Treatments",
        "Body Peels"
      ]
    }
  },

  /* --------------------------------------------------
     7. IV DRIP THERAPY
  -------------------------------------------------- */
  {
    id: 7,
    imageName: IVRimg,
    serviceName: "IV Drip Therapy",
    subHeading:
      "Advanced IV drips to boost glow, energy, immunity and wellness.",
    buttonLink: "/services/iv-drip-therapy",

    details: {
      IVDrips: [
        "IV Glutathione Glow Drip",
        "IV NAD+ Anti-Aging Drip",
        "IV Slimming Drip",
        "IV Detox Drip"
      ]
    }
  }
];
