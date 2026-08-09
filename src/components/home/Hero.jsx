import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroGraphic from "../../assets/images/hero-graphic.png";

export default function Hero() {
  return (
    <section className="bg-white section-padding min-h-[calc(100vh-80px)] flex items-center relative overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #0B1F3A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="animate-fade-up">
            <p className="eyebrow mb-4">Software & IT Consulting</p>

            <h1 className="text-navy mb-6">
              Your Digital <span className="text-accent">Transformation</span>{" "}
              Partner
            </h1>

            <p className="text-[17px] lg:text-[18px] text-muted leading-relaxed mb-10 max-w-[520px]">
              We design, build, and operate custom applications, digital
              products, and DevOps pipelines — helping businesses turn
              technology into a durable competitive advantage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary text-[15px] px-7 py-3.5"
              >
                Talk to Us
                <ArrowRight size={16} />
              </Link>
              <a
                href="#services"
                className="btn-secondary text-[15px] px-7 py-3.5"
              >
                See What We Do
              </a>
            </div>
          </div>

          {/* Right — Graphic */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-[480px]">
              <img
                src={heroGraphic}
                alt="Abstract technical illustration representing software engineering and digital transformation"
                className="w-full h-auto rounded-image"
                loading="eager"
              />
              {/* Accent corner decoration */}
              <div
                className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-accent/30 rounded-image -z-10"
                aria-hidden="true"
              />
              <div
                className="absolute -top-4 -left-4 w-16 h-16 bg-alt-bg rounded-image -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
