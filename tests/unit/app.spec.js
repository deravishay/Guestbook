// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
// use npm run test:unit in the root 

import { mount } from '@vue/test-utils'
import axios from 'axios';
import App from '@/App.vue'

describe('App', () => {
  
  //unit testing 
  it('button click Fill all fields', () => {
    const wrapper = mount(App)
    const button = wrapper.findAll('input').at(1)
    button.trigger('click')
    expect(wrapper.vm.message).toBe('Fill all fields')
  })

  // Inspect the raw component options
  it('has a created hook', () => {
    const wrapper = mount(App)
    expect(typeof App.created).toBe('function')
  })
    //Formular Felder danach leeren
    it('Formular Felder leeren', () => {
      const wrapper = mount(App)
      wrapper.vm.username = 'tester'
      wrapper.vm.comment = 'test'
      const button = wrapper.findAll('input').at(1)
      button.trigger('click')
      expect(wrapper.vm.username).toBe('')
      expect(wrapper.vm.comment).toBe('')
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
  
  //integration test

  //neuen Datensatz in die gesamte Liste ganz oben dynamisch hinzufügen
  it('neuen Datensatz in die gesamte Liste ganz oben dynamisch hinzufügen', () => {
    const wrapper = mount(App)
    wrapper.vm.username = 'tester'
    wrapper.vm.comment = 'test'
    const button = wrapper.findAll('input').at(1)
    button.trigger('click')
    const wrapperArray = wrapper.findAll('h4').at(1)
    expect(wrapperArray).toContain('tester')

  })

  // create user 2 times and check message
  it('button click user already exists', () => {

    const wrapper = mount(App)
    var i;
    for ( i = 0; i < 3; i++) {
      wrapper.vm.username = 'tester'
      wrapper.vm.comment = 'test'
      const button = wrapper.findAll('input').at(1)
      button.trigger('click')
    }
    expect(wrapper.vm.message).toBe('Username already exists')
  })


})
