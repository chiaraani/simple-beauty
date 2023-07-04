import 'highlight.js/styles/nnfx-light.css'
import hljs from 'highlight.js/lib/core'

import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', xml)

import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('css', css)

import scss from 'highlight.js/lib/languages/scss'
hljs.registerLanguage('scss', scss)

export default hljs
