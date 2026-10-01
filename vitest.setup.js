import '@testing-library/jest-dom'

class MockIntersectionObserver {
  constructor(cb) {
    this.cb = cb
  }
  observe(el) {
    // Simulate the element being immediately in view, like a real
    // IntersectionObserver does on initial layout.
    this.cb([{ isIntersecting: true, target: el }])
  }
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = MockIntersectionObserver

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
}

// jsdom has no real <canvas> 2D rendering engine; stub just enough of the
// CanvasRenderingContext2D surface so canvas-driven decorative animations
// (e.g. BubbleCanvasBackground) don't throw in tests, mirroring what a real
// browser actually provides.
HTMLCanvasElement.prototype.getContext = () => ({
  save: () => {},
  restore: () => {},
  clearRect: () => {},
  fillRect: () => {},
  beginPath: () => {},
  arc: () => {},
  fill: () => {},
  createRadialGradient: () => ({ addColorStop: () => {} }),
  createLinearGradient: () => ({ addColorStop: () => {} }),
  set globalAlpha(v) {},
  set fillStyle(v) {},
  set strokeStyle(v) {},
})

window.HTMLMediaElement.prototype.play = () => Promise.resolve()
window.HTMLMediaElement.prototype.pause = () => {}
window.scrollTo = () => {}
Element.prototype.scrollIntoView = () => {}

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
    }
  }
