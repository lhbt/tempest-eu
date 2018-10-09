const FontFaceObserver = require('fontfaceobserver')

const FontObserver = () => {
  const font = new FontFaceObserver('Saira')

  font.load().then(() => {
    document.documentElement.classList.add('saira-loaded')
  })
}

export default FontObserver
