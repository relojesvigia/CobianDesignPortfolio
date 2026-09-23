/**
 * Portfolio Data Configuration
 * 
 * Edit this file freely to add, remove, or modify:
 * - Designer information, bio, and contact links (Email, Phone, WhatsApp)
 * - CV skills, programs/software toolkit, and work experience
 * - Projects, case study sections (Concept, Ideation, Design Process, Materials, Final Product)
 * - Videography films and showreels
 * 
 * The right sidebar navigation and scroll tracker automatically synchronize
 * with the projects and sections configured here.
 */

export interface SoftwareTool {
  id: string;
  name: string;
  shortTag: string;
  color: string;
  textColor: string;
  level: 'EXPERT' | 'ADVANCED' | 'PROFICIENT';
  description: string;
}

export interface Competency {
  title: string;
  description: string;
  percentage: number;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
}

export interface ProjectSubSection {
  id: string; // e.g., 'concept', 'ideation', 'design-process', 'final-product'
  label: string; // Displayed in sidebar (e.g., 'Concept')
  title: string; // Heading displayed in main page
  description?: string;
  boldKeywords?: string[];
  image?: string;
  imageCaption?: string;
  sketchImage?: string;
  materialsImage?: string;
  details?: {
    subtitle?: string;
    text?: string;
    callouts?: { label: string; text: string }[];
  };
  specifications?: { label: string; value: string }[];
}

export interface PortfolioProject {
  id: string;
  number: string; // '01', '02', '03'
  title: string;
  subtitle: string;
  heroImage: string;
  brief: string;
  subSections: ProjectSubSection[];
}

export interface VideoProject {
  id: string;
  title: string;
  clientOrType: string;
  year: string;
  duration: string;
  role: string;
  description: string;
  videoUrl?: string;
  posterImage: string;
  aspectRatio: string;
}

export interface PortfolioData {
  designer: {
    name: string;
    titles: string[];
    email: string;
    phone: string;
    whatsappUrl: string;
    location: string;
    whoAmIParagraph: string;
    whoAmIBoldWords: string[];
  };
  cv: {
    eyebrow: string;
    title: string;
    subtitle: string;
    competencies: Competency[];
    softwareTools: SoftwareTool[];
    experience: ExperienceItem[];
  };
  projects: PortfolioProject[];
  videography: VideoProject[];
}

import ceramicLampsImg from '@/src/assets/images/ceramic_striped_lamps_1790144347868.jpg';
import bentwoodChairImg from '@/src/assets/images/bentwood_lounge_chair_1790144357848.jpg';
import petPodSketchImg from '@/src/assets/images/automotive_pet_pod_sketch_1790144368875.jpg';
import vinylToyImg from '@/src/assets/images/vinyl_toy_collectible_1790144380087.jpg';
import audioConsoleImg from '@/src/assets/images/monolith_audio_console_1790144390662.jpg';
import petPodProductImg from '@/src/assets/images/pet_travel_pod_product_1790145301999.jpg';
import petPodDiagramImg from '@/src/assets/images/pet_pod_materials_diagram_1790145314396.jpg';

