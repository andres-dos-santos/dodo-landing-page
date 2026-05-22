'use client'

import { H4 } from '@/components/h4'
import {
  ServiceItem,
  ServiceItemDescription,
  ServiceItemTitle
} from '@/components/service-item'
import { useAppointment } from '@/contexts/appointment-context'
import { services } from '@/lib/services'

export default function Home() {
  const { setSelectedDate, setSelectedService, setSelectedTime } =
    useAppointment()

  return (
    <main className="mt-8">
      <H4>Serviços</H4>

      <ul className="mt-2">
        {services.map((service) => (
          <ServiceItem
            key={service.slug}
            href={`appointment/calendar?service=${service.slug}`}
            onClick={() => {
              setSelectedService(service)
              setSelectedDate(undefined)
              setSelectedTime(undefined)
            }}
            className="border border-foreground/10 first:rounded-t-2xl first:border-b-0 last:rounded-b-2xl last:border-t-0"
          >
            <ServiceItemTitle price={service.price}>
              {service.name}
            </ServiceItemTitle>
            <ServiceItemDescription>
              {service.description}
            </ServiceItemDescription>
          </ServiceItem>
        ))}
      </ul>
    </main>
  )
}
