import Typewriter from '../Typewriter'
import RainFx from '../RainFx'
import './banner.css'
// ds rainFx canvasWidth={1440} canvasHeight={400}
export default function Banner() {
  return (
    <div className="banner-container">
      <RainFx />
      <div className="typewriter-container">
        <Typewriter fullText="Pascal Krieg, Developpeur web" isTitle={true} />
      </div>
    </div>
  )
}
