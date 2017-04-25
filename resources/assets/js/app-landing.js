/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.$ = window.jQuery = require('jquery')

require('./smoothscroll')

require('bootstrap-less')

window.Vue = require('vue')

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* eslint-disable no-undef, no-unused-vars */
const app = new Vue({
  el: '#app'
})

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('js/service-worker.js').then(function() {
        console.log('Service worker registered OK!')
    }).catch(function (err) {
        console.log('Service worker registering: ' + err)
    })
}


