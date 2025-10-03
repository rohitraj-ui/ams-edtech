import { useState } from "react";

export default function PaymentModal({ isOpen, onClose, plan, onConfirm }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
          Confirm Your Plan
        </h2>
        <p className="text-gray-500 text-center mb-6">
          You selected <span className="font-semibold">{plan?.category_name}</span>
        </p>

        {/* Price */}
        <div className="flex justify-center items-center mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl px-6 py-4 shadow-lg">
            <span className="text-lg font-medium">Price</span>
            <p className="text-3xl font-bold">₹{plan?.discout_price}</p>
            <p className="text-sm line-through opacity-80">
              ₹{plan?.actual_price}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="w-1/2 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(plan.discout_price)}
            className="w-1/2 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:opacity-90 transition"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
