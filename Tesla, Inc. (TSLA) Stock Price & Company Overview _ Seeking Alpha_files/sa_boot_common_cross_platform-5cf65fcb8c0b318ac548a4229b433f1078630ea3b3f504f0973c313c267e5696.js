if (!Array.prototype.filter)
  Array.prototype.filter = function(func, thisArg) {
    'use strict';

    if ( ! ((typeof func === 'Function' || typeof func === 'function') && this) ) {
      throw new TypeError();
    }

    var len = this.length >>> 0, res = new Array(len), t = this, c = 0, i = -1;
    if (thisArg === undefined) {
      while (++i !== len) {
        if (i in this) {
          if (func(t[i], i, t)) {
            res[c++] = t[i];
          } else {
            while (++i !== len) {
              if(i in this) {
                if(func.call(thisArg, t[i], i, t)) {
                  res[c++] = t[i];
                }
              }
            }
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(c,e){if(null==this)throw new TypeError('"this" is null or not defined');var b=Object(this),f=b.length>>>0;if("function"!==typeof c)throw new TypeError("predicate must be a function");for(var a=0;a<f;){var d=b[a];if(c.call(e,d,a,b))return d;a++}},configurable:!0,writable:!0});
Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(b,f){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),c=e.length>>>0;if(0===c)return!1;var a=f|0;for(a=Math.max(0<=a?a:c-Math.abs(a),0);a<c;){var d=e[a];if(d===b||"number"===typeof d&&"number"===typeof b&&isNaN(d)&&isNaN(b))return!0;a++}return!1}});
SA.require([], function() {

  'use strict';

  var w = window, f = function() { return undefined; };

  w.console = w.console || {};

  ['assert', 'clear', 'count', 'debug', 'dir', 'error', 'exception', 'info', 'log', 'profile', 'table', 'time', 'warn'].forEach(function(fn) {
    if (!w.console[fn]) {
      w.console[fn] = f;
    }
  });

}, 'console');
if (typeof Object.assign !== 'function') {

  Object.defineProperty(Object, 'assign', {
    value: function assign(target, varArgs) {

      if (target == null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      var to = Object(target);

      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null) {
          for (var nextKey in nextSource) {
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}

;
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
;
/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
  void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){var o=e.attr("data-target");o||(o=e.attr("href"),o=o&&/#[A-Za-z]/.test(o)&&o.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==o?t(document).find(o):null;return i&&i.length?i:e.parent()}function o(o){o&&3===o.which||(t(n).remove(),t(s).each(function(){var i=t(this),n=e(i),s={relatedTarget:this};n.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&t.contains(n[0],o.target)||(n.trigger(o=t.Event("hide.bs.dropdown",s)),o.isDefaultPrevented()||(i.attr("aria-expanded","false"),n.removeClass("open").trigger(t.Event("hidden.bs.dropdown",s)))))}))}function i(e){return this.each(function(){var o=t(this),i=o.data("bs.dropdown");i||o.data("bs.dropdown",i=new r(this)),"string"==typeof e&&i[e].call(o)})}var n=".dropdown-backdrop",s='[data-toggle="dropdown"]',r=function(e){t(e).on("click.bs.dropdown",this.toggle)};r.VERSION="3.4.1",r.prototype.toggle=function(i){var n=t(this);if(!n.is(".disabled, :disabled")){var s=e(n),r=s.hasClass("open");if(o(),!r){"ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",o);var a={relatedTarget:this};if(s.trigger(i=t.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return;n.trigger("focus").attr("aria-expanded","true"),s.toggleClass("open").trigger(t.Event("shown.bs.dropdown",a))}return!1}},r.prototype.keydown=function(o){if(/(38|40|27|32)/.test(o.which)&&!/input|textarea/i.test(o.target.tagName)){var i=t(this);if(o.preventDefault(),o.stopPropagation(),!i.is(".disabled, :disabled")){var n=e(i),r=n.hasClass("open");if(!r&&27!=o.which||r&&27==o.which)return 27==o.which&&n.find(s).trigger("focus"),i.trigger("click");var a=" li:not(.disabled):visible a",l=n.find(".dropdown-menu"+a);if(l.length){var h=l.index(o.target);38==o.which&&h>0&&h--,40==o.which&&h<l.length-1&&h++,~h||(h=0),l.eq(h).trigger("focus")}}}};var a=t.fn.dropdown;t.fn.dropdown=i,t.fn.dropdown.Constructor=r,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",o).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",s,r.prototype.toggle).on("keydown.bs.dropdown.data-api",s,r.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",r.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e,i){return this.each(function(){var n=t(this),s=n.data("bs.modal"),r=t.extend({},o.DEFAULTS,n.data(),"object"==typeof e&&e);s||n.data("bs.modal",s=new o(this,r)),"string"==typeof e?s[e](i):r.show&&s.show(i)})}var o=function(e,o){this.options=o,this.$body=t(document.body),this.$element=t(e),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,t.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};o.VERSION="3.4.1",o.TRANSITION_DURATION=300,o.BACKDROP_TRANSITION_DURATION=150,o.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},o.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},o.prototype.show=function(e){var i=this,n=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(n),this.isShown||n.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(e){t(e.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var n=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),n&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus();var s=t.Event("shown.bs.modal",{relatedTarget:e});n?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(s)}).emulateTransitionEnd(o.TRANSITION_DURATION):i.$element.trigger("focus").trigger(s)}))},o.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",t.proxy(this.hideModal,this)).emulateTransitionEnd(o.TRANSITION_DURATION):this.hideModal())},o.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},o.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},o.prototype.resize=function(){this.isShown?t(window).on("resize.bs.modal",t.proxy(this.handleUpdate,this)):t(window).off("resize.bs.modal")},o.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},o.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},o.prototype.backdrop=function(e){var i=this,n=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var s=t.support.transition&&n;if(this.$backdrop=t(document.createElement("div")).addClass("modal-backdrop "+n).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",t.proxy(function(t){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),s&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;s?this.$backdrop.one("bsTransitionEnd",e).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):e()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var r=function(){i.removeBackdrop(),e&&e()};t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",r).emulateTransitionEnd(o.BACKDROP_TRANSITION_DURATION):r()}else e&&e()},o.prototype.handleUpdate=function(){this.adjustDialog()},o.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},o.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},o.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},o.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var o=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",e+o),t(this.fixedContent).each(function(e,i){var n=i.style.paddingRight,s=t(i).css("padding-right");t(i).data("padding-right",n).css("padding-right",parseFloat(s)+o+"px")}))},o.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),t(this.fixedContent).each(function(e,o){var i=t(o).data("padding-right");t(o).removeData("padding-right"),o.style.paddingRight=i?i:""})},o.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var i=t.fn.modal;t.fn.modal=e,t.fn.modal.Constructor=o,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(o){var i=t(this),n=i.attr("href"),s=i.attr("data-target")||n&&n.replace(/.*(?=#[^\s]+$)/,""),r=t(document).find(s),a=r.data("bs.modal")?"toggle":t.extend({remote:!/#/.test(n)&&n},r.data(),i.data());i.is("a")&&o.preventDefault(),r.one("show.bs.modal",function(t){t.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),e.call(r,a,this)})}(jQuery),+function(t){"use strict";function e(e,o){var i=e.nodeName.toLowerCase();if(-1!==t.inArray(i,o))return-1!==t.inArray(i,s)?Boolean(e.nodeValue.match(l)||e.nodeValue.match(h)):!0;for(var n=t(o).filter(function(t,e){return e instanceof RegExp}),r=0,a=n.length;a>r;r++)if(i.match(n[r]))return!0;return!1}function o(o,i,n){if(0===o.length)return o;if(n&&"function"==typeof n)return n(o);if(!document.implementation||!document.implementation.createHTMLDocument)return o;var s=document.implementation.createHTMLDocument("sanitization");s.body.innerHTML=o;for(var r=t.map(i,function(t,e){return e}),a=t(s.body).find("*"),l=0,h=a.length;h>l;l++){var d=a[l],p=d.nodeName.toLowerCase();if(-1!==t.inArray(p,r))for(var c=t.map(d.attributes,function(t){return t}),f=[].concat(i["*"]||[],i[p]||[]),u=0,m=c.length;m>u;u++)e(c[u],f)||d.removeAttribute(c[u].nodeName);else d.parentNode.removeChild(d)}return s.body.innerHTML}function i(e){return this.each(function(){var o=t(this),i=o.data("bs.tooltip"),n="object"==typeof e&&e;!i&&/destroy|hide/.test(e)||(i||o.data("bs.tooltip",i=new d(this,n)),"string"==typeof e&&i[e]())})}var n=["sanitize","whiteList","sanitizeFn"],s=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],r=/^aria-[\w-]*$/i,a={"*":["class","dir","id","lang","role",r],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},l=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,h=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i,d=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};d.VERSION="3.4.1",d.TRANSITION_DURATION=150,d.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:a},d.prototype.init=function(e,o,i){if(this.enabled=!0,this.type=e,this.$element=t(o),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&t(document).find(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},d.prototype.getDefaults=function(){return d.DEFAULTS},d.prototype.getOptions=function(e){var i=this.$element.data();for(var s in i)i.hasOwnProperty(s)&&-1!==t.inArray(s,n)&&delete i[s];return e=t.extend({},this.getDefaults(),i,e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e.sanitize&&(e.template=o(e.template,e.whiteList,e.sanitizeFn)),e},d.prototype.getDelegateOptions=function(){var e={},o=this.getDefaults();return this._options&&t.each(this._options,function(t,i){o[t]!=i&&(e[t]=i)}),e},d.prototype.enter=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusin"==e.type?"focus":"hover"]=!0),o.tip().hasClass("in")||"in"==o.hoverState?void(o.hoverState="in"):(clearTimeout(o.timeout),o.hoverState="in",o.options.delay&&o.options.delay.show?void(o.timeout=setTimeout(function(){"in"==o.hoverState&&o.show()},o.options.delay.show)):o.show())},d.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},d.prototype.leave=function(e){var o=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o)),e instanceof t.Event&&(o.inState["focusout"==e.type?"focus":"hover"]=!1),o.isInStateTrue()?void 0:(clearTimeout(o.timeout),o.hoverState="out",o.options.delay&&o.options.delay.hide?void(o.timeout=setTimeout(function(){"out"==o.hoverState&&o.hide()},o.options.delay.hide)):o.hide())},d.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var i=this,n=this.tip(),s=this.getUID(this.type);this.setContent(),n.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&n.addClass("fade");var r="function"==typeof this.options.placement?this.options.placement.call(this,n[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,l=a.test(r);l&&(r=r.replace(a,"")||"top"),n.detach().css({top:0,left:0,display:"block"}).addClass(r).data("bs."+this.type,this),this.options.container?n.appendTo(t(document).find(this.options.container)):n.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),p=n[0].offsetWidth,c=n[0].offsetHeight;if(l){var f=r,u=this.getPosition(this.$viewport);r="bottom"==r&&h.bottom+c>u.bottom?"top":"top"==r&&h.top-c<u.top?"bottom":"right"==r&&h.right+p>u.width?"left":"left"==r&&h.left-p<u.left?"right":r,n.removeClass(f).addClass(r)}var m=this.getCalculatedOffset(r,h,p,c);this.applyPlacement(m,r);var g=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};t.support.transition&&this.$tip.hasClass("fade")?n.one("bsTransitionEnd",g).emulateTransitionEnd(d.TRANSITION_DURATION):g()}},d.prototype.applyPlacement=function(e,o){var i=this.tip(),n=i[0].offsetWidth,s=i[0].offsetHeight,r=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(i[0],t.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),i.addClass("in");var l=i[0].offsetWidth,h=i[0].offsetHeight;"top"==o&&h!=s&&(e.top=e.top+s-h);var d=this.getViewportAdjustedDelta(o,e,l,h);d.left?e.left+=d.left:e.top+=d.top;var p=/top|bottom/.test(o),c=p?2*d.left-n+l:2*d.top-s+h,f=p?"offsetWidth":"offsetHeight";i.offset(e),this.replaceArrow(c,i[0][f],p)},d.prototype.replaceArrow=function(t,e,o){this.arrow().css(o?"left":"top",50*(1-t/e)+"%").css(o?"top":"left","")},d.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=o(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},d.prototype.hide=function(e){function o(){"in"!=i.hoverState&&n.detach(),i.$element&&i.$element.removeAttr("aria-describedby").trigger("hidden.bs."+i.type),e&&e()}var i=this,n=t(this.$tip),s=t.Event("hide.bs."+this.type);return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(n.removeClass("in"),t.support.transition&&n.hasClass("fade")?n.one("bsTransitionEnd",o).emulateTransitionEnd(d.TRANSITION_DURATION):o(),this.hoverState=null,this)},d.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},d.prototype.hasContent=function(){return this.getTitle()},d.prototype.getPosition=function(e){e=e||this.$element;var o=e[0],i="BODY"==o.tagName,n=o.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&o instanceof window.SVGElement,r=i?{top:0,left:0}:s?null:e.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=i?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)},d.prototype.getCalculatedOffset=function(t,e,o,i){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-o/2}:"top"==t?{top:e.top-i,left:e.left+e.width/2-o/2}:"left"==t?{top:e.top+e.height/2-i/2,left:e.left-o}:{top:e.top+e.height/2-i/2,left:e.left+e.width}},d.prototype.getViewportAdjustedDelta=function(t,e,o,i){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+i;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var h=e.left-s,d=e.left+s+o;h<r.left?n.left=r.left-h:d>r.right&&(n.left=r.left+r.width-d)}return n},d.prototype.getTitle=function(){var t,e=this.$element,o=this.options;return t=e.attr("data-original-title")||("function"==typeof o.title?o.title.call(e[0]):o.title)},d.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},d.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},d.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},d.prototype.enable=function(){this.enabled=!0},d.prototype.disable=function(){this.enabled=!1},d.prototype.toggleEnabled=function(){this.enabled=!this.enabled},d.prototype.toggle=function(e){var o=this;e&&(o=t(e.currentTarget).data("bs."+this.type),o||(o=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,o))),e?(o.inState.click=!o.inState.click,o.isInStateTrue()?o.enter(o):o.leave(o)):o.tip().hasClass("in")?o.leave(o):o.enter(o)},d.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},d.prototype.sanitizeHtml=function(t){return o(t,this.options.whiteList,this.options.sanitizeFn)};var p=t.fn.tooltip;t.fn.tooltip=i,t.fn.tooltip.Constructor=d,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=p,this}}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var i=t(this),n=i.data("bs.popover"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||i.data("bs.popover",n=new o(this,s)),"string"==typeof e&&n[e]())})}var o=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");o.VERSION="3.4.1",o.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),o.prototype.constructor=o,o.prototype.getDefaults=function(){return o.DEFAULTS},o.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),o=this.getContent();if(this.options.html){var i=typeof o;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===i&&(o=this.sanitizeHtml(o))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===i?"html":"append"](o)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(o);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},o.prototype.hasContent=function(){return this.getTitle()||this.getContent()},o.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},o.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var i=t.fn.popover;t.fn.popover=e,t.fn.popover.Constructor=o,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(jQuery);
(function($){

  'use strict';

  var fixedCls = '.navbar-fixed-top,.navbar-fixed-bottom,.sa-fixed-elem',
      oldSSB = $.fn.modal.Constructor.prototype.setScrollbar, oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;

  $.fn.modal.Constructor.prototype.setScrollbar = function () {
    oldSSB.apply(this);
    if (this.bodyIsOverflowing && this.scrollbarWidth){
      $(fixedCls).css('padding-right', this.scrollbarWidth);
    }
  };

  $.fn.modal.Constructor.prototype.resetScrollbar = function () {
    oldRSB.apply(this);
    $(fixedCls).css('padding-right', '');
  };

}(window.jQuery));
// jQuery extension
// Prevents a function call from happening EVERY time an event is fired from the browser.

// Usage:
//  See http://api.jquery.com/bind/
//  .bindWithDelay( eventType, [ eventData ], handler(eventObject), timeout, throttle )

//Examples:
//  $("#foo").bindWithDelay('click', function(e) { }, 100);
//  $(window).bindWithDelay('resize', { optional: 'eventData' }, callback, 1000);
//  $(window).bindWithDelay('resize', callback, 1000, true);

(function($) {

  'use strict';

  // Binds delayed event to jQuery object.
  // @param {string} type - standard browser/jQuery event name (click, resize, scroll).
  // @param {anything} data - an object containing data that will be passed to the event handler. (optional)
  // @param {function} fn - function to execute each time the event is triggered.
  // @param {number} timeout - execution timeout in ms.
  // @param {bool} throttle - indicates if throttle function should be applied. (optional)

  // @return {jQuery} - jquery object with event connected event.
  $.fn.bindWithDelay = function(type, data, fn, timeout, throttle) {

    if ($.isFunction(data)) {
      throttle = timeout;
      timeout = fn;
      fn = data;
      data = undefined;
    }

    // Allow delayed function to be removed with fn in unbind function
    fn.guid = fn.guid || ($.guid && $.guid++);

    // Bind each separately so that each element has its own delay
    return this.each(function() {

      var wait = null;

      function cb() {
        var e = $.extend(true, {}, arguments[0]);
        var ctx = this;
        var throttler = function() {
          wait = null;
          fn.apply(ctx, [e]);
        };

        if (!throttle) {
          clearTimeout(wait);
          wait = null;
        }

        if (!wait) {
          wait = setTimeout(throttler, timeout);
        }
      }

      cb.guid = fn.guid;

      $(this).bind(type, data, cb);
    });
  };

}(window.jQuery));
SA.define('SA.Rx.email', [], function() {

  'use strict';

  return /\w[\w#$\%^&*'\/=?_`{|}~+-]*(\.[\w#$\%^&*'\/=?_`{|}~+-]+)*@(\w[\w-]*\.)+[a-z]{2,63}/i;

});
// Implementation of localStorage using general store adapter
// https://developer.mozilla.org/en/docs/Web/API/Window/localStorage

// Usage:
//   SA.Data.Cache.set('key', 'val') - set value with key provided. No expiration
//   SA.Data.Cache.set('key', 'val', 20 * 1000) - set value with key provided. Expires in 20 sec.
//   SA.Data.Cache.get('key', true) - get value with given key. Item was set with expiration param
//   SA.Data.Cache.del('key') - remove item with given key from localStorage.

SA.define('SA.Data.Cache', [], function() {

  'use strict';

  var w = window, full = false, enabled, ls, st = {},
      deletedKeys = ['articles_read','news_read'];

  function getKeysSizes() {
    var h = {total: 0}, v;
    Object.keys(ls).forEach(function(k) {
      h.total += 1;
      v = ls.getItem(k) || '';
      h[k] = v.length;
    });
    return h;
  }

  function isQuotaExceeded(e) {
    if ((
        // everything except Firefox
        e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === 'QuotaExceededError' ||
        // Firefox
        e.name === 'NS_ERROR_DOM_QUOTA_REACHED' ||
        // old IE
        e.number === -2147024882
      ) &&
      // acknowledge QuotaExceededError only if there's something already stored
      ls.length !== 0) {
      full = true;
      SA.exceptions.push(['localStorage Quote Data Exceeded', e, {items: getKeysSizes()}]);
    }
  }

  function storageAvailable() {
    var res = false, k = 'SA';
    try {
      // even direct call to window.localStorage can coz security exception
      ls = w.localStorage;
      ls.setItem(k, k);
      res = k === ls.getItem(k);
      ls.removeItem(k);
    }
    catch(e) {
      res = false;
      isQuotaExceeded(e);
    }
    return res;
  }


  function expired(v) {
    return v !== null && typeof v === 'object' && v.expires && new Date() > new Date(v.expires);
  }

  function del(k) {
    if(enabled) {
      ls.removeItem(k);
    }
  }

  function getVal(key, canExpire) {
    var obj = ls.getItem(key);
    canExpire = canExpire || false;
    if (obj && canExpire) {
      SA.exec(function () {
        obj = JSON.parse(obj);
        if (expired(obj)) {
          // expired
          ls.removeItem(key);
          obj = {value: null};
        }
        obj = obj.value;
      });
    }
    return obj;
  }

  function expireOld() {
    var v;
    Object.keys(ls).forEach(function(k) {
      try {
        v = JSON.parse(ls[k]);
      } catch (ignore) {}
      if (expired(v)) {
        del(k);
      }
    });

    deletedKeys.forEach(function(k) {
      del(k);
    });
  }

  function setup() {
    enabled = storageAvailable();
    if(enabled) {
      w.setTimeout(expireOld, 20000);
    }
  }

  setup();

  // Public methods

  st.enabled = enabled && !full;

  // method of the localStorage interface, when passed a key name, will return that key's value.
  // https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem
  // @param {string} key - string containing the name of the key you want to retrieve the value of.
  // @param {bool} key - bool indicator that function was set with expire param.
  st.get = function(key, canExpire) {
    return enabled ? getVal(key, canExpire) : null;
  };

  st.getJson = function(key) {
    return SA.exec(function() {
      return JSON.parse(st.get(key));
    }) || {};
  };

  // method of the localStorage interface, when passed a key name and value, will add that key to the storage, or update that key's value if it already exists.
  // https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
  // @param {string} key - string containing the name of the key you want to create/update.
  // @param {string} value - string containing the value you want to give the key you are creating/updating.
  // @param {number} expires - time after which item in localStorage will be considered expired. (optional)
  // If @param expires was not provided - item will stay in localStorage unless removed manually
  // If item was set with expires param - it must be retrieved with canExpire set to true
  st.set = function(key, val, expires) {
    if (enabled && !full) {
      try {
        val = expires ? JSON.stringify({value: val, expires: Date.now() + (parseInt(expires, 10) || 0)}) : val;
        ls.setItem(key, val);
      } catch (e) {
        isQuotaExceeded(e);
      }
    }
  };

  st.setJson = function(key, obj) {
    SA.exec(function() {
      st.set(key, JSON.stringify(obj));
    });
  };

  // method of the Storage interface, when passed a key name, will remove that key from the storage.
  // @param {string} key - string containing the name of the key you want to remove.
  st.del = function (k) {
    del(k);
  };

  // get direct reference to browsers localStorage object if it is enabled
  st.getStore = function () {
    return enabled ? ls : null;
  };

  return st;

});
// Implementation of Cookies Adapter
// On initialization module parses document.cookie and caches it in cookieCache object
// After updating/removing the item, cookieCache object transformed back to string and document.cookie replaced
// https://developer.mozilla.org/en-US/Add-ons/WebExtensions/API/cookies/Cookie

// Usage
//   SA.Data.Cookies.set('key', 'val') - create/update cookie with provided value
//   SA.Data.Cookies.get('key') - get cookie value by key

SA.define('SA.Data.Cookies', [], function() {

  'use strict';

  var d = window.document, cookieCache, cachedDocCookie, cs = {};

  function extendOpt(opt) {
    opt = opt || {};
    return {
      path: opt.path || '/',
      expires: opt.expires || Infinity,
      secure: opt.secure || false
    };
  }

  function getExpiresDate(exp) {
    var now = new Date();
    return exp === Infinity ? new Date(now.getTime() + 3600 * 1000 * 24 * 365 * 10) : new Date(now.getTime() + exp * 1000);
  }

  function generateCookieString(k, v, opt) {
    var c;
    k = encodeURIComponent(k);
    v = encodeURIComponent(v);
    opt = opt || {};
    c = k + '=' + v;
    c += opt.path ? ';path=' + opt.path : '';
    c += opt.expires ? ';expires=' + opt.expires.toUTCString() : '';
    c += ';secure';

    return c;
  }

  function safeDecode(val) {
    return SA.exec(function() {
      return decodeURIComponent(val);
    });
  }

  function getKVPair(str) {
    // Server encodes space as '+', so I'm replacing it to '%20' so that decodeURIComponent will decode it
    var ar = str.replace(/\+/g, '%20').split('=');
    return {
      key: safeDecode(ar.shift()),
      value: safeDecode(ar.join('='))
    };
  }

  function getCacheFromString(str) {
    var temp = {}, cookiesArray = str ? str.split(/;\s*/) : [], cookieKvp;

    cookiesArray.forEach(function(i) {
      cookieKvp = getKVPair(i);
      if (temp[cookieKvp.key] === undefined) {
        temp[cookieKvp.key] = cookieKvp.value;
      }
    });

    return temp;
  }

  function renewCache() {
    cookieCache = getCacheFromString(d.cookie);
    cachedDocCookie = d.cookie;
    return cookieCache;
  }

  // PUBLIC FUNCTIONS


  // method of the cookie interface, when passed a key name, will return that key's cookie value.
  // @param {string} key - string containing the name of the key you want to retrieve the value of.
  cs.get = function(key) {
    if (cachedDocCookie !== d.cookie) {
      renewCache();
    }
    return cookieCache[key] || null;
  };

  // method of the cookie interface, when passed a key name and value, will generate new cookie string, or update that key's value if it already exists.
  // @param {string} k - string containing the name of the cookie key you want to create/update.
  // @param {string} v - string containing the value you want to give the key you are creating/updating.
  // @param {object} opt - options object (optional)
  // opt.path - indicates a URL path that must exist in the requested resource before sending the Cookie header. Default - '/'
  // opt.expires - indicates when the cookie should no longer be sent to the server and therefore may be deleted by the browser. Default - 'Infinity'
  // opt.secure - secure cookie will only be sent to the server when a request is made using SSL and the HTTPS protocol. Default - false
  cs.set = function(k, v, opt) {
    opt = extendOpt(opt);
    opt.expires = getExpiresDate(v === undefined ? -1 : opt.expires);
    d.cookie = generateCookieString(k, v, opt);
    return cs;
  };

  // method of the cookie interface, when passed a key name, will remove cookie string with given key.
  // @param {string} k - string containing the name of the key you want to remove.
  cs.expire = function(k, opt) {
    return cs.set(k, undefined, opt);
  };

  // Legacy wrapper function
  cs.del = function(k, opt) {
    cs.expire(k, opt);
  };

  // method of the cookie interface, when passed a prefix will remove all keys with given prefix.
  // @param {string} pref - string containing the prefix of keys you want to remove.
  cs.expireByPrefix = function(pref) {
    var rx = new RegExp('^' + pref);
    Object.keys(cookieCache).forEach(function(k) {
      if(rx.test(k)) {
        cs.expire(k);
      }
    });
    return cs;
  };


  return cs;

});
// Module collects user data and stores it in localStorage with __sa_data__ key
// Resets some cookies on every initialization since older browsers allow limited amount of cookies to be set.

(function(w, SA, $) {

  'use strict';

  var dKey = '__sa_data__', ref = w.document.referrer || '', cp, lStore, machineCookie;
  var timeNow = Date.now(), sessionExpiresIn = 30 * 60 * 1000;

  function updateSSID(ssId) {
    var c = ssId.split('.');
    return c[0] + '.' + (parseInt(c[1], 10) + 1);
  }

  function generateSSID() {
    var id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0, v = c === 'x' ? r : (r & 0x3|0x8);
      return v.toString(16);
    });
    return id + '.0';
  }

  function getSessionData(data) {
    data.sessionExpiration = data.sessionExpiration || 0;
    var isSessionExpired = data.sessionExpiration - timeNow < 0;
    if (!data.sessionExpiration || !data.sessionID || isSessionExpired) {
      if (isSessionExpired) {
        data.lastSessionId = data.sessionID;
      }
      data.sessionID = generateSSID();
    } else {
      data.sessionID = updateSSID(data.sessionID);
      if (!data.lastSessionId) {
        data.lastSessionId = data.sessionID;
      }
    }
    data.sessionExpiration = timeNow + sessionExpiresIn;
    return data;
  }

  function populate(d) {
    d.sessionReferrer = d.sessionID ? (d.sessionReferrer || '') : ref;
    return getSessionData(d);
  }

  function getData() {
    var d = {};
    // just to be safe
    SA.exec(function() {
      d = JSON.parse(lStore.get(dKey)) || JSON.parse(cp.get(dKey)) || {};
    });
    // just in case data was corrupted
    if(typeof d !== 'object') {
      d = {};
    }
    return populate(d);
  }

  function storeData(data) {
    SA.exec(function() {
      return lStore.enabled ? lStore.set(dKey, JSON.stringify(data)) : cp.set(dKey, JSON.stringify(data));
    });

    SA.exec(function() {
      cp.set('session_id', data.sessionID.split('.')[0]);
    });
  }

  function setSapuCookie() {
    var sapu = cp.get('sapu');
    if(cp.get('user_id') && !sapu) {
      if (SA.App.proPlus) {
        return cp.set('sapu', 12);
      } else if (SA.App.pro) {
        return cp.set('sapu', 212);
      } else {
        return cp.set('sapu', 101);
      }
    }
  }

  function getMachineCookie() {
    var m = cp.get('machine_cookie') || (Math.round((Date.now()) + Math.random() * 1000000003366)).toString();
    cp.set('machine_cookie', m);
    return m;
  }

  function extendConfig(data) {
    SA.pageConfig = $.extend(SA.pageConfig, data);
    SA.pageConfig = $.extend(SA.pageConfig, {
      referrer: ref,
      machineID: machineCookie
    });
  }

  function resetCookies() {
    var v;
    ['user_id', 'user_nick', 'user_remember_token', 'user_cookie_key'].forEach(function(k) {
      v = cp.get(k);
      if(v) {
        cp.set(k, v);
      }
    });
  }

  function collectData() {
    var data = getData();
    extendConfig(data);
    storeData(data);
  }

  function initialize() {
    cp = SA.Data.Cookies;
    lStore = SA.Data.Cache;
    machineCookie = getMachineCookie();

    collectData();
    setSapuCookie();

    // IE has 50 cookies per domain rule. Need every time to rewrite main cookies just not to lose them
    resetCookies();
  }

  function init() {
    SA.pageConfig = SA.pageConfig || {};
    initialize();
  }

  SA.run(init, 'sa-config');

}(window, window.SA, window.jQuery));
// Adapter for user_cookie object. All the requests to user_cookie should go here.
// Will be refactored to deliver user_cookie object and work with promises
(function(w, SA){

  'use strict';

  var s = SA.UsingNamespace('SA.Data.MonsterCookie'), mc = w.user_cookie || {};

  s.get = function(key){
    return mc[key] || null;
  };

}(window, window.SA));
(function (SA, $) {

  'use strict';

  // pre-cache some vars for short names and faster lookup

  var User = SA.UsingNamespace('SA.Data.User'), app = SA.App, d = SA.Data, cp = d.Cookies, mc = d.MonsterCookie,
    lc = d.Cache,
    userEmail;


  String.prototype.rjust = function (n, c) {
    var result = this;
    while (result.length < n) {
      result = c + result;
    }
    return result;
  };

  function extractedIdFromAuth() {
    var authKey, idAsString;
    authKey = SA.Fn.param('auth_param') || cp.get('auth_param');
    if (authKey) {
      idAsString = authKey.split(':')[0];
      return parseInt(idAsString, 32);
    }
    return null;
  }

  function getUserImageTimestamp() {
    var retUserImageTimeStamp = 0;
    var userImageTimestamp = parseInt(lc.get('user_image_timestamp'), 10) || 0;

    if (userImageTimestamp) {
      var dtTimestamp = new Date(userImageTimestamp);
      if (dtTimestamp.getTime() <= new Date().getTime()) {
        lc.del('user_image_timestamp');
      } else {
        retUserImageTimeStamp = dtTimestamp.getTime();
      }
    }
    return retUserImageTimeStamp;
  }

  function email(cb) {
    $.ajax({
      method: 'GET',
      url: SA.App.host + '/users/auth_email'
    }).always(function (res) {
      res = res || {};
      if (res.email) {
        userEmail = res.email;
      }
      cb(res.email);
    });
  }

  function getUserUri() {
    var userUri = null;
    if (User.loggedIn()) {
      var authorSlug = cp.get('author_slug');
      if (authorSlug) {
        userUri = '/author/' + authorSlug;
      } else {
        userUri = '/user/' + User.id();
      }
    }
    return userUri;
  }

  // Public functions

  User.id = function () {
    return parseInt(cp.get('user_id'), 10) || 0;
  };

  User.loggedIn = function () {
    return !!User.id();
  };

  User.createdAt = function () {
    return mc.get('created_at');
  };

  User.nick = function () {
    if (User.loggedIn()) {
      return cp.get('user_nick') || ('User ' + User.id());
    }
    return null;
  };

  User.hasNick = function () {
    return !!cp.get('user_nick');
  };

  User.hasProfilePicture = function () {
    return !!mc.get('has_picture');
  };

  User.isDunning = function() {
    return mc.get('dunning_sub_keys') && mc.get('dunning_sub_keys').length > 0;
  };

  User.dunningSubKeys = function() {
    return mc.get('dunning_sub_keys');
  };

  User.perms = function () {
    return cp.get('user_perm');
  };

  User.isLimited = function () {
    return cp.get('user_limited') === '1';
  };

  //returns picture url for user by his id. type can be: small, big, medium, book, company
  User.pictureUrlFor = function (userID, type) {
    type = type || 'small';
    var stId = userID.toString().rjust(9, '0');
    var ts = Math.floor(new Date().getTime() / 600000); //10 minutes TTL
    if (userID === User.id()) {
      ts += getUserImageTimestamp();
    }
    return [app.assetHosts[0], 'images/users_profile', stId.substr(0, 3),
      stId.substr(3, 3), stId.substr(6, 3), (type + '_pic.png?t=' + ts)].join('/');
  };

  //returns picture url for current user. type can be: small, big, medium, book, company
  User.pictureUrl = function (type) {
    return User.loggedIn() ? User.pictureUrlFor(User.id(), type) : null;
  };

  User.isPro = function () {
    return !!app.pro;
  };

  User.isProPlus = function () {
    return !!app.proPlus;
  };

  User.isCommonPro = function () {
    return User.isPro() || User.isProPlus();
  };

  User.isMp = function () {
    return app.mp;
  };

  User.setHref = function (aElement, dest) {
    if (aElement) {
      // get <a> and set the right href that include user/XXXX/ or author/AUTHOR_SLUG/ before of dest
      var userUri = getUserUri();
      if (userUri) {
        aElement.href = userUri + '/' + dest;
      }
    }
  };

  User.followedUsers = function () {
    var f = mc.get('user_following_users');
    return f ? $.map(f.split(','), function (id) {
      return parseInt(id, 10);
    }) : [];
  };

  User.followedAuthors = function () {
    var w = mc.get('user_watchlist_authors');
    return (w && w.split) ? w.split(',') : [];
  };

  User.getRtaAuthorsIds = function () {
    return mc.get('user_following_authors') || [];
  };

  User.isFollowingAuthor = function (authorSlug) {
    return User.followedAuthors().indexOf(authorSlug) !== -1;
  };

  User.isFollowingUser = function (id) {
    return User.followedUsers().indexOf(id) !== -1;
  };

  User.isGettingRtaFromAuthor = function (authorTagId) {
    return User.getRtaAuthorsIds().indexOf(authorTagId) !== -1;
  };

  User.hasBlogPosts = function () {
    return !!mc.get('is_instablogger');
  };

  User.isPaidUser = function () {
    return User.isMp() || User.isCommonPro() || User.isAdFree();
  };

  User.hasPaidSubscription = function () {
    return !!mc.get('has_paid_subscription');
  };

  User.isAuthor = function () {
    return !!this.authorSlug();
  };

  User.isMPAuthor = function () {
    return !!mc.get('is_marketplace_author') || !!mc.get('is_contributing_author') || !!mc.get('is_promoting_author');
  };

  User.MPModeratorForAuthorId = function () {
    return mc.get('moderator_for_author_id');
  };

  User.MPModeratorForService = function () {
    return mc.get('moderator_service_name');
  };

  User.profileLink = function () {
    if (User.loggedIn()) {
      var s = this.authorSlug();
      return s ? '/author/' + s : '/user/' + User.id() + '/profile';
    }
    return null;
  };

  User.authorResearch = function () {
    var s = mc.get('author_research_subscriptions');
    return s ? s.split(',') : [];
  };

  User.mpAuthorIds = function () {
    return mc.get('mp_author_ids') || [];
  };

  User.isMarketplaceGuestUser = function (aSlug) {
    var s = mc.get('marketplace_guest_slugs');
    s = s ? s.split(',') : [];
    return s.indexOf(aSlug) !== -1;
  };

  User.isMarketplaceAdmin = function () {
    return !!mc.get('is_marketplace_admin');
  };

  User.authorSlug = function () {
    return mc.get('user_author_slug');
  };

  User.shouldSeeAuthorResearch = function (aSlug) {
    return User.authorSlug() === aSlug || User.authorResearch().indexOf(aSlug) !== -1 || User.isMarketplaceAdmin();
  };

  User.hasAuthorResearch = function () {
    return this.authorResearch().length > 0;
  };

  User.shouldUpdatePosition = function (authorSlug) {
    return User.authorSlug() === authorSlug || mc.get('is_positions_admin');
  };

  User.hasContributorDetails = function () {
    return !!mc.get('has_contributor_details');
  };

  User.getRTASymbolsOnArticles = function () {
    var s = mc.get('rta_articles');
    return s ? s.split(',') : [];
  };

  User.getRTASymbolsOnMC = function () {
    var m = mc.get('rta_market_currents');
    return m ? m.split(',') : [];
  };

  User.getRTASymbolsOnFilings = function () {
    var s = mc.get('filings');
    return s ? s.split(',') : [];
  };

  User.getRTASymbolsOnTrading = function () {
    var s = mc.get('trading_rta');
    return s ? s.split(',') : [];
  };

  User.getNewsletterSubscriptions = function () {
    var s = mc.get('user_non_watchlist_slugs');
    return s ? s.split(',') : [];
  };

  User.newslettersCount = function () {
    return mc.get('newsletters_count') || 0;
  };

  User.getRTASymbols = function () {
    return $.unique(this.getRTASymbolsOnMC().concat(this.getRTASymbolsOnArticles()));
  };

  User.countRTASymbols = function () {
    return this.getRTASymbols().length;
  };

  User.hasPortfolio = function () {
    return !$.isEmptyObject(mc.get('user_portfolios'));
  };

  User.getPortfolios = function () {
    return mc.get('user_portfolios') || [];
  };

  User.getAddedModelPortfoliosIds = function () {
    return mc.get('added_model_portfolios_ids') || [];
  };

  User.getPortfolioTickers = function () {
    return mc.get('user_watchlist_slugs') || '';
  };

  User.hasTicker = function (slug) {
    return User.portfolioTickers().indexOf(slug) > -1;
  };

  User.portfolioTickers = function () {
    return this.getPortfolioTickers().trim().split(',');
  };

  User.tickerRatingStatus = function () {
    return mc.get('ticker_rating_status');
  };

  User.isSATeam = function () {
    return !!mc.get('sa_team');
  };

  User.portfolioCount = function () {
    var portfolios = mc.get('user_portfolios');
    return portfolios ? portfolios.length : 0;
  };

  User.isAdFree = function () {
    return !!mc.get('ad_free_user');
  };

  User.adblockScore = function () {
    return mc.get('adblock_score');
  };

  User.inBetaGroup = function () {
    return !!mc.get('in_beta_group');
  };

  User.getIdFromAuthParam = function () {
    return extractedIdFromAuth();
  };

  User.saEmail = function (cb) {
    return userEmail ? cb(userEmail) : email(cb);
  };

  User.passedModeration = function () {
    return mc.get('passed_moderation');
  };

  User.everPremium = function () {
    return !!SA.Data.Cookies.get('ever_pro');
  };

  User.isSubscribedToAuthorResearch = function (authorSlug) {
    var authorResearchSubscriptionsStr = mc.get('author_research_subscriptions'),
      authorsSlugs = authorResearchSubscriptionsStr ? authorResearchSubscriptionsStr.split(',') : [];

    return ($.inArray((authorSlug || ''), authorsSlugs) > -1);
  };

  User.mutedUsers = function () {
    var m = mc.get('muted_users');
    return m ? $.map(m.split(','), function (id) {
        return parseInt(id, 10);
      })
      : [];
  };

  User.isPremiumFreeTrialEligible = function () {
    return !window.user_cookie ||
      (!Object.keys(window.user_cookie).length ||
        !('is_premium_free_trial_eligible' in window.user_cookie) ||
        window.user_cookie.is_premium_free_trial_eligible);
  };

  User.isProFreeTrialEligible = function () {
    return !window.user_cookie ||
      (!Object.keys(window.user_cookie).length ||
        !('is_pro_free_trial_eligible' in window.user_cookie) ||
        window.user_cookie.is_pro_free_trial_eligible);
  };

  User.isNewEssentialTour = function() {
    var endOfFreeTrial = mc.get('premium_trial_ends'),
      nowTs = new Date().getTime();
    return nowTs < endOfFreeTrial;
  };

  User.isShowLauncher = function() {
    return mc.get('is_product_launcher');
  };

  User.introductionTours = function () {
    var tours = mc.get('introduction_tours');
    if (tours) {
      var userTours = JSON.parse(tours);
      return Object.keys(userTours).reduce(function (obj, key) {
        obj[userTours[key]] = key;
        return obj;
      }, {});
    }
    return {};
  };

  User.gtmData = function() {
    if (User.loggedIn()) {
      var gtmData = mc.get('gtm_data') || {},
        now = new Date(),
        ads_kvs = window.user_cookie.ads_kvs ? window.user_cookie.ads_kvs : {},
        gtm_ads_kvs = {};

      // add user ads KVs (with dfp prefix)
      for (var attr in ads_kvs) {
        gtm_ads_kvs["dfp_"+attr] = $.isArray(ads_kvs[attr]) ? ads_kvs[attr].join(',') : ads_kvs[attr];
      }
      $.extend(gtmData, gtm_ads_kvs);

      gtmData.isLoggedIn = 'Yes';
      gtmData.userId = User.id();
      gtmData.isContributor = User.isAuthor() ? 'Yes' : 'No';
      gtmData.registrationSeniority = Math.floor((now - gtmData.userCreationDate) / (1000 * 3600 * 24));

      delete gtmData.userCreationDate;

      if (gtmData.saSubscriptionExtra) {
        var contractEffectiveDate = new Date(gtmData.saSubscriptionExtra.contractEffectiveDate),
          serviceActivationDate = new Date(gtmData.saSubscriptionExtra.serviceActivationDate);

        gtmData.subscriptionSeniority = Math.floor((now - contractEffectiveDate) / (1000 * 3600 * 24));
        gtmData.premiumFreeTrial = now > serviceActivationDate ? 'No' : 'Yes';

        delete gtmData.saSubscriptionExtra;
      }

      return gtmData;
    } else {
      return {
        isLoggedIn: 'No'
      };
    }
  };

  function trackSessiosVisit() {
    if (!sessionStorage || SA.App.isCrossPlatformPage){
      return;
    }
    var currentVisitCount = Number(sessionStorage.getItem('page_visited'));
    sessionStorage.setItem('page_visited', currentVisitCount + 1);
  }

  trackSessiosVisit();

}(window.SA, window.jQuery));
(function (SA, $) {
  var lStore = SA.Data.Cache,
    storageUtcOffset = lStore.get('utc_offset'),
    currentOffset = new Date().getTimezoneOffset() / (-60);

  if ((!isNaN(currentOffset) && SA.Data.User.loggedIn()) && (!storageUtcOffset || storageUtcOffset != currentOffset)) {
    $.post('/users/save_user_offset', { utc_offset: currentOffset }, function (res) {
      if (res.status === 'success') {
        lStore.set('utc_offset', currentOffset);
      }
    });
  }
}(window.SA, window.jQuery));
// module for detection various browser features

(function(w, SA, $){

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.Detect'),
      // cache addBlock detection
      adBlockDetected, touchDetected = null;

  function createAd() {
    var ad = $('<div></div>').attr('id', 'ad_unit').css({'position': 'absolute', 'left': '-9999px', 'height': '5px', 'width': '5px', 'visibility': 'visible', 'display': 'block', 'opacity': '1'});
    $('body').append(ad);
    return ad;
  }

  // public functions

  // method to detect if AdBlock enabled on the page
  scope.adBlock = function() {
    var $ad;
    if(!adBlockDetected) {
      $ad = createAd();
      adBlockDetected = !$ad.is(':visible') || $ad.css('position') !== 'absolute' || $ad.css('left') !== '-9999px' || $ad.css('height') !== '5px' || $ad.css('width') !== '5px' || $ad.css('display') !== 'block' || $ad.css('opacity') !== '1';
      $ad.remove();
    }
    return adBlockDetected;
  };

  // method to detect if browser has support of SVG
  scope.svg = function() {
    var $d = $('<div>'), $c;
    $d.append('<svg>');
    $c = $d.children();
    return ((w.SVGRect && $c.length && $c.get(0).namespaceURI) === 'http://www.w3.org/2000/svg');
  };

  // method to detect if running on touch screen
  scope.touch = function() {
    if(touchDetected === null) {
      try{
        var hasTouchStart = window.hasOwnProperty('ontouchstart'),
            hasPosMaxTouchPoints = (!!navigator &&
            ((navigator.hasOwnProperty('maxTouchPoints') &&
            navigator.maxTouchPoints > 0) ||
            (navigator.hasOwnProperty('msMaxTouchPoints') &&
            navigator.msMaxTouchPoints > 0))),
            isTouchDocument = !!(window.hasOwnProperty('DocumentTouch') && document instanceof DocumentTouch);

        touchDetected = (hasTouchStart || hasPosMaxTouchPoints || isTouchDocument);
      } catch(ignore){
        touchDetected = false;
      }
    }
    return touchDetected;
  };

}(window, window.SA, window.jQuery));
(function (SA) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.Validate');

  function isExternalUrlAllowed(url) {
    var allowedExternalUrls = scope.getAllowedExternalUrls();
    for (var i = 0, len = allowedExternalUrls.length; i < len; i++) {
      var domain_name = allowedExternalUrls[i],
        regex = new RegExp(domain_name),
        isAllowed = regex.test(url);

      if (isAllowed) {
        return true;
      }
    }
    return false;
  }

  scope.getAllowedExternalUrls = function () {
    return ['youtube', 'facebook', 'twitter', 'vimeo', 'linkedin', 'docs.google'].map(function (name) {
      return name + '.com';
    });
  };

  scope.isNumeric = function (val) {
    return (/^[0-9]+$/).test(val);
  };

  scope.between = function (val, min, max) {
    var len = val.length;
    return (len >= min && len <= max);
  };

  scope.email = function (val) {
    return (/^\w[\w#$\%^&*'\/=?_`{|}~+-]*(\.[\w#$\%^&*'\/=?_`{|}~+-]+)*@(\w[\w-]*\.)+[a-z]{2,63}$/i).test(val);
  };

  scope.password = function (val) {
    return val && val.length >= 4 && val.length <= 40;
  };

  scope.phone = function (val) {
    return ((/^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/).test(val));
  };

  scope.fullName = function (field) {
    return (/^[a-z\-\.\s]+$/i).test(field.val().trim());
  };

  scope.isUserNick = function (nick) {
    return nick.indexOf('@') < 0;
  };

  scope.required = function (field) {
    var value = field.val().trim();
    if ((field.type === 'checkbox') || (field.type === 'radio')) {
      return field.prop('checked');
    }
    return (value !== null && value !== '');
  };

  scope.htmlRequired = function (field) {
    var value = field.html().trim();
    return (value !== null && value !== '');
  };

  scope.isFacebookOrInstagram = function (url) {
    var facebook = (/(https?)?:?\/?\/?(www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/?(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/ig);
    var instagram = (/(https?)?:?\/?\/?(www\.)?(instagram\.com)\/?([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)?/);
    return facebook.test(url) || instagram.test(url);
  };

  scope.isTwitterOrLinkedIn = function (url) {
    var twitter = (/(https?)?:?\/?\/?(www\.)?twitter\.com\/?([A-z0-9_]+\/?)?/);
    var linkedin = (/(www\.)?([\w]+\.)?linkedin\.com(\/(pub|in|profile)?\/?[A-z0-9_-]+)?\/?/);
    return twitter.test(url) || linkedin.test(url);
  };

  scope.isUrl = function (url) {
    return (/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,5}\b([-a-zA-Z0-9@:%_\+~#?&//=]*(.aspx|.htm|.html)?)/g).test(url.trim());
  };

  scope.isSpecificWebUrl = function (url, webName) {
    return scope.isUrl(url.trim()) && url.indexOf(webName) !== -1;
  };

  scope.isInternalUrl = function (url) {
    return url.charAt(0) === '/' || /^https?:\/\/(\w+\.)?seekingalpha.com([\/?#]|$)/gi.test(url);
  };

  scope.isExternalLink = function (href, allowFromWhiteList) {
    var isExternal = scope.isUrl(href) && !scope.isInternalUrl(href);
    if (isExternal) {
      return allowFromWhiteList ? !isExternalUrlAllowed(href) : true;
    }
    return false;
  };

  scope.containsExternalLinks = function ($el, allowFromWhiteList) {
    var links = $el.find('a').not('[rel="lightbox"]');
    for (var i = 0, len = links.length; i < len; i++) {
      if (scope.isExternalLink(links[i].href, allowFromWhiteList)) {
        return true;
      }
    }
    return scope.containsLinkString($el.clone());
  };

  scope.containsLinkString = function ($clone) {
    $clone.find('a,figure,img').remove();
    var html = $clone.html();
    var urlStrings = [
      /http:\/\/(?!seekingalpha)/,
      /https:\/\/(?!seekingalpha)/,
      /www.(?!seekingalpha)/];
    for (var i = 0; i < urlStrings.length; i++) {
      if (new RegExp(urlStrings[i]).test(html)) {
        return true;
      }
    }
    return false;
  };

  scope.containMinimumChars = function (obj, minChars) {
    var charsCount = obj.replace(/<p\s*\/?>/gi, ' ').replace(/<\/p>/gm, '').replace(/<br\s*\/?>/gi, ' ').trim().length;
    if (charsCount === 0) {
      return true;
    }
    return charsCount >= minChars;
  };

  scope.containMinimumWords = function (obj, minWords) {
    var wordCount = obj.replace(/<p\s*\/?>/gi, ' ').replace(/<\/p>/gm, '').replace(/<br\s*\/?>/gi, ' ').trim().split(/\s+/).length;
    return wordCount >= minWords;
  };

}(window.SA));


//jQuery implementation of pub-sub observer pattern
// for more info https://github.com/shichuan/javascript-patterns/blob/master/jquery-patterns/pubsub-custom-events.html

(function(SA, $){

  'use strict';

  var s = SA.UsingNamespace('SA.Utils.Observer'), $ch = $({});

  s.subscribe = function(ch, callback) {
    $ch.on(ch, callback);
  };

  s.unsubscribe = function(ch, handler) {
    $ch.off(ch, handler);
  };

  s.publish = function(ch, data) {
    $ch.trigger(ch, [data]);
  };

}(window.SA, window.jQuery));

// Module to retrieve sasource.
// sasource - custom param stored in cookies or passed with query param to track from which page/link/even user got to current page
// sasource lookup priority = cookies(_sasource) || query param(source) || ''
// sasource can be also set using custom html attribute. Ex: <a href="http..." sasoure="header-tab">Click Me</a>. In this case, if user clicks the link, next page's sasource will be set to header-tab
// After SA source retrieved, it is stored in private variable saSource, _sasource cookie expired and source param removed using history.replaceState

(function(w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.SASource'),
    cp = SA.Data.Cookies,
    pageData = SA.pageConfig ? SA.pageConfig.Data : {},
    safeUrl,
    notAllowAttributes = [
      'user_email',
      'go',
      'new_email',
      'email',
      'email_id',
      'pu',
      'bill_period',
      'dt',
      'update_payment_method_succ',
      'update_address_succ',
      'restore_sub_succ',
      'aconf'
    ];

  // prevent removing source param on react pages to keep source available for React
  if(!window.SA_DESKTOP_VIEW) {
    notAllowAttributes.push('source');
  }

  // enable refresh on model portfolio to keep the content
  if (((SA.pageConfig || {}).Data || {}).isModelPortfolio) {
    notAllowAttributes.splice(notAllowAttributes.indexOf('pu'), 1);
  }

  function replaceUnsafeParam(search, param) {
    return search.replace(new RegExp('([?&])' + param + '=([^&]+)(&)?', 'i'), function(found, sep1, value, sep2){
      return sep2 ? sep1 : '';
    });
  }

  // clean push state from unwanted values
  function filterSearch(s) {
    safeUrl = location.pathname + s + (SA.pageConfig.saSource ? (s ? '&' : '?') + 'source=' + encodeURIComponent(SA.pageConfig.saSource) : '');

    if (s !== w.location.search && w.history && history.replaceState){
      history.replaceState(null, '', location.pathname + s + location.hash);
    }
  }

  function replaceQueryString() {
    var search = location.search;
    if(search) {
      notAllowAttributes.forEach(function(name) {
        search = replaceUnsafeParam(search, name);
      });
    }
    filterSearch(search);
  }

  function unifiedPath(){
    var path = location.pathname;
    //replace known letters dynamic rules
    var m = path.match(/^\/(author|user|symbol)\/(?:[^\/]+\/([^\/]+))?/);
    if (m){
      path = m[2] ? '/' + m[1] + '/*/' + m[2] : '/' + m[1];
    }

    //replace any numeric path
    return path.replace(/\/\d[^\/]*/g,'/*').replace(/\/\*$/,'');
  }

  function initSourceListeners() {
    $(w.document).on('click', 'a', function() {
      var $link = $(this), saSource = $link.attr('sasource') || '', href = this.href;
      var m = href.match(/^https?:\/\/([^\/]+)/), domain = m ? m[1] : null;
      var f = SA.App.userEchoHost.match(/^https?:\/\/([^\/]+)/), feedbackDomain = f ? f[1] : null;
      if (domain && (!domain.match(/seekingalpha.com/) || domain.match(feedbackDomain))) {
        if (pageData.pageType === 'symbol_page') {
          SA.Vendor.Gtm.ga360Event({
            GA_event_category: 'Outbound',
            GA_event_action: 'More from our partners clicked',
            GA_event_label: $link.text(),
            outBound: href
          });
        }
        SA.Logger.Mone.event('external_content', 'link', 'click', {
          data: {
            url: href,
            partner_link: true
          }
        });
      } else if (saSource) {
        cp.set('_sasource', saSource, {expires: 60}); // 1 minute - will be cleaned by next init
      }

      SA.Vendor.Gtm.ga360ClickEvents.call(this, {
        saSource: saSource,
        href: href
      });
    });
  }

  function init() {
    SA.pageConfig = SA.pageConfig || {};

    // finding saSource from cookies and url params
    // keep saSource in pageConfig as only true value
    SA.pageConfig.saSource = SA.pageConfig.saSource || SA.Fn.param('source') || cp.get('_sasource') || '';

    // Keep approved confirmation event for later usage
    SA.pageConfig.aconf = SA.Fn.param('aconf');

    // prevent removing source param on react pages to keep source available for React
    if(!window.SA_DESKTOP_VIEW) {
      cp.expire('_sasource');
    }

    initSourceListeners();
    replaceQueryString();
  }

  SA.run(init, 'saSource-init');

  // Public methods
  scope.setReferrer = function (ref) {
    if (SA.Data.Cache.enabled && w === w.top) { // exclude referrer from iframes
      sessionStorage.setItem('_referrer', ref);
    }
  };

  // Legacy variable storing document referrer
  scope.referrer = function(ajaxReferrer){
    ajaxReferrer = ajaxReferrer || false;
    var ref;
    if(document.referrer === '' && !ajaxReferrer){
      ref = '';
    }else{
      ref = SA.Data.Cache.enabled ? sessionStorage.getItem('_referrer') || document.referrer || '' : document.referrer || '';
    }
    if(SA.Data.Cache.enabled) {
      sessionStorage.removeItem('_referrer');
    }
    return ref;
  };

  // Retrieve saSource
  scope.get = function() {
    return SA.pageConfig.saSource;
  };

  // Replace current saSource. Used for ajax pages
  scope.set = function(val) {
    SA.pageConfig.saSource = val || null;
  };

  // Indicates that user got to the page not by manual action (link click or redirect), but page was refreshed automatically after some idle time
  scope.isAutoRefreshed = function() {
    return SA.pageConfig.saSource === 'refreshed';
  };

  scope.safeUrl = function() {
    return safeUrl;
  };


}(window, window.SA, window.jQuery));

(function(w, SA){

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.Env'),
      ua = w.navigator.userAgent || '';

  function match(regex, ua) {
    return regex.test(ua);
  }

  function getFirstMatch(regex) {
    var m = ua.match(regex);
    return (m && m.length > 1 && m[1]) || '';
  }

  // Mobile Devices

  scope.isApplePhone = function () {
    return match(/iPhone/i, ua) || match(/iPod/i, ua);
  };

  scope.isAppleIpad = function () {
    return match(/iPad/i, ua);
  };

  scope.isAppleDevice = function () {
    return this.isApplePhone() || this.isAppleIpad();
  };

  scope.isAndroidDevice = function () {
    return match(/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, ua) || match(/Android/i, ua);
  };

  scope.isAndroidPhone = function () {
    return match(/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i, ua);
  };

  scope.isAndroidTablet = function () {
    return match(/Android/i, ua);
  };

  scope.isWindowsDevice = function () {
    return match(/IEMobile/i, ua) || match(/(?=.*\bWindows\b)(?=.*\bARM\b)/i, ua);
  };

  scope.isOtherDevice = function () {
    return match(/BlackBerry/i, ua) || match(/BB10/i, ua) || match(/Opera Mini/i, ua) || match(/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i, ua);
  };

  scope.isMobile = function () {
    return this.isApplePhone() || this.isAndroidPhone() || this.isWindowsDevice() || this.isOtherDevice();
  };

  scope.isTablet = function () {
    return this.isAppleIpad() || this.isAndroidTablet();
  };

  // Browsers

  scope.isIE = function() {
    return (/msie|trident/i).test(ua);
  };

  scope.IEver = function(){
    return this.isIE() ? parseInt(getFirstMatch(/(?:msie |rv:)(\d+(\.\d+)?)/i), 10) : 0;
  };

  scope.isFirefox = function(){
    return (/firefox|iceweasel/i).test(ua);
  };

  scope.isOpera = function(){
    return (/opera|opr/i).test(ua);
  };

  scope.isEdge = function() {
    return (/Edge/i).test(ua);
  };

  scope.isChrome = function() {
    return (/chrome|crios|crmo/i).test(ua) && !this.isOpera() && !this.isEdge();
  };

  scope.isSafari = function(){
    return ((/safari/i).test(ua) && !this.isChrome() && !this.isEdge()) && !(/PhantomJS/i).test(ua);
  };

}(window, window.SA));

// SA internal pageView/event tracker
// Sends Data using Ajax calls

// pageView is sent as ;;; separated string and has following structure:
//   version ;;; referrer ;;; event_name ;;; location_path;;; href_params ;;; machine_cookie  ;;; session_cookie ;;;
//   (user_id;;;user_nick;;;{used to be user email, but now it's just empty string};;;u_voc;;;author_slug;;;user_mywebsite_url;;;gigya_notified_login;;;user_gigya_settings;;;
//   user_watchlist_slugs;;;user_non_watchlist_slugs;;;user_watchlist_authors;;;user_following_users;;;{symbols};;;{sectors};;;{themes};;;{authors}
//   ;;; other

// pageView automatically sent on every page

//NOTE!
//In this version all the ex Mone extra data must be stored under SA.App.moneData instead of Mone object

SA.define('SA.Logger.Mone', [], function () {

  'use strict';

  var scope = {
      Types: {
        REGULAR: 'regular',
        MOBILE: 'mobile',
        IPHONE: 'iphone'
      }
    },
    isPreview = (SA.App.isCms || SA.App.isSharkPreview),
    config = SA.pageConfig || {},
    pageData = config ? config.Data : {},
    extraEventData = {},
    user = SA.Data.User,
    ls = SA.Data.Cache,
    cs = SA.Data.Cookies,
    mc = SA.Data.MonsterCookie,
    PAGE_DATA_VER = 1,
    VERSION = 2,
    prevPageData,
    isUnbouncePage,
    lastPageUrl,
    notWanted = /^__|^(user_(?:cookie_key|perm|remember_token|id|nick|email|mywebsite_url|gigya_settings|notifications)|author_slug|machine_cookie|gigya_(?:notified_login|post_object)|u_voc|last_comment_date|last_comment|mc_ids|portfolio_popuped|login_popuped|first_page)=/,
    sourceDomains = ['google.com', 'yahoo.com', 'bing.com', 'aol.com', 'msn.com', 'ask.com', 'baidu.com'],
    noSourceDomains = ['news.google.com', 'google.com/finance'],
    SOURCES = {
      msn: ['messages.finance.yahoo.com'],
      yahoo: ['messages.finance.yahoo.com'],
      nasdaq: ['www.wallstreet-online.de'],
      motleyfool: ['messages.finance.yahoo.com', 'boards.fool.com'],
      etrade: ['messages.finance.yahoo.com'],
      reuters: [],
      cnbc: [],
      thestreet: ['stockpickr.com'],
      bloomberg: [],
      themarkets: [],
      intbrokers_pro: [],
      marketwatch: []
    },
    unbounceOpt;

  function quickURLHash(url, bytes) {
    var res = 0, hashIndex = url.indexOf('#'), i = 0, len;
    bytes = bytes || 2;
    if (hashIndex !== -1) {
      url = url.substr(0, hashIndex);
    }

    len = url.length;
    for (i; i < len; i += 1) {
      res ^= url.charCodeAt(i) << ((i % bytes) * 8);
    }

    return res;
  }

  function getKeysData() {
    var d = null;
    SA.exec(function () {
      d = JSON.parse(ls.get('mone_keys'));
    }, 'mone_keys');
    return d;
  }

  function saveKeysData(keys) {
    SA.exec(function () {
      ls.set('mone_keys', JSON.stringify({
        ver: PAGE_DATA_VER,
        keys: keys
      }));
    });
  }

  function getPrevPageData(referrer) {
    var keys = {}, since = new Date().getTime() / 1000 - 24 * 3600, deleted = 0, data = getKeysData();

    if (data && data.ver === PAGE_DATA_VER) {
      keys = data.keys;
    } else {
      data = null;
    }

    // clean old
    $.each(keys, function (i) {
      if (keys[i].at < since) {
        delete keys[i];
        deleted += 1;
      }
    });

    if (!data || deleted > 0) {
      saveKeysData(keys);
    }

    return keys[quickURLHash(referrer)];
  }

  function addPageData(url, pageKey) {
    var keys = {}, data = getKeysData(), key;

    if (data && data.ver === PAGE_DATA_VER) {
      keys = data.keys;
    }

    lastPageUrl = location.protocol + '//' + (isUnbouncePage ? 'subscriptions.seekingalpha.com' : location.host) + url;
    key = {
      at: new Date().getTime() / 1000,
      url: lastPageUrl,
      key: pageKey
    };

    keys[quickURLHash(lastPageUrl)] = key;

    saveKeysData(keys);
    SA.Utils.SASource.setReferrer(lastPageUrl);
  }

  function getRef(ajaxReferrer) {
    var ref = SA.Utils.SASource.referrer(ajaxReferrer),
      emailSession = cs.get('email_session');
    if (emailSession && (!ref || !/seekingalpha\.com/.test(ref))) {
      ref = SA.App.emailHost + '/?type=click&emailid=' + emailSession;
    }
    return ref;
  }

  function addParam(str, params) {
    str += (str ? '&' : '?') + params;
    return str;
  }

  function addSource(source, params) {
    if (source && !/[?&]source=[^&]/.test(params)) {
      params = addParam(params, 'source=' + source);
    }
    return params;
  }

  function addOrganic(ref, params) {
    // try to get google organic param
    var g = cs.get('__utmz');
    if (g && /organic/.test(g) && /google/.test(g) && (ref === '' || (ref !== null && /google/.test(ref)))) {
      params = addParam(params, 'google_organic=1');
    }
    return params;
  }

  function daysToMs(days) {
    return 24 * 60 * 60 * 1000 * days;
  }

  function extendParams(ref, source, data) {
    data.params = addSource(source, data.params);
    data.params = addOrganic(ref, data.params);
    var moneData = SA.App.moneData || {};
    if (moneData.params) {
      data.params = addParam(data.params, moneData.params);
    }
    return data;
  }

  function getUrlData(ref, source, overrideUrl) {
    var moneData = SA.App.moneData || {};
    var url = overrideUrl || moneData.url || SA.Utils.SASource.safeUrl() || '';
    url = url.match(/^(?:https?:\/\/[^\/?#]+)?(\/[^?#]*)(\?[^#]*)?/);
    if (url) {
      url = {path: url[1], params: url[2] || ''};
    } else {
      url = {path: location.pathname, params: location.search};
    }

    return extendParams(ref, source, url);
  }

  function getSourceMatch(source) {
    var m = null;
    if (source) {
      m = source.toLowerCase().match(/^[a-z]+/);
      if (m) {
        m = m[0];
      }
    }
    return m;
  }

  function dUrl(sMatch, ref) {
    var d = false;
    $.each(SOURCES[sMatch], function (i, denUrl) {
      if (new RegExp('^https?:\/\/' + denUrl, 'i').test(ref.toLowerCase())) {
        d = true;
      }
    });
    return d;
  }

  function sMatchRegexp(ref, key, t) {
    var matched = ref.toLowerCase().match(new RegExp('(' + noSourceDomains.join('|').replace(/\./g, '\\.').replace('/', '\\/') + ')'));
    var sMatched = ref.toLowerCase().match(new RegExp('(' + sourceDomains.join('|').replace(/\./g, '\\.') + ')'));
    if (matched) {
      ls.set(key, 'google.com', t);
    } else if (sMatched) {
      ls.set(key, 'search|' + sMatched[0], t);
    } else if (ref === '') {
      ls.set(key, 'direct', t);
    } else {
      ls.set(key, 'other', t);
    }
  }

  function setPartnerData(source, ref) {
    var key = 'n_ref_partner', nRefPartner = ls.get(key, true),
      sourceMatch = getSourceMatch(), deniedUrl = false, t = daysToMs(30);

    if (source && sourceMatch && SOURCES[sourceMatch] && !nRefPartner) {
      deniedUrl = dUrl(sourceMatch, ref);
      ls.set(key, deniedUrl ? 'other' : source.toLowerCase().match(/^[a-z]+/)[0], t);
    } else if (nRefPartner) {
      ls.set(key, nRefPartner, t);
    } else {
      sMatchRegexp(ref, key, t);
    }
  }

  function readDocumentCookies() {
    var g = cs.get;
    // empty string for user email
    return [g('user_id'), g('user_nick'), '', g('u_voc'), g('author_slug'), g('user_mywebsite_url'), g('gigya_notified_login'), g('user_gigya_settings')].join(';;;');
  }

  function b(val) {
    return '{' + (mc.get(val) || '') + '}';
  }

  function readUserCookie() {
    return [b('user_watchlist_slugs'), b('user_non_watchlist_slugs'), b('user_watchlist_authors'), b('user_following_users')].join(';;;');
  }

  function addCustomVars(rc) {
    var screenX = 0;

    rc.push('load_time=' + (new Date().getTime() - (SA.App.initTime || 0)));

    if (mc.get('stocktalker')) {
      rc.push('stocktalker=1');
    }

    SA.exec(function () {
      screenX = window.screen.availWidth;
    });

    rc.push('screenx=' + screenX);

    if (SA.AdsConf) {
      rc.push('us_geo=' + SA.AdsConf.isUSA);
    }

    if (pageData && pageData.newSymbolLayout) {
      rc.push('new_qp=' + (pageData.newSymbolLayout == 1 ? 'test' : 'control'));
    }

    if(pageData && pageData.hasOwnProperty('mpServiceId')){
      rc.push('marketplace_owner=' + (pageData.mpServiceId || ''));
    }

    if (!ls.get('h_px')) {
      rc.push('p=bot');
    }

    if (isUnbouncePage) {
      rc.push('unbounce=true');
      rc.push('service_id=' + unbounceOpt.serviceId);
    }

    return rc;
  }

  function readOtherCookies() {
    var ca = document.cookie.split(/\s*;\s*/), rc = [], i = 0, len = ca.length;
    if (user.loggedIn()) {
      rc.push('rsc=' + user.countRTASymbols());
    }

    switch (pageData.pageType) {
      case 'article':
        var article = pageData.article;
        var lockedStatus = (article.isArchived && 'Archived') || (article.inEmbargo && 'Embargo') || 'No';
        var mpService = pageData.author.exclusiveResearch;
        rc.push('lockedStatus=' + lockedStatus);
        rc.push('marketplace_owner=' + (mpService ? mpService.id : ''));
        break;
      case 'single_news':
        rc.push('lockedStatus=' + pageData.mc.isProPaywall ? 'Archived' : 'No');
        break;
    }

    rc.push('pro_status=' + (mc.get('user_pro_status') || 0));
    for (i; i < len; i += 1) {
      if (!/\n|;;;/.test(unescape(ca[i])) && !notWanted.test(ca[i])) {
        rc.push(ca[i]);
      }
    }

    rc = addCustomVars(rc);

    return unescape(rc.join('; '));
  }

  function getPvData(url, pageReferrer) {
    var tagData = '', d = [], deviceType;

    if (isUnbouncePage) {
      deviceType = unbounceOpt.device;
    } else {
      deviceType = SA.App.type || 'regular';
    }

    d.push(VERSION);
    d.push(deviceType);
    d.push(SA.pk.get());
    d.push((prevPageData && prevPageData.key) || '');
    d.push((prevPageData && prevPageData.url) || pageReferrer);
    d.push(url.path);
    d.push(url.params);
    d.push(config.machineID);
    d.push(config.sessionID);
    d.push(readDocumentCookies());
    d.push(readUserCookie());
    d.push(tagData);
    d.push(readOtherCookies());
    return escape(d.join(';;;'));
  }

  function touch(opt) {
    opt = opt || {};

    // allows to pass custom source with options
    opt.saSource = opt.hasOwnProperty('saSource') ? opt.saSource : SA.Utils.SASource.get();
    opt.ajaxReferrer = opt.hasOwnProperty('ajaxReferrer') ? opt.ajaxReferrer : false;
    var pageReferrer = opt.referrer || getRef(opt.ajaxReferrer);
    var url = getUrlData(pageReferrer, opt.saSource, opt.url);
    isUnbouncePage = opt.url && /subscriptions\.seekingalpha\.com/.test(opt.url); // Unbounce pages will always use the opt.url
    if (isUnbouncePage) {
      unbounceOpt = opt;
    }

    if (pageReferrer) {
      prevPageData = getPrevPageData(pageReferrer);
    }

    addPageData(url.path + url.params, SA.pk.get());
    setPartnerData(opt.saSource, pageReferrer);
    setExtraEventData(url, pageReferrer);

    // Collect event data
    $.post('/mone', 'mone=' + getPvData(url, pageReferrer));
  }

  function setExtraEventData(url, pageReferrer) {
    var data = {
      referrer_key: (prevPageData && prevPageData.key) || '',
      referrer: (prevPageData && prevPageData.url) || pageReferrer,
      url: url.path,
      url_params: url.params,
      machine_cookie: config.machineID,
      session_cookie: config.sessionID,
      user_agent: navigator.userAgent,
      page_type: isUnbouncePage ? unbounceOpt.device : (SA.App.type || 'regular'),
    };
    if (user.loggedIn()) {
      data.user_id = user.id();
    }
    if (isUnbouncePage) {
      data.service_id = unbounceOpt.serviceId;
    }

    $.extend(extraEventData, data, pageEventData());
  }

  function event(type, source, action, opt) {
    // possibility to only send action
    if (action) {
      type = type || '';
      source = source || '';
    } else if (source) {
      action = source;
      source = type || '';
      type = '';
    } else if (type) {
      action = type;
      type = source = '';
    } else {
      return false;
    }

    if (pageData.unbounce_hosted_iframe) {
      var moneFrame = top['sa-unbounce-iframe'];
      var newPk = moneFrame.SA.pk.get();
      SA.pk.set(newPk);
      opt.moneKey = newPk;
      extraEventData = moneFrame.SA.Logger.Mone.getExtraEventData();
    }

    var params = {version: VERSION, key: opt.moneKey || SA.pk.get(), type: type, source: source, action: action},
      data = opt.data || {};

    if (params.key === SA.pk.get()) {
      $.extend(data, extraEventData);

      // support logged out users subscribing to a service (cookie is updated after complete_subscription)
      if (user.loggedIn() && !data.user_id) {
        data.user_id = user.id();
      }
    }

    if (!$.isEmptyObject(data)) {
      params.data = JSON.stringify(data);
    }

    return $.post('/mone_event', params);
  }

  function pageEventData() {
    var data = {};

    if(pageData.hasOwnProperty('mpServiceId')){
      data.marketplace_owner = pageData.mpServiceId;
    }

    switch (pageData.pageType) {
      case 'article':
        var article = pageData.article;
        var mpService = pageData.author.exclusiveResearch;
        data.lockedStatus = (article.isArchived && 'Archived') || (article.inEmbargo && 'Embargo') || 'No';
        data.editorsPicks = article.editorsPicks;
        data.marketplace_owner = (mpService ? mpService.id : '');
        break;
      case 'single_news':
        data.lockedStatus = pageData.mc.isProPaywall ? 'Archived' : 'No';
        break;
    }
    return data;
  }

  function init() {
    if (!isPreview && !SA.App.cancelPV) {
      touch();
    }
  }

  SA.run(init, 'sa-mone');

  //PUBLIC METHODS

  // retrieves PV data, that was sent on previous page. Stored in localStorage
  scope.getPrevPageData = function () {
    return prevPageData || {};
  };

  // sends custom event
  // @param {string} type - event type. Can be anything, but in most cases provided by BI. (optional)
  // @param {string} source - event source. (optional)
  // @param {string} action - type of interaction triggered the event.
  // @param {object} opt - options object (optional)
  // opt.data - object with custom data to be sent with event
  // returns jQuery ajax promise, so can be chained with done/then/when/fail handlers
  // Usage:
  //   SA.Logger.Mone.event('adblock', 'article_page', 'render', {data: {
  //     user: SA.Data.User.id
  //   }}).done(function() {
  //     window.location.href = '/';
  //   })
  scope.event = function (type, source, action, opt) {
    if (isPreview) {
      return false;
    }
    opt = opt || {};

    return event(type, source, action, opt);
  };

  // manually trigger page view event with original page key.
  // @param {object} opt - options object (optional)
  // opt.saSource - option to override page's sasource collected by SaSource module. May be useful when sending additional PV event on ajax generated page
  // opt.url - String, should be without host - overrides current url.
  scope.touch = function (opt) {
    touch(opt);
  };

  // manually trigger page view event with new page key
  // @param {object} opt - options object (optional)
  // opt.saSource - option to override page's sasource collected by SaSource module. May be useful when sending additional PV event on ajax generated page
  // opt.url - String, should be without host - overrides current url. Otherwise takes current url from window.location
  scope.pv = function (opt) {
    SA.pk.generate();
    opt = opt || {};
    // This is needed to override initial page url with current url, that might have been changed with pushState/replaceState
    opt.url = opt.url || (location.pathname + location.search);
    opt.saSource = opt.saSource || null;
    touch(opt);
  };

  scope.getExtraEventData = function () {
    return extraEventData;
  };

  return scope;
});
// Module responsible for tracking user interactions on the page and detecting when user become idle.

(function(SA, $){

  'use strict';

  // instance of this class tracks idle time of any element with list of events provided. Also responsible for execution 'back-ti-active' callbacks
  var IdleTimeTracker = function(opt) {

    opt = opt || {};
    opt.element = opt.element || $(window);
    opt.interruptEvents = opt.interruptEvents || 'mousemove mousedown keypress touchstart';

    var timerTime = new Date(), activeCallbacks = $.Callbacks();

    function onActive() {
      timerTime = new Date();
      activeCallbacks.fire();
    }

    function init () {
      opt.element.bindWithDelay(opt.interruptEvents, function(){
        onActive();
      }, 500, true);
    }

    this.getIdleTime = function() {
      return new Date() - timerTime;
    };

    this.addActiveCallback = function(callback){
      if($.isFunction(callback)){
        activeCallbacks.add(callback);
      }
    };

    SA.run(init, 'idle-time-track');

  };

  var documentIdleTracker = new IdleTimeTracker(), scope = SA.UsingNamespace('SA.Utils');
  scope.IdleTracker = documentIdleTracker;

  // Instance of this class responsible for tracking separate idle events with different idle time-outs and custom elements
  // @param {object} opt - configuration options
  // opt.idleTime - amount of time in ms. after which user treated as idle in case there were no interactions(click, scroll...) during interval provided. Default - 5min
  // opt.interruptEvents - space separated string of browser events that can interrupt idle state. Default: 'mousemove mousedown keypress touchstart'
  // opt.element - this option dives the way to track users interactions with specific dom element. Default: document
  scope.IdleNotifier = function(opt) {

    if (!(this instanceof scope.IdleNotifier)) {
      return new scope.IdleNotifier(opt);
    }

    opt = opt || {};
    opt.idleTime = opt.idleTime || 300 * 1000;
    opt.interruptEvents = opt.interruptEvents || '';

    var  idleTracker = opt.element ? new IdleTimeTracker({interruptEvents: opt.interruptEvents, element: opt.element}) : documentIdleTracker,
         isIdle = true, idleCallbacks = $.Callbacks(), activeCallbacks = $.Callbacks(), timeout;

    function onIdle(){
      if (idleTracker.getIdleTime() >= opt.idleTime) {
        isIdle = true;
        idleCallbacks.fire();
      }
    }

    function setIdleTimer() {
      clearTimeout(timeout);
      timeout = setTimeout(onIdle, opt.idleTime);
    }

    function onActive() {
      if (isIdle){
        isIdle = false;
        activeCallbacks.fire();
      }
      setIdleTimer();
    }

    function init() {
      setIdleTimer();
      idleTracker.addActiveCallback(onActive);
    }

    // get amount of time in ms user been idle
    this.getIdleTime = function() {
      return idleTracker.getIdleTime();
    };

    // check if user currently active
    this.isActive = function() {
      return !isIdle;
    };

    // check if user currently idle
    this.isIdle = function() {
      return isIdle;
    };

    // ads callback which been executed when user transferee from idle to active state after triggering one of interruptEvents
    // @param {function} callback - function to execute on state change
    this.addActiveCallback = function(callback) {
      if($.isFunction(callback)){
        activeCallbacks.add(callback);
      }
    };

    // ads callback which been executed when user transferee from active to idle state after not triggering any of interruptEvents for idleTime period
    // @param {function} callback - function to execute on state change
    this.addIdleCallback = function(callback){
      if($.isFunction(callback)){
        idleCallbacks.add(callback);
      }
    };

    SA.run(init, 'idle-notifier-init');

  };

}(window.SA, window.jQuery));

// Module responsible for collecting data about user been idle or active
// Module saves data to localStorage and sends it with mone event on next page.
// No public methods

(function(SA, $){

  'use strict';

  var idleInterval = SA.pageConfig.idleStartTime === undefined ? 30 * 1000 : SA.pageConfig.idleTime,
      storeKey = '__sa_track__', storeKeyRegExp = new RegExp(storeKey),
      store = SA.Data.Cache,
      idleNotifier = new SA.Utils.IdleNotifier({
        idleTime: idleInterval
      }),
      updateInterval = 3000,
      sendInterval = updateInterval * 10,
      active = 0,
      idle = 0,
      wasNeverActive  = true,
      isActive = false;


  function onActive() {
    isActive = true;

    if(wasNeverActive && idle <= (idleInterval / 2)) {
      active = idle;
      idle = 0;
    }

    wasNeverActive = false;
  }

  function onIdle() {
    isActive = false;
  }

  function save() {
    var pageKey = SA.pk.get();
    var k = storeKey + pageKey, e = {a: active, i: idle, s: window.location.pathname, u: new Date().getTime(), k: pageKey};
    SA.exec(function() {
      store.set(k, JSON.stringify(e));
    });
  }

  function update() {
    if(isActive) {
      active += updateInterval;
    } else {
      idle += updateInterval;
    }
    save();
  }

  function sendEvent(e) {
    SA.Logger.Mone.event('time_tracking', e.s, 'time_active', {
      moneKey: e.k,
      data: {
        active: parseInt((e.a || 0) / 1000, 10).toString(),
        idle: parseInt((e.i || 0) / 1000, 10).toString()
      }
    });
  }

  function checkEvent(key) {
    var m;
    try {
      m = JSON.parse(store.get(key));
    } catch(ignore) { store.del(key); }
    if(m && (new Date().getTime() - (m.u || 0)) > sendInterval) {
      sendEvent(m);
      store.del(key);
    }
  }

  function enqueueEvents() {
    var s = store.getStore();
    if(s) {
      $.each(s, function (i) {
        if(storeKeyRegExp.test(i)) {
          checkEvent(i);
        }
      });
    }
  }

  function init() {
    store.del('sa-time-tracking'); // clean old tracking data from v1
    idleNotifier.addActiveCallback(onActive);
    idleNotifier.addIdleCallback(onIdle);
    setInterval(update, updateInterval);
    enqueueEvents();
  }

  SA.run(init, 'time-on-page');

}(window.SA, window.jQuery));
// Another SA tracking system. 100% async
// Sends data to Fastly. From there data been pulled with logs and saved to ElasticSearch.
// Also this module responsible for sending performance data on every page load.
// Can be accessed through Kibana http://kibana.seekingalpha.com
// Usage:
//   SA.trackq.push(['event', 'ad', 'slow_ad', {
//     user: SA.Data.User.id
//   })
(function(w, SA, $) {

  'use strict';

  var count = 0;

  function serializeObj(obj) {
    var str = [], i;
    for(i in obj) {
      if (obj.hasOwnProperty(i)) {
        str.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
      }
    }
    return str.join('&');
  }

  function trackPerformance(){
    if (!window.performance || !performance.timing) return;
    var timing = performance.timing, reqStart = timing.requestStart, data = {};
    var times = {
      start: 'domLoading',
      interactive: 'domInteractive',
      ready: 'domContentLoadedEventStart',
      load: 'loadEventStart'
    };
    for (var key in times){
      var t = timing[times[key]];
      if (t) data[key] = t - reqStart;
    }
    eventPx('page', 'load', data);
  }

  $(window).on('load', function(){
    trackPerformance();
  });

  function defaultData() {
    return serializeObj({
      uid: SA.Data.User.id() || 0,
      pkey: SA.pk.get() || 0,
      path: w.location.pathname || 0
    });
  }

  function eventPxPath(c, a, opt) {
    opt = opt || {};
    opt['c'] = count;
    return SA.App.host + '/_sa_track/' + c + '/' + a + '?' + defaultData() + '&' + serializeObj(opt);
  }

  function eventPx(c, a, opt) {
    (new Image()).src = eventPxPath(c, a, opt);
  }

  var Tracker = {};
  //public methods

  // sends event to ES with data provided
  // @param {string} category - event category. Default - 'tracking'
  // @param {string} action - event related action. Default - 'event'
  // @param (object) opt - custom data. Will be serialized and snt with event
  Tracker.event = function(category, action, opt) {
    category = category || 'tracking';
    action = action || 'event';
    eventPx(category, action, opt);
  };

  // event collected before init
  var initQ = SA.trackq || [];

  //replacing queue
  SA.trackq = {
    push: function(){
      var len = arguments.length, i = 0;
      for (i; i < len; i += 1){
        if (Tracker[arguments[i][0]]){
          Tracker[arguments[i][0]].apply(Tracker, arguments[i].slice(1));
          count += 1;
        }
      }
    }
  };

  // send initially collected data
  SA.trackq.push.apply(SA.trackq, initQ);
}(window, window.SA, window.jQuery));
(function(w, SA) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Stats.PX'), cs = SA.Data.Cookies, ls = SA.Data.Cache;

  var d = SA.pageConfig.Data || {}, article = d.article || {}, author = d.author || {};
  var pName = w.location.pathname, pArray = pName ? w.location.pathname.split('/') : [], pType = '/', fKey = SA.App.perimeterXAppId + '_asyncInit';

  pType = pArray[1] || pType;

  var userStatus = SA.Data.User.loggedIn() ?
    (/mp_|archived|embargoed/.test(cs.get('gk_user_access')) ? '2' : '1') : '0';

  w._pxAppId = SA.App.perimeterXAppId;
  w._pxParam1 = article.id ? article.id.toString() : '0';
  w._pxParam2 = author.id ? author.id.toString() : '0';
  w._pxParam3 = SA.Data.User.id().toString();
  w._pxParam4 = SA.pageConfig.machineID || '';
  w._pxParam5 = SA.pk.get() || '';
  w._pxParam6 = SA.App.type;
  w._pxParam7 = pType;
  w._pxParam8 = userStatus;

  if(!SA.App.env.dev && !(/perx=false/).test(location.href)) {
    SA.loadJS([{src: '/' + SA.App.perimeterXAppId.replace('PX', '') + '/init.js'}]);
  }

  window[fKey] = function (px) {
    var whitelisted = false, checkedBinary = false;

    px.Events.on('score', function(s, k) {
      if (checkedBinary) return;
      if (k === 'binary' && !parseInt(s, 10)){
        if (!whitelisted){
          ls.set('h_px', 1);
          cs.set('h_px', 1, {expire: Infinity});
          SA.trackq.push(['event', 'px', 'hum']);
        }
      } else {
        ls.del('h_px');
        cs.del('h_px');
        SA.trackq.push(['event', 'px', 'bot']);
      }

      checkedBinary = true;
    });

    px.Events.on('enrich', function (value) {
      // value - the enriched data, in the form of <HMAC>:<Base64 encoded data>
      var base64Data = value.split(":")[1], // split value to get the base64 encoded data
          dataStr = atob(base64Data), // base64 decode the enrichment data
          data = JSON.parse(dataStr), // get the data as JSON
          exceptionRules = [
            'e13ad9c8-3493-4ff0-afe2-4cc4c417437c', // office
            '2145324f-f4fd-40e2-9ced-32fe7d2e61bc' // pro users
          ];

      if (data.f_type === 'w' && exceptionRules.indexOf(data.f_id) === -1 && !whitelisted){
        whitelisted = true;
        ls.del('h_px');
        cs.del('h_px');
        SA.trackq.push(['event', 'px', 'white', {origin: data.f_origin, id: data.f_id}]);
      }
    });
  };


}(window, window.SA));
SA.define('SA.Utils.Search', ['SA.Fn.ajax'], function (ajax) {

  'use strict';

  var symCache = {},
    LIMIT = 3,
    anchorClass = 'ticker-link';

  function fromSymCache(slug, clb) {
    var obj = symCache[slug.toLowerCase()];
    if (obj) {
      clb(obj);
      return true;
    }
    return false;
  }

  function match(opt, clb) {
    var query = opt.query ? opt.query.trim() : null;
    if (query && clb) {
      ajax('/api/common/ac/search?term='
        + encodeURIComponent(query)
        + (opt.symbols ? '&symbols=1' : '')
        + (opt.symbols && opt.excludeCrypto ? '&crypto=false' : '')
        + (opt.symbols && opt.excludeIndices ? '&indices=false' : '')
        + (opt.symbols && opt.excludeCommodity ? '&commodity=false' : '')
        + (opt.symbols && opt.stocksOnly ? '&only_stocks=true' : '')
        + (opt.symbols && opt.fundsOnly ? '&only_funds=true' : '')
        + '&pages=1'
        + (opt.people ? '&people=1' : '')
        + (opt.research ? '&has_author_research=1' : '')
        + (opt.resultsLimit ? ('&limit=' + opt.resultsLimit) : ''),
        function (res) {
          clb(res, opt);
        });
    }
  }

  function exactTicker(slug, clb) {
    if (slug && clb) {
      return fromSymCache(slug, clb) || ajax('/api/common/ac/exact/ticker?slug=' + encodeURIComponent(slug), function (res) {
        symCache[slug.toLowerCase()] = res;
        clb(res);
      });
    }
  }

  return {
    match: function (opt, clb) {
      opt = Object.assign({}, { resultsLimit: LIMIT, people: false, symbols: true, query: '' }, opt);
      match(opt, clb);
    },

    ticker: exactTicker,

    tickerLink: function (opt) {
      exactTicker(opt.slug, function (res) {
        if (res && res.slug) {
          var slug = res.slug.toUpperCase(),
            exchange = res.exchange ? [res.exchange, ':'] : [],
            link = ['<a href="', SA.App.host, '/symbol/', slug, '" class="', anchorClass, '">', slug, '</a>'];

          opt.clb(exchange.concat(link).join(''));
        } else {
          opt.clb(opt.slug);
        }
      });
    },

    tickerLinkClass: anchorClass
  };

});
(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils');

  scope.Callbacks = function () {

    var list = $.Callbacks('unique'),
      added = false,
      milliseconds = 100,
      timeout = null;

    this.add = function (clb) {
      list.add(clb);
      set();
    };

    this.remove = function (clb) {
      list.remove(clb);
      unset();
    };

    function set() {
      if (list.has() && !added) {
        added = true;
        $(w).on('scroll', delayClb);
      }
    }

    function unset() {
      if (!list.has() && added) {
        added = false;
        $(w).off('scroll', delayClb);
      }
    }

    function delayClb() {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(list.fire, milliseconds);
    }

  };

}(window, window.SA, window.jQuery));


// module containing set of functions to work with browser's scroll event
(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.Scroll');

  var callbacks = new SA.Utils.Callbacks();

  // detect if specific element has scrollbar (set by overflow: scroll)
  scope.elementHasScroll = function ($element) {
    return $element[0].scrollHeight > $element.height();
  };

  //calls some function on page scroll, but only 100ms after scroll stops
  //clb - reference to function that should be called
  scope.add = callbacks.add;

  //clb - reference to same function that was previously passed to add.
  scope.remove = callbacks.remove;

  // check if scroll position close to specific element
  scope.isCloseToElement = function (el, delta) {
    var epY = scope.getOffsetTop(el);

    //element is invisible or doesn't exist.
    return epY ? (epY < $(w).scrollTop() + $(w).height() + delta) : false;
  };

  scope.getOffsetTop = function (el) {
    var $el = el ? $(el) : null,
      epY = ($el && $el.length) ? $el.offset().top : null;

    //element is invisible or doesn't exist.
    if (epY) {
      //fix Mobile Safari bug showing wrong window offset http://bugs.jquery.com/ticket/6446
      var isAppleDevice;
      if ($.isFunction(SA.Utils.Env.isAppleDevice)) {
        isAppleDevice = SA.Utils.Env.isAppleDevice();
      } else {
        isAppleDevice = SA.Utils.Env.isAppleDevice;
      }

      if (isAppleDevice) {
        epY -= w.scrollY;
      }
    }

    return epY;
  };

  scope.isScrolledIntoView = function (el) {
    var $w = $(w),
      docViewTop = $w.scrollTop(),
      docViewBottom = docViewTop + $w.height();

    var $elem = $(el),
      elemTop = $elem.offset().top,
      elemBottom = elemTop + $elem.height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  };

  // for elements that have scrolling, check when scroll is close to the
  // bottom of it's container
  scope.isScrolledToElBottom = function (el, delta) {
    var $el = $(el);
    if (!delta) {
      delta = 0;
    }

    return $el.scrollTop() + $el.innerHeight() >= $el[0].scrollHeight - delta;
  };

}(window, window.SA, window.jQuery));
(function (w, SA) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils.PageTracker');

  scope.recordVisitedItem = function (lsKey, id, opts) {
    var itemsVisited = SA.Data.Cache.getJson(lsKey);
    opts = opts || {};

    if (opts.maxValues) {
      itemsVisited[id] = Array.isArray(itemsVisited[id]) ? itemsVisited[id] : [];
      if (itemsVisited[id].length >= opts.maxValues) {
        itemsVisited[id].shift();
      }
      itemsVisited[id].push(Date.now());
    } else {
      itemsVisited[id] = [Date.now()];
    }
    // save articles/news ids that were read by the user and serve them for X days as a KV
    SA.Data.Cache.setJson(lsKey, itemsVisited);
  };

  scope.recordVisitedProPage = function (serviceId) {
    serviceId = serviceId || SA.Fn.param('service_id');
    var lpVal = {
      proresearch: 'premium_checkout',
      proplus: 'proplus_checkout'
    }[serviceId];

    if (lpVal) {
      scope.recordVisitedItem('pro_landing_page', lpVal, serviceId === 'proresearch' ? { maxValues: 2 } : null);
    }
  }

}(window, window.SA));
(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils');

  scope.Common = {

    getServiceName: function (serviceId) {
      return {
        proresearch: 'Premium',
        proplus: 'Pro',
        ad: 'Ad Free'
      }[serviceId] || 'Marketplace';
    }
  }


}(window, window.SA, window.jQuery));
(function(w, SA) {

  'use strict';

  var AB = {
    identity: parseInt(SA.Fn.param('abid'), 10) || SA.Data.User.id() || parseInt(SA.pageConfig.machineID, 10)
  };

  AB.tenth = AB.identity % 10;

  AB.getABDigits = function () {
    return AB.identity / 10 % 100;
  };

  w.ABTest = AB;

}(window, window.SA));
/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/

var CryptoJS=CryptoJS||function(s,p){var m={},l=m.lib={},n=function(){},r=l.Base={extend:function(b){n.prototype=this;var h=new n;b&&h.mixIn(b);h.hasOwnProperty("init")||(h.init=function(){h.$super.init.apply(this,arguments)});h.init.prototype=h;h.$super=this;return h},create:function(){var b=this.extend();b.init.apply(b,arguments);return b},init:function(){},mixIn:function(b){for(var h in b)b.hasOwnProperty(h)&&(this[h]=b[h]);b.hasOwnProperty("toString")&&(this.toString=b.toString)},clone:function(){return this.init.prototype.extend(this)}},
q=l.WordArray=r.extend({init:function(b,h){b=this.words=b||[];this.sigBytes=h!=p?h:4*b.length},toString:function(b){return(b||t).stringify(this)},concat:function(b){var h=this.words,a=b.words,j=this.sigBytes;b=b.sigBytes;this.clamp();if(j%4)for(var g=0;g<b;g++)h[j+g>>>2]|=(a[g>>>2]>>>24-8*(g%4)&255)<<24-8*((j+g)%4);else if(65535<a.length)for(g=0;g<b;g+=4)h[j+g>>>2]=a[g>>>2];else h.push.apply(h,a);this.sigBytes+=b;return this},clamp:function(){var b=this.words,h=this.sigBytes;b[h>>>2]&=4294967295<<
32-8*(h%4);b.length=s.ceil(h/4)},clone:function(){var b=r.clone.call(this);b.words=this.words.slice(0);return b},random:function(b){for(var h=[],a=0;a<b;a+=4)h.push(4294967296*s.random()|0);return new q.init(h,b)}}),v=m.enc={},t=v.Hex={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++){var k=a[j>>>2]>>>24-8*(j%4)&255;g.push((k>>>4).toString(16));g.push((k&15).toString(16))}return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j+=2)g[j>>>3]|=parseInt(b.substr(j,
2),16)<<24-4*(j%8);return new q.init(g,a/2)}},a=v.Latin1={stringify:function(b){var a=b.words;b=b.sigBytes;for(var g=[],j=0;j<b;j++)g.push(String.fromCharCode(a[j>>>2]>>>24-8*(j%4)&255));return g.join("")},parse:function(b){for(var a=b.length,g=[],j=0;j<a;j++)g[j>>>2]|=(b.charCodeAt(j)&255)<<24-8*(j%4);return new q.init(g,a)}},u=v.Utf8={stringify:function(b){try{return decodeURIComponent(escape(a.stringify(b)))}catch(g){throw Error("Malformed UTF-8 data");}},parse:function(b){return a.parse(unescape(encodeURIComponent(b)))}},
g=l.BufferedBlockAlgorithm=r.extend({reset:function(){this._data=new q.init;this._nDataBytes=0},_append:function(b){"string"==typeof b&&(b=u.parse(b));this._data.concat(b);this._nDataBytes+=b.sigBytes},_process:function(b){var a=this._data,g=a.words,j=a.sigBytes,k=this.blockSize,m=j/(4*k),m=b?s.ceil(m):s.max((m|0)-this._minBufferSize,0);b=m*k;j=s.min(4*b,j);if(b){for(var l=0;l<b;l+=k)this._doProcessBlock(g,l);l=g.splice(0,b);a.sigBytes-=j}return new q.init(l,j)},clone:function(){var b=r.clone.call(this);
b._data=this._data.clone();return b},_minBufferSize:0});l.Hasher=g.extend({cfg:r.extend(),init:function(b){this.cfg=this.cfg.extend(b);this.reset()},reset:function(){g.reset.call(this);this._doReset()},update:function(b){this._append(b);this._process();return this},finalize:function(b){b&&this._append(b);return this._doFinalize()},blockSize:16,_createHelper:function(b){return function(a,g){return(new b.init(g)).finalize(a)}},_createHmacHelper:function(b){return function(a,g){return(new k.HMAC.init(b,
g)).finalize(a)}}});var k=m.algo={};return m}(Math);
(function(s){function p(a,k,b,h,l,j,m){a=a+(k&b|~k&h)+l+m;return(a<<j|a>>>32-j)+k}function m(a,k,b,h,l,j,m){a=a+(k&h|b&~h)+l+m;return(a<<j|a>>>32-j)+k}function l(a,k,b,h,l,j,m){a=a+(k^b^h)+l+m;return(a<<j|a>>>32-j)+k}function n(a,k,b,h,l,j,m){a=a+(b^(k|~h))+l+m;return(a<<j|a>>>32-j)+k}for(var r=CryptoJS,q=r.lib,v=q.WordArray,t=q.Hasher,q=r.algo,a=[],u=0;64>u;u++)a[u]=4294967296*s.abs(s.sin(u+1))|0;q=q.MD5=t.extend({_doReset:function(){this._hash=new v.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(g,k){for(var b=0;16>b;b++){var h=k+b,w=g[h];g[h]=(w<<8|w>>>24)&16711935|(w<<24|w>>>8)&4278255360}var b=this._hash.words,h=g[k+0],w=g[k+1],j=g[k+2],q=g[k+3],r=g[k+4],s=g[k+5],t=g[k+6],u=g[k+7],v=g[k+8],x=g[k+9],y=g[k+10],z=g[k+11],A=g[k+12],B=g[k+13],C=g[k+14],D=g[k+15],c=b[0],d=b[1],e=b[2],f=b[3],c=p(c,d,e,f,h,7,a[0]),f=p(f,c,d,e,w,12,a[1]),e=p(e,f,c,d,j,17,a[2]),d=p(d,e,f,c,q,22,a[3]),c=p(c,d,e,f,r,7,a[4]),f=p(f,c,d,e,s,12,a[5]),e=p(e,f,c,d,t,17,a[6]),d=p(d,e,f,c,u,22,a[7]),
c=p(c,d,e,f,v,7,a[8]),f=p(f,c,d,e,x,12,a[9]),e=p(e,f,c,d,y,17,a[10]),d=p(d,e,f,c,z,22,a[11]),c=p(c,d,e,f,A,7,a[12]),f=p(f,c,d,e,B,12,a[13]),e=p(e,f,c,d,C,17,a[14]),d=p(d,e,f,c,D,22,a[15]),c=m(c,d,e,f,w,5,a[16]),f=m(f,c,d,e,t,9,a[17]),e=m(e,f,c,d,z,14,a[18]),d=m(d,e,f,c,h,20,a[19]),c=m(c,d,e,f,s,5,a[20]),f=m(f,c,d,e,y,9,a[21]),e=m(e,f,c,d,D,14,a[22]),d=m(d,e,f,c,r,20,a[23]),c=m(c,d,e,f,x,5,a[24]),f=m(f,c,d,e,C,9,a[25]),e=m(e,f,c,d,q,14,a[26]),d=m(d,e,f,c,v,20,a[27]),c=m(c,d,e,f,B,5,a[28]),f=m(f,c,
d,e,j,9,a[29]),e=m(e,f,c,d,u,14,a[30]),d=m(d,e,f,c,A,20,a[31]),c=l(c,d,e,f,s,4,a[32]),f=l(f,c,d,e,v,11,a[33]),e=l(e,f,c,d,z,16,a[34]),d=l(d,e,f,c,C,23,a[35]),c=l(c,d,e,f,w,4,a[36]),f=l(f,c,d,e,r,11,a[37]),e=l(e,f,c,d,u,16,a[38]),d=l(d,e,f,c,y,23,a[39]),c=l(c,d,e,f,B,4,a[40]),f=l(f,c,d,e,h,11,a[41]),e=l(e,f,c,d,q,16,a[42]),d=l(d,e,f,c,t,23,a[43]),c=l(c,d,e,f,x,4,a[44]),f=l(f,c,d,e,A,11,a[45]),e=l(e,f,c,d,D,16,a[46]),d=l(d,e,f,c,j,23,a[47]),c=n(c,d,e,f,h,6,a[48]),f=n(f,c,d,e,u,10,a[49]),e=n(e,f,c,d,
C,15,a[50]),d=n(d,e,f,c,s,21,a[51]),c=n(c,d,e,f,A,6,a[52]),f=n(f,c,d,e,q,10,a[53]),e=n(e,f,c,d,y,15,a[54]),d=n(d,e,f,c,w,21,a[55]),c=n(c,d,e,f,v,6,a[56]),f=n(f,c,d,e,D,10,a[57]),e=n(e,f,c,d,t,15,a[58]),d=n(d,e,f,c,B,21,a[59]),c=n(c,d,e,f,r,6,a[60]),f=n(f,c,d,e,z,10,a[61]),e=n(e,f,c,d,j,15,a[62]),d=n(d,e,f,c,x,21,a[63]);b[0]=b[0]+c|0;b[1]=b[1]+d|0;b[2]=b[2]+e|0;b[3]=b[3]+f|0},_doFinalize:function(){var a=this._data,k=a.words,b=8*this._nDataBytes,h=8*a.sigBytes;k[h>>>5]|=128<<24-h%32;var l=s.floor(b/
4294967296);k[(h+64>>>9<<4)+15]=(l<<8|l>>>24)&16711935|(l<<24|l>>>8)&4278255360;k[(h+64>>>9<<4)+14]=(b<<8|b>>>24)&16711935|(b<<24|b>>>8)&4278255360;a.sigBytes=4*(k.length+1);this._process();a=this._hash;k=a.words;for(b=0;4>b;b++)h=k[b],k[b]=(h<<8|h>>>24)&16711935|(h<<24|h>>>8)&4278255360;return a},clone:function(){var a=t.clone.call(this);a._hash=this._hash.clone();return a}});r.MD5=t._createHelper(q);r.HmacMD5=t._createHmacHelper(q)})(Math);

(function (w, SA, $) {

  "use strict";

  var scope = SA.UsingNamespace('SA.Utils.AbTests'),
    activeTests,
    activeTestsAjax,
    clientAbTestsBiData = [],
    user = SA.Data.User,
    c = SA.Data.Cookies,
    pageData = SA.pageConfig ? SA.pageConfig.Data : {},
    POPULATION_STATUS = {
      logged_out: 0,
      logged_in: 1,
      both: 2,
      both_mc: 3
    };

  function logSuccess(name) {
    w.console.log('the variation for this user is: ' + name);
  }

  function logError(error) {
    w.console.log('failed to get variation name. error message: ' + error);
  }

  function getUserIdentifier(populationStatusId) {
    switch (populationStatusId) {
      case POPULATION_STATUS.logged_out:
        return user.id() ? null : (c.get('machine_cookie') || (Math.round((new Date()).getTime() + Math.random() * 1000000003366)).toString());
      case POPULATION_STATUS.logged_in:
        return user.id();
      case POPULATION_STATUS.both:
        return user.id() || c.get('machine_cookie');
      case POPULATION_STATUS.both_mc:
        return c.get('machine_cookie') || user.id();
      default:
        return;
    }
  }

  function getAbId(testIdentifier, userIdentifier) {
    var md5Hash = w.CryptoJS.MD5(userIdentifier + '&' + testIdentifier).toString().slice(-3);
    return parseInt(md5Hash, 16) % 100;
  }

  function getVariationForId(variations, id) {
    var variationName = null;

    $.each(variations, function (k, v) {
      if (id >= v[0] && id <= v[1]) {
        variationName = k;
        return false;
      }
    });

    return variationName;
  }

  function getForcedVariation(testName, abTest) {
    return SA.Fn.param(testName) || c.get(testName) || getForcedVariationUsers(abTest);
  }

  function getForcedVariationUsers(abTest) {
    var list = abTest.force_users, item;
    if (list) {
      if ((item = list[user.id()])) {
        return item;
      }

      if ((item = list[abTest.force_group.MP_Authors]) && user.isMPAuthor()) {
        return item;
      }

      if ((item = list[abTest.force_group.Pro]) && user.isPro()) {
        return item;
      }

      if ((item = list[abTest.force_group.SA_Internal]) && user.isSATeam()) {
        return item;
      }

      if ((item = list[abTest.force_group.Beta_Group]) && user.inBetaGroup()) {
        return item;
      }

      if ((item = list[abTest.force_group.Contributors]) && user.isAuthor() && !user.isMPAuthor()) {
        return item;
      }
    }

    return null;
  }

  function getVariationForUser(abTest) {
    var userIdentifier = getUserIdentifier(abTest.population_status);
    if (userIdentifier) {
      return getVariationForId(abTest.variations, getAbId(abTest.identifier, userIdentifier));
    }

    return null;
  }

  function getVariation(name, test, fallback) {
    return getForcedVariation(name, test) || getVariationForUser(test) || fallback;
  }

  function executeTests(tests, callback) {
    var variation, test;
    $.each(tests, function (testName, cb) {
      if ($.isFunction(cb)) {
        variation = 'control';
        test = activeTests[testName];
        if (test) {
          variation = getVariation(testName, test, variation);
          sendClientAbTestsBiData(testName, test.identifier, variation);
        }
        cb(variation);
      } else {
        SA.exceptions.push(['incorrect function for test: ' + testName]);
      }
    });

    if ($.isFunction(callback)) {
      callback();
    }
  }

  function printVariationName(testName) {
    var test, variation;
    if ((test = activeTests[testName])) {
      variation = getVariation(testName, test, null);
      return variation ? logSuccess(variation) : logError('test not relevant for user');
    }

    return logError('unable to find test');
  }

  function sendServerAbTestsBiData() {
    $.each(pageData.active_server_ab_tests, function (index, data) {
      SA.Logger.Mone.event('ab_tests', '', '', {
          data: {
            identifier: data.identifier,
            variation: data.variation
          }
        }
      );
    });
  }

  function sendClientAbTestsBiData(name, identifier, variation) {
    if (clientAbTestsBiData.indexOf(identifier) > -1) {
      return;
    }

    clientAbTestsBiData.push(identifier);
    SA.Logger.Mone.event('ab_tests', '', '', {
      data: {
        test_name: name,
        identifier: identifier,
        variation: variation
      }
    });
  }

  // `tests` is a hash with all abtests to run on the page, the key is the test name and the value is the callback function which take variation name as a param, example:
  //   {'test 1 Name': callBackFunctionTest1(VariationName), 'test 2 Name': callBackFunctionTest2(VariationName)}
  //
  // It's ok to call SA.Utils.AbTests.init few times in a page, ajax will be sent only once
  // all tests will execute as soon as ajax returns, or immediately if the ajax already returned.
  scope.init = function (tests, callback) {
    activeTestsAjax = activeTestsAjax || $.get('/ab_test/active_tests');
    activeTestsAjax.done(function (response) {
      activeTests = response ? response.active_tests : {};
      executeTests(tests, callback);
    });
  };

  scope.printVariationName = function (testName) {
    return $.isEmptyObject(activeTests) ? logError('tests are still loading please try again in a moment') : printVariationName(testName);
  };

  scope.forceVariation = function (testName, variationName) {
    c.set(testName, variationName, {expires: 24 * 60 * 60});
  };

  function initialize() {
    sendServerAbTestsBiData();
  }

  SA.run(initialize, 'ab-tests');

}(window, window.SA, window.jQuery));
// Constructor class for building popups.
// Based on bootstraps implementation of Modals http://getbootstrap.com/javascript/#modals
// Usage:
//   create new instance passing options
//   var popup = SA.Widgets.Popup.build(opt);
//
//   show popup
//   popup.show();
//
// Instance Options:
// opt.className - popup's preferred css class name. Default - 'sa-modal'
// opt.backdrop - boolean or the string 'static'. Includes a modal-backdrop element. Alternatively, specify static for a backdrop which doesn't close the modal on click. Default - 'static'
// opt.keyboard - boolean. Closes the modal when escape key is pressed. Default - false
// opt.showHeader - boolean. Indicated if popup should have header. Default - true
// opt.headerContent - string of html which will be rendered in popup's header. Default - ''
// opt.showCloseBtn - boolean. If there should be close btn in popup's header. Default - true
// opt.showBody - boolean. Indicated if popup should have body. Default - true
// opt.bodyContent - string of html which will be rendered in popup's body. Default - ''
// opt.showFooter - boolean. Indicated if popup should have footer. Default - false
// opt.footerContent - string of html which will be rendered in popup's footer. Default - ''
// opt.removeAfterClose - boolean. If popup should be removed from document after close. All connected events will be removed
// opt.beforeOpen - this callback fires immediately when the show instance method is called.
// opt.afterOpen - This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete).
// opt.beforeClose - This event is fired immediately when the hide instance method has been called.
// opt.afterClose - This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).

(function(SA, $){

  'use strict';

  //opt.empty - gives no content insight (no header, body, footer)

  var scope = SA.UsingNamespace('SA.Widgets.Popup'), modals = {};

  // Modal possible options list

  var buildModalOptions = function(opt) {
    return $.extend({}, {
      className: 'sa-modal',
      backdrop: 'static',
      keyboard: false,
      showHeader: true,
      headerContent: '',
      showCloseBtn: true,
      showBody: true,
      bodyContent: '',
      showFooter: false,
      footerContent: '',
      removeAfterClose: false,
      // Callback functions available
      beforeOpen: null,
      afterOpen: null,
      beforeClose: null,
      afterClose: null,
      fade: 'fade'
    }, opt || {});
  };

  var buildModal = function(opt){
    var content, modal = $('<div id="' + opt.modalId + '" class="' + opt.className + ' modal ' + opt.fade + '" data-backdrop="' + opt.backdrop + '" data-keyboard="' + opt.keyboard + '"  tabindex="-1"><div class="modal-dialog"><div class="modal-content"></div></div></div>');

    if(opt.empty) {
      return modal;
    }

    content = modal.find('.modal-content');

    // Set Modal Header
    if(opt.showHeader || opt.headerContent) {
      content.append('<div class="modal-header">' + (opt.showCloseBtn ? '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span class="close-icon" aria-hidden="true">&times;</span></button>' : '') + opt.headerContent + '</div>');
    }

    if(opt.showBody || opt.bodyContent) {
     content.append('<div class="modal-body">' + opt.bodyContent + '</div>');
    }

    if(opt.showFooter || opt.footerContent) {
      content.append('<div class="modal-footer">' + opt.footerContent + '</div>');
    }

    return modal;
  };

  var Modal = function(opt) {

    opt = buildModalOptions(opt);

    opt.modalId = opt.className + Date.now();

    //Store id to reference in modals array
    var id = opt.modalId, modalScope = this, modal = buildModal(opt);

    this.showing = false;

    this.id = id;

    var setEventListeners = function() {
      // Set beforeOpen callback
      if(opt.beforeOpen) {
        modal.on('show.bs.modal', function() {
          opt.beforeOpen();
        });
      }

      // Set afterOpen callback
      if(opt.afterOpen) {
        modal.on('shown.bs.modal', function() {
          opt.afterOpen(this);
        });
      }

      // Set beforeClose callback
      if(opt.beforeClose) {
        modal.on('hide.bs.modal', function() {
          opt.beforeClose();
        });
      }

      // remove after close

      modal.on('hidden.bs.modal', function() {
        modalScope.showing = false;
        if(opt.removeAfterClose) {
          $(this).detach();
        }
      });

      // Set afterClose callback
      if(opt.afterClose) {
        modal.on('hidden.bs.modal', function() {
          opt.afterClose(this);
        });
      }

    };

    //instance methods

    // returns jQuery object of current popup
    this.getModalObject = function() {
      return modal;
    };

    // show popup
    this.show = function(){
      modal.modal('show');
      this.showing = true;
    };

    // hide popup
    this.hide = function(){
      modal.modal('hide');
      this.showing = false;
    };

    this.innerBody = function(val){
      modal.find('.modal-body').html(val);
    };

    this.innerFooter = function(val){
      modal.find('.modal-footer').html(val);
    };

    setEventListeners();

  };

  // Widget public methods

  scope.build = function(opt){
    var modal = new Modal(opt);
    modals[modal.id] = modal;
    return modal;
  };

  scope.isRunning = function() {
    return $.map(modals, function(modal) {
      if(modal.showing) {
        return modal;
      }
    }).length > 0;
  };

}(window.SA, window.jQuery));

(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/utils/enter_name_header"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="header">',  header ,'</div>\n<div class="note">Note, you may only change your username once</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/utils/enter_name_body"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="popup-body-container">\n  <input class="input" type="text" placeholder="',  placeholder ,'" value="',  currentName ,'" title="">\n  ');  if (showAvailabilityIcon) { ; __p.push('\n    <div class="availability-icon"></div>\n  ');  } ; __p.push('\n  <div class="status"></div>\n</div>\n');}return __p.join('');};
}).call(this);



(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Widgets');

  scope.EnterNamePopup = (function () {
    var enterNamePopup = this;
    var popupClassName = 'enter-name-popup';
    var bi, clb, checkAvailability;
    var popup, $input, $statusIcon, $status, $saveBtn, $closeBtn, timer;

    function show(opt) {
      if (!showing()) {
        bi = opt.bi || {type: '', source: ''};

        clb = {
          onSubmit: opt.clb.onSubmit,
          checkAvailability: opt.clb.checkAvailability
        };

        checkAvailability = $.isFunction(clb.checkAvailability);

        if ($.isFunction(opt.clb.beforeOpen)) {
          opt.clb.beforeOpen();
        }

        popup = SA.Widgets.Popup.build({
          className: popupClassName,
          headerContent: w.JST["jst/widgets/utils/enter_name_header"]({header: opt.content.header}),
          bodyContent: w.JST["jst/widgets/utils/enter_name_body"]({
            placeholder: opt.content.placeholder || '',
            currentName: opt.currentName || '',
            showAvailabilityIcon: checkAvailability
          }),
          afterOpen: function () {
            onAfterOpen(opt.clb.afterOpen);
          },
          footerContent: '<span class="warning">' + opt.content.footer + '</span><button class="save-btn disabled">' + (opt.content.button || 'Create') + '</button>',
          removeAfterClose: true,
          afterClose: function () {
            onAfterClose(opt.clb.onClose);
          }
        });

        SA.Logger.Mone.event(bi.type, bi.source, 'shown');

        popup.show();
      }

      return enterNamePopup;
    }

    function showing() {
      return popup && popup.showing;
    }

    function hide() {
      popup.hide();
    }

    function updatePlaceholder(name) {
      $input.attr('placeholder', 'Example: ' + name);
    }

    function onAfterOpen(callback) {
      var $popup = $('.' + popupClassName);
      $input = $popup.find('input.input');
      $saveBtn = $popup.find('button.save-btn');
      $statusIcon = $popup.find('.availability-icon');
      $status = $popup.find('.status');
      $closeBtn = $popup.find('button.close');

      if ($.isFunction(callback)) {
        callback();
      }

      setEvents();
      focusInput();
    }

    function setEvents() {
      $input.on('keyup', function () {
        if (checkAvailability) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            clb.checkAvailability($input.val());
          }, 500);
        } else if ($input.val()) {
          $saveBtn.removeClass('disabled');
        } else {
          $saveBtn.addClass('disabled');
        }
      });

      $saveBtn.click(function () {
        if ($input.val() && !$saveBtn.hasClass('sa-animated')) {
          $saveBtn.addClass('sa-animated');
          clb.onSubmit($input.val());
        }
      });

      $closeBtn.click(function () {
        SA.Logger.Mone.event(bi.type, bi.source, 'clicked_x');
      });
    }

    function focusInput() {
      $input.focus();

      var inputElem = $input[0];
      if (inputElem.setSelectionRange) {
        var len = $input.val().length * 2;
        setTimeout(function () {
          inputElem.setSelectionRange(len, len);
        }, 1);
      }
    }

    function setAvailable() {
      $statusIcon.removeClass('unavailable-icon').addClass('available-icon');
      $status.text('Available').removeClass('unavailable').addClass('available');
      $saveBtn.removeClass('disabled');
    }

    function setUnavailable(errors) {
      var errors = errors ? parseErrors(errors) : null;
      $saveBtn.removeClass('sa-animated').addClass('disabled');
      $statusIcon.removeClass('available-icon').addClass('unavailable-icon');
      $status.html(errors || 'Unavailable').removeClass('available').addClass('unavailable');
    }

    function parseErrors(errors) {
      var html = '<ul>';
      html += $.map(errors, function (error, i) {
        return '<li>' + error.charAt(0).toUpperCase() + error.slice(1) + '</li>';
      });
      html += '</ul>';
      return html;
    }

    function onAfterClose(callback) {
      if ($.isFunction(callback)) {
        callback();
      }

      $input.off('keyup');
      $saveBtn.off('click');
      $closeBtn.off('click');

      $input = null;
      $saveBtn = null;
      $statusIcon = null;
      $status = null;
      $closeBtn = null;

      bi = null;
      clb = null;
      checkAvailability = null;
      popup = null;
    }

    return {
      show: show,
      showing: showing,
      hide: hide,
      updatePlaceholder: updatePlaceholder,
      setAvailable: setAvailable,
      setUnavailable: setUnavailable
    };

  })();

}(window, window.SA, window.jQuery));
(function (SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Models');
  scope.EnterUsername = {

    getSuggestedUsername: function (data, clb) {
      $.get('/users/ajax_get_suggested_username', data).done(clb.onSuccess).fail(clb.onFail);
    },

    getUsernameAvailability: function (data, clb) {
      $.get('/users/ajax_username_is_available', data).done(clb.onSuccess).fail(clb.onFail);
    },

    saveUsername: function (data, clb) {
      $.ajax({
        url:'/users/ajax_set_nick',
        method: 'POST',
        data: data,
        timeout: 0
      }).done(function (res) {
        if (res.action === 'saved') {
          SA.Logger.Mone.event('profile', 'username_choice', 'username_chosen', {data: {'new_nick': res.username, 'previous_nick': res.previous_username}});
          SA.Data.Cookies.set('user_nick', res.username, Infinity);
          $('header#sa-hd #hd-user .dropdown-header.pro-gray-bg.elips').html(res.username);

          if ($.isFunction(clb.onSuccess)) {
            clb.onSuccess(res);
          }
        } else if (res.errors) {
          Rollbar.error('General Error while handling set username: ' + res.errors);
        } else if (res.warnings) {
          Rollbar.log('Warnings while setting username: ' + res.warnings);
        }

        if ($.isFunction(clb.onFail) && (res.errors || res.warnings)) {
          clb.onFail(res);
        }
      }).fail(function (res, errorType) {
        Rollbar.error('Error ' + errorType + ' while setting username: ' + res.errors);

        if ($.isFunction(clb.onFail)) {
          clb.onFail(res);
        }
      }).always(clb.onAlways);
    }

  };

}(window.SA, window.jQuery));

(function (SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Widgets');

  scope.EnterUsername = (function () {
    var bi = {source: 'username_choice', action: 'username_chosen'};
    var data, onDone, modelClb;
    var enterNamePopup = SA.Widgets.EnterNamePopup, model = SA.Models.EnterUsername;

    function show(opt) {
      bi.type = opt.type || '';

      data = opt.data || {};

      onDone = opt.onDone;

      modelClb = {
        onSuccess: onSuccess,
        onFail: onFail
      };

      var user = SA.Data.User,
        userId = user.id(),
        currentNick = SA.Data.Cookies.get('user_nick');

      return enterNamePopup.show({
        currentName: currentNick,
        content: {
          placeholder: '',
          header: (currentNick ? 'Update Username' : 'Choose Username'),
          footer: opt.footerContent || (currentNick ? '' : 'Username required'),
          button: opt.buttonContent || (currentNick ? 'Update' : 'Save')
        },
        clb: {
          afterOpen: function () {
            model.getSuggestedUsername({user_id: userId}, modelClb);
          },
          onSubmit: function (name) {
            model.saveUsername({username: name, user_id: userId}, modelClb);
          },
          checkAvailability: function (name) {
            if (!name) {
              enterNamePopup.setUnavailable();
            } else {
              model.getUsernameAvailability({username: name}, modelClb);
            }
          },
          afterClose: opt.afterClose
        },
        bi: bi
      });
    }

    function onSuccess(res) {

      switch (res.action) {
        case 'saved':
          return saved(res.username);

        case 'availability':
          return (res.errors && res.errors.length) ? enterNamePopup.setUnavailable(res.errors) : enterNamePopup.setAvailable();

        case 'suggested':
          return enterNamePopup.updatePlaceholder(res.suggested_username);
      }
    }

    function onFail(res) {
      enterNamePopup.setUnavailable(res.errors);
    }

    function saved(username) {

      enterNamePopup.hide();

      data.newUsername = username;

      if ($.isFunction(onDone)) {
        onDone(data);
      }
    }

    return {
      show: show,
      showing: enterNamePopup.showing,
      hide: enterNamePopup.hide
    };

  })();

}(window.SA, window.jQuery));
SA.define('SA.Fn.escapeHtml', [], function() {

  'use strict';

  var es = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;'
  }, eRx = /[&<>"'\/]/g;

  return function(str) {
    return str.toString().replace(eRx, function(m) {
      return es[m];
    });
  };

});
SA.define('SA.Fn.debounce', [], function() {

  'use strict';

  var w = window;

  return function(cb, interval) {
    var locker = 0, ts = 0, nextCallArgs = null;

    function fire(args) {
      nextCallArgs = null;
      cb.apply(null, args);
    }

    function waiter() {
      locker = 0;
      var remaining = interval - (Date.now() - ts);
      if (remaining > 0) {
        locker = w.setTimeout(waiter, remaining);
      } else {
        fire(nextCallArgs);
      }
    }

    return function() {
      ts = Date.now();
      nextCallArgs = arguments;
      if (!locker) {
        locker = w.setTimeout(waiter, interval);
      }
    };

  };


});
(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/search/recent_search"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul class="recent-searches">\n  <li class="dropdown-header recent"></li>\n  ');  jQuery.each(searches, (function() { ; __p.push('\n  ');  if (this.type === 'symbol') { ; __p.push('\n  <li data-slug="',  this.phrase.toUpperCase() ,'" data-type="symbol" class="item clearfix">\n    <span class="sym_name">',  this.phrase.toUpperCase() ,'</span>\n    <span class="sym_desc">',  this.text ,'</span>\n  </li>\n  ');  } else if (this.type === 'page') { ; __p.push('\n  <li data-url="',  this.url ,'" data-type="page" data-name="',  this.text ,'" class="item">\n    <span class="auth_name">',  this.text ,'</span>\n  </li>\n  ');  } else if (this.type === 'people') { ; __p.push('\n  <li data-slug="',  this.phrase ,'" data-type="author" data-name="',  this.phrase ,'" class="item">\n    <span class="auth_name">',  this.text ,'</span>\n  </li>\n  ');  } else if (this.type === 'hashtag') { ; __p.push('\n  <li data-url="',  this.url ,'" data-type="hashtag" data-name="',  this.text ,'" class="item">\n    <span class="auth_name">',  this.text ,'</span>\n  </li>\n  ');  } else { ; __p.push('\n  <li data-name="',  SA.Fn.escapeHtml(this.phrase) ,'" data-slug="',  this.phrase ,'" data-type="keyword" class="item">\n    ',  SA.Fn.escapeHtml(this.phrase) ,'\n  </li>\n  ');  }})); ; __p.push('\n</ul>\n');}return __p.join('');};
}).call(this);




// Module responsible for building input's symbol/authors autocomplete
// In order autocomplete to work - provided $element has to have id attribute
// Usage:
//  var auto = new SA.Utils.Autocomplete($element, opt);
//
// Options:
//   opt.symbols - search and autocomplete stock symbols. Default to true
//   opt.stocksOnly - search and autocomplete stocks only symbols. Default to false
//   opt.excludeCrypto - search and autocomplete stocks excludes crypto currencies. Default to false
//   opt.excludeIndices - search and autocomplete stocks excludes indices. Default to false
//   opt.excludeCommodity - search and autocomplete stocks excludes commodities. Default to false
//   opt.people - search and autocomplete SA people. Default to false
//   opt.pages - search and autocomplete SA pages. Default to true
//   opt.multiple - allow multiple items to stay selected in provided input. Default - false
//   opt.resultsLimit - limits amount of results shown in autocomplete dropdown. default 10
//   opt.symbolSelectCallback/opt.authorSelectCallback - function executed after symbol/author was selected from autocomplete dropdown by click or by pressing Enter key. Slug of selected symbol is passed to the function
//   opt.onBeforeShowAutoComplete - function executed before showing autocomplete dropdown
//   opt.onShow - function executed when showing autocomplete dropdown
//   opt.onHide - function executed when hiding autocomplete dropdown

(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Utils');

  var cache = {}, keyMap = {enter: 13, esc: 27, up: 38, down: 40};

  function b(n, v) {
    return n.replace(new RegExp('(' + v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') + ')', 'i'), '<b>$1</b>');
  }

  function head(cls) {
    return '<li class="dropdown-header ' + cls + '"></li>';
  }

  function buildHashContent(hashtags, v) {
    var c = '';
    hashtags.forEach(function (hashtag) {
      c += '<li data-url="' + 'hashtag/' + hashtag + '" data-type="hashtag" class="item clearfix" data-name="#' + hashtag + '"><span class="hashtag_name">#' + hashtag + '</span></li>';
    });
    return c ? head('hashtags') + c : c;
  }

  function buildSymbolsContent(symbols, v) {
    var c = '', addClass, addTitle;
    symbols.forEach(function (sym) {
      if (sym.slug.length > 7) {
        addClass = ' elipsis';
        addTitle = sym.name;
      } else {
        addClass = '';
        addTitle = '';
      }
      c += '<li data-slug="' + sym.slug.toUpperCase() + '" data-type="symbol" class="item clearfix"><span class="sym_name' + addClass + '" title="' + addTitle + '">' + b(sym.name, v) + '</span><span class="sym_desc">' + b(sym.content, v) + '</span></li>';
    });
    return c ? head('symbols') + c : c;
  }

  function buildPeopleContent(auth, v) {
    var c = '';
    auth.forEach(function (a) {
      c += '<li data-id="' + a.id + '" data-slug="' + (a.slug || '') + '" data-type="people" data-name="' + a.name + '" data-content="' + (a.content || '') + '" class="item"><span class="auth_name">' + b(a.name, v) + (a.content ? (', ' + b(a.content, v)) : '') + '</span></li>';
    });
    return c ? head('people') + c : c;
  }

  function buildPagesContent(auth, v) {
    var c = '';
    auth.forEach(function (a) {
      c += '<li data-url="' + a.url + '" data-type="page" data-name="' + a.name + '" class="item"><span class="auth_name">' + a.name + '</span></li>';
    });
    return c ? head('pages') + c : c;
  }

  function buildAutoCompleteContent(data, val, opt) {
    var content = '';
    data = data || {};
    if (data.hash) {
      content += buildHashContent(data.hash, val);
    }
    if (data.symbols) {
      content += buildSymbolsContent(data.symbols, val);
    }
    if (data.pages && opt.pages) {
      content += buildPagesContent(data.pages, val);
    }
    if (data.people && opt.people) {
      content += buildPeopleContent(data.people, val);
    }
    if (opt.keyword && val && !data.hash) {
      var kw = head('keyword') + '<li data-name="' + SA.Fn.escapeHtml(val) + '" data-slug="' + SA.Fn.escapeHtml(val) + '" data-type="keyword" class="item"><b>' + SA.Fn.escapeHtml(val) + '</b></li>';
      if (opt.cloudsearch) {
        content = kw + content;
      } else {
        content += kw;
      }
    }
    return content;
  }

  function buildRecentSearchContent(data) {
    data = data || {};

    if (!Object.keys(data).length && data.constructor === Object) {
      return '';
    }

    return $(w.JST['jst/widgets/search/recent_search']({searches: data}));
  }

  scope.Autocomplete = function ($input, opt) {

    var $dropDown, recentSearches, isTyping = false, typingTimer;

    var callback = {
      update: {
        state: function () {
          if ($input.val()) {
            return fromAPI(opt.multiple ? $input.val().split(',').pop().trim() : $input.val());
          }
          hide();
        },
        value: function ($item) {
          if (!opt.multiple) {
            var v = $item.data('type') === 'symbol' ? 'slug' : 'name';
            $input.val($item.data(v));
          }
        }
      },
      onBefore: {
        showAutoComplete: function () {
        }
      }
    };

    opt = $.extend({}, {
      symbols: true,
      stocksOnly: false,
      excludeCrypto: false,
      excludeIndices: false,
      excludeCommodity: false,
      people: false,
      multiple: false,
      pages: true,
      resultsLimit: 10
    }, opt);

    function show() {
      $dropDown.data('expended', true).show();

      if ($.isFunction(opt.onShow)) {
        opt.onShow();
      }
    }

    function hide() {
      $dropDown.hide().data('expended', false).html('');

      if ($.isFunction(opt.onHide)) {
        opt.onHide();
      }
    }

    function active() {
      return $dropDown.find('.active');
    }

    function deactivate() {
      active().removeClass('active');
    }

    function activate($item) {
      deactivate();
      $item.addClass('active');
    }

    function reservedKey(event) {
      return [keyMap.down, keyMap.up, keyMap.enter, keyMap.esc].indexOf(event.keyCode) !== -1;
    }

    function isUserAborted(xhr) {
      return !xhr.getAllResponseHeaders();
    }

    function sendSaveSearch(options) {
      var phrase = options.rawphrase.trim().substring(0, 50);
      if (phrase.length) {
        $.post('/api/common/ac/save_recent_search', {
          phrase: phrase,
          url: options.url || 'NA',
          type: options.type
        }).fail(function (xhr, textStatus, errorThrown) {
          if (!isUserAborted(xhr)) {
            w.console.log('An error has occurred on saving search.');
          }
        });
      }
    }

    function exec(method, slug, e) {
      if ($.isFunction(method)) {
        handleEscClick();
        method(slug, $input, e);
        return true;
      }
      return false;
    }


    function handleSelectedValue(e) {
      var $item = $(e.currentTarget);
      if ($item.length) {
        var type = $item.data('type'),
          slug = $item.data('slug'),
          url = $item.data('url'),
          id = $item.data('id'),
          name = $item.data('name'),
          bi = {source: (type === 'keyword' ? '&s=' : '?s=') + (slug || url || id || name).toString().toLowerCase() + '&source=search'},
          hash = window.location.hash ? window.location.hash.replace(/#/g,"&") : '';

        if ($.inArray(type, ['symbol', 'author']) > -1) {
          SA.Data.Cookies.set('_sasource', 'search', {expires: 120});
        }

        sendSaveSearch({type: type, rawphrase: slug || name, url: url});

        if (type === 'keyword' && !exec(opt.keywordSelect, $item.text().trim(), e)) {
          openSelectedValue('/search?type=keyword&q=' + $item.text().trim() + bi.source, e);
        } else if (type === 'symbol' && !exec(opt.symbolSelectCallback, slug, e)) {
          var symbolPagePath = '';
          if(document.location.pathname.indexOf('/symbol/') == 0){
            var regex = /.*?symbol\/.*?\/([\w\/-]+)/ig,
            regex_result = regex.exec(document.location.pathname);
            if(regex_result && regex_result.length) {
              symbolPagePath = '/' + regex_result[1];
            }
          }
          openSelectedValue('/symbol/' + slug + symbolPagePath + bi.source + hash, e);
        } else if (['page', 'hashtag'].indexOf(type) > -1) {
          openSelectedValue('/' + url + bi.source, e);
        } else if (type === 'people' || type === 'author') {
          if ($.isFunction(opt.authorSelectCallback)) {
            handleEscClick();
            return opt.authorSelectCallback({slug: slug, name: $item.data('name'), text: $item.text(), serviceName: $item.data('content'), tagId: $item.data('id')});
          }
          openSelectedValue((slug ? ('/author/' + slug) : '/user/' + id) + bi.source, e);
        }
      }
    }

    function openSelectedValue(url, e) {
      var openIn = detectSpecialKey(e);
      if (openIn.tab) {
        openIn.event.preventDefault();
        w.open(url, '_blank');
        hide();
      } else if (openIn.window) {
        openIn.event.preventDefault();
        w.open(url);
        hide();
      } else {
        w.location.href = url;
      }
    }

    function detectSpecialKey(e) {
      e = e || {};
      return {
        event: e,
        tab: e.ctrlKey || e.metaKey || e.which === 2,
        window: e.shiftKey
      };
    }

    function setClickEvents() {
      $dropDown.on('click', '.item', handleSelectedValue);
    }

    function generateList(res, val) {
      var content = buildAutoCompleteContent(res, val, opt);
      if (content) {
        $dropDown.html(content);
        activateWhenAlone();
        callback.onBefore.showAutoComplete();
        return show();
      }

      hide();
    }

    function activateWhenAlone() {
      var $menuItems = $('.dropdown-menu .item');
      if ($menuItems.length < 3) {
        activate($menuItems.first());
      } else {
        deactivate();
      }
    }

    function fromAPI(val) {
      SA.Utils.Search.match({
        query: val,
        symbols: opt.symbols,
        stocksOnly: opt.stocksOnly,
        fundsOnly: opt.fundsOnly,
        resultsLimit: opt.resultsLimit,
        excludeCrypto: opt.excludeCrypto,
        excludeIndices: opt.excludeIndices,
        excludeCommodity: opt.excludeCommodity,
        people: opt.people,
        pages: opt.pages,
        research: opt.research
      }, function (res) {
        cache[val] = {ts: Date.now(), res: res};
        generateList(res, val);
      });
    }

    function setRecentSearchEvents() {
      $('input#hd-auto').on('click', function () {
        var $this = $(this);
        if (!$this.val()) {
          if (recentSearches) {
            displayRecentSearches($this);
          } else {
            $.get('/api/common/ac/get_recent_search').done(function (res) {
              recentSearches = buildRecentSearchContent(res);
              displayRecentSearches($this);
            }).fail(function (xhr, textStatus, errorThrown) {
              if (!isUserAborted(xhr)) {
                w.console.log('An error has occurred on loading search.');
              }
            });
          }
        }
      });
    }

    function displayRecentSearches($el) {
      if (recentSearches && recentSearches !== '') {
        $dropDown.html(recentSearches);
        $('#hd-auto_sa_autocomplete').addClass('recent-active');
        $el.siblings('.dropdown-menu').data('expended', true).show();

        if ($.isFunction(opt.onShow)) {
          opt.onShow();
        }
      }
    }

    // Custom keys

    function setOutsideClick() {
      $(w.document).mouseup(function (e) {
        if (!$dropDown.is(e.target) && !$dropDown.has(e.target).length) {
          hide();
        }
      });
    }

    function handleEscClick() {
      if (!opt.multiple) {
        $input.val('').data('value', '');
      }

      hide();
    }

    function activateItem(dir) {
      var $list = $dropDown.find('.item'), len = $list.length, indexArr = $list.map(function (i) {
          if ($($list[i]).hasClass('active')) {
            return i;
          }
        }),
        index = indexArr.length ? indexArr[0] : null,
        $new = dir === 'up' ? $list.eq((index || 0) - 1) : $list.eq(index === null ? 0 - len : index - len + 1);

      activate($new);

      callback.update.value($new);
    }

    // Event listeners

    function setKeyUpEvent() {
      $input.keyup(function (e) {
        if ($.inArray(e.keyCode, [keyMap.up, keyMap.down, keyMap.esc, keyMap.enter]) > -1) {
          return onKeyup(e);
        }
        clearTimeout(typingTimer);
        typingTimer = setTimeout(function () {
          onKeyup(e);
        }, 200);
      });
    }

    function onKeyup(e) {
      var value = $input.val().trim().toLowerCase();
      if (value !== $input.data('value') && !reservedKey(e)) {
        $input.data('value', value);
        callback.update.state();
      }
      handleCustomKey(e);
    }

    function handleCustomKey(e) {
      switch (e.keyCode) {
        case keyMap.esc:
          return handleEscClick();
        case keyMap.down:
          return activateItem('down');
        case keyMap.up:
          return activateItem('up');
        case keyMap.enter:
          isTyping = false;
          if (!active().data()) {
            sendSaveSearch({rawphrase: $input.val().trim()});
          }
          return handleSelectedValue({currentTarget: active()});
        default:
          $('#hd-auto_sa_autocomplete').removeClass('recent-active');
      }
    }

    function setKeyDownEvent() {
      $input.keydown(function (e) {
        if ($.inArray(e.keyCode, [keyMap.up, keyMap.down]) > -1) {
          e.preventDefault();
        } else if (e.keyCode === keyMap.enter) {
          clearTimeout(typingTimer);
          handleSelectedValue({currentTarget: active()});
        } else {
          hide();
        }
      });
    }

    function prepare() {
      $input.data('value', '');

      if ($.isFunction(opt.onBeforeShowAutoComplete)) {
        callback.onBefore.showAutoComplete = opt.onBeforeShowAutoComplete;
      }
    }

    function setFormSubmit() {
      var $parent = $input.parent();
      if ($parent.is('form')) {
        $parent.submit(function (e) {
          if (isTyping) {
            e.preventDefault();
            e.stopPropagation();
          }
        });
      }
    }

    function setEvents() {
      setRecentSearchEvents();
      setOutsideClick();
      setClickEvents();
      setKeyUpEvent();
      setKeyDownEvent();
      setFormSubmit();
    }

    function init() {
      if ($input.attr('id')) {
        $dropDown = $('<span class="dropdown-menu boot_sa_autocomplete" id="' + $input.attr('id') + '_sa_autocomplete' + '" style="position:absolute;display:none;"></span>').insertAfter($input);
        prepare();
        setEvents();
      }
    }

    // Public methods

    this.getMatch = function () {
      return active().data('slug');
    };

    this.fromApi = function(ticker) {
      if (ticker.trim() !== '') {
        return fromAPI(ticker);
      }
    };

    SA.run(init, 'autocomplete-init');

  };

}(window, window.SA, window.jQuery));
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/main"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  if (showCloseButton) { ; __p.push('\n    <button type="button" class="close" data-dismiss="modal" aria-label="Close">\n      <span aria-hidden="true">&times;</span>\n    </button>\n');  } ; __p.push('\n\n<div class="row">\n  <div class="col-xs-3 promo">\n    <h3>',(''+ usersOnSite ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</h3> people have already joined Seeking Alpha to track analysis of stocks they follow and exchange investment ideas.\n  </div>\n  <div class="col-xs-9 forms">\n    <div class="row">\n    ');  if(headerTitle) { ; __p.push('\n        <div class="col-xs-12"><h3 class="header-title">',(''+ headerTitle ).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;'),'</h3></div>\n    ');  } ; __p.push('\n      <div class="col-xs-6 sign-in" id="sign-form">\n          <h3>Join now (it\'s free):</h3>\n          <form id="authentication_register_form">\n            <div class="form-group">\n              <label for="authentication_register_nick">Choose Username</label>\n              <input type="text" class="form-control" id="authentication_register_nick">\n            </div>\n            <div class="form-group">\n              <label for="authentication_register_email">Email Address</label>\n              <input type="email" class="form-control" id="authentication_register_email" autocomplete="email">\n            </div>\n            <div class="form-group sign-pwd-grp">\n              <label for="authentication_register_password">Create Password:</label>\n              <input type="password" class="form-control" id="authentication_register_password" autocomplete="off" placeholder="',  passwordPlaceholder ,'">\n            </div>\n            <div class="form-group checkbox-sa-terms">\n              <input type="checkbox" id="authentication_register_agree_to_terms" checked>\n              <span class="sa-terms">I agree to <a href="/page/terms-of-use" target="_blank">Terms of Use</a> &amp; <a\n                    href="/page/privacy" target="_blank">Privacy Policy</a></span>\n            </div>\n            <div class="btn-grp">\n              <input type="submit" id="sign-btn" class="btn orange-btn" value="Join"/>\n            </div>\n          </form>\n        <div id="sign-error" class="alert alert-danger hidden" role="alert">...</div>\n      </div>\n      <div class="col-xs-6 log-in" id="log-form">\n        <form id="authentication_login_form" autocomplete="on">\n          <h3>Member sign in:</h3>\n          <div class="form-group">\n            <label for="authentication_login_email">Email Address</label>\n            <input type="email" class="form-control" id="authentication_login_email" autocomplete="email">\n          </div>\n          <div class="form-group log-pwd-grp">\n            <label for="authentication_login_password">Password:</label>\n            <input type="password" class="form-control" id="authentication_login_password" autocomplete="off">\n            <a href="#" class="frgt-pwd" id="rst-pwd">Forgot your password?</a>\n          </div>\n\n          <div class="btn-grp">\n            <input type="submit" id="log-btn" class="btn orange-btn pull-left" value="Sign in">\n            <a href="#" class= "btn otl-login" id="one-time-link">Email me a sign in link</a>\n            <div class="clearfix"></div>\n            <div id="log-google">\n              ',  googleBtn ,'\n            </div>\n            <div class="clearfix"></div>\n            <div id="log-apple">\n              ',  appleBtn ,'\n            </div>\n\n          </div>\n\n        </form>\n        <form id="forgot-pwd" class="hidden">\n          <h3>Forgot Password:</h3>\n          <div class="form-group">\n            <label for="forgot-pwd-email">Please enter your email address:</label>\n            <input type="email" class="form-control" id="forgot-pwd-email" autocomplete="off"\n                   autocorrect="off" autocapitalize="off" spellcheck="false">\n          </div>\n          <div class="btn-grp">\n            <button type="submit" class="btn orange-btn pull-left">Submit</button>\n            <button type="button" class="btn btn-link cancel pull-right">Cancel</button>\n            <div class="sa-loader hidden"></div>\n            <div class="clearfix"></div>\n          </div>\n        </form>\n        <form id="one-time-login" class="hidden">\n          <h3>Sign in link:</h3>\n          <div class="form-group">\n            <label for="one-time-login-email">Please enter your email address:</label>\n            <input type="email" class="form-control" id="one-time-login-email" autocomplete="off"\n                   autocorrect="off" autocapitalize="off" spellcheck="false">\n          </div>\n          <div class="btn-grp">\n            <button type="submit" class="btn orange-btn pull-left">Submit</button>\n            <button type="button" class="btn btn-link cancel pull-right">Cancel</button>\n            <div class="sa-loader hidden"></div>\n            <div class="clearfix"></div>\n          </div>\n        </form>\n        <div id="log-error" class="alert alert-danger hidden" role="alert">...</div>\n      </div>\n    </div>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/not_confirmed_email_yet"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>Please confirm your registration by clicking the link in the email we\'ve sent you.</p>\n<p>We resent the confirmation email to you.</p>\n<p class=\'sub\'>(if you don\'t see it, please check your spam folder)</p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/not_confirmed_email_still"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>We\'ve sent you an email with a confirmation link which will set up your user. Please click the link and it\'ll log you in automatically.</p>\n<p>If you do not see any emails from \'account@seekingalpha.com\' in your inbox or spam folder, please report your issue on our <a href="',  SA.App.userEchoHost ,'">feedback forum</a>.</p>\n\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/activated_bounced_user"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>This email already exists in our system, but was blocked by your email provider as of ',  date ,', we have attempted to remove the block and sent a password reset email to your inbox.</p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/not_activated_bounced_user"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>Registration is in progress for this email address. We attempted to remove a block placed by your email provider on ',  date ,'.<p>\n<p>Please check your inbox for a password reset email.</p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/not_activated_not_bounced_user"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>There is already a registration in progress for this email</p>\n<p>If you did not receive the confirmation email, please ask your IT department or email provider to place seekingalpha.com in the whitelist and try to register again.</p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/password_reset"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>We have sent you instructions on how to get a new password.</p>\n<p>Still not getting it?</p>\n<p>Please report your issue on our <a href="',  SA.App.userEchoHost ,'">feedback forum</a></p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/inline_svg/google"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<svg width="',  width ,'" height="',  width ,'" viewBox="0 0 46 46" version="1.1" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n  <title>Google login</title>\n  <defs>\n    <filter x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox" id="filter-1">\n      <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>\n      <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>\n      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 ',  withBorder ? 0.3 : 0 ,' 0" in="shadowBlurOuter1" type="matrix" result="shadowMatrixOuter1"></feColorMatrix>\n      <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter2"></feOffset>\n      <feGaussianBlur stdDeviation="0.5" in="shadowOffsetOuter2" result="shadowBlurOuter2"></feGaussianBlur>\n      <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 ',  withBorder ? 0.3 : 0 ,' 0" in="shadowBlurOuter2" type="matrix" result="shadowMatrixOuter2"></feColorMatrix>\n      <feMerge>\n        <feMergeNode in="shadowMatrixOuter1"></feMergeNode>\n        <feMergeNode in="shadowMatrixOuter2"></feMergeNode>\n        <feMergeNode in="SourceGraphic"></feMergeNode>\n      </feMerge>\n    </filter>\n    <rect id="path-2" x="0" y="0" width="40" height="40" rx="2"></rect>\n  </defs>\n  <g id="Google-Button" stroke="none" stroke-width="none" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n    <g id="9-PATCH" sketch:type="MSArtboardGroup" transform="translate(-608.000000, -160.000000)"></g>\n    <g id="btn_google_light_normal" sketch:type="MSArtboardGroup" transform="translate(-1.000000, -1.000000)">\n      <g id="button" sketch:type="MSLayerGroup" transform="translate(4.000000, 4.000000)" filter="url(#filter-1)">\n        <g id="button-bg">\n          <use fill="#FFFFFF" fill-rule="evenodd" sketch:type="MSShapeGroup" xlink:href="#path-2"></use>\n          <use fill="none" xlink:href="#path-2"></use>\n          <use fill="none" xlink:href="#path-2"></use>\n          <use fill="none" xlink:href="#path-2"></use>\n        </g>\n      </g>\n      <g id="logo_googleg_48dp" sketch:type="MSLayerGroup" transform="translate(15.000000, 15.000000)">\n        <path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4" sketch:type="MSShapeGroup"></path>\n        <path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853" sketch:type="MSShapeGroup"></path>\n        <path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05" sketch:type="MSShapeGroup"></path>\n        <path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335" sketch:type="MSShapeGroup"></path>\n        <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" sketch:type="MSShapeGroup"></path>\n      </g>\n      <g id="handles_square" sketch:type="MSLayerGroup"></g>\n    </g>\n  </g>\n</svg>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/button/google_btn"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="google-btn-wrapper">\n  <div class="google-items">\n    ',  googleSvg ,'\n    <span class="google-text">Sign in with Google</span>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/button/apple_btn"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="appleid-signin" class="signin-button" data-color="white" data-border="true" data-type="sign in" data-height=',  height ,' data-width=',  width ,' data-border-radius="4px"  ></div>\n<script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/one_time_login"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>We have sent an email to ',  email,' with a temporary sign in link. This link will expire in 60 minutes. </p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/registration_success_body"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>A confirmation email has been sent to: <strong>',  email ,'</strong></p>\n<p class="sub">(if you don\'t see it, please check your spam folder)</p>\n<p class="b-btm">Please confirm your registration and enjoy Seeking Alpha</p>\n<p>After Confirming registration, please <a href="#" id="login-btn">log in</a></p>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/authentication/registration_success_footer"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p class="f-txt">Still not getting the email? <a href="#" id="expand-email">click here</a></p>\n<div class="well hidden">\n  <p>If your email is taking too long (more than 3 minutes), please check your spam folder.</p>\n  <p>Please <a href="#" id="resend-email-btn">click here</a> to send again.</p>\n  <p class="b-btm">Still not getting it?</p>\n  <p>Please report your issue on our <a href="',  SA.App.userEchoHost ,'">feedback forum</a></p>\n</div>\n');}return __p.join('');};
}).call(this);
// To trigger popup publish event to 'registration/success-popup' channel with opt.email SA.Utils.Observer.publish('registration/success-popup', {email:'alex'});




(function(window, SA, $){

  "use strict";

  var articlePage = window.aConf && window.aConf.pagination.page;

  var getDefaultOpt = function() {
    return {
      email: null,
      backdrop: true,
      keyboard: true,
      showCloseBtn: true,
      fromRoadblock: false,
      headerContent: '<h4>Thank you for registering!</h4>',
      source: 'regular_roadblock'
    };
  };

  var getBodyTemplate = function(opt) {
    return JST['jst/popups/authentication/registration_success_body']({
      email: opt.email
    });
  };

  var getFooterTemplate = function() {
    return JST['jst/popups/authentication/registration_success_footer']();
  };

  var onSuccess = function(response) {
    if(response.email_sent) {
      $('#resend-email-btn').unbind('click');
      return window.alert('We have sent you a second confirmation email');
    }
    if(response.error) {
      $('#resend-email-btn').unbind('click');
      return window.alert('There was an error sending confirmation email. Try again later');
    }
  };

  var handleEmailResend = function(opt) {
    SA.Models.Authentication.resendConfirmation({
      email: opt.email,
      onSuccess: onSuccess,
      onFailure: function() {}
    });
    if(opt.fromRoadblock){
      SA.Logger.Mone.event('roadblock', 'article_register_thank_you_reg', 'send_again', {data: {email: opt.email}});
    } else {
      SA.Logger.Mone.event('registration','confirmation','send_again');
    }
  };

  var setModalEvents = function(modal, opt) {
    var $modal = modal.getModalObject();

    if(opt.fromRoadblock){
      $modal.find('#login-btn').on('click', function() {
        modal.hide();
        SA.Logger.Mone.event('roadblock', 'article_register_thank_you_reg', 'clicked_login', {data: {email: opt.email}});
        location.href = SA.App.host + '/account/login?source=roadblock_article_confirmed';
      });
    } else {
      $modal.find('#login-btn').on('click', function(e) {
        e.preventDefault();
        modal.hide();
        SA.Widgets.AuthenticationPopup.show({buttonClicked: 'registration_confirmation_popup'});
        SA.Logger.Mone.event('registration','confirmation','log_in');
      });
    }

    $modal.find('#expand-email').on('click', function(e) {
      e.preventDefault();
      $(this).closest('.f-txt').hide().closest('.modal-footer').find('.well').removeClass('hidden');
      if(opt.fromRoadblock){
        SA.Logger.Mone.event('roadblock', 'article_register_thank_you_reg', 'not_received', {data: {email: opt.email}});
      } else {
        SA.Logger.Mone.event('registration','confirmation','not-getting');
      }
    });

    $modal.find('#resend-email-btn').on('click', function(e) {
      e.preventDefault();
      handleEmailResend(opt);
    });
  };

  var showModal = function(opt) {
    var modal = SA.Widgets.Popup.build({
      className: 'sa-reg-success',
      backdrop: opt.backdrop,
      keyboard: opt.keyboard,
      showHeader: true,
      headerContent: opt.headerContent,
      showCloseBtn: opt.showCloseBtn,
      showBody: true,
      bodyContent: getBodyTemplate(opt),
      showFooter: true,
      footerContent: getFooterTemplate(),
      removeAfterClose: true
    });

    setModalEvents(modal, opt);

    modal.show();

    if(opt.fromRoadblock){
      var biData = articlePage ? {email: opt.email, page: articlePage} : {email: opt.email};

      SA.Logger.Mone.event('funnel_complete_popup', opt.source, 'email_signup', {data: biData});
    }
  };

  var subscriptionCallback = function(e, opt) {
    opt = opt || {};
    var options = $.extend({}, getDefaultOpt(), opt);
    if(options.email) {
      return showModal(options);
    }
  };

  var initialize = function() {
    if(!SA.Data.User.loggedIn()) {
      SA.Utils.Observer.subscribe('registration/success-popup', subscriptionCallback);
    }
  };

  SA.run(initialize, 'conf-reg-popup');

}(window, SA, jQuery));
(function () {

  "use strict";

  var scope = SA.UsingNamespace('SA.Utils.AuthenticationHelpers');

  // HELPERS

  scope.addLoader = function (btn) {
    btn.addClass('sa-animated');
  };

  scope.removeLoader = function (btn) {
    btn.removeClass('sa-animated');
  };

  scope.markWithError = function ($input, errorContainer, error) {
    $input.closest('.form-group').removeClass('has-success').addClass('has-error');
    if (error) {
      scope.showError(errorContainer, error);
      $input.focus();
    }
  };

  scope.markWithSuccess = function (input, errorContainer) {
    input.closest('.form-group').removeClass('has-error').addClass('has-success');
    errorContainer.empty();
  };

  scope.showError = function (errorContainer, text) {
    if (errorContainer.html() !== text) {
      errorContainer.removeClass('hidden').html(text);
    }
  };

  scope.hideErrors = function (errorContainer) {
    errorContainer.addClass('hidden').empty();
  };

  scope.errorPopup = function (message, header, modal) {
    if (modal) modal.hide();
    return SA.Widgets.Popup.build({
      className: 'sa-auth-error',
      backdrop: true,
      keyboard: true,
      showHeader: true,
      headerContent: '<h4>' + header + '</h4>',
      showCloseBtn: true,
      showBody: true,
      bodyContent: message,
      showFooter: false,
      removeAfterClose: true
    }).show();
  };

  scope.rbErrorPopup = function (message, header, modal) {
    if (modal) modal.hide();
    return SA.Widgets.Popup.build({
      className: 'sa-auth-error',
      showHeader: true,
      showCloseBtn: false,
      backdrop: false,
      keyboard: false,
      headerContent: '<h4>' + header + '</h4>',
      showBody: true,
      bodyContent: message,
      showFooter: false,
      removeAfterClose: true
    }).show();
  };

  scope.errorPopup = function (message, header, modal) {
    if (modal) modal.hide();
    return SA.Widgets.Popup.build({
      className: 'sa-auth-error',
      showHeader: true,
      showCloseBtn: true,
      backdrop: false,
      keyboard: true,
      showBody: true,
      bodyContent: message,
      headerContent: '',
      showFooter: false,
      removeAfterClose: true
    }).show();
  };


  // VALIDATORS

  scope.validate = function (rule, input, errorContainer, error) {
    if (rule) {
      scope.markWithSuccess(input, errorContainer);
      return true;
    }
    scope.markWithError(input, errorContainer, error);
    return false;
  };

  scope.validatePresence = function (input, errorContainer, error) {
    return scope.validate(SA.Utils.Validate.required(input), input, errorContainer, error);
  };

  scope.validateEmailValue = function (input, errorContainer, error) {
    return scope.validate(SA.Utils.Validate.email(input.val().trim()), input, errorContainer, error);
  };

  scope.validateEmail = function (input, errorContainer, error) {
    return scope.validatePresence(input, errorContainer, error) && scope.validateEmailValue(input, errorContainer, error);
  };

  scope.validateSignInPasswordValue = function (input, errorContainer, error) {
    return scope.validate(SA.Utils.Validate.between(input.val(), 8, 40), input, errorContainer, error);
  };

  scope.validateSignInPasswordValueOld = function (input, errorContainer, error) {
    return scope.validate(SA.Utils.Validate.between(input.val(), 4, 40), input, errorContainer, error);
  };

  scope.validateSignInPassword = function (input, errorContainer, error) {
    return scope.validatePresence(input, errorContainer, error) && scope.validateSignInPasswordValue(input, errorContainer, error);
  };

  scope.validateTerms = function (input, errorContainer, error) {
    return scope.validate(input.prop('checked'), input, errorContainer, error);
  };

  scope.validateMinTickers = function (input, errorContainer, error) {
    var missingTickers = 0;
    $.map(input, function (i) {
      return scope.validatePresence($(i), errorContainer, error) || missingTickers++
    });
    return missingTickers === 0;
  };


}());















(function(SA, $){

  "use strict";

  var scope = SA.UsingNamespace('SA.Widgets.AuthenticationPopup'),
      signInLock = false, loginLock = false, resetLock = false, options, modal;
  var authHelpers = SA.Utils.AuthenticationHelpers;

  var getError = function(error) {
    if (/^SA users/.test(error)) return error; // Whitelist some errors

    var errors = {
      defaultMessage: 'There was an error. Please try again later',
      emailNotValid: 'Please enter a valid email address.',
      passwordNotValid: 'Please enter your password.',
      passwordNotValidFormat: 'Minimum 8 characters',
      nickNotValid: 'Please enter a username.',
      termsNotValid: 'Terms must be agreed in order to confirm registration.',
      login_failed: 'Please check your email and password and try again.',
      blocked_user: 'Login failed, please report your issue on our <a href='+SA.App.userEchoHost+'>feedback forum</a>',
      no_user: 'Please check your email and try again.',
      too_many_attempts: 'Too many login attempts have been made with an incorrect password. Please press <a class="forgot-pwd-link">Forgot your password</a>? to reset your password',
      missing_user_details: 'Please check your email and password and try again.',
      missing_nick: 'Please enter a username.',
      already_registered: 'You are already registered, please try the Member sign in.',
      relevant_link: 'You can request one sign in link per hour. Please recheck your email.',
    };

    if (errors[error]) return errors[error];
    if (/^(Nick|Username)/.test(error)) return error;
    return errors.defaultMessage;
  };

  //Google login

  var loginWithGoogle = function() {
    SA.Models.Authentication.googleLogin('registration', 'headtabs_gplus_button');
  };

  var loginWithApple = function() {
    SA.Models.Authentication.appleLogin('registration', 'headtabs_apple_button');
  };

  // CALLBACKS
  //Password Reset

  var beforePwdReset = function($modal) {
    resetLock = true;
    authHelpers.hideErrors($modal.find('#log-error'));
    $modal.find('#forgot-pwd').find('.sa-loader').removeClass('hidden');
  };

  var afterPwdReset = function() {
    resetLock = false;
    modal.getModalObject().find('#forgot-pwd').find('.sa-loader').addClass('hidden');
  };

  var resetPwdClck = function($modal) {
    $modal.find('#authentication_login_form').toggleClass('hidden');
    $modal.find('#forgot-pwd').toggleClass('hidden');
    $modal.find('.alert').addClass('hidden');
    $modal.find('.has-error').removeClass('has-error');
  };

  var resetPwdCancelClck = function($modal) {
    $modal.find('#authentication_login_form').toggleClass('hidden');
    $modal.find('#forgot-pwd').toggleClass('hidden');
    $modal.find('.alert').addClass('hidden');
    $modal.find('.has-error').removeClass('has-error');
  };

  var handleResetFailure = function(response, email) {
    var errorContainer = modal.getModalObject().find('#log-error');
    $('.has-success').removeClass('has-success');
    sendMoneEvent('forgot_password:error', {email: email, error: response.message});
    switch(response.message) {
      case 'not_confirmed_email_yet':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_yet'](), 'Confirm your registration', modal);
      case 'not_confirmed_email_still':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_still'](), 'Confirm your registration', modal);
      default:
        return authHelpers.showError(errorContainer, getError(response.message));
    }
  };

  var handleResetSuccess = function(email) {
    SA.Logger.Mone.event('forgotpass_login_sent');
    sendMoneEvent('forgot_password:success', {email: email});
    authHelpers.errorPopup(JST['jst/popups/authentication/password_reset'](), 'Password reset', modal);
  };

  var onResetSuccess = function(response) {
    response = response || {};
    afterPwdReset();
    return response.forgot_password ? handleResetSuccess(this.email) : handleResetFailure(response, this.email);
  };

  var onResetFailure = function() {
    afterPwdReset();
  };

  var handleForgotPassword = function($modal) {
    if(resetLock) {
      return false;
    }

    var $emailInput = $modal.find('#forgot-pwd-email'),
        $loginFormError = $modal.find('#log-error');

    if (authHelpers.validateEmail($emailInput, $loginFormError , getError('emailNotValid'))) {

      beforePwdReset($modal);

      SA.Models.Authentication.resetPassword({
        id: options.id,
        activity: options.activity,
        'function': options.resetSuccess,
        email: $emailInput.val().trim(),
        onSuccess: onResetSuccess,
        onFailure: onResetFailure
      });
    }

  };

  // SignIn

  var oneTimeLoginClick = function($modal) {
    $modal.find('#authentication_login_form').toggleClass('hidden');
    $modal.find('#one-time-login').toggleClass('hidden');
    $modal.find('.alert').addClass('hidden');
    $modal.find('.has-error').removeClass('has-error');
  };

  var handleOneTimeLoginFailure = function(response) {
    var errorContainer = modal.getModalObject().find('#log-error');
    $('.has-success').removeClass('has-success');
    if (['not_confirmed_email_yet', 'not_confirmed_email_still'].includes(response.message)) {
      return authHelpers.errorPopup(JST['jst/popups/authentication/' + response.message ](), 'Confirm your registration', modal);
    } else {
      SA.Logger.Mone.event('','Sign_in', 'one_time_login_link_error', {data: {error_message: response.message}});
      sendMoneEvent('magic_link:error', {error: response.message});
      return authHelpers.showError(errorContainer, getError(response.message));
    }
  };

  var handleOneTimeLoginSuccess = function(email) {
    sendMoneEvent('magic_link:success', {email: email});
    SA.Logger.Mone.event('Sign_in','one_time_login_link_sent');
    authHelpers.errorPopup(JST['jst/popups/authentication/one_time_login']({email: email}), 'One Time Login', modal);
  };

  var onOneTimeLoginSuccess = function(response) {
    resetLock = false;
    modal.getModalObject().find('#one-time-login').find('.sa-loader').addClass('hidden');
    return response.login_link ? handleOneTimeLoginSuccess(response.email) : handleOneTimeLoginFailure(response);
  };

  var submitOneTimeLogin = function($modal) {
    if(resetLock) {
      return false;
    }

    var $emailInput = $modal.find('#one-time-login-email'),
        $loginFormError = $modal.find('#log-error');

    if (authHelpers.validateEmail($emailInput, $loginFormError , getError('emailNotValid'))) {

      resetLock = true;
      authHelpers.hideErrors($loginFormError);
      $modal.find('#one-time-login').find('.sa-loader').removeClass('hidden');

      SA.Models.Authentication.oneClickLogin({
        id: options.id,
        activity: options.activity,
        'function': options.oneTimeClickSuccess,
        email: $emailInput.val().trim(),
        onSuccess: onOneTimeLoginSuccess,
        onFailure: handleOneTimeLoginFailure
      });
    }

  };

  var onBeforeSignIn = function($modal) {
    signInLock = true;
    authHelpers.hideErrors($modal.find('#sign-error'));
    authHelpers.addLoader($modal.find('#sign-btn'));
  };

  var onAfterSignIn = function() {
    signInLock = false;
    authHelpers.removeLoader(modal.getModalObject().find('#sign-btn'));
  };

  var onSignInFailure = function() {
    onAfterSignIn();
  };

  var handleSignInFailure = function(response) {
    var errorContainer = modal.getModalObject().find('#sign-error');
    $('.has-success').removeClass('has-success');
    var form = $(modal.getModalObject()[0]),
      username = form.find('#authentication_register_nick').val().trim(),
      email = form.find('#authentication_register_email').val().trim();
    sendMoneEvent('register:error', {username: username, email: email, error: response.message});
    switch(response.message) {
      case 'not_confirmed_email_yet':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_yet'](), 'Confirm your registration', modal);
      case 'not_confirmed_email_still':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_still'](), 'Confirm your registration', modal);
      case 'activated_bounced_user':
        return authHelpers.errorPopup(JST['jst/popups/authentication/activated_bounced_user']({date: response.date}), 'This email already exists', modal);
      case 'not_activated_bounced_user':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_activated_bounced_user']({date: response.date}), 'Registration in progress', modal);
      case 'not_activated_not_bounced_user':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_activated_not_bounced_user'](), 'Registration in progress', modal);
      default:
        return authHelpers.showError(errorContainer, getError(response.message));
    }
  };

  var handleSignInSuccess = function(response, opt) {
    if($.isFunction(opt.onSignInSuccess)) {
      return opt.onSignInSuccess(response, opt, modal);
    }
    modal.hide();
    sendMoneEvent('register:success', {email: opt.email, username: opt.nick});
    SA.Utils.Observer.publish('registration/success-popup', {email:opt.email});
  };

  var onSignInSuccess = function(response, opt) {
    response = response || {};
    onAfterSignIn();
    return response.registration ? handleSignInSuccess(response, opt) : handleSignInFailure(response, opt);
  };

  var tryToSignIn = function($modal) {
    if(signInLock) {
      return;
    }

    var $nickInput = $modal.find('#authentication_register_nick'),
        $emailInput = $modal.find('#authentication_register_email'),
        $passwordInput = $modal.find('#authentication_register_password'),
        $termsInput = $modal.find('#authentication_register_agree_to_terms'),
        $signInFormError = $modal.find('#sign-error'),
        $errorContainer = $modal.find('#log-error');

    if (authHelpers.validatePresence($nickInput, $signInFormError, getError('nickNotValid'))
      && authHelpers.validateEmail($emailInput, $signInFormError, getError('emailNotValid'))
      && authHelpers.validateSignInPassword($passwordInput, $signInFormError, getError('passwordNotValidFormat'))
      && authHelpers.validateTerms($termsInput, $signInFormError, getError('termsNotValid'))) {

      onBeforeSignIn($modal);
      SA.Models.Authentication.signIn({
        id: options.id,
        activity: options.activity,
        articleId: options.articleId,
        'function': options.signInSuccess,
        email: $emailInput.val().trim(),
        password: $passwordInput.val(),
        nick: $nickInput.val().trim(),
        onSuccess: onSignInSuccess,
        onFailure: onSignInFailure,
        rt: options.rt,
        urlHash: options.urlHash,
        rtaSlugs: options.rtaSlugs,
        // back compatibility
        moneAction: options.moneSignInAction,
        extra: options.extra,
        biData: {
          bi_source: options.biSource,
          bi_action: options.buttonClicked,
        },
      });
    } else {
      sendMoneEvent('register:error', {
        rt: $termsInput.val(),
        username: $nickInput.val().trim(),
        email: $emailInput.val().trim(),
        error: $signInFormError.text().trim()
      });
    }
  };

  var setSignInEvents = function($modal) {
    $modal.find('#authentication_register_form').on('submit', function(event){
      sendMoneEvent('register:click');
      event.preventDefault();
      $modal.find('#forgot-pwd').addClass('hidden');
      tryToSignIn($modal);
    });
  };


  // LogIn

  var onBeforeLogin = function($modal) {
    loginLock = true;
    authHelpers.hideErrors($modal.find('#log-error'));
    authHelpers.addLoader($modal.find('#log-btn'));
  };

  var onAfterLogin = function() {
    loginLock = false;
    authHelpers.removeLoader(modal.getModalObject().find('#log-btn'));
  };

  var handleLogInSuccess = function(response, opt) {
    sendMoneEvent('signin:success', {email: opt.email, user_id: SA.Data.Cookies.get('user_id')}); // must take user_id directly from the cookie as SA.Data.User.id() returns 0 at this point.
    if (opt.moneAction) {
      SA.Logger.Mone.event('log_reg_' + opt.moneAction + '_logged');
    }
    if ($.isFunction(opt.onLoginSuccess)) {
      return opt.onLoginSuccess(response, opt, modal);
    }

    if (opt.rt) {
      location.href = opt.rt;
    } else {
      if (opt.urlHash) {
        location.hash = opt.urlHash;
      }
      if (SA.Utils.Env.isIE() && SA.pageConfig.Data.unbounce_hosted_iframe) {
        top.window.postMessage({action: 'reload'}, 'https://subscriptions.seekingalpha.com');
      } else {
        location.reload();
      }
    }
  };

  var handleLogInFailure = function(response) {
    onAfterLogin();
    var form = $(modal.getModalObject()[0]),
      username = form.find('#authentication_register_nick').val().trim(),
      email = form.find('#authentication_register_email').val().trim();
    sendMoneEvent('signin:error', {username: username, email: email, error: response.message});
    var errorContainer = modal.getModalObject().find('#log-error');
    $('.has-success').removeClass('has-success');
    switch(response.message) {
      case 'not_confirmed_email_yet':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_yet'](), 'Confirm your registration', modal);
      case 'not_confirmed_email_still':
        return authHelpers.errorPopup(JST['jst/popups/authentication/not_confirmed_email_still'](), 'Confirm your registration', modal);
      case 'too_many_attempts':
        loginLock = false;
        return authHelpers.showError(errorContainer, getError('too_many_attempts'));
      default:
        return authHelpers.showError(errorContainer, getError(response.message));
    }
  };

  var onLogInSuccess = function(response, opt) {
    response = response || {};
    return response.login ? handleLogInSuccess(response, opt) : handleLogInFailure(response, opt);
  };

  var onLogInFailure = function() {
    onAfterLogin();
  };

  var tryToLogIn = function($modal) {
    sendMoneEvent('signin:click');
    if(loginLock) {
      return;
    }

    var emailInput = $modal.find('#authentication_login_email'),
        passwordInput = $modal.find('#authentication_login_password'),
        loginFormError = $modal.find('#log-error');

    if (authHelpers.validateEmail(emailInput, loginFormError, getError('emailNotValid')) && authHelpers.validatePresence(passwordInput, loginFormError, getError('passwordNotValid'))) {
      onBeforeLogin($modal);
      SA.Models.Authentication.logIn({
        id: options.id,
        articleId: options.articleId,
        activity: options.activity,
        'function': options.loginSuccess,
        email: emailInput.val().trim(),
        password: passwordInput.val(),
        onSuccess: onLogInSuccess,
        onFailure: onLogInFailure,
        rt: options.rt,
        urlHash: options.urlHash,
        rtaSlugs: options.rtaSlugs,
        onLoginSuccess: options.onLoginSuccess,
        // back compatibility
        moneAction: options.moneLoginAction,
        extra: options.extra
      });
    } else {
      sendMoneEvent('signin:error', {email: emailInput.val().trim(), error: loginFormError.text().trim()});
    }
  };

  var setLogInEvents = function($modal) {
    var logInForm = $modal.find('#authentication_login_form');

    logInForm.on('submit', function(event){
      event.preventDefault();
      $modal.find('#forgot-pwd').addClass('hidden');
      tryToLogIn($modal);
    });

    logInForm.find('#rst-pwd').on('click', function(event){
      sendMoneEvent('forgot_password:click');
      event.preventDefault();
      resetPwdClck($modal);
    });

    logInForm.find('#one-time-link').on('click', function(event){
      event.preventDefault();
      sendMoneEvent('magic_link:click');
      SA.Logger.Mone.event('Sign_in','click_one_time_link_popup');
      oneTimeLoginClick($modal);
    });

    logInForm.find('#log-google').on('click', function(event){
      event.preventDefault();
      sendMoneEvent('external_account:click', {external_account: 'google'});
      loginWithGoogle();
    });

    logInForm.find('#appleid-signin').on('click', function(event){
      event.preventDefault();
      sendMoneEvent('external_account:click', {external_account: 'apple'});
      loginWithApple();
    });

    $modal.find('#forgot-pwd').on('submit', function(event){
      event.preventDefault();
      var email = $modal.find('#one-time-login-email')[0].value;
      sendMoneEvent('forgot_password:submit',{email: email});
      handleForgotPassword($modal);
    }).on('click', '.cancel', function(event){
      event.preventDefault();
      sendMoneEvent('forgot_password:cancel');
      resetPwdCancelClck($modal);
    });

    $modal.find('#one-time-login').on('submit', function(event){
      event.preventDefault();
      var email = $modal.find('#one-time-login-email')[0].value;
      sendMoneEvent('magic_link:submit',{email: email});
      submitOneTimeLogin($modal);
    }).on('click', '.cancel', function(event){
      event.preventDefault();
      if (event.cancelable) {
        SA.Logger.Mone.event('Sign_in','one_time_login_link_cancel');
        sendMoneEvent('magic_link:cancel');
      }
      oneTimeLoginClick($modal);
    });

    $modal.find('#log-error').on('click', '.forgot-pwd-link', function(event){
      event.preventDefault();
      resetPwdClck($modal);
    });

    $modal.find('#log-error').on('click', '.one-time-login-email', function(event){
      event.preventDefault();
      oneTimeLoginClick($modal);
    });
  };

  // Event listener

  var setEventListeners = function(modal) {
    var $modal = modal.getModalObject();
    setSignInEvents($modal);
    setLogInEvents($modal);
  };

  // Popup builders

  function buildAuthModal() {
    return SA.Widgets.Popup.build({
      className: 'sa-auth',
      backdrop: typeof options.backdrop !== 'undefined' ? options.backdrop : true,
      keyboard: typeof options.keyboard !== 'undefined' ? options.keyboard : true,
      showHeader: options.header,
      headerContent: options.header ? ('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4>' + options.headerContent +'</h4>') : '',
      showCloseBtn: false,
      showBody: true,
      bodyContent: JST['jst/popups/authentication/main'](
        {
          usersOnSite: SA.App.usersOnSite,
          showCloseButton: typeof options.showCloseButton !== 'undefined' ? options.showCloseButton : !options.header,
          headerTitle: options.headerTitle,
          passwordPlaceholder: options.placeholder,
          appleBtn: window.JST['jst/widgets/button/apple_btn']({width: '240px', height: '32px'}),
          googleBtn: window.JST['jst/widgets/button/google_btn'](
            {
              googleSvg: window.JST['jst/inline_svg/google']({width: 32, withBorder: false})
            })
        }),
      showFooter: false,
      removeAfterClose: true,
      afterOpen: function () {
        if ($.isFunction(options.afterOpen)) {
          options.afterOpen();
        }
      },
      afterClose: function () {
        if ($.isFunction(options.afterClose)) {
          options.afterClose();
        }
        sendMoneEvent('dismiss');
      }
    });
  }

  var showAuthPopup = function() {
    modal = buildAuthModal();
    setEventListeners(modal);
    sendMoneEvent('shown', {popup_source: options.buttonClicked});
    modal.show();
    SA.Vendor.Gtm.ga360Event({
      GA_event_category: 'Sign in',
      GA_event_action: 'Sign in presented',
      GA_event_label: 'Sign in presented'
    });
  };


  // PUBLIC METHODS

  /* List of options

  opt.force - show popup even if user loggedIn (bool)
  opt.header - show extra header - default popup has no header (bool)
  opt.headerContent - content for header if opt.header === true

  callbacks:

  opt.onLoginSuccess - executed after successful login (not performing reload) - params: response, opt, modal

  opt.onSignInSuccess - executed after successful registration (prevent showing confirmation popup and modal hide) - params: response, opt, modal
  */
  scope.show = function(opt) {
    options = $.extend({}, {
      id: 'headtabs_login',
      activity: 'footer_login',
      moneLoginAction: 'login',
      moneSignInAction: 'Registered',
      loginSuccess: 'onLoginSuccess',
      signInSuccess: 'onSignInSuccess',
      resetSuccess: 'onResetSuccess',
      oneTimeClickSuccess: 'onOneTimeLoginSuccess',
      onSignInSuccess: null,
      placeholder: 'Choose Password (minimum 8 characters)',
      header: false,
      articleId: SA.pageConfig.Data.article && SA.pageConfig.Data.article.id,
      extra: {}
    }, opt || {});


    if(!SA.Data.User.loggedIn() || options.force) {
      showAuthPopup();
    }
  };

  function sendMoneEvent(action, data) {
    data = data || {};
    if (!data.external_account && !(action === 'shown' || action === 'dismiss')) {
      data.external_account = 'none';
    }

    SA.Logger.Mone.event('registration', 'signin_or_register:popup', action, {
      data: {
        rt: data.rt,
        popup_source: data.popup_source,
        external_account: data.external_account,
        user_id: data.user_id,
        username: data.username,
        email: data.email,
        error: data.error,
      }
    });
  }

}(SA, jQuery));

(function() { this.JST || (this.JST = {}); this.JST["jst/header/back_to_mobile_web"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<style>#sa-b-mob {display:none;margin:0;background-color:#f8f8f8;text-align:center;font-size:60px;padding:44px 0;color:#024999;border-bottom:1px solid #024999;cursor:pointer;}</style>\n<div id="sa-b-mob" class="container-fluid alert alert-warning alert-dismissible" role="alert"><div class="container">RETURN TO MOBILE VERSION</div></div>\n');}return __p.join('');};
}).call(this);

(function(w, SA, $) {

  'use strict';

  var cStore = SA.Data.Cookies, $c, cName = 'show_desktop';

  var getContent = function() {
    var $m = $(JST['jst/header/back_to_mobile_web']());
    return $m.on('click', function() {
      cStore.expire(cName);
      w.location.reload();
    });
  };

  var init = function () {
    if(cStore.get(cName)) {
      $c = getContent();
      $('#page_content_wrapper').prepend($c);
      $c.fadeIn();
    }
  };

  init();

}(window, window.SA, window.jQuery));
(function() { this.JST || (this.JST = {}); this.JST["jst/popups/zuora/dunning_popup"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="headerFiller">\n    <h2>- Payment Processing Issue -</h2>\n    <svg class="imgLogo" style="fill:#333" viewBox="0 0 53 53">\n        <path d="M49.7 17.5L33.5 1.4c-1.8-1.8-4.7-1.8-6.5 0L1.4 27c-1.8 1.8-1.8 4.7 0 6.5l2 2 13.4 13.3h-1.9c-.6.1-1 .6-1 1.2 0 .5.5.9 1 1h21.2c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1H24.8L49.7 24c1.7-1.8 1.7-4.7 0-6.5zm-1.6 5L22.5 48.2c-.5.5-1.1.7-1.8.7s-1.3-.3-1.8-.7L5.6 34.7l24.6-24.6c.4-.4.4-1.1 0-1.5-.4-.4-1.1-.4-1.5 0L4.1 33.2 2.8 32c-1-1-1-2.6 0-3.5L28.5 2.9c1-1 2.6-1 3.5 0l5.8 5.7-24.6 24.6c-.4.4-.4 1.1 0 1.5s1.1.4 1.5 0l24.6-24.6 8.9 8.9c.9 1 .9 2.6-.1 3.5z" class="iconPop"/>\n        <path d="M40.5 16.3c-.4-.4-1.1-.4-1.5 0l-4.5 4.5c-.4.4-.4 1.1 0 1.5l3 3c.4.4 1.1.4 1.5 0l4.5-4.5c.4-.4.4-1.1 0-1.5l-3-3zm-2.2 6.8l-1.5-1.5 3-3 1.5 1.5-3 3zM10.7 35.7l-.4.5c-.4.4-.4 1.1 0 1.5s1.1.4 1.5 0l.4-.5c.4-.4.4-1.1 0-1.5s-1.1-.4-1.5 0z" class="iconPop"/>\n    </svg>\n    <div class="mainText">\n        <p>We noticed an outstanding payment for one or more of your active subscriptions.</p>\n        <p>To ensure you don\'t lose access, update your billing information by clicking <a href="', SA.App.host,'/account/update_payment_method?source=dunning_payment_popup">here</a>, or contact us so we can help you resolve your open balance.</p>\n    </div>\n    <div class="bottomText">\n        <p>Email us at <b>subscriptions@seekingalpha.com</b> or call us directly at <b>1-347-509-6837</b></p>\n    </div>\n</div>\n');}return __p.join('');};
}).call(this);

(function (SA, $) {

  'use strict';
  var FOUR_HOURS_DELAY = location.host.match(/^(staging|dev)/) ? 30000 : 4 * 60 * 60 * 1000;

  var show = function () {
    var opt = {
      className: 'dunning-popup',
      backdrop: true,
      headerContent: JST['jst/popups/zuora/dunning_popup'](),
      keyboard: true,
      afterOpen: function () {
        moneEvent("shown", {data: {subscription_name: SA.Data.User.dunningSubKeys()}})
      } ,
      afterClose: function () {
        moneEvent("dismiss")
      },
      removeAfterClose: true,
    }, modal;
    modal = SA.Widgets.Popup.build(opt);
    if (!SA.Widgets.Popup.isRunning()) {
      modal.show();
    }
  };

  function init() {
    if (checkForRequirementsToShow()) {
      show();
      setTimestamp();
    }
  }

  function moneEvent(action, data) {
    SA.Logger.Mone.event('dunning_payment_popup', '', action, data);
  }

  function setTimestamp() {
    SA.Data.Cache.set('dunning_popup_shown', Date.now());
  }

  function checkForRequirementsToShow() {
    var whiteListPages = ['quotes', 'article', 'portfolio', 'user_settings', 'subscription_settings'];
    var inTheSpecialPage = whiteListPages.indexOf(SA.pageConfig.name) > -1;
    return SA.Data.User.loggedIn() && inTheSpecialPage && SA.Data.User.isDunning() && (!getTimestamp() || showPopup())
  }

  function getTimestamp() {
    return SA.Data.Cache.get('dunning_popup_shown');
  }

  function showPopup() {
    return Date.now() - getTimestamp() >= FOUR_HOURS_DELAY
  }

  SA.run(init, 'dunning-popup');

})(window.SA, window.jQuery);
(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Navigation.HeaderHelpLinks');

  scope.fetch = fetch;

  var $menu = $('#hd-help .dropdown-menu'), popup;

  function fetch() {
    if ($menu.length) {
      clearCustomLis();
      $.ajax({
        method: 'GET',
        url: '/header_help_links/get',
        cache: false
      }).done(function (res) {
        if (res && res.links && res.links.length) {
          var lis = $.map(res.links, renderLi);
          $menu.find('li.dropdown-header').after(lis.join(''));
        }
      });
    }
  }

  function clearCustomLis() {
    $menu.find('li.custom-link').remove();
  }

  function renderLi(obj) {
    return [
      '<li class="custom-link">',
      (obj.open_in === '_popup' ? renderPopup(obj) : renderLink(obj)),
      '</li>'
    ].join('');
  }

  function renderPopup(link) {
    return [
      '<a href="#" target="_popup" data-content="',
      encodeURIComponent(link.content),
      '">',
      link.title,
      '</a>'
    ].join('');
  }

  function renderLink(link) {
    return ['<a href="', link.content, '" target="', link.open_in, '">', link.title, '</a>'].join('');
  }

  function initEvents() {
    $menu.on('click', 'a[target="_popup"]', function (e) {
      e.preventDefault();

      var $elem = $(e.currentTarget), content = decodeURIComponent($elem.data('content'));
      if (!!content) {
        popup = SA.Widgets.Popup.build({
          showCloseBtn: true,
          headerContent: '<b>' + $elem.text() + '</b>',
          bodyContent: content,
          showFooter: false,
          keyboard: true,
          backdrop: true,
          removeAfterClose: true,
          className: 'popup header-help-link',
          afterOpen: function () {
          },
          afterClose: function () {
            popup = null;
          }
        });

        SA.Logger.Mone.event('help_menu', 'popup', 'shown', {data: {'header': $elem.text()}});

        popup.show();
      }
    });

    $('#hd-help').on('show.bs.dropdown', function () {
      SA.Logger.Mone.event('help_menu', 'top_nav', 'shown');
    });
  }

  if ($menu.length) {
    initEvents();

    fetch();
  }

}(window, window.SA, window.jQuery));
(function(SA, $){

  "use strict";

  //Class works only with callbacks, executes callback immediately if has cache, if no - performs request and callback

  var scope = SA.UsingNamespace('SA.Data.Notifications'),
      ls = SA.Data.Cache,
      loggedIn = SA.Data.User.loggedIn(),
      userNotifications = null,
      totalPages = null,
      currPage = null;

  var storeCountInLS = function(newCount, withCache) {
    if (withCache) {
      ls.set('user_notifications_count', newCount, 10*60*1000);
    } else {
      ls.set('user_notifications_count', newCount);
    }
  };

  var removeCountFromLs = function(){
    ls.del('user_notifications_count');
  };

  var getCountFromLS = function(cb) {
    userNotifications = JSON.parse(ls.get('user_notifications_count'));
    if(userNotifications.value && $.isFunction(cb)) {
      cb(userNotifications.value);
    }
  };

  var getNewNotificationsCount = function(cb){
    $.get('/notifications/new_notification_count').done(function(resp) {
      if(resp.new_notifications) {
        userNotifications = resp.new_notifications;
        storeCountInLS(userNotifications, true);
        if ($.isFunction(cb)) {
          cb(userNotifications);
        }
      }
      if(resp.total_pages) {
        totalPages = resp.total_pages;
      }
    });
  };

  var deliverNavbarNotifications = function(notificationType, cb) {
    if (currPage === null) {
      currPage = {
        "direct_messages" : 1,
        "user_notifications" : 1
      }
      getFirstNotificationsBatch(notificationType, cb);
    } else {
      if (currPage[notificationType]== totalPages[notificationType]){
        return;
      } else {
        currPage[notificationType] += 1;
        loadNextNotificationsBatch(notificationType, cb);
      }
    }
  };

  var getFirstNotificationsBatch = function(cb) {
    $.get('/notifications/navbar', { page: 1 }, function(res) {
      // no notifications => only single li element, set currPage to null again
      if ($(res).length === 1){
        currPage = null;
      }
      if ($.isFunction(cb)) {
        cb(res);
      }
    });
  };

  var loadNextNotificationsBatch = function(notificationType, cb) {
    var url = "/notifications/navbar_load_more_" + notificationType;
    $.get(url, { page: currPage[notificationType] }, function(res) {
      if ($.isFunction(cb)) {
        cb(res);
      }
    });
  };

  // Public functions

  scope.getNewNotificationsCount = function(callback){
    if(loggedIn) {
      return ls.get('user_notifications_count', true) ? getCountFromLS(callback) : getNewNotificationsCount(callback);
    }
  };

  scope.getNotifications = function(notificationType, callback) {
    if(loggedIn) {
      return deliverNavbarNotifications(notificationType, callback);
    }
  };

  scope.resetNewNotifications = function(){
    if(loggedIn) {
      removeCountFromLs();
    }
  };

  scope.resetFirstPage = function() {
    currPage = null;
  };

  scope.removeAllNotifications = function(opt, cb) {
    $.post('/notifications/remove_all_notifications', {})
      .done(function(resp){
        if (resp.status && resp.status === 'success' && $.isFunction(cb)) {
          cb();
        }
      });
  };

  scope.removeNotification = function(opt, cb) {
    var id = opt.notificationId;
    var el = opt.el;
    var url = '/notifications/' + id + '/remove_single';

    $.ajax({
      method: 'POST',
      url: url,
      dataType: 'json'
    }).done(function(resp){
      if ($.isFunction(cb)) {
        cb(resp, el);
      }
    });
  };

}(SA, jQuery));

