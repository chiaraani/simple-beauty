import { describe, it, expect, vi } from 'vitest'
import { flushPromises } from '@vue/test-utils'
import { render } from '@testing-library/vue'

vi.mock('@/config/marked', () => {
  return {
    marked: vi.fn(
      () =>
        '<pre><code class="language-HTML">&lt;i&gt;Italic&lt;/i&gt;</code></pre>'
    ),
  }
})
import { marked } from '@/config/marked'

vi.mock('@/config/hljs', () => ({ default: { highlightAll: vi.fn() } }))
import hljs from '@/config/hljs'

global.fetch = vi.fn(async () => ({ text: () => 'markdown' }))
import { useMarkdownFile } from '@/composables/markdown.js'

describe('useMarkdownFile', () => {
  it('fetches markdown file', () => {
    useMarkdownFile('README')
    expect(fetch).toHaveBeenCalledWith('README.md')
  })
  it('transpiles markdown', async () => {
    useMarkdownFile('README')
    await flushPromises()
    expect(marked).toHaveBeenCalledWith('markdown')
  })

  const wrapperComponent = {
    setup: () => ({ result: useMarkdownFile('README') }),
    template: '<div v-html="result || \'\' "></div>',
  }

  it('adds snippets to html examples', async () => {
    render(wrapperComponent)
    await flushPromises()
    expect(document.body.innerHTML).toContain(
      '<iframe src="http://localhost:3000/example.html?code=%3Ci%3EItalic%3C%2Fi%3E" class="example"></iframe>'
    )
  })

  it('highlights pre code', () => {
    expect(hljs.highlightAll).toHaveBeenCalled()
  })
})
