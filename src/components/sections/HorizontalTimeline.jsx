import { useEffect, useRef, useState } from 'react'

function HorizontalTimeline() {
  const DOT_SIZE = 20

  const lineRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [lineWidth, setLineWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      if (lineRef.current) {
        setLineWidth(lineRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight

      if (scrollHeight <= 0) return

      const rawProgress = scrollTop / scrollHeight
      const clamped = Math.min(Math.max(rawProgress, 0), 1)

      setProgress(clamped)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const travelDistance = Math.max(lineWidth - DOT_SIZE, 0)

  return (
    <section className="hidden md:block max-w-6xl mx-auto px-6 py-40">
      <h2 className="text-2xl font-semibold text-gray-900 mb-24 text-center">
        Werdegang
      </h2>

      <div
        ref={lineRef}
        className="relative h-1 bg-brand-yellow rounded-full"
      >
        <div
          className="
            absolute left-0 top-1/2
            w-5 h-5
            bg-brand-pink
            rounded-full
            shadow-lg
            animate-pulse
            -translate-y-1/2
          "
          style={{
            transform: `translateX(${progress * travelDistance}px)`,
          }}
        />
      </div>
    </section>
  )
}

export default HorizontalTimeline
