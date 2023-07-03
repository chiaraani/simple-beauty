import { ref } from 'vue'
import { marked } from 'marked'

export function useMarkdownFile(path) {
  const result = ref('Loading...')

  fetch(`${path}.md`)
    .then((response) => response.text())
    .then((text) => marked(text))
    .then((transpiled) => addSnippets(transpiled))
    .then((withSnippets) => (result.value = withSnippets))
    .then(() => iframeResizing())

  return result
}

export function addSnippets(page) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = page

  for (let codeExample of wrapper.getElementsByClassName('language-HTML')) {
    const example = document.createElement('iframe')

    // Building iframe source URL
    const url = new URL('../example.html', document.baseURI)
    url.searchParams.append('code', codeExample.textContent)
    example.src = url.href

    example.classList.add('example')

    codeExample.parentNode.after(example)
  }

  return wrapper.innerHTML
}

export function iframeResizing() {
  for (let example of document.getElementsByClassName('example')) {
    // Automatic resizing of iframes
    example.onload = () => {
      example.style.height =
        example.contentWindow.document.documentElement.offsetHeight + 10 + 'px'
    }
  }
}
