import Image from 'next/image'
import Link from 'next/link'
import { FiBookOpen, FiUsers, FiTrendingUp, FiAward, FiCheck } from 'react-icons/fi'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego Online',
  description: 'Nauka angielskiego z doświadczonym nauczycielem. Lekcje online dopasowane do Twojego poziomu - biznesowy angielski, egzaminy, konwersacje. Umów pierwszą lekcję już dziś!',
  openGraph: {
    title: 'Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego Online',
    description: 'Nauka angielskiego z doświadczonym nauczycielem. Lekcje online dopasowane do Twojego poziomu.',
    url: 'https://matmaro.edu.pl',
    images: [{
      url: '/images/Mateusz.jpeg',
      width: 1200,
      height: 630,
      alt: 'Mateusz Maroszek - Nauczyciel Angielskiego',
    }],
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary-light text-white section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-white">
                Naucz się angielskiego z pasją i profesjonalizmem
              </h1>
              <p className="text-xl text-gray-200">
                Personalizowane lekcje dopasowane do Twojego poziomu i celów. 
                Skuteczna metoda nauczania, która przynosi rezultaty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-accent text-center">
                  Umów pierwszą lekcję
                </Link>
                <Link 
                  href="/specializacje" 
                  className="bg-white text-primary hover:bg-neutral-light font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  Zobacz ofertę
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px] rounded-full overflow-hidden shadow-2xl mx-auto">
              <Image
                src="/images/Mateusz.jpeg"
                alt="Mateusz Maroszek - Profesjonalny Nauczyciel Angielskiego"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2>Dlaczego warto ze mną uczyć?</h2>
            <p className="text-lg text-neutral-dark mt-4 max-w-2xl mx-auto">
              Łączę wieloletnie doświadczenie z nowoczesnymi metodami nauczania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl text-accent mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-neutral-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2>O mnie</h2>
              <p className="text-lg text-neutral-dark mt-4 mb-6">
                Jestem doświadczonym nauczycielem angielskiego z pasją do przekazywania wiedzy. 
                Moje lekcje są interaktywne, skuteczne i dostosowane do indywidualnych potrzeb każdego ucznia.
              </p>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheck className="text-accent text-xl mt-1 flex-shrink-0" />
                    <span className="text-neutral-dark">{achievement}</span>
                  </div>
                ))}
              </div>

              <Link href="/jak-ucze" className="btn-primary inline-block mt-8">
                Poznaj moją metodę
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="card bg-primary text-white">
                <div className="text-4xl font-bold text-accent">10+</div>
                <p className="mt-2">Lat doświadczenia</p>
              </div>
              <div className="card bg-accent text-white">
                <div className="text-4xl font-bold">500+</div>
                <p className="mt-2">Zadowolonych uczniów</p>
              </div>
              <div className="card bg-accent-dark text-white">
                <div className="text-4xl font-bold">95%</div>
                <p className="mt-2">Zdawalność egzaminów</p>
              </div>
              <div className="card bg-primary-light text-white">
                <div className="text-4xl font-bold">100%</div>
                <p className="mt-2">Zaangażowanie</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-accent to-accent-dark text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Gotowy na pierwszą lekcję?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Skontaktuj się ze mną już dziś i rozpocznij swoją przygodę z angielskim
          </p>
          <Link href="/kontakt" className="bg-white text-accent hover:bg-neutral-light font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-block text-lg shadow-xl hover:shadow-2xl">
            Skontaktuj się
          </Link>
        </div>
      </section>
    </>
  )
}

const features = [
  {
    icon: <FiBookOpen />,
    title: 'Personalizacja',
    description: 'Każda lekcja dostosowana do Twoich celów i tempa nauki',
  },
  {
    icon: <FiUsers />,
    title: 'Doświadczenie',
    description: 'Wieloletnia praktyka w nauczaniu na różnych poziomach',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Skuteczność',
    description: 'Sprawdzone metody gwarantujące szybki postęp',
  },
  {
    icon: <FiAward />,
    title: 'Certyfikaty',
    description: 'Przygotowanie do egzaminów Cambridge i IELTS',
  },
]

const achievements = [
  'Certyfikowany nauczyciel języka angielskiego',
  'Specjalizacja w przygotowaniu do egzaminów międzynarodowych',
  'Doświadczenie w pracy z dziećmi, młodzieżą i dorosłymi',
  'Autorskie materiały dydaktyczne',
  'Elastyczne godziny lekcji - dopasowane do Twojego harmonogramu',
]
