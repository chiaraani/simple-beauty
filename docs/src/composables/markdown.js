import { ref, watch } from 'vue'
import { marked } from 'marked'

export function useMarkdownFile(path) {
  const raw = ref()
  const processed = useMarkdown(raw)

  fetch(`${path}.md`)
    .then((response) => response.text())
    .then((text) => (raw.value = text))

  return processed
}

function useMarkdown(raw) {
  const processed = ref()
  watch(raw, () => {
    new Promise((resolve) => {
      resolve(marked(raw.value, { mangle: false, headerIds: false }))
    })
      .then((transpiled) => addSnippets(transpiled))
      .then((withSnippets) => (processed.value = withSnippets))
      .then(() => iframeResizing())
  })

  return processed
}

function addSnippets(page) {
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

function iframeResizing() {
  for (let example of document.getElementsByClassName('example')) {
    // Automatic resizing of iframes
    example.onload = () => {
      example.style.height =
        example.contentWindow.document.documentElement.offsetHeight + 10 + 'px'
    }
  }
}
