
import { Specialty } from '@/types';
import { specialties } from '@/data/hospitals';
import { Button } from '@/components/ui/button';

interface SpecialtyFilterProps {
  selectedSpecialty: Specialty | null;
  onChange: (specialty: Specialty | null) => void;
}

const SpecialtyFilter: React.FC<SpecialtyFilterProps> = ({ selectedSpecialty, onChange }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedSpecialty === null ? "default" : "outline"}
        onClick={() => onChange(null)}
        className={selectedSpecialty === null ? "bg-hospital-primary" : ""}
      >
        All Specialties
      </Button>
      
      {specialties.map((specialty) => (
        <Button
          key={specialty}
          variant={selectedSpecialty === specialty ? "default" : "outline"}
          onClick={() => onChange(specialty)}
          className={selectedSpecialty === specialty ? "bg-hospital-primary" : ""}
        >
          {specialty}
        </Button>
      ))}
    </div>
  );
};

export default SpecialtyFilter;
