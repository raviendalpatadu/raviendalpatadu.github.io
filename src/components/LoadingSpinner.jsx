import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-900 z-50">
      {/* Container for Spinner and Logo */}
      <div className="relative flex items-center justify-center">
        {/* Spinning Ring */}
        <div className="absolute w-24 h-24 border-4 border-slate-700/50 border-t-cyan-400 rounded-full animate-spin"></div>

        {/* Static Ring (optional, for depth) */}
        <div className="absolute w-24 h-24 border-4 border-slate-700/30 rounded-full"></div>

        {/* Logo Text - Matching Navbar Style */}
        <div className="text-3xl font-bold text-cyan-400 tracking-tighter z-10 animate-pulse">
          RD.
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
