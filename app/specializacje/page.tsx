import { Metadata } from 'next'
import { FiBookOpen, FiBriefcase, FiGlobe, FiAward, FiTarget, FiUsers } from 'react-icons/fi'
import SpecializationCard from '@/components/SpecializationCard'

export const metadata: Metadata = {
  title: 'Moje Specializacje - Mateusz Maroszek',
  description: 'Odkryj moje specializacje: biznesowy angielski, przygotowanie do egzaminów, konwersacje i więcej.',
}

export default function SpecializationsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-light text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Moje Specializacje</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-200">
            Oferuję szeroki zakres lekcji dostosowanych do różnych potrzeb - 
            od podstaw po zaawansowane kursy biznesowe i przygotowanie do egzaminów
          </p>
        </div>
      </section>

      {/* Specializations Grid */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {specializations.map((spec, index) => (
              <SpecializationCard key={index} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-8">Dla kogo są moje lekcje?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {targetGroups.map((group, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl mb-3">{group.title}</h3>
                  <p className="text-neutral-dark">{group.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

const specializations = [
  {
    icon: <FiBriefcase />,
    title: 'Business English',
    description: 'Przygotowanie do spotkań biznesowych, prezentacji, negocjacji. Słownictwo branżowe i etykieta biznesowa.',
    features: [
      'Negocjacje i spotkania biznesowe',
      'Prezentacje i wystąpienia publiczne',
      'Korespondencja biznesowa',
      'Słownictwo specjalistyczne',
    ],
    color: 'primary',
  },
  {
    icon: <FiUsers />,
    title: 'Konwersacje',
    description: 'Rozwijanie płynności mówienia przez rozmowy na ciekawe tematy. Poszerzanie słownictwa i pewności siebie.',
    features: [
      'Tematy dopasowane do zainteresowań',
      'Korekta wymowy i akcent',
      'Idiomy i phrasal verbs',
      'Swobodna konwersacja',
    ],
    color: 'accent-dark',
  },
  {
    icon: <FiBookOpen />,
    title: 'Angielski ogólny',
    description: 'Kompleksowa nauka na każdym poziomie - od podstaw (A1) po zaawansowany (C2). Wszystkie aspekty języka.',
    features: [
      'Poziomy A1-C1',
      'Gramatyka i słownictwo',
      'Czytanie i pisanie',
      'Słuchanie i mówienie',
    ],
    color: 'primary',
  },
  {
    icon: <FiTarget />,
    title: 'Kursy tematyczne',
    description: 'Specjalistyczne kursy dostosowane do konkretnych potrzeb - podróże, medycyna, IT, prawo i inne.',
    features: [
      'English for Travel',
      'Medical English',
      'IT & Tech English',
      'Legal English',
    ],
    color: 'accent',
  },
]

const targetGroups = [
  {
    title: 'Dla początkujących',
    description: 'Jeśli zaczynasz od zera lub masz duże luki w podstawach - nauczę Cię solidnych fundamentów języka w przyjaznej atmosferze.',
  },
  {
    title: 'Dla zaawansowanych',
    description: 'Pomogę Ci osiągnąć płynność na poziomie native speakera, przygotować się do egzaminów lub doskonalić język w kontekście zawodowym.',
  },
  {
    title: 'Dla studentów',
    description: 'Przygotowanie do egzaminów, wsparcie w nauce akademickiej, przygotowanie do studiów za granicą.',
  },
  {
    title: 'Dla profesjonalistów',
    description: 'Business English dopasowany do Twojej branży, przygotowanie do prezentacji, rozmów kwalifikacyjnych czy relokacji.',
  },
]
