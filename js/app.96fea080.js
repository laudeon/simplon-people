(function(e){function t(t){for(var n,o,s=t[0],c=t[1],l=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&m.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},i=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/simplon-people/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"05b8":function(e,t,r){},1246:function(e,t,r){},"160f":function(e,t,r){},5034:function(e,t,r){"use strict";var n=r("d683"),a=r.n(n);a.a},"56cc":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=r("485e"),i=r("d00d"),o=r.n(i),s=r("9062"),c=r.n(s),l=r("1881"),u=r.n(l),d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("flash-message"),!1===e.logged?r("section",{attrs:{id:"intro"}},[r("p",[e._v("\n      Qui c'est ? Où est-elle ? Que fait-il ?\n    ")]),e._m(0)]):e._e(),!0===e.logged?r("Sidebar"):e._e(),r("GoogleSingIn",{attrs:{callback:e.gSignInCallback,logged:e.logged}}),!0===e.logged?r("Searchbar"):e._e(),!0===e.logged?r("List",{attrs:{activeList:e.$store.state.activeList}}):e._e()],1)},m=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",[e._v("Bienvue sur "),r("strong",[e._v("le répertoire des équipes de Simplon.")])])}],p=(r("8e6e"),r("456d"),r("ac6a"),r("5df3"),r("bd86")),f=(r("160f"),r("2f62")),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{attrs:{id:"sidebar"}},[r("h1",[e._v("Simplon People")]),r("a",{staticClass:"list-link active",attrs:{id:"trainers-link"},on:{click:function(t){return e.switchList("trainers")}}},[e._v("Formateur⋅rice⋅s")]),r("a",{staticClass:"list-link",attrs:{id:"coworkers-link"},on:{click:function(t){return e.switchList("coworkers")}}},[e._v("DIUT / CME / PP")]),r("ul",e._l(e.districts,(function(t){return r("li",{key:t},[r("a",{on:{click:e.toggleDistricts}},[e._v(e._s(t))])])})),0)])},h=[];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(p["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w={name:"sidebar",computed:g({},Object(f["b"])({districts:function(e){return e.districts}})),methods:{switchList:function(e){var t=this.$el.querySelector("#"+e+"-link"),r=t.parentElement;r.querySelectorAll("a.list-link").forEach((function(e){return e.className="list-link"})),t.className=t.className+" active",this.$store.commit("switchList",e)},toggleActive:function(e){var t=e.parentElement.parentElement;"active-district"!==e.className?(t.querySelectorAll("li a").forEach((function(e){return e.className=""})),e.className="active-district"):e.className=""},toggleDistricts:function(e){this.toggleActive(e.target),this.$store.commit("toggleDistricts",e.target.innerHTML.trim())}}},y=w,_=(r("fc33"),r("2877")),O=Object(_["a"])(y,v,h,!1,null,"c81f1c2a",null),j=O.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{attrs:{id:"searchbar"}},[r("form",{on:{submit:function(e){e.preventDefault()}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.spayload,expression:"spayload"}],attrs:{type:"text",name:"s-payload",id:"search-input",placeholder:"Rechercher..."},domProps:{value:e.spayload},on:{input:function(t){t.target.composing||(e.spayload=t.target.value)}}})])])},$=[],C={name:"searchbar",data:function(){return{spayload:""}},watch:{spayload:function(e){this.$store.commit("search",e)}}},P=C,S=(r("eecd"),Object(_["a"])(P,k,$,!1,null,"a6bd57ce",null)),x=S.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{attrs:{id:"googleauth"}},[!1===e.logged?r("button",{attrs:{id:"google-signin",type:"button"},on:{click:e.signIn}},[e._v("Se connecter avec Google")]):e._e(),!0===e.logged?r("button",{attrs:{id:"google-signout",type:"button"},on:{click:e.signOut}},[e._v("Se déconnecter")]):e._e()])},E=[],A={name:"googleauth",props:{callback:Function,logged:Boolean},created:function(){var e=this;this.$gapi.isSignedIn().then((function(t){return e.callback(t)})).catch(window.console.error)},methods:{signIn:function(){var e=this;return this.$gapi.signIn().then((function(){return e.callback(!0)})).catch(window.console.error)},signOut:function(){var e=this;return this.$gapi.signOut().then((function(){return e.callback(!1)})).catch(window.console.error)}}},T=A,F=(r("5034"),Object(_["a"])(T,I,E,!1,null,"85684342",null)),q=F.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"people"},[r("p",[e._v(e._s(e.listLength)+" "+e._s(e.peopleType))]),r("keep-alive",["trainers"==e.activeList?r("section",{staticClass:"people-list trainers",attrs:{role:"list"}},e._l(e.trainers,(function(e){return r("Trainer",{key:e.id,attrs:{trainer:e}})})),1):e._e()]),r("keep-alive",["coworkers"==e.activeList?r("section",{staticClass:"people-list coworkers",attrs:{role:"list"}},e._l(e.coworkers,(function(e){return r("Coworker",{key:e.id,attrs:{coworker:e}})})),1):e._e()]),r("div",{staticClass:"button-add"},[r("button",{staticClass:"add",on:{click:function(t){return e.$modal.show("add"+e.peopleType)}}},[e._v("\n      +\n    ")]),r("modal",{attrs:{name:"add"+e.peopleType,height:"auto",width:"70%"}},["trainers"==e.activeList?r("AddTrainer"):e._e(),"coworkers"==e.activeList?r("AddCoworker"):e._e()],1)],1)],1)},R=[],N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("h1",{on:{click:function(t){return e.$modal.show(e.trainer.lastname+e.trainer.firstname)}}},[e._v("\n    "+e._s(e.trainer.firstname)+" "+e._s(e.trainer.lastname)+"\n    "),r("br"),r("small",[e._v(e._s(e.trainer.skillSet))])]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("email")]),e._v(" "+e._s(e.trainer.email))]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("location_city")]),e._v(" "+e._s(e.trainer.city)+" - "),r("small",[e._v(e._s(e.trainer.partnership))])]),r("modal",{attrs:{name:e.trainer.lastname+e.trainer.firstname,height:"auto",width:"70%"}},[r("div",{staticClass:"modal-container"},[r("section",{staticClass:"name"},[r("h1",[e._v("\n          "+e._s(e.trainer.firstname)+" "+e._s(e.trainer.lastname)+"\n          "),r("br"),r("small",[e._v(e._s(e.trainer.skillSet))])]),r("p",[e._v(e._s(e.trainer.role))]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("email")]),e._v(" "+e._s(e.trainer.email))]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("person_add")]),e._v(" "+e._s(e.trainer.discord))])]),r("section",{staticClass:"more-info"},[r("ul",[r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("map")]),e._v(" "+e._s(e.trainer.district))]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("location_city")]),e._v(" "+e._s(e.trainer.city)+" - "),r("small",[e._v(e._s(e.trainer.partnership))])]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("assignment")]),e._v(" "+e._s(e.trainer.status))]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("devices")]),e._v(" "+e._s(e._f("hasSimplonline")(e.trainer.simplonline)))]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("check_circle_outline")]),e._v(" "+e._s(e._f("isSOCAccountActive")(e.trainer.soc)))])]),r("div",{staticClass:"button-edit"},[r("button",{staticClass:"edit",on:{click:function(t){return e.$modal.show("editTrainer")}}},[e._v("Modifier")]),r("modal",{attrs:{name:"editTrainer",height:"auto",width:"70%"}},[r("EditTrainer",{attrs:{trainer:Object.assign({},e.trainer)}})],1)],1)])])])],1)},L=[],M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("section",{staticClass:"form"},[r("TrainerForm",{attrs:{trainer:e.trainer,submitHandler:e.editTrainer}})],1)])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("\n      Modifier les informations d'un⋅e formateur⋅rice\n    ")])])}],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:e.submitHandler}},[r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"firstname"}},[e._v("Prénom *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.firstname,expression:"trainer.firstname"}],attrs:{type:"text",name:"firstname",id:"firstname",required:""},domProps:{value:e.trainer.firstname},on:{input:function(t){t.target.composing||e.$set(e.trainer,"firstname",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"lastname"}},[e._v("Nom *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.lastname,expression:"trainer.lastname"}],attrs:{type:"text",name:"lastname",id:"lastname",required:""},domProps:{value:e.trainer.lastname},on:{input:function(t){t.target.composing||e.$set(e.trainer,"lastname",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"district"}},[e._v("Région *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.district,expression:"trainer.district"}],attrs:{type:"text",name:"district",id:"district",required:""},domProps:{value:e.trainer.district},on:{input:function(t){t.target.composing||e.$set(e.trainer,"district",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"city"}},[e._v("Fabrique *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.city,expression:"trainer.city"}],attrs:{type:"text",name:"city",id:"city",required:""},domProps:{value:e.trainer.city},on:{input:function(t){t.target.composing||e.$set(e.trainer,"city",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"role"}},[e._v("Fonction *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.role,expression:"trainer.role"}],attrs:{type:"text",name:"role",id:"role",required:""},domProps:{value:e.trainer.role},on:{input:function(t){t.target.composing||e.$set(e.trainer,"role",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"email"}},[e._v("Email *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.email,expression:"trainer.email"}],attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.trainer.email},on:{input:function(t){t.target.composing||e.$set(e.trainer,"email",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"skillsSet"}},[e._v("Référentiel / Technos *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.skillSet,expression:"trainer.skillSet"}],attrs:{type:"text",name:"skillsSet",id:"skillsSet",required:""},domProps:{value:e.trainer.skillSet},on:{input:function(t){t.target.composing||e.$set(e.trainer,"skillSet",t.target.value)}}})]),e._m(0)])},W=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-bloc"},[r("button",{attrs:{type:"submit"}},[e._v("Valider")])])}],G={name:"TrainerForm",props:{trainer:{type:Object,default:function(){return{}}},submitHandler:{type:Function,default:function(){}}}},Y=G,J=(r("ab7a"),Object(_["a"])(Y,V,W,!1,null,"89902958",null)),X=J.exports,Z={name:"editTrainer",props:{trainer:{type:Object,default:function(){return{}}}},methods:{editTrainer:function(e){var t=this;e.preventDefault(),this.$root.$emit("showloader"),this.$gapi._libraryInit("client").then((function(){return t.$gapi._libraryInit("client")})).then((function(e){return t.$store.dispatch("trainers/updateTrainer",{gclient:e,payload:{rawData:t.trainer,data:{district:t.trainer.district,city:t.trainer.city,role:t.trainer.role,lastname:t.trainer.lastname,firstname:t.trainer.firstname,email:t.trainer.email,skillSet:t.trainer.skillSet}}})})).then((function(){t.$root.$emit("stoploader"),t.$modal.hide("addFormateur⋅rice⋅s"),t.flash("Modifié⋅e avec succès !","success")})).catch((function(e){t.$root.$emit("stoploader"),t.$modal.hide("addFormateur⋅rice⋅s"),e.status>=400?t.flash(t.$getErrorMessageFromCode(e.status),"error"):t.flash(t.$getErrorMessage(e),"error")}))}},components:{TrainerForm:X}},z=Z,H=(r("f7a8"),Object(_["a"])(z,M,B,!1,null,"41a6e600",null)),U=H.exports,Q={name:"trainer",props:{trainer:{type:Object,default:function(){return{}}}},components:{EditTrainer:U}},K=Q,ee=Object(_["a"])(K,N,L,!1,null,null,null),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("section",{staticClass:"form"},[r("TrainerForm",{attrs:{trainer:e.trainer,submitHandler:e.addTrainer}})],1)])},ne=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("\n      Ajouter un⋅e formateur⋅rice\n    ")])])}];function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(r),!0).forEach((function(t){Object(p["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe={name:"addTrainer",data:function(){return{trainer:{district:"",city:"",role:"",lastname:"",firstname:"",email:"",skillSet:""}}},computed:ie({},Object(f["b"])("trainers",{all:function(e){return e.all}})),methods:{addTrainer:function(e){var t,r=this;e.preventDefault(),this.$root.$emit("showloader"),this.$gapi._libraryInit("client").then((function(e){return r.$store.dispatch("trainers/fetchTrainers",e)})).then((function(){return t=r.all.length+2})).then((function(){return r.$gapi._libraryInit("client")})).then((function(e){return r.$store.dispatch("trainers/addTrainer",{gclient:e,payload:r.trainer,rowNumber:t})})).then((function(){return r.$gapi._libraryInit("client")})).then((function(e){return r.$store.dispatch("trainers/addBackgroundToRow",{gclient:e,rowNumber:t,color:{red:1,green:1,blue:0}})})).then((function(){r.$root.$emit("stoploader"),r.$modal.hide("addFormateur⋅rice⋅s"),r.flash("Ajouté⋅e avec succès !","success")})).catch((function(e){r.$root.$emit("stoploader"),r.$modal.hide("addFormateur⋅rice⋅s"),e.status>=400?r.flash(r.$getErrorMessageFromCode(e.status),"error"):r.flash(r.$getErrorMessage(e),"error")}))}},components:{TrainerForm:X}},se=oe,ce=(r("5fbb"),Object(_["a"])(se,re,ne,!1,null,"75da3924",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",[r("h1",{on:{click:function(t){return e.$modal.show(e.coworker.lastname+e.coworker.firstname)}}},[e._v("\n    "+e._s(e.coworker.firstname)+" "+e._s(e.coworker.lastname)+"\n    "),r("br"),r("small",[e._v(e._s(e.coworker.role))])]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("email")]),e._v(" "+e._s(e.coworker.email))]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("location_city")]),e._v(" "+e._s(e.coworker.city)+" - "),r("small",[e._v(e._s(e.coworker.partnership))])]),r("modal",{attrs:{name:e.coworker.lastname+e.coworker.firstname,height:"auto",width:"70%"}},[r("div",{staticClass:"modal-container"},[r("section",{staticClass:"name"},[r("h1",[e._v("\n          "+e._s(e.coworker.firstname)+" "+e._s(e.coworker.lastname)+"\n          "),r("br"),r("small",[e._v(e._s(e.coworker.role))])]),r("p",[r("i",{staticClass:"material-icons-outlined"},[e._v("email")]),e._v(" "+e._s(e.coworker.email))])]),r("section",{staticClass:"more-info"},[r("ul",[r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("map")]),e._v(" "+e._s(e.coworker.district))]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("location_city")]),e._v(" "+e._s(e.coworker.city))]),r("li",[r("i",{staticClass:"material-icons-outlined"},[e._v("check_circle_outline")]),e._v(" "+e._s(e._f("isSOCAccountActive")(e.coworker.soc)))])])])])])],1)},de=[],me={name:"coworker",props:{coworker:{type:Object,default:function(){return{}}}}},pe=me,fe=Object(_["a"])(pe,ue,de,!1,null,null,null),ve=fe.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e._m(0),r("section",{staticClass:"form"},[r("form",{on:{submit:e.addCoworker}},[r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"firstname"}},[e._v("Prénom *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.firstname,expression:"trainer.firstname"}],attrs:{type:"text",name:"firstname",id:"firstname",required:""},domProps:{value:e.trainer.firstname},on:{input:function(t){t.target.composing||e.$set(e.trainer,"firstname",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"lastname"}},[e._v("Nom *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.lastname,expression:"trainer.lastname"}],attrs:{type:"text",name:"lastname",id:"lastname",required:""},domProps:{value:e.trainer.lastname},on:{input:function(t){t.target.composing||e.$set(e.trainer,"lastname",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"district"}},[e._v("Région *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.district,expression:"trainer.district"}],attrs:{type:"text",name:"district",id:"district",required:""},domProps:{value:e.trainer.district},on:{input:function(t){t.target.composing||e.$set(e.trainer,"district",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"city"}},[e._v("Fabrique *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.city,expression:"trainer.city"}],attrs:{type:"text",name:"city",id:"city",required:""},domProps:{value:e.trainer.city},on:{input:function(t){t.target.composing||e.$set(e.trainer,"city",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"role"}},[e._v("Fonction *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.role,expression:"trainer.role"}],attrs:{type:"text",name:"role",id:"role",required:""},domProps:{value:e.trainer.role},on:{input:function(t){t.target.composing||e.$set(e.trainer,"role",t.target.value)}}})]),r("div",{staticClass:"form-bloc"},[r("label",{attrs:{for:"email"}},[e._v("Email *")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.trainer.email,expression:"trainer.email"}],attrs:{type:"email",name:"email",id:"email",required:""},domProps:{value:e.trainer.email},on:{input:function(t){t.target.composing||e.$set(e.trainer,"email",t.target.value)}}})]),e._m(1)])])])},be=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("h1",[e._v("\n      Ajouter un⋅e collaborateur⋅rice\n    ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-bloc"},[r("button",{attrs:{type:"submit"}},[e._v("Ajouter")])])}];function ge(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(r),!0).forEach((function(t){Object(p["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ge(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ye={name:"addCoworker",data:function(){return{trainer:{district:"",city:"",role:"",lastname:"",firstname:"",email:""}}},computed:we({},Object(f["b"])("coworkers",{all:function(e){return e.all}})),methods:{addCoworker:function(e){var t,r=this;e.preventDefault(),this.$root.$emit("showloader"),this.$gapi._libraryInit("client").then((function(e){return r.$store.dispatch("coworkers/fetchCoworkers",e)})).then((function(){return t=r.all.length+2})).then((function(){return r.$gapi._libraryInit("client")})).then((function(e){r.$store.dispatch("coworkers/addCoworker",{gclient:e,payload:r.trainer,rowNumber:t})})).then((function(){return r.$gapi._libraryInit("client")})).then((function(e){return r.$store.dispatch("coworkers/addBackgroundToRow",{gclient:e,rowNumber:t,color:{red:1,green:1,blue:0}})})).then((function(){r.$root.$emit("stoploader"),r.$modal.hide("addCollaborateur⋅rice⋅s"),r.flash("Ajouté⋅e avec succès !","success")})).catch((function(e){r.$root.$emit("stoploader"),r.$modal.hide("addCollaborateur⋅rice⋅s"),e.status>=400?r.flash(r.$getErrorMessageFromCode(e.status),"error"):r.flash(r.$getErrorMessage(e),"error")}))}}},_e=ye,Oe=(r("6b7f"),Object(_["a"])(_e,he,be,!1,null,"3ab46912",null)),je=Oe.exports;function ke(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $e(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ke(Object(r),!0).forEach((function(t){Object(p["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ke(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Ce="Formateur⋅rice⋅s",Pe="Collaborateur⋅rice⋅s",Se={name:"list",props:{activeList:{type:String,default:"trainers"}},computed:$e({},Object(f["b"])("trainers",{trainers:function(e){return e.searched}}),{},Object(f["b"])("coworkers",{coworkers:function(e){return e.searched}}),{peopleType:function(){return"trainers"===this.activeList?Ce:Pe},listLength:function(){return"trainers"===this.activeList?this.trainers.length:this.coworkers.length}}),components:{Trainer:te,Coworker:ve,AddTrainer:le,AddCoworker:je}},xe=Se,Ie=(r("78c9"),Object(_["a"])(xe,D,R,!1,null,null,null)),Ee=Ie.exports;function Ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ae(Object(r),!0).forEach((function(t){Object(p["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ae(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Fe={name:"app",computed:Te({},Object(f["b"])({logged:function(e){return e.me.logged}})),created:function(){var e=this,t=this.$loading.show();t.hide(),this.$root.$on("stoploader",(function(){t.hide()})),this.$root.$on("showloader",(function(){t=e.$loading.show()}))},methods:{gSignInCallback:function(e){this.$store.commit("me/logged",e)}},watch:{logged:function(e){var t=this;if(e)return this.$root.$emit("showloader"),void this.$gapi._libraryInit("client").then((function(e){return Promise.all([t.$store.dispatch("coworkers/fetchCoworkers",e),t.$store.dispatch("trainers/fetchTrainers",e)])})).then((function(){return t.$root.$emit("stoploader")})).catch((function(e){e.status>=400&&(t.$store.commit("me/logged",!1),t.$root.$emit("stoploader"),t.flash(t.$getErrorMessage(e.status),"error"))}));this.$root.$emit("stoploader")}},components:{Sidebar:j,Searchbar:x,GoogleSingIn:q,List:Ee}},qe=Fe,De=(r("cf25"),Object(_["a"])(qe,d,m,!1,null,null,null)),Re=De.exports,Ne=(r("6762"),r("75fc")),Le=(r("96cf"),r("3b8d")),Me=(r("7514"),r("d225")),Be=r("b0b4"),Ve=r("308d"),We=r("6bb5"),Ge=r("013f"),Ye=r("4e2b"),Je=(r("28a5"),function(){function e(){Object(Me["a"])(this,e),Object(p["a"])(this,"id",""),Object(p["a"])(this,"firstname",""),Object(p["a"])(this,"lastname",""),Object(p["a"])(this,"email",""),Object(p["a"])(this,"role",""),Object(p["a"])(this,"district",""),Object(p["a"])(this,"city",""),Object(p["a"])(this,"role",""),Object(p["a"])(this,"partnership",""),Object(p["a"])(this,"status",""),Object(p["a"])(this,"activated",0),Object(p["a"])(this,"rowNumber",void 0),Object(p["a"])(this,"discord","")}return Object(Be["a"])(e,[{key:"generateId",value:function(){var e=this.email+Math.random(100)+""+(new Date).getMilliseconds();return e.split("").reduce((function(e,t){return(e<<5)-e+t.charCodeAt(0)|0}),0)}}]),e}()),Xe=function(e){function t(e,r){var n;return Object(Me["a"])(this,t),n=Object(Ve["a"])(this,Object(We["a"])(t).call(this)),Object(p["a"])(Object(Ge["a"])(n),"simplonline",0),Array.isArray(e)&&(e=n.formatPayloadFromgAPI(e)),n.rowNumber=r+2,n.id=e.id||n.id,n.firstname=e.firstname||n.firstname,n.lastname=e.lastname||n.lastname,n.email=e.email||n.email,n.role=e.role||n.role,n.skillSet=e.skillSet||n.skillSet,n.district=e.district||n.district,n.city=e.city||n.city,n.partnership=e.partnership||n.partnership,n.status=e.status||n.status,n.simplonline=e.simplonline||n.simplonline,n.soc=e.soc||n.soc,n.discord=e.discord||n.discord,n}return Object(Ye["a"])(t,e),Object(Be["a"])(t,[{key:"formatPayloadFromgAPI",value:function(e){var t={};return t.id=this.generateId(),t.firstname=e[4],t.lastname=e[3],t.email=e[5],t.district=e[0],t.city=e[1],t.skillSet=e[6],t.role=e[2],t.partnership=e[9],t.status=e[10],t.simplonline=e[17],t.soc=e[18],t.discord=e[22],t}}]),t}(Je),Ze=Xe,ze=(r("20d6"),r("2fdb"),r("a481"),function(e){return e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim()}),He=function(e,t,r){return 0===e.length?t:t.filter((function(t){return e.includes(t[r])}))},Ue=function(e,t,r){return e?t.filter((function(t){return e===t[r]})):t},Qe=function(e,t){return e?t.filter((function(t){return Object.keys(t).some((function(r){if("string"===typeof t[r]){var n=ze(t[r]);return n.includes(e)}return!1}))})):t},Ke=function(e){return Object.keys(e).map((function(t){return e[t]}))},et=function(e,t){var r=t.findIndex((function(t){return t.email===e.email}));return t[r]=e,t},tt={sanitizeString:ze,ifIncludes:He,filterBy:Ue,filterAll:Qe,objectToArray:Ke,updateByEmail:et},rt="702284441",nt="Formateur.rices!A",at="".concat(nt,"2:W"),it={all:[],filtered:[],searched:[]},ot={getByEmail:function(e){return function(t){return e.all.find((function(e){return e.email===t}))}}},st={fetchTrainers:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,r.sheets.spreadsheets.values.get({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:at});case 3:a=e.sent,n("fetchTrainers",a.result.values);case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),updateTrainer:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.gclient,i=r.payload,o="RAW",s=nt+i.rawData.rowNumber,c=[tt.objectToArray(i.data)],e.next=7,a.sheets.spreadsheets.values.update({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:s,valueInputOption:o,resource:{values:c}});case 7:n("updateTrainer",i.rawData);case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),addTrainer:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.gclient,i=r.payload,o=r.rowNumber,s="RAW",c=nt+o,l=[tt.objectToArray(i)],e.next=7,a.sheets.spreadsheets.values.append({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:c,valueInputOption:s,resource:{values:l}});case 7:n("addTrainer",i);case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),addBackgroundToRow:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.gclient,a=r.rowNumber,i=r.color,o=[{repeatCell:{range:{sheetId:rt,startRowIndex:a-1,endRowIndex:a},cell:{userEnteredFormat:{backgroundColor:i}},fields:"userEnteredFormat(backgroundColor)"}}],e.next=4,n.sheets.spreadsheets.batchUpdate({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",requests:o});case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},ct={fetchTrainers:function(e,t){e.all=t.map((function(e,t){return new Ze(e,t)})),e.filtered=Object(Ne["a"])(e.all),e.searched=Object(Ne["a"])(e.filtered)},addTrainer:function(e,t){e.all.push(new Ze(t,t.rowNumber))},updateTrainer:function(e,t){e.all=Object(Ne["a"])(tt.updateByEmail(t,e.all)),e.filtered=Object(Ne["a"])(tt.updateByEmail(t,e.filtered)),e.searched=Object(Ne["a"])(tt.updateByEmail(t,e.searched))}},lt={namespaced:!0,state:it,getters:ot,actions:st,mutations:ct},ut=function(e){function t(e,r){var n;return Object(Me["a"])(this,t),n=Object(Ve["a"])(this,Object(We["a"])(t).call(this)),Array.isArray(e)&&(e=n.formatPayloadFromgAPI(e)),n.rowNumber=r+2,n.id=e.id||n.id,n.firstname=e.firstname||n.firstname,n.lastname=e.lastname||n.lastname,n.email=e.email||n.email,n.role=e.role||n.role,n.district=e.district||n.district,n.city=e.city||n.city,n.status=e.status||n.status,n.partnership=e.partnership||n.partnership,n.soc=e.soc||n.soc,n}return Object(Ye["a"])(t,e),Object(Be["a"])(t,[{key:"formatPayloadFromgAPI",value:function(e){var t={};return t.id=this.generateId(),t.firstname=e[4],t.lastname=e[3],t.email=e[5],t.district=e[0],t.city=e[1],t.role=e[2],t.status=e[9],t.partnership=e[8],t.soc=e[12],t}}]),t}(Je),dt=ut,mt="0",pt="DIUT ∕ CdpF ∕ partenaires!A",ft="".concat(pt,"2:T"),vt={all:[],filtered:[],searched:[]},ht={getByEmail:function(e){return function(t){return e.all.find((function(e){return e.email===t}))}}},bt={fetchCoworkers:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.abrupt("return",r.sheets.spreadsheets.values.get({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:ft}).then((function(e){n("fetchCoworkers",e.result.values)})));case 2:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),updateCoworker:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.gclient,i=r.payload,o=a.sheets.newValueRange(),o.values=[tt.objectToArray(i)],e.abrupt("return",a.sheets.spreadsheets.values.update({valueRange:o,spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:pt+i.rowNumber}).then((function(){n("updateCoworker",i)})));case 5:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),addCoworker:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o,s,c,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=r.gclient,i=r.payload,o=r.rowNumber,s="RAW",c=pt+o,l=[tt.objectToArray(i)],e.next=7,a.sheets.spreadsheets.values.update({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",range:c,valueInputOption:s,resource:{values:l}});case 7:n("addCoworker",i);case 8:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),addBackgroundToRow:function(){var e=Object(Le["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,i,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r.gclient,a=r.rowNumber,i=r.color,o=[{repeatCell:{range:{sheetId:mt,startRowIndex:a-1,endRowIndex:a},cell:{userEnteredFormat:{backgroundColor:i}},fields:"userEnteredFormat(backgroundColor)"}}],e.next=4,n.sheets.spreadsheets.batchUpdate({spreadsheetId:"13FaWw0VqIyGuRoJur41ovYxAqWXdMBVsfvp5CLwIZSg",requests:o});case 4:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}()},gt={fetchCoworkers:function(e,t){e.all=t.map((function(e,t){return new dt(e,t)})),e.filtered=e.all,e.searched=e.filtered},addCoworker:function(e,t){e.all.push(t)}},wt={namespaced:!0,state:vt,getters:ht,actions:bt,mutations:gt},yt={logged:!1},_t={},Ot={},jt={logged:function(e,t){e.logged=t}},kt={namespaced:!0,state:yt,getters:_t,actions:Ot,mutations:jt};n["a"].use(f["a"]);var $t=["trainers","coworkers"],Ct=["DROM","Auvergne-Rhône-Alpes","Bourgogne-Franche-Comté","Bretagne","Centre-Val de Loire","Corse","Grand Est","Hauts-de-France","Île-de-France","Normandie","Nouvelle-Aquitaine","Occitanie","Pays de la Loire","Provence-Alpes-Côte d'Azur"],Pt=new f["a"].Store({state:{activeList:$t[0],districts:Ct,activeDistrict:"",lastSearch:""},mutations:{switchList:function(e,t){if(!$t.includes(t))throw new Error("The passed list does not exist. Possible lists are : trainers, coworkers.");e.activeList=t;var r=e[e.activeList];r.filtered=tt.filterBy(e.activeDistrict,r.all,"district"),r.searched=tt.filterAll(e.lastSearch,r.filtered)},toggleDistricts:function(e,t){var r=e[e.activeList];if(!Ct.includes(t))throw new Error("The passed district does not exist.");t===e.activeDistrict?e.activeDistrict="":e.activeDistrict=t,r.filtered=tt.filterBy(e.activeDistrict,r.all,"district"),r.searched=tt.filterAll(e.lastSearch,r.filtered)},search:function(e,t){var r=e[e.activeList],n=tt.sanitizeString(t);e.lastSearch=n,r.searched=""!==n?tt.filterAll(n,r.filtered):r.filtered}},modules:{trainers:lt,coworkers:wt,me:kt},strict:!0}),St=(r("6b54"),r("c5f6"),r("7cdf"),{400:"Votre requête est mal formatée",401:"Vous devez vous (re)connecter pour accéder au contenu",403:"Vous n'êtes pas autorisé à accéder à ce contenu et/ou effectuer cette action",404:"Impossible de trouver ce que vous demandez",500:"Une erreur technique est survenue, la loose..."}),xt=function(){function e(){Object(Me["a"])(this,e)}return Object(Be["a"])(e,[{key:"install",value:function(e){this.errorMessageFormater(e)}},{key:"errorMessageFormater",value:function(e){e.prototype.$getErrorMessageFromCode=function(e){var t=parseInt(e);if(!Number.isInteger(t))throw new Error("You must pass an Interget",t);if(!Object.prototype.hasOwnProperty.call(St,t))throw new Error("The status code passed is not implemented",t);return St[t]},e.prototype.$getErrorMessage=function(e){var t="string"===typeof e.toString(),r=Object.prototype.hasOwnProperty.call(e,"message");if(!t&&!r)throw new Error("You must pass an Error object with a toString method or either a message property",e);return t?e.toString():e.message}}}]),e}(),It=new xt;function Et(e){return e&&"0"!=e?"Autorisation SOC activée":"Autorisation SOC désactivée"}function At(e){return e&&"0"!=e?"Accès à Simplonline actif":"Accès à Simplonline inactif"}r("f59c"),r("e40d");var Tt={apiKey:"AIzaSyB_DYco3jrsBCYpf3n_C_yknBhIMbf1Iy0",clientId:"820524236965-qn567pqdgv7rp2q3tu3fima0fmnr551m.apps.googleusercontent.com",scope:"https://www.googleapis.com/auth/spreadsheets",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"]};n["a"].config.productionTip=!1,n["a"].use(a["a"],Tt),n["a"].use(o.a,{messageOptions:{timeout:8e3,important:!1,pauseOnInteract:!0}}),n["a"].use(c.a,{"is-full-page":!0,color:"#ce0033"}),n["a"].use(u.a),n["a"].use(It),n["a"].filter("isSOCAccountActive",Et),n["a"].filter("hasSimplonline",At);var Ft=new n["a"]({store:Pt,render:function(e){return e(Re)}}).$mount("#app");window.Cypress&&(window.app=Ft)},"5fbb":function(e,t,r){"use strict";var n=r("bcb3"),a=r.n(n);a.a},"6b7f":function(e,t,r){"use strict";var n=r("9a82"),a=r.n(n);a.a},"78c9":function(e,t,r){"use strict";var n=r("8098"),a=r.n(n);a.a},"7a74":function(e,t,r){},8098:function(e,t,r){},"9a82":function(e,t,r){},"9fc6":function(e,t,r){},ab7a:function(e,t,r){"use strict";var n=r("1246"),a=r.n(n);a.a},bcb3:function(e,t,r){},cf25:function(e,t,r){"use strict";var n=r("56cc"),a=r.n(n);a.a},d683:function(e,t,r){},eecd:function(e,t,r){"use strict";var n=r("9fc6"),a=r.n(n);a.a},f7a8:function(e,t,r){"use strict";var n=r("05b8"),a=r.n(n);a.a},fc33:function(e,t,r){"use strict";var n=r("7a74"),a=r.n(n);a.a}});
//# sourceMappingURL=app.96fea080.js.map