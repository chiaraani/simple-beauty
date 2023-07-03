import { ref } from 'vue'
import { marked } from 'marked'

export function useMarkdownFile(path) {
  const result = ref('Loading...')

  fetch(`${path}.md`)
    .then((response) => response.text())
    .then((text) => marked(text))
    .then((transpiled) => addSnippets(transpiled))
    .then((withSnippets) => (result.value = withSnippets))

  return result
}

export function addSnippets(page) {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = page

  for (let codeExample of wrapper.querySelectorAll('pre:has(.language-HTML)')) {
    const example = `<div class="example">${codeExample.textContent}</div>`
    codeExample.insertAdjacentHTML('afterend', example)
    console.log(wrapper)
  }

  return wrapper.innerHTML
}
