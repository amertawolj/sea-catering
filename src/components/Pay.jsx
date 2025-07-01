
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Pay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const total = location.state?.total || 0;

  const handlePay = () => {
    alert('Payment successful (dummy)');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-[#FBED70] flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Pay for Your Subscription</h2>
        <p className="text-xl font-semibold text-green-700 mb-6">
          Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total)}
        </p>
        <button
          onClick={handlePay}
          className="bg-[#41521F] text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          Klik for Pay (Dummy)
        </button>
      </div>
    </div>
  );
};

export default Pay;
