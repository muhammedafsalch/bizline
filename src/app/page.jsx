
import Link from 'next/link'
import ServiceCard from '../components/ServiceCard'
import Image from 'next/image'
import { CheckCircle, Hourglass, BookOpenCheck, Clock, Globe } from "lucide-react";


const services = [
  {
    title: "Business Setup & Corporate Solutions",
    img: "/services/for.jpeg", // use a premium office/corporate setup image
    items: [
      "Company Formation (Mainland, Free Zone, Offshore)",
      "Company Liquidation & Deregistration",
      "PRO & Government Liaison Services",
      "Trade License Renewal & Amendments",
      "Legal Contracts & Agreements",
      "Ministry of Economy Services",
      "Trademark Registration & Intellectual Property Protection",
    ],
  },
  {
    title: "Tax & Accounting Services",
    img: "/services/tax.jpeg", // finance or tax-related image
    items: [
      "Corporate Tax Registration",
      "Corporate Tax Filing & Compliance",
      "VAT Registration & Deregistration",
      "VAT Filing & Return Submission",
      "Tax Advisory & Consultation",
      "Accounting & Bookkeeping Services",
      "ESR (Economic Substance Regulations) Compliance",
      "UBO (Ultimate Beneficial Owner) Reporting",
      "Assistance with FTA (Federal Tax Authority) Audits",
    ],
  },
  {
    title: "Visa & Immigration Services",
    img: "/services/visa.jpg", // passport/visa stamping image
    items: [
      "Employment & Family Visa Services",
      "Visit Visa (Short & Long Term)",
      "Investor & Partner Visa",
      "Golden Visa Services",
      "Domestic Worker Visa (Maid, Driver, Nanny)",
      "Immigration & Residency Services",
      "CICPA & Security Passes",
      "Emirates ID Services",
    ],
  },
  {
    title: "Legal, Notary & Attestation",
    img: "/services/att.jpeg", // law or notary themed image
    items: [
      "Notary Public & Court Documentation",
      "Legal & Normal Translation (Arabic ↔ English & other languages)",
      "Certificate Attestation & Equivalency (Education, Birth, Marriage, etc.)",
      "Power of Attorney Drafting & Authentication",
      "Wills & Legal Advisory Documentation",
    ],
  },
  {
    title: "Government & Regulatory Services",
    img: "/services/gov.jpeg", // government/authority themed image
    items: [
      "Ministry of Labour & Ministry of Interior Services",
      "Tasheel & Tawjeeh Services",
      "Civil Defense & Municipality Approvals",
      "Department of Transport Services",
      "Chamber of Commerce Services",
      "Customs Registration & Clearance Assistance",
    ],
  },
  {
    title: "ADNOC & Oilfield Services",
    img: "/services/adn.jpeg", // oilfield/ADNOC themed image
    items: [
      "ADNOC Vendor Registration & Prequalification",
      "ADNOC In-Country Value (ICV) Certification Support",
      "ADNOC Security & Gate Pass Services",
      "ADNOC E-Supplier Registration & Renewal",
      "ADNOC Compliance & Documentation Services",
      "Oilfield Work Permits & Approval Assistance",
    ],
  },
  {
    title: "Insurance & Compliance",
    img: "/services/insu.jpeg", // insurance/health theme
    items: [
      "Health Insurance (Individual & Corporate)",
      "Vehicle Insurance & Renewal",
      "Workmen Compensation Insurance",
    ],
  },
  {
    title: "Business Support Services",
    img: "/services/support.webp", // consultancy/business team image
    items: [
      "Document Clearing & Typing Services",
      "ISO Certification Support",
      "Business Consultancy & Advisory",
      "Office Space & Sponsorship Assistance",
    ],
  },
  {
    title: "Website & Digital Solutions",
    img: "/services/web.jpeg", // digital/tech image
    items: [
      "Business Website Design & Development",
      "E-Commerce Website Development",
      "SEO (Search Engine Optimization) Services",
      "Social Media Setup & Management",
      "Digital Marketing & Google Ads Management",
      "Business Email & Domain Registration",
      "Website Maintenance & Hosting Services",
    ],
  },
];

