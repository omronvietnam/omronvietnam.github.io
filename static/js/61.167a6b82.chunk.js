(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1485:function(e,t,n){"use strict";n.r(t);var a=n(219),i=n(63),r=n(64),o=n(66),u=n(65),c=n(67),m=n(1),_=n.n(m),A=n(223),E=n(919),l=n(756),f=n(757),s=n(1137),h=n(753),T=n(754),d=n(1013),p=n(899),L=n(900),y=n(863),D=n(901),O=n(760),F=n(62),b=n(713),I=n(68),G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,c=new Array(r),m=0;m<r;m++)c[m]=arguments[m];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",checked:!1},n.handleSubmit=function(e){e.preventDefault(),n.props.signIn(n.state)},n.handleChange=function(e){n.setState(Object(a.a)({},e.target.id,e.target.value))},n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.auth.authError;return this.props.uid?_.a.createElement(F.c,{to:"/"}):_.a.createElement("div",{className:"app flex-row align-items-center"},_.a.createElement(E.a,null,_.a.createElement(l.a,{className:"justify-content-center"},_.a.createElement(f.a,{md:"8"},_.a.createElement(s.a,null,_.a.createElement(h.a,{className:"p-4"},_.a.createElement(T.a,null,_.a.createElement(d.a,null,_.a.createElement("h1",null,"Login"),_.a.createElement("p",{className:"text-muted"},"Sign In to your account"),_.a.createElement(p.a,{className:"mb-3"},_.a.createElement(L.a,{addonType:"prepend"},_.a.createElement(y.a,null,_.a.createElement("i",{className:"icon-user"}))),_.a.createElement(D.a,{type:"text",placeholder:"Email",autoComplete:"username",onChange:this.handleChange,id:"email"})),_.a.createElement(p.a,{className:"mb-4"},_.a.createElement(L.a,{addonType:"prepend"},_.a.createElement(y.a,null,_.a.createElement("i",{className:"icon-lock"}))),_.a.createElement(D.a,{type:"password",placeholder:"Password",autoComplete:"current-password",onChange:this.handleChange,id:"password"})),_.a.createElement(l.a,null,_.a.createElement(f.a,{xs:"6"},_.a.createElement(O.a,{color:"primary",className:"px-4",onClick:this.handleSubmit},"Login"))),_.a.createElement("div",{className:"text-warning text-center"},e)))),_.a.createElement(h.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},_.a.createElement(T.a,{className:"text-center"},_.a.createElement("div",null,_.a.createElement("h2",null,"Sign up"),_.a.createElement(A.Link,{to:"/register"},_.a.createElement(O.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!"))))))))))}}]),t}(m.Component);t.default=Object(I.b)(function(e,t){return{auth:e.auth,uid:e.firebase.auth.uid}},function(e,t){return{signIn:function(t){e(Object(b.y)(t))}}})(G)},713:function(e,t,n){"use strict";n.d(t,"y",function(){return i}),n.d(t,"z",function(){return r}),n.d(t,"A",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"i",function(){return c}),n.d(t,"s",function(){return m}),n.d(t,"f",function(){return _}),n.d(t,"B",function(){return A}),n.d(t,"g",function(){return E}),n.d(t,"C",function(){return l}),n.d(t,"h",function(){return f}),n.d(t,"r",function(){return s}),n.d(t,"w",function(){return h}),n.d(t,"v",function(){return T}),n.d(t,"q",function(){return d}),n.d(t,"p",function(){return p}),n.d(t,"o",function(){return L}),n.d(t,"n",function(){return y}),n.d(t,"m",function(){return D}),n.d(t,"l",function(){return O}),n.d(t,"e",function(){return F}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return I}),n.d(t,"b",function(){return G}),n.d(t,"j",function(){return S}),n.d(t,"t",function(){return N}),n.d(t,"k",function(){return C}),n.d(t,"u",function(){return g}),n.d(t,"x",function(){return H});var a=n(9),i=function(e){return function(t){a.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}},r=function(){return function(e,t,n){(0,n.getFirebase)().auth().signOut().then(function(){e({type:"SIGN_OUT_SUCCESS"})}).catch(function(t){e({type:"SIGN_OUT_ERROR",err:t})})}},o=function(e){var t={message:""};return t.message="Password not match",function(n){e.password!==e.rePassword?n({type:"SIGNUP_ERROR",err:t}):a.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return a.a.collection("users").doc(t.user.uid).set({firstName:e.nameUser,lastName:"",initials:e.firstName[0]+e.lastName[0]})}).then(function(){n({type:"SIGNUP_SUCCESS"})}).catch(function(e){n({type:"SIGNUP_ERROR",err:e})})}},u=function(e){return function(t,n){switch(e){case"HoChiMinh_Quattro":case"HoChiMinh_Viper":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Traceability":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"nhan.nguyen@omron.com"===n().firebase.auth.email||"hoa.nguyen@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_MobileRobot":"tinh.le@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Vibration":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Cobot":"tinh.le@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_AnyFeeder":case"HaNoi_Viper":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_Traceability":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_MobileRobot":case"HaNoi_Vibration":case"HaNoi_Cobot":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;default:t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"})}}},c=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_PANEL"}))}},m=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_PANEL"}))}},_=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_IMAGE"}))}},A=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_IMAGE"}))}},E=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LABEL"}))}},l=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LABEL"}))}},f=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LINE"}))}},s=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LINE"}))}},h=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDDISPLAY"}))}},T=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDADJUST"}))}},d=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDDISPLAY"}))}},p=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDADJUST"}))}},L=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITDISPLAY"}))}},y=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITADJUST"}))}},D=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDDISPLAY"}))}},O=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDADJUST"}))}},F=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDDISPLAY"}))}},b=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDADJUST"}))}},I=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITDISPLAY"}))}},G=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITADJUST"}))}},S=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD"}))}},N=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD"}))}},C=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD_INPUT"}))}},g=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD_INPUT"}))}},H=function(){return function(e,t){"1"===t().auth.idAdmin&&e({type:"OFF_ALL_STATE"})}}}}]);
//# sourceMappingURL=61.167a6b82.chunk.js.map