'use client'

import { useState } from 'react'

import { FormButton } from '@/components/form-button'
import { H4 } from '@/components/h4'
import {
  ServiceItemDescription,
  ServiceItemTitle
} from '@/components/service-item'
import { useAppointment } from '@/contexts/appointment-context'

export default function TimesPage() {
  const { selectedDate, selectedService, selectedTime } = useAppointment()
  const [customerPhone, setCustomerPhone] = useState('')

  const formattedDate = selectedDate
    ? selectedDate.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    : '-'

  return (
    <main className="mt-8">
      <section className="mb-8">
        <H4>Resumo</H4>
        <div className="mt-2 rounded-2xl border border-foreground/10 p-4">
          {selectedService ? (
            <>
              <ServiceItemTitle price={selectedService.price}>
                {selectedService.name}
              </ServiceItemTitle>
              <ServiceItemDescription>
                {selectedService.description}
              </ServiceItemDescription>
            </>
          ) : (
            <ServiceItemTitle>Serviço não selecionado</ServiceItemTitle>
          )}

          <p className="mt-4 font-sans text-xs text-foreground/70">
            <span className="font-semibold text-orange-500">
              {formattedDate}
              {selectedTime ? ` às ${selectedTime} horas` : ''}
            </span>
          </p>
        </div>
      </section>

      <section>
        <H4>Cadastro</H4>

        <div className="mt-2">
          <label className="block">
            <input
              type="tel"
              maxLength={11}
              value={customerPhone}
              onChange={(event) => setCustomerPhone(event.target.value)}
              className="h-14 w-full rounded-2xl border border-foreground/10 bg-transparent px-4 font-sans text-xs outline-none focus:border-orange-500"
              placeholder="Seu telefone (somente números)"
            />
          </label>
        </div>
      </section>

      <FormButton className="mt-8" disabled={!customerPhone.trim()}>
        Confirmar
      </FormButton>
    </main>
  )
}
