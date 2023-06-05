import React, { useEffect, useRef, useState } from 'react'
import './rainfx.css'

export default function RainFx(props) {
  const canvasRef = useRef(null)
  const canvas2Ref = useRef(null)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)
  const [canvas2Width, setCanvas2Width] = useState(0)
  const [canvas2Height, setCanvas2Height] = useState(0)

  //handling canvas resizing
  useEffect(() => {
    const element = canvasRef.current
    if (!element) return
    const observer = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setCanvasWidth(width)
      setCanvasHeight(height)
    })
    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  })
  //handling canvas2 resizing
  useEffect(() => {
    const element = canvas2Ref.current
    if (!element) return
    const observer2 = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect
      setCanvas2Width(width)
      setCanvas2Height(height)
    })
    observer2.observe(element)

    return () => {
      observer2.disconnect()
    }
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    console.log(canvas)
    canvas.width = canvasWidth || 0 //props.canvasWidth
    canvas.height = canvasHeight || 0 //props.canvasHeight

    const canvas2 = canvas2Ref.current
    const ctx2 = canvas2.getContext('2d')
    console.log(canvas2)
    canvas2.width = canvas2Width || 0 //props.canvasWidth
    canvas2.height = canvas2Height || 0 //props.canvasHeight

    class Symbol {
      constructor(x, y, fontSize, canvasHeight) {
        this.characters =
          'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        this.x = x
        this.y = y
        this.fontSize = fontSize
        this.text = 'A'
        this.canvasHeight = canvasHeight
      }
      draw(context, context2) {
        this.text = this.characters.charAt(
          Math.floor(Math.random() * this.characters.length)
        )
        context.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        )
        context2.fillText(
          this.text,
          this.x * this.fontSize,
          this.y * this.fontSize
        )
        if (
          this.y * this.fontSize > this.canvasHeight &&
          Math.random() > 0.97
        ) {
          this.y = 0
        } else {
          this.y += 0.9
        }
      }
    }

    class Effect {
      constructor(canvasWidth, canvasHeight) {
        this.fontSize = 16
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.columns = this.canvasWidth / this.fontSize + 1
        this.symbols = []
        this.initialize()
      }
      initialize() {
        for (let i = 0; i < this.columns; i++) {
          this.symbols[i] = new Symbol(
            i,
            this.canvasHeight / Math.random(),
            this.fontSize,
            this.canvasHeight
          )
        }
      }
      resize(width, height) {
        this.canvasWidth = canvasWidth
        this.canvasHeight = canvasHeight
        this.columns = this.canvasWidth / this.fontSize + 1
        this.symbols = []
        this.initialize()
      }
    }

    const effect = new Effect(canvasWidth, canvasHeight)
    let lastTime = 0
    const fps = 50
    const nextFrame = 1000 / fps
    let timer = 0

    function animate(timeStamp) {
      const deltaTime = timeStamp - lastTime
      lastTime = timeStamp
      if (timer > nextFrame) {
        ctx.textAlign = 'end'
        ctx.fillStyle = 'rgba(0, 0, 0, 0.07)'
        ctx.fillRect(0, 0, canvasWidth, canvasHeight)
        ctx.font = effect.fontSize + 'px monospace'
        ctx.fillStyle = '#034BEE' //#03A062
        ctx.fillStyle = '#175DFC' //#0aff0a

        ctx2.textAlign = 'end'
        ctx2.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx2.font = effect.fontSize + 'px monospace'
        ctx2.fillStyle = '#00C3FF' //white

        effect.symbols.forEach((symbol) => symbol.draw(ctx, ctx2))
        timer = 0
      } else {
        timer += deltaTime
      }
      requestAnimationFrame(animate)
    }
    animate(0)
  }, [
    canvasRef,
    canvas2Ref,
    canvasHeight,
    canvasWidth,
    canvas2Height,
    canvas2Width,
  ])
  return (
    <div className="rain-container">
      <canvas className="canvas" ref={canvasRef}></canvas>
      <canvas className="canvas" ref={canvas2Ref}></canvas>
    </div>
  )
}
