(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{ECCn:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var i=e[n];"object"!=typeof i||Object.isFrozen(i)||t(i)}),e}var i=t;i.default=t;class r{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function s(e,...n){const t=Object.create(null);for(const i in e)t[i]=e[i];return n.forEach(function(e){for(const n in e)t[n]=e[n]}),t}const o=e=>!!e.kind;class l{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!o(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){o(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{c._collapse(e)}))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,n){""!==e&&(this.openNode(n),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const d="[a-zA-Z]\\w*",h="[a-zA-Z_]\\w*",f="\\b\\d+(\\.\\d+)?",p="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",m={begin:"\\\\[\\s\\S]",relevance:0},x={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[m]},E={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[m]},w={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},v=function(e,n,t={}){const i=s({className:"comment",begin:e,end:n,contains:[]},t);return i.contains.push(w),i.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),i},N=v("//","$"),y=v("/\\*","\\*/"),R=v("#","$");var _=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:h,NUMBER_RE:f,C_NUMBER_RE:p,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>g(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),s({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:m,APOS_STRING_MODE:x,QUOTE_STRING_MODE:E,PHRASAL_WORDS_MODE:w,COMMENT:v,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:y,HASH_COMMENT_MODE:R,NUMBER_MODE:{className:"number",begin:f,relevance:0},C_NUMBER_MODE:{className:"number",begin:p,relevance:0},BINARY_NUMBER_MODE:{className:"number",begin:b,relevance:0},CSS_NUMBER_MODE:{className:"number",begin:f+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},REGEXP_MODE:{begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[m,{begin:/\[/,end:/\]/,relevance:0,contains:[m]}]}]},TITLE_MODE:{className:"title",begin:d,relevance:0},UNDERSCORE_TITLE_MODE:{className:"title",begin:h,relevance:0},METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function k(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function O(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=k,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function M(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>g(e)).join("|")+")"}(...e.illegal))}function A(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function L(e,n){void 0===e.relevance&&(e.relevance=1)}const B=["of","and","for","in","not","or","if","then","parent","list","value"];function I(e,n,t="keyword"){const i={};return"string"==typeof e?r(t,e.split(" ")):Array.isArray(e)?r(t,e):Object.keys(e).forEach(function(t){Object.assign(i,I(e[t],n,t))}),i;function r(e,t){n&&(t=t.map(e=>e.toLowerCase())),t.forEach(function(n){const t=n.split("|");i[t[0]]=[e,T(t[0],t[1])]})}}function T(e,n){return n?Number(n):function(e){return B.includes(e.toLowerCase())}(e)?0:1}function S(e,{}){function n(n,t){return new RegExp(g(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=n(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let i=0,r="";for(let a=0;a<e.length;a++){i+=1;const s=i;let o=g(e[a]);for(a>0&&(r+=n),r+="(";o.length>0;){const e=t.exec(o);if(null==e){r+=o;break}r+=o.substring(0,e.index),o=o.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?r+="\\"+String(Number(e[1])+s):(r+=e[0],"("===e[0]&&i++)}r+=")"}return r}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const n=this.matcherRe.exec(e);if(!n)return null;const t=n.findIndex((e,n)=>n>0&&void 0!==e),i=this.matchIndexes[t];return n.splice(0,t),Object.assign(n,i)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new t;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(e){const n=this.getMatcher(this.regexIndex);n.lastIndex=this.lastIndex;let t=n.exec(e);if(this.resumingScanAtSamePosition())if(t&&t.index===this.lastIndex);else{const n=this.getMatcher(0);n.lastIndex=this.lastIndex+1,t=n.exec(e)}return t&&(this.regexIndex+=t.position+1,this.regexIndex===this.count&&this.considerAll()),t}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=s(e.classNameAliases||{}),function t(r,a){const o=r;if(r.compiled)return o;[A].forEach(e=>e(r,a)),e.compilerExtensions.forEach(e=>e(r,a)),r.__beforeBegin=null,[O,M,L].forEach(e=>e(r,a)),r.compiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=I(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,o.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),o.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(o.endRe=n(r.end)),o.terminatorEnd=g(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(o.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(o.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map(function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return s(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:j(e)?s(e,{starts:e.starts?s(e.starts):null}):Object.isFrozen(e)?s(e):e}("self"===e?r:e)})),r.contains.forEach(function(e){t(e,o)}),r.starts&&t(r.starts,a),o.matcher=function(e){const n=new i;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(o),o}(e)}function j(e){return!!e&&(e.endsWithParent||j(e.starts))}function P(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const D={"after:highlightBlock":({block:e,result:n,text:t})=>{const i=H(e);if(!i.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let i=0,r="";const s=[];function o(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function l(e){r+="<"+C(e)+[].map.call(e.attributes,function(e){return" "+e.nodeName+'="'+a(e.value)+'"'}).join("")+">"}function c(e){r+="</"+C(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||n.length;){let n=o();if(r+=a(t.substring(i,n[0].offset)),i=n[0].offset,n===e){s.reverse().forEach(c);do{u(n.splice(0,1)[0]),n=o()}while(n===e&&n.length&&n[0].offset===i);s.reverse().forEach(l)}else"start"===n[0].event?s.push(n[0].node):s.pop(),u(n.splice(0,1)[0])}return r+a(t.substr(i))}(i,H(r),t)}};function C(e){return e.nodeName.toLowerCase()}function H(e){const n=[];return function e(t,i){for(let r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?i+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:i,node:r}),i=e(r,i),C(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:i,node:r}));return i}(e,0),n}const U=e=>{console.error(e)},$=(e,...n)=>{console.log("WARN: "+e,...n)},z=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},K=a,G=s,V=Symbol("nomatch");var q=function(e){const n=Object.create(null),t=Object.create(null),a=[];let s=!0;const o=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function d(e){return g.noHighlightRe.test(e)}function h(e,n,t,i){const r={code:n,language:e};M("before:highlight",r);const a=r.result?r.result:f(r.language,r.code,t,i);return a.code=r.code,M("after:highlight",a),a}function f(e,t,i,o){const c=t;function u(e,n){const t=v.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function d(){null!=_.subLanguage?function(){if(""===M)return;let e=null;if("string"==typeof _.subLanguage){if(!n[_.subLanguage])return void O.addText(M);e=f(_.subLanguage,M,!0,k[_.subLanguage]),k[_.subLanguage]=e.top}else e=p(M,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(A+=e.relevance),O.addSublanguage(e.emitter,e.language)}():function(){if(!_.keywords)return void O.addText(M);let e=0;_.keywordPatternRe.lastIndex=0;let n=_.keywordPatternRe.exec(M),t="";for(;n;){t+=M.substring(e,n.index);const i=u(_,n);if(i){const[e,r]=i;O.addText(t),t="",A+=r,O.addKeyword(n[0],v.classNameAliases[e]||e)}else t+=n[0];e=_.keywordPatternRe.lastIndex,n=_.keywordPatternRe.exec(M)}t+=M.substr(e),O.addText(t)}(),M=""}function h(e){return e.className&&O.openNode(v.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}}),_}function b(e,n,t){let i=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(e.endRe,t);if(i){if(e["on:end"]){const t=new r(e);e["on:end"](n,t),t.ignore&&(i=!1)}if(i){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return b(e.parent,n,t)}function m(e){return 0===_.matcher.regexIndex?(M+=e[0],1):(I=!0,0)}function x(e){const n=e[0],t=c.substr(e.index),i=b(_,e,t);if(!i)return V;const r=_;r.skip?M+=n:(r.returnEnd||r.excludeEnd||(M+=n),d(),r.excludeEnd&&(M=n));do{_.className&&O.closeNode(),_.skip||_.subLanguage||(A+=_.relevance),_=_.parent}while(_!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),r.returnEnd?0:n.length}let E={};function w(n,t){const a=t&&t[0];if(M+=n,null==a)return d(),0;if("begin"===E.type&&"end"===t.type&&E.index===t.index&&""===a){if(M+=c.slice(t.index,t.index+1),!s){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=E.rule,n}return 1}if(E=t,"begin"===t.type)return function(e){const n=e[0],t=e.rule,i=new r(t),a=[t.__beforeBegin,t["on:begin"]];for(const r of a)if(r&&(r(e,i),i.ignore))return m(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?M+=n:(t.excludeBegin&&(M+=n),d(),t.returnBegin||t.excludeBegin||(M=n)),h(t),t.returnBegin?0:n.length}(t);if("illegal"===t.type&&!i){const e=new Error('Illegal lexeme "'+a+'" for mode "'+(_.className||"<unnamed>")+'"');throw e.mode=_,e}if("end"===t.type){const e=x(t);if(e!==V)return e}if("illegal"===t.type&&""===a)return 1;if(B>1e5&&B>3*t.index)throw new Error("potential infinite loop, way more iterations than matches");return M+=a,a.length}const v=R(e);if(!v)throw U(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const N=S(v,{plugins:a});let y="",_=o||N;const k={},O=new g.__emitter(g);!function(){const e=[];for(let n=_;n!==v;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>O.openNode(e))}();let M="",A=0,L=0,B=0,I=!1;try{for(_.matcher.considerAll();;){B++,I?I=!1:_.matcher.considerAll(),_.matcher.lastIndex=L;const e=_.matcher.exec(c);if(!e)break;const n=w(c.substring(L,e.index),e);L=e.index+n}return w(c.substr(L)),O.closeAllNodes(),O.finalize(),y=O.toHTML(),{relevance:Math.floor(A),value:y,language:e,illegal:!1,emitter:O,top:_}}catch(T){if(T.message&&T.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:T.message,context:c.slice(L-100,L+100),mode:T.mode},sofar:y,relevance:0,value:K(c),emitter:O};if(s)return{illegal:!1,relevance:0,value:K(c),emitter:O,language:e,top:_,errorRaised:T};throw T}}function p(e,t){t=t||g.languages||Object.keys(n);const i=function(e){const n={relevance:0,emitter:new g.__emitter(g),value:K(e),illegal:!1,top:c};return n.emitter.addText(e),n}(e),r=t.filter(R).filter(O).map(n=>f(n,e,!1));r.unshift(i);const a=r.sort((e,n)=>{if(e.relevance!==n.relevance)return n.relevance-e.relevance;if(e.language&&n.language){if(R(e.language).supersetOf===n.language)return 1;if(R(n.language).supersetOf===e.language)return-1}return 0}),[s,o]=a,l=s;return l.second_best=o,l}const b={"before:highlightBlock":({block:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},m=/^(<[^>]+>|\t)+/gm,x={"after:highlightBlock":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(m,e=>e.replace(/\t/g,g.tabReplace)))}};function E(e){let n=null;const i=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=g.languageDetectRe.exec(n);if(t){const n=R(t[1]);return n||($(l.replace("{}",t[1])),$("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>d(e)||R(e))}(e);if(d(i))return;M("before:highlightBlock",{block:e,language:i}),n=e;const r=n.textContent,a=i?h(i,r,!0):p(r);M("after:highlightBlock",{block:e,result:a,text:r}),e.innerHTML=a.value,function(e,n,i){const r=n?t[n]:i;e.classList.add("hljs"),r&&e.classList.add(r)}(e,i,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const w=()=>{w.called||(w.called=!0,z("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(E))};let v=!1,N=!1;function y(){N?document.querySelectorAll("pre code").forEach(E):v=!0}function R(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function k(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e]=n})}function O(e){const n=R(e);return n&&!n.disableAutodetect}function M(e,n){const t=e;a.forEach(function(e){e[t]&&e[t](n)})}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",function(){N=!0,v&&y()},!1),Object.assign(e,{highlight:h,highlightAuto:p,highlightAll:y,fixMarkup:function(e){return z("10.2.0","fixMarkup will be removed entirely in v11.0"),z("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),n=e,g.tabReplace||g.useBR?n.replace(o,e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e):n;var n},highlightBlock:E,configure:function(e){e.useBR&&(z("10.3.0","'useBR' will be removed entirely in v11.0"),z("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=G(g,e)},initHighlighting:w,initHighlightingOnLoad:function(){z("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),v=!0},registerLanguage:function(t,i){let r=null;try{r=i(e)}catch(a){if(U("Language definition for '{}' could not be registered.".replace("{}",t)),!s)throw a;U(a),r=c}r.name||(r.name=t),n[t]=r,r.rawDefinition=i.bind(null,e),r.aliases&&k(r.aliases,{languageName:t})},listLanguages:function(){return Object.keys(n)},getLanguage:R,registerAliases:k,requireLanguage:function(e){z("10.4.0","requireLanguage will be removed entirely in v11."),z("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=R(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:O,inherit:G,addPlugin:function(e){a.push(e)},vuePlugin:P(e).VuePlugin}),e.debugMode=function(){s=!1},e.safeMode=function(){s=!0},e.versionString="10.6.0";for(const r in _)"object"==typeof _[r]&&i(_[r]);return Object.assign(e,_),e.addPlugin(b),e.addPlugin(D),e.addPlugin(x),e}({});e.exports=q}}]);