
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SearchBar from '@/components/SearchBar';
import HospitalCard from '@/components/HospitalCard';
import SpecialtyCard from '@/components/SpecialtyCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { hospitals, specialties, cities } from '@/data/hospitals';
import { Specialty } from '@/types';

const Index = () => {
  const [featuredHospitals, setFeaturedHospitals] = useState(hospitals.slice(0, 4));
  const [specialtyCounts, setSpecialtyCounts] = useState<Record<Specialty, number>>({} as Record<Specialty, number>);

  useEffect(() => {
    // Calculate the number of hospitals for each specialty
    const counts = {} as Record<Specialty, number>;
    
    specialties.forEach(specialty => {
      counts[specialty] = hospitals.filter(hospital => 
        hospital.specialties.includes(specialty)
      ).length;
    });
    
    setSpecialtyCounts(counts);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-hospital-primary/90 to-hospital-accent/90 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Find the Right Hospital for Your Healthcare Needs
              </h1>
              <p className="text-lg md:text-xl max-w-3xl mb-10">
                Search from thousands of hospitals, filter by specialty, read reviews, and book appointments online.
              </p>
              
              <SearchBar />
              
              <div className="flex flex-wrap justify-center gap-3 mt-8">
                {cities.map((city) => (
                  <Link key={city} to={`/hospitals?city=${city}`}>
                    <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white">
                      <MapPin size={16} className="mr-1" />
                      {city}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Specialties Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Browse by Specialty</h2>
              <p className="mt-2 text-gray-600">Find hospitals based on your healthcare needs</p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {specialties.map((specialty) => (
                <SpecialtyCard 
                  key={specialty} 
                  specialty={specialty} 
                  count={specialtyCounts[specialty] || 0}
                />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/hospitals">
                <Button className="bg-hospital-primary hover:bg-hospital-primary/90">
                  View All Hospitals
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Hospitals Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Hospitals</h2>
              <p className="mt-2 text-gray-600">Top-rated hospitals across major cities</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredHospitals.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/hospitals">
                <Button variant="outline" className="border-hospital-primary text-hospital-primary hover:bg-hospital-primary hover:text-white">
                  Explore All Hospitals
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-hospital-accent/10 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Need Help Finding the Right Hospital?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our platform makes it easy to find hospitals based on your specific healthcare needs, 
              location preferences, and appointment availability.
            </p>
            <Link to="/hospitals">
              <Button size="lg" className="bg-hospital-accent hover:bg-hospital-accent/90">
                Find Hospitals Near You
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
