/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssfilters-csstransforms-cssvhunit-cssvwunit-flexbox-preserve3d !*/
!function(e,t,n){function r(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?C.className.baseVal=t:C.className=t)}function o(e,t){return typeof e===t}function i(){var e,t,n,r,s,i,a;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function a(){var e=t.body;return e||(e=r(S?"svg":"body"),e.fake=!0),e}function l(e,n,s,o){var i,l,u,f,d="modernizr",p=r("div"),c=a();if(parseInt(s,10))for(;s--;)u=r("div"),u.id=o?o[s]:d+(s+1),p.appendChild(u);return i=r("style"),i.type="text/css",i.id="s"+d,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),l=n(p,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=f,C.offsetHeight):p.parentNode.removeChild(p),!!l}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var r;for(var s in e)if(e[s]in t)return n===!1?e[s]:(r=t[e[s]],o(r,"function")?u(r,n||t):r);return!1}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function p(e,t){return!!~(""+e).indexOf(t)}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(c(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];s--;)o.push("("+c(t[s])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function v(e,t,s,i){function a(){u&&(delete j.style,delete j.modElem)}if(i=o(i,"undefined")?!1:i,!o(s,"undefined")){var l=m(e,s);if(!o(l,"undefined"))return l}for(var u,f,c,v,h,y=["modernizr","tspan"];!j.style;)u=!0,j.modElem=r(y.shift()),j.style=j.modElem.style;for(c=e.length,f=0;c>f;f++)if(v=e[f],h=j.style[v],p(v,"-")&&(v=d(v)),j.style[v]!==n){if(i||o(s,"undefined"))return a(),"pfx"==t?v:!0;try{j.style[v]=s}catch(g){}if(j.style[v]!=h)return a(),"pfx"==t?v:!0}return a(),!1}function h(e,t,n,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(i+" ")+i).split(" ");return o(t,"string")||o(t,"undefined")?v(a,t,r,s):(a=(e+" "+E.join(i+" ")+i).split(" "),f(a,t,n))}function y(e,t,r){return h(e,n,n,t,r)}var g=[],C=t.documentElement,S="svg"===C.nodeName.toLowerCase(),w=[],x={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr;var _=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];x._prefixes=_;var b="CSS"in e&&"supports"in e.CSS,T="supportsCSS"in e;Modernizr.addTest("supports",b||T);var z=x.testStyles=l;z("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).height,10);Modernizr.addTest("cssvhunit",r==n)}),z("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt((e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).width,10);Modernizr.addTest("cssvwunit",r==n)});var P="Moz O ms Webkit",E=x._config.usePrefixes?P.toLowerCase().split(" "):[];x._domPrefixes=E;var N={elem:r("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(function(){delete j.style});var A=x._config.usePrefixes?P.split(" "):[];x._cssomPrefixes=A,x.testAllProps=h,x.testAllProps=y,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("preserve3d",y("transformStyle","preserve-3d")),Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return y("filter","blur(2px)");var e=r("a");return e.style.cssText=_.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),i(),s(g),delete x.addTest,delete x.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);