// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
// use npm run test:unit in the root 

import { shallowMount } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import Vue from 'vue'
import App from '@/App.vue'

describe('App', () => {
  
  it('button click Fill all fields', () => {
    const wrapper = mount(App)
    const button = wrapper.find('button')
    button.trigger('click')
    expect(wrapper.vm.message).toBe('Fill all fields')
  })

  // Inspect the raw component options
  it('has a created hook', () => {
    const wrapper = mount(App)
    expect(typeof App.created).toBe('function')
  })
  
  // the raw component options
  it('sets the correct default data', () => {
    const wrapper = mount(App)
    expect(typeof App.data).toBe('function')
    const defaultData = App.data()
    expect(defaultData.username).toBe('')
    expect(defaultData.comment).toBe('')
    expect(defaultData.message).toBe('')
  })
  //neuen Datensatz in die gesamte Liste ganz oben dynamisch hinzufügen
  it('neuen Datensatz in die gesamte Liste ganz oben dynamisch hinzufügen', () => {
    const wrapper = mount(App)
    wrapper.vm.username = 'tester'
    wrapper.vm.comment = 'test'
    wrapper.vm.addRecord()
    const wrapperArray = wrapper.findAll('.user')
    expect(wrapperArray).toContain('tester')

  })
  
  //Formular Felder danach leeren
  it('Formular Felder leeren', () => {
    const wrapper = mount(App)
    wrapper.vm.username = 'tester'
    wrapper.vm.comment = 'test'
    wrapper.vm.addRecord()
    expect(wrapper.vm.username).toBe('')
    expect(wrapper.vm.comment).toBe('')
  })

})
