"use strict";(self["webpackChunktransmissionic"]=self["webpackChunktransmissionic"]||[]).push([[601],{3601:function(r,t,e){e.r(t),e.d(t,{scopeCss:function(){return N}});var n=function(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;var n=Array(r),s=0;for(t=0;t<e;t++)for(var c=arguments[t],o=0,i=c.length;o<i;o++,s++)n[s]=c[o];return n},s=function(r){var t,e=[],n=0;r=r.replace(/(\[[^\]]*\])/g,(function(r,t){var s="__ph-"+n+"__";return e.push(t),n++,s})),t=r.replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(r,t,s){var c="__ph-"+n+"__";return e.push(s),n++,t+c}));var s={content:t,placeholders:e};return s},c=function(r,t){return t.replace(/__ph-(\d+)__/g,(function(t,e){return r[+e]}))},o="-shadowcsshost",i="-shadowcssslotted",a="-shadowcsscontext",u=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+o+u,"gim"),f=new RegExp("("+a+u,"gim"),p=new RegExp("("+i+u,"gim"),h=o+"-no-combinator",g=/-shadowcsshost-no-combinator([^\s]*)/,v=[/::shadow/g,/::content/g],m="([>\\s~+[.,{:][\\s\\S]*)?$",d=/-shadowcsshost/gim,x=/:host/gim,_=/::slotted/gim,w=/:host-context/gim,b=/\/\*\s*[\s\S]*?\*\//g,S=function(r){return r.replace(b,"")},W=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,k=function(r){return r.match(W)||[]},O=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,j=/([{}])/g,E="{",R="}",C="%BLOCK%",T=function(r,t){var e=L(r),n=0;return e.escapedString.replace(O,(function(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var c=r[2],o="",i=r[4],a="";i&&i.startsWith("{"+C)&&(o=e.blocks[n++],i=i.substring(C.length+1),a="{");var u={selector:c,content:o},l=t(u);return""+r[1]+l.selector+r[3]+a+l.content+i}))},L=function(r){for(var t=r.split(j),e=[],n=[],s=0,c=[],o=0;o<t.length;o++){var i=t[o];i===R&&s--,s>0?c.push(i):(c.length>0&&(n.push(c.join("")),e.push(C),c=[]),e.push(i)),i===E&&s++}c.length>0&&(n.push(c.join("")),e.push(C));var a={escapedString:e.join(""),blocks:n};return a},B=function(r){return r=r.replace(w,a).replace(x,o).replace(_,i),r},I=function(r,t,e){return r.replace(t,(function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(r[2]){for(var n=r[2].split(","),s=[],c=0;c<n.length;c++){var o=n[c].trim();if(!o)break;s.push(e(h,o,r[3]))}return s.join(",")}return h+r[3]}))},K=function(r,t,e){return r+t.replace(o,"")+e},$=function(r){return I(r,l,K)},y=function(r,t,e){return t.indexOf(o)>-1?K(r,t,e):r+t+e+", "+t+" "+r+e},A=function(r,t){var e="."+t+" > ",n=[];return r=r.replace(p,(function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];if(r[2]){for(var s=r[2].trim(),c=r[3],o=e+s+c,i="",a=r[4]-1;a>=0;a--){var u=r[5][a];if("}"===u||","===u)break;i=u+i}var l=i+o,f=""+i.trimRight()+o.trim();if(l.trim()!==f.trim()){var p=f+", "+l;n.push({orgSelector:l,updatedSelector:p})}return o}return h+r[3]})),{selectors:n,cssText:r}},M=function(r){return I(r,f,y)},U=function(r){return v.reduce((function(r,t){return r.replace(t," ")}),r)},q=function(r){var t=/\[/g,e=/\]/g;return r=r.replace(t,"\\[").replace(e,"\\]"),new RegExp("^("+r+")"+m,"m")},z=function(r,t){var e=q(t);return!e.test(r)},D=function(r,t,e){if(d.lastIndex=0,d.test(r)){var n="."+e;return r.replace(g,(function(r,t){return t.replace(/([^:]*)(:*)(.*)/,(function(r,t,e,s){return t+n+e+s}))})).replace(d,n+" ")}return t+" "+r},F=function(r,t,e){var n=/\[is=([^\]]*)\]/g;t=t.replace(n,(function(r){for(var t=[],e=1;e<arguments.length;e++)t[e-1]=arguments[e];return t[0]}));var o="."+t,i=function(r){var n=r.trim();if(!n)return"";if(r.indexOf(h)>-1)n=D(r,t,e);else{var s=r.replace(d,"");if(s.length>0){var c=s.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+o+c[2]+c[3])}}return n},a=s(r);r=a.content;var u,l="",f=0,p=/( |>|\+|~(?!=))\s*/g,g=r.indexOf(h)>-1,v=!g;while(null!==(u=p.exec(r))){var m=u[1],x=r.slice(f,u.index).trim();v=v||x.indexOf(h)>-1;var _=v?i(x):x;l+=_+" "+m+" ",f=p.lastIndex}var w=r.substring(f);return v=v||w.indexOf(h)>-1,l+=v?i(w):w,c(a.placeholders,l)},G=function(r,t,e,n){return r.split(",").map((function(r){return n&&r.indexOf("."+n)>-1?r.trim():z(r,t)?F(r,t,e).trim():r.trim()})).join(", ")},H=function(r,t,e,n,s){return T(r,(function(r){var s=r.selector,c=r.content;"@"!==r.selector[0]?s=G(r.selector,t,e,n):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(c=H(r.content,t,e,n));var o={selector:s.replace(/\s{2,}/g," ").trim(),content:c};return o}))},J=function(r,t,e,n,s){r=B(r),r=$(r),r=M(r);var c=A(r,n);return r=c.cssText,r=U(r),t&&(r=H(r,t,e,n)),r=r.replace(/-shadowcsshost-no-combinator/g,"."+e),r=r.replace(/>\s*\*\s+([^{, ]+)/gm," $1 "),{cssText:r.trim(),slottedSelectors:c.selectors}},N=function(r,t,e){var s=t+"-h",c=t+"-s",o=k(r);r=S(r);var i=[];if(e){var a=function(r){var t="/*!@___"+i.length+"___*/",e="/*!@"+r.selector+"*/";return i.push({placeholder:t,comment:e}),r.selector=t+r.selector,r};r=T(r,(function(r){return"@"!==r.selector[0]?a(r):r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document")?(r.content=T(r.content,a),r):r}))}var u=J(r,t,s,c);return r=n([u.cssText],o).join("\n"),e&&i.forEach((function(t){var e=t.placeholder,n=t.comment;r=r.replace(e,n)})),u.slottedSelectors.forEach((function(t){r=r.replace(t.orgSelector,t.updatedSelector)})),r};
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */}}]);