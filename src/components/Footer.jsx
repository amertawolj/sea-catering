import React from 'react';

const Footer = () => {
  return ( 
    <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 rounded flex items-center justify-center" style={{backgroundColor: '#FBED70'}}>
                  <span className="font-bold text-sm" style={{color: '#41521F'}}>SE</span>
                </div>
                <span className="text-xl font-bold" style={{color: '#41521F'}}>SEA Catering</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{color: '#41521F'}}>Information</h4>
              <ul className="space-y-2" style={{color: '#8A8A8A'}}>
                <li><a href="#" className="hover:opacity-80">Home</a></li>
                <li><a href="#" className="hover:opacity-80">Menu</a></li>
                <li><a href="#" className="hover:opacity-80">Subscription</a></li>
                <li><a href="#" className="hover:opacity-80">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4" style={{color: '#41521F'}}>Contact</h4>
              <ul className="space-y-2" style={{color: '#8A8A8A'}}>
                <li>Telp/WA: +62812 3456 7890</li>
                <li>17.02, Indonesia</li>
                <li>seacatering@mail.com</li>
                <li>Bandung, Jawa Barat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Footer