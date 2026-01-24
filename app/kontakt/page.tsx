'use client'

import { Metadata } from 'next'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend } from 'react-icons/fi'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Skontaktuj się ze mną</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Masz pytania? Chcesz umówić pierwszą lekcję? Skontaktuj się ze mną!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6">Dane kontaktowe</h2>
                <p className="text-lg text-neutral-dark mb-8">
                  Odpowiem na wszystkie Twoje pytania i chętnie opowiem więcej o moich lekcjach. 
                  Zazwyczaj odpowiadam w ciągu 24 godzin.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="card hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl text-accent flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-1">{info.title}</h3>
                        <p className="text-neutral-dark">{info.value}</p>
                        {info.note && (
                          <p className="text-sm text-gray-500 mt-1">{info.note}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Available Hours */}
              <div className="card bg-gradient-to-br from-accent-light to-accent text-white">
                <div className="flex items-start gap-4">
                  <FiClock className="text-4xl flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Godziny dostępności</h3>
                    <div className="space-y-2">
                      <p>Poniedziałek - Piątek: 14:00 - 20:00</p>
                      <p>Sobota: 10:00 - 16:00</p>
                      <p>Niedziela: Na życzenie</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-center mb-8">Lokalizacja</h2>
          <p className="text-center text-neutral-dark mb-8 max-w-2xl mx-auto">
            Oferuję lekcje stacjonarne w Warszawie oraz online przez Zoom/Skype. 
            Lokalizacja podana poniżej to miejsce lekcji stacjonarnych.
          </p>
          
          {/* Google Maps Embed */}
          <div className="max-w-5xl mx-auto">
            <div className="card p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.0893029847695!2d21.01223931596216!3d52.22977557975836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669fd4d977%3A0x8b3f0c4e1c8e5a82!2sWarsaw%2C%20Poland!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>

            {/* Location Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="card text-center">
                <FiMapPin className="text-4xl text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Adres</h4>
                <p className="text-neutral-dark text-sm">ul. Przykładowa 123</p>
                <p className="text-neutral-dark text-sm">00-001 Warszawa</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">🚇</div>
                <h4 className="font-semibold mb-2">Dojazd</h4>
                <p className="text-neutral-dark text-sm">Metro: Centrum (3 min)</p>
                <p className="text-neutral-dark text-sm">Parking dostępny</p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-3">💻</div>
                <h4 className="font-semibold mb-2">Lekcje online</h4>
                <p className="text-neutral-dark text-sm">Zoom, Skype, Teams</p>
                <p className="text-neutral-dark text-sm">Wygodnie z domu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Często zadawane pytania</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
                  {faq.question}
                  <span className="text-accent text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-neutral-dark mt-4 pt-4 border-t border-neutral-gray">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const contactInfo = [
  {
    icon: <FiMail />,
    title: 'Email',
    value: 'kontakt@englishteacher.pl',
    note: 'Odpowiadam w ciągu 24h',
  },
  {
    icon: <FiPhone />,
    title: 'Telefon',
    value: '+48 123 456 789',
    note: 'Pon-Pt 14:00-20:00',
  },
  {
    icon: <FiMapPin />,
    title: 'Adres',
    value: 'ul. Przykładowa 123, 00-001 Warszawa',
    note: 'Lekcje stacjonarne i online',
  },
]

const faqs = [
  {
    question: 'Ile trwa jedna lekcja?',
    answer: 'Standardowa lekcja trwa 60 minut. Dla zaawansowanych uczniów oferuję również lekcje 90-minutowe, które pozwalają na głębsze zagłębienie się w materiał.',
  },
  {
    question: 'Jakie są ceny lekcji?',
    answer: 'Ceny zależą od pakietu - im więcej lekcji, tym niższa cena jednostkowa. Skontaktuj się ze mną, aby otrzymać szczegółową ofertę cenową dostosowaną do Twoich potrzeb.',
  },
  {
    question: 'Czy prowadzisz lekcje online?',
    answer: 'Tak! Prowadzę zarówno lekcje stacjonarne w Warszawie, jak i online przez Zoom, Skype lub Microsoft Teams. Lekcje online są równie skuteczne jak stacjonarne.',
  },
  {
    question: 'Jak wygląda pierwsza lekcja?',
    answer: 'Pierwsza lekcja to lekcja próbna, podczas której poznaję Twój poziom, cele i oczekiwania. Wspólnie ustalimy plan nauki i harmonogram. Pierwsza lekcja jest bezpłatna!',
  },
  {
    question: 'Czy mogę odwołać lekcję?',
    answer: 'Tak, lekcję można odwołać lub przełożyć z minimum 24-godzinnym wyprzedzeniem. W przypadku nagłych sytuacji staram się być elastyczny.',
  },
  {
    question: 'Jakie materiały są potrzebne?',
    answer: 'Na początku dostarczam wszystkie potrzebne materiały elektronicznie. W zależności od poziomu i celów, możemy wspólnie wybrać podręcznik, który będzie dla Ciebie odpowiedni.',
  },
]
