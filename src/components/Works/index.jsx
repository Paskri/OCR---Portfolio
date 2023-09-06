import useFetch from '../../hooks/useFetch'

import './works.css'
import Loader from '../Loader'
import Scramble from '../Scramble'
import Work from '../Work'

export default function Works() {
  const {
    data: works,
    loading,
    error,
  } = useFetch('https://api.krieg.fr/api/works')
  const reversedWorks = loading ? null : works.slice().reverse()
  return (
    <section id="works" className="works">
      <div className="reveal-up">
        <h2 className="reveal-1">
          <Scramble text="Réalisations" />
        </h2>
      </div>

      {loading ? <Loader /> : ''}
      <div className="works-container">
        {loading
          ? ''
          : reversedWorks.map((work, index) => (
              <Work
                key={`work-${work.id}`}
                loading={loading}
                work={work}
                index={index}
              />
            ))}
      </div>
      {error ? (
        <div className="error-container">
          Oups, une erreur s'est produite lors du chargement des données
        </div>
      ) : (
        ''
      )}
    </section>
  )
}
