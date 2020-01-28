class HomeIndexController {
  constructor () {
    this.title = 'HomeComponent'
    this.msg = 'TEST'
  }
}

class HomeIndexComponent {
  constructor () {
    this.template = require('./home.view.html')
    this.controller = HomeIndexController
  }
}

export {HomeIndexComponent}
