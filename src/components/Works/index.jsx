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
  } = useFetch('http://localhost:3000/works.json')

  return (
    <section id="works" className="works">
      <div className="reveal-up">
        <h2 className="reveal-1">
          <Scramble text="Réalisations" />
        </h2>
      </div>

      {loading ? <Loader /> : ''}
      {error ? 'Oups, il y a eu une erreur' : ''}
      <div className="works-container">
        {loading
          ? ''
          : works.map((work, index) => (
              <Work
                key={`work-${work.id}`}
                loading={loading}
                work={work}
                index={index}
              />
            ))}
      </div>
    </section>
  )
}
