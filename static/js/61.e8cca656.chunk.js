(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1196:function(e,t,n){"use strict";n.r(t);var a=n(219),r=n(63),i=n(64),o=n(67),u=n(65),c=n(66),m=n(1),_=n.n(m),A=n(883),s=n(752),l=n(753),E=n(749),h=n(750),p=n(930),f=n(872),d=n(873),T=n(849),L=n(874),y=n(756),D=n(875),O=n(68),F=n(62),b=n(713),G=function(e){function t(){var e,n;Object(r.a)(this,t);for(var i=arguments.length,c=new Array(i),m=0;m<i;m++)c[m]=arguments[m];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",rePassword:"",userName:""},n.handleSubmit=function(e){e.preventDefault(),n.props.signUp(n.state)},n.handleChange=function(e){n.setState(Object(a.a)({},e.target.id,e.target.value))},n}return Object(c.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.uid,t=this.props.auth.authError;return e?_.a.createElement(F.c,{to:"/"}):_.a.createElement("div",{className:"app flex-row align-items-center"},_.a.createElement(A.a,null,_.a.createElement(s.a,{className:"justify-content-center"},_.a.createElement(l.a,{md:"9",lg:"7",xl:"6"},_.a.createElement(E.a,{className:"mx-4"},_.a.createElement(h.a,{className:"p-4"},_.a.createElement(p.a,null,_.a.createElement("h1",null,"Register"),_.a.createElement("p",{className:"text-muted"},"Create your account"),_.a.createElement(f.a,{className:"mb-3"},_.a.createElement(d.a,{addonType:"prepend"},_.a.createElement(T.a,null,_.a.createElement("i",{className:"icon-user"}))),_.a.createElement(L.a,{type:"text",placeholder:"UserName",autoComplete:"username",onChange:this.handleChange,id:"userName"})),_.a.createElement(f.a,{className:"mb-3"},_.a.createElement(d.a,{addonType:"prepend"},_.a.createElement(T.a,null,"@")),_.a.createElement(L.a,{type:"text",placeholder:"Email",autoComplete:"email",onChange:this.handleChange,id:"email"})),_.a.createElement(f.a,{className:"mb-3"},_.a.createElement(d.a,{addonType:"prepend"},_.a.createElement(T.a,null,_.a.createElement("i",{className:"icon-lock"}))),_.a.createElement(L.a,{type:"password",placeholder:"Password",autoComplete:"new-password",onChange:this.handleChange,id:"password"})),_.a.createElement(f.a,{className:"mb-4"},_.a.createElement(d.a,{addonType:"prepend"},_.a.createElement(T.a,null,_.a.createElement("i",{className:"icon-lock"}))),_.a.createElement(L.a,{type:"password",placeholder:"Repeat password",autoComplete:"new-password",onChange:this.handleChange,id:"rePassword"})),_.a.createElement(y.a,{color:"success",block:!0,onClick:this.handleSubmit},"Create Account"))),_.a.createElement(D.a,{className:"p-4"},_.a.createElement(s.a,null,_.a.createElement("div",{className:"text-warning text-center"},t))))))))}}]),t}(m.Component);t.default=Object(O.b)(function(e,t){return{auth:e.auth,uid:e.firebase.auth.uid}},function(e,t){return{signUp:function(t){e(Object(b.A)(t))}}})(G)},713:function(e,t,n){"use strict";n.d(t,"y",function(){return r}),n.d(t,"z",function(){return i}),n.d(t,"A",function(){return o}),n.d(t,"a",function(){return u}),n.d(t,"i",function(){return c}),n.d(t,"s",function(){return m}),n.d(t,"f",function(){return _}),n.d(t,"B",function(){return A}),n.d(t,"g",function(){return s}),n.d(t,"C",function(){return l}),n.d(t,"h",function(){return E}),n.d(t,"r",function(){return h}),n.d(t,"w",function(){return p}),n.d(t,"v",function(){return f}),n.d(t,"q",function(){return d}),n.d(t,"p",function(){return T}),n.d(t,"o",function(){return L}),n.d(t,"n",function(){return y}),n.d(t,"m",function(){return D}),n.d(t,"l",function(){return O}),n.d(t,"e",function(){return F}),n.d(t,"d",function(){return b}),n.d(t,"c",function(){return G}),n.d(t,"b",function(){return I}),n.d(t,"j",function(){return N}),n.d(t,"t",function(){return S}),n.d(t,"k",function(){return C}),n.d(t,"u",function(){return g}),n.d(t,"x",function(){return w});var a=n(9),r=function(e){return function(t){a.a.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOGIN_SUCCESS"})}).catch(function(e){t({type:"LOGIN_ERROR",err:e})})}},i=function(){return function(e,t,n){(0,n.getFirebase)().auth().signOut().then(function(){e({type:"SIGN_OUT_SUCCESS"})}).catch(function(t){e({type:"SIGN_OUT_ERROR",err:t})})}},o=function(e){var t={message:""};return t.message="Password not match",function(n){e.password!==e.rePassword?n({type:"SIGNUP_ERROR",err:t}):a.a.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return a.a.collection("users").doc(t.user.uid).set({firstName:e.nameUser,lastName:"",initials:e.firstName[0]+e.lastName[0]})}).then(function(){n({type:"SIGNUP_SUCCESS"})}).catch(function(e){n({type:"SIGNUP_ERROR",err:e})})}},u=function(e){return function(t,n){switch(e){case"HoChiMinh_Quattro":case"HoChiMinh_Viper":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Traceability":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"nhan.nguyen@omron.com"===n().firebase.auth.email||"hoa.nguyen@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_MobileRobot":"tinh.le@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Vibration":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HoChiMinh_Cobot":"tinh.le@omron.com"===n().firebase.auth.email||"tuyen.tieu@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_AnyFeeder":case"HaNoi_Viper":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_Traceability":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;case"HaNoi_MobileRobot":case"HaNoi_Vibration":case"HaNoi_Cobot":"tinh.le@omron.com"===n().firebase.auth.email||"tran.binh@omron.com"===n().firebase.auth.email||"cam.hoang@omron.com"===n().firebase.auth.email||"tuan.hoang-manh@omron.com"===n().firebase.auth.email||"duc.vu@omron.com"===n().firebase.auth.email||"do.tran@omron.com"===n().firebase.auth.email?(t({type:"CHANGE_ID_ADMIN_1"}),t({type:"OFF_ALL_STATE"})):(t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"}));break;default:t({type:"CHANGE_ID_ADMIN_0"}),t({type:"OFF_ALL_STATE"})}}},c=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_PANEL"}))}},m=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_PANEL"}))}},_=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_IMAGE"}))}},A=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_IMAGE"}))}},s=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LABEL"}))}},l=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LABEL"}))}},E=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_LINE"}))}},h=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_LINE"}))}},p=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDDISPLAY"}))}},f=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_WORDADJUST"}))}},d=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDDISPLAY"}))}},T=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_DWORDADJUST"}))}},L=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITDISPLAY"}))}},y=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_BITADJUST"}))}},D=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDDISPLAY"}))}},O=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_WORDADJUST"}))}},F=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDDISPLAY"}))}},b=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_DWORDADJUST"}))}},G=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITDISPLAY"}))}},I=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_BITADJUST"}))}},N=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD"}))}},S=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD"}))}},C=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_ADD_TEXT_FIELD_INPUT"}))}},g=function(){return function(e,t){"1"===t().auth.idAdmin&&(e({type:"OFF_ALL_STATE"}),e({type:"TOGGLE_EDIT_TEXT_FIELD_INPUT"}))}},w=function(){return function(e,t){"1"===t().auth.idAdmin&&e({type:"OFF_ALL_STATE"})}}}}]);
//# sourceMappingURL=61.e8cca656.chunk.js.map