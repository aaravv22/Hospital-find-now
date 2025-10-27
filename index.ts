
export interface Hospital {
  id: string;
  name: string;
  city: string;
  specialties: Specialty[];
  rating: number;
  address: string;
  contact?: string;
  website?: string;
  image: string;
}

export type Specialty = 
  | 'Eye'
  | 'Dental'
  | 'Emergency'
  | 'Cardiology'
  | 'Orthopedics'
  | 'Dermatology'
  | 'Cosmetology'
  | 'Maternity'
  | 'Pediatrics'
  | 'Neurology'
  | 'Oncology'
  | 'General';

export type City = 
  | 'Delhi'
  | 'Bangalore'
  | 'Mumbai'
  | 'Chennai'
  | 'Hyderabad';

export interface Appointment {
  id: string;
  hospitalId: string;
  specialty: Specialty;
  date: string;
  time: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}
