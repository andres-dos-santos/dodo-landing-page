export const services = [
  {
    slug: 'corte-social',
    name: 'Corte social',
    description:
      'Corte clássico com tesoura e máquina, finalizado com styling.',
    price: 50
  },
  {
    slug: 'corte-de-maquina',
    name: 'Corte de máquina',
    description:
      'Corte rápido feito com máquina, com acabamento na nuca e laterais.',
    price: 35
  },
  {
    slug: 'barba',
    name: 'Barba',
    description: 'Modelagem da barba com toalha quente, navalha e hidratação.',
    price: 30
  }
]

export type Service = (typeof services)[number]
