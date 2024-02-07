addSnippets()

function addSnippets() {
  for (let codeExample of document.getElementsByClassName('language-html')) {
    const example = document.createElement('div')
    example.classList.add('example')

    // Building source URL
    const url = new URL('../example.html', document.baseURI)
    url.searchParams.append('code', codeExample.textContent)
    
    const link = document.createElement('a')
    link.textContent = 'Open example in a new tab ⇱'
    link.target = "_blank"
    link.href = url
    example.append(link)

    const iframe = document.createElement('iframe')
    iframe.src = url.href
    example.append(iframe)
    
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