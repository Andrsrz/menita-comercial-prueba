import { shallowMount } from '@vue/test-utils'
import Posts from '@/views/Posts.vue'
import Post from '@/components/Post.vue'

const wrapper = shallowMount(Posts)

describe('Posts.vue', () => {
  it('renders an input filed', () => {
    expect(wrapper.get('input')).toBeTruthy()
  })

  it('render a Post component', () => {
	expect(wrapper.findComponent(Post)).toBeTruthy()
  })
})
