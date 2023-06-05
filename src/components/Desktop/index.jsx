import { useState, useEffect, useRef } from 'react'
import './desktop.css'

export default function Mobile(props) {
  const { datas, title } = props
  const [index, setIndex] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!frameRef.current) return
    frameRef.current.scrollTop = 0
  }, [index])

  function handleForward(e) {
    if (index + 2 > datas.length) {
      setIndex(0)
    } else {
      setIndex((i) => i + 1)
    }
  }
  function handleBack(e) {
    if (index === 0) {
      setIndex(datas.length - 1)
    } else {
      setIndex((i) => i - 1)
    }
  }

  return (
    <>
      {!datas[0] ? (
        ''
      ) : (
        <div className="desktop">
          <div className="desktop-frame">
            <div className="desktop-screen" ref={frameRef}>
              <img
                className="work-desktop"
                src={`../img/${datas[index].img}.webp`}
                alt={`${title} desktop ${index} screenshot`}
              />
            </div>
            <div className="desktop-keyboard"></div>
          </div>
          {datas.length <= 1 ? (
            ''
          ) : (
            <div className="desktop-nav">
              <button className="nav-back" onClick={handleBack}>
                {' < '}
              </button>
              <div className="screenshot-title">{datas[index].title}</div>
              <button className="nav-forward" onClick={handleForward}>
                {' > '}
              </button>
            </div>
          )}
        </div>
      )}
    </>
  )
}
