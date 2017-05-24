var ng = require('@angular/core');
var ngPlatformBrowser = require('@angular/platform-browser');
var ngForms = require('@angular/forms');
var myRoutes = require('./routes');
var store = require('./reducers');

var AppComponent = require('./containers/App');
var FooterComponent = require('./components/Footer');
var HeaderComponent = require('./components/Header');
var MainSectionComponent = require('./components/MainSection');
var TodoItemComponent = require('./components/TodoItem');
var TodoTextInputComponent = require('./components/TodoTextInput');

module.exports = ng.NgModule({
  imports: [
    ngPlatformBrowser.BrowserModule,
    ngForms.FormsModule,
    myRoutes.routing,
    store
  ],
  declarations: [
    myRoutes.RootComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent
  ],
  bootstrap: [myRoutes.RootComponent]
})
.Class({
  constructor: function () {}
});
