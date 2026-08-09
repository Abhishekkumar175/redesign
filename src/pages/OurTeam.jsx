import React from "react";
import PageHeader from "../components/layout/PageHeader";
import SectionHeader from "../components/ui/SectionHeader";
import CTABand from "../components/home/CTABand";

// ── Photo imports ────────────────────────────────────────────────────
import pranavPhoto from "../assets/images/Pranav_kumar.webp";
import seemaPhoto from "../assets/images/seema_joshi.webp";
import vivekPhoto from "../assets/images/Vivek_kumar.webp";
import rajooPhoto from "../assets/images/rajoo_yadav.webp";
import rahulPhoto from "../assets/images/Rahul_Kumar.webp";
import lovelyPhoto from "../assets/images/Lovely_Raj.webp";

/* ─── Team data ───────────────────────────────────────────────────── */
const LEADERSHIP = [
  {
    name: "Pranav Kumar",
    photo: pranavPhoto,
    roles: ["Strategist & Mentor"],
    bio: "With over 25 years of leadership experience, Pranav is a driving force behind organizational growth and transformation. A visionary strategist, he excels at bridging the gap between business goals and technological innovation. His collaborative approach and deep industry insight enable companies to harness the power of technology, optimize performance, and achieve sustainable success in an evolving marketplace.",
  },
  {
    name: "Seema Joshi",
    photo: seemaPhoto,
    roles: ["Senior IT Leader"],
    bio: "A seasoned IT leader with over 23 years of experience in application development and cloud solutions across diverse technologies, Seema brings deep technical expertise and a commitment to excellence to every project. Her passion for innovation and customer success drives her to deliver high-quality solutions that empower businesses and inspire teams to achieve their best.",
  },
];

const SMES = [
  {
    name: "Vivek Kumar",
    photo: vivekPhoto,
    roles: ["Technical SME", "Backend (Node.js) SME"],
    bio: "Vivek is a trusted Technical SME, helping teams solve complex technical challenges and deliver high-quality, scalable solutions. With deep expertise and a collaborative approach, he ensures technology drives performance and innovation across the organization. He is also a Backend (Node.js) SME, with expertise in designing and developing scalable, high-performance server-side applications, RESTful APIs, and microservices.",
  },
  {
    name: "Rajoo Yadav",
    photo: rajooPhoto,
    roles: ["Technical SME", "Frontend (React.js) SME"],
    bio: "Rajoo is a proven Technical SME who guides teams through complex technical challenges and delivers high-quality, scalable solutions. With extensive expertise and a collaborative approach, he ensures technology drives both innovation and performance across the organization. He is also a Frontend (React.js) SME, specializing in building responsive, high-performance user interfaces and scalable web applications.",
  },
  {
    name: "Rahul Kumar",
    photo: rahulPhoto,
    roles: ["Technical SME", "Frontend (React.js) SME"],
    bio: "Rahul is a vetted Technical SME known for navigating complex technical challenges and driving scalable, high-impact solutions. His expertise and collaborative approach enable teams to innovate effectively and elevate organizational performance. He is also a Frontend (React.js) SME, specializing in building responsive, high-performance user interfaces and scalable web applications.",
  },
  {
    name: "Lovely Raj",
    photo: lovelyPhoto,
    roles: ["Functional SME", "Business Analyst"],
    bio: "Lovely is a seasoned Functional SME, turning complex business requirements into practical solutions. With deep domain expertise and a collaborative approach, she helps teams streamline processes, enhance user experience, and deliver impactful results. She also brings strong Business Analyst expertise, excelling in requirements gathering, stakeholder collaboration, and translating business needs into actionable functional specifications.",
  },
];

/* ─── Photo component ─────────────────────────────────────────────── */
function TeamPhoto({ src, name }) {
  return (
    <div
      className="w-28 h-28 rounded-full overflow-hidden flex-shrink-0
                  ring-4 ring-white shadow-card bg-alt-bg"
    >
      <img
        src={src}
        alt={`Photo of ${name}`}
        className="w-full h-full object-cover object-top"
        loading="lazy"
      />
    </div>
  );
}

/* ─── Leadership card — horizontal layout ─────────────────────────── */
function LeaderCard({ member }) {
  return (
    <div className="card flex flex-col sm:flex-row gap-8 items-start">
      {/* Photo + name */}
      <div className="flex flex-col items-center gap-3 flex-shrink-0 sm:w-40">
        <TeamPhoto src={member.photo} name={member.name} />
        <p className="font-sora font-bold text-navy text-[16px] leading-snug text-center">
          {member.name}
        </p>
        <div className="flex flex-wrap gap-2 justify-center">
          {member.roles.map((r) => (
            <span key={r} className="tag text-[11px]">
              {r}
            </span>
          ))}
        </div>
      </div>

      {/* Vertical divider */}
      <div className="hidden sm:block w-px self-stretch bg-border flex-shrink-0" />

      {/* Bio */}
      <div className="flex-1 min-w-0">
        <p className="text-[15px] text-muted leading-relaxed">{member.bio}</p>
      </div>
    </div>
  );
}

/* ─── SME card — vertical layout ─────────────────────────────────── */
function SMECard({ member }) {
  return (
    <div className="card flex flex-col items-center text-center gap-5">
      <TeamPhoto src={member.photo} name={member.name} />
      <div className="w-full">
        <h3 className="text-navy mb-2">{member.name}</h3>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {member.roles.map((r) => (
            <span key={r} className="tag text-[11px]">
              {r}
            </span>
          ))}
        </div>
        <p className="text-[14px] text-muted leading-relaxed text-left">
          {member.bio}
        </p>
      </div>
    </div>
  );
}

/* ─── Page ────────────────────────────────────────────────────────── */
export default function OurTeam() {
  return (
    <>
      <PageHeader
        eyebrow="Our People"
        title="Meet Our "
        titleAccent="Team"
        subtitle="Seasoned leaders and subject matter experts united by a passion for technology and a commitment to delivering real results."
        ctaLabel="Work With Us"
        ctaTo="/contact"
      />

      {/* Leadership Team */}
      <section className="section-padding bg-alt-bg">
        <div className="section-container">
          <SectionHeader
            eyebrow="Leadership"
            title="Our "
            titleAccent="Leadership Team"
            subtitle="Visionary leaders with decades of experience driving organisational growth and transformation."
          />
          <div className="grid grid-cols-1 gap-6">
            {LEADERSHIP.map((member) => (
              <LeaderCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* SME Team */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <SectionHeader
            eyebrow="Subject Matter Experts"
            title="Our "
            titleAccent="Expert Team"
            subtitle="Hands-on specialists who bring deep technical and functional expertise to every project."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SMES.map((member) => (
              <SMECard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
