import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import SideBar from '@/components/Sidebar.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const wrapper = shallowMount(SideBar, {
  localVue,
  store
})

describe('SideBar.vue', () => {
  it('switchList method should call $store.commit with the given list name', () => {
    const listName = 'trainers'
    wrapper.vm.$store.commit = jest.fn()
    
    wrapper.vm.switchList(listName)

    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('switchList', listName)
  })

  it('toggleDistricts method should call toggleActive and commit "toggleDistrict"', () => {
    const event = {
      target: {
        innerHTML: 'Test'
      }
    }
    wrapper.vm.$store.commit = jest.fn()
    wrapper.vm.toggleActive = jest.fn()
    
    wrapper.vm.toggleDistricts(event)

    expect(wrapper.vm.toggleActive).toHaveBeenCalledWith(event.target)
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('toggleDistricts', 'Test')
  })
})
