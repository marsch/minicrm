webpackJsonp([0,2],{lVK7:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}n("kgP6"),n("vdfj"),n("Yq+E");var o=n("U7vG"),r=a(o),l=n("O27J"),i=n("pnOm"),s=a(i);(0,l.render)(r.default.createElement(s.default,null),document.querySelector("#app"))},0:function(e,t,n){n("+prg"),e.exports=n("lVK7")},"Yq+E":function(e,t){},pnOm:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("U7vG"),s=a(i),u=n("Zfgq"),c=n("4n+p"),p=n("eqvY"),f=a(p),d=n("IcnI"),m=a(d),h=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return s.default.createElement(c.Provider,{store:m.default},s.default.createElement(u.Router,{children:f.default,history:u.browserHistory}))},t}(s.default.Component);t.default=h,e.exports=t.default},eqvY:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("pv1F"),r=a(o),l=n("yqhF"),i=a(l),s=n("6xGa"),u=a(s);t.default={path:"/",component:r.default,indexRoute:{onEnter:function(e,t){return t("/customers")}},childRoutes:[{path:"/customers",component:i.default},{path:"/appointments",component:u.default}]},e.exports=t.default},pv1F:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s,u,c=n("U7vG"),p=o(c),f=n("iXbh"),d=n("miMs"),m=o(d),h=n("lrpO"),b=n("8uPS"),v=o(b),y=n("4n+p"),E=n("mUbh"),j=a(E),C=n("FfS/"),w=o(C),g=n("PJh5"),A=o(g),_=n("L/X+"),O=(o(_),s=(0,y.connect)(function(e){return{customers:e.customers,appointments:e.appointments}},j),s(u=function(e){function t(){var n,a,o;r(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=l(this,e.call.apply(e,[this].concat(s))),a.state={index:0,availableRoutes:[{label:"Customers",path:"/customers"},{label:"Appointments",path:"/appointments"}]},a.handleTabChange=function(e){a.props.router.push({pathname:a.state.availableRoutes[e].path}),a.setState({index:e})},a.onClickAddFakeData=function(){for(var e=10,t=(0,A.default)().add(3,"days").toDate(),n=(0,A.default)().add(23,"days").toDate(),o=0;o<=e;o++){var r={id:w.default.random.number()+o,firstname:w.default.name.firstName(),lastname:w.default.name.lastName(),birthdate:w.default.date.past(30,new Date)},l={id:w.default.random.number()+o,customer_id:r.id,datetime:w.default.date.between(t,n)};a.props.addCustomer(r),a.props.addAppointment(l)}},a.onClickResetDatabase=function(){a.props.deleteAllAppointments(),a.props.deleteAllCustomers()},o=n,l(a,o)}return i(t,e),t.prototype.componentWillMount=function(){var e=this,t=this.state.availableRoutes.findIndex(function(t){return t.path==e.props.location.pathname});this.setState({index:t})},t.prototype.render=function(){var e=this;return p.default.createElement("div",null,p.default.createElement(m.default,{className:"app-bar"},p.default.createElement(v.default,{type:"horizontal"},p.default.createElement(h.IconMenu,{icon:"menu",className:"app-bar-button"},p.default.createElement(h.MenuItem,{value:"fill",icon:"airplay",caption:"Add Testdata",onClick:this.onClickAddFakeData}),p.default.createElement(h.MenuItem,{value:"empty",icon:"delete",caption:"Empty Database",onClick:this.onClickResetDatabase})),p.default.createElement("a",{href:"/customers"},"mini-crm"))),p.default.createElement(f.Layout,null,p.default.createElement(f.Panel,null,p.default.createElement(f.Tabs,{index:this.state.index,onChange:this.handleTabChange,inverse:!0,className:"page-tabs"},this.state.availableRoutes.map(function(t,n){var a=e.props.location.pathname==t.path;return p.default.createElement(f.Tab,{active:a,label:t.label,key:"route-"+n,className:"page-tab"})})),this.props.children)))},t}(p.default.Component))||u);t.default=O,e.exports=t.default},mUbh:function(e,t,n){"use strict";t.__esModule=!0,t.deleteAllAppointments=t.deleteAllCustomers=t.updateAppointment=t.removeAppointment=t.addAppointment=t.updateCustomer=t.removeCustomer=t.addCustomer=void 0;var a=n("qKaj");t.addCustomer=(0,a.createAction)("ADD_CUSTOMER"),t.removeCustomer=(0,a.createAction)("REMOVE_CUSTOMER"),t.updateCustomer=(0,a.createAction)("UPDATE_CUSTOMER"),t.addAppointment=(0,a.createAction)("ADD_APPOINTMENT"),t.removeAppointment=(0,a.createAction)("REMOVE_APPOINTMENT"),t.updateAppointment=(0,a.createAction)("UPDATE_APPOINTMENT"),t.deleteAllCustomers=(0,a.createAction)("DELETE_ALL_CUSTOMERS"),t.deleteAllAppointments=(0,a.createAction)("DELETE_ALL_APPOINTMENTS")},Um34:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments[1];return{customers:p(e.customers,t),appointments:f(e.appointments,t)}}t.__esModule=!0,t.appointmentsReducer=t.customerReducer=void 0;var r,l;t.default=o;var i=n("qKaj"),s=n("mUbh"),u=a(s);window.actions=u;var c={customers:[{id:43,firstname:"Jim",lastname:"Beam",birthdate:new Date(1980,3,11)},{id:42,firstname:"Johnny",lastname:"Daniels",birthdate:new Date(1950,3,11)}],appointments:[]},p=t.customerReducer=(0,i.createReducer)((r={},r[u.addCustomer]=function(e,t){return[].concat(e,[t])},r[u.removeCustomer]=function(e,t){return e.filter(function(e){return e.id!=t.id})},r[u.updateCustomer]=function(e,t){return e.map(function(e){return e.id==t.id?t:e})},r[u.deleteAllCustomers]=function(){return[]},r),[]),f=t.appointmentsReducer=(0,i.createReducer)((l={},l[u.addAppointment]=function(e,t){return[].concat(e,[t])},l[u.removeAppointment]=function(e,t){return e.filter(function(e){return e.id!=t.id})},l[u.updateAppointment]=function(e,t){return e.map(function(e){return e.id==t.id?t:e})},l[u.deleteAllAppointments]=function(){return[]},l),[])},yqhF:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=n("U7vG"),f=o(p),d=n("4n+p"),m=n("1xRS"),h=o(m),b=n("4TLi"),v=o(b),y=n("uuFa"),E=o(y),j=n("mUbh"),C=a(j),w=n("RovJ"),g=n("pUOY"),A=n("8uPS"),_=o(A),O=n("ovgm"),k=o(O),T=n("PJh5"),D=o(T),x=(0,k.default)(g.Button),S=function(e){var t=e.id,n=e.firstname,a=e.lastname,o=e.birthdate,r=e.onClickAddAppointment,l=e.onClickEdit,i=e.onClickDelete,s=function(){return r(t)},u=function(){return i(t)},c=function(){return l(t)};return f.default.createElement(w.Table.Row,null,f.default.createElement(w.Table.Cell,null,t),f.default.createElement(w.Table.Cell,null,n),f.default.createElement(w.Table.Cell,null,a),f.default.createElement(w.Table.Cell,null,(0,D.default)(o).format("DD. MMMM YYYY")),f.default.createElement(w.Table.Cell,null,f.default.createElement(_.default,{type:"horizontal"},f.default.createElement(g.Button,{label:"Delete",icon:"delete",onClick:u}),f.default.createElement(g.Button,{label:"Edit",icon:"edit",onClick:c,raised:!0}),f.default.createElement(g.Button,{label:"Add",icon:"perm_contact_calendar",onClick:s,raised:!0,primary:!0}))))},M=function(e){var t=e.createAction;return f.default.createElement(w.Table.Row,null,f.default.createElement(w.Table.Cell,{colSpan:"5",textAlign:"center",className:"empty-fallback-cell"},"No Entries yet, just create one",f.default.createElement("br",null),f.default.createElement(g.Button,{icon:"add",label:"Add Customer",accent:!0,onClick:t})))},P=(s=(0,d.connect)(function(e){return{customers:e.customers,appointments:e.appointments}},C),s(u=function(e){function t(){var n,a,o;r(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=l(this,e.call.apply(e,[this].concat(s))),a.state={DialogComponent:null},a.saveCustomer=function(e){e.id?a.props.updateCustomer(e):(e.id=a.props.customers.length+1,a.props.addCustomer(e)),a.closeDialog()},a.saveAppointment=function(e){return e.id?(a.props.updateAppointment(e),void a.closeDialog()):(e.id=a.props.appointments.length+1,a.props.addAppointment(e),a.goAppointments())},a.goAppointments=function(){a.props.router.push({pathname:"/appointments"})},a.removeCustomer=function(e){var t=a.props.appointments.filter(function(t){return t.customer_id==e.id});t.forEach(function(e){a.props.removeAppointment(e)}),a.props.removeCustomer(e),a.closeDialog()},a.closeDialog=function(){a.setState({DialogComponent:null})},a.showAddAppointment=function(e){var t=a.props.customers.find(function(t){return t.id==e});a.setState({DialogComponent:f.default.createElement(h.default,{active:!0,closeAction:a.closeDialog,saveAction:a.saveAppointment,customer:t})})},a.showDelete=function(e){var t=a.props.customers.find(function(t){return t.id==e});a.setState({DialogComponent:f.default.createElement(E.default,{active:!0,closeAction:a.closeDialog,confirmAction:a.removeCustomer,data:t,title:"Delete Customer",description:"You are about to delete the customer "+t.firstname+" "+t.lastname})})},a.showEdit=function(e){var t=a.props.customers.find(function(t){return t.id==e});a.setState({DialogComponent:f.default.createElement(v.default,{active:!0,closeAction:a.closeDialog,saveAction:a.saveCustomer,customer:t})})},a.showCreate=function(){a.setState({DialogComponent:f.default.createElement(v.default,{active:!0,closeAction:a.closeDialog,saveAction:a.saveCustomer})})},a.renderCustomers=function(){return a.props.customers.length?a.props.customers.map(function(e){return f.default.createElement(S,c({key:"customer-"+e.id},e,{onClickAddAppointment:a.showAddAppointment,onClickEdit:a.showEdit,onClickDelete:a.showDelete}))}):f.default.createElement(M,{createAction:a.showCreate})},o=n,l(a,o)}return i(t,e),t.prototype.render=function(){var e=this.state.DialogComponent||null;return f.default.createElement("div",{className:"page-content"},e,f.default.createElement(x,{tooltipPosition:"left",tooltip:"Add Customer",icon:"add",floating:!0,className:"page-main-fab",ripple:!0,accent:!0,onClick:this.showCreate}),f.default.createElement(_.default,{type:"horizontal"},f.default.createElement("h3",{className:"page-title"},"Customer List")),f.default.createElement(w.Table,{compact:!0,celled:!0,fixed:!0,singleLine:!0,size:"small",striped:!0,selectable:!0},f.default.createElement(w.Table.Header,null,f.default.createElement(w.Table.Row,null,f.default.createElement(w.Table.HeaderCell,{width:5},"ID"),f.default.createElement(w.Table.HeaderCell,{width:15},"Firstname"),f.default.createElement(w.Table.HeaderCell,{width:15},"Lastname"),f.default.createElement(w.Table.HeaderCell,{width:10},"Day of Birth"),f.default.createElement(w.Table.HeaderCell,{width:15},"Actions"))),f.default.createElement(w.Table.Body,null,this.renderCustomers()),f.default.createElement(w.Table.Footer,{fullWidth:!0},f.default.createElement(w.Table.Row,null,f.default.createElement(w.Table.HeaderCell,null),f.default.createElement(w.Table.HeaderCell,{colSpan:"4"},f.default.createElement(g.Button,{icon:"add",label:"Add Customer",accent:!0,onClick:this.showCreate}))))))},t}(f.default.Component))||u);t.default=P,e.exports=t.default},"1xRS":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n("U7vG"),u=a(s),c=n("Wo9H"),p=a(c),f=n("5kHL"),d=a(f),m=n("J0jt"),h=a(m),b=function(e){function t(){var n,a,l;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=a=r(this,e.call.apply(e,[this].concat(u))),a.state={id:void 0,customer_id:void 0,datetime:new Date},a.handleChange=function(e,t){var n;a.setState(i({},a.state,(n={},n[e]=t,n)))},a.onSave=function(){a.props.saveAction(a.state),a.setState({id:void 0,customer_id:void 0,datetime:new Date})},l=n,r(a,l)}return l(t,e),t.prototype.componentWillMount=function(){this.props.appointment&&this.setState(this.props.appointment),this.props.customer&&this.setState({customer_id:this.props.customer.id})},t.prototype.getActions=function(){return[{label:"Cancel",onClick:this.props.closeAction},{label:this.state.id?"Save":"Create",onClick:this.onSave}]},t.prototype.render=function(){return u.default.createElement(p.default,{title:this.state.id?"Edit Appointment":"Create Appointment",active:this.props.active,actions:this.getActions(),onEscKeyDown:this.props.closeAction,onOverlayClick:this.props.closeAction},u.default.createElement("section",null,u.default.createElement("p",null,"You are about to ",this.state.id?"edit the":"create an"," appointment with ",this.props.customer.firstname," ",this.props.customer.lastname),u.default.createElement(d.default,{label:"Day",sundayFirstDayOfWeek:!0,onChange:this.handleChange.bind(this,"datetime"),value:this.state.datetime}),u.default.createElement(h.default,{label:"Starts at",onChange:this.handleChange.bind(this,"datetime"),value:this.state.datetime})))},t}(u.default.Component);t.default=b,e.exports=t.default},"4TLi":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n("U7vG"),u=a(s),c=n("Wo9H"),p=a(c),f=n("hb4B"),d=a(f),m=n("5kHL"),h=a(m),b=function(e){function t(){var n,a,l;o(this,t);for(var s=arguments.length,u=Array(s),c=0;c<s;c++)u[c]=arguments[c];return n=a=r(this,e.call.apply(e,[this].concat(u))),a.state={id:void 0,firstname:"",lastname:"",birthdate:void 0},a.handleChange=function(e,t){var n;a.setState(i({},a.state,(n={},n[e]=t,n)))},a.onSave=function(){a.props.saveAction(a.state),a.setState({id:void 0,firstname:"",lastname:"",birthdate:void 0})},l=n,r(a,l)}return l(t,e),t.prototype.componentWillMount=function(){this.props.customer&&this.setState(this.props.customer)},t.prototype.getActions=function(){return[{label:"Cancel",onClick:this.props.closeAction},{label:this.state.id?"Save":"Create",onClick:this.onSave}]},t.prototype.render=function(){return u.default.createElement(p.default,{title:this.state.id?"Edit Customer":"Create Customer",active:this.props.active,actions:this.getActions(),onEscKeyDown:this.props.closeAction,onOverlayClick:this.props.closeAction},u.default.createElement("section",null,u.default.createElement(d.default,{type:"text",label:"Firstname",name:"name",value:this.state.firstname,onChange:this.handleChange.bind(this,"firstname"),maxLength:16}),u.default.createElement(d.default,{type:"text",label:"Lastname",value:this.state.lastname,onChange:this.handleChange.bind(this,"lastname")}),u.default.createElement(h.default,{label:"Birthdate",sundayFirstDayOfWeek:!0,onChange:this.handleChange.bind(this,"birthdate"),value:this.state.birthdate})))},t}(u.default.Component);t.default=b,e.exports=t.default},uuFa:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=n("U7vG"),s=a(i),u=n("Wo9H"),c=a(u),p=function(e){function t(){var n,a,l;o(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=r(this,e.call.apply(e,[this].concat(s))),a.onSave=function(){a.props.confirmAction(a.props.data)},l=n,r(a,l)}return l(t,e),t.prototype.getActions=function(){return[{label:"Cancel",onClick:this.props.closeAction},{label:"Confirm",onClick:this.onSave}]},t.prototype.render=function(){return s.default.createElement(c.default,{title:this.props.title,active:this.props.active,actions:this.getActions(),onEscKeyDown:this.props.closeAction,onOverlayClick:this.props.closeAction},s.default.createElement("section",null,s.default.createElement("p",null,this.props.description)))},t}(s.default.Component);t.default=p,e.exports=t.default},"6xGa":function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s,u,c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p=n("U7vG"),f=o(p),d=n("4n+p"),m=n("qyDu"),h=o(m),b=n("1xRS"),v=o(b),y=n("uuFa"),E=o(y),j=n("PJh5"),C=o(j),w=n("mUbh"),g=a(w),A=n("RovJ"),_=n("pUOY"),O=n("8uPS"),k=o(O),T=n("ovgm"),D=o(T),x=(0,D.default)(_.Button),S=function(e){var t=e.id,n=e.datetime,a=e.customer_id,o=e.customers,r=e.onClickDelete,l=e.onClickEdit,i=function(){return r(t)},s=function(){return l(t)},u=o.find(function(e){return e.id==a});return f.default.createElement(A.Table.Row,null,f.default.createElement(A.Table.Cell,null,t),f.default.createElement(A.Table.Cell,null,(0,C.default)(n).format("DD. MMMM YYYY")),f.default.createElement(A.Table.Cell,null,(0,C.default)(n).format("hh:mm")),f.default.createElement(A.Table.Cell,null,u.firstname),f.default.createElement(A.Table.Cell,null,u.lastname),f.default.createElement(A.Table.Cell,null,f.default.createElement(k.default,{type:"horizontal"},f.default.createElement(_.Button,{label:"Delete",icon:"delete",onClick:i}),f.default.createElement(_.Button,{label:"Edit",icon:"edit",onClick:s,raised:!0,primary:!0}))))},M=function(e){var t=e.createAction;return f.default.createElement(A.Table.Row,null,f.default.createElement(A.Table.Cell,{colSpan:"6",textAlign:"center",className:"empty-fallback-cell"},"There are no appointments available, just create one from the customer list",f.default.createElement("br",null),f.default.createElement(_.Button,{icon:"add",label:"View Customer Data",accent:!0,onClick:t})))},P=(s=(0,d.connect)(function(e){return{customers:e.customers,appointments:e.appointments}},g),s(u=function(e){function t(){var n,a,o;r(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=a=l(this,e.call.apply(e,[this].concat(s))),a.state={DialogComponent:null,filterByNextWeek:!1},a.handleChange=function(e,t){var n;a.setState(c({},a.state,(n={},n[e]=t,n)))},a.toggleFilter=function(){a.setState({filterByNextWeek:!a.state.filterByNextWeek})},a.saveAppointment=function(e){e.id?a.props.updateAppointment(e):(e.id=a.props.appointments.length+1,a.props.addAppointment(e)),a.closeDialog()},a.removeAppointment=function(e){a.props.removeAppointment(e),a.closeDialog()},a.closeDialog=function(){a.setState({DialogComponent:null})},a.showDelete=function(e){var t=a.props.appointments.find(function(t){return t.id==e}),n=a.props.customers.find(function(e){return e.id==t.customer_id});a.setState({DialogComponent:f.default.createElement(E.default,{active:!0,closeAction:a.closeDialog,confirmAction:a.removeAppointment,data:t,title:"Delete Appointment",description:"You are about to delete the appointment with customer "+n.firstname+" "+n.lastname})})},a.showEdit=function(e){var t=a.props.appointments.find(function(t){return t.id==e}),n=a.props.customers.find(function(e){return e.id==t.customer_id});"string"==typeof t.datetime&&(t.datetime=new Date(t.datetime)),a.setState({DialogComponent:f.default.createElement(v.default,{active:!0,closeAction:a.closeDialog,saveAction:a.saveAppointment,customer:n,appointment:t})})},a.applyFilter=function(e){if(!a.state.filterByNextWeek)return!0;var t=(0,C.default)().add(1,"weeks").startOf("isoWeek"),n=(0,C.default)().add(1,"weeks").endOf("isoWeek");return!!(0,C.default)(e.datetime).isBetween(t,n)},a.goCustomers=function(){a.props.router.push({pathname:"/customers"})},a.renderAppointments=function(){return a.props.appointments.length?a.props.appointments.filter(a.applyFilter).map(function(e){return f.default.createElement(S,c({key:"appointment-"+e.id},e,{customers:a.props.customers,onClickAddAppointment:a.showAddAppointment,onClickEdit:a.showEdit,onClickDelete:a.showDelete}))}):f.default.createElement(M,{createAction:a.goCustomers})},o=n,l(a,o)}return i(t,e),t.prototype.render=function(){var e=this.state.DialogComponent||null;return f.default.createElement("div",{className:"page-content"},e,f.default.createElement(x,{tooltipPosition:"left",tooltip:"Show next week",icon:this.state.filterByNextWeek?"date_range":"filter_list",floating:!0,className:"page-main-fab",ripple:!0,accent:!0,onClick:this.toggleFilter}),f.default.createElement(k.default,{type:"horizontal"},f.default.createElement("h3",{className:"page-title"},"Appointment List")),f.default.createElement(A.Table,{compact:!0,celled:!0,fixed:!0,singleLine:!0,size:"small",striped:!0,selectable:!0},f.default.createElement(A.Table.Header,null,f.default.createElement(A.Table.Row,null,f.default.createElement(A.Table.HeaderCell,{width:5},"ID"),f.default.createElement(A.Table.HeaderCell,{width:10},"Date"),f.default.createElement(A.Table.HeaderCell,{width:5},"Time"),f.default.createElement(A.Table.HeaderCell,{width:15},"Firstname"),f.default.createElement(A.Table.HeaderCell,{width:15},"Lastname"),f.default.createElement(A.Table.HeaderCell,{width:15},"Actions"))),f.default.createElement(A.Table.Body,null,this.renderAppointments()),f.default.createElement(A.Table.Footer,{fullWidth:!0},f.default.createElement(A.Table.Row,null,f.default.createElement(A.Table.HeaderCell,null),f.default.createElement(A.Table.HeaderCell,{colSpan:"5"},f.default.createElement(h.default,{checked:this.state.filterByNextWeek,label:"Filter next week",onChange:this.handleChange.bind(this,"filterByNextWeek")}))))))},t}(f.default.Component))||u);t.default=P,e.exports=t.default},IcnI:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n("c9Fv"),r=n("Um34"),l=a(r),i=n("L/X+"),s=a(i),u=n("saFK"),c=new s.default("mini-crm"),p=(0,o.compose)((0,u.persistentStore)(c))(o.createStore),f=p((0,u.persistentReducer)(l.default,"mainReducer"),{});window.store=f,t.default=f,e.exports=t.default},1:function(e,t,n){function a(e){return n(o(e))}function o(e){return r[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var r={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg-x":"/sqv","./bg-x.js":"/sqv","./bg.js":"lOED","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./uk":"ntHu","./uk.js":"ntHu","./uz":"XU1s","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=1}});
//# sourceMappingURL=app.6172a936.js.map