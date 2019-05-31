import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SearchBar from '@/components/Searchbar.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const wrapper = shallowMount(SearchBar, {
  localVue,
  store
})

describe('SearchBar.vue', () => {
  it('Changes on spayload should call $store.commit "search"', () => {
    const mockSearchPayload = 'test'
    wrapper.vm.$store.commit = jest.fn()
    
    wrapper.setData({spayload: mockSearchPayload})

    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('search', mockSearchPayload)
  })
})
