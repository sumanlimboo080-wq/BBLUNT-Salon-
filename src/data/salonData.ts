import { Service, PriceItem, Stylist, Testimonial, GalleryItem } from '../types';

import heroSalonImg from '../assets/images/hero_salon_interior_1785221996259.jpg';
import hairColorImg from '../assets/images/hair_color_service_1785222012715.jpg';
import haircutImg from '../assets/images/haircut_styling_1785222024911.jpg';
import hairSpaImg from '../assets/images/hair_spa_treatment_1785222036559.jpg';

export const SALON_INFO = {
  name: "BBLUNT - Salon",
  tagline: "Look Good. Feel Confident.",
  location: "Juhu, Mumbai",
  fullAddress: "1st Floor, Horizon Towers, Opposite Juhu Beach Promenade, Juhu, Mumbai, Maharashtra 400049",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@bbluntsalon.com",
  hours: "Monday – Sunday | 10:00 AM – 9:00 PM",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.021118671853!2d72.82424877596041!3d19.100224451000624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bf1f621525%3A0xe5432a2a075e5330!2sJuhu%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=BBLUNT+Salon+Juhu+Mumbai",
  rating: 4.9,
  totalReviews: 540,
  yearsEstablished: "10+",
};

export const SERVICES: Service[] = [
  {
    id: "haircut-styling",
    title: "Haircut & Styling",
    category: "hair",
    description: "Precision customized haircuts, blowouts, and face-framing styles tailored to your face shape and personal aesthetic.",
    fullDetails: "Our expert stylists craft modern, personalized haircuts using advanced dry-cutting and layering techniques. Includes scalp analysis, relaxing wash, blowout, and professional styling advice.",
    price: "₹1,200",
    duration: "45-60 mins",
    image: haircutImg,
    iconName: "Scissors",
    popular: true,
    included: [
      "Consultation & Scalp Assessment",
      "Organic Nourishing Hair Wash",
      "Precision Layered or Classic Cut",
      "Signature Blowdry & Heat Styling",
      "Home Styling Product Recommendation"
    ]
  },
  {
    id: "hair-color",
    title: "Hair Color",
    category: "color",
    description: "Seamless Balayage, Ombré, Global Color, Root Touch-ups, and Highlight treatments using ammonia-free Italian dyes.",
    fullDetails: "Transform your look with customized color formulations that protect your hair's bond structure. We specialize in dimensional blondes, warm caramel tones, rich espresso globals, and gray coverage.",
    price: "₹2,500",
    duration: "90-180 mins",
    image: hairColorImg,
    iconName: "Palette",
    popular: true,
    included: [
      "Custom Shade & Tone Consultation",
      "Bond Protection & Olaplex Infusion",
      "Full Global or Foil Application",
      "Color Locking Gloss Rinse",
      "Blowdry & Styling"
    ]
  },
  {
    id: "hair-spa",
    title: "Hair Spa",
    category: "spa",
    description: "Deep conditioning, scalp rejuvenation, and anti-hairfall treatments with calming steam and acupressure head massage.",
    fullDetails: "Indulge in a tranquil head-spa ritual designed to nourish dry strands, cleanse scalp buildup, and promote healthy hair growth with essential oils and restorative keratin masks.",
    price: "₹1,800",
    duration: "60 mins",
    image: hairSpaImg,
    iconName: "Sparkles",
    popular: true,
    included: [
      "Exfoliating Scalp Scrub",
      "Aromatherapy Warm Steam Detox",
      "Deep Protein & Moisture Mask",
      "15-min Acupressure Head & Shoulder Massage",
      "Serum Shine Lock Blowdry"
    ]
  },
  {
    id: "keratin-treatment",
    title: "Keratin Treatment",
    category: "spa",
    description: "Frizz-free, glossy, and manageable hair for up to 5 months with formaldehyde-free smoothing keratin formulas.",
    fullDetails: "Eliminate stubborn daily frizz while maintaining natural body and movement. Our keratin treatment seals hair cuticles, dramatically reducing drying time and restoring silkiness.",
    price: "₹5,500",
    duration: "120-180 mins",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    iconName: "Flame",
    popular: true,
    included: [
      "Clarifying Pre-Treatment Wash",
      "Formaldehyde-free Keratin Application",
      "Infrared Precision Flatironing",
      "Post-Care Keratin Shampoo Kit Guidance",
      "Follow-up Blowdry Check"
    ]
  },
  {
    id: "facial-skincare",
    title: "Facial & Skincare",
    category: "skin",
    description: "Revitalizing Hydrating, Anti-Aging, and Glow Facials with botanical serums and soothing ice-globe massages.",
    fullDetails: "Restore skin radiance with deep pore cleansing, gentle enzyme peels, collagen-boosting ultrasound therapy, and nourishing sheet masks tailored to your skin type.",
    price: "₹2,200",
    duration: "60-75 mins",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800&auto=format&fit=crop",
    iconName: "Smile",
    included: [
      "Skin Analysis & Double Cleanse",
      "Ultrasonic Pore Extraction",
      "Lymphatic Ice Globe Facial Massage",
      "Hyaluronic Acid Hydrojelly Mask",
      "SPF & Vitamin C Protection"
    ]
  },
  {
    id: "bridal-makeup",
    title: "Bridal & Event Makeup",
    category: "makeup",
    description: "Flawless HD & Airbrush makeup for weddings, cocktail parties, shoots, and festive celebrations.",
    fullDetails: "Step into the spotlight with photo-ready HD makeup created by our senior celebrity makeup artists. Long-lasting, sweat-proof, and designed to enhance your features naturally.",
    price: "₹3,500",
    duration: "90 mins",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
    iconName: "Heart",
    included: [
      "Pre-Event Skin Prep & Priming",
      "Custom HD Base & Airbrush Finish",
      "Eyelash Application & Eye Artistry",
      "Hairstyling / Dupatta Setting Assistance",
      "Touch-up Powder & Lip Kit"
    ]
  },
  {
    id: "beard-grooming",
    title: "Beard Grooming & Men's Care",
    category: "grooming",
    description: "Sharp beard sculpting, hot towel straight-razor shaves, beard oil conditioning, and grey coverage.",
    fullDetails: "Gentlemen's essential grooming service featuring precision beard outline lining, hot towel steam shave, soothing razor-bump balm, and deep beard beard conditioning.",
    price: "₹800",
    duration: "30-45 mins",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop",
    iconName: "User",
    included: [
      "Precision Clipper & Scissors Trimming",
      "Eucalyptus Hot Towel Steam",
      "Straight Razor Outline Sculpting",
      "Beard Oil Conditioning Massage",
      "Post-Shave Cooling Aftershave Lotion"
    ]
  },
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    category: "nails",
    description: "Luxurious hands and feet grooming with dead-skin exfoliation, massage, nail shaping, and gel polish.",
    fullDetails: "Pamper tired hands and feet with sea-salt foot soaks, organic scrub massages, callus reduction, cuticle care, and chip-resistant gel polish applications.",
    price: "₹1,500",
    duration: "60-90 mins",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop",
    iconName: "Sparkle",
    included: [
      "Dead Sea Salt Detox Soak",
      "Nail Shaping, Buffing & Cuticle Care",
      "Exfoliating Scrub & Hydrating Massage Mask",
      "Callus Smoothing Foot File",
      "Long-lasting Gel Polish Finish"
    ]
  }
];

