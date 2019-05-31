import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import GoogleSignIn from '@/components/GoogleSignIn.vue'
import store from '../../src/store'

GoogleSignIn.created = jest.fn()

const localVue = createLocalVue()
localVue.use(Vuex)

const MockCallbackOnCreated = jest.fn()

const $gapi = {
  signIn: jest.fn(() => Promise.resolve(true)),
  isSignedIn: jest.fn(() => Promise.resolve(false)),
  signOut: jest.fn(() => Promise.resolve(true))
}

const wrapper = shallowMount(GoogleSignIn, {
  localVue,
  store,
  propsData: {
    callback: MockCallbackOnCreated,
    status: false
  },
  mocks: {
    $gapi
  }
})

describe('GoogleSignIn.vue', () => {
  afterEach(() => {
    MockCallbackOnCreated.mockClear()
  })

  it('Should have a created hook', () => {
    expect(typeof GoogleSignIn.created).toBe('function')
    expect(GoogleSignIn.created).toHaveBeenCalled()
  })

  it('SignIn should call gapi signIn method and the callback passed in props', () => {
    return wrapper.vm.signIn().then(() => {
      expect(wrapper.vm.$gapi.signIn).toHaveBeenCalled()
      expect(MockCallbackOnCreated).toHaveBeenCalledWith(true)
    })
  })

  it('SignOut should call gapi signOut method and the callback passed in props', () => {
    return wrapper.vm.signOut().then(() => {
      expect(wrapper.vm.$gapi.signOut).toHaveBeenCalled()
      expect(MockCallbackOnCreated).toHaveBeenCalledWith(false)
    })
  })
})
