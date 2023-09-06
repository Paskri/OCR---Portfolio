import React, { useState, useEffect, useRef } from 'react'
import ReactModal from 'react-modal'

//import RainFx from '../RainFx'
//import Typewriter from '../Typewriter'
import Mobile from '../Mobile'
import Desktop from '../Desktop'
import Tags from '../Tags'
import SocialLink from '../SocialLink'

import './work.css'
import gitwhite from '../../assets/social-icons/git-white.webp'
import gitblack from '../../assets/social-icons/git-black.webp'
import rain from '../../assets/rain.webp'
//react-modal custom style
const customStyle = {
  overlay: {
    width: '100vw',
    maxWidth: '1440px',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    overflow: 'auto',
    padding: '0',
    zIndex: 200,
    margin: '0 auto',
  },
  content: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    border: 'none',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
  },
}
ReactModal.setAppElement('#root')

export default function Work(props) {
  const { work, index, loading } = props
  const [isOpen, setIsOpen] = useState(false)
  const gitImage = {
    default: gitwhite,
    hover: gitblack,
  }
  const [animate, setAnimate] = useState('')
  const [reveal, setReveal] = useState('')
  const divAnimate = useRef(null)
  const [loaded, setLoaded] = useState(false)

  //toggle background filter
  function handleMouseEnter(event) {
    const twContainer = event.currentTarget
    twContainer.classList.add('show-tw')
    const rainContainer = twContainer.previousElementSibling
    rainContainer.classList.add('show-rain')
  }

  function handleMouseLeave(event) {
    const twContainer = event.currentTarget
    twContainer.classList.remove('show-tw')
    const rainContainer = twContainer.previousElementSibling
    rainContainer.classList.remove('show-rain')
  }

  //toggle header visibility
  useEffect(() => {
    if (isOpen) {
      document.querySelector('header').classList.add('hidden')
    } else {
      document.querySelector('header').classList.remove('hidden')
    }
  }, [isOpen])

  //manage mobile display
  let middleClass = ''
  if (!work.mobile[0]) {
    middleClass = ' center'
  }

  function toggleModal(e) {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }
  // manage animations
  useEffect(() => {
    if (index === 0 || index === 3 || index === 6) {
      setAnimate('reveal-right')
      setReveal('reveal-1')
    } else if (index === 1 || index === 4 || index === 7) {
      setAnimate('reveal-up')
      setReveal('reveal-2')
    } else if (index === 2 || index === 5 || index === 8) {
      setAnimate('reveal-left')
      setReveal('reveal-3')
    }
    setLoaded(true)
  }, [animate, reveal, setAnimate, setReveal, index])

  useEffect(() => {
    if (loaded) {
      const ratio = 0.1
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio,
      }
      const handleIntersect = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            divAnimate.current.classList.add('reveal-loaded')
            divAnimate.current.classList.remove(
              'reveal-up',
              'reveal-left',
              'reveal-right'
            )
            observer.unobserve(entry.target)
          }
        })
      }

      const observer = new IntersectionObserver(handleIntersect, options)
      observer.observe(divAnimate.current)

      return () => {
        observer.disconnect()
      }
    }
  }, [divAnimate, loaded])
  //canvasWidth={420} canvasHeight={278}
  // just after tags <RainFx />
  // knowmore <Typewriter fullText="En savoir plus ->" />
  return (
    <>
      {loading ? (
        ''
      ) : (
        <div className={animate} ref={divAnimate}>
          <div className={`work-container ${reveal}`}>
            <div className="work-background">
              <img
                src={`../img/${work.background}.webp`}
                alt={`${work.title} background`}
              />
            </div>
            <div className="logo-container">
              <img
                className="work-logo"
                src={`../img/${work.logo}.webp`}
                alt={`${work.title} logo`}
                width={work.logoSize[0]}
                height={work.logoSize[1]}
              />
              <div className="tags">{work.tags}</div>
            </div>
            <div className="rain-container">
              <img src={rain} alt="rain" width="420" height="278" />
            </div>
            <div
              onClick={toggleModal}
              className="typewriter-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <p className="typewriter">En savoir plus ...</p>
            </div>
            <ReactModal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              style={customStyle}
              contentLabel={`${work.title} modal`}
            >
              <div className="modal-top">
                <a href="#works">
                  <img
                    className="close"
                    src={require(`../../assets/close.svg`).default}
                    onClick={toggleModal}
                    alt="close cross"
                  />
                </a>
              </div>
              <div className="modal-middle">
                <div className="modal-logo-title">
                  <img
                    className="work-logo"
                    src={`../img/${work.logo}.webp`}
                    alt={`${work.title} logo`}
                  />
                </div>
                <div className="modal-middle-container">
                  <div className="modal-middle-left">
                    <h3>La mission :</h3>
                    {work.projectTitle}
                    <h3>Compétences acquises :</h3>
                    <ul>
                      {work.skills.map((skill, index) => (
                        <li key={`skill-${index}`}>{skill}</li>
                      ))}
                    </ul>
                    <h3>Commentaires : </h3>
                    {work.comments.map((comment, index) => (
                      <p key={`comment-${index}`}>{comment}</p>
                    ))}
                    <Tags tags={work.keywords} />
                  </div>

                  <div className="modal-middle-right">
                    {work.code ? (
                      <div className="git-container">
                        <p>Consulter le code :</p>
                        <SocialLink link={work.code} image={gitImage} />
                      </div>
                    ) : (
                      ''
                    )}

                    {work.demo ? (
                      <div className="demo-container">
                        <p>Démo du site :</p>
                        <a
                          className="demo-link"
                          href={work.demo}
                          target="about:blank"
                        >
                          Demo
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
              </div>
              <div className={`modal-bottom${middleClass}`}>
                <Mobile datas={work.mobile} title={work.title} />
                <Desktop datas={work.desktop} title={work.title} />
              </div>
            </ReactModal>
          </div>
        </div>
      )}
    </>
  )
}
