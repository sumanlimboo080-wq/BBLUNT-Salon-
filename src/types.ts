export interface Service {
  id: string;
  title: string;
  category: 'hair' | 'color' | 'spa' | 'skin' | 'makeup' | 'grooming' | 'nails';
  description: string;
  fullDetails: string;
  price: string;
  duration: string;
  image: string;
  iconName: string;
  popular?: boolean;
  included: string[];
}

export interface PriceItem {
  name: string;
  startingPrice: string;
  description: string;
  category: string;
  recommendedFor?: string;
}

export interface Stylist {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string;
  image: string;
  bio: string;
  availableDays: string[];
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  serviceReceived: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'haircuts' | 'coloring' | 'spa' | 'interior' | 'stylists' | 'clients';
  image: string;
  subtitle: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  stylist: string;
  date: string;
  time: string;
  message: string;
}

export interface ConsultationResult {
  title: string;
  suggestedServices: string[];
  advice: string;
  estimatedTime: string;
  stylistTip: string;
}
