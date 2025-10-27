
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-hospital-primary font-bold text-xl">Hospital Find Now</span>
            </Link>
          </div>
          
          {!isMobile && (
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-hospital-primary"
              >
                Home
              </Link>
              <Link 
                to="/hospitals" 
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-hospital-primary"
              >
                Hospitals
              </Link>
              {isAuthenticated ? (
                <>
                  <Link 
                    to="/appointments" 
                    className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:text-hospital-primary"
                  >
                    My Appointments
                  </Link>
                  <Button onClick={logout} variant="ghost" className="text-gray-900 hover:text-hospital-primary">
                    Logout
                  </Button>
                </>
              ) : (
                <Link to="/login">
                  <Button variant="outline" className="flex items-center gap-2">
                    <User size={16} />
                    Login
                  </Button>
                </Link>
              )}
            </div>
          )}
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-hospital-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobile && isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-hospital-primary"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/hospitals" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-hospital-primary"
              onClick={() => setIsOpen(false)}
            >
              Hospitals
            </Link>
            {isAuthenticated ? (
              <>
                <Link 
                  to="/appointments" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-hospital-primary"
                  onClick={() => setIsOpen(false)}
                >
                  My Appointments
                </Link>
                <Button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }} 
                  variant="ghost" 
                  className="w-full justify-start text-gray-900 hover:text-hospital-primary"
                >
                  Logout
                </Button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:text-hospital-primary"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
