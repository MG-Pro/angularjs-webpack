import angular from 'angular'

class NavigationController {
  constructor () {
    this.title = 'HomeComponent'
  }
}

class NavigationComponent {
  constructor () {
    this.template = require('./navigation.view.html')
    this.controller = NavigationController
  }
}

const nav = angular
  .module('nav', [])
  .component('navigation', new NavigationComponent())

export {nav}
