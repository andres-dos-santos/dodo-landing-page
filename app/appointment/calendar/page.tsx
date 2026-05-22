'use client'

import { ptBR } from 'date-fns/locale'
import { useRouter, useSearchParams } from 'next/navigation'
import type { CSSProperties } from 'react'
import { Suspense } from 'react'
import { type DayButtonProps, DayPicker } from 'react-day-picker'

import { FormButton } from '@/components/form-button'
import { H4 } from '@/components/h4'
import {
  ServiceItem,
  ServiceItemDescription,
  ServiceItemTitle
} from '@/components/service-item'
import { useAppointment } from '@/contexts/appointment-context'
import { services } from '@/lib/services'
import 'react-day-picker/style.css'

const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:30', '17:00']

function CalendarDayButton({
  day: _day,
  modifiers,
  style,
  ...props
}: DayButtonProps) {
  return (
    <button
      {...props}
      style={{
        ...style,
        color: modifiers.selected ? '#f97316' : style?.color,
        height: '100%',
        width: '100%'
      }}
    />
  )
}

function CalendarContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const {
    selectedDate,
    selectedService: contextService,
    selectedTime,
    setSelectedDate,
    setSelectedService,
    setSelectedTime
  } = useAppointment()
  const today = new Date(new Date().setHours(0, 0, 0, 0))
  const selectedServiceSlug = searchParams.get('service')
  const queryService = services.find(
    (service) => service.slug === selectedServiceSlug
  )
  const selectedService = contextService ?? queryService

  function handleSelectDate(date: Date | undefined) {
    if (!date) {
      return
    }

    setSelectedDate(date)
    setSelectedService(selectedService)
    setSelectedTime(undefined)
  }

  function handleNext() {
    router.push('/appointment/resume')
  }

  return (
    <main className="mt-8">
      {selectedService ? (
        <ul className="mb-8">
          <H4>Serviço</H4>

          <ServiceItem
            href={`/appointment/calendar?service=${selectedService.slug}`}
            className="rounded-2xl border border-foreground/10 mt-2"
          >
            <ServiceItemTitle price={selectedService.price}>
              {selectedService.name}
            </ServiceItemTitle>
            <ServiceItemDescription>
              {selectedService.description}
            </ServiceItemDescription>
          </ServiceItem>
        </ul>
      ) : null}

      <section>
        <H4>SELECIONE UM DIA</H4>

        <div className="mt-2 rounded-xl flex items-center justify-center border border-foreground/10 p-4">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleSelectDate}
            components={{
              DayButton: CalendarDayButton
            }}
            locale={ptBR}
            disabled={{ before: today }}
            showOutsideDays
            styles={{
              root: {
                '--rdp-accent-color': '#f97316',
                '--rdp-selected-border': '0 solid transparent',
                '--rdp-today-color': '#f97316',
                width: '100%',
                maxWidth: 'auto'
              } as CSSProperties,
              months: {
                maxWidth: 'none',
                width: '100%'
              },
              month_grid: {
                tableLayout: 'fixed',
                width: '100%'
              },
              day: {
                fontSize: '12px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                width: '14.285%',
                height: 48
              },
              day_button: {
                color: 'inherit',
                display: 'flex',
                fontSize: '12px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                height: '100%',
                width: '100%'
              },
              outside: {
                fontSize: '12px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500
              },
              month: {
                fontSize: '12px',
                letterSpacing: '-0.05em',
                fontFamily: 'var(--font-title)',
                fontWeight: 500,
                width: '100%'
              },
              disabled: {
                cursor: 'not-allowed',
                opacity: 0.3
              }
            }}
            modifiersStyles={{
              selected: {
                color: '#f97316'
              }
            }}
          />
        </div>
      </section>

      {selectedDate ? (
        <section className="mt-8">
          <H4>SELECIONE UM HORÁRIO</H4>

          <ul className="mt-4 grid grid-cols-3 gap-2">
            {availableTimes.map((time) => {
              const isSelected = selectedTime === time

              return (
                <li key={time}>
                  <button
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`h-12 w-full rounded-full border font-title text-xs font-medium transition-colors ${
                      isSelected
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-foreground/10 hover:border-orange-500 hover:bg-orange-500 hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      ) : null}

      <FormButton
        className="mt-8"
        disabled={!selectedDate || !selectedTime}
        onClick={handleNext}
      >
        Avançar
      </FormButton>
    </main>
  )
}

export default function CalendarPage() {
  return (
    <Suspense fallback={null}>
      <CalendarContent />
    </Suspense>
  )
}
