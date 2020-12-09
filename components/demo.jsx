import { useEffect } from 'react'
import regl from 'regl'

const setupRenderCanvas = (canvas) => {
  const { width, height } = canvas.getBoundingClientRect()
  canvas.width = width
  canvas.height = height
  const c = regl(canvas)
  console.log('setting regl for')

  const drawTriangle = c({
    frag: `
    precision mediump float;
    varying vec3 vColor;
    uniform vec4 color;
    void main() {
      gl_FragColor = vec4(vColor, 1);
    }`,

    vert: `
    precision mediump float;
    attribute vec2 position;
    attribute vec3 aColor;
    varying vec3 vColor;
    void main() {
      vColor = aColor;
      gl_Position = vec4(position, 0, 1);
    }`,

    // Here we define the vertex attributes for the above shader
    attributes: {
      // regl.buffer creates a new array buffer object
      position: c.buffer([
        [0, 1], // no need to flatten nested arrays, regl automatically
        [-1, -1], // unrolls them into a typedarray (default Float32)
        [1, -1],
      ]),
      aColor: c.buffer([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    },

    uniforms: {
      // This defines the color of the triangle to be a dynamic variable
      color: c.prop('color'),
    },

    // This tells regl the number of vertices to draw in this command
    count: 3,
  })

  // regl.frame() wraps requestAnimationFrame and also handles viewport changes
  c.frame(({ time }) => {
    // clear contents of the drawing buffer
    c.clear({
      color: [0, 0, 0, 0],
      depth: 1,
    })

    // draw a triangle using the command defined above
    drawTriangle({
      color: [Math.cos(time * 0.001), Math.sin(time * 0.0008), Math.cos(time * 0.003), 1],
    })
  })
}

const Demo = () => {
  useEffect(() => {
    setupRenderCanvas(document.getElementById('rendercanvas'))
  }, [])
  return <canvas className='rendercanvas' id='rendercanvas' />
}

export default Demo
