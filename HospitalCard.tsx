
import { Link } from 'react-router-dom';
import { Hospital } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, MapPin } from 'lucide-react';

interface HospitalCardProps {
  hospital: Hospital;
}

const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img
          src={hospital.image}
          alt={hospital.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-white/90 text-hospital-primary px-2 py-1 rounded-full text-sm shadow-sm">
          <Star size={14} fill="currentColor" />
          <span className="font-semibold">{hospital.rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">{hospital.name}</h3>
        </div>
        
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <MapPin size={14} />
          <span className="text-sm">{hospital.city}</span>
        </div>
        
        <div className="mt-3">
          <div className="flex flex-wrap gap-1 mt-2">
            {hospital.specialties.slice(0, 3).map((specialty, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-hospital-accent/10 text-hospital-accent rounded-full text-xs"
              >
                {specialty}
              </span>
            ))}
            {hospital.specialties.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full text-xs">
                +{hospital.specialties.length - 3} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Link to={`/hospitals/${hospital.id}`} className="w-full">
          <Button className="w-full bg-hospital-accent hover:bg-hospital-accent/90">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default HospitalCard;
