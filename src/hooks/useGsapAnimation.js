import { useRef, useEffect } from 'react'
import gsap from 'gsap'

export const useGsapAnimation = (animationConfig) => {
  const ref = useRef()

  useEffect(() => {
    const element = ref.current
    if (!element || !animationConfig) return

    const { from, to, timeline } = animationConfig

    if (timeline) {
      timeline.fromTo(element, from, to)
    } else {
      gsap.fromTo(element, from, to)
    }
  }, [animationConfig])

  return ref
}