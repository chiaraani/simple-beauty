import { onMounted, onUpdated } from 'vue'

let titleBase

export function useMetaTags(options = {}) {
  titleBase ||= document.title

  const reload = () => {
    if (!options.title) {
      const h1 = document.getElementsByTagName('h1')[0]
      options.title = h1.textContent
    }

    if (!options.description) {
      const p = document.getElementsByTagName('p')[0]
      options.description = p.textContent
    }

    if (options.title) document.title = options.title + ' - ' + titleBase
    if (options.description)
      document.querySelector('meta[name=description]').content =
        options.description
  }
  onMounted(reload)
  onUpdated(reload)
}
