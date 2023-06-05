import Scramble from '../Scramble'
import './services.css'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="reveal-up">
        <h2 className="reveal-1">
          <Scramble text="Services" />
        </h2>
      </div>

      <div className="services-container">
        <div className="reveal-right">
          <div className="service-container reveal-2">
            <div className="service-content">
              <div className="title green">
                <h3>Developpement Backend</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal-up">
          <div className="service-container reveal-3">
            <div className="service-content">
              <div className="title orange">
                <h3>Developpement Frontend</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="reveal-left">
          <div className="service-container reveal-4">
            <div className="service-content">
              <div className="title blue">
                <h3>Composition & arrangement</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
