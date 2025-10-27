
import { Hospital } from '@/types';
import { 
  MapPin, 
  Phone, 
  Globe, 
  Star, 
  Clock, 
  Users,
  CalendarCheck
} from 'lucide-react';

interface HospitalStatsProps {
  hospital: Hospital;
}

const HospitalStats: React.FC<HospitalStatsProps> = ({ hospital }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
        <MapPin className="text-hospital-primary mr-3 mt-0.5" size={20} />
        <div>
          <h3 className="text-sm font-medium text-gray-500">Location</h3>
          <p className="mt-1">{hospital.address}</p>
        </div>
      </div>
      
      {hospital.contact && (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
          <Phone className="text-hospital-primary mr-3 mt-0.5" size={20} />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Contact</h3>
            <p className="mt-1">{hospital.contact}</p>
          </div>
        </div>
      )}
      
      {hospital.website && (
        <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
          <Globe className="text-hospital-primary mr-3 mt-0.5" size={20} />
          <div>
            <h3 className="text-sm font-medium text-gray-500">Website</h3>
            <a 
              href={hospital.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-1 text-hospital-accent hover:underline"
            >
              Visit Website
            </a>
          </div>
        </div>
      )}
      
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
        <Star className="text-hospital-primary mr-3 mt-0.5" size={20} />
        <div>
          <h3 className="text-sm font-medium text-gray-500">Rating</h3>
          <div className="flex items-center mt-1">
            <span className="font-medium mr-1">{hospital.rating}</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={14} 
                  className={i < Math.floor(hospital.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
        <Clock className="text-hospital-primary mr-3 mt-0.5" size={20} />
        <div>
          <h3 className="text-sm font-medium text-gray-500">Working Hours</h3>
          <p className="mt-1">Mon-Fri: 9:00 AM - 6:00 PM</p>
          <p className="mt-0.5">Sat: 9:00 AM - 1:00 PM</p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
        <Users className="text-hospital-primary mr-3 mt-0.5" size={20} />
        <div>
          <h3 className="text-sm font-medium text-gray-500">Specialties</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {hospital.specialties.map((specialty, index) => (
              <span 
                key={index} 
                className="px-2 py-0.5 bg-hospital-primary/10 text-hospital-primary rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-sm flex items-start">
        <CalendarCheck className="text-hospital-primary mr-3 mt-0.5" size={20} />
        <div>
          <h3 className="text-sm font-medium text-gray-500">Appointments</h3>
          <p className="mt-1">Online & Walk-in</p>
        </div>
      </div>
    </div>
  );
};

export default HospitalStats;
