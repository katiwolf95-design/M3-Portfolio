import { useEffect, useRef, useState } from 'react'
import TimelineItem from './TimelineItem'

function HorizontalTimeline() {
  const DOT_SIZE = 20
  const CONTINUE_POSITION = 0.92

  const lineRef = useRef(null)

  const [progress, setProgress] = useState(0)
  const [lineWidth, setLineWidth] = useState(0)

  const events = [
    {
      year: '2011',
      title: 'Design & Communication',
      text: 'Visual foundations, design thinking and clear communication.',
      position: 0.08,
    },
    {
      year: '2021',
      title: 'Marketing & Impact',
      text: 'Strategic thinking, reach and brand logic.',
      position: 0.3,
    },
    {
      year: '2023',
      title: 'Human Behavior & Psychology',
      text: 'Understanding motivation, relationships and inner processes.',
      position: 0.53,
    },
    {
      year: '2026',
      title: 'Systems & Execution',
      text: 'Technical implementation with a focus on structure and sustainability.',
      position: 0.75,
    },
    {
    title: 'to be continued…',
    text: '',
    position: 0.96,
    isFuture: true,
  },
  ]

  useEffect(() => {
    const updateWidth = () => {
      if (lineRef.current) {
        setLineWidth(lineRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)

    const handleScroll = () => {
      if (!lineRef.current) return

      const rect = lineRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const start = windowHeight
      const end = windowHeight * 0.5

      const rawProgress = (start - rect.top) / (start - end)
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
  const lastPosition = Math.max(...events.map(e => e.position))
  const cappedProgress = Math.min(progress, lastPosition)

  return (
    <section className="hidden md:block max-w-[1200px] mx-auto px-6 py-20">
      <h2 className="text-2xl font-semibold text-gray-900 mb-24 text-center">
        Experience
      </h2>

      {/* EIN relativer Wrapper für alles */}
      <div className="relative w-full">
        
        {/*  Jahre oben  */}
        <div className="relative h-8 mb-6">
          {events.map(event => (
            <div
              key={`year-${event.year}`}
              className="absolute text-sm font-medium text-gray-900 -translate-x-1/2"
              style={{ left: `${event.position * 100}%` }}
            >
              {event.year}
            </div>
          ))}
        </div>

        {/*  LINE  */}
        <div
          ref={lineRef}
          className="relative h-1 bg-brand-yellow rounded-full"
        >
          {/* bewegender Punkt */}
          <div
            className="absolute top-1/2 w-5 h-5 bg-brand-pink rounded-full 
                      shadow-lg -translate-y-1/2 animate-pulse"
            style={{
              transform: `translateX(${cappedProgress * travelDistance}px)`,
            }}
          />

          {/* Ticks */}
          {events.map((event) => (
            <div
              key={`tick-${event.year}`}
              className="absolute top-1/2 -translate-y-1/2 w-[2px] h-6 bg-brand-yellow"
              style={{ left: `${event.position * 100}%` }}
            />
          ))}
        </div>

        {/* die Props */}
        <div className="relative mt-10 h-[160px] w-full">
          {events.map((event, index) => (
            <TimelineItem
              key={`${event.title}-${index}`}
              event={event}
              progress={progress}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default HorizontalTimeline