(function(SA, $){

  "use strict";

  var scope = SA.UsingNamespace('SA.Widgets.UserNotifications');

  var nt = SA.Data.Notifications, $userNotificationsLink, $dropdown, ntWidget, scrollMoneSent = false;

  var removedNotifications = [];

  var showNotificationsList = function(){
    var newCount = $dropdown.find('.badge-n').text() || "0";
    nt.resetFirstPage();
    nt.getNotifications(function(notifications){
      $dropdown.find('.divider').prevAll().remove();
      $dropdown.find('.divider').before(notifications);
      $dropdown.find('.sa-loader').hide();
      ntWidget.checkNoNotifications($('.menu-notifications.direct-messages'));
      ntWidget.checkNoNotifications($('.menu-notifications.user-notifications'));

      $dropdown.loaded = true;
      setPopupMaxHeight();
      setNotificationEvents();

      SA.Logger.Mone.event('notification', 'header_icon', 'popup_opened', {
        data: {
          num: newCount,
          content_array: loadedNotifications($('li.single-notification'))
        }
      });

      var $embargoedArticles = $dropdown.find('.user-notifications').find('li[data-action="embargoed_article"]');
      $embargoedArticles.each(function () {
        SA.Logger.Mone.event('pro_marketing_notification', 'nav_notifications_link', 'displayed', {
          data: {
            article_id: $(this).data('subject')
          }
        });
      });
    });
  };

  var loadedNotifications = function($notifications){
    return $.map($notifications, function(el){
      var $el = $(el);
      return {position: $el.data('position'), content_id: $el.data('subject'), content_type: $el.data('type'), notification_type: $el.data('action')};
    });
  };

  var loadNextPage = function(e){
    var $menuNotifications = $(e);
    var notificationType = ($menuNotifications.attr("class").indexOf('direct') > -1) ? 'direct_messages' : 'notifications';
    nt.getNotifications(notificationType, function(notifications){
      $menuNotifications.append(notifications);
      SA.Logger.Mone.event('notification', 'header_icon', 'load_more', {
        data: {
          content_array : loadedNotifications($(notifications))
        }
      });
    });
  };

  var setDropdownEvents = function () {
    $dropdown.on('show.bs.dropdown', function () {
      showNotificationsList();
      $dropdown.find('.badge-n').remove();
      nt.resetNewNotifications();
    }).on('hide.bs.dropdown', function () {
      if (!$dropdown.loaded){
        return false;
      }
      nt.resetFirstPage();
      $dropdown.find('.divider').prevAll().remove();
      $dropdown.find('.sa-loader').show();
    });

    // "lock" scrolling on element to prevent scroll on page
    $(document).on('mousewheel DOMMouseScroll', '.menu-notifications', function (e) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

      this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
      e.preventDefault();
    });
  };

  var setNotificationEvents = function() {
    var $wrapper = $('#hd-notify'),
      $dropMenu = $('.dropdown-menu');

    $wrapper.find('.menu-notifications').on('click', '.close', function(e) {
      e.preventDefault();
      e.stopPropagation();

      var $this = $(this),
        id = $this.data('id'),
        $singleNotification = $this.closest('.single-notification'),
        actionType = $singleNotification.data('action'),
        embargoedArticleId = actionType === 'embargoed_article' ? $singleNotification.data('subject') : null,
        data = {
          notificationId: id,
          el: this
        };

      if(removedNotifications.indexOf(id) === -1){
        removedNotifications.push(id);
        nt.removeNotification(data, function (resp, el) {
          removeAfterDelete(resp, el, $wrapper);

          if (embargoedArticleId) {
            SA.Logger.Mone.event('pro_marketing_notification', 'nav_notifications_link', 'dismissed', {
              data: {
                article_id: embargoedArticleId
              }
            });
          }
        });
      }
    }).on('click', '.single-notification', function(e) {
      if (e.ctrlKey || e.metaKey) {
        e.stopPropagation();
        var $menuNotificationWrapper = $(this).closest('.menu-notifications');
        $(this).remove();
        ntWidget.checkNoNotifications($menuNotificationWrapper);
      }
    }).on('mouseup', '.single-notification', function(e) {
      if(e.which === 2){ //mouse middle button click
        e.stopPropagation();
        e.preventDefault();
        var $el = $(this);
        var $menuNotificationWrapper = $el.closest('.menu-notifications');
        var a = $el.find('a')[0];
        if(typeof SA.Utils.Env.isFirefox === 'function' ? SA.Utils.Env.isFirefox() : SA.Utils.Env.isFirefox){
          window.open(a.href, "_blank");
        } else{
          var evt = document.createEvent("MouseEvents");
          evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null);
          a.dispatchEvent(evt);
        }
        $el.remove();
        ntWidget.checkNoNotifications($menuNotificationWrapper);
      }
    }).on('scroll', function(e) {
      if (!scrollMoneSent) {
        scrollMoneSent = true;
        SA.Logger.Mone.event('notification', 'header_icon', 'popup_scrolled', {
          data: {
            scrolled: true
          }
        });
      }
      if (SA.Utils.Scroll.isScrolledToElBottom(this)) {
        loadNextPage(this);
      }
    });
    $dropMenu.on('click', '.direct-link', function(e) {
      if (e.ctrlKey || e.metaKey || e.which === 2) {
        e.stopPropagation();
      }
    });
    $dropMenu.on('click', '.clear-all', function(e) {
      e.stopPropagation();
      nt.removeAllNotifications('', function () {
        clearAllNotifications($wrapper);
      });
    });
  };

  var removeAfterDelete = function(resp, el, $wrapper) {
    $wrapper = $(el).closest('.menu-notifications');
    if (resp.status === 'success') {
      $(el).parents('li.single-notification').remove();
      ntWidget.checkNoNotifications($wrapper);
    } else {
      removedNotifications.pop($(el).data('id'));
    }
  };

  function clearAllNotifications($wrapper) {
    var $notifications = $('.menu-notifications.user-notifications').find('li.single-notification');
    $notifications.remove();
    $wrapper.find('.notifications-c[data-id=notifications]').text(0);
  }

  var setPopupMaxHeight = function(){
    if ($dropdown.hasClass('open')) {
      var $directMessagesMenu = $('.menu-notifications.direct-messages');
      var directHeight = $directMessagesMenu.outerHeight();
      var $notificationMenu = $('.menu-notifications.user-notifications');
      var notificationHeight = $notificationMenu .outerHeight();
      var totalHeight = window.innerHeight-125;
      if (notificationHeight > totalHeight/2){
        $directMessagesMenu.css({'max-height': totalHeight/2});
      } else {
        $directMessagesMenu.css({'max-height': totalHeight-notificationHeight});
      }
      if (directHeight > totalHeight/2){
        $notificationMenu.css({'max-height': totalHeight/2});
      } else {
        $notificationMenu.css({'max-height': totalHeight-directHeight});
      }
    }
  };

  scope.init = function(){
    var conf = SA.headerConfig;
    $dropdown = $('#hd-notify');
    ntWidget = SA.Widgets.Notifications;
    if(SA.Data.User.loggedIn() && $dropdown.length && !conf.noNotificationsMenu){
      $userNotificationsLink = $dropdown.find('#nav_notifications_link');

      nt.getNewNotificationsCount(function(count){
        ntWidget.setNewNotificationsIcon(count, $userNotificationsLink);
      });
      setDropdownEvents();
    }
  };

}(SA, jQuery));



