'use client'

import {
  createContext,
  type ReactNode,
  useContext,
  useMemo,
  useState
} from 'react'

import type { Service } from '@/lib/services'

type AppointmentContextValue = {
  selectedDate?: Date
  selectedService?: Service
  selectedTime?: string
  setSelectedDate: (date: Date | undefined) => void
  setSelectedService: (service: Service | undefined) => void
  setSelectedTime: (time: string | undefined) => void
}

const AppointmentContext = createContext<AppointmentContextValue | undefined>(
  undefined
)

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [selectedService, setSelectedService] = useState<Service>()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()

  const value = useMemo(
    () => ({
      selectedDate,
      selectedService,
      selectedTime,
      setSelectedDate,
      setSelectedService,
      setSelectedTime
    }),
    [selectedDate, selectedService, selectedTime]
  )

  return (
    <AppointmentContext.Provider value={value}>
      {children}
    </AppointmentContext.Provider>
  )
}

export function useAppointment() {
  const context = useContext(AppointmentContext)

  if (!context) {
    throw new Error('useAppointment must be used inside AppointmentProvider')
  }

  return context
}