const features = [
  {
    icon: "✅",
    title: "Trusted Expertise",
    desc: "Expert guidance with deep knowledge of UAE regulations.",
    color: "from-[#0F4C81]/10 text-[#0F4C81] border-[#0F4C81]/20",
  },
  {
    icon: "⚡",
    title: "One-Stop Solution",
    desc: "Comprehensive services under one trusted partner.",
    color: "from-[#C7A042]/10 text-[#C7A042] border-[#C7A042]/20",
  },
  {
    icon: "🚀",
    title: "Fast & Transparent",
    desc: "Quick, hassle-free processes with full transparency.",
    color: "from-[#0F4C81]/10 text-[#0F4C81] border-[#0F4C81]/20",
  },
  {
    icon: "🎯",
    title: "Tailored Services",
    desc: "Custom solutions for entrepreneurs, corporates & investors.",
    color: "from-[#C7A042]/10 text-[#C7A042] border-[#C7A042]/20",
  },
];



export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      {/* Hero with Background Image */}
      <div
        className="relative flex items-center justify-center h-screen text-white"
        style={{ backgroundColor: '#0F4C81' }}
      >
        <Image
          src={"/hero.jpg"}
          alt="Bizline Hero Background"
          fill
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-4xl text-center px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold animate-fadeInUp">
            Your Ambitions, Simplified
          </h1>
          <p className="mt-6 text-lg md:text-xl animate-fadeInUp delay-200">
            Bizline Businessmen Services LLC helps with company formation, visas, and government documentation across the UAE. Focus on growth—we'll handle the paperwork.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-400">
            <a
              href="tel:+971507795983"
              className="rounded-md bg-[#C7A042] px-6 py-3 font-medium text-white shadow-lg hover:scale-105 transition-transform"
            >
              Call +971507795983
            </a>
            <a
              href="https://wa.me/971507795983"
              className="rounded-md bg-white px-6 py-3 font-medium text-[#0F4C81] shadow-lg hover:scale-105 transition-transform"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>




      <div className="mt-20 max-w-6xl mx-auto rounded-2xl bg-white p-12 shadow-xl text-center relative overflow-hidden border border-gray-100">
        {/* Decorative accents */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#0F4C81]/10 to-transparent rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#C7A042]/10 to-transparent rounded-tl-full"></div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F4C81] tracking-tight">
          Why Choose <span className="text-[#C7A042]">Bizline</span>?
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          Experience seamless business setup and support with our trusted team.
        </p>

        {/* Features Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group rounded-xl border ${f.color.replace(
                "from-",
                "border-"
              )} bg-white p-6 hover:shadow-lg hover:-translate-y-1 transition-all`}
            >
              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${f.color} mb-4`}
              >
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg text-[#0F4C81]">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-block rounded-full border-2 border-[#0F4C81] bg-[#0F4C81] px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-[#C7A042] hover:border-[#C7A042] transition-all"
          >
            Get a Quote
          </Link>
        </div>
      </div>



      {/* New Split Section */}
      <div className="relative py-20 bg-gradient-to-br from-[#F9F9F9] via-[#F3F4F6] to-[#EAEAEA]">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0F4C81]/5 via-transparent to-[#C7A042]/10"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 items-center gap-12 max-w-6xl mx-auto px-6 animate-fadeInUp">
          {/* Left Image */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl group">
            <Image
              src="/sucess.jpg"
              alt="Professional Business Support"
              fill
              className="object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left transition-all duration-700 ease-out transform hover:translate-x-1">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F4C81] leading-tight">
              Together Towards Success
            </h2>
            <p className="mt-5 text-gray-700 text-lg sm:text-xl leading-relaxed">
              Dive into a world where business challenges vanish. With{" "}
              <span className="font-semibold text-[#0F4C81]">Bizline</span>, access{" "}
              <span className="font-semibold">trusted company setup and legal documentation services</span>{" "}
              approved by UAE authorities.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="rounded-full bg-[#C7A042] px-8 py-4 text-white font-semibold shadow-lg 
                   transition-all duration-500 ease-in-out 
                   hover:bg-[#0F4C81] hover:scale-105 hover:shadow-2xl"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>


      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-200 overflow-hidden">
        {/* Background Premium Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#0F4C81]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#C7A042]/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl mt-4 md:text-5xl font-extrabold text-[#C7A042] tracking-tight">
              Our Services
            </h1>
            <div className="mt-3 w-24 h-1 mx-auto bg-gradient-to-r from-[#C7A042] to-[#0F4C81] rounded-full"></div>
            <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Premium, trusted solutions tailored for entrepreneurs, corporates, and investors across the UAE.
            </p>
          </div>

          {/* Category Cards */}
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((cat) => (
              <div
                key={cat.title}
                className="group bg-gray-800/80 backdrop-blur-xl rounded-2xl border border-gray-700 overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={cat.img}
                    alt={cat.title}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-[#C7A042]">
                    {cat.title}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-2 text-gray-300 text-sm">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#C7A042]">✔</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  )
}