export const PRICING_DATA: PriceItem[] = [
  // Haircuts
  { name: "Women's Precision Haircut & Styling", startingPrice: "₹1,200", description: "Includes hair wash, cut, and signature blowdry", category: "Haircuts & Styling" },
  { name: "Men's Haircut & Styling", startingPrice: "₹800", description: "Includes wash, haircut, and beard touch-up", category: "Haircuts & Styling" },
  { name: "Kids Haircut (Under 10)", startingPrice: "₹600", description: "Gentle wash and trendy cut for kids", category: "Haircuts & Styling" },
  { name: "Blowdry & Waves / Curls", startingPrice: "₹900", description: "Hair wash with sleek blowout or beach waves", category: "Haircuts & Styling" },

  // Color & Treatments
  { name: "Global Hair Color (Ammonia-Free)", startingPrice: "₹2,500", description: "Rich even color with gloss booster", category: "Color & Treatments" },
  { name: "Balayage / Ombré / Highlights", startingPrice: "₹4,500", description: "Dimensional hand-painted highlights", category: "Color & Treatments" },
  { name: "Root Touch-Up", startingPrice: "₹1,500", description: "Gray coverage or color refresh at roots", category: "Color & Treatments" },
  { name: "BBLUNT Keratin Smoothing", startingPrice: "₹5,500", description: "Anti-frizz treatment lasting up to 5 months", category: "Color & Treatments" },
  { name: "Cysteine Hair Treatment", startingPrice: "₹6,000", description: "Natural protein smoothing for curly/wavy hair", category: "Color & Treatments" },
  { name: "Deep Conditioning Hair Spa", startingPrice: "₹1,800", description: "Steam treatment & 15-min head massage", category: "Color & Treatments" },

  // Skincare & Facials
  { name: "BBLUNT Hydra-Glow Facial", startingPrice: "₹2,200", description: "Instant hydration and pore tightening", category: "Skincare & Facials" },
  { name: "O3+ Radiant Vitamin C Facial", startingPrice: "₹3,200", description: "Brightening treatment for sun-tanned skin", category: "Skincare & Facials" },
  { name: "Anti-Aging Collagen Peel", startingPrice: "₹3,800", description: "Firms skin and smooths fine lines", category: "Skincare & Facials" },
  { name: "Express Clean-Up & Exfoliation", startingPrice: "₹1,200", description: "Quick 30-min refreshing face detox", category: "Skincare & Facials" },

  // Grooming, Makeup & Nails
  { name: "Signature Beard Sculpting & Shave", startingPrice: "₹800", description: "Hot towel steam, crisp razor lines & oil", category: "Grooming & Makeup" },
  { name: "Party / Glam Makeup", startingPrice: "₹3,500", description: "HD makeup, lashes & hair setting", category: "Grooming & Makeup" },
  { name: "Bridal Makeup Package", startingPrice: "₹12,000", description: "Trial, HD airbrush makeup, hair, saree drape", category: "Grooming & Makeup" },
  { name: "BBLUNT Spa Pedicure & Manicure Combo", startingPrice: "₹2,500", description: "Relaxing feet & hands pampering ritual", category: "Grooming & Makeup" },
];

