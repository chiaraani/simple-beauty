import { describe, it, vi, beforeAll, expect } from 'vitest'
import { render } from '@testing-library/vue'

import router from '@/router/index'
vi.mock('@/composables/metaTags', () => ({
  useMetaTags: vi.fn(),
}))
import { useMetaTags } from '@/composables/metaTags'
vi.mock('@/docsIndex', () => ({
  default: [
    { title: 'Page1', path: 'path1' },
    { title: 'Page2', path: 'path2' },
  ],
}))
import docsIndex from '@/docsIndex'
import IndexView from '@/views/Index.vue'

describe('IndexView', () => {
  let wrapper
  beforeAll(
    () => (wrapper = render(IndexView, { global: { plugins: [router] } }))
  )

  it('display docs index', () => {
    docsIndex.forEach((page) => {
      wrapper.getByText(page.title, {
        selector: `[href="${
          router.resolve({
            name: 'page',
            params: { path: page.path },
          }).href
        }"]`,
      })
    })
  })

  it('fills meta description with docs index', () => {
    expect(useMetaTags).toHaveBeenCalledWith({
      description: '1. Page1 2. Page2',
    })
  })
})
