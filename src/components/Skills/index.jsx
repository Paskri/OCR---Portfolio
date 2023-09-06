import useFetch from '../../hooks/useFetch'
import SkillBar from '../SkillBar'
import Scramble from '../Scramble'
import Loader from '../Loader'
import './skills.css'

export default function Skills() {
  const {
    data: skills,
    loading,
    error,
  } = useFetch('https://api.krieg.fr/api/skills')
  return (
    <section id="skills" className="skills reveal-up">
      <h2 className="reveal-1">
        <Scramble text="Mes compétences" />
      </h2>

      {loading ? (
        <Loader />
      ) : (
        <div className="skills-wrapper reveal-2">
          {skills.map((skill) => (
            <SkillBar
              key={`${skill.id}-${skill.name}`}
              name={skill.name}
              level={skill.level}
              img={skill.pureName}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      )}
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
