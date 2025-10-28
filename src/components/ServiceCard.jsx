export default function ServiceCard({ title, subtitle, Icon }) {
  return (
    <div className="group flex flex-col items-center text-center rounded-2xl bg-white/95 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-[#C7A042]">
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-[#C7A042]/20 to-[#0F4C81]/10 text-[#C7A042] mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-inner">
        <Icon size={34} strokeWidth={2} />
      </div>

      {/* Text */}
      <h3 className="text-lg font-bold text-[#0F4C81] tracking-tight">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm leading-relaxed">{subtitle}</p>
    </div>
  );
}
