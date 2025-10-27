
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Hospital, City, Specialty } from '@/types';
import { hospitals } from '@/data/hospitals';
import HospitalCard from '@/components/HospitalCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import CityFilter from '@/components/CityFilter';
import SpecialtyFilter from '@/components/SpecialtyFilter';
import { Slider } from '@/components/ui/slider';

const HospitalListing = () => {
  const [searchParams] = useSearchParams();
  const [filteredHospitals, setFilteredHospitals] = useState<Hospital[]>(hospitals);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Get parameters from URL
    const cityParam = searchParams.get('city') as City | null;
    const specialtyParam = searchParams.get('specialty') as Specialty | null;
    const searchParam = searchParams.get('search');
    
    if (cityParam) {
      setSelectedCity(cityParam);
    }
    
    if (specialtyParam) {
      setSelectedSpecialty(specialtyParam);
    }
    
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [searchParams]);

  useEffect(() => {
    // Apply filters
    let filtered = [...hospitals];
    
    if (selectedCity) {
      filtered = filtered.filter(hospital => hospital.city === selectedCity);
    }
    
    if (selectedSpecialty) {
      filtered = filtered.filter(hospital => 
        hospital.specialties.includes(selectedSpecialty)
      );
    }
    
    if (minRating > 0) {
      filtered = filtered.filter(hospital => hospital.rating >= minRating);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(hospital => 
        hospital.name.toLowerCase().includes(query) ||
        hospital.city.toLowerCase().includes(query) ||
        hospital.specialties.some(s => s.toLowerCase().includes(query))
      );
    }
    
    setFilteredHospitals(filtered);
  }, [selectedCity, selectedSpecialty, minRating, searchQuery]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="bg-hospital-primary/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Find Hospitals</h1>
          <div className="flex justify-center mb-6">
            <SearchBar />
          </div>
        </div>
      </div>
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="font-medium text-lg mb-4">Filters</h2>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">City</h3>
                  <CityFilter 
                    selectedCity={selectedCity} 
                    onChange={setSelectedCity}
                  />
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium text-gray-700 mb-2">Specialty</h3>
                  <SpecialtyFilter 
                    selectedSpecialty={selectedSpecialty} 
                    onChange={setSelectedSpecialty}
                  />
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-700 mb-2">Minimum Rating: {minRating}</h3>
                  <Slider
                    defaultValue={[minRating]}
                    max={5}
                    step={0.5}
                    onValueChange={(value) => setMinRating(value[0])}
                    className="mb-6"
                  />
                </div>
              </div>
            </div>
            
            {/* Hospital Cards */}
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-gray-600">
                  Showing {filteredHospitals.length} {filteredHospitals.length === 1 ? 'hospital' : 'hospitals'}
                </p>
              </div>
              
              {filteredHospitals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredHospitals.map((hospital) => (
                    <HospitalCard key={hospital.id} hospital={hospital} />
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-8 rounded-lg text-center">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No hospitals found</h3>
                  <p className="text-gray-600">Try adjusting your filters or search criteria</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HospitalListing;
