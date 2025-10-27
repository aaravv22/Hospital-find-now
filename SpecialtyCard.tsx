
import { Link } from 'react-router-dom';
import { Specialty } from '@/types';
import { Card, CardContent } from '@/components/ui/card';

interface SpecialtyCardProps {
  specialty: Specialty;
  count: number;
}

// Function to get appropriate icon for each specialty
const getSpecialtyIcon = (specialty: Specialty) => {
  // In a real app, you would import icons for each specialty
  // For simplicity, we'll return a placeholder
  return '🏥';
};

const SpecialtyCard: React.FC<SpecialtyCardProps> = ({ specialty, count }) => {
  return (
    <Link to={`/hospitals?specialty=${specialty}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md hover:scale-105 cursor-pointer">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="text-4xl mb-3">{getSpecialtyIcon(specialty)}</div>
          <h3 className="font-semibold text-lg mb-1">{specialty}</h3>
          <p className="text-sm text-gray-500">{count} hospitals</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SpecialtyCard;
