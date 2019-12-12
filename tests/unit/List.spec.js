import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import List from '@/components/List.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(VModal)

const $modal = {
  show: jest.fn(() => true),
}

const wrapper = shallowMount(List, {
  localVue,
  store,
  mocks: {
    $modal
  }
})

describe('List.vue', () => {
  it('Should have list and people_type props', () => {
    expect(wrapper.vm.coworkers).toEqual([])
    expect(wrapper.vm.trainers).toEqual([])
    expect(wrapper.vm.peopleType).toEqual('Formateur⋅rice⋅s')
  })
})
