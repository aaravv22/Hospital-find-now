
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Hospital } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Appointments = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  // In a real app, this would be fetched from an API
  const [appointments] = useState([]);
  
  if (!isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-12">
          <div className="text-center p-8 max-w-md">
            <Hospital className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Login Required</h1>
            <p className="text-gray-600 mb-6">
              Please login to view your appointments.
            </p>
            <Button onClick={() => navigate('/login')}>
              Go to Login
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">My Appointments</h1>
            <Link to="/hospitals">
              <Button>Book New Appointment</Button>
            </Link>
          </div>
          
          {appointments.length > 0 ? (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Appointment list would go here */}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-lg shadow-sm text-center">
              <Hospital className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No Appointments Found</h2>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                You don't have any upcoming appointments. Browse hospitals and book your first appointment.
              </p>
              <Link to="/hospitals">
                <Button className="bg-hospital-primary hover:bg-hospital-primary/90">
                  Find a Hospital
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Appointments;
