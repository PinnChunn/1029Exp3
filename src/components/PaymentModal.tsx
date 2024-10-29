import React from 'react';
import { Wallet, CreditCard, X, Calendar, ExternalLink } from 'lucide-react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  price: number;
  title: string;
}

export default function PaymentModal({ isOpen, onClose, onSuccess, price, title }: PaymentModalProps) {
  if (!isOpen) return null;

  const handlePayment = (method: 'wallet' | 'card') => {
    // In a real app, handle actual payment processing here
    onSuccess();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative animate-scale-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Choose Payment Method
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Register for {title}
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Amount</span>
              <div className="text-right">
                <div className="text-xl font-bold text-gray-900">{price} EX3</div>
                <div className="text-sm text-gray-500">≈ $10.00 USD</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button 
              onClick={() => handlePayment('wallet')}
              className="w-full p-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg font-medium flex items-center justify-between hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5" />
                <span>Pay with EX3 tokens</span>
              </div>
              <span className="text-sm opacity-70">Balance: 500 EX3</span>
            </button>

            <button 
              onClick={() => handlePayment('card')}
              className="w-full p-4 bg-white border-2 border-gray-200 text-gray-700 rounded-lg font-medium flex items-center justify-between hover:bg-gray-50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5" />
                <span>Pay with credit card</span>
              </div>
              <span className="text-sm opacity-70">$10.00</span>
            </button>
          </div>

          <p className="text-sm text-gray-500 text-center mt-6">
            By proceeding, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
}