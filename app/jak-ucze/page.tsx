import { Metadata } from 'next'
import Image from 'next/image'
import { FiCheckCircle, FiMessageCircle, FiHeadphones, FiBookOpen, FiTrendingUp, FiStar, FiTarget, FiUsers } from 'react-icons/fi'

export const metadata: Metadata = {
  title: 'Jak uczę - Skuteczna Metoda Nauczania Angielskiego | Mateusz Maroszek',
  description: 'Poznaj moją sprawdzoną metodę nauczania angielskiego: indywidualne podejście, interaktywne lekcje, nowoczesne materiały i skupienie na konwersacjach. Efektywna nauka dla każdego poziomu.',
  openGraph: {
    title: 'Jak uczę - Skuteczna Metoda Nauczania Angielskiego',
    description: 'Poznaj moją sprawdzoną metodę: indywidualne podejście, interaktywne lekcje i skupienie na konwersacjach.',
    url: 'https://matmaro.edu.pl/jak-ucze',
  },
}

export default function TeachingMethodPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-accent-dark text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-white mb-4">Jak uczę?</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Moja metoda łączy tradycyjne podejście z nowoczesnymi technikami nauczania, 
            zapewniając szybki postęp i trwałe rezultaty
          </p>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="mb-6">Filozofia nauczania</h2>
            <p className="text-lg text-neutral-dark">
              Wierzę, że każdy może opanować język angielski przy odpowiednim podejściu. 
              Moje lekcje są interaktywne, praktyczne i dostosowane do indywidualnych potrzeb. 
              Skupiam się na komunikacji i pewności siebie w używaniu języka.
            </p>
          </div>

          {/* Method Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {methodSteps.slice(0, 2).map((step, index) => (
              <div key={index} className="card text-center">
                <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-neutral-dark">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {methodSteps.slice(2).map((step, index) => (
              <div key={index + 2} className="card text-center">
                <div className="bg-gradient-to-br from-primary to-accent w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {index + 3}
                </div>
                <div className="text-4xl text-accent mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h3 className="text-xl mb-3">{step.title}</h3>
                <p className="text-neutral-dark">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="section bg-neutral-light">
        <div className="container-custom">
          <h2 className="text-center mb-12">Moje podejście do nauczania</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {approaches.map((approach, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl text-accent flex-shrink-0">
                      {approach.icon}
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">{approach.title}</h3>
                      <p className="text-neutral-dark">{approach.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl mb-6">Co zyskujesz?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="text-accent text-xl mt-1 flex-shrink-0" />
                    <span className="text-neutral-dark">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lesson Structure */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-center mb-12">Struktura lekcji</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {lessonStructure.map((phase, index) => (
                <div key={index} className="card border-l-4 border-accent">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                      {phase.duration}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl mb-2">{phase.title}</h3>
                      <p className="text-neutral-dark mb-3">{phase.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {phase.activities.map((activity, idx) => (
                          <span key={idx} className="bg-neutral-light text-primary px-3 py-1 rounded-full text-sm">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Tools */}
      <section className="section bg-primary text-white">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-white">Materiały i narzędzia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-blur-sm">
                <div className="text-3xl text-accent mb-3">{material.icon}</div>
                <h4 className="text-lg font-semibold mb-2 text-white">{material.title}</h4>
                <p className="text-gray-200 text-sm">{material.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

const methodSteps = [
  {
    icon: <FiTarget />,
    title: 'Diagnoza potrzeb',
    description: 'Określamy Twój poziom, cele i preferowany styl nauki',
  },
  {
    icon: <FiBookOpen />,
    title: 'Plan nauki',
    description: 'Tworzę spersonalizowany program dopasowany do Twoich potrzeb',
  },
  {
    icon: <FiMessageCircle />,
    title: 'Praktyka',
    description: 'Intensywne ćwiczenia z naciskiem na komunikację',
  },
  {
    icon: <FiHeadphones />,
    title: 'Słuchanie',
    description: 'Rozwijamy rozumienie ze słuchu przez autentyczne materiały',
  },
  {
    icon: <FiStar />,
    title: 'Osiągnięcie celów',
    description: 'Celebrujemy sukcesy i wyznaczamy nowe cele',
  },
]

const approaches = [
  {
    icon: <FiMessageCircle />,
    title: 'Komunikacja przede wszystkim',
    description: 'Skupiam się na praktycznym użyciu języka w rzeczywistych sytuacjach. Od pierwszej lekcji zachęcam do mówienia i budowania pewności siebie.',
  },
  {
    icon: <FiUsers />,
    title: 'Indywidualne podejście',
    description: 'Każdy uczy się inaczej. Dostosowuję tempo, materiały i metody do Twojego stylu nauki i osobowości.',
  },
  {
    icon: <FiBookOpen />,
    title: 'Różnorodne materiały',
    description: 'Wykorzystuję autentyczne materiały: filmy, podcasty, artykuły, gry i interactive ćwiczenia, aby nauka była ciekawa.',
  },
  {
    icon: <FiTrendingUp />,
    title: 'Systematyczność',
    description: 'Regularny kontakt z językiem to klucz. Dostarczam materiały do samodzielnej pracy między lekcjami.',
  },
]

const benefits = [
  'Szybki postęp dostosowany do Twojego tempa',
  'Pewność siebie w mówieniu po angielsku',
  'Praktyczne umiejętności użycia języka',
  'Indywidualny feedback i korekty',
  'Dostęp do autorskich materiałów',
  'Elastyczne godziny lekcji',
  'Możliwość nauki online',
  'Wsparcie między lekcjami',
]

const lessonStructure = [
  {
    duration: '5\'',
    title: 'Warm-up',
    description: 'Rozgrzewka językowa, small talk, przypomnienie materiału',
    activities: ['Konwersacja', 'Powtórka'],
  },
  {
    duration: '15\'',
    title: 'Nowy materiał',
    description: 'Wprowadzenie nowego słownictwa lub struktury gramatycznej',
    activities: ['Prezentacja', 'Wyjaśnienie', 'Przykłady'],
  },
  {
    duration: '20\'',
    title: 'Praktyka',
    description: 'Intensywne ćwiczenia - mówienie, pisanie, słuchanie',
    activities: ['Ćwiczenia', 'Role-play', 'Dyskusje'],
  },
  {
    duration: '15\'',
    title: 'Produkcja',
    description: 'Samodzielne użycie języka w kontekście',
    activities: ['Konwersacja', 'Prezentacja', 'Tworzenie'],
  },
  {
    duration: '5\'',
    title: 'Podsumowanie',
    description: 'Recap materiału, feedback, praca domowa',
    activities: ['Review', 'Feedback', 'Zadanie'],
  },
]

const materials = [
  {
    icon: '📚',
    title: 'Podręczniki',
    description: 'Renomowane serie Cambridge, Oxford, Pearson',
  },
  {
    icon: '🎥',
    title: 'Multimedia',
    description: 'Filmy, seriale, podcasty, YouTube',
  },
  {
    icon: '💻',
    title: 'Platformy online',
    description: 'Interactive exercises, quizzes, games',
  },
  {
    icon: '📝',
    title: 'Własne materiały',
    description: 'Autorskie ćwiczenia i worksheety',
  },
]
