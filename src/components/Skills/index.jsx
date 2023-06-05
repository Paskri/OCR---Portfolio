import useFetch from '../../hooks/useFetch'
import SkillBar from '../SkillBar'
import Scramble from '../Scramble'
import './skills.css'

export default function Skills() {
  const {
    data: skills,
    loading,
    error,
  } = useFetch('http://localhost:3000/skills.json')
  return (
    <section id="skills" className="skills reveal-up">
      <h2 className="reveal-1">
        <Scramble text="Mes compétences" />
      </h2>
      <div className="skills-wrapper reveal-2">
        {loading
          ? 'Chargement...'
          : skills.map((skill) => (
              <SkillBar
                key={`${skill.id}-${skill.name}`}
                name={skill.name}
                level={skill.level}
                img={skill.img}
                bgColor={skill.bgColor}
              />
            ))}
        {error
          ? "Oups, une erreur s'est produite lors du chargement des données"
          : ''}
      </div>
    </section>
  )
}
