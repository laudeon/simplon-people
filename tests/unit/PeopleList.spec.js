import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import PeopleList from '@/components/PeopleList.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const $modal = {
  show: jest.fn(() => true),
}

const wrapper = shallowMount(PeopleList, {
  localVue,
  store,
  mocks: {
    $modal
  }
})

describe('PeopleList.vue', () => {
  it('Should have list and people_type props', () => {
    expect(wrapper.props().list).toEqual([])
    expect(wrapper.props().people_type).toEqual('People')
  })

  it('showModal should call $modal.show with the given email', () => {
    const mockEmail = 'test@test.test'
    wrapper.vm.showModal(mockEmail)
    
    expect(wrapper.vm.$modal.show).toHaveBeenCalledWith(mockEmail)
  })
})
