'use client'

import { useEffect } from 'react'

const ease = 0.12
const wheelMultiplier = 0.85

function getMaxScroll() {
  return document.documentElement.scrollHeight - window.innerHeight
}

function clampScroll(value: number) {
  return Math.max(0, Math.min(value, getMaxScroll()))
}

export function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    )

    if (prefersReducedMotion.matches) {
      return
    }

    let currentY = window.scrollY
    let targetY = currentY
    let frameId = 0
    let isAnimating = false

    const stop = () => {
      isAnimating = false
      frameId = 0
    }

    const animate = () => {
      currentY += (targetY - currentY) * ease

      if (Math.abs(targetY - currentY) < 0.5) {
        window.scrollTo(0, targetY)
        stop()
        return
      }

      window.scrollTo(0, currentY)
      frameId = window.requestAnimationFrame(animate)
    }

    const start = () => {
      if (isAnimating) {
        return
      }

      isAnimating = true
      frameId = window.requestAnimationFrame(animate)
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey) {
        return
      }

      event.preventDefault()
      targetY = clampScroll(targetY + event.deltaY * wheelMultiplier)
      start()
    }

    const handleScroll = () => {
      if (isAnimating) {
        return
      }

      currentY = window.scrollY
      targetY = currentY
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('scroll', handleScroll)

      if (frameId) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return null
}
