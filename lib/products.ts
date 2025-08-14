export interface Product {
  id: number
  name: string
  slug: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  images: string[]
  badge?: string
  features: string[]
  description: string
  specifications: Record<string, string>
  category: string
  brand: string
  inStock: boolean
  stockCount: number
}

export interface Category {
  id: string
  name: string
  slug: string
  description: string
  image: string
  productCount: number
}

export const categories: Category[] = [
  {
    id: "diagnostic",
    name: "Diagnostic Equipment",
    slug: "diagnostic",
    description: "Advanced diagnostic tools for accurate patient assessment",
    image: "/medical-diagnostic-equipment.png",
    productCount: 45,
  },
  {
    id: "monitoring",
    name: "Patient Monitoring",
    slug: "monitoring",
    description: "Continuous monitoring systems for patient care",
    image: "/patient-monitoring-setup.png",
    productCount: 32,
  },
  {
    id: "surgical",
    name: "Surgical Instruments",
    slug: "surgical",
    description: "Precision surgical tools and instruments",
    image: "/surgical-instruments.png",
    productCount: 78,
  },
  {
    id: "emergency",
    name: "Emergency Care",
    slug: "emergency",
    description: "Critical care equipment for emergency situations",
    image: "/emergency-medical-equipment.png",
    productCount: 28,
  },
  {
    id: "rehabilitation",
    name: "Rehabilitation",
    slug: "rehabilitation",
    description: "Equipment for patient recovery and therapy",
    image: "/rehabilitation-equipment.png",
    productCount: 19,
  },
  {
    id: "laboratory",
    name: "Laboratory Equipment",
    slug: "laboratory",
    description: "Lab instruments and testing equipment",
    image: "/laboratory-equipment.png",
    productCount: 56,
  },
  {
    id: "equipment",
    name: "Equipment",
    slug: "equipment",
    description: "Various medical equipment",
    image: "/equipment.png",
    productCount: 0,
  },
  {
    id: "accessories",
    name: "Accessories",
    slug: "accessories",
    description: "Medical accessories",
    image: "/accessories.png",
    productCount: 0,
  },
  {
    id: "consumables",
    name: "Consumables",
    slug: "consumables",
    description: "Medical consumables",
    image: "/consumables.png",
    productCount: 0,
  },
  {
    id: "instruments",
    name: "Instruments",
    slug: "instruments",
    description: "Medical instruments",
    image: "/instruments.png",
    productCount: 0,
  },
]

export const equipmentCategories = [
  "ECG Machines",
  "Ultrasound Systems",
  "X-Ray Equipment",
  "MRI Scanners",
  "CT Scanners",
  "Defibrillators",
  "Ventilators",
  "Anesthesia Machines",
  "Patient Monitors",
  "Infusion Pumps",
  "Dialysis Machines",
  "Surgical Tables",
  "Operating Lights",
  "Electrosurgical Units",
  "Laser Equipment",
  "Endoscopy Equipment",
  "Mammography Systems",
  "Fluoroscopy Equipment",
  "Nuclear Medicine",
  "Radiation Therapy",
  "Dental Equipment",
  "Ophthalmology Equipment",
  "ENT Equipment",
  "Cardiology Equipment",
  "Neurology Equipment",
  "Orthopedic Equipment",
  "Urology Equipment",
  "Gynecology Equipment",
  "Pediatric Equipment",
  "Emergency Equipment",
  "Laboratory Analyzers",
  "Microscopes",
  "Centrifuges",
  "Incubators",
  "Sterilizers",
  "Autoclaves",
]

export const accessoryCategories = [
  "ECG Electrodes",
  "Blood Pressure Cuffs",
  "Stethoscope Parts",
  "Ultrasound Probes",
  "X-Ray Accessories",
  "Patient Cables",
  "Sensors",
  "Transducers",
  "Batteries",
  "Chargers",
  "Carrying Cases",
  "Stands",
]

export const consumableCategories = [
  "Syringes",
  "Needles",
  "Gloves",
  "Masks",
  "Gowns",
  "Gauze",
  "Bandages",
  "Antiseptics",
  "Test Strips",
  "Reagents",
  "Culture Media",
  "Specimen Containers",
  "Tubing",
  "Catheters",
]

export const instrumentCategories = [
  "Surgical Scissors",
  "Forceps",
  "Scalpels",
  "Retractors",
  "Clamps",
  "Speculums",
  "Otoscopes",
  "Ophthalmoscopes",
  "Reflex Hammers",
  "Tuning Forks",
  "Measuring Tools",
  "Diagnostic Lights",
]