(function (SA, $) {

  "use strict";

  var scope = SA.UsingNamespace('SA.Widgets.Notifications');

  scope.setNewNotificationsIcon = function (newCount, link) {
    setNewNotificationsIcon(newCount, link);
  };

  scope.removeNumberIcon = function ($button) {
    $button.find('.badge-n').remove();
  };

  var setNewNotificationsIcon = function (newCount, link) {
    if (newCount > 0) {
      link.append($('<span class="badge-n sa-notify">' + newCount + '</span>')).addClass('active');
      var mone_type = (link.attr('class').indexOf('rta') > -1) ? 'notification_inbox' : 'notification';
      SA.Logger.Mone.event(mone_type, 'header_icon', 'shown_num', {
        data: {
          num: newCount.toString()
        }
      });
    }
  };

  scope.checkNoNotifications = function ($wrapper) {
    var notifications = $wrapper.find('li.single-notification').length;

    if (!notifications) {
      $wrapper.find('.no-notifications').show();
    }

    $wrapper.prev('.notifications').find('.notifications-c').html(notifications);
  };

  var init = function () {
    var conf = SA.headerConfig;

    if (SA.Data.User.loggedIn() && !conf.noNotificationsMenu) {
      SA.Widgets.UserNotifications.init();
    }
  };

  init();

}(window.SA, window.jQuery));
(function() { this.JST || (this.JST = {}); this.JST["jst/header/profile_dropdown"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul class="dropdown-menu sa-with-arrow">\n  <li class="dropdown-header pro-gray-bg elips">\n    ',  (hasNick && nick && nick.trim()) ? nick : 'No username<span class="complete-username-link a-tnd">Create</span>' ,'\n  </li>\n  <li><a href="/inbox">Inbox</a></li>\n  <li><a href="',  profile ,'">Profile</a></li>\n  <li><a href="/account/history">Articles Read</a></li>\n  <li><a href="/submission">',  authorSlug ? 'Submit Article' : 'Write an Article' ,'</a></li>\n  ');  if (hasBlogPosts) { ; __p.push('\n    <li><a href="/account/authorboard/instablog">Manage Blog</a></li>\n  ');  } ; __p.push('\n  ');  if (SA.Data.User.MPModeratorForAuthorId()) {
     var txt = SA.Data.User.MPModeratorForService(); ; __p.push('\n      <li><a href="/account/marketplace_platform?auth_id=',  SA.Data.User.MPModeratorForAuthorId() ,'">',  txt ,'</a></li>\n    ');  } ; __p.push('\n  <li><a href="',  isPaidUser || hasPaidSubscription ? '/account/subscriptions_settings' : '/account/user_settings' ,'">',  isPaidUser || hasPaidSubscription ? 'Subscription Settings' : 'Settings','</a></li>\n  <li><a href="',  hasPortfolios ? '/account/edit_stocks' : '/account/edit_newsletters' ,'">Email Alerts</a></li>\n  <li class="divider"></li>\n  <li><a href="/account/logout" id="nav_logout_link">Sign Out</a></li>\n</ul>\n');}return __p.join('');};
}).call(this);

