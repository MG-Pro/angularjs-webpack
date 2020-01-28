import angular from 'angular'
import uiRouter from 'angular-ui-router'
import oclazyload from 'oclazyload'
import routing from './app.config'
import './assets/css/common.scss'

const app = angular.module('app', [uiRouter, oclazyload])
  .config(routing)

angular.bootstrap(document, [app.name], {
  strictDi: true
});
