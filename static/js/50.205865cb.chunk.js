(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{1038:function(e,a,t){"use strict";t.r(a);var c=t(63),n=t(64),s=t(67),l=t(65),i=t(217),r=t(66),o=t(1),u=t.n(o),m=t(878),b=t(736),v=t(737),d=t(1006),f=t(1003),p=t(1004),E=t(877),g=t(1005),h=t(41),T=t.n(h),N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(l.a)(a).call(this,e))).toggle=t.toggle.bind(Object(i.a)(t)),t.state={activeTab:new Array(4).fill("1")},t}return Object(r.a)(a,e),Object(n.a)(a,[{key:"lorem",value:function(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."}},{key:"toggle",value:function(e,a){var t=this.state.activeTab.slice();t[e]=a,this.setState({activeTab:t})}},{key:"tabPane",value:function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(m.a,{tabId:"1"},"1. ".concat(this.lorem())),u.a.createElement(m.a,{tabId:"2"},"2. ".concat(this.lorem())),u.a.createElement(m.a,{tabId:"3"},"3. ".concat(this.lorem())))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(b.a,null,u.a.createElement(v.a,{xs:"12",md:"6",className:"mb-4"},u.a.createElement(d.a,{tabs:!0},u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1")}},"Home")),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2")}},"Profile")),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"3"===this.state.activeTab[0],onClick:function(){e.toggle(0,"3")}},"Messages"))),u.a.createElement(E.a,{activeTab:this.state.activeTab[0]},this.tabPane())),u.a.createElement(v.a,{xs:"12",md:"6",className:"mb-4"},u.a.createElement(d.a,{tabs:!0},u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"1"===this.state.activeTab[1],onClick:function(){e.toggle(1,"1")}},u.a.createElement("i",{className:"icon-calculator"}))),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"2"===this.state.activeTab[1],onClick:function(){e.toggle(1,"2")}},u.a.createElement("i",{className:"icon-basket-loaded"}))),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"3"===this.state.activeTab[1],onClick:function(){e.toggle(1,"3")}},u.a.createElement("i",{className:"icon-pie-chart"})))),u.a.createElement(E.a,{activeTab:this.state.activeTab[1]},this.tabPane())),u.a.createElement(v.a,{xs:"12",md:"6",className:"mb-4"},u.a.createElement(d.a,{tabs:!0},u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"1"===this.state.activeTab[2],onClick:function(){e.toggle(2,"1")}},u.a.createElement("i",{className:"icon-calculator"})," ",u.a.createElement("span",{className:"1"===this.state.activeTab[2]?"":"d-none"}," Calculator"))),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"2"===this.state.activeTab[2],onClick:function(){e.toggle(2,"2")}},u.a.createElement("i",{className:"icon-basket-loaded"})," ",u.a.createElement("span",{className:"2"===this.state.activeTab[2]?"":"d-none"}," Shopping cart"))),u.a.createElement(f.a,null,u.a.createElement(p.a,{className:T()({active:"3"===this.state.activeTab[2]}),onClick:function(){e.toggle(2,"3")}},u.a.createElement("i",{className:"icon-pie-chart"})," ",u.a.createElement("span",{className:"3"===this.state.activeTab[2]?"":"d-none"}," Charts")))),u.a.createElement(E.a,{activeTab:this.state.activeTab[2]},this.tabPane())),u.a.createElement(v.a,{xs:"12",md:"6",className:"mb-4"},u.a.createElement(d.a,{tabs:!0},u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"1"===this.state.activeTab[3],onClick:function(){e.toggle(3,"1")}},u.a.createElement("i",{className:"icon-calculator"}),u.a.createElement("span",{className:"1"===this.state.activeTab[3]?"":"d-none"}," Calc"),"\xa0",u.a.createElement(g.a,{color:"success"},"New"))),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"2"===this.state.activeTab[3],onClick:function(){e.toggle(3,"2")}},u.a.createElement("i",{className:"icon-basket-loaded"}),u.a.createElement("span",{className:"2"===this.state.activeTab[3]?"":"d-none"}," Cart"),"\xa0",u.a.createElement(g.a,{pill:!0,color:"danger"},"29"))),u.a.createElement(f.a,null,u.a.createElement(p.a,{active:"3"===this.state.activeTab[3],onClick:function(){e.toggle(3,"3")}},u.a.createElement("i",{className:"icon-pie-chart"}),u.a.createElement("span",{className:"3"===this.state.activeTab[3]?"":"d-none"}," Charts")))),u.a.createElement(E.a,{activeTab:this.state.activeTab[3]},this.tabPane()))))}}]),a}(o.Component);a.default=N},714:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},736:function(e,a,t){"use strict";var c=t(7),n=t(22),s=t(1),l=t.n(s),i=t(6),r=t.n(i),o=t(41),u=t.n(o),m=t(711),b={tag:m.p,noGutters:r.a.bool,className:r.a.string,cssModule:r.a.object,form:r.a.bool},v=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,i=e.tag,r=e.form,o=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),b=Object(m.l)(u()(a,s?"no-gutters":null,r?"form-row":"row"),t);return l.a.createElement(i,Object(c.a)({},o,{className:b}))};v.propTypes=b,v.defaultProps={tag:"div"},a.a=v},737:function(e,a,t){"use strict";var c=t(7),n=t(22),s=t(714),l=t.n(s),i=t(1),r=t.n(i),o=t(6),u=t.n(o),m=t(41),b=t.n(m),v=t(711),d=u.a.oneOfType([u.a.number,u.a.string]),f=u.a.oneOfType([u.a.bool,u.a.number,u.a.string,u.a.shape({size:u.a.oneOfType([u.a.bool,u.a.number,u.a.string]),order:d,offset:d})]),p={tag:v.p,xs:f,sm:f,md:f,lg:f,xl:f,className:u.a.string,cssModule:u.a.object,widths:u.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,s=e.widths,i=e.tag,o=Object(n.a)(e,["className","cssModule","widths","tag"]),u=[];s.forEach(function(a,c){var n=e[a];if(delete o[a],n||""===n){var s=!c;if(l()(n)){var i,r=s?"-":"-"+a+"-",m=g(s,a,n.size);u.push(Object(v.l)(b()(((i={})[m]=n.size||""===n.size,i["order"+r+n.order]=n.order||0===n.order,i["offset"+r+n.offset]=n.offset||0===n.offset,i)),t))}else{var d=g(s,a,n);u.push(d)}}}),u.length||u.push("col");var m=Object(v.l)(b()(a,u),t);return r.a.createElement(i,Object(c.a)({},o,{className:m}))};h.propTypes=p,h.defaultProps=E,a.a=h},843:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var c=t(1),n=t.n(c).a.createContext({})},877:function(e,a,t){"use strict";var c=t(7),n=t(23),s=t(1),l=t.n(s),i=t(224),r=t(6),o=t.n(r),u=t(41),m=t.n(u),b=t(843),v=t(711),d={tag:v.p,activeTab:o.a.any,className:o.a.string,cssModule:o.a.object},f=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(n.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,s=Object(v.m)(this.props,Object.keys(d)),i=Object(v.l)(m()("tab-content",a),t);return l.a.createElement(b.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(n,Object(c.a)({},s,{className:i})))},a}(s.Component);Object(i.polyfill)(f),a.a=f,f.propTypes=d,f.defaultProps={tag:"div"}},878:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var c=t(7),n=t(22),s=t(1),l=t.n(s),i=t(6),r=t.n(i),o=t(41),u=t.n(o),m=t(843),b=t(711),v={tag:b.p,className:r.a.string,cssModule:r.a.object,tabId:r.a.any};function d(e){var a=e.className,t=e.cssModule,s=e.tabId,i=e.tag,r=Object(n.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(b.l)(u()("tab-pane",a,{active:s===e}),t)};return l.a.createElement(m.a.Consumer,null,function(e){var a=e.activeTabId;return l.a.createElement(i,Object(c.a)({},r,{className:o(a)}))})}d.propTypes=v,d.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=50.205865cb.chunk.js.map