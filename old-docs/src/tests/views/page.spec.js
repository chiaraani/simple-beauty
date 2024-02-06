import { describe, it, vi, beforeAll, expect } from 'vitest'
import { render } from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'

vi.mock('@/composables/metaTags', () => ({
  useMetaTags: vi.fn(),
}))
import { useMetaTags } from '@/composables/metaTags'
global.fetch = vi.fn(async () => ({ text: () => '**markdown**' }))

import router from '@/router/index.js'
import PageView from '@/views/Page.vue'

describe('PageView', () => {
  let wrapper
  beforeAll(async () => {
    router.push({ name: 'page', params: { path: 'README' } })
    await nextTick()
    wrapper = render(PageView, { global: { plugins: [router] } })
    await flushPromises()
  })

  it('renders correct markdown page', () => {
    wrapper.getByText('markdown', { tagName: 'strong' })
  })

  it('calls useMetaTags', () => {
    expect(useMetaTags).toHaveBeenCalled()
  })
})
