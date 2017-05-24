var ng = require('@angular/core');
var ngRouter = require('@angular/router');
var AppComponent = require('./containers/App');

var RootComponent =
  ng.Component({
    selector: 'fountain-root',
    template: '<router-outlet></router-outlet>'
  })
  .Class({
    constructor: function () {}
  });

var routes = [
  {
    path: '',
    component: AppComponent
  }
];

module.exports = {RootComponent: RootComponent, routes: routes, routing: ngRouter.RouterModule.forRoot(routes)};
