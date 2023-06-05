import React, { useEffect, useState } from 'react'
import './style/header.css'
import logo from './img/logo-pk.webp'

export default function Header() {
  const [activeLink, setActiveLink] = useState('')
  const [position, setPosition] = useState(0)

  //processing nav a effects
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id')

        if (entry.isIntersecting) {
          setActiveLink(id)
        } else if (activeLink === id) {
          setActiveLink('')
        }
      })
    }
    const observerOptions = {
      rootMargin: '-50% 0% -50% 0%',
    }
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [activeLink, position, setPosition])

  // processing nav click
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    let headerHeight = 0
    console.log(window.innerWidth)
    if (window.innerWidth <= 435) {
      headerHeight = 100
    } else if (window.innerWidth <= 850) {
      headerHeight = 65
    } else {
      headerHeight = 80
    }
    const offset = targetElement.offsetTop - headerHeight

    window.scrollTo({
      top: offset,
      behavior: 'smooth',
    })
  }
  //processing animation effects
  useEffect(() => {
    const ratio = 0.1
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: ratio,
    }

    const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
          entry.target.classList.remove(
            'reveal-up',
            'reveal-left',
            'reveal-right'
          )
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, options)
    document
      .querySelectorAll('.reveal-up, .reveal-left, .reveal-right')
      .forEach(function (node) {
        node.classList.add('reveal-loaded')
        observer.observe(node)
      })

    // Clean up the observer
    return () => {
      observer.disconnect()
    }
  }, [])
  /* à mettre en place plus tard
        <li>
            <a
              className={`nav-link ${
                activeLink === 'services' ? 'active' : ''
              }`}
              href="#services"
              onClick={(event) => handleNavLinkClick(event, 'services')}
            >
              Services
            </a>
          </li>*/
  return (
    <header>
      <a className="logo reveal-right" href="/">
        <img className="reveal-1" src={logo} alt="logo Pascal Krieg" />
      </a>
      <nav className="reveal-left">
        <ul className="reveal-2">
          <li>
            <a
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
              href="#about"
              onClick={(event) => handleNavLinkClick(event, 'about')}
            >
              À propos
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
              href="#skills"
              onClick={(event) => handleNavLinkClick(event, 'skills')}
            >
              Compétences
            </a>
          </li>

          <li>
            <a
              className={`nav-link ${activeLink === 'works' ? 'active' : ''}`}
              href="#works"
              onClick={(event) => handleNavLinkClick(event, 'works')}
            >
              Réalisations
            </a>
          </li>
          <li>
            <a
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
              href="#contact"
              onClick={(event) => handleNavLinkClick(event, 'contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
