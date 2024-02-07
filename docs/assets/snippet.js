addSnippets()

function addSnippets() {
  for (let codeExample of document.getElementsByClassName('language-html')) {
    const example = document.createElement('iframe')

    // Building iframe source URL
    const url = new URL('../example.html', document.baseURI)
    url.searchParams.append('code', codeExample.textContent)
    example.src = url.href

    example.classList.add('example')

    codeExample.after(example)
  }
  iframeResizing()
}

function iframeResizing() {
  for (let example of document.getElementsByClassName('example')) {
    // Automatic resizing of iframes
    example.onload = () => {
      example.style.height =
        example.contentWindow.document.documentElement.offsetHeight + 5 + 'px'
    }
  }
}