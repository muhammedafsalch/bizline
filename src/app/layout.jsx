import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaWhatsapp } from 'react-icons/fa' 

export const metadata = {
  title: "Bizline Businessmen Services LLC",
  description:
    "Bizline helps with company formation, visas, and government documentation across the UAE. Focus on growth—we'll handle the paperwork.",
  keywords: [
    "Bizline UAE",
    "business setup UAE",
    "company formation UAE",
    "visa services UAE",
    "government documentation UAE",
    "business services Abu Dhabi",
  ],
  authors: [{ name: "Bizline Businessmen Services LLC" }],
  creator: "Bizline Businessmen Services LLC",
  publisher: "Bizline Businessmen Services LLC",

  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.bizline.ae",
    siteName: "Bizline Businessmen Services LLC",
    title: "Bizline Businessmen Services LLC",
    description:
      "Company formation, visas, and government documentation services in the UAE. Trusted by businesses since 2014.",
    images: [
      {
        url: "https://www.bizline.ae/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Bizline Businessmen Services LLC",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@bizlineuae",
    title: "Bizline Businessmen Services LLC",
    description:
      "Business setup, visa, and documentation services in the UAE. Hassle-free, transparent, and reliable.",
    images: ["https://www.bizline.ae/logo.jpg"],
  },

  metadataBase: new URL("https://www.bizline.ae"),
  alternates: {
    canonical: "https://www.bizline.ae",
  },

  icons: {
    icon: "/favicon.ico", // ✅ path from public/
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow">{children}</main>

        {/* ✅ Floating WhatsApp Button */}
        <a
          href="https://wa.me/971507795983"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={28} />
        </a>

        <Footer />
      </body>
    </html>
  )
}
