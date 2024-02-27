function addSnippets() {
  for (let codeExample of document.getElementsByClassName('language-html')) {
    const example = document.createElement('div')
    example.classList.add('example')

    // Building source URL
    const url = buildExampleURL(codeExample.textContent)
    
    const link = document.createElement('a')
    link.textContent = 'Open example in a new tab ⇱'
    link.target = "_blank"
    link.href = url
    example.append(link)

    const iframe = document.createElement('iframe')
    iframe.src = url
    iframe.onload = () => {
      iframe.style.height =
        iframe.contentWindow.document.documentElement.offsetHeight + 20 + 'px'
    }
    example.append(iframe)
    
    codeExample.after(example)
  }
}

function buildExampleURL(code) {
  const url = new URL('/example.html', document.baseURI)
  url.searchParams.append('code', code)
  return url
}

window.addEventListener('load', addSnippets)