export const portfolioData: PortfolioData = {
  designer: {
    name: "Pablo Cobian",
    titles: ["Industrial Designer", "Creative Videographer"],
    email: "cobian.borobia.pablo@gmail.com",
    phone: "+34 600 000 000",
    whatsappUrl: "https://w.app/pablocobian",
    location: "Madrid / Barcelona, Spain",
    whoAmIParagraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    whoAmIBoldWords: ["dolor", "tempor incididunt"],
  },

  cv: {
    eyebrow: "CURRICULUM VITAE",
    title: "Strengths and Experience",
    subtitle:
      "Bridging physical fabrication, digital CAD sculpting, and human factors into viable mass-manufacturable products.",
    competencies: [
      {
        title: "Industrial Design & Form Generation",
        description:
          "Translating emotional concepts into balanced proportions and tactile geometry.",
        percentage: 94,
      },
      {
        title: "Parametric CAD & Surface Modeling",
        description:
          "Advanced surfacing in Rhino 8, Fusion 360, and SolidWorks with class-A continuity.",
        percentage: 91,
      },
      {
        title: "Design for Manufacturing (DFM) & Prototyping",
        description:
          "Rapid tooling, vacuum casting, CNC milling, injection mold constraints, and slip-casting.",
        percentage: 88,
      },
      {
        title: "CMF & Sustainable Material Sourcing",
        description:
          "Specifying ceramics, bio-polymers, FSC-woods, and tactile post-processing finishes.",
        percentage: 85,
      },
    ],
    softwareTools: [
      {
        id: "ps",
        name: "Photoshop",
        shortTag: "Ps",
        color: "#001e36",
        textColor: "#31a8ff",
        level: "ADVANCED",
        description:
          "Photoshop: High-resolution texture mapping, CMF composite rendering, and post-production retouching.",
      },
      {
        id: "ai",
        name: "Illustrator",
        shortTag: "Ai",
        color: "#330000",
        textColor: "#ff9a00",
        level: "ADVANCED",
        description:
          "Illustrator: Vector technical schematics, scale orthographic drawings, iconography, and graphic packaging.",
      },
      {
        id: "acad",
        name: "AutoCAD",
        shortTag: "A",
        color: "#fce8e6",
        textColor: "#e11900",
        level: "PROFICIENT",
        description:
          "AutoCAD: Architectural floor clearance, dimensional shop drawings, and production laser cutting files.",
      },
      {
        id: "sw",
        name: "SolidWorks",
        shortTag: "sw",
        color: "#fde8e8",
        textColor: "#ea1d24",
        level: "EXPERT",
        description:
          "SolidWorks: Complex mechanical assemblies, parametric engineering, mold tooling analysis, and draft verification.",
      },
      {
        id: "rhino",
        name: "Rhino 8",
        shortTag: "Rh",
        color: "#2b2b2b",
        textColor: "#ffffff",
        level: "EXPERT",
        description:
          "Rhino 8: SubD organic freeform sculpting, NURBS curvature continuity (G2/G3), and Grasshopper computational patterns.",
      },
      {
        id: "f360",
        name: "Fusion 360",
        shortTag: "F360",
        color: "#fff1e6",
        textColor: "#ea7125",
        level: "ADVANCED",
        description:
          "Fusion 360: Generative design exploration, 3-axis CNC CAM toolpath preparation, and collaborative parametric iterations.",
      },
      {
        id: "dvr",
        name: "DaVinci Resolve",
        shortTag: "DVR",
        color: "#161c28",
        textColor: "#ff4757",
        level: "ADVANCED",
        description:
          "DaVinci Resolve: Node-based color grading, cinematic 35mm film emulation, audio mastering, and narrative video pacing.",
      },
      {
        id: "pr",
        name: "Adobe Premiere",
        shortTag: "Pr",
        color: "#270038",
        textColor: "#ea77ff",
        level: "ADVANCED",
        description:
          "Adobe Premiere: High-throughput video assembly, sound synchronization, dynamic cuts, and showreel delivery.",
      },
    ],
    experience: [
      {
        period: "2023 — Present",
        role: "Lead Industrial Designer & CMF Strategist",
        company: "Studio Cobian / Independent Practice",
        location: "Madrid, Spain",
        description:
          "Leading end-to-end product design cycles from raw conceptual sketches through DFM handoff for consumer hardware, domestic lighting, and bespoke furniture.",
      },
      {
        period: "2021 — 2023",
        role: "Product Design Engineer & CAD Sculptor",
        company: "Atelier Forma Studio",
        location: "Barcelona, Spain",
        description:
          "Engineered class-A surfaces for mass-production slip-cast ceramics and bentwood furniture. Supervised CNC tooling prototypes and vendor CMF approvals.",
      },
      {
        period: "2019 — 2021",
        role: "Junior Industrial Designer & Model Maker",
        company: "Voxel Design Collective",
        location: "Valencia, Spain",
        description:
          "Physical model making, silicone molding, vacuum casting, rapid 3D printing iterations, and ergonomic test bench evaluations.",
      },
    ],
  },

  projects: [
    {
      id: "project-1",
      number: "01",
      title: "Automotive Pet Travel Pod",
      subtitle: "Automotive Pet Travel Pod",
      heroImage: petPodProductImg,
      brief: "Project name and brief description of it.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          boldKeywords: ["dolor", "tempor incididunt", "nostrud", "consequat."],
          image: petPodProductImg,
          imageCaption: "A human-pet mobility capsule engineered for vehicular security and tranquility.",
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Form explorations bridging organic animal comfort curves with geometric automotive interior architecture.",
          boldKeywords: ["animal comfort curves", "interior architecture"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          boldKeywords: ["dolor", "tempor incididunt", "nostrud", "consequat."],
          sketchImage: petPodSketchImg,
          materialsImage: petPodDiagramImg,
          details: {
            subtitle: "Sketching",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            callouts: [
              { label: "Puerta de Acrílico", text: "Laser-cut 4mm curved clear acrylic door" },
              { label: "Banda de PVC Antideslizante", text: "Textured non-slip base grip" },
              { label: "Cubierta de Plastico ABS", text: "Impact-resistant thermoformed ABS shell" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "The completed capsule integrates seamlessly with ISOFIX anchors, providing crash-tested peace of mind and tactile warmth.",
          boldKeywords: ["crash-tested", "tactile warmth"],
          image: petPodProductImg,
          specifications: [
            { label: "Dimensions", value: "680 × 520 × 460 mm" },
            { label: "Mounting", value: "Universal ISOFIX + 3-point seatbelt" },
            { label: "Weight", value: "4.8 kg composite shell" },
            { label: "Canopy", value: "Tinted UV400 cast acrylic" },
          ],
        },
      ],
    },
    {
      id: "project-2",
      number: "02",
      title: "Bentwood Monocoque Lounger",
      subtitle: "Bentwood Monocoque Lounger",
      heroImage: bentwoodChairImg,
      brief: "Sculptural Danish-modern armchair in molded ash veneer and raw linen.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          boldKeywords: ["dolor", "tempor incididunt", "nostrud", "consequat."],
          image: bentwoodChairImg,
          imageCaption: "Continuous curved laminated ash timber supporting relaxed ergonomic posture.",
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Exploring the elastic curvature threshold of continuous laminated veneers under pneumatic press clamps.",
          boldKeywords: ["elastic curvature", "pneumatic press"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "From initial 1:5 scale cardboard models to 5-axis CNC mold tooling for high-pressure bentwood forming.",
          boldKeywords: ["cardboard models", "CNC mold tooling"],
          materialsImage: bentwoodChairImg,
          details: {
            subtitle: "Materials",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            callouts: [
              {
                label: "Barniz Ecológico Mate",
                text: "Micro-porous protective seal preserving natural raw wood touch.",
              },
              {
                label: "Chapa de Fresno Natural",
                text: "Continuous 12-ply molded ash veneer with G2 curvature.",
              },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "An enduring architectural lounge seat that celebrates negative space, organic woodgrain, and tactile honesty.",
          boldKeywords: ["architectural lounge seat", "tactile honesty"],
          image: bentwoodChairImg,
          specifications: [
            { label: "Material", value: "FSC Certified European Ash" },
            { label: "Finish", value: "Zero-VOC Ultra-Matte Waterborne Seal" },
            { label: "Upholstery", value: "Raw unbleached organic linen" },
            { label: "Load Capacity", value: "Tested to 180 kg dynamic load" },
          ],
        },
      ],
    },
    {
      id: "project-3",
      number: "03",
      title: "Froggy Art Toy & Smart Box",
      subtitle: "Froggy Art Toy & Smart Box",
      heroImage: vinylToyImg,
      brief: "Vinyl collectible art toy with interactive smart RFID companion base.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Merging contemporary street-art vinyl figurines with ambient haptic technology to humanize desktop routines.",
          boldKeywords: ["street-art vinyl", "ambient haptic"],
          image: vinylToyImg,
          imageCaption: "Collector edition in custom transparent display packaging.",
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Prototyping magnetic articulated joints and rotational symmetry for effortless assembly and delightful physical fidgeting.",
          boldKeywords: ["magnetic articulated joints", "rotational symmetry"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "Rotomolding mold tolerances, precision electroplated chrome highlights, and packaging engineering for mint-condition display.",
          boldKeywords: ["rotomolding mold", "packaging engineering"],
          sketchImage: vinylToyImg,
          details: {
            subtitle: "Materials & Molding",
            text: "High-density soft vinyl casting paired with internal neodymium magnets for modular pose adjustment.",
            callouts: [
              { label: "Rotocast Vinyl", text: "Toxic-free soft vinyl with satin soft-touch coating" },
              { label: "Magnetic Core", text: "N52 neodymium disc joints with 360° articulation" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "Packaged in a high-grade PET display carton with archival numbering and tactile unboxing experience.",
          boldKeywords: ["archival numbering", "tactile unboxing"],
          image: vinylToyImg,
          specifications: [
            { label: "Height", value: "185 mm collectible scale" },
            { label: "Articulation", value: "4 magnetic points of articulation" },
            { label: "Edition", value: "Limited run of 250 numbered pieces" },
            { label: "Packaging", value: "Magnetic closure archival blister" },
          ],
        },
      ],
    },
    {
      id: "project-4",
      number: "04",
      title: "Monolith Haptic Audio Console",
      subtitle: "Monolith Haptic Audio Console",
      heroImage: audioConsoleImg,
      brief: "Analog tactical sound mixer with motorized Alps faders and solid walnut casing.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Reclaiming mechanical physical intimacy in modern music production through weighted rotary encoders and warm walnut casework.",
          boldKeywords: ["mechanical physical intimacy", "weighted rotary encoders"],
          image: audioConsoleImg,
          imageCaption: "Solid American walnut side cheeks enclosing CNC-anodized aluminum faceplate.",
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Ergonomic fingertip clearance and detent resistance curve studies ensuring precise blind tactile adjustment.",
          boldKeywords: ["detent resistance", "blind tactile adjustment"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "Machined 6061-T6 aluminum knobs paired with optical encoders, amber nixie level meters, and oil-rubbed walnut wood.",
          boldKeywords: ["6061-T6 aluminum", "optical encoders"],
          materialsImage: audioConsoleImg,
          details: {
            subtitle: "Haptic Encoders",
            text: "Heavy flywheel damping provides silky resistance on all EQ potentiometer shafts.",
            callouts: [
              { label: "Anodized Aluminum", text: "Bead-blasted satin finish with laser etched index marks" },
              { label: "Solid Walnut", text: "Hand-rubbed organic tung oil with dovetail joinery" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "A centerpiece audio tool engineered to age with natural patina, bridging vintage warmth with modern USB-C audio fidelity.",
          boldKeywords: ["natural patina", "vintage warmth"],
          image: audioConsoleImg,
          specifications: [
            { label: "Materials", value: "CNC 6061 Aluminum & Solid Walnut" },
            { label: "Connectivity", value: "Class-compliant USB-C & Balanced XLR" },
            { label: "Faders", value: "100mm Motorized Alps Studio Faders" },
            { label: "Dimensions", value: "420 × 260 × 65 mm" },
          ],
        },
      ],
    },
  ],

  videography: [
    {
      id: "video-1",
      title: "Ceramics in Motion: The Touch of Clay",
      clientOrType: "Craft Documentary / Brand Film",
      year: "2025",
      duration: "03:42",
      role: "Director of Photography, Editor & Colorist",
      description:
        "A tactile sensory examination of slip-casting and hand-finishing pottery. Shot on 16mm-emulated digital sensors with natural window illumination.",
      posterImage: ceramicLampsImg,
      aspectRatio: "16:9",
    },
    {
      id: "video-2",
      title: "Bending Wood: The Monocoque Chair",
      clientOrType: "Industrial Design Process Reel",
      year: "2024",
      duration: "02:18",
      role: "Cinematographer & Sound Designer",
      description:
        "Capturing the acoustic resonance of steam-bending oak timber and mechanical tension in high-speed macro cinematography.",
      posterImage: bentwoodChairImg,
      aspectRatio: "16:9",
    },
    {
      id: "video-3",
      title: "Haptic Feedback: Analog in Digital Age",
      clientOrType: "Product Commercial",
      year: "2024",
      duration: "01:45",
      role: "Director, Lighting & 35mm Film Colorist",
      description:
        "Close-up tactile exploration of knurled aluminum volume dials, toggle switches, and warm amber vacuum tube illumination.",
      posterImage: audioConsoleImg,
      aspectRatio: "16:9",
    },
  ],
};

export const featuredProjectsGrid = [
  {
    number: "01",
    targetId: "project-1",
    title: "Automotive Pet Travel Pod",
    image: petPodProductImg,
  },
  {
    number: "02",
    targetId: "project-2",
    title: "Bentwood Monocoque Lounger",
    image: bentwoodChairImg,
  },
  {
    number: "03",
    targetId: "project-3",
    title: "Froggy Art Toy & Smart Box",
    image: vinylToyImg,
  },
  {
    number: "04",
    targetId: "project-4",
    title: "Monolith Haptic Audio Console",
    image: audioConsoleImg,
  },
];
