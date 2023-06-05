import useMeasure from 'react-use-measure'
import { useSpring, animated } from 'react-spring'
import { useInView } from 'react-intersection-observer'
import './skillbar.css'

export default function Skillbar(props) {
  const { name, level, img, bgColor } = props
  const [refBack, { width: widthBack }] = useMeasure()
  const [refProgress, { width: widthProgress }] = useMeasure()
  const [ref, inView] = useInView({ threshold: 0.5 })

  const barSpring = useSpring({
    width: inView ? `${level}%` : '0%',
    from: { width: '0%' },
  })

  const svg = require(`../../assets/logos/${img}`)

  return (
    <div className="skill-container" ref={ref}>
      <div className="skill-logo">
        <img src={svg} alt={`${name} logo`} />
      </div>
      <div className="skill-name">{name}</div>
      <div ref={refBack} className="skill-bar-back">
        <animated.div
          ref={refProgress}
          className="skill-bar-progress"
          style={{ ...barSpring, backgroundColor: bgColor }}
        >
          <p>{Math.round((widthProgress / widthBack) * 100)}%</p>
        </animated.div>
      </div>
    </div>
  )
}
