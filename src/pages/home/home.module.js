import angular from 'angular'

class HomeController {
  constructor () {
    this.title = 'HomeComponent'
    this.msg = 'TEST'
  }
}

class HomeComponent {
  constructor () {
    this.template = require('./home.view.html')
    this.controller = HomeController
  }
}

export default angular
  .module('home.module', [])
  .component('homeComponent', new HomeComponent())