export const products: Product[] = [
  {
    id: 1,
    name: "Bionet Cardio Q-Series ECG Machine",
    slug: "bionet-cardio-q-series-ecg",
    price: 2499,
    originalPrice: 2799,
    rating: 4.8,
    reviews: 24,
    image: "/modern-ecg-machine.png",
    images: ["/modern-ecg-machine.png", "/placeholder-82vb1.png", "/placeholder-tr8ol.png"],
    badge: "Best Seller",
    features: ["Large touchscreen", "Built-in printer", "PDF export", "ST Map technology"],
    description:
      "The Bionet Cardio Q-Series ECG Machine features a large color touchscreen, built-in printer, and PDF export capabilities. With ST Map technology, it provides unique, patented visual representation of ST segment deviations for enhanced diagnostic accuracy.",
    specifications: {
      Display: "10.4 inch color touchscreen",
      Channels: "12-lead simultaneous acquisition",
      Printer: "Built-in thermal printer",
      Storage: "Internal memory + SD card",
      Connectivity: "USB, Ethernet, WiFi",
      Power: "AC/DC with battery backup",
    },
    category: "diagnostic",
    brand: "Bionet",
    inStock: true,
    stockCount: 15,
  },
  {
    id: 2,
    name: "Digital Blood Pressure Monitor Pro",
    slug: "digital-blood-pressure-monitor-pro",
    price: 189,
    rating: 4.9,
    reviews: 156,
    image: "/images/products/bp-monitor.png",
    images: ["/images/products/bp-monitor.png", "/placeholder-gsv08.png", "/placeholder-l75gn.png"],
    badge: "New",
    features: ["Automatic inflation", "Memory storage", "Large display", "Irregular heartbeat detection"],
    description:
      "Professional-grade digital blood pressure monitor with automatic inflation, memory storage for multiple users, and irregular heartbeat detection. Features a large, easy-to-read display perfect for clinical environments.",
    specifications: {
      "Measurement Range": "Systolic: 60-280 mmHg, Diastolic: 40-150 mmHg",
      Accuracy: "±3 mmHg or ±2%",
      Memory: "99 readings per user (2 users)",
      "Cuff Size": "22-42 cm (adult)",
      Display: "Large LCD with backlight",
      Power: "4 AA batteries or AC adapter",
    },
    category: "monitoring",
    brand: "MedTech",
    inStock: true,
    stockCount: 42,
  },
  {
    id: 3,
    name: "Professional Cardiology Stethoscope",
    slug: "professional-cardiology-stethoscope",
    price: 299,
    originalPrice: 349,
    rating: 4.7,
    reviews: 89,
    image: "/professional-stethoscope.png",
    images: ["/professional-stethoscope.png", "/stethoscope-chest-piece.png", "/stethoscope-earpieces.png"],
    badge: "Sale",
    features: ["Dual head", "Noise reduction", "Comfortable earpieces", "Non-chill ring"],
    description:
      "High-quality cardiology stethoscope with dual-head design for versatile auscultation. Features advanced noise reduction technology and comfortable, ergonomic earpieces for extended use.",
    specifications: {
      "Chest Piece": "Dual head (adult/pediatric)",
      Tubing: "22 inch latex-free",
      Weight: "150g",
      Frequency: "20Hz - 20kHz",
      Warranty: "5 years",
      Material: "Stainless steel, brass",
    },
    category: "diagnostic",
    brand: "CardioMax",
    inStock: true,
    stockCount: 28,
  },
  {
    id: 4,
    name: "Pulse Oximeter Pro with Data Logging",
    slug: "pulse-oximeter-pro-data-logging",
    price: 149,
    rating: 4.6,
    reviews: 67,
    image: "/pulse-oximeter.png",
    images: ["/pulse-oximeter.png", "/placeholder-k46nj.png", "/placeholder-3ppbq.png"],
    badge: "Monitoring",
    features: ["OLED display", "Alarm function", "Data logging", "Pediatric compatible"],
    description:
      "Advanced pulse oximeter with OLED display, customizable alarms, and comprehensive data logging capabilities. Suitable for both adult and pediatric patients with high accuracy readings.",
    specifications: {
      "SpO2 Range": "70-100%",
      "Pulse Rate": "30-250 BPM",
      Accuracy: "SpO2: ±2%, Pulse: ±2 BPM",
      Display: "Color OLED",
      Memory: "72 hours continuous data",
      Battery: "Rechargeable Li-ion",
    },
    category: "monitoring",
    brand: "OxyTech",
    inStock: true,
    stockCount: 35,
  },
  {
    id: 5,
    name: "Automated External Defibrillator (AED)",
    slug: "automated-external-defibrillator-aed",
    price: 1899,
    rating: 4.9,
    reviews: 43,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    badge: "Critical Care",
    features: ["Voice prompts", "CPR coaching", "Shock advisory", "Self-testing"],
    description:
      "Life-saving automated external defibrillator with clear voice prompts, real-time CPR coaching, and automatic self-testing. Designed for ease of use in emergency situations.",
    specifications: {
      Energy: "150J, 200J, 300J",
      "Charge Time": "< 8 seconds",
      "Voice Prompts": "Multi-language support",
      Battery: "5-year standby",
      Weight: "2.2 kg",
      "IP Rating": "IP55 (dust/water resistant)",
    },
    category: "emergency",
    brand: "LifeSaver",
    inStock: true,
    stockCount: 8,
  },
  {
    id: 6,
    name: "Digital Thermometer Set",
    slug: "digital-thermometer-set",
    price: 79,
    rating: 4.5,
    reviews: 234,
    image: "/placeholder.svg?height=300&width=300",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    badge: "Diagnostic",
    features: ["Multiple types", "Fast reading", "Memory function", "Fever alarm"],
    description:
      "Comprehensive thermometer set including oral, rectal, and infrared models. Features fast 10-second readings, memory function, and fever alarm for efficient temperature monitoring.",
    specifications: {
      Accuracy: "±0.1°C",
      "Reading Time": "10 seconds",
      Memory: "Last 10 readings",
      Display: "Large LCD",
      Range: "32.0°C - 42.9°C",
      Battery: "LR41 x 1",
    },
    category: "diagnostic",
    brand: "TempCheck",
    inStock: true,
    stockCount: 67,
  },
]

