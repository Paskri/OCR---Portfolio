import React from 'react'
import PropTypes from 'prop-types'
import './social-link.css'

const SocialLink = (props) => {
  const { link, image, name } = props
  /// ajouter une propriété dark pour le footer et inverser les images/couleurs
  const [hoverImage, setHoverImage] = React.useState(false)
  const onMouseEnter = () => setHoverImage(true)
  const onMouseLeave = () => setHoverImage(false)

  const imageSrc = hoverImage ? image.hover : image.default

  return (
    <a
      href={link}
      className="social-link"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      target="about:blank"
    >
      <img src={imageSrc} alt={`${name} logo`} width="65" height="65" />
    </a>
  )
}

SocialLink.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.shape({
    default: PropTypes.string.isRequired,
    hover: PropTypes.string.isRequired,
  }).isRequired,
}

export default SocialLink
