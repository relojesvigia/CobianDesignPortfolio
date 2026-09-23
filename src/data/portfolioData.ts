/**
 * Portfolio Data Configuration - Pablo Cobián
 * Industrial Designer & Creative
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
  number: string;
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
  highlight?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
}

export interface ProjectSubSection {
  id: string;
  label: string;
  title: string;
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
  number: string;
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
  youtubeId?: string;
  posterImage: string;
  aspectRatio: string;
  tags?: string[];
}

export interface PortfolioData {
  designer: {
    name: string;
    titles: string[];
    titlePrimary: string;
    email: string;
    phone: string;
    phoneRaw: string;
    whatsappUrl: string;
    location: string;
    workMode: string;
    whoAmIParagraph: string;
    whoAmIBoldWords: string[];
    secondaryBio: string;
    practicePillars: {
      category: string;
      items: string;
    }[];
  };
  cv: {
    eyebrow: string;
    title: string;
    subtitle: string;
    competencies: Competency[];
    softwareTools: SoftwareTool[];
    education: EducationItem[];
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
    name: "Pablo Cobián",
    titles: ["Industrial Designer & Creative"],
    titlePrimary: "Industrial Designer & Creative",
    email: "cobian.borobia.pablo@gmail.com",
    phone: "+52 442 255 3528",
    phoneRaw: "4422553528",
    whatsappUrl: "https://w.app/pablocobian",
    location: "Querétaro, Mexico",
    workMode: "Freelance / Independent",
    whoAmIParagraph:
      "I design products with identity, functionality, and lasting character. I believe good design should solve problems without losing the beauty, personality, and human connection that make an object worth keeping.",
    whoAmIBoldWords: [
      "identity, functionality, and lasting character",
      "beauty, personality, and human connection",
    ],
    secondaryBio:
      "I’m an Industrial Designer based in Querétaro, Mexico, with a background in product development, materials, ergonomics, and design methodologies. My work spans product and furniture design, branding, visual communication, and entrepreneurship across freelance collaborations and my own ventures, particularly Vigía.",
    practicePillars: [
      {
        category: "PRODUCT DESIGN",
        items: "Product development · Furniture · Materials · Prototyping · Manufacturing",
      },
      {
        category: "BRAND & ENTREPRENEURSHIP",
        items: "Vigía · Branding · Product positioning · E-commerce · Marketing",
      },
      {
        category: "VISUAL COMMUNICATION",
        items: "Photography · Videography · FPV · 3D visualization · Storytelling",
      },
    ],
  },

  cv: {
    eyebrow: "CURRICULUM VITAE",
    title: "Strengths and Experience",
    subtitle:
      "Bridging physical prototyping, advanced CAD surface modeling, ergonomics, and visual storytelling into character-driven products.",
    competencies: [
      {
        number: "01",
        title: "Product & Industrial Design",
        description:
          "Developing products from research and concept development through form, materials, ergonomics, prototyping, and final presentation.",
        percentage: 90,
      },
      {
        number: "02",
        title: "3D Modeling & Visualization",
        description:
          "Translating concepts into detailed 3D models, renders, and visual presentations for communicating design intent.",
        percentage: 85,
      },
      {
        number: "03",
        title: "Concept Development & Problem Solving",
        description:
          "Researching problems, generating concepts, exploring alternatives, and developing practical solutions with a strong design rationale.",
        percentage: 85,
      },
      {
        number: "04",
        title: "Branding & Visual Communication",
        description:
          "Developing visual identities, product positioning, photography, video, and presentation systems around physical products and brands.",
        percentage: 90,
      },
      {
        number: "05",
        title: "Prototyping & Fabrication",
        description:
          "Building and refining physical prototypes using woodworking, CNC, laser engraving, molding, and other fabrication processes.",
        percentage: 80,
      },
    ],
    softwareTools: [
      {
        id: "ai",
        name: "Illustrator",
        shortTag: "Ai",
        color: "#330000",
        textColor: "#ff9a00",
        level: "ADVANCED",
        description:
          "Vector graphics, branding, technical illustrations and visual communication.",
      },
      {
        id: "ps",
        name: "Photoshop",
        shortTag: "Ps",
        color: "#001e36",
        textColor: "#31a8ff",
        level: "ADVANCED",
        description:
          "Image editing, product visualization, compositing and presentation graphics.",
      },
      {
        id: "acad",
        name: "AutoCAD",
        shortTag: "A",
        color: "#fce8e6",
        textColor: "#e11900",
        level: "ADVANCED",
        description:
          "2D technical drawings, dimensioned plans and detailed documentation.",
      },
      {
        id: "sw",
        name: "SolidWorks",
        shortTag: "sw",
        color: "#fde8e8",
        textColor: "#ea1d24",
        level: "EXPERT",
        description:
          "Detailed 3D modeling, mechanical design, assemblies and technical development.",
      },
      {
        id: "rhino",
        name: "Rhino 8",
        shortTag: "Rh",
        color: "#2b2b2b",
        textColor: "#ffffff",
        level: "ADVANCED",
        description:
          "3D modeling, form development, product design and complex geometry.",
      },
      {
        id: "f360",
        name: "Fusion 360",
        shortTag: "F360",
        color: "#fff1e6",
        textColor: "#ea7125",
        level: "PROFICIENT",
        description:
          "CAD modeling, prototyping, technical development and manufacturing preparation.",
      },
      {
        id: "dvr",
        name: "DaVinci Resolve",
        shortTag: "DVR",
        color: "#161c28",
        textColor: "#ff4757",
        level: "EXPERT",
        description:
          "Advanced color grading, video editing, compositing and visual production.",
      },
      {
        id: "pr",
        name: "Adobe Premiere",
        shortTag: "Pr",
        color: "#270038",
        textColor: "#ea77ff",
        level: "PROFICIENT",
        description:
          "Video editing and visual production.",
      },
    ],
    education: [
      {
        institution: "Universidad Anáhuac Querétaro",
        degree: "Bachelor's Degree in Industrial Design",
        period: "2023 — Present",
        location: "Querétaro, México",
        description:
          "Studies focused on product development, materials, ergonomics, design methodologies, prototyping, and visual communication.",
      },
      {
        institution: "Universidad Jaume I",
        degree: "Industrial Design Engineering and Product Development",
        period: "2021 — 2023",
        location: "Valencia, Spain",
        description:
          "Completed two years of Industrial Design Engineering before returning to Mexico and continuing studies in Industrial Design.",
      },
    ],
    experience: [
      {
        period: "December 2025 — Present",
        role: "Co-Founder / Industrial Designer",
        company: "VIGÍA",
        location: "Querétaro, Mexico",
        highlight: true,
        description:
          "Developing a Mexican watch microbrand from concept to physical product, working across product design, branding, customization, photography, marketing, e-commerce, and manufacturing. Responsible for the creative direction and product development of the brand, including the Carajo watch and its visual identity.",
      },
      {
        period: "2023 — 2025",
        role: "FPV Drone Videographer",
        company: "Independent Production",
        location: "Querétaro, Mexico",
        description:
          "Produced FPV drone video content after returning to Querétaro from Spain, combining piloting, camera work, composition, and visual storytelling. This experience developed alongside broader interests in photography, video production, video editing, and visual communication.",
      },
      {
        period: "2020 — Present",
        role: "Rocket League Freestyler & Coach",
        company: "Independent / Pulse Clan",
        location: "Global Digital",
        description:
          "Professional Rocket League freestyler and mechanics coach with extensive experience in advanced muscle memory research, content creation, and pedagogy. Developed educational content and training systems focused on simplifying complex mechanics and helping players build consistent control.",
      },
      {
        period: "2019 — Present",
        role: "Independent Design Freelancer",
        company: "International Collaborations",
        location: "International Digital",
        description:
          "Independent design work spanning product development, concept development, prototyping, branding, visual communication, product placement, graphic design, and content editing. Projects have included physical product design, furniture, material experimentation, and visual/content production for personal brands.",
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
            "A human-pet mobility capsule engineered for vehicular security, acoustic tranquility, and seamless interior integration.",
          boldKeywords: ["vehicular security", "tranquility", "seamless interior integration"],
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
            "Iterative prototyping through full-scale ergonomic bucks, CNC tooling fixtures, and acoustic dampening studies.",
          boldKeywords: ["iterative prototyping", "acoustic dampening"],
          sketchImage: petPodSketchImg,
          materialsImage: petPodDiagramImg,
          details: {
            subtitle: "Materials & Enclosure",
            text: "Dual-density expanded polypropylene core encased in impact-resistant anodized aluminum rails.",
            callouts: [
              { label: "Shock Absorption", text: "Impact-absorbing honeycomb perimeter cell" },
              { label: "Ventilation", text: "Micro-perforated circulation baffles" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "A secure vehicular pet nest that doubles as an elegant home sanctuary with magnetic Isofix vehicle latches.",
          boldKeywords: ["vehicular pet nest", "home sanctuary"],
          image: petPodProductImg,
          specifications: [
            { label: "Weight", value: "4.8 kg" },
            { label: "Primary Shell", value: "Recycled Polycarbonate & Anodized 6061-Al" },
            { label: "Safety Rating", value: "Certified ISO 27955 Cargo Restraint" },
            { label: "Dimensions", value: "650 × 480 × 520 mm" },
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
      brief: "Continuous lamination bentwood lounger with ergonomic counter-tension.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Investigating how continuous tension curves in cold-pressed birch veneer eliminate traditional mechanical fasteners.",
          boldKeywords: ["continuous tension curves", "cold-pressed birch veneer"],
          image: bentwoodChairImg,
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Exploring cantilever balance points through 1:5 scale card models and structural load-bearing simulations.",
          boldKeywords: ["cantilever balance points", "load-bearing simulations"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "Hydraulic male-female composite mold pressing with alternating grain orientation for structural elasticity.",
          boldKeywords: ["hydraulic", "alternating grain orientation"],
          materialsImage: bentwoodChairImg,
          details: {
            subtitle: "Layer Composition",
            text: "Twenty-four plies of European birch veneer bound with zero-VOC bio-resin.",
            callouts: [
              { label: "Flex Zone", text: "Progressive thinning along the lumbar arc" },
              { label: "Foot Profile", text: "Felt-lined ground contact glides" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "A visually light yet structurally resilient lounge chair that gently flexes with the occupant's weight shifts.",
          boldKeywords: ["structurally resilient", "weight shifts"],
          image: bentwoodChairImg,
          specifications: [
            { label: "Finish", value: "Matte Natural Soap Wax" },
            { label: "Yield Load", value: "Tested to 180 kg cyclic load" },
            { label: "Materials", value: "FSC Certified Baltic Birch" },
            { label: "Dimensions", value: "880 × 720 × 760 mm" },
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
      brief: "Collectible soft-vinyl figure paired with an integrated NFC storytelling packaging.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Bridging physical toy culture with digital provenance through tactile rotational-cast vinyl and embedded NFC tags.",
          boldKeywords: ["toy culture", "digital provenance", "rotational-cast vinyl"],
          image: vinylToyImg,
        },
        {
          id: "ideation",
          label: "Ideation",
          title: "Ideation",
          description:
            "Character silhouette studies balancing playful stylized curves with industrial parting lines and undercut reduction.",
          boldKeywords: ["character silhouette", "undercut reduction"],
        },
        {
          id: "design-process",
          label: "Design process",
          title: "Design process",
          description:
            "Digital wax sculpting in ZBrush followed by electroformed copper slush molds for flawless surface fidelity.",
          boldKeywords: ["digital wax sculpting", "electroformed copper slush molds"],
          materialsImage: vinylToyImg,
          details: {
            subtitle: "Slush Molding",
            text: "Rotational temperature control ensures even 2.8mm wall thickness without air bubble voids.",
            callouts: [
              { label: "Soft Vinyl", text: "Phthalate-free Japanese sofubi compound" },
              { label: "NFC Capsule", text: "High-frequency chip hermetically sealed in base" },
            ],
          },
        },
        {
          id: "final-product",
          label: "Final product",
          title: "Final product",
          description:
            "A limited edition designer toy packaged inside a rigid display box that launches companion digital content on tap.",
          boldKeywords: ["limited edition designer toy", "companion digital content"],
          image: vinylToyImg,
          specifications: [
            { label: "Edition", value: "Limited 250 Units Worldwide" },
            { label: "Height", value: "185 mm" },
            { label: "Finish", value: "Airbrushed Matte Acrylic with Gloss Eyes" },
            { label: "Chipset", value: "NTAG213 Encrypted" },
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
      brief: "Tactile USB-C audio mixer combining machined aerospace aluminum with weighted rotary controls.",
      subSections: [
        {
          id: "concept",
          label: "Concept",
          title: "Concept",
          description:
            "Restoring physical delight to digital music production through weighted brass flywheels and magnetic detents.",
          boldKeywords: ["physical delight", "weighted brass flywheels"],
          image: audioConsoleImg,
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
      id: "fpv-showreel",
      title: "FPV & Aerial Videography",
      clientOrType: "Featured Reel · Aerial Cinematography",
      year: "2025",
      duration: "Featured Reel",
      role: "FPV Pilot · Aerial Videographer · Camera Operator",
      description:
        "My work in FPV and aerial videography combines piloting, camera control, composition, and visual storytelling to capture movement, environments, and products from unique perspectives. A compilation across sports, events, commercial productions, dynamic motion, and cinematic location shoots.",
      posterImage: audioConsoleImg,
      aspectRatio: "16:9",
      tags: ["FPV", "Aerial", "Sports", "Events", "Commercial", "Cinematography"],
    },
    {
      id: "shimano-fest",
      title: "Shimano Fest",
      clientOrType: "Sports Event · Videography",
      year: "2025",
      duration: "Event Recap",
      role: "Videographer / FPV Pilot",
      description:
        "Sports event coverage focused on movement, atmosphere, athletes, and the energy of the event.",
      posterImage: bentwoodChairImg,
      aspectRatio: "9:16",
      tags: ["Sports Event", "FPV Pilot", "Social Media", "Brand Job"],
    },
    {
      id: "kaeser-mexico",
      title: "Kaeser México",
      clientOrType: "Commercial · Product & Location Showcase",
      year: "2020 — 2024",
      duration: "Product Showcase",
      role: "Videographer / Camera Operator",
      description:
        "Visual content created to showcase Kaeser México's products, facilities, and working environment through cinematic location and product footage.",
      posterImage: ceramicLampsImg,
      aspectRatio: "9:16",
      tags: ["Commercial", "Product Showcase", "Social Media", "Brand Job"],
    },
    {
      id: "now-angel-ricardo-rios",
      title: "NOW — Ángel Ricardo Ríos",
      clientOrType: "Art Documentation · Querétaro · 2025",
      year: "2025",
      duration: "Exhibition Doc",
      role: "Videographer",
      description:
        "Video documentation of Ángel Ricardo Ríos' monumental inflatable sculptures exhibited throughout the historic center of Querétaro as part of his retrospective exhibition NOW.",
      posterImage: vinylToyImg,
      aspectRatio: "9:16",
      tags: ["Art Documentation", "Culture", "Social Media", "Brand Job"],
    },
    {
      id: "rocket-league-content",
      title: "Rocket League — Content & Education",
      clientOrType: "Content & Education · 60K+ Subscribers",
      year: "2020 — Present",
      duration: "YouTube Feature",
      role: "Creator, Pedagogy & Video Editor",
      description:
        "I've spent years creating Rocket League content focused on advanced mechanics, freestyling, and education. My videos have reached more than 60K subscribers and millions of views, combining gameplay, visual explanation, and educational storytelling.",
      videoUrl: "https://youtu.be/j7VAMx2dHZk?si=UWzbaR4jxqpxsHBP",
      youtubeId: "j7VAMx2dHZk",
      posterImage: petPodProductImg,
      aspectRatio: "16:9",
      tags: ["Education", "Content Creation", "YouTube", "Pulse Clan"],
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
