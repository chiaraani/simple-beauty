import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/vue'
import { flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'

global.fetch = vi.fn(async () => ({ text: () => '**markdown**' }))

import router from '@/router/index.js'
import PageView from '@/views/Page.vue'

describe('PageView', () => {
  it('renders correct markdown page', async () => {
    router.push({ name: 'page', params: { path: 'README' } })
    await nextTick()
    const wrapper = render(PageView, { global: { plugins: [router] } })
    await flushPromises()
    wrapper.getByText('markdown', { tagName: 'strong' })
  })
})
