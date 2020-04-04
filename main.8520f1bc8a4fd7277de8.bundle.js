!function(e){function t(t){for(var n,o,i=t[0],c=t[1],s=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(u&&u(t);d.length;)d.shift()();return l.push.apply(l,s||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={0:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=c;l.push([205,1]),a()}({205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a(113),i=a.n(o),c=a(229),s=a(72),u=a.n(s),p={dark:"#424242",purple:"#71368A",golden:"#FFD700",red:"#cc2b1d",blue:"#6236FF",white:"#FFFFFF",darkGreen:"#327d4a",gray:"#A8A8A8",grayLight:"#fafafa",navy:"#004c6d",green:"#42f54e",orange:"#F28F3B",black:"#000000",dark_navy:"#022F59",yellow:"#FFD000"},d={palette:{type:"light",primary:{main:p.dark},secondary:{main:p.purple}},typography:{body2:{fontSize:"0.75rem"}}},f=a(30),m=a.n(f),h=a(51),y=a.n(h),g=a(225),v=a(231),x=a(211),b=a(112),E=a.n(b),w=(a(79),a(97),a(98),a(3)),F=a.n(w),N=a(230),O=a(228),S=a(226),j=a(227),k=a(110),D=a.n(k),B=m()((function(e){return{root:{width:"100%",padding:"10px 5px"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary},searchTitle:{padding:"28px 5px"},authors:{display:"flex",flexDirection:"row",flexWrap:"wrap",paddingBottom:"16px"},expansionDetails:{display:"flex",flexDirection:"column"}}}));function P(e){var t=B(),a=r.a.useState(!1),n=y()(a,2),l=n[0],o=n[1];return r.a.createElement("div",{className:t.root},e.response.hits.map((function(e,a){return r.a.createElement(N.a,{key:a,expanded:l===a,onChange:(n=a,function(e,t){o(!!t&&n)})},r.a.createElement(S.a,{expandIcon:r.a.createElement(D.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},r.a.createElement(j.a,{className:t.heading,variant:"h4"},""===e.title?"No Title":e.title),r.a.createElement(j.a,{className:t.secondaryHeading},e.sentence)),r.a.createElement(O.a,{className:t.expansionDetails},r.a.createElement("div",{className:t.authors},e.authors.map((function(t,a){return r.a.createElement(j.a,{variant:"body2",key:a,display:"initial"},t.first," ",t.last,a===e.authors.length-1?null:",","  ")}))),r.a.createElement("div",null,r.a.createElement(j.a,{variant:"body1"},e.paragraph.text),r.a.createElement(j.a,{variant:"overline",style:{fontSize:13,fontWeight:"bold"}},"Cosine Distance: ",Number(e.distance.toFixed(4))))));var n})))}P.propTypes={response:F.a.object};var T=a(111),_=a.n(T);var A=m()((function(e){return{root:{padding:"2px 4px",width:"100%"},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4},searchBar:{width:"100%",display:"flex",alignItems:"center"}}}));function I(){var e=A(),t=r.a.useState(null),a=y()(t,2),n=a[0],l=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(g.a,{component:"form",className:e.searchBar},r.a.createElement(v.a,{className:e.input,placeholder:"Enter sentence to search",onChange:function(e){var t;(t=e.target.value,_()({url:"temp",method:"post",data:t})).then((function(e){l(e.data)}))}}),r.a.createElement(x.a,{className:e.iconButton,"aria-label":"search"},r.a.createElement(E.a,null))),null!==n&&r.a.createElement(P,{className:e.resultShow,response:n}))}var z=m()((function(){return{root:{padding:"32px 22px",display:"flex",flexDirection:"column",alignItems:"center"}}}));var C=function(){var e=z();return r.a.createElement("div",{className:e.root},r.a.createElement("h1",null,"CORD-19-ANN"),r.a.createElement("h3",{align:"left"},"Enter a sentence to query the nmslib search index. Results include the title of the journal and the sentence that was found ordered by similarity. If expanded the authors and the paragraph containing the sentence are shown."),r.a.createElement(I,null))};var M=function(){return r.a.createElement(i.a,{theme:u()(d)},r.a.createElement(c.a,null),r.a.createElement(C,null))};Object(l.render)(r.a.createElement(M,null),document.getElementById("root"))}});