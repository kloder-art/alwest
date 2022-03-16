"use strict";(self.webpackChunkalwest=self.webpackChunkalwest||[]).push([[38],{1046:function(e,t,r){r.d(t,{w_:function(){return m}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function o(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),o(e.child))}))}function m(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),o(e.child))}}function u(e){var t=function(t){var r,a=e.attr,l=e.size,o=e.title,m=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,m,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),o&&n.createElement("title",null,o),e.children)};return void 0!==l?n.createElement(l.Consumer,null,(function(e){return t(e)})):t(a)}},5046:function(e,t,r){r.d(t,{h:function(){return o}});var n=r(7294),a=r(3201),l=function(e){var t=e.href,r=void 0===t?"":t,a=e.label,l=void 0===a?"":a,i=e.icon;return n.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",title:l},i||l)},i=r(9).default.ul.withConfig({displayName:"StyledMeta",componentId:"sc-1rx4qce-0"})(["display:flex;list-style:none;margin:8px 0;li{margin-right:0.5rem;}"]),c=function(e){var t=e.children;return n.createElement("li",null,t)},o=function(e){var t,r=e.frontmatter;return n.createElement(i,null,r.year&&n.createElement(c,{key:"year"},r.year),r.runtime&&n.createElement(c,{key:"runtime"},(t=r.runtime)>60?Math.floor(t/60)+"h. "+t%60+"m.":t+"m"),r.imdb&&n.createElement(c,{key:"imdb"},n.createElement(l,{label:"IMDB",icon:n.createElement(a.rM6,{size:22}),href:r.imdb})),r.justwatch&&n.createElement(c,{key:"justwatch"},n.createElement(l,{label:"JustWatch",icon:n.createElement(a.dSq,{size:22}),href:r.justwatch})),r.spotify&&n.createElement(c,{key:"spotify"},n.createElement(l,{label:"BSO",icon:n.createElement(a.HcQ,{size:22}),href:r.spotify})),r.wikipedia&&n.createElement(c,{key:"wikipedia"},n.createElement(l,{label:"Wikipedia",icon:n.createElement(a.g1I,null),href:r.wikipedia})),r.recaudation&&n.createElement(c,{key:"recaudation"},r.recaudation.toLocaleString()),r.born&&n.createElement(c,{key:"born"},r.born))}},9694:function(e,t,r){r.d(t,{L:function(){return u}});var n=r(7294),a=r(9),l=r(1597),i=r(396),c=a.default.div.withConfig({displayName:"FilmItem__StyledFilmItem",componentId:"sc-g6zs3q-0"})(["border-radius:0.5rem;overflow:hidden;height:230px;"]),o=function(e){var t=e.id,r=e.title,a=e.poster;return n.createElement(c,null,n.createElement(l.Link,{to:"/film/"+t},n.createElement(i.G,{image:a.childImageSharp.gatsbyImageData,objectFit:"cover",objectPosition:"50% 50%",alt:'"'+r+'" Poster'})))},m=a.default.div.withConfig({displayName:"Films__StyledFilms",componentId:"sc-21w8bp-0"})(["display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));grid-gap:1rem;justify-items:center;align-items:center;justify-content:space-between;margin-bottom:1rem;"]),u=function(e){var t=e.items;return n.createElement(m,null,t.filter((function(e){return!!e})).map((function(e){return n.createElement(o,Object.assign({},e.frontmatter,{key:e.frontmatter.id}))})))}},3246:function(e,t,r){r.r(t);var n=r(7294),a=r(396),l=r(5393),i=r(9694),c=r(891),o=r(280),m=r(5046),u=r(6076);t.default=function(e){var t=e.data.file.childMarkdownRemark,r=t.frontmatter,s=t.html;return n.createElement(l.A,null,n.createElement(o.H,{title:r.name}),n.createElement(u.W,null,n.createElement("h2",{style:{marginBottom:0}},r.name),n.createElement(m.h,{frontmatter:r}),n.createElement(a.G,{image:r.picture.childImageSharp.gatsbyImageData,objectFit:"cover",objectPosition:"50% 50%",alt:r.name,style:{marginBottom:"1rem"}}),n.createElement("div",{dangerouslySetInnerHTML:{__html:s}})),r.director&&r.director.length>0&&n.createElement(u.W,null,n.createElement("h3",null,"Director in"),n.createElement(i.L,{items:r.director})),r.actor&&r.actor.length>0&&n.createElement(u.W,null,n.createElement("h3",null,"Actor in"),n.createElement(i.L,{items:r.actor})),r.locations&&r.locations.length>0&&n.createElement(n.Fragment,null,n.createElement(u.W,null,n.createElement("h3",null,"Locations")),n.createElement(c.Y,{markers:r.locations})))}}}]);
//# sourceMappingURL=component---src-templates-staff-tsx-14b53ee22be2d4ebfba3.js.map