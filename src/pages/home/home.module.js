import angular from 'angular'
import {HomeIndexComponent} from './home.component'


const HOME_MODULE = angular
  .module('home.module', [])
  .component('homeComponent', new HomeIndexComponent())

export {HOME_MODULE}
