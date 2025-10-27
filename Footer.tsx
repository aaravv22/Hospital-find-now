
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-hospital-primary font-bold text-xl">Hospital Find Now</div>
            <p className="text-gray-600 text-sm mt-1">Find the right hospital for your needs</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li><a href="/" className="text-gray-600 hover:text-hospital-primary text-sm">Home</a></li>
                <li><a href="/hospitals" className="text-gray-600 hover:text-hospital-primary text-sm">Find Hospitals</a></li>
                <li><a href="/login" className="text-gray-600 hover:text-hospital-primary text-sm">Login</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Support</h3>
              <ul className="space-y-1">
                <li><a href="#" className="text-gray-600 hover:text-hospital-primary text-sm">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hospital-primary text-sm">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-hospital-primary text-sm">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Hospital Find Now - &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
