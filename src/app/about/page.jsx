export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 mt-14 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81]">
          About Bizline
        </h1>
        <div className="mt-3 w-24 h-1 bg-gradient-to-r from-[#0F4C81] to-[#C7A042] mx-auto rounded-full"></div>

        {/* Intro Text */}
        <p className="mt-8 text-lg md:text-xl text-gray-700 leading-relaxed">
          Bizline Businessmen Services LLC, based in Abu Dhabi, is a one-stop
          solution for businesses, investors, and individuals seeking reliable
          and efficient corporate services in the UAE. With a strong commitment
          to professionalism, transparency, and customer satisfaction, we help
          clients navigate the complexities of government and legal processes.
        </p>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-6xl mx-auto mt-16 grid gap-10 md:grid-cols-2 px-6 relative z-10">
        {/* Vision Card */}
        <div className="group bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-[#C7A042] transition-all hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#0F4C81] group-hover:text-[#C7A042] transition-colors">
            Our Vision
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            To be the most trusted and reliable business support partner in the
            UAE, empowering entrepreneurs, investors, and organizations to
            achieve seamless growth and success.
          </p>
        </div>

        {/* Mission Card */}
        <div className="group bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-lg border border-gray-100 hover:border-[#C7A042] transition-all hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-[#0F4C81] group-hover:text-[#C7A042] transition-colors">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            To simplify business and government processes through expertise,
            transparency, and personalized service — ensuring every client’s
            journey in the UAE is smooth, compliant, and efficient.
          </p>
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0F4C81]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#C7A042]/10 rounded-full blur-3xl"></div>
    </section>
  )
}
