!function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s=70)}([function(t,n,r){var e=r(23)("wks"),o=r(13),i=r(1).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n,r){var e=r(5),o=r(29),i=r(20),u=Object.defineProperty;n.f=r(3)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){t.exports=!r(10)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(2),o=r(11);t.exports=r(3)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(9);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(50),o=r(18);t.exports=function(t){return e(o(t))}},function(t,n){var r=t.exports={version:"2.6.2"};"number"==typeof __e&&(__e=r)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(1),o=r(4),i=r(6),u=r(13)("src"),c=Function.toString,f=(""+c).split("toString");r(8).inspectSource=function(t){return c.call(t)},(t.exports=function(t,n,r,c){var a="function"==typeof r;a&&(i(r,"name")||o(r,"name",n)),t[n]!==r&&(a&&(i(r,u)||o(r,u,t[n]?""+t[n]:f.join(String(n)))),t===e?t[n]=r:c?t[n]?t[n]=r:o(t,n,r):(delete t[n],o(t,n,r)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[u]||c.call(this)})},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports={}},function(t,n){t.exports=!1},function(t,n,r){var e=r(33),o=r(24);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(1),o=r(8),i=r(4),u=r(12),c=r(31),f=function(t,n,r){var a,s,l,p,y=t&f.F,v=t&f.G,h=t&f.S,g=t&f.P,b=t&f.B,d=v?e:h?e[n]||(e[n]={}):(e[n]||{}).prototype,m=v?o:o[n]||(o[n]={}),S=m.prototype||(m.prototype={});for(a in v&&(r=n),r)l=((s=!y&&d&&void 0!==d[a])?d:r)[a],p=b&&s?c(l,e):g&&"function"==typeof l?c(Function.call,l):l,d&&u(d,a,l,t&f.U),m[a]!=l&&i(m,a,p),g&&S[a]!=l&&(S[a]=l)};e.core=o,f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n,r){var e=r(9);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(23)("keys"),o=r(13);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(8),o=r(1),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(15)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(2).f,o=r(6),i=r(0)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,r){"use strict";var e=r(46)(!0);r(28)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})})},function(t,n,r){"use strict";var e=r(15),o=r(19),i=r(12),u=r(4),c=r(14),f=r(48),a=r(25),s=r(54),l=r(0)("iterator"),p=!([].keys&&"next"in[].keys()),y=function(){return this};t.exports=function(t,n,r,v,h,g,b){f(r,n,v);var d,m,S,x=function(t){if(!p&&t in _)return _[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},O=n+" Iterator",w="values"==h,j=!1,_=t.prototype,A=_[l]||_["@@iterator"]||h&&_[h],P=A||x(h),E=h?w?x("entries"):P:void 0,T="Array"==n&&_.entries||A;if(T&&(S=s(T.call(new t)))!==Object.prototype&&S.next&&(a(S,O,!0),e||"function"==typeof S[l]||u(S,l,y)),w&&A&&"values"!==A.name&&(j=!0,P=function(){return A.call(this)}),e&&!b||!p&&!j&&_[l]||u(_,l,P),c[n]=P,c[O]=y,h)if(d={values:w?P:x("values"),keys:g?P:x("keys"),entries:E},b)for(m in d)m in _||i(_,m,d[m]);else o(o.P+o.F*(p||j),n,d);return d}},function(t,n,r){t.exports=!r(3)&&!r(10)(function(){return 7!=Object.defineProperty(r(30)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(9),o=r(1).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(47);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,r){var e=r(5),o=r(49),i=r(24),u=r(22)("IE_PROTO"),c=function(){},f=function(){var t,n=r(30)("iframe"),e=i.length;for(n.style.display="none",r(53).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),f=t.F;e--;)delete f.prototype[i[e]];return f()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=f(),void 0===n?r:o(r,n)}},function(t,n,r){var e=r(6),o=r(7),i=r(51)(!1),u=r(22)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~i(a,r)||a.push(r));return a}},function(t,n,r){var e=r(17),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n,r){var e=r(18);t.exports=function(t){return Object(e(t))}},function(t,n,r){"use strict";var e=r(31),o=r(19),i=r(35),u=r(55),c=r(56),f=r(34),a=r(57),s=r(58);o(o.S+o.F*!r(60)(function(t){Array.from(t)}),"Array",{from:function(t){var n,r,o,l,p=i(t),y="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,g=void 0!==h,b=0,d=s(p);if(g&&(h=e(h,v>2?arguments[2]:void 0,2)),null==d||y==Array&&c(d))for(r=new y(n=f(p.length));n>b;b++)a(r,b,g?h(p[b],b):p[b]);else for(l=d.call(p),r=new y;!(o=l.next()).done;b++)a(r,b,g?u(l,h,[o.value,b],!0):o.value);return r.length=b,r}})},function(t,n,r){"use strict";r(61);var e=r(5),o=r(38),i=r(3),u=/./.toString,c=function(t){r(12)(RegExp.prototype,"toString",t,!0)};r(10)(function(){return"/a/b"!=u.call({source:"a",flags:"b"})})?c(function(){var t=e(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?o.call(t):void 0)}):"toString"!=u.name&&c(function(){return u.call(this)})},function(t,n,r){"use strict";var e=r(5);t.exports=function(){var t=e(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,r){r(40)("asyncIterator")},function(t,n,r){var e=r(1),o=r(8),i=r(15),u=r(41),c=r(2).f;t.exports=function(t){var n=o.Symbol||(o.Symbol=i?{}:e.Symbol||{});"_"==t.charAt(0)||t in n||c(n,t,{value:u.f(t)})}},function(t,n,r){n.f=r(0)},function(t,n,r){"use strict";var e=r(1),o=r(6),i=r(3),u=r(19),c=r(12),f=r(62).KEY,a=r(10),s=r(23),l=r(25),p=r(13),y=r(0),v=r(41),h=r(40),g=r(63),b=r(64),d=r(5),m=r(9),S=r(7),x=r(20),O=r(11),w=r(32),j=r(65),_=r(66),A=r(2),P=r(16),E=_.f,T=A.f,L=j.f,M=e.Symbol,k=e.JSON,N=k&&k.stringify,I=y("_hidden"),F=y("toPrimitive"),C={}.propertyIsEnumerable,R=s("symbol-registry"),D=s("symbols"),G=s("op-symbols"),V=Object.prototype,W="function"==typeof M,B=e.QObject,J=!B||!B.prototype||!B.prototype.findChild,H=i&&a(function(){return 7!=w(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a})?function(t,n,r){var e=E(V,n);e&&delete V[n],T(t,n,r),e&&t!==V&&T(V,n,e)}:T,K=function(t){var n=D[t]=w(M.prototype);return n._k=t,n},z=W&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},U=function(t,n,r){return t===V&&U(G,n,r),d(t),n=x(n,!0),d(r),o(D,n)?(r.enumerable?(o(t,I)&&t[I][n]&&(t[I][n]=!1),r=w(r,{enumerable:O(0,!1)})):(o(t,I)||T(t,I,O(1,{})),t[I][n]=!0),H(t,n,r)):T(t,n,r)},Y=function(t,n){d(t);for(var r,e=g(n=S(n)),o=0,i=e.length;i>o;)U(t,r=e[o++],n[r]);return t},q=function(t){var n=C.call(this,t=x(t,!0));return!(this===V&&o(D,t)&&!o(G,t))&&(!(n||!o(this,t)||!o(D,t)||o(this,I)&&this[I][t])||n)},Q=function(t,n){if(t=S(t),n=x(n,!0),t!==V||!o(D,n)||o(G,n)){var r=E(t,n);return!r||!o(D,n)||o(t,I)&&t[I][n]||(r.enumerable=!0),r}},X=function(t){for(var n,r=L(S(t)),e=[],i=0;r.length>i;)o(D,n=r[i++])||n==I||n==f||e.push(n);return e},Z=function(t){for(var n,r=t===V,e=L(r?G:S(t)),i=[],u=0;e.length>u;)!o(D,n=e[u++])||r&&!o(V,n)||i.push(D[n]);return i};W||(c((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(r){this===V&&n.call(G,r),o(this,I)&&o(this[I],t)&&(this[I][t]=!1),H(this,t,O(1,r))};return i&&J&&H(V,t,{configurable:!0,set:n}),K(t)}).prototype,"toString",function(){return this._k}),_.f=Q,A.f=U,r(44).f=j.f=X,r(26).f=q,r(43).f=Z,i&&!r(15)&&c(V,"propertyIsEnumerable",q,!0),v.f=function(t){return K(y(t))}),u(u.G+u.W+u.F*!W,{Symbol:M});for(var $="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;$.length>tt;)y($[tt++]);for(var nt=P(y.store),rt=0;nt.length>rt;)h(nt[rt++]);u(u.S+u.F*!W,"Symbol",{for:function(t){return o(R,t+="")?R[t]:R[t]=M(t)},keyFor:function(t){if(!z(t))throw TypeError(t+" is not a symbol!");for(var n in R)if(R[n]===t)return n},useSetter:function(){J=!0},useSimple:function(){J=!1}}),u(u.S+u.F*!W,"Object",{create:function(t,n){return void 0===n?w(t):Y(w(t),n)},defineProperty:U,defineProperties:Y,getOwnPropertyDescriptor:Q,getOwnPropertyNames:X,getOwnPropertySymbols:Z}),k&&u(u.S+u.F*(!W||a(function(){var t=M();return"[null]"!=N([t])||"{}"!=N({a:t})||"{}"!=N(Object(t))})),"JSON",{stringify:function(t){for(var n,r,e=[t],o=1;arguments.length>o;)e.push(arguments[o++]);if(r=n=e[1],(m(n)||void 0!==t)&&!z(t))return b(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!z(n))return n}),e[1]=n,N.apply(k,e)}}),M.prototype[F]||r(4)(M.prototype,F,M.prototype.valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(e.JSON,"JSON",!0)},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(33),o=r(24).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){for(var e=r(67),o=r(16),i=r(12),u=r(1),c=r(4),f=r(14),a=r(0),s=a("iterator"),l=a("toStringTag"),p=f.Array,y={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(y),h=0;h<v.length;h++){var g,b=v[h],d=y[b],m=u[b],S=m&&m.prototype;if(S&&(S[s]||c(S,s,p),S[l]||c(S,l,b),f[b]=p,d))for(g in e)S[g]||i(S,g,e[g],!0)}},function(t,n,r){var e=r(17),o=r(18);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),f=e(r),a=c.length;return f<0||f>=a?t?"":void 0:(i=c.charCodeAt(f))<55296||i>56319||f+1===a||(u=c.charCodeAt(f+1))<56320||u>57343?t?c.charAt(f):i:t?c.slice(f,f+2):u-56320+(i-55296<<10)+65536}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){"use strict";var e=r(32),o=r(11),i=r(25),u={};r(4)(u,r(0)("iterator"),function(){return this}),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},function(t,n,r){var e=r(2),o=r(5),i=r(16);t.exports=r(3)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,f=0;c>f;)e.f(t,r=u[f++],n[r]);return t}},function(t,n,r){var e=r(21);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n,r){var e=r(7),o=r(34),i=r(52);t.exports=function(t){return function(n,r,u){var c,f=e(n),a=o(f.length),s=i(u,a);if(t&&r!=r){for(;a>s;)if((c=f[s++])!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(17),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},function(t,n,r){var e=r(1).document;t.exports=e&&e.documentElement},function(t,n,r){var e=r(6),o=r(35),i=r(22)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,n,r){var e=r(5);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},function(t,n,r){var e=r(14),o=r(0)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},function(t,n,r){"use strict";var e=r(2),o=r(11);t.exports=function(t,n,r){n in t?e.f(t,n,o(0,r)):t[n]=r}},function(t,n,r){var e=r(59),o=r(0)("iterator"),i=r(14);t.exports=r(8).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},function(t,n,r){var e=r(21),o=r(0)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},function(t,n,r){var e=r(0)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},function(t,n,r){r(3)&&"g"!=/./g.flags&&r(2).f(RegExp.prototype,"flags",{configurable:!0,get:r(38)})},function(t,n,r){var e=r(13)("meta"),o=r(9),i=r(6),u=r(2).f,c=0,f=Object.isExtensible||function(){return!0},a=!r(10)(function(){return f(Object.preventExtensions({}))}),s=function(t){u(t,e,{value:{i:"O"+ ++c,w:{}}})},l=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!o(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!i(t,e)){if(!f(t))return"F";if(!n)return"E";s(t)}return t[e].i},getWeak:function(t,n){if(!i(t,e)){if(!f(t))return!0;if(!n)return!1;s(t)}return t[e].w},onFreeze:function(t){return a&&l.NEED&&f(t)&&!i(t,e)&&s(t),t}}},function(t,n,r){var e=r(16),o=r(43),i=r(26);t.exports=function(t){var n=e(t),r=o.f;if(r)for(var u,c=r(t),f=i.f,a=0;c.length>a;)f.call(t,u=c[a++])&&n.push(u);return n}},function(t,n,r){var e=r(21);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,n,r){var e=r(7),o=r(44).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,n,r){var e=r(26),o=r(11),i=r(7),u=r(20),c=r(6),f=r(29),a=Object.getOwnPropertyDescriptor;n.f=r(3)?a:function(t,n){if(t=i(t),n=u(n,!0),f)try{return a(t,n)}catch(t){}if(c(t,n))return o(!e.f.call(t,n),t[n])}},function(t,n,r){"use strict";var e=r(68),o=r(69),i=r(14),u=r(7);t.exports=r(28)(Array,"Array",function(t,n){this._t=u(t),this._i=0,this._k=n},function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},function(t,n,r){var e=r(0)("unscopables"),o=Array.prototype;null==o[e]&&r(4)(o,e,{}),t.exports=function(t){o[e][t]=!0}},function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},function(t,n,r){"use strict";r.r(n);r(27),r(36),r(37),r(39),r(42),r(45);function e(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=["SRL","PLO","J&K"],i=["RusAuto","SBO"],u=function(t,n){return(isNaN(t)||""==t||null==t)&&(t=0),n.reduce(function(t,n){return t+n},t)}(null,[4e4,5e3,30400,12e3]),c=[].concat(e(o),e(i),["unexpected sponsor"]),f=["Alex","","ludmila","Viktor",""," oleg ","iNna  ","Ivan","Alex","Olga"," Ann"].filter(function(t){return 0!==t.length}).map(function(t){return t.trim().toLowerCase()});function a(t){return function(t){if(Array.isArray(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}new(function(){function t(n,r,e){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"Victor";!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.owner=n,this.cash=r,this.emp=e,this.director=o}var n,r,e;return n=t,(r=[{key:"showInfo",value:function(){var t;console.log("We have a business. Owner: ".concat(this.owner,", director: ").concat(this.director,". Our budget: ").concat(this.cash,". And our employers: ").concat(this.emp)),console.log("And we have a sponsors: "),(t=console).log.apply(t,a(c)),console.log("Note. Be careful with ".concat(o[0],". It's a huge risk."))}}])&&s(n.prototype,r),e&&s(n,e),t}())("Sam",u,f).showInfo()}]);
//# sourceMappingURL=script.js.map