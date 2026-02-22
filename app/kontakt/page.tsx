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
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
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
    value: 'matmaro.edu@gmail.com',
    note: 'Odpowiadam w ciągu 24h',
  },
  {
    icon: <FiPhone />,
    title: 'Telefon',
    value: '+48 796 988 896',
    note: 'Pon-Pt 14:00-20:00',
  }
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
    answer: 'Tak! Prowadzę lekcje online przez Zoom, Skype lub Microsoft Teams. Lekcje online są równie skuteczne jak stacjonarne.',
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
