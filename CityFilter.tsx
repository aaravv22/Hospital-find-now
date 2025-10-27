
import { City } from '@/types';
import { cities } from '@/data/hospitals';
import { Button } from '@/components/ui/button';

interface CityFilterProps {
  selectedCity: City | null;
  onChange: (city: City | null) => void;
}

const CityFilter: React.FC<CityFilterProps> = ({ selectedCity, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCity === null ? "default" : "outline"}
        onClick={() => onChange(null)}
        className={selectedCity === null ? "bg-hospital-primary" : ""}
      >
        All Cities
      </Button>
      
      {cities.map((city) => (
        <Button
          key={city}
          variant={selectedCity === city ? "default" : "outline"}
          onClick={() => onChange(city)}
          className={selectedCity === city ? "bg-hospital-primary" : ""}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default CityFilter;
