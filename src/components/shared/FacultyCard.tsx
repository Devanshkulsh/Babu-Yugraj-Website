import React from "react";

interface FacultyCardProps {
  image: string;
  name: string;
  department?: string;
  designation?: string;
  qualification?: string;
  registration?: string;
  teacherCode?: string;
  doj?: string;
  experience?: string;
  aadharNo?: string;
}

const FacultyCard: React.FC<FacultyCardProps> = ({
  image,
  name,
  department,
  designation,
  qualification,
  registration,
  teacherCode,
  doj,
  experience,
  aadharNo,
}) => {
  // Helper to render rows only if data exists
  const InfoRow = ({ label, value }: { label: string; value?: string }) => {
    if (!value) return null;
    return (
      <div className="grid grid-cols-3 border-b border-emerald-900/5 last:border-0 transition-colors hover:bg-emerald-50/30">
        <div className="col-span-1 border-r border-emerald-900/5 bg-[#f6f4ee]/50 px-4 py-3 text-[13px] font-bold text-rose-900">
          {label}
        </div>
        <div className="col-span-2 px-4 py-3 text-[13px] font-medium text-slate-700">
          {value}
        </div>
      </div>
    );
  };

  return (
    <div className="group w-full max-w-md overflow-hidden rounded-4xl border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/5 transition-all hover:shadow-2xl hover:shadow-emerald-950/10">
      {/* Profile Image Section */}
      <div className="relative h-72 w-full overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-emerald-950/80 via-transparent to-transparent" />

        {/* Floating Identity Label */}
        <div className="absolute bottom-6 left-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
            {designation || "Faculty Member"}
          </p>
          <h3 className="text-2xl font-black text-white">{name}</h3>
        </div>
      </div>

      {/* Data Table Section */}
      <div className="bg-white">
        <InfoRow label="Name" value={name} />
        <InfoRow label="Department" value={department} />
        <InfoRow label="Designation" value={designation} />
        <InfoRow label="Qualification" value={qualification} />
        <InfoRow label="Registration" value={registration} />
        <InfoRow label="Teacher Code" value={teacherCode} />
        <InfoRow label="D.O.J" value={doj} />
        <InfoRow label="Experience" value={experience} />
        <InfoRow label="Aadhar Card" value={aadharNo} />
      </div>

      {/* Bottom Accent Line */}
      <div className="h-1.5 w-full bg-linear-to-r from-emerald-900 via-emerald-800 to-rose-900" />
    </div>
  );
};

export default FacultyCard;
