(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{711:function(e,a){e.exports=function(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}},715:function(e,a,t){"use strict";var r=t(7),n=t(20),s=t(1),c=t.n(s),l=t(6),o=t.n(l),u=t(39),i=t.n(u),m=t(710),f={tag:m.p,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.color,l=e.body,o=e.inverse,u=e.outline,f=e.tag,d=e.innerRef,b=Object(n.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(m.l)(i()(a,"card",!!o&&"text-white",!!l&&"card-body",!!s&&(u?"border":"bg")+"-"+s),t);return c.a.createElement(f,Object(r.a)({},b,{className:p,ref:d}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},716:function(e,a,t){"use strict";var r=t(7),n=t(20),s=t(1),c=t.n(s),l=t(6),o=t.n(l),u=t(39),i=t.n(u),m=t(710),f={tag:m.p,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},d=function(e){var a=e.className,t=e.cssModule,s=e.innerRef,l=e.tag,o=Object(n.a)(e,["className","cssModule","innerRef","tag"]),u=Object(m.l)(i()(a,"card-body"),t);return c.a.createElement(l,Object(r.a)({},o,{className:u,ref:s}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},717:function(e,a,t){"use strict";var r=t(7),n=t(20),s=t(1),c=t.n(s),l=t(6),o=t.n(l),u=t(39),i=t.n(u),m=t(710),f={tag:m.p,noGutters:o.a.bool,className:o.a.string,cssModule:o.a.object,form:o.a.bool},d=function(e){var a=e.className,t=e.cssModule,s=e.noGutters,l=e.tag,o=e.form,u=Object(n.a)(e,["className","cssModule","noGutters","tag","form"]),f=Object(m.l)(i()(a,s?"no-gutters":null,o?"form-row":"row"),t);return c.a.createElement(l,Object(r.a)({},u,{className:f}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},718:function(e,a,t){"use strict";var r=t(7),n=t(20),s=t(711),c=t.n(s),l=t(1),o=t.n(l),u=t(6),i=t.n(u),m=t(39),f=t.n(m),d=t(710),b=i.a.oneOfType([i.a.number,i.a.string]),p=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:b,offset:b})]),g={tag:d.p,xs:p,sm:p,md:p,lg:p,xl:p,className:i.a.string,cssModule:i.a.object,widths:i.a.array},E={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},j=function(e){var a=e.className,t=e.cssModule,s=e.widths,l=e.tag,u=Object(n.a)(e,["className","cssModule","widths","tag"]),i=[];s.forEach(function(a,r){var n=e[a];if(delete u[a],n||""===n){var s=!r;if(c()(n)){var l,o=s?"-":"-"+a+"-",m=v(s,a,n.size);i.push(Object(d.l)(f()(((l={})[m]=n.size||""===n.size,l["order"+o+n.order]=n.order||0===n.order,l["offset"+o+n.offset]=n.offset||0===n.offset,l)),t))}else{var b=v(s,a,n);i.push(b)}}}),i.length||i.push("col");var m=Object(d.l)(f()(a,i),t);return o.a.createElement(l,Object(r.a)({},u,{className:m}))};j.propTypes=g,j.defaultProps=E,a.a=j},719:function(e,a,t){"use strict";var r=t(7),n=t(20),s=t(1),c=t.n(s),l=t(6),o=t.n(l),u=t(39),i=t.n(u),m=t(710),f={tag:m.p,className:o.a.string,cssModule:o.a.object},d=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=Object(n.a)(e,["className","cssModule","tag"]),o=Object(m.l)(i()(a,"card-header"),t);return c.a.createElement(s,Object(r.a)({},l,{className:o}))};d.propTypes=f,d.defaultProps={tag:"div"},a.a=d},995:function(e,a,t){"use strict";t.r(a);var r=t(60),n=t(61),s=t(63),c=t(62),l=t(64),o=t(1),u=t.n(o),i=t(717),m=t(718),f=t(715),d=t(719),b=t(716),p=t(983),g=t(982),E=function(e){function a(){return Object(r.a)(this,a),Object(s.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(i.a,null,u.a.createElement(m.a,{xs:"12"},u.a.createElement(f.a,null,u.a.createElement(d.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Breadcrumbs"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/breadcrumbs/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(b.a,null,u.a.createElement(p.a,null,u.a.createElement(g.a,{active:!0},"Home")),u.a.createElement(p.a,null,u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(g.a,{active:!0},"Library")),u.a.createElement(p.a,null,u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Home")),u.a.createElement(g.a,null,u.a.createElement("a",{href:"#"},"Library")),u.a.createElement(g.a,{active:!0},"Data")),u.a.createElement(p.a,{tag:"nav"},u.a.createElement(g.a,{tag:"a",href:"#"},"Home"),u.a.createElement(g.a,{tag:"a",href:"#"},"Library"),u.a.createElement(g.a,{tag:"a",href:"#"},"Data"),u.a.createElement(g.a,{active:!0,tag:"span"},"Bootstrap")))))))}}]),a}(o.Component);a.default=E}}]);
//# sourceMappingURL=40.230b7761.chunk.js.map