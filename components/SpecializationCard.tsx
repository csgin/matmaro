import { ReactNode } from 'react'

interface SpecializationCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
  color: string
}

const SpecializationCard = ({ icon, title, description, features, color }: SpecializationCardProps) => {
  const colorClasses = {
    'primary': 'text-primary',
    'accent': 'text-accent',
    'primary-light': 'text-primary-light',
    'accent-dark': 'text-accent-dark',
  }

  const bgColorClasses = {
    'primary': 'bg-primary',
    'accent': 'bg-accent',
    'primary-light': 'bg-primary-light',
    'accent-dark': 'bg-accent-dark',
  }

  const colorClass = colorClasses[color as keyof typeof colorClasses] || 'text-primary'
  const bgColorClass = bgColorClasses[color as keyof typeof bgColorClasses] || 'bg-primary'

  return (
    <div className="card group hover:scale-105 transition-all duration-300">
      {/* Icon */}
      <div className={`text-5xl ${colorClass} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl mb-3">{title}</h3>

      {/* Description */}
      <p className="text-neutral-dark mb-4">{description}</p>

      {/* Features */}
      <div className={`${bgColorClass} bg-opacity-10 rounded-lg p-4 mt-auto`}>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className={`${colorClass} mt-1 flex-shrink-0`}>✓</span>
              <span className="text-sm text-neutral-dark">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SpecializationCard
