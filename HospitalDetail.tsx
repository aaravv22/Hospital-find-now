
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, ArrowLeft, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Hospital } from '@/types';
import { hospitals } from '@/data/hospitals';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HospitalStats from '@/components/HospitalStats';
import BookingForm from '@/components/BookingForm';
import NotFound from './NotFound';

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [hospital, setHospital] = useState<Hospital | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch with a timeout
    setTimeout(() => {
      const foundHospital = hospitals.find(h => h.id === id) || null;
      setHospital(foundHospital);
      setLoading(false);
    }, 300);
  }, [id]);
  
  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-hospital-primary mx-auto mb-4"></div>
            <p className="text-gray-600">Loading hospital details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!hospital) {
    return <NotFound />;
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hospital Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Link to="/hospitals" className="inline-flex items-center text-gray-500 hover:text-hospital-primary mb-4">
              <ArrowLeft size={16} className="mr-1" />
              Back to hospitals
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{hospital.name}</h1>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <MapPin size={16} />
                    <span>{hospital.city}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{hospital.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <a 
                  href="#booking" 
                  className="inline-block px-6 py-3 bg-hospital-primary text-white font-medium rounded-lg hover:bg-hospital-primary/90 transition"
                >
                  Book Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Hospital Image */}
        <div className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-64 md:h-96 overflow-hidden rounded-lg shadow-md">
              <img 
                src={hospital.image} 
                alt={hospital.name} 
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
              />
            </div>
          </div>
        </div>
        
        {/* Hospital Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="doctors">Doctors</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">About {hospital.name}</h2>
                <p className="text-gray-600">
                  {hospital.name} is a leading healthcare provider in {hospital.city}, specializing in 
                  {hospital.specialties.map((s, i) => (
                    <span key={i}>
                      {i === 0 ? ' ' : i === hospital.specialties.length - 1 ? ' and ' : ', '}
                      {s}
                    </span>
                  ))}.
                  With state-of-the-art facilities and a team of experienced healthcare professionals, 
                  we are committed to providing high-quality patient care and services.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Hospital Information</h2>
                <HospitalStats hospital={hospital} />
              </div>
            </TabsContent>
            
            <TabsContent value="doctors">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Clock className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're working on adding detailed information about the doctors at this hospital.
                </p>
                <Button variant="outline">
                  <a href="#booking">Book an Appointment</a>
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Reviews Coming Soon</h3>
                <p className="text-gray-600 mb-4">
                  We're working on collecting reviews for this hospital. Check back soon!
                </p>
                <Button variant="outline">
                  <a href="#booking">Book an Appointment</a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Booking Section */}
        <div id="booking" className="bg-gray-50 py-8">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Book an Appointment</h2>
            <BookingForm hospital={hospital} />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HospitalDetail;
