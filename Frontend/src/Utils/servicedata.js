import skinimg from '../assets/images/Skincare.webp'
import Hairimg from '../assets/images/Hairimg.webp'
import lazer from '../assets/images/Anti-agingimg (4).webp'
import Antiagingimg from '../assets/images/Anti-agingimg (1).webp'
import semipaermanetmakeup from '../assets/images/semi-permanentimg.webp'
import weightlossimg from '../assets/images/Weightlossimg.webp'
import IVRimg from "../assets/images/IVR.webp"

export const services = [
  /* --------------------------------------------------
     1. SKIN CARE 
  -------------------------------------------------- */
  {
    id: 1,
    imageName: skinimg,
    serviceName: "Skin Care",
    subHeading: "Advanced treatments for glowing, clear, and healthy skin.",
    buttonLink: "/services/skin",

    details: {
      FacialTreatments: [
        "HydraFacial",
        "Microdermabrasion",
        "Vampire Facial (PRP)",
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
        "Dermaplaning HydraFacial"
      ],

      LaserSkinTreatments: [
        "Carbon Peel Laser",
        "Hollywood Laser Peel",
        "Laser Skin Rejuvenation",
        "Laser for Dark Spots",
        "Laser for Pigmentation",
        "Laser Toning"
      ],

      PigmentationBrightening: [
        "Chemical Peels (Superficial, Medium, Deep)",
        "Body Peels (knees, elbows, feet, back)",
        "Melasma Treatment",
        "Pigmentation Removal",
        "Tan Removal",
        "Skin Brightening Treatment"
      ],

      AcneTreatments: [
        "Acne Treatment",
        "Acne Scar Removal",
        "Laser for Acne Scars",
        "Subcision",
        "PRP for Acne Scars"
      ],

      SkinRejuvenation: [
        "Microneedling",
        "Mesotherapy",
        "Skin Booster Treatment",
        "Collagen Induction Therapy"
      ],

      OtherSkinSolutions: [
        "Wart Removal",
        "Mole Removal",
        "Skin Tag Removal",
        "Open Pores Treatment",
        "Anti-Aging Skin Tightening",
        "Under-Eye Dark Circle Treatment",
        "Dark Peri-Oral Mouth Lightening",
        "Dark Lip Lightening",
        "Ear lobe repair"
      ]
    }
  },

  /* --------------------------------------------------
     2. HAIR CARE
  -------------------------------------------------- */
  {
    id: 2,
    imageName: Hairimg,
    serviceName: "Hair Care",
    subHeading: "Revitalize your scalp and restore strong, beautiful hair.",
    buttonLink: "/services/hair",

    details: {
      HairGrowthWellness: [
        "PRP Therapy",
        "GFC Therapy",
        "Mesotherapy for Hair",
        "Stem Cell (Exosomes) Therapy",
        "Monothreads",
        "Scalp Micropigmentation",
        "Dandruff Treatment",
        "Laser Hair Reduction",
      ],

      AdvancedHairRestoration: [
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
    subHeading: "Safe & effective laser solutions for skin and hair concerns.",
    buttonLink: "/services/laser",

    details: {
      LaserHairRemoval: [
        "Full Body Laser Hair Reduction",
        "Face Laser Hair Reduction",
        "Underarm Laser",
        "Bikini Line Laser",
        "Hands/Legs Laser",
        "Chest/Back Laser",
        "Small areas like upper lip, chin etc"
      ],

      LaserPigmentationRemoval: [
        "Laser for Dark Spots",
        "Laser for Melasma",
        "Laser for Age Spots",
        "Laser Skin Brightening"
      ],

      LaserTattooRemoval: [
        "Black Tattoo Removal",
        "Color Tattoo Removal"
      ],

      LaserScarRemoval: [
        "Acne Scar Laser",
        "Burn Scar Removal",
        "Stretch Marks Laser"
      ],

      OtherLaserTreatments: [
        "Laser Skin Lightening",
        "Laser Earlobe Repair",
        "Fractional CO2 Resurfacing Laser"
      ]
    }
  },

  /* --------------------------------------------------
     4. ANTI-AGING
  -------------------------------------------------- */
  {
    id: 4,
    imageName: Antiagingimg,
    serviceName: "Anti-Ageing",
    subHeading: "Reverse signs of ageing with modern aesthetic technologies.",
    buttonLink: "/services/anti-ageing",

    details: {
      Injectables: [
        "Botox (Wrinkle Treatment)",
        "Fillers (Cheek, Chin, Jawline, Under-Eye)",
        "Lip Enhancement Fillers",
        "Smile Line Fillers"
      ],

      SkinTightening: [
        "Thread Lift",
        "Non-Surgical Face Lift",
        "HIFU Face Lift",
        "Double-Chin Tightening"
      ],

      RFSkinRejuvenation: [
        "Skin Booster Injection",
        "Collagen Boosting Treatment"
      ],

      UnderEyeLipSolutions: [
        "Under-Eye Filler",
        "Tear Trough Correction",
        "Fine Lines Reduction",
        "Lip Microneedling",
        "Lip Blush",
        "Lip Laser",
        "Lip Resurfacing",
        "Lip Fillers",
        "Lip Hydrators",
        "PDRN Treatment"
      ]
    }
  },

  /* --------------------------------------------------
     5. SEMI PERMANENT MAKEUP
  -------------------------------------------------- */
  {
    id: 5,
    imageName: semipaermanetmakeup,
    serviceName: "Semi-Permanent Makeup",
    subHeading: "Enhance your natural features with long-lasting artistry.",
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
     6. WEIGHT LOSS
  -------------------------------------------------- */
  {
    id: 6,
    imageName: weightlossimg,
    serviceName: "Weight Loss",
    subHeading: "Personalized slimming, fat-loss, and body-shaping solutions.",
    buttonLink: "/services/weight-loss",

    details: {
      InjectionBasedFatLoss: [
        "Double Chin Fat-Loss Injection",
        "Belly Fat-Loss Injection",
        "Arm Fat-Loss Injection",
        "Thigh Fat-Loss Injection",
        "Buttock Fat-Loss Injection",
        "Breast Fat-Loss Injection",
        "Full Body Fat-Loss Injection",
        "Mounjaro Treatment"
      ],

      OtherBodyTreatments: [
        "Stretch Mark Reduction (Laser / Microneedling)",
        "Skin Tightening for Body",
        "Body Whitening Treatment",
        "Body Peels"
      ]
    }
  },

  /* --------------------------------------------------
     7. IV DRIP THERAPY (extra category)
  -------------------------------------------------- */
  {
    id: 7,
    imageName: IVRimg,
    serviceName: "IV Drip Therapy",
    subHeading: "Boost wellness, immunity, glow & energy with advanced IV drips.",
    buttonLink: "/services/",

    details: {
      IVDrips: [
        "IV Glutathione Glow",
        "IV NAD+ Anti-Aging",
        "IV Slimming Body Drip",
        "IV Body Detoxifier"
      ]
    }
  }
];
