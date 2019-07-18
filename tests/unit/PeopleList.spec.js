import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import PeopleList from '@/components/PeopleList.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(VModal)

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
})
