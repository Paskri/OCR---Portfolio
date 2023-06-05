import './style/footer.css'
import SocialLink from '../../components/SocialLink'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import inwhite from '../../assets/social-icons/linkedin-white.webp'
import inblack from '../../assets/social-icons/linkedin-black.webp'
import ayawhite from '../../assets/social-icons/aya-white.webp'
import ayablack from '../../assets/social-icons/aya-black.webp'

export default function Footer() {
  const gitImage = {
    default: gitblack,
    hover: gitwhite,
  }

  const linkedinImage = {
    default: inblack,
    hover: inwhite,
  }

  const ayaImage = {
    default: ayablack,
    hover: ayawhite,
  }
  return (
    <footer>
      <div className="column-1">
        <ul>
          <li>
            <a href="./#top">Accueil</a>
          </li>
          <li>
            <a href="./#about">À propos</a>
          </li>
          <li>
            <a href="./#skills">Compétences</a>
          </li>
          <li>
            <a href="./#works">Réalisations</a>
          </li>
          <li>
            <a href="./#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="column-2">
        <SocialLink link="https://github.com/Paskri" image={gitImage} />
        <SocialLink
          link="https://www.linkedin.com/in/pascal-krieg-153497136/"
          image={linkedinImage}
        />
        <SocialLink link="https://arthur-yann.fr/" image={ayaImage} />
      </div>
      <div className="column-3"></div>
      <div className="footer-bottom">Réalisé par Pascal Krieg en Juin 2023</div>
    </footer>
  )
}
