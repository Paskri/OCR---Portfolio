import { useState, useEffect, useMemo } from 'react'
import useMeasure from 'react-use-measure'
//import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import './skillbar.css'

export default function Skillbar(props) {
  const { name, level, img, bgColor } = props
  const [refBack, { width: widthBack }] = useMeasure()
  const [refProgress, { width: widthProgress }] = useMeasure()
  const [ref, inView] = useInView({ threshold: 0.5 })
  const [animationRan, setAnimationRan] = useState(false)
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    if (!animationRan) {
      setBarWidth(inView ? `${level}` : '')
    }
  }, [animationRan, inView, level])

  const handleAnimationEnd = () => {
    setAnimationRan(true)
  }
  const svg = useMemo(() => require(`../../assets/logos/${img}`), [img])

  return (
    <div className="skill-container" ref={ref}>
      <div className="skill-logo">
        <img src={svg} alt={`${name} logo`} />
      </div>
      <div className="skill-name">{name}</div>
      <div ref={refBack} className="skill-bar-back">
        <div
          ref={refProgress}
          className="skill-bar-progress"
          style={{ width: `${barWidth}%`, backgroundColor: bgColor }}
          onAnimationEnd={handleAnimationEnd}
        ></div>
      </div>
      <p className="percent">
        {Math.round((widthProgress / widthBack) * 100)}%
      </p>
    </div>
  )
}
