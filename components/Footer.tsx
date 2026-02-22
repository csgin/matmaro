import Link from 'next/link'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Mateusz Mroszek</h3>
            <p className="text-gray-300">
              Profesjonalne lekcje angielskiego dopasowane do Twoich potrzeb. 
              Skuteczna nauka z pasją.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Szybkie linki</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/specializacje" className="text-gray-300 hover:text-accent transition-colors">
                  Moje Specializacje
                </Link>
              </li>
              <li>
                <Link href="/jak-ucze" className="text-gray-300 hover:text-accent transition-colors">
                  Jak uczę
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-accent transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <FiMail className="text-accent" />
                <a href="mailto:matmaro.edu@gmail.com" className="hover:text-accent transition-colors">
                  matmaro.edu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <FiPhone className="text-accent" />
                <a href="tel:+48796988896" className="hover:text-accent transition-colors">
                  +48 796 988 896
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SUSZIT - Usługi Informatyczne Robert Susz. Wszystkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