export const allProducts: Product[] = [
  ...products, // existing products
  // Equipment
  {
    id: 7,
    name: "Portable Ultrasound System",
    slug: "portable-ultrasound-system",
    price: 15999,
    rating: 4.7,
    reviews: 32,
    image: "/portable-ultrasound.png",
    images: ["/portable-ultrasound.png"],
    badge: "Equipment",
    features: ["High resolution imaging", "Multiple probes", "Battery operated", "Wireless connectivity"],
    description:
      "Advanced portable ultrasound system with high-resolution imaging capabilities and wireless connectivity.",
    specifications: {
      Display: "15-inch LED",
      Probes: "Linear, Convex, Cardiac",
      Battery: "4 hours continuous use",
      Weight: "6.5 kg",
    },
    category: "equipment",
    brand: "UltraSound Pro",
    inStock: true,
    stockCount: 5,
  },
  // Accessories
  {
    id: 8,
    name: "ECG Electrode Pack (100 pieces)",
    slug: "ecg-electrode-pack-100",
    price: 45,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder-22axr.png",
    images: ["/placeholder-22axr.png"],
    badge: "Accessory",
    features: ["Disposable", "High adhesion", "Low impedance", "Latex-free"],
    description: "High-quality disposable ECG electrodes with excellent adhesion and low impedance for clear readings.",
    specifications: {
      Quantity: "100 pieces",
      Size: "Adult standard",
      Material: "Ag/AgCl",
      "Shelf Life": "2 years",
    },
    category: "accessories",
    brand: "ElectroMed",
    inStock: true,
    stockCount: 150,
  },
  // Consumables
  {
    id: 9,
    name: "Sterile Surgical Gloves (Box of 50)",
    slug: "sterile-surgical-gloves-box-50",
    price: 28,
    rating: 4.8,
    reviews: 156,
    image: "/placeholder-utufn.png",
    images: ["/placeholder-utufn.png"],
    badge: "Consumable",
    features: ["Powder-free", "Latex-free", "Sterile", "Textured grip"],
    description: "Premium sterile surgical gloves with textured grip and powder-free design for enhanced dexterity.",
    specifications: {
      Material: "Nitrile",
      Size: "Medium",
      Quantity: "50 pairs",
      Sterility: "Gamma sterilized",
    },
    category: "consumables",
    brand: "SafeHands",
    inStock: true,
    stockCount: 200,
  },
  // Instruments
  {
    id: 10,
    name: "Surgical Scissors Set",
    slug: "surgical-scissors-set",
    price: 125,
    rating: 4.9,
    reviews: 45,
    image: "/placeholder-s6x42.png",
    images: ["/placeholder-s6x42.png"],
    badge: "Instrument",
    features: ["Stainless steel", "Sharp precision", "Autoclavable", "Ergonomic design"],
    description: "Professional surgical scissors set with sharp precision blades and ergonomic handles.",
    specifications: {
      Material: "Stainless steel",
      Pieces: "5 scissors",
      Sterilization: "Autoclavable",
      Warranty: "2 years",
    },
    category: "instruments",
    brand: "SurgiPro",
    inStock: true,
    stockCount: 25,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((product) => product.slug === slug)
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((product) => product.category === categorySlug)
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug)
}

export function searchAllProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return allProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)),
  )
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      product.features.some((feature) => feature.toLowerCase().includes(lowercaseQuery)),
  )
}
