'use client'

import { useState, FormEvent } from 'react'
import { FiSend } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('success')
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
        setStatus('idle')
      }, 3000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="card bg-neutral-light">
      <h2 className="mb-6">Wyślij wiadomość</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-neutral-dark mb-2">
            Imię i nazwisko *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all"
            placeholder="Jan Kowalski"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-dark mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all"
            placeholder="jan@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark mb-2">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all"
            placeholder="+48 123 456 789"
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-neutral-dark mb-2">
            Temat *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all"
          >
            <option value="">Wybierz temat</option>
            <option value="first-lesson">Pierwsza lekcja próbna</option>
            <option value="pricing">Pytanie o cennik</option>
            <option value="schedule">Harmonogram zajęć</option>
            <option value="exam-prep">Przygotowanie do egzaminu</option>
            <option value="other">Inne</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-dark mb-2">
            Wiadomość *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-neutral-gray focus:border-accent focus:ring-2 focus:ring-accent-light outline-none transition-all resize-none"
            placeholder="Opisz swoje potrzeby i oczekiwania..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full btn-accent flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'sending' ? (
            <>
              <span className="animate-spin">⏳</span>
              Wysyłanie...
            </>
          ) : status === 'success' ? (
            <>
              <span>✓</span>
              Wysłano!
            </>
          ) : (
            <>
              <FiSend />
              Wyślij wiadomość
            </>
          )}
        </button>

        {/* Success Message */}
        {status === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
            Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.
          </div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
            Przepraszam, wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio przez email.
          </div>
        )}
      </form>

      <p className="text-sm text-gray-500 mt-4">
        * Pola wymagane. Twoje dane są bezpieczne i nie będą udostępniane osobom trzecim.
      </p>
    </div>
  )
}

export default ContactForm
