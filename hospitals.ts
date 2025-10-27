import { Hospital, Specialty, City } from '../types';

export const hospitals: Hospital[] = [
  {
    id: '1',
    name: 'Apollo Hospitals',
    city: 'Delhi',
    specialties: ['Cardiology', 'Orthopedics', 'Neurology'],
    rating: 4.5,
    address: '123 Healthcare St, Delhi',
    contact: '+91 9876543210',
    website: 'https://www.apollohospitals.com',
    image: 'https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Fortis Healthcare',
    city: 'Mumbai',
    specialties: ['Cardiology', 'Oncology', 'Pediatrics'],
    rating: 4.3,
    address: '456 Medical Ave, Mumbai',
    contact: '+91 9876543211',
    website: 'https://www.fortishealthcare.com',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Max Healthcare',
    city: 'Delhi',
    specialties: ['Orthopedics', 'Neurology', 'Dermatology'],
    rating: 4.6,
    address: '789 Health Blvd, Delhi',
    contact: '+91 9876543212',
    website: 'https://www.maxhealthcare.in',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Manipal Hospitals',
    city: 'Bangalore',
    specialties: ['Cardiology', 'Oncology', 'Maternity'],
    rating: 4.4,
    address: '101 Care Lane, Bangalore',
    contact: '+91 9876543213',
    website: 'https://www.manipalhospitals.com',
    image: 'https://images.unsplash.com/photo-1516549655669-9e0b2bfce7f1?auto=format&fit=crop&q=80'
  },
  {
    id: '5',
    name: 'AIIMS',
    city: 'Delhi',
    specialties: ['General', 'Emergency', 'Neurology'],
    rating: 4.8,
    address: '202 Medical Road, Delhi',
    contact: '+91 9876543214',
    website: 'https://www.aiims.edu',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80'
  },
  {
    id: '6',
    name: 'Narayana Health',
    city: 'Bangalore',
    specialties: ['Cardiology', 'Orthopedics', 'Pediatrics'],
    rating: 4.5,
    address: '303 Health Park, Bangalore',
    contact: '+91 9876543215',
    website: 'https://www.narayanahealth.org',
    image: 'https://images.unsplash.com/photo-1581360742512-021d5b2157d8?auto=format&fit=crop&q=80'
  },
  {
    id: '7',
    name: 'Kokilaben Hospital',
    city: 'Mumbai',
    specialties: ['Cardiology', 'Oncology', 'Neurology'],
    rating: 4.7,
    address: '404 Doctor Drive, Mumbai',
    contact: '+91 9876543216',
    website: 'https://www.kokilabenhospital.com',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80'
  },
  {
    id: '8',
    name: 'Global Hospitals',
    city: 'Hyderabad',
    specialties: ['Orthopedics', 'Neurology', 'Pediatrics'],
    rating: 4.4,
    address: '505 Wellness Way, Hyderabad',
    contact: '+91 9876543217',
    website: 'https://www.globalhospitalsindia.com',
    image: 'https://images.unsplash.com/photo-1586534313132-8b5463fd95b1?auto=format&fit=crop&q=80'
  },
  {
    id: '9',
    name: 'Columbia Asia',
    city: 'Bangalore',
    specialties: ['General', 'Pediatrics', 'Maternity'],
    rating: 4.3,
    address: '606 Care Court, Bangalore',
    contact: '+91 9876543218',
    website: 'https://www.columbiaasia.com',
    image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?auto=format&fit=crop&q=80'
  },
  {
    id: '10',
    name: 'Medanta',
    city: 'Delhi',
    specialties: ['Cardiology', 'Oncology', 'Emergency'],
    rating: 4.6,
    address: '707 Hospital Highway, Delhi',
    contact: '+91 9876543219',
    website: 'https://www.medanta.org',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?auto=format&fit=crop&q=80'
  },
  {
    id: '11',
    name: 'Apollo Gleneagles',
    city: 'Chennai',
    specialties: ['Dermatology', 'Cosmetology', 'General'],
    rating: 4.2,
    address: '808 Health Haven, Chennai',
    contact: '+91 9876543220',
    website: 'https://www.apollohospitals.com',
    image: 'https://images.unsplash.com/photo-1516549655669-9e0b2bfce7f1?auto=format&fit=crop&q=80'
  },
  {
    id: '12',
    name: 'Care Hospitals',
    city: 'Hyderabad',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
    rating: 4.3,
    address: '909 Medical Mall, Hyderabad',
    contact: '+91 9876543221',
    website: 'https://www.carehospitals.com',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80'
  },
  {
    id: '13',
    name: 'Artemis Hospital',
    city: 'Delhi',
    specialties: ['Oncology', 'Cardiology', 'Pediatrics'],
    rating: 4.4,
    address: '1010 Wellness Road, Delhi',
    contact: '+91 9876543222',
    website: 'https://www.artemishospitals.com',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80'
  },
  {
    id: '14',
    name: 'Tata Memorial',
    city: 'Mumbai',
    specialties: ['Oncology', 'General', 'Emergency'],
    rating: 4.9,
    address: '1111 Cancer Care Lane, Mumbai',
    contact: '+91 9876543223',
    website: 'https://tmc.gov.in',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80'
  },
  {
    id: '15',
    name: 'Sankara Nethralaya',
    city: 'Chennai',
    specialties: ['Eye', 'General'],
    rating: 4.8,
    address: '1212 Vision Drive, Chennai',
    contact: '+91 9876543224',
    website: 'https://www.sankaranethralaya.org',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80'
  },
  {
    id: '16',
    name: 'Jaslok Hospital',
    city: 'Mumbai',
    specialties: ['Cardiology', 'Neurology', 'Orthopedics'],
    rating: 4.5,
    address: '1313 Health Street, Mumbai',
    contact: '+91 9876543225',
    website: 'https://www.jaslokhospital.net',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80'
  },
  {
    id: '17',
    name: 'Apollo Cradle',
    city: 'Hyderabad',
    specialties: ['Maternity', 'Pediatrics', 'General'],
    rating: 4.6,
    address: '1414 Mother Care Road, Hyderabad',
    contact: '+91 9876543226',
    website: 'https://www.apollocradle.com',
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80'
  },
  {
    id: '18',
    name: 'MIOT International',
    city: 'Chennai',
    specialties: ['Orthopedics', 'Cardiology', 'Neurology'],
    rating: 4.4,
    address: '1515 Medical Park, Chennai',
    contact: '+91 9876543227',
    website: 'https://www.miotinternational.com',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80'
  },
  {
    id: '19',
    name: 'Lilavati Hospital',
    city: 'Mumbai',
    specialties: ['Cardiology', 'Neurology', 'General'],
    rating: 4.7,
    address: '1616 Care Campus, Mumbai',
    contact: '+91 9876543228',
    website: 'https://www.lilavatihospital.com',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80'
  },
  {
    id: '20',
    name: 'Jupiter Hospital',
    city: 'Mumbai',
    specialties: ['Pediatrics', 'Maternity', 'Cardiology'],
    rating: 4.3,
    address: '1717 Child Care Road, Mumbai',
    contact: '+91 9876543229',
    website: 'https://www.jupiterhospital.com',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b3db4f1?auto=format&fit=crop&q=80'
  }
];

export const specialties: Specialty[] = [
  'Eye',
  'Dental',
  'Emergency',
  'Cardiology',
  'Orthopedics',
  'Dermatology',
  'Cosmetology',
  'Maternity',
  'Pediatrics',
  'Neurology',
  'Oncology',
  'General'
];

export const cities: City[] = [
  'Delhi',
  'Bangalore',
  'Mumbai',
  'Chennai',
  'Hyderabad'
];
