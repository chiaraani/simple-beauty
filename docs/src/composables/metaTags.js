import { onMounted, onUpdated } from 'vue'

const titleBase = document.title

export function useMetaTags() {
  const reload = () => {
    const h1 = document.getElementsByTagName('h1')[0]
    const p = document.getElementsByTagName('p')[0]
    if (h1 && p) {
      document.title = h1.textContent + ' - ' + titleBase
      document.querySelector('meta[name=description]').content = p.textContent
    }
  }
  onMounted(reload)
  onUpdated(reload)
}