export const TEAM: Stylist[] = [
  {
    id: "stylist-1",
    name: "Ananya Sharma",
    role: "Creative Hair Director & Master Colorist",
    experience: "12+ Years Exp",
    specialization: "Balayage, Blonde Tones, Precision Bob Cuts",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Trained in London & Milan, Ananya is Mumbai's sought-after hair artist known for seamless balayage transitions and modern textured cuts.",
    availableDays: ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    rating: 4.98
  },
  {
    id: "stylist-2",
    name: "Rahul Verma",
    role: "Senior Hair Stylist & Keratin Specialist",
    experience: "10+ Years Exp",
    specialization: "Keratin, Cysteine, Men's Fades, Rebonding",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Rahul specializes in hair texture transformation, smoothing treatments, and razor-sharp men's styling. Passionate about hair health.",
    availableDays: ["Mon", "Tue", "Wed", "Fri", "Sat", "Sun"],
    rating: 4.95
  },
  {
    id: "stylist-3",
    name: "Priya Mehta",
    role: "Aesthetician & Skincare Expert",
    experience: "8+ Years Exp",
    specialization: "Hydra-Facials, Anti-Aging Peels, Glow Treatments",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
    bio: "Priya combines clinical skincare knowledge with holistic massage techniques to leave skin visibly plumped, clear, and glowing.",
    availableDays: ["Mon", "Wed", "Thu", "Fri", "Sat", "Sun"],
    rating: 4.96
  },
  {
    id: "stylist-4",
    name: "Vikram Singh",
    role: "Senior Barber & Grooming Artist",
    experience: "9+ Years Exp",
    specialization: "Beard Architecture, Hot Towel Shaves, Fade Cuts",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
    bio: "Master of classic and contemporary men's grooming. Known for his crisp lineup precision and relaxing hot-towel facial massages.",
    availableDays: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
    rating: 4.92
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "rev-1",
    name: "Rhea Kapoor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "I got a Caramel Balayage done by Ananya at BBLUNT - Salon in Juhu. The shade match is absolutely gorgeous and my hair feels super soft without any dry ends! Best salon experience in Mumbai.",
    serviceReceived: "Balayage & Styling",
    date: "3 days ago"
  },
  {
    id: "rev-2",
    name: "Karan Malhotra",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Rahul did an exceptional job with my hair cut and beard sculpt before an event. Very clean environment, friendly staff, and punctual service. Highly recommended!",
    serviceReceived: "Haircut & Beard Sculpting",
    date: "1 week ago"
  },
  {
    id: "rev-3",
    name: "Neha Merchant",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "The BBLUNT Hair Spa is pure bliss! The head massage relaxed away all my stress and my frizzy hair looks shiny and silky. The gold accent interior is beautiful and hygienic.",
    serviceReceived: "BBLUNT Hair Spa",
    date: "2 weeks ago"
  },
  {
    id: "rev-4",
    name: "Siddharth Merchant",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    review: "Top notch services! Came here for a skin facial and hair grooming. Priya's facial gave my skin an instant natural glow. Will definitely be a regular here.",
    serviceReceived: "Hydra-Glow Facial",
    date: "3 weeks ago"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Dimensional Caramel Balayage",
    category: "coloring",
    image: hairColorImg,
    subtitle: "Sun-kissed highlights with glossy finish"
  },
  {
    id: "gal-2",
    title: "Precision Layered Haircut",
    category: "haircuts",
    image: haircutImg,
    subtitle: "Modern face-framing layers and volume blowdry"
  },
  {
    id: "gal-3",
    title: "BBLUNT Salon Interiors",
    category: "interior",
    image: heroSalonImg,
    subtitle: "Spacious styling stations & warm ambient lighting"
  },
  {
    id: "gal-4",
    title: "Aromatherapy Hair Spa Ritual",
    category: "spa",
    image: hairSpaImg,
    subtitle: "Deep conditioning with scalp massage"
  },
  {
    id: "gal-5",
    title: "Master Colorist in Action",
    category: "stylists",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    subtitle: "Ananya perfecting custom color foil placements"
  },
  {
    id: "gal-6",
    title: "Glamorous Party Makeup",
    category: "clients",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop",
    subtitle: "HD airbrush makeup and elegant waves"
  },
  {
    id: "gal-7",
    title: "Sharp Beard Sculpting",
    category: "haircuts",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    subtitle: "Hot towel straight razor beard alignment"
  },
  {
    id: "gal-8",
    title: "Hydra Facial Therapy",
    category: "spa",
    image: "https://images.unsplash.com/photo-1512290900673-7002fe5cd6a6?q=80&w=800&auto=format&fit=crop",
    subtitle: "Deep pore detox and hyaluronic mask"
  }
];
