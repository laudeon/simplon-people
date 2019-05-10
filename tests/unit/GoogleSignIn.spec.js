import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GoogleSignIn from '@/components/GoogleSignIn.vue'
import store from '../../src/store'

const localVue = createLocalVue()
localVue.use(Vuex)

const $gapi = {
  signIn: jest.fn(() => Promise.resolve()),
  isSignedIn: jest.fn(() => Promise.resolve(false)),
  signOut: jest.fn(() => Promise.resolve())
}

describe('GoogleSignIn.vue', () => {
  it('SignIn should call gapi signIn method', () => {
    const wrapper = shallowMount(GoogleSignIn, {
      localVue,
      store,
      mocks: {
        $gapi
      }
    })

    wrapper.vm.signIn()
    expect(wrapper.vm.$gapi.signIn).toHaveBeenCalled()
  })
  it('SignOut should call gapi signOut method', () => {
    const wrapper = shallowMount(GoogleSignIn, {
      localVue,
      store,
      mocks: {
        $gapi
      }
    })

    wrapper.vm.signOut()
    expect(wrapper.vm.$gapi.signOut).toHaveBeenCalled()
  })
})
