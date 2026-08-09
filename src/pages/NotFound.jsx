import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center px-4">
        {/* Abstract 404 mark */}
        <div className="relative inline-block mb-8">
          <span className="font-sora font-bold text-[120px] md:text-[180px] text-alt-bg leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
              <span className="text-accent font-sora font-bold text-[24px]">!</span>
            </div>
          </div>
        </div>

        <h1 className="text-navy text-[28px] md:text-[36px] mb-4">Page Not Found</h1>
        <p className="text-muted text-[17px] max-w-[420px] mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or may have moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">
            <Home size={16} />
            Go to Homepage
          </Link>
          <Link to="/contact" className="btn-secondary">
            <ArrowLeft size={15} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
