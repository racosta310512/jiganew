import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = () => {
  // Ref para el elemento que vamos a animar
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element) return

    // Animación GSAP
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
        rotationX: -15,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    )
  }, [])

  // Solo devolvemos la ref, no JSX
  return ref
}
