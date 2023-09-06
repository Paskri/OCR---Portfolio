import React from 'react'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import inwhite from '../../assets/social-icons/linkedin-white.webp'
import inblack from '../../assets/social-icons/linkedin-black.webp'
//import ayawhite from '../../assets/social-icons/aya-white.webp'
//import ayablack from '../../assets/social-icons/aya-black.webp'
import indeedwhite from '../../assets/social-icons/indeed-white.webp'
import indeedblack from '../../assets/social-icons/indeed-black.webp'
import './about.css'
import moi from '../../assets/moi.webp'
import Scramble from '../Scramble'
import SocialLink from '../SocialLink'

export default function About() {
  const gitImage = {
    default: gitwhite,
    hover: gitblack,
  }

  const linkedinImage = {
    default: inwhite,
    hover: inblack,
  }
  const indeedImage = {
    default: indeedwhite,
    hover: indeedblack,
  }

  /*const ayaImage = {
    default: ayawhite,
    hover: ayablack,
  }*/
  return (
    <>
      <section id="about" className="about">
        <div className="about-left reveal-up">
          <h2 className="reveal-1">
            <Scramble text="À propos" />
          </h2>
          <p className="reveal-2">
            Après 15 ans de professora dans l'éducation nationale et dix ans en
            tant que compositeur/arrangeur d'illustrations musicales pour
            l'audiovisuel, j'ai pris la décision de me former au métier de
            developpeur web.
          </p>
          <p className="reveal-2">
            Ayant toujours aimé créer des sites internet à la fois pour mettre
            en valeur et diffuser mes créations, j'ai peu a peu appris
            différentes technologies en autodidacte en fonction de mes besoins.
          </p>
          <p className="reveal-2">
            Aujourd'hui, fort de mes expériences multiples et de ma
            certification acquise chez OpenClassRooms, je vous propose de
            composer pour vous votre solution web qui alliera la rigueur et la
            précision du code à la subtilité d'une création artistique.
          </p>
          <div className="about-footer reveal-3">
            <SocialLink
              link="https://github.com/Paskri"
              image={gitImage}
              name="Github"
            />
            <SocialLink
              link="https://www.linkedin.com/in/pascal-krieg-153497136/"
              image={linkedinImage}
              name="LinkedIn"
            />
            <SocialLink
              link="https://profile.indeed.com/p/pascalk-71xs2nk"
              image={indeedImage}
              name="Indeed"
            />
          </div>
        </div>
        <div className="about-right reveal-left">
          <img
            className="reveal-6"
            src={moi}
            width="331px"
            height="375px"
            alt="Pascal Krieg posing"
          />
        </div>
      </section>
    </>
  )
}
