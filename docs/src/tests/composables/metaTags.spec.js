import { describe, it, expect, beforeAll } from 'vitest'
import { render } from '@testing-library/vue'

document.head.innerHTML =
  '<title>Base</title><meta name="description" content="Bla" />'
import { useMetaTags } from '@/composables/metaTags'

describe('useMetaTags', () => {
  const wrapperComponent = {
    template: '<h1>Title</h1><p>Decription.</p>',
    setup: () => useMetaTags(),
  }
  const wrapperComponent2 = {
    template: '<h1>Title2</h1><p>Decription.</p>',
    setup: () => useMetaTags(),
  }

  let wrapper
  beforeAll(() => (wrapper = render(wrapperComponent)))

  it('sets meta title from first h1', () => {
    expect(document.title).toEqual('Title - Base')
  })

  it('sets meta description from first p', () => {
    expect(document.querySelector('meta[name=description]').content).toEqual(
      'Decription.'
    )
  })

  it('switches meta title when other component calls it', async () => {
    wrapper.unmount()
    render(wrapperComponent2)
    expect(document.title).toEqual('Title2 - Base')
  })
})