(function (w, SA, $) {

  'use strict';

  function buildProfileDd(u) {
    return $(w.JST['jst/header/profile_dropdown']({
      hasNick: u.hasNick(),
      nick: u.nick(),
      profile: u.profileLink(),
      authorSlug: u.authorSlug(),
      hasBlogPosts: u.hasBlogPosts(),
      hasPortfolios: !!u.getPortfolios().length,
      isPaidUser: u.isPaidUser(),
      hasPaidSubscription: u.hasPaidSubscription()
    }));
  }

  function setEvents($dd) {
    $dd.on('click', '.complete-username-link', function () {
      SA.Widgets.EnterUsername.show({type: 'page_header'});
    }).on('click', '#nav_logout_link', function (e) {
      e.preventDefault();
      SA.Models.Authentication.logOut(function () {
        var l = w.location;
        if ((/\/account|pro\//).test(l.href)) {
          l.href = SA.App.host;
        } else {
          l.reload();
        }
      });
    });
  }

  function init() {
    var $wrapper = $('#hd-user'), u = SA.Data.User;
    if ($wrapper.length && u.loggedIn()) {
      var $dd = buildProfileDd(u);
      setEvents($dd);
      $wrapper.append($dd);
      $('#user_dropdown').attr('src', u.pictureUrl());
    }
  }

  init();

}(window, window.SA, window.jQuery));
(function (SA, $) {

  'use strict';

  var $s = $('#sa-search'),
    $input = $('#hd-auto'),
    keyword = false;

  function avoidSymbol(on) {
    $s.find('[name="avoid_symbol"]').val(!!on);
  }

  function sub() {
    $s.submit();
  }

  function initEvents($input, autoComplete) {
    var val, match, valInput, valType, valPath, symbolPagePath = '';
    $s.on('submit', function (event) {
      event.preventDefault();
      val = $input.val().trim();
      match = autoComplete.getMatch();
      if (!val && !match) {
        return false;
      }
      valInput = $('#sa-search-hid');
      valType = $('#sa-search-type-hid');
      valPath = $('#sa-search-path-hid');
      if (match && !keyword) {
        valInput.val(match);
      } else {
        valInput.val(val);
        if (keyword) valType.val('keyword');
      }

      var regex = /.*?symbol\/.*?\/([\w\/-]+)/ig,
        regex_result = regex.exec(document.location.pathname);
      if (regex_result && regex_result.length) {
        symbolPagePath = '/' + regex_result[1];
      }
      valPath.val(symbolPagePath);
      this.submit();
    }).on('keydown', scrollPage);
  }

  function focusOnSearch() {
    if ($(document).scrollTop() === 0 && $(':focus').length === 0) {
      $input.focus();
    }
  }

  function scrollPage(e) {
    var $el = $(e.target);
    var keyCode = e.keyCode || e.which;
    if (!$el.next('.boot_sa_autocomplete').is(':visible')) {
      if([38,40,33,34].indexOf(keyCode) > -1){
        $input.blur();
      }
    }
    if($el.val() === "" && [32].indexOf(keyCode) > -1){
      $input.blur();
    }
    return true;
  }

  function init() {
    var autoComplete;
    if ($input.length) {
      autoComplete = new SA.Utils.Autocomplete($input, {
        people: true,
        symbols: true,
        keyword: true,
        resultsLimit: 3,
        onShow: function () {
          $input.addClass('focus');
        },
        onHide: function(){
          $input.removeClass('focus');
        },
        keywordSelect: function (name) {
          if(name) {
            $input.val(name);
          }
          keyword = true;
          avoidSymbol(true);
          sub();
        }
      });

      initEvents($input, autoComplete);
    }

    $().ready(focusOnSearch);
  }

  SA.run(init, 'hd-search');

}(window.SA, window.jQuery));

(function (SA, $) {

  'use strict';

  function init() {
    $('a#sign-in').on('click', function (e) {
      // fix for safari not setting cookies from ajax
      if (!SA.Utils.Env.isSafari()) {
        e.preventDefault();
        SA.Widgets.AuthenticationPopup.show({buttonClicked: 'navbar_signin', biSource: 'navbar'});
      }
    });
}

  SA.run(init, 'hd-sign');

}(window.SA, window.jQuery));
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */

!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});
(function() { this.JST || (this.JST = {}); this.JST["jst/header/portfolios_list"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('');  for (var i = 0, len = portfolios.length; i < len; i++) { ; __p.push('\n  ');  var portfolio = portfolios[i] ; __p.push('\n  <li class="subnav-dropdown-item ',  extraClass ,'" data-portfolio-id="',  portfolio.portfolio_id ,'" itemprop="name" role="none">\n    <a class="s-tab-a" href="/account/portfolio/latest?pu=',  portfolio.portfolio_id ,'" itemprop="url" role="menuitem" sasource="secondarytabs">\n      ',  portfolio.portfolio_name ,'\n    </a>\n  </li>\n');  } ; __p.push('\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/header/top_nav_cta_tooltip"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="popover-header">\n    <a href="#" class="popover-close-btn">x</a>\n    ',  title ,'\n</div>\n<div class="popover-body">\n    ',  content ,'\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/navigation/nav_tab_submenu"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="subnav-dropdown ',  type ,'-drop">\n    <ul aria-label="Most Used" class="list-unstyled pull-left ',  type ,'" role="menu">\n        <li class="header" itemprop="name" role="none">Most Used</li>\n        ');  col1.forEach( function (elem) { ; __p.push('\n          <li class="subnav-dropdown-item" itemprop="name" role="none"><a class="s-tab-a" href="/',  elem.url ,'" itemprop="url" role="menuitem" sasource="',  elem.sasource ,'">',  elem.title ,'</a></li>\n        ');  }); ; __p.push('\n        <li class="subnav-dropdown-item more-sections" itemprop="name" role="none"><a class="s-tab-a" href="/sitemap" itemprop="url" role="menuitem" sasource="trending_',  type ,'_navmenu_more">See All Sections</a></li>\n    </ul>\n    <ul aria-label="Recommended" class="list-unstyled pull-left ',  type ,'" role="menu">\n        <li class="header" itemprop="name" role="none">Recommended</li>\n        ');  col2.forEach( function (elem) { ; __p.push('\n          <li class="subnav-dropdown-item" itemprop="name" role="none"><a class="s-tab-a" href="/',  elem.url ,'" itemprop="url" role="menuitem" sasource="',  elem.sasource ,'">',  elem.title ,'</a></li>\n        ');  }); ; __p.push('\n    </ul>\n</div>\n');}return __p.join('');};
}).call(this);
(function() { this.JST || (this.JST = {}); this.JST["jst/navigation/nav_tab_submenu_prepare_for_responsive"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="subnav-dropdown ',  type ,'-drop">\n    <ul class="section no-link-title">\n        ');  col1.forEach( function (elem) { ; __p.push('\n          <li class="s-tab-b"><a href="/',  elem.url ,'" itemprop="url" role="menuitem" sasource="',  elem.sasource ,'">',  elem.title ,'</a></li>\n        ');  }); ; __p.push('\n    </ul>\n    <ul class="section no-link-title">\n        ');  col2.forEach( function (elem) { ; __p.push('\n          <li class="s-tab-b"><a href="/',  elem.url ,'" itemprop="url" role="menuitem" sasource="',  elem.sasource ,'">',  elem.title ,'</a></li>\n        ');  }); ; __p.push('\n        <li class="s-tab-b"><a href="/sitemap" itemprop="url" role="menuitem" sasource="trending_analysis_navmenu_sitemap">See All Sections »</a></li>\n    </ul>\n</div>\n');}return __p.join('');};
}).call(this);
(function (w, SA, $) {

  'use strict';

  var $navBar = $('.navbar-nav'),
    cache = SA.Data.Cache,
    userId = SA.Data.User.id();

  function initEvents() {
    // Redirect to cached tag on "/premium-news" page
    $navBar.find('li .clickable').click(function (e) {
      var cacheTag = cache.get('premium_news_last_tag_' +  userId);

      if (cacheTag) {
        e.preventDefault();
        w.location.href = "/premium-news/" + cacheTag;
      }
    });
  }

  if (userId && $navBar.length) {
    initEvents();
  }

}(window, window.SA, window.jQuery));




(function (SA, $) {

  'use strict';

  var RECENT_DASHBOARDS_CACHE_SIZE = 20;
  var PATHS_EXCLUDED_FROM_CACHE = ['recommended-for-you', 'latest-articles'];

  var MAX_RECOMMENDED_LINKS = 3;
  var MAX_ALL_LINKS = 5;

  function getDashboardType() {
    return SA.pageConfig.Data.dashboardType
      || ((location.pathname.indexOf('fund-letters') > -1) ? 'analysis' : null)
      || ((location.pathname === '/market-outlook/global-investing/map') ? 'analysis' : null)
      || ((location.pathname === '/market-news/wall-street-breakfast') ? 'news' : null);
  }

  function cacheRecents() {
    var type, allRecents, recents, url;

    type = getDashboardType();
    url = location.pathname.slice(1);

    if (type && !PATHS_EXCLUDED_FROM_CACHE.includes(url)) {
      allRecents = getRecentsFromCache() || {};
      recents = allRecents[type] || [];

      if (recents.includes(url)) {
        recents.splice(recents.indexOf(url), 1);
      }

      recents.unshift(url);
      allRecents[type] = recents.slice(0, RECENT_DASHBOARDS_CACHE_SIZE);
      saveRecentsToCache(allRecents);
    }
  }

  function saveRecommendationsToCache(data) {
    var EXPIRATION_HOURS = 12;
    var cacheName = "subnavs_recommendations_" + getUserId();
    SA.Data.Cache.set(cacheName, JSON.stringify(data), EXPIRATION_HOURS * 60 * 60 * 1000);
  }

  function getRecommendationsFromCache() {
    var cacheName = "subnavs_recommendations_" + getUserId();
    return JSON.parse(SA.Data.Cache.get(cacheName, true));
  }

  function saveSubnavsToCache(data) {
    var cacheName = "subnavs_data_" + getUserId();
    SA.Data.Cache.set(cacheName, JSON.stringify(data));
  }

  function saveRecentsToCache(data) {
    var cacheName = "subnavs_recents_" + getUserId();
    SA.Data.Cache.set(cacheName, JSON.stringify(data));
  }

  function getRecentsFromCache() {
    var cacheName = "subnavs_recents_" + getUserId();
    return JSON.parse(SA.Data.Cache.get(cacheName));
  }

  function fetchUrl(l) {
    return l.url;
  }

  function getUserId() {
    return SA.Data.User.id() || 0;
  }

  function prepareRecommendationsData(type, mostUsedLinks, recommendedLinks, salesLinks, linksData) {
    var result = [];
    var recenUrls = getRecentsFromCache() || {};
    var allUrlsFromServer, finalSalesLinks;

    allUrlsFromServer = mostUsedLinks.map(fetchUrl).concat(recommendedLinks.map(fetchUrl));
    if (type === 'news') {
      allUrlsFromServer = allUrlsFromServer.concat(salesLinks.map(fetchUrl));
    }

    if (recenUrls[type]) {
      result = recenUrls[type]
        .filter(function (e) {
          return !allUrlsFromServer.includes(e)
        })
        .slice(0, MAX_RECOMMENDED_LINKS)
        .map(function (url, i) {
          return {
            url: url,
            sasource: "most_recent_" + type + "_navmenu_" + (i + 1),
            title: linksData[url] || ''
          }
        });
    }

    if ((MAX_RECOMMENDED_LINKS - result.length) > 0) {
      result = result.concat(recommendedLinks.slice(0, MAX_RECOMMENDED_LINKS - result.length));
    }

    finalSalesLinks = salesLinks.filter(function (e) {
      return !result.map(function (el) {
        return el.url;
      }).includes(e.url);
    }).slice(0, MAX_ALL_LINKS - result.length);

    result = result.concat(finalSalesLinks);
    return result;
  }

  function createSubnavs(data) {
    var newsRecommendedLinks = prepareRecommendationsData('news', data.news_sub_nav.most_used_links, data.news_sub_nav.recommended_links, data.news_sub_nav.sales_links, data.all_links);
    var analysisRecommendedLinks = prepareRecommendationsData('analysis', data.analysis_sub_nav.most_used_links, data.analysis_sub_nav.recommended_links, data.analysis_sub_nav.sales_links, data.all_links);

    renderSubnavs({
      'news': [
        data.news_sub_nav.most_used_links,
        newsRecommendedLinks
      ],
      'analysis': [
        data.analysis_sub_nav.most_used_links,
        analysisRecommendedLinks
      ]
    });
  }

  function renderSubnavs(data) {
    saveSubnavsToCache(data);
    var $analysis = $('.analysis .subnav-dropdown'), $analysisResp = $('.analysis-resp .analysis-resp-drop');

    if ($analysis.length > 0) {
      $('.analysis .subnav-dropdown').replaceWith(JST['jst/navigation/nav_tab_submenu_prepare_for_responsive']({
        type: 'analysis',
        col1: data['analysis'][0],
        col2: data['analysis'][1]
      }))
    }
    if ($analysisResp.length > 0 ) {
      $('.analysis-resp .analysis-resp-drop').replaceWith(JST['jst/navigation/nav_tab_submenu_prepare_for_responsive']({
        type: 'analysis-resp',
        col1: data['analysis'][0],
        col2: data['analysis'][1]
      }))
    }
  }

  function init() {
    var cachedRes = getRecommendationsFromCache();

    if (cachedRes) {
      createSubnavs(cachedRes);
      cacheRecents();
    } else {
      $.get('/users/dashboard_recommendations', null, function (res) {
        if (res.news_sub_nav && res.analysis_sub_nav && res.all_links) {
          saveRecommendationsToCache(res);
          createSubnavs(res);
          cacheRecents();
        }
      });
    }
  }

  init();

}(window.SA, window.jQuery));





(function (w, SA, $) {

  'use strict';

  var $win = $(w),
    $body = $('body'),
    $header = $('#sa-hd'),
    $saNav = $header.find('#sa-nav'),
    $portfolioDropdown = $('.subnav-dropdown.my_portfolio-drop'),
    $tabDropdowns = $('.tab.dropdown'),
    $topNavCta = $('#top-nav-cta'),
    $topNavProBtn = $header.find('#top-nav-pro-cta'),
    config = SA.headerConfig || {},
    user = SA.Data.User,
    saCache = SA.Data.Cache,
    pageConf = SA.pageConfig,
    pageData = pageConf ? pageConf.Data : {},
    source = pageData.pageType || pageConf.name || w.location.pathname.split('/')[1] || 'unknown',
    lastScrollTop = 0,
    isLoggedIn = user.loggedIn(),
    userPortfolios = user ? user.getPortfolios() : [];

  function setScrollingBehavior() {
    var fix = false,
      stickClass = 'stick-hd';

    function stickHd() {
      if (!fix) {
        $body.addClass(stickClass);
        fix = true;
      }
    }

    function unStickHd() {
      if (fix) {
        $body.removeClass(stickClass);
        fix = false;
      }
    }

    function getHeight() {
      var breakingNewsHeight = $('#breaking-news').outerHeight() || 0;
      return breakingNewsHeight + 1;
    }

    function handleScroll() {
      $header.css('left', -window.scrollX + 'px');

      if ($win.scrollTop() >= getHeight()) {
        stickHd();
        var scrollingDirection = detectScrollingDirection($win);
        if (scrollingDirection === 'up') {
          showNavigationLinks();
        } else if (scrollingDirection === 'down') {
          $tabDropdowns.removeClass('focus');
          hideNavigationLinks();
        }
      } else {
        unStickHd();
      }
    }

    function showNavigationLinks() {
      $header.addClass('slideup');
      $body.addClass('has-slideup');
    }

    function hideNavigationLinks() {
      $header.removeClass('slideup');
      $body.removeClass('has-slideup');
    }

    function detectScrollingDirection($win) {
      var st = window.pageYOffset || $win.scrollTop,
        direction = '';
      if (st > lastScrollTop) {
        direction = 'down';
      } else if (st < lastScrollTop) {
        direction = 'up';
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
      return direction;
    }

    if (!config.nonFixed && !config.tabless && getHeight() && !$('body').hasClass('no-stick')) {
      $win.scroll(handleScroll);
      handleScroll();
    }
  }

  function activateTab($elem, tabName) {
    $elem.find(tabName).parent().addClass('active');
  }

  function setActiveItems() {
    if (!config.tabless) {
      activateTab($saNav, config.activeTab);
    }
  }

  function getSubnavsFromCache() {
    return JSON.parse(saCache.get('subnavs_data_' + (user.id() || 0)));
  }

  function formatLinksData(obj) {
    return {url: obj.link, sasource: obj.sasource};
  }

  function setMenuHover(portfolioExists) {
    var $listItems = $saNav.find('li.dropdown');

    if (!portfolioExists) {
      $listItems = $listItems.not('.my_portfolio');
      $portfolioDropdown.remove();
      $('#header-port-js').removeClass('touchable');
    }

    $listItems.hoverIntent({
      over: function () {
        var $this = $(this), type, allData, data;
        $this.addClass('focus').siblings().addClass('no-focus');

        if ($this.hasClass('analysis') || $this.hasClass('news')) {
          type = $(this).hasClass('analysis') ? 'analysis_menu' : 'news_menu';
          allData = getSubnavsFromCache();

          if (allData) {
            data = $(this).hasClass('analysis') ? allData.analysis : allData.news;

            SA.Logger.Mone.event(type, 'header', 'hover', {
              data: {
                MostUsed: data[0].map(formatLinksData),
                Recommended: data[1].map(formatLinksData)
              }
            });
          }
        } else if ($this.hasClass('my_portfolio')) {
          SA.Logger.Mone.event('portfolio_menu', 'header', 'hover');
        }
      },
      out: function () {
        $(this).removeClass('focus').siblings().removeClass('no-focus');
      },
      interval: 0
    });

    $saNav.find('a.touchable').on('touch touchend', function (e) {
      e.preventDefault();
      $tabDropdowns.removeClass('focus');
      $(this).parent('.tab.dropdown').toggleClass('focus');
    });
  }

  function setPortfolios(itemClassName, portfolios, extraClass) {
    $portfolioDropdown.find('.' + itemClassName).replaceWith(w.JST['jst/header/portfolios_list']({
      portfolios: portfolios.slice(0, 100),
      extraClass: extraClass
    }));
  }

  // DON'T REMOVE - will be used in September by Media Sales
  function setModelPortfolios(cb) {
    $.get('/account/ajax_get_model_portfolios').done(function (res) {
      var addedModelPortfoliosIds = user.getAddedModelPortfoliosIds(),
        modelPortfolios = res.model_portfolios.filter(function (item) {
          return addedModelPortfoliosIds.indexOf(item.portfolio_id) === -1;
        });
      if (modelPortfolios.length) {
        setPortfolios('model_portfolios', modelPortfolios, 'sponsored-item');
      } else {
        $portfolioDropdown.find('.model_portfolios').closest('ul').remove();
      }
      if ($.isFunction(cb)) {
        cb();
      }
    }).fail(function (response) {
      SA.exceptions.push(['ajax_get_model_portfolios error', {}, {
        status: response.status,
        statusText: response.statusText,
        responseText: response.responseText
      }]);
    });
  }

  function setUserPortfolios() {
    setPortfolios('user_portfolios', userPortfolios);
  }

  function setLastUsedMyPortfolioTab() {
    var k = 'last_used_portfolio_tab', l = saCache.get(k);
    if (l) {
      $('#nav_my_portfolio_tab').children('a').attr('href', l);
    }
  }

  function setLastUsedPeopleTab() {
    var url = saCache.get('last_used_people_tab');
    if (url) {
      $('#nav_people_tab').find('a').attr('href', url);
    }
  }

  function initPortfolios() {
    setUserPortfolios();
    setMenuHover(true);
  }

  function hideCtaTooltip() {
    return !$.fn.popover || SA.Utils.Env.isTablet() || !$topNavCta.is(':visible') || user.isCommonPro() || saCache.get('hide_cta_tooltip_cap', true);
  }

  function hideProButton() {
    return user.isProPlus();
  }

  function setTopNavCtaTooltip() {
    if (hideCtaTooltip()) {
      return;
    }

    saCache.set('hide_cta_tooltip_cap', true, 1000 * 60 * 60 * 24); // show tooltip once a day

    // dismissable popover
    var dismissPopoverCb = function (e) {
      var isCloseBtn = $(e.target).hasClass('popover-close-btn');
      if (isCloseBtn) {
        e.preventDefault();
      }

      // did not click a popover toggle or popover
      if (isCloseBtn || ($(e.target).data('toggle') !== 'popover' && $(e.target).parents('.popover.in').length === 0)) {
        $topNavCta.popover('hide');
      }
    };
    $('body, .popover-close-btn').on('click', dismissPopoverCb);

    // keep popover open while hovering over it
    var originalLeave = $.fn.popover.Constructor.prototype.leave;
    $.fn.popover.Constructor.prototype.leave = function (obj) {
      var self = obj instanceof this.constructor ?
        obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
      var container, timeout;

      originalLeave.call(this, obj);

      if (obj.currentTarget) {
        container = $(obj.currentTarget).siblings('.popover');
        timeout = self.timeout;
        container.one('mouseenter', function () {
          // We entered the actual popover – call off the dogs
          clearTimeout(timeout);
          // Let's monitor popover content instead
          container.one('mouseleave', function () {
            $.fn.popover.Constructor.prototype.leave.call(self, self);
          });
        })
      }
    };

    var sendMoneEvent = function (action) {
      SA.Logger.Mone.event('subscribe_tooltip', 'first_level_url:' + source + '|section_asset:subscribe_tooltip', action);
    };

    // setup popover and display
    $topNavCta.popover({
      placement: 'bottom',
      trigger: 'manual',
      html: true,
      template: '<div class="popover top-nav-cta-popover" role="tooltip"><div class="arrow"></div><div class="popover-content"></div></div>',
      content: w.JST['jst/header/top_nav_cta_tooltip']({
        title: isLoggedIn ? 'Welcome back!' : 'Welcome to <span class="sa-orange">Seeking Alpha!</span>',
        content: 'From an enhanced free experience to professional stock picking - <b>we have a great plan for you</b>'
      })
    }).on('shown.bs.popover', function () {
      sendMoneEvent('shown');
    }).on('hidden.bs.popover', function () {
      $('body').off('click', dismissPopoverCb);
      sendMoneEvent('dismiss');
    });

    $topNavCta.popover('show');
  }

  function setTopNavProButton() {
    if (hideProButton()) {
      return;
    }

    var abTestOpts = {},
      abTestName = user.loggedIn() ? 'top_nav_pro_button_logged_in' : 'top_nav_pro_button_logged_out';

    abTestOpts[abTestName] = function (variation) {
      if (variation === 'test_v1') {
        $topNavProBtn.removeClass('hidden');
      }
    };

    SA.Utils.AbTests.init(abTestOpts);
  }

  function init() {
    if ($header.length) {
      if (isLoggedIn && userPortfolios.length) {
        initPortfolios();
      } else {
        setMenuHover(false);
      }
      setActiveItems();
      setScrollingBehavior();
      setLastUsedMyPortfolioTab();
      setLastUsedPeopleTab();
      setTopNavCtaTooltip();
      setTopNavProButton();
    }
  }

  SA.run(init, 'sa-header');

}(window, window.SA || {}, window.jQuery));
(function (w, SA, $) {

    'use strict';

    var scope = SA.UsingNamespace('SA.Utils.PageData'),
      pageConfig = SA.pageConfig || {},
      pageData = pageConfig ? pageConfig.Data : {},
      author = pageData.author,
      adsKvs = pageConfig.Ads && pageConfig.Ads.kvs;


    scope.qpExtraData = function () {
      return {
        marketTrend: $("#symbol_change").attr('class') || 'missing',
        symbolType: pageData.equityType,
        symbolExchange: pageData.exchange
      };
    };

    scope.instablogPostExtraData = function () {
      var instablog = pageData.instablog;

      return {
        primaryTicker: instablog.primaryTicker,
        themeTag: instablog.general_tags ? instablog.general_tags : '',
        daysSincePosted: daysSince(instablog.publishDate),
        author: author.name,
        marketplaceAuthor: pageData.researchAuthorId ? 'Yes' : 'No',
        publishDate: instablog.publishDate.replace(/\//g, ""),
        title: instablog.title,
        itemId: instablog.id,
        symbolType: instablog.symbolType,
        symbolExchange: instablog.symbolExchange,
        secondaryTicker: instablog.secondary
      };
    };

    scope.newsExtraData = function () {
      var news = pageData.mc;

      return {
        primaryTicker: news.primaryTicker ? news.primaryTicker.toUpperCase() : null,
        secondaryTicker: secondaryTickers(news.primaryTicker),
        themeTag: news.tags,
        daysSincePosted: daysSince(news.publishDate),
        publishDate: news.publishDate.replace(/\//g, ""),
        title: news.title,
        itemID: news.id,
        symbolExchange: news.symbolExchange,
        paywallStatus: news.isProPaywall,
      };
    };

    scope.articleExtraData = function () {
      var article = pageData.article;

      return {
        primaryTicker: article.primaryTicker,
        secondaryTicker: secondaryTickers(article.primaryTicker),
        themeTag: article.themes,
        lockedStatus: (article.isArchived && 'Archived') || (article.inEmbargo && 'Embargo') || 'No',
        editorsPicks: article.editorsPicks,
        paywallStatus: article.isProPaywall,
        archiveStatus: article.isArchived,
        daysSincePosted: daysSince(article.publishDate),
        author: author.name,
        marketplaceAuthor: author.exclusiveResearch ? 'Yes' : 'No',
        publishDate: article.publishDate.replace(/\//g, ""),
        title: article.title,
        itemId: article.id,
        symbolType: article.symbolType,
        symbolExchange: article.symbolExchange
      };
    };

    scope.symbolPageExtraData = function () {
      return {
        symbol: pageData.slug,
        symbolType: pageData.equityType,
        symbolExchange: pageData.exchange
      };
    };

    // private methods

    function daysSince(date) {
      return Math.floor((Date.now() - new Date(date)) / (1000 * 60 * 60 * 24));
    }

    function secondaryTickers(primaryTicker) {
      if (!adsKvs.s) {
        return '';
      }
      if (!primaryTicker) {
        return adsKvs.s;
      }
      var primary = $.isArray(primaryTicker) ? primaryTicker.map(function (el) {
          return el.toLowerCase();
        }) : [primaryTicker.toLowerCase()],
        secondary = $.isArray(adsKvs.s) ? adsKvs.s.map(function (el) {
          return el.toLowerCase();
        }) : [adsKvs.s.toLowerCase()];
      secondary = secondary.filter(function (element) {
        return $.inArray(element, primary) === -1;
      });
      return secondary;
    }

  }(window, window.SA, window.jQuery)
);

// Google Tag Manager

(function (w, SA, $) {

  'use strict';

  var scope = SA.UsingNamespace('SA.Vendor.Gtm'),
    logger = [],
    opt = {},
    commonPageData = SA.Utils.PageData,
    pageConfig = SA.pageConfig || {},
    pageData = pageConfig ? pageConfig.Data : {};

  // public methods
  scope.event = function (eventName, extra) {
    extra = extra || {};
    var data = {
      event: eventName
    };
    if (SA.Data.User.loggedIn()) {
      data.userId = SA.Data.User.id();
    }
    trigger($.extend(data, extra));
  };

  scope.pv = function () {
    scope.event('VirtualPageview', {
      virtualPageURL: w.location.pathname + w.location.search,
      virtualPageTitle: document.title
    });
    ga360pageView();
  };

  scope.showLog = function () {
    console.log(logger);
  };

  // In first view ONLY we need to wait for the price to update in order to set marketTrend property.
  // When switching tabs we don't need it anymore.
  scope.qpFirstView = function () {
    SA.Utils.Observer.unsubscribe('pages/symbol/price/update', SA.Vendor.Gtm.qpFirstView);
    ga360pageView();
  };

  // wrapper for all GA360 events
  scope.ga360Event = function (data) {
    scope.event('GTM event to GA', data);
  };

  scope.ga360ClickEvents = function (opts) {
    var data,
      $this = $(this);
    if (($this.closest('#sa-nav').length)) {
      data = navigationBarEvents(opts, $this);
    } else if ($this.closest('.marketplace_banner_top').length || $this.closest('.marketplace_banner_right').length) {
      data = {
        category: 'Subscription',
        action: 'Click button',
        label: 'Marketplace author page'
      };
    } else {
      data = homePageEvents(opts, $this);
    }
    if (data) {
      var options = {
        GA_event_category: data.category,
        GA_event_action: data.action,
        GA_event_label: data.label || getElementText($this)
      };
      if (data.outBound) {
        options.outBound = data.outBound;
      }
      scope.ga360Event(options);
    }
  };

  // private methods

  function getElementText($el) {
    var text = '';
    $el.children().each(function () {
      var elText = $(this).text();
      if (elText) {
        text = elText;
        return false;
      }
    });
    return text || $el.text();
  }

  function trigger(data) {
    try {
      w.dataLayer.push(data);
      logger.push(data);
    } catch (e) {
      console.log('Error occured in GTM trigger code', e);
      SA.exceptions.push(['Error occured in GTM trigger code', e]);
    }
  }

  function ga360pageView() {
    var userData = SA.Data.User.gtmData(),
      promise = pageMetaData(); // might include async data fetch
    promise.done(function (pageData) {
      var data = $.extend({}, pageData, userData);
      scope.event('GTM page to GA', data);
    });
  }

  function pageMetaData() {
    var pageType = 'Other',
      pageCategory,
      data = {
        pageURL: w.location.href,
        platform: 'Web'
      },
      d = $.Deferred(),
      withAsyncData = false,
      asyncParams = {};

    switch (pageData.pageType || pageConfig.name || window.location.pathname) {
      case 'profile':
        if (/^\/author/.test(window.location.pathname)) {
          pageType = 'Author';
        }
        break;
      case 'symbol_page':
        pageType = 'Symbol';
        var qpPageData = commonPageData.qpExtraData();
        $.extend(data, qpPageData);
        break;
      case '/market-news':
        pageType = 'Feed News';
        break;
      case 'market-news': // news lists
        pageType = 'Feed News';
        pageCategory = ($("h1.super-h1").text() || '').replace(/&amp;/g, '&');
        break;
      case 'dashboard':
        if (/^\/etfs-and-funds\/etf-screener/.test(window.location.pathname)) {
          pageType = 'Screener';
          pageCategory = 'ETF Screener';
        } else {
          pageType = 'Feed Articles';
          pageCategory = ($("h1.super-h1").text() || '').replace(/&amp;/g, '&');
        }
        break;
      case 'single_news':
        pageType = 'News';
        var themesElem = $(".mc-themes a"),
          val;
        if (themesElem.length) {
          pageCategory = [];
          themesElem.each(function () {
            val = $(this).text();
            if (val) {
              pageCategory.push(val);
            }
          });
        }
        asyncParams.id = pageData.mc.id;
        asyncParams.type = 'MarketCurrent';
        withAsyncData = true;
        var newsPageData = commonPageData.newsExtraData();
        opt = {
          primaryTicker: $.isArray(newsPageData.primaryTicker) ? newsPageData.primaryTicker.join(',') : newsPageData.primaryTicker,
          secondaryTicker: $.isArray(newsPageData.secondaryTicker) ? newsPageData.secondaryTicker.join(',') : newsPageData.secondaryTicker,
          themeTag: $.isArray(newsPageData.themeTag) ? newsPageData.themeTag.join(',') : newsPageData.themeTag,
          daysSincePosted: newsPageData.daysSincePosted,
          publishDate: newsPageData.publishDate,
          title: newsPageData.title,
          itemID: newsPageData.itemID,
          symbolExchange: newsPageData.symbolExchange,
          visibilityStatus: newsPageData.paywallStatus ? 'No' : 'Yes',
        };
        $.extend(data, opt);
        break;
      case 'home':
        pageType = 'Home';
        break;
      case 'article':
        pageType = 'Article';
        var themesElem = $("#a-hd .a-themes a"),
          val;
        if (themesElem.length) {
          pageCategory = [];
          $("#a-hd .a-themes a").each(function () {
            val = $(this).text();
            if (val) {
              pageCategory.push(val);
            }
          });
        }
        asyncParams.id = pageData.article.id;
        asyncParams.type = 'Article';
        withAsyncData = true;
        var articlePageData = commonPageData.articleExtraData();
        opt = {
          primaryTicker: $.isArray(articlePageData.primaryTicker) ? articlePageData.primaryTicker.join(',') : articlePageData.primaryTicker,
          secondaryTicker: $.isArray(articlePageData.secondaryTicker) ? articlePageData.secondaryTicker.join(',') : articlePageData.secondaryTicker,
          themeTag: $.isArray(articlePageData.themeTag) ? articlePageData.themeTag.join(',') : articlePageData.themeTag,
          lockedStatus: articlePageData.lockedStatus,
          visibilityStatus: articlePageData.paywallStatus ? 'No' : 'Yes',
          daysSincePosted: articlePageData.daysSincePosted,
          author: articlePageData.author,
          marketplaceAuthor: articlePageData.marketplaceAuthor,
          publishDate: articlePageData.publishDate,
          title: articlePageData.title,
          itemId: articlePageData.itemID,
          symbolType: articlePageData.symbolType,
          symbolExchange: articlePageData.symbolExchange,
        };
        $.extend(data, opt);
        break;
      case 'single_blog':
        pageType = 'InstablogPost';
        withAsyncData = true;
        asyncParams.id = pageData.instablog.id;
        asyncParams.type = 'InstablogPost';
        var instablogPageData = commonPageData.instablogPostExtraData();
        opt = {
          primaryTicker: $.isArray(instablogPageData.primaryTicker) ? instablogPageData.primaryTicker.join(',') : instablogPageData.primaryTicker,
          secondaryTicker: $.isArray(instablogPageData.secondaryTicker) ? instablogPageData.secondaryTicker.join(',') : instablogPageData.secondaryTicker,
          themeTag: $.isArray(instablogPageData.themeTag) ? instablogPageData.themeTag.join(',') : instablogPageData.themeTag,
          daysSincePosted: instablogPageData.daysSincePosted,
          author: instablogPageData.author,
          marketplaceAuthor: instablogPageData.marketplaceAuthor,
          publishDate: instablogPageData.publishDate,
          title: instablogPageData.title,
          itemId: instablogPageData.itemId,
          symbolType: instablogPageData.symbolType,
          symbolExchange: instablogPageData.symbolExchange
        };
        $.extend(data, opt);
        break;
      case 'portfolio':
      case '/account/portfolio/day_watch':
        pageType = 'Portfolio';
        break;
      case '/premium':
        pageType = 'Checkout';
        pageCategory = 'Premium';
        break;
      case '/subscriptions':
        pageType = 'Checkout';
        pageCategory = 'Premium & PRO';
        break;
      case '/proplus':
        pageType = 'Checkout';
        pageCategory = 'PRO';
        break;
      case '/checkout':
        var serviceId = pageData.serviceId;
        pageType = 'Checkout';
        if (serviceId === 'proplus') {
          pageCategory = 'PRO';
        } else if (serviceId === 'proresearch') {
          pageCategory = 'Premium';
        } else if (serviceId === 'ad') {
          pageCategory = 'Ad Free';
        } else { // Marketplace
          pageType = 'MP Checkout';
          pageCategory = serviceId;
        }
        break;
      case '/marketplace':
        pageType = 'MP Directory';
        pageCategory = 'MP';
        break;
      case 'mp_service':
      case 'research':
        if (/^\/research/.test(window.location.pathname)) {
          pageType = 'MP Article';
        } else {
          pageType = 'MP Other';
        }
        pageCategory = 'MP';
        break;
      default:
        pageType = 'Other';
    }

    data.pageType = pageType;

    if (pageCategory) {
      data.pageCategory = $.isArray(pageCategory) ? pageCategory.join(',') : pageCategory;
    }

    if (withAsyncData) {
      $.get(SA.App.host + '/gtm_data', asyncParams).done(function (response) {
        d.resolve($.extend(data, response));
      }).fail(function (response) {
        d.resolve(data);
      });
    } else {
      d.resolve(data);
    }

    return d.promise();
  }

  function triggerEvents() {
    if (!SA.App.isCrossPlatformPage && w.location.host.indexOf('cms') === -1 && !$('body').hasClass('sa-error') && pageData.pageType !== 'symbol_page') {
      ga360pageView();
    }

    var saSource = SA.Utils.SASource.get() || '';
    if (w.location.pathname === '/account/user_account_created' && saSource === 'orthodox_registration') {
      scope.event('registration', {
        category: 'Registration',
        action: 'Signup',
        label: w.location.href
      });
      scope.ga360Event({
        GA_event_category: 'Registration',
        GA_event_action: 'Registration Success',
        GA_event_label: 'Email'
      });
    } else {
      if (saSource === 'gplus_reg' || w.new_registration_gplus) {
        scope.event('registration_gplus', {
          category: 'SignInGoogle',
          action: 'Signup',
          label: w.location.href
        });
        SA.Logger.Mone.event('registration', 'signin_or_register:popup', 'register:success', {
          data: {
            user_id: SA.Data.User.id(),
            external_account: 'google',
          }
        });
      } else if (saSource === 'orthodox_login') {
        scope.ga360Event({
          GA_event_category: 'Sign in',
          GA_event_action: 'Sign in success',
          GA_event_label: 'Email'
        });
      } else if (pageConfig.aconf === 't' || saSource.indexOf('signup_confirmation') > -1) {
        scope.event('confirmation', {
          category: 'Confirmation',
          action: 'Signup',
          label: w.location.href
        });
        scope.ga360Event({
          GA_event_category: 'Registration',
          GA_event_action: 'Confirmation - success',
          GA_event_label: 'Email'
        });
      }
    }
  }

  function homePageEvents(opts, $this) {
    var text = $this.hasClass('article') ? $this.closest('div.unit').find('h3').text() : $this.closest('div.left_inside_wrapper').find('h3').text(),
      data = {
        category: 'Content suggestions',
        action: text + ' clicked'
      };

    if (pageConfig.name === 'home') {
      if ($this.hasClass('article') || $this.hasClass('article_link')) {
        data.label = $this.closest('[data-id]').data('id');
      } else if (($this.closest('#top-news').length) || ($this.closest('#articles_youve_read_container').length) || ($this.closest('#authors_you_follow').length)) {
        data.label = $this.context.innerText;
      } else if (pageConfig.name === 'home' && $this.hasClass('more-link')) {
        data.action = $this.text() + ' clicked';
      } else if ($this.attr('id') === 'top-nav-cta') {
        return {
          category: 'Subscription',
          action: 'Click button',
          label: 'Seeking Alpha subscription'
        };
      } else if ($this.closest('li.from_other_sites_item').length) {
        return {
          category: 'Outbound',
          action: 'From other sites clicked',
          outBound: opts.href
        };
      }
      return data;
    }
  }

  function navigationBarEvents(opts, $this) {
    var elementId = $this.attr('id'),
    data = {
      category: 'Navigation',
      action: 'Upper navigation bar click'
    },
    ga360Data = {
      headtabs: {
        category: 'Navigation',
        action: 'Main navigation bar click'
      },
      secondarytabs: {
        category: 'Navigation',
        action: 'Sub navigation bar click'
      }
    };
    if (['headtabs', 'secondarytabs'].indexOf(opts.saSource) > -1) {
      return ga360Data[opts.saSource];
    } else if (($this.closest('#top-menu-wrapper-row').length) || ($this.hasClass('help-and-support-item')) || ($this.closest('#hd-user').length)) {
      return data;
    } else if ($this.closest('.logo').length) {
      data.label = 'Logo';
    } else if (['become-a-contributor-btn', 'contributor-center-btn'].indexOf(elementId > -1)) {
      data.action = 'Main navigation bar click';
    } else if (elementId === 'nav_notifications_link') {
      data.label = 'Notification';
    } else if (elementId === 'live-chat') {
      data.label = 'Chat';
    }
    return data;
  }

  function sendGAClientToMone(){
    window.ga=window.ga||function(){
      (window.ga.q=window.ga.q||[]).push(arguments)
    };
    ga(function() {
      var GaTrackersIntervalCount = 0;
      var GaTrackersInterval = setInterval(function() {
        GaTrackersIntervalCount++;
        if (ga.getAll().length) {
          //Track in Mone
          var ga_clientid = ga.getAll()[0].get('clientId');
          SA.Data.Cookies.set('ga_clientid', ga_clientid);
          SA.Logger.Mone.event('ga_clientid', '', 'callback', {data: {ga_clientid: ga_clientid}});
          clearInterval(GaTrackersInterval);
        } else if (GaTrackersIntervalCount === 20) {
          clearInterval(GaTrackersInterval);
          //2 seconds passed do nothing
        }
      }, 100);
    });
  }

  function init() {
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    sendGAClientToMone();
    triggerEvents();
  }

  init();

}(window, window.SA, window.jQuery));

(function (SA, $) {

  'use strict';

  function init(){
    $(document).on('click', 'a', function(){
      var $this = $(this);
      if(SA.Utils.Validate.isExternalLink($this.attr('href') || '')){
        $this.attr('target', '_blank');
        $this.attr('rel', $this.attr('rel') ? $this.attr('rel') + " noopener" : "noopener");
      }
    });
  }

  init();

}(window.SA || {}, window.jQuery));

(function(w, SA, $){

  'use strict';

  var scope = SA.UsingNamespace('SA.Models.Authentication'),
    conf = SA.pageConfig || {},
    AUTH_TYPES = {
      google: 'google',
      apple: 'apple'
    };

  scope.staticLoginLink = SA.App.host + '/account/login';

  var showGoogleLogin = function(linkUrl, width, height) {
    var left = (screen.width - width) / 2 - 16,
        top = (screen.height - height) / 2 - 50,
        windowFeatures = 'menubar=no,toolbar=no,status=no,width=' + width + ',height=' + height + ',left=' + left + ',top=' + top;
    return w.open(linkUrl, 'authPopup', windowFeatures);
  };

  var flushUserCookies = function(){
    SA.Data.Cookies.expireByPrefix('user_').expireByPrefix('notice_').expire('author_slug').expire('last_comment').expire('last_comment_date').expire('mybbuser').expire('adminsid').expire('sapu').expire('tou').expireByPrefix('gk_user_');
    SA.Data.Cache.del('user_update_note_cookies');
    SA.Data.Cache.del('user_notifications');
  };

  var performLogout = function(callback){
    SA.Logger.Mone.event('log_out', 'user_menu', 'clicked');
    $.post(SA.App.host + '/account/ajax_logout').always(function(){
      flushUserCookies(); // Just in case. Normally server should delete all cookies.
      if ($.isFunction(callback)) {
        callback();
      }
      SA.Vendor.Gtm.ga360Event({
        GA_event_category: 'Sign in',
        GA_event_action: 'Sign out success',
        GA_event_label: 'Sign out success'
      });
    });
  };

  var performLogin = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: SA.App.host + '/authentication/login',
      data: {
        user: {
          email: opt.email,
          password: opt.password
        },
        id: opt.id,
        activity: opt.activity,
        'function': opt['function'],
        rta_slugs: opt.rtaSlugs,
        rta_add_alerts: opt.rtaAddAlerts,
        extra: opt.extra
      }
    }).done(function(response) {
      if (response.login) {
        SA.Vendor.Gtm.ga360Event({
          GA_event_category: 'Sign in',
          GA_event_action: 'Sign in success',
          GA_event_label: 'Email'
        });
        SA.Logger.Mone.event('registration', 'email', 'login_success', {
          data: {
            source: 'pop-up'
          }
        }).always(function () {
          if ($.isFunction(opt.onSuccess)) {
            opt.onSuccess(response, opt);
          }
        });
      } else if ($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var performLoginLimitedUser = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: SA.App.host + '/authentication/login_limited_user',
      data: {
        password: opt.password
      }
    }).done(function(response) {
      if($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var performSignUp = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: SA.App.host + '/authentication/registration',
      data: {
        bi_data: opt.biData,
        user: {
          email: opt.email,
          password: opt.password,
          nick: opt.nick
        },
        id: opt.id,
        activity: opt.activity,
        'function': opt['function'],
        url_source: location.href.replace(/\?.*$/, ''),
        referrer: conf.sessionReferrer,
        rta_source: opt.rtaSource ,
        rta_slugs: opt.rtaSlugs,
        author_tag_id_to_follow: opt.authorTagId,
        force_params: opt.rtaSource,
        rta_add_alerts: opt.rtaAddAlerts,
        article_id: opt.articleId,
        sender: opt.sender,
        extra: opt.extra,
        newsletter: opt.newsletter
      }
    }).done(function(response) {
      if (response.registration) {
        var source = 'nonconfirmed_signup';
        SA.Vendor.Gtm.ga360Event({
          GA_event_category: 'Registration',
          GA_event_action: 'Registration Success',
          GA_event_label: 'Email'
        });
        SA.Vendor.Gtm.event('registration', {
          category: 'Registration',
          action: 'Signup',
          label: w.location.href
        });
        SA.Data.Cache.setJson('os_events', [{registration: 'Registration Success'}]);
        SA.Logger.Mone.event('registration', source, 'accepted', {
          data: {
            source: 'pop-up'
          }
        }).always(function () {
          if ($.isFunction(opt.onSuccess)) {
            opt.onSuccess(response, opt);
          }
        });
      } else if ($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var performCheckEmail = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: '/authentication/check_email',
      data: {
        user: {email: opt.email},
        rb_user: opt.rb_user
      }
    }).done(function(response) {
      if($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function() {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure();
      }
    });
  };

  var resendConfirmation = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: '/authentication/send_confirmation_email',
      data: {email:opt.email}
    }).done(function(response) {
      if($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var performReset = function(opt) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: '/authentication/forgot_password',
      data: {
        user: {email: opt.email},
        id: opt.id,
        activity: opt.activity,
        'function': opt['function'],
        url_source: SA.App.host + SA.Utils.SASource.safeUrl()
      }
    }).done(function(response) {
      if($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var requestOneClickLogin = function(opt) {
   $.ajax({
      method: 'POST',
      dataType: 'json',
      url: '/account/one_click_login/login_link',
      data: {
        user: {email: opt.email},
        id: opt.id,
        activity: opt.activity,
        'function': opt['function'],
        url_source: SA.Utils.SASource.safeUrl()
      }
    }).done(function(response) {
      if($.isFunction(opt.onSuccess)) {
        opt.onSuccess(response, opt);
      }
    }).fail(function(response) {
      if($.isFunction(opt.onFailure)) {
        opt.onFailure(response, opt);
      }
    });
  };

  var registerRoadblockAlerts = function() {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: '/authentication/ajax_roadblock_subscribe',
      data: {}
    }).fail(function(res) {
      SA.Rollbar.error("General error while subscribing roadblock user via g-plus: " + res.responseText || res.errors);
    });
  };

  function buildOAuthHash(type) {
    var isGoogle = type === AUTH_TYPES.google,
      oAuthPrefix = isGoogle ? 'gplus' : type;

    return {
      new_sign_up_from_roadblock: oAuthPrefix.concat('_new_sign_up_from_roadblock'),
      button_registration: oAuthPrefix.concat('_button_registration'),
      new_user: oAuthPrefix.concat('_new_user'),
      button: oAuthPrefix.concat('_button'),
      source: oAuthPrefix.concat('_reg'),
      ga_event_label: isGoogle ? 'Google' : 'Apple',
      signup: oAuthPrefix.concat('_signup'),
      back_article: oAuthPrefix.concat('_back_article'),
      roadblock_type: oAuthPrefix.concat('_roadblock_type')
    }
  }

  function setNewRegistrationVar(type, value) {
    if (type === AUTH_TYPES.google) {
      window.new_registration_gplus = value;
    } else if (type === AUTH_TYPES.apple) {
      window.new_registration_apple = value;
    }

    if (value) {
      var label = type.charAt(0).toUpperCase() + type.slice(1);
      SA.Vendor.Gtm.ga360Event({
        GA_event_category: 'Registration',
        GA_event_action: 'Registration Success',
        GA_event_label: label,
        userID: SA.Data.User.id(),
      });

      SA.Vendor.Gtm.ga360Event({
        GA_event_category: 'Registration',
        GA_event_action: 'Confirmation - success',
        GA_event_label: label
      });

      SA.Logger.Mone.event('registration', '', 'user_confirmation', {
        data: {
          external_account: type,
          checkout_confirmation: false
        }
      });
    }
  }

  // Google/Apple registration/login events
  var sendEventsOAuthRegistration = function(type) {
    var oAuthHash = buildOAuthHash(type),
      cp = SA.Data.Cookies,
      newSignUpFromRb = cp.get(oAuthHash.new_sign_up_from_roadblock),
      source = '';

    if (cp.get(oAuthHash.button_registration) && SA.Data.User.loggedIn() && !SA.Data.User.getPortfolioTickers().length) {
      if (cp.get(oAuthHash.new_user) && !newSignUpFromRb) {
        var event = cp.get(oAuthHash.button_registration).split(',');
        SA.Logger.Mone.event(event[0], event[1], 'Registration conversion no alerts', {
          data: {
            user_id: SA.Data.User.id()
          }
        });
        cp.set(oAuthHash.new_user);
        cp.set(oAuthHash.button);
        setNewRegistrationVar(type, true);
      }
      if (!w.location.pathname.match(/article|premium|checkout/)) {
        if (w.location.href.match(/step1/)) {
          cp.del(oAuthHash.button_registration);
        } else {
          if (window.new_registration_gplus || window.new_registration_apple || newSignUpFromRb) {
            source = '?source=' + oAuthHash.source;
            setNewRegistrationVar(type, false);
          }
          setTimeout(function () {
            w.location.href = '/account/step1' + source;
          }, 1000);
        }
      }
    }

    if (cp.get(oAuthHash.button) && !newSignUpFromRb) {
      var eventArray = cp.get(oAuthHash.button).split(',');
      SA.Logger.Mone.event('registration', 'signin_or_register:popup', 'signin:success', {
        data: {
          user_id: SA.Data.User.id(),
          external_account: oAuthHash.ga_event_label,
        }
      });
      SA.Vendor.Gtm.ga360Event({
        GA_event_category: 'Sign in',
        GA_event_action: 'Sign in success',
        GA_event_label: oAuthHash.ga_event_label,
      });
      SA.Logger.Mone.event(eventArray[0], eventArray[1], 'login_success');
      cp.del(oAuthHash.button);
      cp.del(oAuthHash.button_registration);
    }

    if (newSignUpFromRb) {
      if (SA.Data.User.loggedIn()) {
        registerRoadblockAlerts();
      }
      SA.Logger.Mone.event('funnel_complete_popup', newSignUpFromRb , oAuthHash.signup);
      cp.del(oAuthHash.new_sign_up_from_roadblock);
      cp.del(oAuthHash.roadblock_type);
      if (location.pathname.match(/article/)) {
        setNewRegistrationVar(type, true);
      }
    }
  };

  function cookiesForOAuth(type, source, action, data, authType) {
    var val = type + ',' + source,
      path = w.location.pathname,
      cookieExpiration = 24 * 60 * 60, // expire cookie after 24 hours
      oAuthHash = buildOAuthHash(authType);

    SA.Data.Cookies.set(oAuthHash.button, val, {expires: cookieExpiration})
      .set(oAuthHash.button_registration, val, {expires: cookieExpiration})
      .set(oAuthHash.back_article, path, {expires: cookieExpiration});

    if (data && data.data.rbType) {
      SA.Data.Cookies.set(oAuthHash.roadblock_type, data.data.rbType, {expires: cookieExpiration});
    }
  }

  // public functions

  scope.googleLogin = function (type, source, action, data) {
    cookiesForOAuth(type, source, action, data, AUTH_TYPES.google);
    var moneAction = action || 'button_clicked';
    SA.Logger.Mone.event(type, source, moneAction, data);
    showGoogleLogin('/auth/gplus', 727, 630);
  };

  scope.appleLogin = function (type, source, action, data) {
    cookiesForOAuth(type, source, action, data, AUTH_TYPES.apple);
    var moneAction = action || 'button_clicked';
    SA.Logger.Mone.event(type, source, moneAction, data);
  };

  scope.logOut = function(callback) {
    performLogout(callback);
  };

  scope.logIn = function(opt) {
    opt = opt || {};
    if(opt.email && opt.password && opt.id && opt.activity && opt['function']) {
      performLogin(opt);
    }
  };

  scope.loginLimitedUser = function (opt) {
    opt = opt || {};
    if (opt.password) {
      performLoginLimitedUser(opt);
    }
  };

  scope.signIn = function(opt) {
    opt = opt || {};
    var missingNick = opt.activity !== 'roadblock' && !opt.nick;
    if(opt.email && opt.password && !missingNick && opt.id && opt.activity && opt['function']) {
      performSignUp(opt);
    }
  };

  scope.registerNoPw = function(opt){
    if(opt.email){
      performSignUp(opt);
    }
  };

  scope.checkEmail = function(opt){
    opt = opt || {};
    if(opt.email) {
      performCheckEmail(opt);
    }
  };

  scope.resendConfirmation = function(opt) {
    opt = opt || {};
    if(opt.email) {
      resendConfirmation(opt);
    }
  };

  scope.resetPassword = function(opt) {
    opt = opt || {};
    if(opt.email && opt.id && opt.activity && opt['function']) {
      performReset(opt);
    }
  };

  scope.oneClickLogin = function(opt) {
    requestOneClickLogin(opt);
  };

  scope.softRoadblockSignIn = function(opt) {
    performSignUp(opt);
  };

  scope.hardRoadblockSignIn = function(opt) {
    performSignUp(opt);
  };

  function init() {
    sendEventsOAuthRegistration(AUTH_TYPES.google);
    sendEventsOAuthRegistration(AUTH_TYPES.apple);
  }

  SA.run(init, 'authentication');

}(window, window.SA, window.jQuery));
(function() { this.JST || (this.JST = {}); this.JST["jst/widgets/breaking_news"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="breaking-news" data-mcid="',  item.id ,'">\n  <div class="container clearfix">\n    <div class="pull-left">\n      <span class="breaking">Breaking - </span>\n      <a href="',  item.uri ,'" target="_blank" class="title" sasource="top_nav_breaking_news">',  item.title ,'</a>\n    </div>\n    <div class="pull-right">\n      <img alt="Close" src=\'',  assetHost ,'/images/widgets/x.png\' class=\'x-button\' />\n    </div>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
/**
 * Created by SA-User on 2/24/16.
 */


(function ($) {

  var scope = SA.UsingNamespace('SA.Widgets.BreakingNews');

  var AJAX_BREAKING = '/market-news/breaking_news_ajax';
  var BREAKING_ELM = '#breaking-news';
  var CLOSE_AFTER = 30 * 60 * 1000;
  var CHECK_AGAIN = 15 * 60 * 1000;
  var $navSec;
  var $afterElm;
  var autoClose;
  var $body = $('body');


  scope.init = function() {
    $navSec = $('#nav-sec');
    $afterElm = $('#main-nav-wrapper-row');
    if ($afterElm.length!=1) {
      return;
    }
    getBreakingNews();
    setTimeout(getBreakingNews, CHECK_AGAIN);
  };

  scope.close = function(byUser) {
    var $elm = $(BREAKING_ELM);
    var mcid = $elm.data('mcid');
    $elm.remove();
    $navSec.show();
    $body.removeClass('breaking-news-present');
    if (byUser) {
      stopShowing(mcid);
      SA.Logger.Mone.event('breaking_news', 'top_nav', 'closed', {data:{'mc_id': mcid}});
    }
  };

  var isMobile = function(){
    return window.Prototype ? SA.Utils.Env.isMobile : SA.Utils.Env.isMobile();
  };

  function isInSubmission() {
    return !!location.pathname.match('^(/submission)((/content)|(/marketing)|(/tagging)|(/disclosures)|(/final-notes)|(/preview))?([/0-9]*)$');
  }

  var getBreakingNews = function() {
    if(isMobile() || isInSubmission()) return false;
    $.ajax({
      url: AJAX_BREAKING,
      type: 'GET',
      dataType: 'json'
    }).done(function(response) {
      if (response && response.id && !userAware(response.id) && !mcOn(response.id)) {
        if (inBreakingNews(response.id)) {
          stopShowing(response.id);
        } else {
          showBreakingNews(response);
        }
      }
    });
  };

  var inBreakingNews = function(breakingNewsId) {
    var targetNews = document.location.pathname;
    return (targetNews.indexOf(breakingNewsId) !== -1);
  };

  var mcOn = function(mcid) {
    var $elm = $(BREAKING_ELM);
    if ($elm.length === 0) {
      return false;
    }
    return $elm.data('mcid') == mcid;
  };

  var userAware = function(mcid) {
    return (SA.Data.Cache.get('user-closed-breaking-' + mcid) === '1');
  };

  var stopShowing = function(mcid) {
    SA.Data.Cache.set('user-closed-breaking-' + mcid, 1);
  };

  var initCloseEvent = function() {
    var xButton = $('.x-button');
    var breakingNews = $('#breaking-news');
    var link = breakingNews.find('.title');
    var mcid = breakingNews.data('mcid');
    xButton.on('click', function() {
      scope.close(true);
    });
    link.on('click', function() {
      scope.close(true);
    });
  };

  var showBreakingNews = function(res) {
    var html = JST['jst/widgets/breaking_news']({
      item: res,
      assetHost: SA.App.assetHost
    });
    var closeFunc = scope.close;
    var $curElm = $(BREAKING_ELM);
    if ($curElm.length) {
      $curElm.remove();
    }
    $('body > header').prepend(html);
    setBreakingNewsPresent();
    initCloseEvent();
    SA.Logger.Mone.event('breaking_news', 'top_nav', 'shown', {data:{'mc_id': res.id}});
    if(autoClose) {
      clearTimeout(autoClose);
    }
    autoClose = setTimeout(closeFunc, CLOSE_AFTER);
  };

  var setBreakingNewsPresent = function() {
    $body.addClass("breaking-news-present");
  };

  scope.init();

})(jQuery);
(function(SA, $) {

  'use strict';

  var s = SA.UsingNamespace('SA.Utils.TrackingPixel');

  s.track = function(src){
    var resSource = src + ';ord=' + (Math.random() * 10000000000000) + '?';
    $('body').append('<img src="' + resSource + '" width="1" height="1" border="0">');
  };

}(window.SA, window.jQuery));
(function (SA) {
  if (SA.Utils.Env.isSafari() && !SA.Data.Cookies.get('kppid')) {
    var text = "";
    var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < 11; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    SA.Data.Cookies.set('kppid', text, {expires: 60 * 60 * 24 * 180});
  }
}(window.SA));
(function (w, SA, $) {

  'use strict';

  var whitelist = ['/symbol/', '/article/', '/account/portfolio', '/screeners', '/author/',
  '/rating/upgrade-downgrades', '/premium-news/top-news', '/comparison'].join('|');
  function initHelpHeroEvents() {
    if (!SA.Data.User.isPro()) {
      return;
    }

    var pageData = SA.pageConfig.Data,
    hasTickersInPortfolio = !!SA.Data.User.portfolioTickers().toString().length;

    HelpHero('identify','tour_1' + w.location.host.split('.')[0] + SA.Data.User.id(), {
      newUser: SA.Data.User.isNewEssentialTour(),
      hasProductSubscription: SA.Data.User.isCommonPro(),
      hasProPlus: SA.Data.User.isProPlus(),
      hasPremium: SA.Data.User.isPro() && !SA.Data.User.isProPlus(),
      hasQuant:$('.breakdown-section').length,
      hasSaAuthors: !!pageData.symbolSentimentInfo,
      hasStockChart: pageData.article && pageData.article.primaryTicker.length,
      hasCoverageTab: !!$('#profile_tabs li.tab.coverage').length,
      hasArticlesTab: !!$('#profile_tabs li.tab.articles').length,
      hasPeersTab: !!$('#peers__comparison').length,
      hasEarningsTab: !!$('#earnings__earnings-summary').length,
      showLauncher: SA.Data.User.isShowLauncher(),
      hasPortfolio: SA.Data.User.hasPortfolio(),
      hasTickersInPortfolio: hasTickersInPortfolio,
      isDev: SA.App.env.dev,
      isTest: SA.App.env.staging,
      symbolHasQuant:true
    });
    var advanceAllow = true, advanceEmptyAllow = true;
    HelpHero('on', 'tour_advanced', function(event, info){
      var body = $('body');
      body.addClass('overflow-hidden');
      var indexNextStep = info.tour.stepIds.indexOf(info.step.id) + 1,
        nextStepId = info.tour.stepIds[indexNextStep],
        nextStep = info.tour.stepsById[nextStepId];
      if(!nextStep){return;}
      if(nextStep.mode === 'HIGHLIGHT' && !$(nextStep.selector).length){
        body.removeClass('overflow-hidden');
      }

      if(info.step.mode=== "URL_MATCH" && info.tour.name === 'Start Tour'){
        $('body.logged-in').removeClass('load');
      }

      var portfolio_tours = ['BayFjWN3AE5', 'c5RjYPmVqsI'], currentTourID = event.tourId;
      if(portfolio_tours.indexOf(currentTourID) > -1 &&
        !hasTickersInPortfolio && advanceAllow &&
        nextStep.className === "access_portfolio"){
        advanceAllow = false;
        HelpHero.advanceTour();
      }

      if(nextStep.className === 'empty_portfolio' && !SA.Data.User.hasPortfolio() && advanceEmptyAllow){
        advanceEmptyAllow = false;
        HelpHero.advanceTour();
      }

      if(info.step && ["HIGHLIGHT", "MODAL"].indexOf(info.step.mode) > -1){
        SA.Logger.Mone.event('product_tour', info.tour.name, 'foreword', {data: {step: info.step.className}});
      }
    });

    var timerTourDefault, NEW_TOUR_ID = 'Mw4ufOfPwGw', defaultTourId = 'c5RjYPmVqsI';
    HelpHero('on', 'tour_started', function(event, info){

      var initialTourIds = {'c5RjYPmVqsI': 'track_portfolio',
        'BayFjWN3AE5': 'discover_stock',
        'nLjhQ7oUXGE': 'evaluate_stock'};
      var currentTourID = event.tourId;
      var currentTourName = initialTourIds[currentTourID];
      if(currentTourName){
        $.post( '/pro/customize_premium_follow_up', { tour_name: currentTourName } );
      }

      if(currentTourID === NEW_TOUR_ID){
        timerTourDefault = setTimeout(function () {
          HelpHero.startTour(defaultTourId, { redirectIfNeeded: true })
        }, 120000);
      }

      if(info.tour.name === 'Start Tour'){
        $('body.logged-in').addClass('load');
      }

      if(info.tour.name === 'Symbol - Summary Tab'){
        $('.analysis .section-heading').click();
      }

      SA.Logger.Mone.event('product_tour', info.tour.name, 'started');
    });

    HelpHero('on', 'tour_cancelled', function(event, info){
      $('body').css({'overflow':'auto'});
      SA.Logger.Mone.event('product_tour', info.tour.name, 'cancel', { data: { 'step': info.step.className } });
    });

    HelpHero('on', 'tour_completed', function(event, info){
      $('body').css({'overflow':'auto'});
      SA.Logger.Mone.event('product_tour', info.tour.name, 'completed');
      if(event.tourId === NEW_TOUR_ID) {
        clearTimeout(timerTourDefault);
      }
    });

    HelpHero('on', 'tour_interrupted', function(event, info){
      $('body').css({'overflow':'auto'});
      SA.Logger.Mone.event('product_tour', info.tour.name, 'interrupted', { data: { 'step': info.step.className } });
    });
  }

  function l(){
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//app.helphero.co/embed/WKPyisoGj4d';
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s,x);
  }

  function init() {
    if (w.location.pathname !== '/' && !w.location.pathname.match(whitelist)){
        return;
    }

    var h = w.HelpHero;

    if (!h) {
      var i = function() {
        i.q.push(arguments)
      };
      i.q = [];
      w.HelpHero = i;
      if (w.attachEvent) {
        w.attachEvent('onload',l);
      } else {
        w.addEventListener('load',l,false);
      }
    }
    initHelpHeroEvents();
  }

  init();
}(window, window.SA, window.jQuery));
















































