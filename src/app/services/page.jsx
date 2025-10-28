import Image from "next/image";

const categories = [
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

export default function Services() {
  return (
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
          {categories.map((cat) => (
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
  );
}
