(function (exports) {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=window,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$3=new WeakMap;let o$3 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$1=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$2?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$1.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var s$2;const e$1=window,r$1=e$1.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$1.reactiveElementPolyfillSupport,n$2={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$2,reflect:!1,hasChanged:a$1},d$1="finalized";let u$1 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$2).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$2;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$1.reactiveElementVersions)&&void 0!==s$2?s$2:e$1.reactiveElementVersions=[]).push("1.6.3");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  var t;const i=window,s$1=i.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$1=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$1,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$1+w):s+n$1+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$1)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$1),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$1,t+1));)v.push({type:7,index:r}),t+=n$1.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t=i.litHtmlVersions)&&void 0!==t?t:i.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n=globalThis.litElementPolyfillSupport;null==n||n({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

  var sharedStyle = i$1`
    label { display:block; }
    label, th { font:var(--label-font); background:var(--label-background); color:var(--label-inverse);padding:var(--label-padding); text-transform:var(--label-text-transform); }
    input, textarea { font:var(--input-font); width:100%; color:var(--input-inverse); border:var(--input-border); padding:var(--input-padding); box-sizing:border-box; border-radius:var(--input-radius); box-shadow:none; font-size:var(--input-font-size); font-weight:var(--input-font-weight);  -webkit-appearance: none; -moz-appearance: none; appearance: none; }
    input, textarea { -webkit-appearance: none; -moz-appearance: none; appearance: none; } /* remove ios inset shadow */
    input:focus, textarea:focus { outline:none; }
    input:invalid { border: 1px solid var(--alert-color); }
    input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
    ::placeholder { color:var(--input-inverse); opacity:0.6; }
`;

  let ResizeController$1 = class ResizeController {
      host; 

      constructor(host) {
          this.host = host;
          host.addController(this);
          this.resize = this.resize.bind(this);
      }

      hostConnected() {
          window.addEventListener('resize', this.resize);
          this.resize();
      }
      
      hostDisconnected() {
          window.removeEventListener('resize', this.resize);
      }

      resize() {
          if(window.innerWidth < 460) {
              this.host.classList.add("mobile");
              this.host.classList.remove("desktop");
          } else {
              this.host.classList.add("desktop");
              this.host.classList.remove("mobile");
          }
          if(this.host.onResized) this.host.onResized(window.innerWidth);
      }
  };

  class Bouncer {
      static debounce(context, func, wait) {
          if(func.timeoutId != undefined) window.clearTimeout(func.timeoutId);
          func.timeoutId = setTimeout(function() {
              func.apply(context);
          }, wait);
      };
  }

  class DateUtil {

      static formatShort(date) {
          var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
          return new Date(date).toLocaleDateString("en-US", options); 
      }

      static formatWkMoDay(date) {
          var options = {weekday: 'short', month: 'short', day: '2-digit' };
          return new Date(date).toLocaleDateString("en-US", options); 
      }

      static formatMoDay(date) {
          var options = {month: 'short', day: '2-digit' };
          return new Date(date).toLocaleDateString("en-US", options); 
      }

      static formatLong(date) {
          var options = { weekday: 'long', year: 'numeric', month: 'long', day: '2-digit' };
          return new Date(date).toLocaleDateString("en-US", options);
      }

      static formatWithTime(date) {
          var dateopts = { year: 'numeric', month: '2-digit', day: '2-digit' };
          let timeopts = { hour: '2-digit', minute: '2-digit' };
          let val = new Date(date);
          return val.toLocaleDateString("en-US", dateopts) + " " +  date.toLocaleTimeString([], timeopts);
      }

      static formatMedium(date) {
          var options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
          return new Date(date).toLocaleDateString("en-US", options);        
      }

      static dayDiff(date1, date2) {
          var d1 = new Date(date1);
          var d2 = new Date(date2);
          var diff = d1 - d2; 
          var days = Math.round(diff / (1000 * 60 * 60 * 24));
          return days;
      }

      static formatDayDiff(date1, date2) {
          var diff = DateUtil.dayDiff(date2, date1);
          return (diff == 1) ? diff + " night" : diff + " nights";
      }

      static firstOfWeek(date) {
          var fow = new Date(date);
          fow.setDate(fow.getDate() - fow.getDay());
          return fow;
      }

      static firstOfMonth(date) {
          var fom = new Date(date);
          fom.setDate(1);
          return fom; 
      }
  }

  class BrightNav extends s {   
      resizer = new ResizeController$1(this);

      static styles = i$1`
        :host { display:block; justify-content:space-between; width:100%; max-width:var(--content-width); margin:auto; display:flex; align-items:center; }
        :host([hidden]) { display:none; }
        #overlay { position:absolute; z-index:100; flex-direction:column; align-items:center; gap:16px; display:none; height:100%; width:100%; top:0px; left:0px; background:var(--body-inverse); fill:var(--body-background); color:var(--body-background); } 
        #clearicon { align-self:flex-start; margin:16px 16px 0px 16px; fill:inherit;  }
        #menuicon { position:absolute; left:16px; fill:var(--background-inverse); }
        #main { width:100%; display:flex; align-items:center; justify-content:center; }
        ::slotted(*) { color:inherit; fill:inherit; background:inherit; }
        #main ::slotted(img) { padding:24px; }
    `;

      static properties = {
          width: { type:Number }
      };

      render() {
          if(this.width < 460) {
              return x`
            <div id="main" part="main">
                <bright-icon id="menuicon" icon="menu" @click="${this.menuIconClick}"></bright-icon>
                <slot name="logo"></slot>
            </div>
            <div id="overlay" part="overlay">
                <bright-icon id="clearicon" icon="clear" @click="${this.closeIconClick}"></bright-icon>
                <slot @click="${this.menuItemClick}"></slot>
            </div>
            `;
          } else {
              return x`
                <slot name="logo" part="logo"></slot>
                <slot @click="${this.menuItemClick}"></slot>
            `;
          }
      }

      firstUpdated() {
          this.overlay = this.renderRoot.querySelector("#overlay");
      }

      onResized(width) {
          this.width = width;
      }

      menuItemClick() {
          this.closeIconClick();
      }

      menuIconClick() {
          this.overlay.style.display = "flex";
          this.overlay.animate([ 
              { transform:'translateY(-50%)', opacity:0 },
              { transform:'translateY(0)', opacity:1 } 
          ], { duration:300, easing:'ease-out', fill: 'both' } );
      }
      closeIconClick() {
          this.overlay.animate([ 
              { transform:'translateY(0)', opacity:1 },
              { transform:'translateY(-50%)', opacity:0 } 
          ], { duration:300, easing:'ease-out', fill: 'both' } ).onfinish = () => {
              this.overlay.style.display = "none";
          };
      }
  }
  window.customElements.define("bright-nav", BrightNav);

  class BrightIcon extends s {

      static get properties() {
          return {
              icon: { type:String }
          }
      }

      render() {
          const fullpath = new URL((document.currentScript && document.currentScript.src || new URL('bundle.js', document.baseURI).href)).pathname;
          var ix = fullpath.lastIndexOf('/');
          var path = fullpath.substring(0, ix+1);
          return x`
            <style>
                :host { display:inline-block; width:24px; height:24px; fill:inherit; }
                :host([hidden]) { display:none; }
            </style>
            <svg style="height:100%; width:100%" viewbox="0 0 24 24"><use href="${path}bright.svg#${this.icon}" style="fill-rule:evenodd;clip-rule:evenodd;"></use></svg>
        `;
      }
  }
  window.customElements.define("bright-icon", BrightIcon);


  class BrightTextArea extends s {
      // this is a form-associated custom component
      // https://web.dev/more-capable-form-controls/ 
      static formAssociated = true;

      static get properties() {
          return {
              value: { type:String, attribute:true }, 
              required: { type:Boolean }, 
              placeholder: { type:String }, 
              label: { type:String }, 
              password: { type:Boolean },
              type: { type:String }, 
              name: { type:String }
          }
      }

      get value() {
          return this._value; 
      }

      set value(value) {
          this._value = (value == "null" || value == "undefined" || value == null || value == undefined) ? "" : value;
          this.internals_.setFormValue(this._value);
          this.requestUpdate();
      }

      constructor() {
          super();
          this._value = "";
          this.internals_ = this.attachInternals();
      }

      static styles = [sharedStyle, i$1`
        :host { display:block; box-sizing:border-box; }
        :host([hidden]) { display:none; }
        wrap { width:100%; padding:0px; }
        textarea { width:100%; margin:0px 0px -4px 0px; max-width:100%; resize:vertical;  }
    `];

      render() { 
          return x`
            <div part="wrap" id="wrap">
                ${this.label ? x`<label part="label" for="${this.name}">${this.label}</label>` : x``}
                <textarea part="input" type="${this.type}" name="${this.name}" @input="${this.valueInput}" placeholder="${this.placeholder ? this.placeholder : ""}">${this._value}</textarea>
            </div>
            `; 
      }

      firstUpdated() {
          this.input = this.shadowRoot.querySelector("textarea");
          this.dispatchEvent(new CustomEvent("bright-validatable", {
              bubbles: true, 
              composed: true
          }));
      }

      valueInput() {
          this._value = this.input.value;
          this.internals_.setFormValue(this._value);
          this.dispatchEvent(new Event("change", { composed:true, bubbles:true }));
      }

      validate() {
          var valid = true; 
          if(this.required && this._value == "") valid = false; 
          this.input.setCustomValidity(valid ? "" : "required field");
          this.input.valid = valid; 
          return valid; 
      }
  }

  window.customElements.define("bright-textarea", BrightTextArea);

  class BrightInput extends s {
      // this is a form-associated custom component
      // https://web.dev/more-capable-form-controls/ 
      static formAssociated = true;

      static get properties() {
          return {
              value: { type:String, attribute:true }, 
              required: { type:Boolean }, 
              placeholder: { type:String }, 
              label: { type:String }, 
              password: { type:Boolean },
              type: { type:String }, 
              name: { type:String }
          }
      }

      get value() {
          return this._value; 
      }

      set value(value) {
          this._value = (value == "null" || value == "undefined" || value == null || value == undefined) ? "" : value;
          this.internals_.setFormValue(this._value);
          this.requestUpdate();
      }

      constructor() {
          super();
          this._value = "";
          this.internals_ = this.attachInternals();
      }

      static styles = [sharedStyle, i$1`
        :host { display:block; box-sizing:border-box; }
        :host([hidden]) { display:none; }
        wrap { width:100%; }
    `];

      render() { 
          return x`
            <div part="wrap" id="wrap">
                ${this.label ? x`<label part="label" for="${this.name}">${this.label}</label>` : x``}
                <input part="input" type="${this.type}" name="${this.name}" @input="${this.valueInput}" placeholder="${this.placeholder ? this.placeholder : ""}" .value="${this._value}">
            </div>
        `; 
      }

      firstUpdated() {
          this.input = this.shadowRoot.querySelector("input");
          this.dispatchEvent(new CustomEvent("bright-validatable", {
              bubbles: true, 
              composed: true
          }));
      }

      valueInput() {
          this._value = this.input.value;
          this.internals_.setFormValue(this._value);
          this.dispatchEvent(new Event("change", { composed:true, bubbles:true }));
      }

      validate() {
          var valid = true; 
          if(this.required && this._value == "") valid = false; 
          this.input.setCustomValidity(valid ? "" : "required field");
          this.input.valid = valid; 
          return valid; 
      }
  }

  window.customElements.define("bright-input", BrightInput);

  class BrightToast extends s {

      render() {
          return x`
            <style>
                #wrap { position:fixed; opacity:0; transition: opacity 0.5s; top:0; right:0; left:0; bottom:0; height:100%; width:100%; display:none; align-items:center; justify-content:center; z-index:10000; }
                #messageBox { background-color:var(--body-inverse); max-width:420px; border-radius:3px; color:var(--body-background); padding:32px; }
            </style>
            <div id="wrap">
                <div id="messageBox">${this.message}</div>
            </div>
        `;
      }

      static show(message) {
          // export resolve and reject to the event
          return new Promise((resolve, reject) => {
              window.dispatchEvent(new CustomEvent("bright-toast", {
                  composed:true, 
                  bubbles:true, 
                  detail: { 
                      message: message, 
                      resolve: resolve, 
                      reject: reject }
              }));
          });
      }

      constructor() {
          super();
          let self = this; 
          this.message = "Test toast";
          this.onToast = function(e) {
              // unpack resolve and reject and show dialog
              self.resolve = e.detail.resolve; 
              self.message = e.detail.message; 
              var wrap = self.shadowRoot.getElementById("wrap");
              wrap.style.display = "flex";
              wrap.style.opacity = "1.0";
              self.requestUpdate();
              setTimeout(() => {
                  wrap.style.opacity = "0.0";
                  setTimeout(() => {
                      wrap.style.display = "none";
                      self.requestUpdate();
                      self.resolve();
                  }, 500);
              }, 1500);
          };
      }

      connectedCallback() {
          super.connectedCallback();
          window.addEventListener('bright-toast', this.onToast);
      }

      disconnectedCallback() {
          super.disconnectedCallback();
          window.removeEventListener('bright-toast', this.onToast);
      }
  }
  window.customElements.define("bright-toast", BrightToast);

  class BrightField extends s {

      static get properties() {
          return {
              label: { type: String }, 
              icon: { type: String }, 
              notext: { type:String }, 
              wrap: { type:Boolean }
          };
      }

      render() {
          return x`
            <style>
                :host { display:block; }
                :host([hidden]) { display:none; }
                #content { display:block; }
                .ellipsis { min-width:0px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
                label { display:block; text-transform:var(--label-text-transform); font:var(--label-font); }
            </style>
            ${(this.label == undefined) ? x`` : x`<label for="content">${this.label}</div>`}
            <div id="content" class="${this.wrap ? "wrapped" : "ellipsis"}"><slot></slot>${this.notext}</div>
        `;
      }

      firstUpdated() {
          let self = this;
          // the slot change event fires when new child nodes are added to the slot
          this.shadowRoot.addEventListener("slotchange", e => {
              self.nodes = e.target.assignedNodes();
              self.noText = self.hasText(this.nodes) ? "" : "None";
          });
          // the mutation observer fires when text inside child nodes is updated
          const config = { characterData: true, subtree: true };
          const callback = function(mutationsList, observer) {
              self.noText = self.hasText(self.nodes) ? "" : "None";
          };
          const observer = new MutationObserver(callback);
          observer.observe(this, config);
      }

      hasText(nodes) {
          var pat = /\w/;
          for(var i = 0; i < nodes.length; i++) {
              if(pat.test(nodes[i].textContent)) return true;
              if(nodes[i].childNodes && this.hasText(nodes[i].childNodes)) return true; 
          }        return false; 
      }
  }
  window.customElements.define("bright-field", BrightField);

  class BrightTabs extends s {

      static get properties() {
          return {
              selectedIndex: { type:Number }
          }
      }

      constructor() {
          super(); 
          this.selectedIndex = 0;
      }

      render() {
          return x`
            <style>
                #wrap { display:flex; border-bottom:1px solid var(--body-inverse); font:var(--button-font);   }
                :host([hidden]) { display:none; }
                ::slotted(div) { flex:1 1 80px; color:var(--body-color); display:flex; transition:background .6s;  flex-direction:column; align-items:center; padding:var(--button-padding); text-transform:var(--button-text-transform); cursor:pointer; user-select:none; box-sizing:border-box; }
                ::slotted(div:hover) { background-color:var(--body-inverse); color:var(--body-background); }
                ::slotted(div.unselected) { border-bottom:4px solid transparent; }    
                ::slotted(div.selected) { border-bottom:4px solid var(--body-inverse); }
            </style>
            <div id="wrap">
                <slot></slot>
            </div>
        `;
      }

      firstUpdated() {
          var tabs = this.children;
          for(var i = 0; i < tabs.length; i++) {
              tabs[i].addEventListener("click", e => {
                  for (var j = 0; j < tabs.length; j++) {
                      if(e.currentTarget == tabs[j]) {
                          if(this.selectedIndex != j) {
                              this.selectedIndex = j;
                              this.dispatchEvent(new Event("change"));
                          }
                          tabs[j].className = "selected";
                      } else {
                          tabs[j].className = "unselected";
                      }
                  }
              });
              tabs[i].className =(i == this.selectedIndex) ? "selected" : "unselected";
          }
      }
  }

  window.customElements.define("bright-tabs", BrightTabs);

  class BrightCard extends s {

      static get properties() {
          return {
              backgroundSrc: { type:String, attribute:"background-src" }, 
              justifyFooter: { type:String, attribute:"justify-footer" }, 
              justifyHeader: { type:String, attribute:"justify-header" }, 
              loading: { type:Boolean }
          };
      }

      constructor() {
          super();
          this.justifyFooter = "flex-end";
          this.justifyHeader = "center";
          this.loading = false;
      }

      render() {
          return x`
            <style>
                :host { display:flex; position:relative; background:var(--body-background); box-sizing:border-box; gap:32px; padding:32px; align-items:stretch; flex-direction:column; box-shadow:var(--shadow); background-image:url(${this.backgroundSrc}); background-position:center; background-size:cover; }
                :host([hidden]) { display:none; }
                #body { overflow-y:auto; flex:1 1 auto; }
                #footer { display:none; position:relative; justify-content:${this.justifyFooter}; align-items:center; flex-wrap:wrap; gap:4px; background-position:center; background-size:cover; }
                #header { display:none; justify-content:${this.justifyHeader}; align-items:center; flex-wrap:wrap; gap:4px; background-position:center; background-size:cover; }
                ::-webkit-scrollbar { background:var(--body-background); width:6px; } 
                ::-webkit-scrollbar-thumb { color:red; background:var(--body-inverse); border-radius:3px; }
                ::slotted(*) { margin-top:0px !important; margin-bottom:0px !important; }
                bright-progress { position:absolute; bottom:0px; left:0px; width:100%;  }
                #blocker { display:${this.loading?"block":"none"}; position:absolute; top:0px; left:0px; right:0px; bottom:0px; background:var(--body-background); opacity:0.5; }
            </style>
            <div part="header" id="header">
                <slot name="header" @slotchange="${this.slotChange}"></slot>
            </div>
            <div part="body" id="body">
                <slot></slot>
            </div>
            <div part="footer" id="footer">
                <div id="blocker"></div>
                <slot name="footer" @slotchange="${this.slotChange}"></slot>
                
            </div>
            <bright-progress ?visible="${this.loading}"></bright-progress>
        `; 
      }

      slotChange(e) {
          const childNodes = e.target.assignedNodes({flatten: true});
          if(childNodes.length > 0) e.target.parentElement.style.display = "flex";
      }
  }
  window.customElements.define("bright-card", BrightCard);


  class BrightDialog extends s {

      static styles = [sharedStyle, i$1`
        :host { display:none; box-sizing:border-box; justify-content:center; align-items:center; height:100%; width:100%; position:fixed; top:0; left:0; z-index:10000; background-color:rgba(0,0,0,0.7); }
        bright-card { max-width:500px; max-height:90%; }
        @media (max-width: 460px) {
            :host { max-height:100%; max-width:100%; }
            bright-card { width:100%; height:100%; min-height:100%; min-width:100%;  max-height:100%; max-width:100%;  }
        }
    `];

      static properties = {
          loading: { type:Boolean }
      };

      constructor() {
          super(); 
          this.loading = false;
      }

      render() {
          return x`
            <bright-card part="card" ?loading="${this.loading}">
                <slot name="header" slot="header"></slot>
                <slot></slot>
                <slot name="footer" slot="footer"></slot>
            </bright-card>
        `; 
      }

      show() {
          this.style.display = "flex";
      }

      hide() {
          this.style.display = "none";
      }
  }
  window.customElements.define("bright-dialog", BrightDialog);

  class BrightSection extends s {

      static get properties() {
          return {
              background: { type: String },
              itemwidth: { type: String, attribute: "item-width" },
              itemheight: { type: String, attribute: "item-height" }
          };
      }

      render() {
          return x`
            <style>
                :host { display:block; width:100%; box-sizing:border-box; background-image:url(${this.background}); background-position:center; background-size:cover;  }
                :host([hidden]) { display:none; }
                div { margin:auto; height:100%; display:flex; flex-wrap:wrap; max-width:var(--content-width); align-items:stretch; align-content:center; justify-content:center; gap:32px; }
                ::slotted(*) { flex:1 1 auto; max-width:${this.itemwidth}; height:${this.itemheight} }

                @media (max-width: 460px) {
                    div { padding:16px !important; gap:16px !important;  }
                    ::slotted(*) { flex: 1 1 auto; max-width:100%; }
                }
            </style>
            <div part="content">
                <slot></slot>
            </div>
        `; 
      }
  }
  window.customElements.define("bright-section", BrightSection);

  class BrightLightbox extends s {
      static get properties() {
          return {
              src: { type:String, attribute:"src" }, 
              caption: { type:String, attribute:"caption"}, 
              paging: { type:Boolean, attribute:"paging" }, 
              current: { type:Object } // current img or figure child of the lightbox
          };
      }

      constructor() {
          super();
          this.paging = true;
      }

      render() {
          return x`
            <style>
                :host { display:none; width:100%; height:100%; top:0px; left:0px; z-index:100; box-sizing:border-box; position:fixed; flex-direction:column; align-items:center; justify-content:center; background-color:black; user-select:none; }
                :host([hidden]) { display:none; }
                img { max-height:90%; max-width:100%; box-sizing:border-box; user-select:none; }
                div { color:white; padding:16px; }
                bright-icon { height:32px; width:32px; position:absolute; fill:white; filter: drop-shadow(1px 1px 3px #000000); }
                #closeicon { top:16px; right:16px; z-index:150; }
                #nexticon { right:16px; top:50%; z-index:150; translate:0px -50%; display:${ this.paging && this.hasNext ? "block" : "none" }; }
                #previcon { left:16px; top:50%; z-index:150; translate:0px -50%; display:${ this.paging && this.hasPrev ? "block" : "none" }; }
            </style>
            <bright-icon id="closeicon" icon="clear" @click="${this.closeClick}"></bright-icon>
            <bright-icon id="nexticon" icon="arrow-forward" @click="${this.nextClick}"></bright-icon>
            <bright-icon id="previcon" icon="arrow-back" @click="${this.prevClick}"></bright-icon>
            <img src="${this.src}"/>
            <div>${this.caption}</div>
        `;
      }

      firstUpdated() {
          this.img = this.shadowRoot.querySelector("img");
      }

      show(ele) {
          this.load(ele);
          this.style.display = "flex";
          this.animate([ 
              { opacity:0 },
              { opacity:1 } 
          ], { duration:300, easing:'ease-out', fill: 'both' } );
      }

      load(ele) {
          this.caption = ele.getAttribute("title"); 
          this.current = ele; 
          this.src = ele.src; 
          this.hasNext = this.current.nextElementSibling != null;
          this.hasPrev = this.current.previousElementSibling != null;
      }

      closeClick() {
          this.animate([ 
              { opacity:1 },
              { opacity:0 } 
          ], { duration:300, easing:'ease-out', fill: 'both' } ).onfinish = () => {
              this.style.display = "none";
          };
      }

      nextClick() {
          this.img.animate([ { transform:'translateX(-50%)', opacity:0 }], { duration:300, easing:'ease-out', fill: 'both' } ).onfinish = () => {
              this.load(this.current.nextElementSibling);
              this.img.animate([ 
                  { transform:'translateX(50%)', opacity:0 },
                  { transform:'translateX(0)', opacity:1 } 
              ], { duration:300, easing:'ease-in', fill: 'both' } );
          };
      }

      prevClick() {
          this.img.animate([ { transform:'translateX(50%)', opacity:0 }], { duration:300, easing:'ease-out', fill: 'both' } ).onfinish = () => {
              this.load(this.current.previousElementSibling);
              this.img.animate([ 
                  { transform:'translateX(-50%)', opacity:0 },
                  { transform:'translateX(0)', opacity:1 } 
              ], { duration:300, easing:'ease-in', fill: 'both' } );
          };
      }

  }
  window.customElements.define("bright-lightbox", BrightLightbox);

  class BrightGalleryGrid extends s {
      resizer = new ResizeController$1(this);

      static get properties() {
          return { 
              template: { type:String, attribute:"template" }
          };
      }

      constructor() {
          super();
      }

      render() {
          return x`
        <style>
            :host { width:100%; display:grid; box-sizing:border-box;grid-template-rows:repeat(min-content); grid-template-columns:repeat(auto-fill, minmax(150px, 1fr)); align-items:stretch; gap:8px; }
            :host([hidden]) { display:none; }
            ::slotted(*) { width:100%; box-sizing:border-box; object-fit:contain; }
        </style>
        <slot @click="${this.itemClick}"></slot>
        <bright-lightbox></bright-lightbox>
        `; 
      }

      itemClick(e) {
          this.renderRoot.querySelector("bright-lightbox").show(e.srcElement);
      }
  }
  window.customElements.define("bright-gallery-grid", BrightGalleryGrid);

  class BrightGalleryScroller extends s {
      resizer = new ResizeController$1(this);
      
      static get properties() {
          return {
              itemwidth: { type: String, attribute:"item-width" }, 
              gap: { type:String, attribute:"gap" }, 
              _index: { type:Number }
          };
      }

      constructor() {
          super();
          this.itemwidth = "30%", 
          this.gap = "5%";
          this._index = 0; 
      }

      render() {
          return x`
        <style>
            :host { display:block; width:100%; box-sizing:border-box; position:relative;  }
            :host([hidden]) { display:none; }
            #main { max-width:var(--content-width); display:flex; justify-content:flex-start; gap:${this.gap}; overflow-x:scroll; }
            ::slotted(img) { width:${this.itemwidth}; max-width:100%; }
            ::-webkit-scrollbar { display: none; }
            #main { -ms-overflow-style: none; scrollbar-width: none; }
            #prev, #next { position:absolute; top:50%;transform: translate(0%, -50%); height:32px; width:32px; fill:white; filter: drop-shadow(3px 3px 2px #000000); }
            #prev { left:32px; display:none; }
            #next { right:32px; }
        </style>
        <bright-icon id="prev" @click="${this.prev}" icon="arrow-back"></bright-icon>
        <bright-icon id="next" @click="${this.next}" icon="arrow-forward"></bright-icon>
        <div id="main">
            <slot @click="${this.itemClick}"></slot>
        </div>
        <bright-lightbox></bright-lightbox>
        `; 
      }

      firstUpdated() {
          const slot = this.shadowRoot.querySelector('slot');
          this.imgs = slot.assignedElements({flatten: true});
          this.prevIcon = this.shadowRoot.querySelector("#prev");
          this.nextIcon = this.shadowRoot.querySelector("#next");
          this.initScroller(); 
      }

      async initScroller() {
          await this.updateComplete; 
          var gallery = this.offsetWidth;
          var img = this.imgs[0].width;
          var main = this.shadowRoot.querySelector("#main");
          if(img > gallery) {
              var towidth = (img-gallery);
              main.scrollTo(towidth, 0);
          }
      }

      next() {
          if(this._index < this.imgs.length-1) this._index++;
          this.scroll();
      }

      prev() {
          if(this._index > 0) this._index--;
          this.scroll();
      }

      scroll() {
          this.nextIcon.style.display = (this._index == this.imgs.length-1) ? "none" : "block";
          this.prevIcon.style.display = (this._index == 0) ? "none" : "block";
          this.imgs[this._index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }

      itemClick(e) {
          this.renderRoot.querySelector("bright-lightbox").show(e.srcElement);
      }
  }
  window.customElements.define("bright-gallery-scroller", BrightGalleryScroller);


  class BrightEditor extends s {
      // this is a form-associated custom component
      // https://web.dev/more-capable-form-controls/ 
      static formAssociated = true;

      static properties = {
          label: { type:String },
          value: { type: String },
          name: { type: String }
      };

      constructor() {
          super();
          this.value = '';
          this.editorRef = null;
          this.internals_ = this.attachInternals();
          this._editMode = false; 
      }

      static styles = i$1`
        :host { display:block; min-width:100%; }
        img { max-width: 100%; resize;both; height:auto; }
        #toolbar { display:flex; gap:2px; flex-wrap:wrap; justify-content:stretch; }
        #toolbar * { flex:1 1 auto; background:var(--label-background); fill:var(--label-inverse); padding:4px;  }
        #htmltext { flex:1 1 auto; width:100%; min-height:150px; display:block;  box-sizing:border-box; outline:none; border:var(--input-border);padding:var(--input-padding);  }
        #editable { flex:1 1 auto; min-height:150px; box-sizing:border-box; cursor:text; background:var(--input-background);padding:var(--input-padding); border:var(--input-border); outline:none; color:var(--input-inverse); border-radius:var(--input-radius); }
        label { margin-bottom:2px; display:block; font:var(--label-font); background:var(--label-background); color:var(--label-inverse);padding:var(--label-padding); text-transform:var(--label-text-transform); }
    `;

      render() {
          return x`
        <div id="wrap">
            ${this.label ? x`<label part="label" for="${this.name}">${this.label}</label>` : x``}
            <div id="toolbar" part="toolbar">
                <bright-icon icon="format-bold" @mousedown="${this.onBold}"></bright-icon>
                <bright-icon icon="format-italic" @mousedown="${this.onItalic}"></bright-icon>
                <bright-icon icon="format-underlined" @mousedown="${this.onUnderline}"></bright-icon>
                <bright-icon icon="insert-link" @mousedown="${this.onLink}"></bright-icon>
                <bright-icon icon="title" @mousedown="${this.onHeader}"></bright-icon>
                <bright-icon icon="insert-photo" @mousedown="${this.onImage}"></bright-icon>
                <bright-icon icon="format-align-left" @mousedown="${this.onLeft}"></bright-icon>
                <bright-icon icon="format-align-center" @mousedown="${this.onCenter}"></bright-icon>
                <bright-icon icon="format-align-right" @mousedown="${this.onRight}"></bright-icon>
                <bright-icon icon="mode-edit" @mousedown="${this.onMode}"></bright-icon>
            </div>
            <div id="editable" class="editable" part="editable" contenteditable="true" @input="${this.onInput}"></div>
            <textarea id="htmltext" name="${this.name}" @input="${this.onTextInput}" style="display:none">${this.value}</textarea>
        </div>
        `;
      }

      firstUpdated() {
          this.editorRef = this.renderRoot.querySelector("#editable");
          this.editorRef.innerHTML = this.value;
          this.internals_.setFormValue(this.value);
      }

      onMode() {
          this._editMode = !this._editMode; 
          this.editorRef.style.display = this._editMode ? "none" : "block";
          this.renderRoot.querySelector("#htmltext").style.display = this._editMode ? "block" : "none";
      }

      onInput() {
          if (this.editorRef) {
          this.value = this.editorRef.innerHTML;
          this.internals_.setFormValue(this.value);
          }
      }

      onTextInput() {
          this.value = this.renderRoot.querySelector("#htmltext").value;
          this.internals_.setFormValue(this.value);
          this.editorRef.innerHTML = this.value; 
      }

      onBold() {
          document.execCommand('bold', false, null);
      }
      onItalic() {
          document.execCommand('italic', false, null);
      }
      onUnderline() {
          document.execCommand('underline', false, null);
      }
      onLeft() {
          document.execCommand('justifyLeft', false, null);
      }
      onCenter() {
          document.execCommand('justifyCenter', false, null);
      }
      onRight() {
          document.execCommand('justifyRight', false, null);
      }

      onLink() {
          var input = prompt("Url to Link");
          document.execCommand("CreateLink", false, input);
      }

      onHeader() {
          var selection = this.renderRoot.getSelection();
          var range = selection.getRangeAt(0);
          var h1 = document.createElement("h1");
          range.surroundContents(h1);
          this.value = this.editorRef.innerHTML;
          this.internals_.setFormValue(this.value);
      }

      onImage() {
          var input = prompt("Url to Image");
          document.execCommand("InsertImage", false, input);
      }
  }

  customElements.define('bright-editor', BrightEditor);
    

  class BrightLoader extends s {

      static get properties() {
          return {
              visible: { type: Boolean }
          };
      }

      constructor() {
          super();
          this.visible = true;
      }

      render() {
          return x`
        <style>
            :host { height:100%; width:100%; visibility:${this.visible ? "visible" : "hidden"} }
            .wrap { height:100%; width:100%; display:flex; align-items:center; justify-content:center;  }
            svg { fill:var(--tertiary); }
        </style>
        <div class="wrap" style="visibility:${this.visible ? 'visible' : 'hidden'}">
            <svg id="loader" width="48" height="48" viewBox="24 24 50 50">
                <path d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"to="360 50 50" repeatCount="indefinite"/>
                </path>
            </svg>
        </div>
    `;
      }
  }
  window.customElements.define("bright-loader", BrightLoader);

  class BrightProgress extends s {

      static get properties() {
          return {
              visible: { type: Boolean, reflect:true }
          };
      }

      constructor() {
          super();
          this.visible = false;
      }

      render() {
          return x`
            <style>
                :host { display:block; visibility:${this.visible ? 'visible' : 'hidden' } }
                :host([hidden]) { display:none; }
                .slider { position:relative; width:100%; height:5px; overflow-x: hidden; }
                .line { position:absolute; opacity: 0.4; background:var(--body-inverse); width:150%; height:5px; }
                .subline { position:absolute; background:var(--body-inverse); height:5px;  }
                .inc { animation: increase 2s infinite; }
                .dec { animation: decrease 2s 0.5s infinite; }
                @keyframes increase {
                    from { left: -5%; width: 5%; }
                    to { left: 130%; width: 100%;}
                }
                @keyframes decrease {
                    from { left: -80%; width: 80%; }
                    to { left: 110%; width: 10%;}
                }
            </style>
            <div>
                <div class="slider">
                    <div class="line"></div>
                    <div class="subline inc"></div>
                    <div class="subline dec"></div>
                </div>
            </div>
        `;
      }
  }

  window.customElements.define("bright-progress", BrightProgress);

  class BrightSelect extends s {

      static get properties() {
          return {
              value: { type:String }, 
              required: { type:Boolean }, 
              placeholder: { type:String }, 
              text: { type:String },
              label: { type:String }
          }
      }

      constructor() {
          super(); 
          this.placeholder = "";
          this.value = "";
      }

      static styles = [sharedStyle, i$1`
        :host { display:block; cursor:pointer; box-sizing:border-box; }
        :host([hidden]) { display:none; }
        #wrap { position:relative; box-sizing:border-box; width:100%; }
        input { cursor:pointer; }
        #dropdown { z-index:10; outline:none; color:var(--input-inverse); background-color:var(--input-background); display:none; position:absolute; top:34px; left:0px; right:0px; border:var(--input-border); user-select:none; }
        #dropdown ::slotted(*) { padding:16px; }
        #dropdown ::slotted(*:hover) { background-color:var(--input-inverse); color:var(--input-background); }
        #icon { position:absolute; height:24px; width:20px; right:4px; top:6px; fill:gray; pointer-events:none; }
    `];

      render() {
          return x`
        ${ this.label ? x`<label class="label">${this.label}</label>` : x`` }
        <div id="wrap">
            <input type="text" id="input" tabindex="-1" @mousedown="${this.inputMouseDown}" placeholder="${this.placeholder}"/>
            <!-- tabindex necessary for div to gain focus -->
            <div id="dropdown" @blur="${this.slotBlur}" tabindex="-1"> 
                <slot @mousedown="${this.slotMouseDown}"></slot>
            </div>
            <svg viewbox="0 0 24 24" id="icon">
                <g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
            </svg>
        </div>
        `;
      }

      firstUpdated() {
          this.dropdown = this.shadowRoot.getElementById("dropdown");
          this.input = this.shadowRoot.getElementById("input");
          this.input.value = this.value; 
          this.dispatchEvent(new CustomEvent("bright-validatable", { bubbles: true, composed: true }));
      }

      inputMouseDown(e) {
          e.preventDefault();
          this.dropdown.style.display = (this.dropdown.style.display == "block") ? "none" : "block";
          this.dropdown.focus();
      }

      slotBlur(e) {
          this.dropdown.style.display = "none";
      }

      slotMouseDown(e) {
          this.dropdown.style.display = "none";
          this.value = e.target.getAttribute("value");
          if(this.value == null) this._value = e.target.innerText;
          this.input.value = e.target.innerText; 
          this.text = e.target.innerText;
      }

      validate() {
          var valid = true; 
          if(this.required && (this._value == "" || this._value == undefined)) valid = false; 
          this.input.setCustomValidity(valid ? "" : "required field");
          this.input.valid = valid; 
          return valid; 
      }
  }
  window.customElements.define("bright-select", BrightSelect);

  class BrightDatePick extends s {

      static properties = {
          focusDay: { type:Date }, 
          label: { type:String },
          mode: {  type:Number, state:true }
      };

      static styles = [ sharedStyle, i$1`
        :host { }
        .buttons { cursor:pointer; margin:2px 0px; background:var(--button-background); fill:var(--button-inverse); padding:8px; flex: 1 1 200px; text-align:center; }
        .up2 { display:flex; gap:2px; }
        .grid { display:grid; height:300px; gap:2px; align-items:stretch; justify-items:stretch; }
        .grid div { display:flex; align-items:center; justify-content:center; }
        .grid .th { color:var(--label-color); background:var(--label-background); user-select:none; }
        .grid .td { cursor:pointer; }
        .grid .td:hover { background:var(--button-background);  }
    `];

      constructor() {
          super();
          this.focusDay = new Date; 
      }

      render() {
          return x`
            ${this.label ? x`<label part="label" for="${this.name}">${this.label}</label>` : x``}
            <div class="up2">
                <div class="buttons" @click="${() => {this.mode = 1;}}">${this.focusDay.toLocaleString('default', { month: 'long' })}</div>
                <div class="buttons" @click="${() => {this.mode = 2;}}">${this.focusDay.getFullYear()}</div>
            </div>
            ${this.getTemplate()}
            <div class="up2">
                <div class="buttons" @click="${this.backClick}"><bright-icon icon="arrow-back"></bright-icon></div>
                <div class="buttons" @click="${this.fwrdClick}"><bright-icon icon="arrow-forward"></bright-icon></div>
            </div>

        `;
      }

      getTemplate() {
          switch(this.mode) {
              case 2: 
                  return this.yearGrid(this.focusDay);
              case 1: 
                  return this.monthGrid();
              default: 
                  return this.dayGrid(this.focusDay);
          }
      }

      yearGrid(value) {
          var year = value.getFullYear() - 12;
          var cells = []; 
          for(var y = 0; y < 5; y++) {
              for(var x$1 = 0; x$1 < 5; x$1++) {
                  cells.push(x`<div class="td">${year}</div>`);
                  year++;
              }
          }
          return x`
            <div class="grid" @click="${this.yearClick}" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr; grid-template-rows:1fr 1fr 1fr 1fr 1fr;">
                ${cells}
            </div>
        `;
      }

      monthGrid() {
          return x`
            <div class="grid" @click="${this.monthClick}" style="grid-template-columns:1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr;">
            <div value="0" class="td">Jan</div><div value="1" class="td">Feb</div><div value="2" class="td">Mar</div><div value="3" class="td">Apr</div>
            <div value="4" class="td">May</div><div value="5" class="td">Jun</div><div value="6" class="td">Jul</div><div value="7" class="td">Aug</div>
            <div value="8" class="td">Sep</div><div value="9" class="td">Oct</div><div value="10" class="td">Nov</div><div value="11 class="td"">Dec</div>
            </div>
        `;
      }

      dayGrid(value) {
          var start = DateUtil.firstOfWeek(DateUtil.firstOfMonth(value)); 
          let date = start; 

          let daycells =[];
          for (var x$1 = 0; x$1 < 6; x$1++) {     
              for(var y = 0; y < 7; y++) {
                  daycells.push(x`<div class="td" value="${date.toISOString()}">${date.getDate()}</div>`);
                  date.setDate(date.getDate() + 1);
              }
          }
          return x`
            <div @click="${this.dayClick}" style="grid-template-columns:1fr 1fr 1fr 1fr 1fr 1fr 1fr; grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;" class="grid">
                <div class="th">Sun</div><div class="th">Mon</div><div class="th">Tue</div><div class="th">Wed</div><div class="th">Thu</div><div class="th">Fri</div><div class="th">Sat</div>
                ${daycells}
            </div>
        `;
      }

      backClick() {
          switch(this.mode) {
              case 2: 
                  this.focusDay.setFullYear(this.focusDay.getFullYear() - 25);
                  break; 
              case 1:
                  this.focusDay.setFullYear(this.focusDay.getFullYear() - 1);
                  break; 
              default:
                  this.focusDay.setMonth(this.focusDay.getMonth() - 1);
                  break; 
          }
          this.requestUpdate();
      }

      fwrdClick() {
          switch(this.mode) {
              case 2: 
                  this.focusDay.setFullYear(this.focusDay.getFullYear() + 25);
                  break; 
              case 1:
                  this.focusDay.setFullYear(this.focusDay.getFullYear() + 1);
                  break; 
              default:
                  this.focusDay.setMonth(this.focusDay.getMonth() + 1);
                  break; 
          }
          this.requestUpdate();
      }

      yearClick(e) {
          let yr = Number(e.target.innerText);
          this.focusDay.setFullYear(yr);
          this.mode = 0;
      }

      monthClick(e) {
          let mo = Number(e.target.getAttribute("value"));
          this.focusDay.setMonth(mo);
          this.mode = 0; 
      }

      dayClick(e) {
          let date = new Date(e.target.getAttribute("value"));
          this.dispatchEvent(new CustomEvent("datepicked", { bubbles:true, composed:true, detail:date }));
      }
  }
  window.customElements.define("bright-datepick", BrightDatePick);

  class BrightDateInput extends s {

      static properties = {
          label: { type:String }
      } 

      static styles = i$1`
        :host { display:block; }
        bright-dialog::part(card) { width:400px; }
    `;

      render() {
          return x`
            <bright-input id="input" @click="${this.inputClick}" label="${this.label}"></bright-input>
            <bright-dialog id="dialog">
                <h2 slot="header">Select A Date</h2>
                <bright-datepick @datepicked="${this.datePicked}"></bright-datepick>
            </bright-dialog>
        `;
      }

      datePicked(e) {
          var date = DateUtil.formatShort(e.detail);
          this.shadowRoot.querySelector("#input").value = date;
          this.shadowRoot.querySelector("#dialog").hide();
      }

      inputClick(e) {
          e.preventDefault();
          this.shadowRoot.querySelector("#dialog").show();
      }
  }
  window.customElements.define("bright-dateinput", BrightDateInput);

  class BrightVideo extends s {
      static properties = {
          src: { type:String }, 
          poster: { type:String }
      }

      static styles = i$1`
        video { max-width:100%; }
    `;

      render() {
          return x`
            <video @click="${this.click}" src="${this.src}" controls controlslist="nodownload" preload="none" poster="${this.poster}"></video>
        `;
      }

      click() {
          this.shadowRoot.querySelector("video").play();
      }
  }
  window.customElements.define("bright-video", BrightVideo);

  class BrightIconLine extends s {

      static properties = {
          icon: { type:String }, 
          href: { type:String }
      };

      static styles = i$1`
        :host { display:flex; height:56px; align-items:center; padding:0px 16px; gap:16px; background:var(--body-background); color:var(--body-inverse); cursor:pointer; user-select:none; }
        :host(:hover) { background:var(--button-background); color:var(--button-color); }
    `;

      constructor() {
          super();
          this.addEventListener('click', () => { if(this.href) window.location.href = this.href; });
      }

      render() {
          return x`
            <bright-icon icon="${this.icon}"></bright-icon>
            <slot></slot>
        `;
      }
  }
  window.customElements.define("bright-iconline", BrightIconLine);

  class AppBar extends s {

      render() {
          return x`
            <style>
                :host { display:flex; box-sizing:border-box; background:var(--body-inverse); color:var(--body-background); fill:var(--body-background); height:56px; align-items:center; padding:0px 16px; gap:16px; ; }
                :host([hidden]) { display:none; }
            </style>
                <bright-icon icon="menu" @click="${this.menuClick}"></bright-icon>
                <slot></slot>
            </div>
        `;
      }

      menuClick() {
          this.dispatchEvent(new CustomEvent("appbar-toggle", { bubbles:true, composed:true }));
      }
  }
  window.customElements.define("app-bar", AppBar);

  class AppLayout extends s {

      static properties = {
          collapsed: { type:Boolean }
      };

      static styles = i$1`
        #appbar { position:fixed; width:300px; left:0px; top:0px; height:56px; }
        #appnav { position:fixed; width:300px; left:0px; top:56px; bottom:0px; overflow-y:hidden; background:var(--body-background); transition:bottom 0.5s; }
        #body { position:fixed; left:300px; top:0px; right:0px; bottom:0px; }
        @media only screen and (max-width: 600px) 
        {
            #appbar { width:100%; }
            #appnav { width:100%; }
            #appnav.expanded { bottom:0px; }
            #appnav.collapsed { bottom:100%; }
            #body { width:100%; left:0px; top:56px;  }
        }
    `;

      constructor() {
          super(); 
          this.addEventListener('appbar-toggle', () => { this.collapsed = !this.collapsed; });
          window.addEventListener('hashchange', () => { this.collapsed = true; });
          this.collapsed = true; 
      }

      render() {
          return x`
            <div id="appbar"><slot name="app-bar"></slot></div>
            <div id="body"><slot></slot></div>
            <div id="appnav" class="${this.collapsed?'collapsed':'expanded'}"><slot name="app-nav"></slot></div>
        `;
      }

  }
  window.customElements.define("app-layout", AppLayout);

  class AppRouter extends s {

      static properties = {
          children: { type:Array }
      }

      constructor() {
          super();
          this.onHashChange = this.onHashChange.bind(this);
          window.addEventListener('hashchange', this.onHashChange);
      }

      render() {
          return x`
            <slot></slot>
        `;
      }

      onHashChange() {
          this.children.forEach(n =>{
              if(window.location.hash.startsWith(n.getAttribute("route"))) {
                  n.style.display = "block";
                  // call child.onShow if present
                  if(n.onShow) n.onShow(window.location.hash);
              } else {
                  if(n.style.display == "block") {
                      n.style.display = "none";
                      // call child.onHide if present
                      if(n.onHide) n.onHide(window.location.hash);
                  }
              }
          });
      }

      firstUpdated() {
          this.children = this.shadowRoot.querySelector("slot").assignedElements({ flatten: true });
          this.children.forEach(n => { n.style.display = "none"; });
          this.children[0].style.display = "block";
          this.onHashChange();
      }
  }
  window.customElements.define("app-router", AppRouter);






























  // BELOW HERE IS NOT VALIDATED TO WORK UNDER MONARCH CSS/JS
  //*************************************************************************************************** */


  class BrightForm extends s {

      static get properties() {
          return { 
              errors: { type:String }
          };
      }

      render() { 
          return x`
            <style>
                :host { display:block; }
                :host:hidden { display:none; }
            </style>        
            <slot></slot>
        `; 
      }

      connectedCallback() {
          super.connectedCallback();
          this.validatables = [];
          this.addEventListener("bright-validatable", e => {
              this.validatables.push(e.composedPath()[0]);
          });
      }

      validate() {
          var valid = true;
          this.error = null;
          this.validatables.forEach(e => {
              if(!e.validate()) {
                  valid = false;
                  this.error = e.hasAttribute("error") && this.error == null ? e.getAttribute("error") : this.error;
              }
          });
          return valid; 
      }

      getValues(obj) {
          this.validatables.forEach(e => {
              obj[e.id] = e.value == "" ? null : e.value;
          });
          return obj;
      }
  }
  window.customElements.define("bright-form", BrightForm);

  class ViewPager extends s {
      render() {
          return x`<slot></slot>`;
      }

      firstUpdated() {
          for(let i = 0; i < this.children.length; i++) {
              this.children[i].hidden = true;
          }
      }

      showPage(value) {
          if(isNaN(value)) {
              for(let i = 0; i < this.children.length; i++) {
                  this.children[i].hidden = (this.children[i].id != value);
              }
          } else {
              for(let i = 0; i < this.children.length; i++) {
                  this.children[i].hidden = (i != value);
              }
          }
      }
  }
  window.customElements.define("view-pager", ViewPager);

  // ******************************************
  // SingleSelector wraps single-selectable items
  // ******************************************

  class SingleSelector extends s {
      static get properties() {
          return {
              value: { type: String }
          }
      }

      constructor() {
          super();
      }

      firstUpdated() {
          let nodes = this.children;
          for(let i = 0; i<nodes.length; i++) {
              nodes[i].addEventListener("click", e => {
                  this.childClick(e);
              });
          }
      }

      updated() {
          this.drawSelection();
      }

      childClick(e) {
          this.value = e.target.getAttribute("value");
          this.drawSelection();
      }

      drawSelection() {
          let nodes = this.children;
          for(let i = 0; i<nodes.length; i++) {
              nodes[i].className = nodes[i].getAttribute("value") == this.value ? "selected" : "notselected";
          }
      }

      render() {
          return x`
            <style>
                :host { display:block; }
                :host([hidden]) { display:none; }
                ::slotted(.selected) { background-color:red; }
            </style>
            <div><slot></slot></div>
        `;
      }
  }
  window.customElements.define("single-selector", SingleSelector);

  // ******************************************
  // MultiSelector wraps multi-selectable items
  // ******************************************

  class MultiSelector extends s {
      static get properties() {
          return {
              _selected: { type: Array }
          }
      }

      get selected() {
          return this._selected;
      }

      set selected(value) {
          this._selected = value;
          this._registered.forEach(e => { e.selected = this._selected.includes(e.value);});
          this.dispatchEvent(new CustomEvent("change", { composed:true, bubbles:true, detail:this._selected }));
      }

      constructor() {
          super();
          this._registered = [];
          this._selected = [];
      }

      firstUpdated() {
          this.addEventListener("multi-selectable", this.register);
      }

      register(e) {
          this._registered.push(e.target);
          e.target.addEventListener("change", e => {
              e.stopPropagation();
              this._selected = this._registered.filter(r => r.selected == true).map(r => r.value);
              this.dispatchEvent(new CustomEvent("change", { composed:true, bubbles:true, detail:this._selected }));
          });
          if(!this._selected) return;
          e.target.selected = this._selected.includes(e.target.value);
      }

      clearAll() {
          let values = [];
          this.selected = values; 
          this.dispatchEvent(new CustomEvent("change", { composed:true, bubbles:true, detail:this._selected }));
      }

      selectAll() {
          let values = [];
          this._registered.forEach(e => { values.push(e.value); });
          this.selected = values;
          this.dispatchEvent(new CustomEvent("change", { composed:true, bubbles:true, detail:this._selected }));
      }

      selectItem(value) {
          this._selected.push(value);
          this.requestUpdate();
          this.dispatchEvent(new CustomEvent("change", { composed:true, bubbles:true, detail:this._selected }));
      }

      render() {
          return x`
            <style>
                :host { display:block; }
                :host([hidden]) { display:none; }
            </style>
            <div><slot></slot></div>
        `;
      }
  }
  window.customElements.define("multi-selector", MultiSelector);

  class SelectLine extends s {

      static get properties() {
          return {
              value: { type:String },
              selected: { type:Boolean, reflect:true }
          };
      }

      constructor() {
          super();
          this.selected = false; 
          this.value = null; 
      }

      render() {
          return x`
            <style>
                :host { display:block; cursor:pointer;  }
                :host([selected]) { background-color:var(--line-border); }
                div {  display:flex; align-items:center; }
            </style>
            <div ?selected="${this.selected}"><slot></slot></div>
        `;
      }

      firstUpdated() {
          this.dispatchEvent(new CustomEvent("multi-selectable", { bubbles: true, composed: true }));
          this.addEventListener("click", this.click);
      }

      click() {
          this.selected = !this.selected;
          this.dispatchEvent(new CustomEvent("change", { bubbles:true, composed:true }));
      }
  }

  window.customElements.define("select-line", SelectLine);

  class CheckLine extends s {

      static get properties() {
          return {
              item: { type: Object }, 
              selected: { type: Boolean }
          };
      }

      set selected(value) {
          this.item.selected;
          this.item.selected = value;
          this.requestUpdate();
      }

      get selected() {
          return this.item ? this.item.selected : false;
      }

      get item() {
          return this._item; 
      }

      set item(value) {
          if(value.selected == undefined) value.selected=false;
          this._item = value;
          this.requestUpdate();
      }

      render() {
          return x`
            <style>
                :host { display: flex; height: 44px; align-items: center; cursor:pointer; }
                :host([hidden]) { display:none; }
                svg { height:1.6em; width: 1.6em; color:grey; padding-top:4px; }
                .content { flex: 1 1 auto; padding-left:8px; }
            </style>
            ${(this.item && this.item.selected) ? 
            x`<div><svg xmlns="http://www.w3.org/2000/svg"><path fill="#303030" d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div>`
            :
            x`<div><svg xmlns="http://www.w3.org/2000/svg"><path fill="#303030" d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></svg></div>`
            }
            <div class="content"><slot></slot></div>
        `;
      }
      
      isChecked(item) {
          return item.selected;
      }

      firstUpdated() {
          this.addEventListener('click', this.onClick);
          this.dispatchEvent(new CustomEvent("multi-selectable", { bubbles: true, composed: true }));
      }

      onClick() {
          this.item.selected = !this.item.selected;
          this.requestUpdate();
      }
  }

  window.customElements.define("check-line", CheckLine);



  class BrightMenu extends s {

      render() {
          return x`
            <style>
                :host { position: relative; display:inline-block; fill:var(--body-background); }
                :host([hidden]) { display:none; }
                svg { height: 24px; width:24px; border:none; outline:none; }
                #wrap { overflow:hidden; outline:none; transition:max-height 0.3s; background-color:var(--primary); width:200px; max-height:0px; position:absolute; z-index:1000; color:var(--body-background); right:-16px; top:41px; border-radius:3px; box-shadow: 0px 3px 3px rgba(0,0,0,0.4); }
                ::slotted(div) { vertical-align:middle; padding:16px; user-select:none; cursor:pointer; }
                ::slotted(div:hover) { background-color:var(--body-background); color:var(--primary); fill:var(--primary); }
            </style>
            <svg @click="${this.open}" viewbox="2 2 20 20">
                <g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
            </svg>
            <!-- tabindex required to make focus work -->
            <div id="wrap" tabindex="0" @blur="${this.close}">
                <slot></slot>
            </div>
        `;
      }
      
      close() {
          let self = this;
          setTimeout(() => {
              self.shadowRoot.getElementById("wrap").style.maxHeight = "0px";
          }, 500);
      }

      open() {
          let e = this.shadowRoot.getElementById("wrap");
          e.style.maxHeight = "500px";
          e.focus();
      }
  }

  window.customElements.define("bright-menu", BrightMenu);

  class MenuItem extends s {

      static get properties() {
          return {
              icon: { type: String }
          };
      }

      constructor() {
          super(); 
          this.icon = '';
      }

      render() {
          return x`
            <style>
                :host { display:block; cursor:pointer; }
                :host([hidden]) { display:none; }
                .row { display:flex; align-items:center; padding:16px; color:var(--body-background); vertical-align:middle; }
                .row:hover { color:var(--primary); background-color:var(--body-background); }
                bright-icon { padding-right:8px; fill:var(--body-background); }
                .row:hover bright-icon { fill:var(--primary); }
            </style>
            <div class="row"><bright-icon ?hidden="${this.icon == ''}" fill="red" icon="${this.icon}"></bright-icon><div class="text"><slot></slot></div></div>
        `;
      }
  }

  window.customElements.define("menu-item", MenuItem);







  class BrightPager extends s {
      render() {
          return x`
            <style>
                :host { display:block; width:100%; height:100%; overflow:hidden; position:relative; box-sizing: border-box; }
                #wrap { display:flex; position:absolute; box-sizing: border-box; width:100%; height:100%; left:0%; transition: left 0.5s; }
                ::slotted(div) { flex:0 0 100%; min-width:0%; }
            </style>
            <div id="wrap">
                <slot></slot>
            </div>
        `;
      }

      firstUpdated() {
          
      }

      showPage(value) {
          var pct = "-" + value + "00%";
          this.shadowRoot.getElementById("wrap").style.left = pct;
      }
  }

  window.customElements.define("bright-pager", BrightPager);

  class BrightFile extends s {

      static get properties() {
          return {
              _value: { type:String }, 
              files: { type:Array },
              required: { type:Boolean }, 
              placeholder: { type:String }, 
              multiple: { type:Boolean }, 
              accept: { type:String }, 
              name: { type:String }
          }
      }

      constructor(){
          super(); 
          this.accept = "*/*";
          this.multiple = false; 
          this._value = "";
          this.attachShadow({ mode: 'open' });
      }

      render() {
          return x`
           <style>
                :host { display:block; box-sizing:border-box; }
                :host([hidden]) { display:none; }
                ::placeholder { color:var(--body-inverse); opacity:0.5; }
                input { height:36px; width:100%; color:var(--body-inverse); border: 1px solid var(--line-border); padding:8px; box-sizing:border-box; border-radius:2px; box-shadow:none; font-size:var(--body1-size); font-weight:var(--body1-weight); font-family: Roboto, Arial, Helvetica, sans-serif; -webkit-appearance: none; -moz-appearance: none; appearance: none; }
                input:focus { border: 1px solid grey; outline:none; }
                input:invalid { border: 1px solid var(--alert); }
                input[type=file] { display:none; }
                input[type=text] { -webkit-appearance: none; -moz-appearance: none; appearance: none; } /* remove ios inset shadow */
            </style>
            <div>${this._value}</div>
            <input type="text" id="textInput" @click="${this.textInputClick}" placeholder="${this.placeholder ? this.placeholder : ""}" value="${this._value}">
            <input type="file" id="fileInput" name="files" @change="${this.fileInputChange}" accept="${this.accept}" ?multiple="${this.multiple}"/>
        `;
      }

      firstUpdated() {
          this.dispatchEvent(new CustomEvent("bright-validatable", {
              bubbles: true, 
              composed: true
          }));
      }

      textInputClick(e) {
          this.shadowRoot.getElementById("fileInput").click();
          this.blur();
      }

      fileInputChange() {
          let e = this.shadowRoot.getElementById("fileInput");
          if(e.files.length == 0) {
              this._value = "";
              this.files = [];
          } else {
              console.log("files", e.files);
              this._value = Array.from(e.files).map(f => f.name).join();
              this.files = e.files;
          }
      }

      validate() {
          var valid = true; 
          if(this.required && this._value == "") valid = false; 
          this.input.setCustomValidity(valid ? "" : "required field");
          this.input.valid = valid; 
          return valid; 
      }
  }
  window.customElements.define("bright-file", BrightFile);

  class BrightRadio extends s {

      static get properties() {
          return {
              selected: { type:Boolean }
          }
      }

      constructor() {
          super(); 
          this.selected = false; 
      }

      render() {
          return x`
            <style>
                bright-icon { vertical-align:middle; }
            </style>
            ${ this.selected ? 
                x`<bright-icon icon="radio-button-checked" @click="${this.radioClick}"></bright-icon>` :
                x`<bright-icon icon="radio-button-unchecked" @click="${this.radioClick}"></bright-icon>`
            }
            <slot></slot>
        `;
      }

      firstUpdated() {
          this.dispatchEvent(new CustomEvent("bright-radio-register", { detail:this, composed:true, bubbles:true }));
      }

      radioClick() {
          this.dispatchEvent(new CustomEvent("bright-radio-selected", { detail:this, composed:true, bubbles:true }));
      }
  }
  window.customElements.define("bright-radio", BrightRadio);


  class BrightRadioGroup extends s {

      static get properties() {
          return {
              selected: { type:Object }, 
              radios: { type:Array }
          }
      }

      constructor() {
          super(); 
          this.radios = [];
          addEventListener("bright-radio-register", e => {
              this.radios.push(e.detail);
          });
          addEventListener("bright-radio-selected", e => {
              let radio = e.detail; 
              this.radios.forEach(r => {
                  let selected = (radio == r);
                  let changed = r.selected != selected; 
                  r.selected = (radio == r);
                  if(changed) r.dispatchEvent(new Event("change"));
              });
          });
      }

      render() {
          return x`<slot></slot>`;
      }
  }
  window.customElements.define("bright-radio-group", BrightRadioGroup);

  class BrightDate extends s {

      static get properties() {
          return {
              value: { type:String }, 
              text: { type:String }
          }
      }

      render() {
          return x`
            <style>
                #hide { display:none; }
            </style>
            <span id="hide"><slot></slot></span>
            <span>${this.text}</span>
        `; 
      }

      firstUpdated() {
          let sdate = this.childNodes[0].textContent;
          console.log("string", sdate);
          let ndate = new Date(sdate);
          console.log("date obj", ndate);
          let formatted = DateUtil.formatWithTime(new Date(sdate));
          console.log("local", formatted);
          this.text = formatted;
      }
  }
  window.customElements.define("bright-date", BrightDate);

  class BrightSuggest extends s {

      static get properties() {
          return {
              value: { type:String }, 
              required: { type:Boolean }, 
              placeholder: { type:String }, 
              label: { type:String }, 
              password: { type:Boolean },
              type: { type:String }, 
              name: { type:String }, 
              suggestFunc: { type:Object }, 
              suggestions: { type:Array }, 
              loading: { type: Boolean }
          }
      }

      constructor() {
          super();
          this.loading = false; 
      }

      render() {
          return x`
            <style>
                input { height:36px; width:100%; color:var(--body-inverse); border: 1px solid var(--line-border); padding:8px; box-sizing:border-box; border-radius:2px; box-shadow:none; font-size:var(--body1-size); font-weight:var(--body1-weight); font-family: Roboto, Arial, Helvetica, sans-serif; -webkit-appearance: none; -moz-appearance: none; appearance: none; }
                input[type=text] { -webkit-appearance: none; -moz-appearance: none; appearance: none; } /* remove ios inset shadow */
                input:focus { border: 1px solid grey; outline:none; }
                input:invalid { border: 1px solid var(--alert); }
                ::placeholder { color:var(--body-inverse); opacity:0.5; }
                .item { padding:16px; cursor:pointer; }
                .item:hover { background-color:var(--skrim-hover) }
                #wrap { position:relative; }
                #loader { position:absolute; right:8px; top:4px; }
                #notfound { padding: 16px 0px; }
            </style>
            <div id="wrap">
                ${!this.loading ? x`` : x`
                    <svg id="loader" ?hidden="${this.loading}" fill="var(--line-border)" width="24" height="24" viewBox="24 24 50 50">
                        <path  d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50"to="360 50 50" repeatCount="indefinite"/>
                        </path>
                    </svg>                
                `}
                <input type="text" id="query" @keyup="${this.keyUp}" name="${this.name}" placeholder="${this.placeholder}"/>
                ${ this.suggestions == undefined ? x`` : x`
                    <div id="dropdown">
                        ${ this.suggestions.map(r => x`
                            <div class="item" .dataitem="${r.value}" @click="${this.itemClick}">${r.key}</div>
                        `)}
                    </div>            
                `}
                <div id="notfound" ?hidden="${!(this.suggestions && this.suggestions.length == 0)}">No Results Found</div>
            </div>
        `; 
      }

      firstUpdated() {
          this.dispatchEvent(new CustomEvent("bright-validatable", {
              bubbles: true, 
              composed: true
          }));
      }

      keyUp() {
          Bouncer.debounce(this, this.change, 1500);
      }

      async change() {
          this.loading = true;
          this.shadowRoot.getElementById("query").valid = true;
          this.value = undefined; 
          let query = this.shadowRoot.getElementById("query").value; 
          let results = await this.suggestFunc(query);
          this.suggestions = results; 
          console.log("results", results);
          this.loading = false; 
      }

      itemClick(e) {
          let key = e.target.innerText; 
          this.shadowRoot.getElementById("query").value = key; 
          this.value = e.target.dataitem; 
          console.log("value", this.value);
          this.suggestions = undefined; 
      }

      validate() {
          var valid = true; 
          if(this.required && this.value == undefined) valid = false; 
          let input = this.shadowRoot.getElementById("query");
          input.setCustomValidity(valid ? "" : "required field");
          input.valid = valid; 
          return valid; 
      }
  }

  window.customElements.define("bright-suggest", BrightSuggest);

  class ResizeController {
      host; 

      constructor(host) {
          this.host = host;
          host.addController(this);
          this.resize = this.resize.bind(this);
      }

      hostConnected() {
          window.addEventListener('resize', this.resize);
          this.resize();
      }
      
      hostDisconnected() {
          window.removeEventListener('resize', this.resize);
      }

      resize() {
          if(window.innerWidth < 460) {
              this.host.classList.add("mobile");
              this.host.classList.remove("desktop");
          } else {
              this.host.classList.add("desktop");
              this.host.classList.remove("mobile");
          }
          if(this.host.onResized) this.host.onResized();
      }
  }

  class SocialBar extends s {
      resizer = new ResizeController(this);

      render() {
      return x`
        <style>
            :host { display:flex; cursor:pointer; z-index:10; }
            :host([hidden]) { display:none; }
        </style>
        <slot></slot>
        `;
      }
  }
  window.customElements.define("social-bar", SocialBar);

  class IconLink extends s { 

      static properties = {
          icon: { type:String }, 
          href: { type:String }, 
          target: { type:String }
      };

      constructor() {
          super();
          this.addEventListener("click", this.onClick);
      }

      render() {
          return x`
            <style>
                :host { display:flex; box-sizing:border-box; border-radius:50%; cursor:pointer; padding:4px; margin:4px; cursor:pointer; background:grey; align-items:center; justify-content:center; }
                :host([hidden]) { display:none; }
                bright-icon { fill:inherit; }  }
            </style>
            <bright-icon icon="${this.icon}"></bright-icon>
        `;
      }

      onClick(e) {
          if(this.target == undefined)
              window.location = this.href; 
          else
              window.open(this.href, this.target);
      }
  }
  window.customElements.define("icon-link", IconLink);

  class LinkButton extends s {

      static properties = {
          href: { type:String }, 
          target: { type:String }
      };

      constructor() {
          super();
          this.addEventListener("click", this.onClick);
      }

      render() {
          return x`
                <style>
                    :host { display:inline-block; cursor:pointer; }
                    :host([hidden]) { display:none; }
                    div { user-select:none; transition:color 1s, background-color 1s;text-align:center; color:var(--button-inverse); width:100%; padding:var(--button-padding); font:var(--button-font); border:var(--button-border); background:var(--button-background); box-sizing: border-box; }
                    div:focus { outline:none; }
                    div:hover { background-color: var(--button-inverse); color: var(--button-background); }
                </style>
                <div><slot></slot></div>
        `;
      }

      onClick(e) {
          if(this.target == undefined)
              window.location = this.href; 
          else
              window.open(this.href, this.target);
      }
  }
  window.customElements.define("link-button", LinkButton);


  class SplashPanel extends s {

      static get properties() {
          return {
              background: { type: String }
          };
      }

    render() {
      return x`
        <style>
            :host { display:block; height:100%; }
            :host([hidden]) { display:none; }
            #wrap { width:100%; height:100%; }
            #core { max-width:var(--content-width); height:100%; background-image:url(${this.background}); background-position:center; background-size:cover; display:flex; margin:auto; align-items:center; justify-content:center; }
        </style>
        <div id="wrap">
            <div id="core">
                <div style="text-align:center;">
                    <slot></slot>
                </div>
            </div>
        </div>
    `; 
    }

  }
  window.customElements.define("splash-panel", SplashPanel);

  class EmailSubscribe extends s {

      static properties = {
          campaignKey: { type:String }
      }

      static styles = i$1`
        :host { display:flex; justify-content:center; box-sizing:border-box;  }
        #inputarea { display:flex; width:100%; max-width:600px; flex-wrap:wrap; gap:4px; box-sizing:border-box;  }
        input { flex: 1 1 300px; padding:var(--input-padding); font:var(--input-font); color:var(--input-inverse); border:var(--input-border); border-radius:var(--input-radius); box-sizing:border-box; background:var(--input-background); }
        button { flex: 1 1 200px; user-select:none; transition:color 1s, background-color 1s; background:var(--button-background); color:var(--button-inverse); padding:var(--button-padding); font:var(--button-font); border:var(--button-border); }
        input:focus { outline:none; }
        button:hover { background:var(--button-inverse); color:var(--button-background); }
        #aftertext { display:none; padding:8px; font:var(--body-font); }
    `;

      render() {
          return x`
            <div id="inputarea">
                <input type="email" placeholder="Email Address" id="email"/>
                <button @click="${this.onClick}" class="primary">Subscribe</button>
            </div>
            <div id="aftertext">Thank You For Subscribing!</div>
        `;
      }

      onClick() {
          var email = this.renderRoot.querySelector("#email").value; 
          var referrer = document.referrer;
          this.renderRoot.querySelector("#inputarea").style.opacity = "0.2";
          AppUtil.addSubscriber(this.campaignKey, email, referrer).then(sub => {
              this.renderRoot.querySelector("#inputarea").style.display = "none";
              this.renderRoot.querySelector("#aftertext").style.display = "block";
          });
      }
  }
  window.customElements.define("email-subscribe", EmailSubscribe);

  class AppUtil {

      // handle errors in the response stream so they can be caught
      // otherwise 401,500 errors, etc don't catch
      // this works with the C# ErrorResponse result object
      // example:  .then(this.handleErrors)
      static handleErrors(res) {
          if (!res.ok) {
              return res.json().then(e => { throw Error(e.message); });
          } else { 
              return res; 
          }
      }

      static async addSubscriber(campaignKey, email, referrer) {
          const apibase = 'https://lusciousstudios.azurewebsites.net/api';
          return fetch(`${apibase}/subscribe?campaignKey=${campaignKey}&email=${email}&referrer=${referrer}`)
          .then(this.handleErrors)
          .then(res => res.json()); 
      }
  }

  exports.AppUtil = AppUtil;
  exports.ResizeController = ResizeController;

  return exports;

})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2Nzcy10YWcuanMiLCIuLi9ub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCIuLi9ub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanMiLCIuLi9icmlnaHRqcy9icmlnaHQuanMiLCJtb25hcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xuY29uc3QgdD13aW5kb3csZT10LlNoYWRvd1Jvb3QmJih2b2lkIDA9PT10LlNoYWR5Q1NTfHx0LlNoYWR5Q1NTLm5hdGl2ZVNoYWRvdykmJlwiYWRvcHRlZFN0eWxlU2hlZXRzXCJpbiBEb2N1bWVudC5wcm90b3R5cGUmJlwicmVwbGFjZVwiaW4gQ1NTU3R5bGVTaGVldC5wcm90b3R5cGUscz1TeW1ib2woKSxuPW5ldyBXZWFrTWFwO2NsYXNzIG97Y29uc3RydWN0b3IodCxlLG4pe2lmKHRoaXMuXyRjc3NSZXN1bHQkPSEwLG4hPT1zKXRocm93IEVycm9yKFwiQ1NTUmVzdWx0IGlzIG5vdCBjb25zdHJ1Y3RhYmxlLiBVc2UgYHVuc2FmZUNTU2Agb3IgYGNzc2AgaW5zdGVhZC5cIik7dGhpcy5jc3NUZXh0PXQsdGhpcy50PWV9Z2V0IHN0eWxlU2hlZXQoKXtsZXQgdD10aGlzLm87Y29uc3Qgcz10aGlzLnQ7aWYoZSYmdm9pZCAwPT09dCl7Y29uc3QgZT12b2lkIDAhPT1zJiYxPT09cy5sZW5ndGg7ZSYmKHQ9bi5nZXQocykpLHZvaWQgMD09PXQmJigodGhpcy5vPXQ9bmV3IENTU1N0eWxlU2hlZXQpLnJlcGxhY2VTeW5jKHRoaXMuY3NzVGV4dCksZSYmbi5zZXQocyx0KSl9cmV0dXJuIHR9dG9TdHJpbmcoKXtyZXR1cm4gdGhpcy5jc3NUZXh0fX1jb25zdCByPXQ9Pm5ldyBvKFwic3RyaW5nXCI9PXR5cGVvZiB0P3Q6dCtcIlwiLHZvaWQgMCxzKSxpPSh0LC4uLmUpPT57Y29uc3Qgbj0xPT09dC5sZW5ndGg/dFswXTplLnJlZHVjZSgoKGUscyxuKT0+ZSsodD0+e2lmKCEwPT09dC5fJGNzc1Jlc3VsdCQpcmV0dXJuIHQuY3NzVGV4dDtpZihcIm51bWJlclwiPT10eXBlb2YgdClyZXR1cm4gdDt0aHJvdyBFcnJvcihcIlZhbHVlIHBhc3NlZCB0byAnY3NzJyBmdW5jdGlvbiBtdXN0IGJlIGEgJ2NzcycgZnVuY3Rpb24gcmVzdWx0OiBcIit0K1wiLiBVc2UgJ3Vuc2FmZUNTUycgdG8gcGFzcyBub24tbGl0ZXJhbCB2YWx1ZXMsIGJ1dCB0YWtlIGNhcmUgdG8gZW5zdXJlIHBhZ2Ugc2VjdXJpdHkuXCIpfSkocykrdFtuKzFdKSx0WzBdKTtyZXR1cm4gbmV3IG8obix0LHMpfSxTPShzLG4pPT57ZT9zLmFkb3B0ZWRTdHlsZVNoZWV0cz1uLm1hcCgodD0+dCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQ/dDp0LnN0eWxlU2hlZXQpKTpuLmZvckVhY2goKGU9Pntjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKSxvPXQubGl0Tm9uY2U7dm9pZCAwIT09byYmbi5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLG8pLG4udGV4dENvbnRlbnQ9ZS5jc3NUZXh0LHMuYXBwZW5kQ2hpbGQobil9KSl9LGM9ZT90PT50OnQ9PnQgaW5zdGFuY2VvZiBDU1NTdHlsZVNoZWV0Pyh0PT57bGV0IGU9XCJcIjtmb3IoY29uc3QgcyBvZiB0LmNzc1J1bGVzKWUrPXMuY3NzVGV4dDtyZXR1cm4gcihlKX0pKHQpOnQ7ZXhwb3J0e28gYXMgQ1NTUmVzdWx0LFMgYXMgYWRvcHRTdHlsZXMsaSBhcyBjc3MsYyBhcyBnZXRDb21wYXRpYmxlU3R5bGUsZSBhcyBzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsciBhcyB1bnNhZmVDU1N9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y3NzLXRhZy5qcy5tYXBcbiIsImltcG9ydHtnZXRDb21wYXRpYmxlU3R5bGUgYXMgdCxhZG9wdFN0eWxlcyBhcyBpfWZyb21cIi4vY3NzLXRhZy5qc1wiO2V4cG9ydHtDU1NSZXN1bHQsYWRvcHRTdHlsZXMsY3NzLGdldENvbXBhdGlibGVTdHlsZSxzdXBwb3J0c0Fkb3B0aW5nU3R5bGVTaGVldHMsdW5zYWZlQ1NTfWZyb21cIi4vY3NzLXRhZy5qc1wiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIHM7Y29uc3QgZT13aW5kb3cscj1lLnRydXN0ZWRUeXBlcyxoPXI/ci5lbXB0eVNjcmlwdDpcIlwiLG89ZS5yZWFjdGl2ZUVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQsbj17dG9BdHRyaWJ1dGUodCxpKXtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnQ9dD9oOm51bGw7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0PW51bGw9PXQ/dDpKU09OLnN0cmluZ2lmeSh0KX1yZXR1cm4gdH0sZnJvbUF0dHJpYnV0ZSh0LGkpe2xldCBzPXQ7c3dpdGNoKGkpe2Nhc2UgQm9vbGVhbjpzPW51bGwhPT10O2JyZWFrO2Nhc2UgTnVtYmVyOnM9bnVsbD09PXQ/bnVsbDpOdW1iZXIodCk7YnJlYWs7Y2FzZSBPYmplY3Q6Y2FzZSBBcnJheTp0cnl7cz1KU09OLnBhcnNlKHQpfWNhdGNoKHQpe3M9bnVsbH19cmV0dXJuIHN9fSxhPSh0LGkpPT5pIT09dCYmKGk9PWl8fHQ9PXQpLGw9e2F0dHJpYnV0ZTohMCx0eXBlOlN0cmluZyxjb252ZXJ0ZXI6bixyZWZsZWN0OiExLGhhc0NoYW5nZWQ6YX0sZD1cImZpbmFsaXplZFwiO2NsYXNzIHUgZXh0ZW5kcyBIVE1MRWxlbWVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKCksdGhpcy5fJEVpPW5ldyBNYXAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITEsdGhpcy5oYXNVcGRhdGVkPSExLHRoaXMuXyRFbD1udWxsLHRoaXMuXyRFdSgpfXN0YXRpYyBhZGRJbml0aWFsaXplcih0KXt2YXIgaTt0aGlzLmZpbmFsaXplKCksKG51bGwhPT0oaT10aGlzLmgpJiZ2b2lkIDAhPT1pP2k6dGhpcy5oPVtdKS5wdXNoKHQpfXN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCl7dGhpcy5maW5hbGl6ZSgpO2NvbnN0IHQ9W107cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZm9yRWFjaCgoKGkscyk9Pntjb25zdCBlPXRoaXMuXyRFcChzLGkpO3ZvaWQgMCE9PWUmJih0aGlzLl8kRXYuc2V0KGUscyksdC5wdXNoKGUpKX0pKSx0fXN0YXRpYyBjcmVhdGVQcm9wZXJ0eSh0LGk9bCl7aWYoaS5zdGF0ZSYmKGkuYXR0cmlidXRlPSExKSx0aGlzLmZpbmFsaXplKCksdGhpcy5lbGVtZW50UHJvcGVydGllcy5zZXQodCxpKSwhaS5ub0FjY2Vzc29yJiYhdGhpcy5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkodCkpe2NvbnN0IHM9XCJzeW1ib2xcIj09dHlwZW9mIHQ/U3ltYm9sKCk6XCJfX1wiK3QsZT10aGlzLmdldFByb3BlcnR5RGVzY3JpcHRvcih0LHMsaSk7dm9pZCAwIT09ZSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMucHJvdG90eXBlLHQsZSl9fXN0YXRpYyBnZXRQcm9wZXJ0eURlc2NyaXB0b3IodCxpLHMpe3JldHVybntnZXQoKXtyZXR1cm4gdGhpc1tpXX0sc2V0KGUpe2NvbnN0IHI9dGhpc1t0XTt0aGlzW2ldPWUsdGhpcy5yZXF1ZXN0VXBkYXRlKHQscixzKX0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9fXN0YXRpYyBnZXRQcm9wZXJ0eU9wdGlvbnModCl7cmV0dXJuIHRoaXMuZWxlbWVudFByb3BlcnRpZXMuZ2V0KHQpfHxsfXN0YXRpYyBmaW5hbGl6ZSgpe2lmKHRoaXMuaGFzT3duUHJvcGVydHkoZCkpcmV0dXJuITE7dGhpc1tkXT0hMDtjb25zdCB0PU9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKTtpZih0LmZpbmFsaXplKCksdm9pZCAwIT09dC5oJiYodGhpcy5oPVsuLi50LmhdKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAodC5lbGVtZW50UHJvcGVydGllcyksdGhpcy5fJEV2PW5ldyBNYXAsdGhpcy5oYXNPd25Qcm9wZXJ0eShcInByb3BlcnRpZXNcIikpe2NvbnN0IHQ9dGhpcy5wcm9wZXJ0aWVzLGk9Wy4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHQpLC4uLk9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModCldO2Zvcihjb25zdCBzIG9mIGkpdGhpcy5jcmVhdGVQcm9wZXJ0eShzLHRbc10pfXJldHVybiB0aGlzLmVsZW1lbnRTdHlsZXM9dGhpcy5maW5hbGl6ZVN0eWxlcyh0aGlzLnN0eWxlcyksITB9c3RhdGljIGZpbmFsaXplU3R5bGVzKGkpe2NvbnN0IHM9W107aWYoQXJyYXkuaXNBcnJheShpKSl7Y29uc3QgZT1uZXcgU2V0KGkuZmxhdCgxLzApLnJldmVyc2UoKSk7Zm9yKGNvbnN0IGkgb2YgZSlzLnVuc2hpZnQodChpKSl9ZWxzZSB2b2lkIDAhPT1pJiZzLnB1c2godChpKSk7cmV0dXJuIHN9c3RhdGljIF8kRXAodCxpKXtjb25zdCBzPWkuYXR0cmlidXRlO3JldHVybiExPT09cz92b2lkIDA6XCJzdHJpbmdcIj09dHlwZW9mIHM/czpcInN0cmluZ1wiPT10eXBlb2YgdD90LnRvTG93ZXJDYXNlKCk6dm9pZCAwfV8kRXUoKXt2YXIgdDt0aGlzLl8kRV89bmV3IFByb21pc2UoKHQ9PnRoaXMuZW5hYmxlVXBkYXRpbmc9dCkpLHRoaXMuXyRBTD1uZXcgTWFwLHRoaXMuXyRFZygpLHRoaXMucmVxdWVzdFVwZGF0ZSgpLG51bGw9PT0odD10aGlzLmNvbnN0cnVjdG9yLmgpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9PnQodGhpcykpKX1hZGRDb250cm9sbGVyKHQpe3ZhciBpLHM7KG51bGwhPT0oaT10aGlzLl8kRVMpJiZ2b2lkIDAhPT1pP2k6dGhpcy5fJEVTPVtdKS5wdXNoKHQpLHZvaWQgMCE9PXRoaXMucmVuZGVyUm9vdCYmdGhpcy5pc0Nvbm5lY3RlZCYmKG51bGw9PT0ocz10Lmhvc3RDb25uZWN0ZWQpfHx2b2lkIDA9PT1zfHxzLmNhbGwodCkpfXJlbW92ZUNvbnRyb2xsZXIodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuc3BsaWNlKHRoaXMuXyRFUy5pbmRleE9mKHQpPj4+MCwxKX1fJEVnKCl7dGhpcy5jb25zdHJ1Y3Rvci5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgodCxpKT0+e3RoaXMuaGFzT3duUHJvcGVydHkoaSkmJih0aGlzLl8kRWkuc2V0KGksdGhpc1tpXSksZGVsZXRlIHRoaXNbaV0pfSkpfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdDtjb25zdCBzPW51bGwhPT0odD10aGlzLnNoYWRvd1Jvb3QpJiZ2b2lkIDAhPT10P3Q6dGhpcy5hdHRhY2hTaGFkb3codGhpcy5jb25zdHJ1Y3Rvci5zaGFkb3dSb290T3B0aW9ucyk7cmV0dXJuIGkocyx0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRTdHlsZXMpLHN9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDt2b2lkIDA9PT10aGlzLnJlbmRlclJvb3QmJih0aGlzLnJlbmRlclJvb3Q9dGhpcy5jcmVhdGVSZW5kZXJSb290KCkpLHRoaXMuZW5hYmxlVXBkYXRpbmcoITApLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1lbmFibGVVcGRhdGluZyh0KXt9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtudWxsPT09KHQ9dGhpcy5fJEVTKXx8dm9pZCAwPT09dHx8dC5mb3JFYWNoKCh0PT57dmFyIGk7cmV0dXJuIG51bGw9PT0oaT10Lmhvc3REaXNjb25uZWN0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSl9YXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHQsaSxzKXt0aGlzLl8kQUsodCxzKX1fJEVPKHQsaSxzPWwpe3ZhciBlO2NvbnN0IHI9dGhpcy5jb25zdHJ1Y3Rvci5fJEVwKHQscyk7aWYodm9pZCAwIT09ciYmITA9PT1zLnJlZmxlY3Qpe2NvbnN0IGg9KHZvaWQgMCE9PShudWxsPT09KGU9cy5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1lP3ZvaWQgMDplLnRvQXR0cmlidXRlKT9zLmNvbnZlcnRlcjpuKS50b0F0dHJpYnV0ZShpLHMudHlwZSk7dGhpcy5fJEVsPXQsbnVsbD09aD90aGlzLnJlbW92ZUF0dHJpYnV0ZShyKTp0aGlzLnNldEF0dHJpYnV0ZShyLGgpLHRoaXMuXyRFbD1udWxsfX1fJEFLKHQsaSl7dmFyIHM7Y29uc3QgZT10aGlzLmNvbnN0cnVjdG9yLHI9ZS5fJEV2LmdldCh0KTtpZih2b2lkIDAhPT1yJiZ0aGlzLl8kRWwhPT1yKXtjb25zdCB0PWUuZ2V0UHJvcGVydHlPcHRpb25zKHIpLGg9XCJmdW5jdGlvblwiPT10eXBlb2YgdC5jb252ZXJ0ZXI/e2Zyb21BdHRyaWJ1dGU6dC5jb252ZXJ0ZXJ9OnZvaWQgMCE9PShudWxsPT09KHM9dC5jb252ZXJ0ZXIpfHx2b2lkIDA9PT1zP3ZvaWQgMDpzLmZyb21BdHRyaWJ1dGUpP3QuY29udmVydGVyOm47dGhpcy5fJEVsPXIsdGhpc1tyXT1oLmZyb21BdHRyaWJ1dGUoaSx0LnR5cGUpLHRoaXMuXyRFbD1udWxsfX1yZXF1ZXN0VXBkYXRlKHQsaSxzKXtsZXQgZT0hMDt2b2lkIDAhPT10JiYoKChzPXN8fHRoaXMuY29uc3RydWN0b3IuZ2V0UHJvcGVydHlPcHRpb25zKHQpKS5oYXNDaGFuZ2VkfHxhKSh0aGlzW3RdLGkpPyh0aGlzLl8kQUwuaGFzKHQpfHx0aGlzLl8kQUwuc2V0KHQsaSksITA9PT1zLnJlZmxlY3QmJnRoaXMuXyRFbCE9PXQmJih2b2lkIDA9PT10aGlzLl8kRUMmJih0aGlzLl8kRUM9bmV3IE1hcCksdGhpcy5fJEVDLnNldCh0LHMpKSk6ZT0hMSksIXRoaXMuaXNVcGRhdGVQZW5kaW5nJiZlJiYodGhpcy5fJEVfPXRoaXMuXyRFaigpKX1hc3luYyBfJEVqKCl7dGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITA7dHJ5e2F3YWl0IHRoaXMuXyRFX31jYXRjaCh0KXtQcm9taXNlLnJlamVjdCh0KX1jb25zdCB0PXRoaXMuc2NoZWR1bGVVcGRhdGUoKTtyZXR1cm4gbnVsbCE9dCYmYXdhaXQgdCwhdGhpcy5pc1VwZGF0ZVBlbmRpbmd9c2NoZWR1bGVVcGRhdGUoKXtyZXR1cm4gdGhpcy5wZXJmb3JtVXBkYXRlKCl9cGVyZm9ybVVwZGF0ZSgpe3ZhciB0O2lmKCF0aGlzLmlzVXBkYXRlUGVuZGluZylyZXR1cm47dGhpcy5oYXNVcGRhdGVkLHRoaXMuXyRFaSYmKHRoaXMuXyRFaS5mb3JFYWNoKCgodCxpKT0+dGhpc1tpXT10KSksdGhpcy5fJEVpPXZvaWQgMCk7bGV0IGk9ITE7Y29uc3Qgcz10aGlzLl8kQUw7dHJ5e2k9dGhpcy5zaG91bGRVcGRhdGUocyksaT8odGhpcy53aWxsVXBkYXRlKHMpLG51bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZSl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLnVwZGF0ZShzKSk6dGhpcy5fJEVrKCl9Y2F0Y2godCl7dGhyb3cgaT0hMSx0aGlzLl8kRWsoKSx0fWkmJnRoaXMuXyRBRShzKX13aWxsVXBkYXRlKHQpe31fJEFFKHQpe3ZhciBpO251bGw9PT0oaT10aGlzLl8kRVMpfHx2b2lkIDA9PT1pfHxpLmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdFVwZGF0ZWQpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLmNhbGwodCl9KSksdGhpcy5oYXNVcGRhdGVkfHwodGhpcy5oYXNVcGRhdGVkPSEwLHRoaXMuZmlyc3RVcGRhdGVkKHQpKSx0aGlzLnVwZGF0ZWQodCl9XyRFaygpe3RoaXMuXyRBTD1uZXcgTWFwLHRoaXMuaXNVcGRhdGVQZW5kaW5nPSExfWdldCB1cGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLmdldFVwZGF0ZUNvbXBsZXRlKCl9Z2V0VXBkYXRlQ29tcGxldGUoKXtyZXR1cm4gdGhpcy5fJEVffXNob3VsZFVwZGF0ZSh0KXtyZXR1cm4hMH11cGRhdGUodCl7dm9pZCAwIT09dGhpcy5fJEVDJiYodGhpcy5fJEVDLmZvckVhY2goKCh0LGkpPT50aGlzLl8kRU8oaSx0aGlzW2ldLHQpKSksdGhpcy5fJEVDPXZvaWQgMCksdGhpcy5fJEVrKCl9dXBkYXRlZCh0KXt9Zmlyc3RVcGRhdGVkKHQpe319dVtkXT0hMCx1LmVsZW1lbnRQcm9wZXJ0aWVzPW5ldyBNYXAsdS5lbGVtZW50U3R5bGVzPVtdLHUuc2hhZG93Um9vdE9wdGlvbnM9e21vZGU6XCJvcGVuXCJ9LG51bGw9PW98fG8oe1JlYWN0aXZlRWxlbWVudDp1fSksKG51bGwhPT0ocz1lLnJlYWN0aXZlRWxlbWVudFZlcnNpb25zKSYmdm9pZCAwIT09cz9zOmUucmVhY3RpdmVFbGVtZW50VmVyc2lvbnM9W10pLnB1c2goXCIxLjYuM1wiKTtleHBvcnR7dSBhcyBSZWFjdGl2ZUVsZW1lbnQsbiBhcyBkZWZhdWx0Q29udmVydGVyLGEgYXMgbm90RXF1YWx9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3RpdmUtZWxlbWVudC5qcy5tYXBcbiIsIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcbiAqIFNQRFgtTGljZW5zZS1JZGVudGlmaWVyOiBCU0QtMy1DbGF1c2VcbiAqL1xudmFyIHQ7Y29uc3QgaT13aW5kb3cscz1pLnRydXN0ZWRUeXBlcyxlPXM/cy5jcmVhdGVQb2xpY3koXCJsaXQtaHRtbFwiLHtjcmVhdGVIVE1MOnQ9PnR9KTp2b2lkIDAsbz1cIiRsaXQkXCIsbj1gbGl0JCR7KE1hdGgucmFuZG9tKCkrXCJcIikuc2xpY2UoOSl9JGAsbD1cIj9cIituLGg9YDwke2x9PmAscj1kb2N1bWVudCx1PSgpPT5yLmNyZWF0ZUNvbW1lbnQoXCJcIiksZD10PT5udWxsPT09dHx8XCJvYmplY3RcIiE9dHlwZW9mIHQmJlwiZnVuY3Rpb25cIiE9dHlwZW9mIHQsYz1BcnJheS5pc0FycmF5LHY9dD0+Yyh0KXx8XCJmdW5jdGlvblwiPT10eXBlb2YobnVsbD09dD92b2lkIDA6dFtTeW1ib2wuaXRlcmF0b3JdKSxhPVwiWyBcXHRcXG5cXGZcXHJdXCIsZj0vPCg/OighLS18XFwvW15hLXpBLVpdKXwoXFwvP1thLXpBLVpdW14+XFxzXSopfChcXC8/JCkpL2csXz0vLS0+L2csbT0vPi9nLHA9UmVnRXhwKGA+fCR7YX0oPzooW15cXFxcc1wiJz49L10rKSgke2F9Kj0ke2F9Kig/OlteIFxcdFxcblxcZlxcclwiJ1xcYDw+PV18KFwifCcpfCkpfCQpYCxcImdcIiksZz0vJy9nLCQ9L1wiL2cseT0vXig/OnNjcmlwdHxzdHlsZXx0ZXh0YXJlYXx0aXRsZSkkL2ksdz10PT4oaSwuLi5zKT0+KHtfJGxpdFR5cGUkOnQsc3RyaW5nczppLHZhbHVlczpzfSkseD13KDEpLGI9dygyKSxUPVN5bWJvbC5mb3IoXCJsaXQtbm9DaGFuZ2VcIiksQT1TeW1ib2wuZm9yKFwibGl0LW5vdGhpbmdcIiksRT1uZXcgV2Vha01hcCxDPXIuY3JlYXRlVHJlZVdhbGtlcihyLDEyOSxudWxsLCExKTtmdW5jdGlvbiBQKHQsaSl7aWYoIUFycmF5LmlzQXJyYXkodCl8fCF0Lmhhc093blByb3BlcnR5KFwicmF3XCIpKXRocm93IEVycm9yKFwiaW52YWxpZCB0ZW1wbGF0ZSBzdHJpbmdzIGFycmF5XCIpO3JldHVybiB2b2lkIDAhPT1lP2UuY3JlYXRlSFRNTChpKTppfWNvbnN0IFY9KHQsaSk9Pntjb25zdCBzPXQubGVuZ3RoLTEsZT1bXTtsZXQgbCxyPTI9PT1pP1wiPHN2Zz5cIjpcIlwiLHU9Zjtmb3IobGV0IGk9MDtpPHM7aSsrKXtjb25zdCBzPXRbaV07bGV0IGQsYyx2PS0xLGE9MDtmb3IoO2E8cy5sZW5ndGgmJih1Lmxhc3RJbmRleD1hLGM9dS5leGVjKHMpLG51bGwhPT1jKTspYT11Lmxhc3RJbmRleCx1PT09Zj9cIiEtLVwiPT09Y1sxXT91PV86dm9pZCAwIT09Y1sxXT91PW06dm9pZCAwIT09Y1syXT8oeS50ZXN0KGNbMl0pJiYobD1SZWdFeHAoXCI8L1wiK2NbMl0sXCJnXCIpKSx1PXApOnZvaWQgMCE9PWNbM10mJih1PXApOnU9PT1wP1wiPlwiPT09Y1swXT8odT1udWxsIT1sP2w6Zix2PS0xKTp2b2lkIDA9PT1jWzFdP3Y9LTI6KHY9dS5sYXN0SW5kZXgtY1syXS5sZW5ndGgsZD1jWzFdLHU9dm9pZCAwPT09Y1szXT9wOidcIic9PT1jWzNdPyQ6Zyk6dT09PSR8fHU9PT1nP3U9cDp1PT09X3x8dT09PW0/dT1mOih1PXAsbD12b2lkIDApO2NvbnN0IHc9dT09PXAmJnRbaSsxXS5zdGFydHNXaXRoKFwiLz5cIik/XCIgXCI6XCJcIjtyKz11PT09Zj9zK2g6dj49MD8oZS5wdXNoKGQpLHMuc2xpY2UoMCx2KStvK3Muc2xpY2Uodikrbit3KTpzK24rKC0yPT09dj8oZS5wdXNoKHZvaWQgMCksaSk6dyl9cmV0dXJuW1AodCxyKyh0W3NdfHxcIjw/PlwiKSsoMj09PWk/XCI8L3N2Zz5cIjpcIlwiKSksZV19O2NsYXNzIE57Y29uc3RydWN0b3Ioe3N0cmluZ3M6dCxfJGxpdFR5cGUkOml9LGUpe2xldCBoO3RoaXMucGFydHM9W107bGV0IHI9MCxkPTA7Y29uc3QgYz10Lmxlbmd0aC0xLHY9dGhpcy5wYXJ0cyxbYSxmXT1WKHQsaSk7aWYodGhpcy5lbD1OLmNyZWF0ZUVsZW1lbnQoYSxlKSxDLmN1cnJlbnROb2RlPXRoaXMuZWwuY29udGVudCwyPT09aSl7Y29uc3QgdD10aGlzLmVsLmNvbnRlbnQsaT10LmZpcnN0Q2hpbGQ7aS5yZW1vdmUoKSx0LmFwcGVuZCguLi5pLmNoaWxkTm9kZXMpfWZvcig7bnVsbCE9PShoPUMubmV4dE5vZGUoKSkmJnYubGVuZ3RoPGM7KXtpZigxPT09aC5ub2RlVHlwZSl7aWYoaC5oYXNBdHRyaWJ1dGVzKCkpe2NvbnN0IHQ9W107Zm9yKGNvbnN0IGkgb2YgaC5nZXRBdHRyaWJ1dGVOYW1lcygpKWlmKGkuZW5kc1dpdGgobyl8fGkuc3RhcnRzV2l0aChuKSl7Y29uc3Qgcz1mW2QrK107aWYodC5wdXNoKGkpLHZvaWQgMCE9PXMpe2NvbnN0IHQ9aC5nZXRBdHRyaWJ1dGUocy50b0xvd2VyQ2FzZSgpK28pLnNwbGl0KG4pLGk9LyhbLj9AXSk/KC4qKS8uZXhlYyhzKTt2LnB1c2goe3R5cGU6MSxpbmRleDpyLG5hbWU6aVsyXSxzdHJpbmdzOnQsY3RvcjpcIi5cIj09PWlbMV0/SDpcIj9cIj09PWlbMV0/TDpcIkBcIj09PWlbMV0/ejprfSl9ZWxzZSB2LnB1c2goe3R5cGU6NixpbmRleDpyfSl9Zm9yKGNvbnN0IGkgb2YgdCloLnJlbW92ZUF0dHJpYnV0ZShpKX1pZih5LnRlc3QoaC50YWdOYW1lKSl7Y29uc3QgdD1oLnRleHRDb250ZW50LnNwbGl0KG4pLGk9dC5sZW5ndGgtMTtpZihpPjApe2gudGV4dENvbnRlbnQ9cz9zLmVtcHR5U2NyaXB0OlwiXCI7Zm9yKGxldCBzPTA7czxpO3MrKyloLmFwcGVuZCh0W3NdLHUoKSksQy5uZXh0Tm9kZSgpLHYucHVzaCh7dHlwZToyLGluZGV4Oisrcn0pO2guYXBwZW5kKHRbaV0sdSgpKX19fWVsc2UgaWYoOD09PWgubm9kZVR5cGUpaWYoaC5kYXRhPT09bCl2LnB1c2goe3R5cGU6MixpbmRleDpyfSk7ZWxzZXtsZXQgdD0tMTtmb3IoOy0xIT09KHQ9aC5kYXRhLmluZGV4T2Yobix0KzEpKTspdi5wdXNoKHt0eXBlOjcsaW5kZXg6cn0pLHQrPW4ubGVuZ3RoLTF9cisrfX1zdGF0aWMgY3JlYXRlRWxlbWVudCh0LGkpe2NvbnN0IHM9ci5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7cmV0dXJuIHMuaW5uZXJIVE1MPXQsc319ZnVuY3Rpb24gUyh0LGkscz10LGUpe3ZhciBvLG4sbCxoO2lmKGk9PT1UKXJldHVybiBpO2xldCByPXZvaWQgMCE9PWU/bnVsbD09PShvPXMuXyRDbyl8fHZvaWQgMD09PW8/dm9pZCAwOm9bZV06cy5fJENsO2NvbnN0IHU9ZChpKT92b2lkIDA6aS5fJGxpdERpcmVjdGl2ZSQ7cmV0dXJuKG51bGw9PXI/dm9pZCAwOnIuY29uc3RydWN0b3IpIT09dSYmKG51bGw9PT0obj1udWxsPT1yP3ZvaWQgMDpyLl8kQU8pfHx2b2lkIDA9PT1ufHxuLmNhbGwociwhMSksdm9pZCAwPT09dT9yPXZvaWQgMDoocj1uZXcgdSh0KSxyLl8kQVQodCxzLGUpKSx2b2lkIDAhPT1lPyhudWxsIT09KGw9KGg9cykuXyRDbykmJnZvaWQgMCE9PWw/bDpoLl8kQ289W10pW2VdPXI6cy5fJENsPXIpLHZvaWQgMCE9PXImJihpPVModCxyLl8kQVModCxpLnZhbHVlcykscixlKSksaX1jbGFzcyBNe2NvbnN0cnVjdG9yKHQsaSl7dGhpcy5fJEFWPVtdLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFEPXQsdGhpcy5fJEFNPWl9Z2V0IHBhcmVudE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFNLnBhcmVudE5vZGV9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9dSh0KXt2YXIgaTtjb25zdHtlbDp7Y29udGVudDpzfSxwYXJ0czplfT10aGlzLl8kQUQsbz0obnVsbCE9PShpPW51bGw9PXQ/dm9pZCAwOnQuY3JlYXRpb25TY29wZSkmJnZvaWQgMCE9PWk/aTpyKS5pbXBvcnROb2RlKHMsITApO0MuY3VycmVudE5vZGU9bztsZXQgbj1DLm5leHROb2RlKCksbD0wLGg9MCx1PWVbMF07Zm9yKDt2b2lkIDAhPT11Oyl7aWYobD09PXUuaW5kZXgpe2xldCBpOzI9PT11LnR5cGU/aT1uZXcgUihuLG4ubmV4dFNpYmxpbmcsdGhpcyx0KToxPT09dS50eXBlP2k9bmV3IHUuY3RvcihuLHUubmFtZSx1LnN0cmluZ3MsdGhpcyx0KTo2PT09dS50eXBlJiYoaT1uZXcgWihuLHRoaXMsdCkpLHRoaXMuXyRBVi5wdXNoKGkpLHU9ZVsrK2hdfWwhPT0obnVsbD09dT92b2lkIDA6dS5pbmRleCkmJihuPUMubmV4dE5vZGUoKSxsKyspfXJldHVybiBDLmN1cnJlbnROb2RlPXIsb312KHQpe2xldCBpPTA7Zm9yKGNvbnN0IHMgb2YgdGhpcy5fJEFWKXZvaWQgMCE9PXMmJih2b2lkIDAhPT1zLnN0cmluZ3M/KHMuXyRBSSh0LHMsaSksaSs9cy5zdHJpbmdzLmxlbmd0aC0yKTpzLl8kQUkodFtpXSkpLGkrK319Y2xhc3MgUntjb25zdHJ1Y3Rvcih0LGkscyxlKXt2YXIgbzt0aGlzLnR5cGU9Mix0aGlzLl8kQUg9QSx0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBQT10LHRoaXMuXyRBQj1pLHRoaXMuXyRBTT1zLHRoaXMub3B0aW9ucz1lLHRoaXMuXyRDcD1udWxsPT09KG89bnVsbD09ZT92b2lkIDA6ZS5pc0Nvbm5lY3RlZCl8fHZvaWQgMD09PW98fG99Z2V0IF8kQVUoKXt2YXIgdCxpO3JldHVybiBudWxsIT09KGk9bnVsbD09PSh0PXRoaXMuXyRBTSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuXyRBVSkmJnZvaWQgMCE9PWk/aTp0aGlzLl8kQ3B9Z2V0IHBhcmVudE5vZGUoKXtsZXQgdD10aGlzLl8kQUEucGFyZW50Tm9kZTtjb25zdCBpPXRoaXMuXyRBTTtyZXR1cm4gdm9pZCAwIT09aSYmMTE9PT0obnVsbD09dD92b2lkIDA6dC5ub2RlVHlwZSkmJih0PWkucGFyZW50Tm9kZSksdH1nZXQgc3RhcnROb2RlKCl7cmV0dXJuIHRoaXMuXyRBQX1nZXQgZW5kTm9kZSgpe3JldHVybiB0aGlzLl8kQUJ9XyRBSSh0LGk9dGhpcyl7dD1TKHRoaXMsdCxpKSxkKHQpP3Q9PT1BfHxudWxsPT10fHxcIlwiPT09dD8odGhpcy5fJEFIIT09QSYmdGhpcy5fJEFSKCksdGhpcy5fJEFIPUEpOnQhPT10aGlzLl8kQUgmJnQhPT1UJiZ0aGlzLl8odCk6dm9pZCAwIT09dC5fJGxpdFR5cGUkP3RoaXMuZyh0KTp2b2lkIDAhPT10Lm5vZGVUeXBlP3RoaXMuJCh0KTp2KHQpP3RoaXMuVCh0KTp0aGlzLl8odCl9ayh0KXtyZXR1cm4gdGhpcy5fJEFBLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHQsdGhpcy5fJEFCKX0kKHQpe3RoaXMuXyRBSCE9PXQmJih0aGlzLl8kQVIoKSx0aGlzLl8kQUg9dGhpcy5rKHQpKX1fKHQpe3RoaXMuXyRBSCE9PUEmJmQodGhpcy5fJEFIKT90aGlzLl8kQUEubmV4dFNpYmxpbmcuZGF0YT10OnRoaXMuJChyLmNyZWF0ZVRleHROb2RlKHQpKSx0aGlzLl8kQUg9dH1nKHQpe3ZhciBpO2NvbnN0e3ZhbHVlczpzLF8kbGl0VHlwZSQ6ZX09dCxvPVwibnVtYmVyXCI9PXR5cGVvZiBlP3RoaXMuXyRBQyh0KToodm9pZCAwPT09ZS5lbCYmKGUuZWw9Ti5jcmVhdGVFbGVtZW50KFAoZS5oLGUuaFswXSksdGhpcy5vcHRpb25zKSksZSk7aWYoKG51bGw9PT0oaT10aGlzLl8kQUgpfHx2b2lkIDA9PT1pP3ZvaWQgMDppLl8kQUQpPT09byl0aGlzLl8kQUgudihzKTtlbHNle2NvbnN0IHQ9bmV3IE0obyx0aGlzKSxpPXQudSh0aGlzLm9wdGlvbnMpO3QudihzKSx0aGlzLiQoaSksdGhpcy5fJEFIPXR9fV8kQUModCl7bGV0IGk9RS5nZXQodC5zdHJpbmdzKTtyZXR1cm4gdm9pZCAwPT09aSYmRS5zZXQodC5zdHJpbmdzLGk9bmV3IE4odCkpLGl9VCh0KXtjKHRoaXMuXyRBSCl8fCh0aGlzLl8kQUg9W10sdGhpcy5fJEFSKCkpO2NvbnN0IGk9dGhpcy5fJEFIO2xldCBzLGU9MDtmb3IoY29uc3QgbyBvZiB0KWU9PT1pLmxlbmd0aD9pLnB1c2gocz1uZXcgUih0aGlzLmsodSgpKSx0aGlzLmsodSgpKSx0aGlzLHRoaXMub3B0aW9ucykpOnM9aVtlXSxzLl8kQUkobyksZSsrO2U8aS5sZW5ndGgmJih0aGlzLl8kQVIocyYmcy5fJEFCLm5leHRTaWJsaW5nLGUpLGkubGVuZ3RoPWUpfV8kQVIodD10aGlzLl8kQUEubmV4dFNpYmxpbmcsaSl7dmFyIHM7Zm9yKG51bGw9PT0ocz10aGlzLl8kQVApfHx2b2lkIDA9PT1zfHxzLmNhbGwodGhpcywhMSwhMCxpKTt0JiZ0IT09dGhpcy5fJEFCOyl7Y29uc3QgaT10Lm5leHRTaWJsaW5nO3QucmVtb3ZlKCksdD1pfX1zZXRDb25uZWN0ZWQodCl7dmFyIGk7dm9pZCAwPT09dGhpcy5fJEFNJiYodGhpcy5fJENwPXQsbnVsbD09PShpPXRoaXMuXyRBUCl8fHZvaWQgMD09PWl8fGkuY2FsbCh0aGlzLHQpKX19Y2xhc3Mga3tjb25zdHJ1Y3Rvcih0LGkscyxlLG8pe3RoaXMudHlwZT0xLHRoaXMuXyRBSD1BLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5lbGVtZW50PXQsdGhpcy5uYW1lPWksdGhpcy5fJEFNPWUsdGhpcy5vcHRpb25zPW8scy5sZW5ndGg+Mnx8XCJcIiE9PXNbMF18fFwiXCIhPT1zWzFdPyh0aGlzLl8kQUg9QXJyYXkocy5sZW5ndGgtMSkuZmlsbChuZXcgU3RyaW5nKSx0aGlzLnN0cmluZ3M9cyk6dGhpcy5fJEFIPUF9Z2V0IHRhZ05hbWUoKXtyZXR1cm4gdGhpcy5lbGVtZW50LnRhZ05hbWV9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBSSh0LGk9dGhpcyxzLGUpe2NvbnN0IG89dGhpcy5zdHJpbmdzO2xldCBuPSExO2lmKHZvaWQgMD09PW8pdD1TKHRoaXMsdCxpLDApLG49IWQodCl8fHQhPT10aGlzLl8kQUgmJnQhPT1ULG4mJih0aGlzLl8kQUg9dCk7ZWxzZXtjb25zdCBlPXQ7bGV0IGwsaDtmb3IodD1vWzBdLGw9MDtsPG8ubGVuZ3RoLTE7bCsrKWg9Uyh0aGlzLGVbcytsXSxpLGwpLGg9PT1UJiYoaD10aGlzLl8kQUhbbF0pLG58fChuPSFkKGgpfHxoIT09dGhpcy5fJEFIW2xdKSxoPT09QT90PUE6dCE9PUEmJih0Kz0obnVsbCE9aD9oOlwiXCIpK29bbCsxXSksdGhpcy5fJEFIW2xdPWh9biYmIWUmJnRoaXMuaih0KX1qKHQpe3Q9PT1BP3RoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKTp0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMubmFtZSxudWxsIT10P3Q6XCJcIil9fWNsYXNzIEggZXh0ZW5kcyBre2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnR5cGU9M31qKHQpe3RoaXMuZWxlbWVudFt0aGlzLm5hbWVdPXQ9PT1BP3ZvaWQgMDp0fX1jb25zdCBJPXM/cy5lbXB0eVNjcmlwdDpcIlwiO2NsYXNzIEwgZXh0ZW5kcyBre2NvbnN0cnVjdG9yKCl7c3VwZXIoLi4uYXJndW1lbnRzKSx0aGlzLnR5cGU9NH1qKHQpe3QmJnQhPT1BP3RoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLEkpOnRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5uYW1lKX19Y2xhc3MgeiBleHRlbmRzIGt7Y29uc3RydWN0b3IodCxpLHMsZSxvKXtzdXBlcih0LGkscyxlLG8pLHRoaXMudHlwZT01fV8kQUkodCxpPXRoaXMpe3ZhciBzO2lmKCh0PW51bGwhPT0ocz1TKHRoaXMsdCxpLDApKSYmdm9pZCAwIT09cz9zOkEpPT09VClyZXR1cm47Y29uc3QgZT10aGlzLl8kQUgsbz10PT09QSYmZSE9PUF8fHQuY2FwdHVyZSE9PWUuY2FwdHVyZXx8dC5vbmNlIT09ZS5vbmNlfHx0LnBhc3NpdmUhPT1lLnBhc3NpdmUsbj10IT09QSYmKGU9PT1BfHxvKTtvJiZ0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyxlKSxuJiZ0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLm5hbWUsdGhpcyx0KSx0aGlzLl8kQUg9dH1oYW5kbGVFdmVudCh0KXt2YXIgaSxzO1wiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuXyRBSD90aGlzLl8kQUguY2FsbChudWxsIT09KHM9bnVsbD09PShpPXRoaXMub3B0aW9ucyl8fHZvaWQgMD09PWk/dm9pZCAwOmkuaG9zdCkmJnZvaWQgMCE9PXM/czp0aGlzLmVsZW1lbnQsdCk6dGhpcy5fJEFILmhhbmRsZUV2ZW50KHQpfX1jbGFzcyBae2NvbnN0cnVjdG9yKHQsaSxzKXt0aGlzLmVsZW1lbnQ9dCx0aGlzLnR5cGU9Nix0aGlzLl8kQU49dm9pZCAwLHRoaXMuXyRBTT1pLHRoaXMub3B0aW9ucz1zfWdldCBfJEFVKCl7cmV0dXJuIHRoaXMuXyRBTS5fJEFVfV8kQUkodCl7Uyh0aGlzLHQpfX1jb25zdCBqPXtPOm8sUDpuLEE6bCxDOjEsTTpWLEw6TSxSOnYsRDpTLEk6UixWOmssSDpMLE46eixVOkgsRjpafSxCPWkubGl0SHRtbFBvbHlmaWxsU3VwcG9ydDtudWxsPT1CfHxCKE4sUiksKG51bGwhPT0odD1pLmxpdEh0bWxWZXJzaW9ucykmJnZvaWQgMCE9PXQ/dDppLmxpdEh0bWxWZXJzaW9ucz1bXSkucHVzaChcIjIuOC4wXCIpO2NvbnN0IEQ9KHQsaSxzKT0+e3ZhciBlLG87Y29uc3Qgbj1udWxsIT09KGU9bnVsbD09cz92b2lkIDA6cy5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT1lP2U6aTtsZXQgbD1uLl8kbGl0UGFydCQ7aWYodm9pZCAwPT09bCl7Y29uc3QgdD1udWxsIT09KG89bnVsbD09cz92b2lkIDA6cy5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT1vP286bnVsbDtuLl8kbGl0UGFydCQ9bD1uZXcgUihpLmluc2VydEJlZm9yZSh1KCksdCksdCx2b2lkIDAsbnVsbCE9cz9zOnt9KX1yZXR1cm4gbC5fJEFJKHQpLGx9O2V4cG9ydHtqIGFzIF8kTEgseCBhcyBodG1sLFQgYXMgbm9DaGFuZ2UsQSBhcyBub3RoaW5nLEQgYXMgcmVuZGVyLGIgYXMgc3ZnfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1odG1sLmpzLm1hcFxuIiwiaW1wb3J0e1JlYWN0aXZlRWxlbWVudCBhcyB0fWZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2V4cG9ydCpmcm9tXCJAbGl0L3JlYWN0aXZlLWVsZW1lbnRcIjtpbXBvcnR7cmVuZGVyIGFzIGUsbm9DaGFuZ2UgYXMgaX1mcm9tXCJsaXQtaHRtbFwiO2V4cG9ydCpmcm9tXCJsaXQtaHRtbFwiO1xuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovdmFyIGwsbztjb25zdCByPXQ7Y2xhc3MgcyBleHRlbmRzIHR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMucmVuZGVyT3B0aW9ucz17aG9zdDp0aGlzfSx0aGlzLl8kRG89dm9pZCAwfWNyZWF0ZVJlbmRlclJvb3QoKXt2YXIgdCxlO2NvbnN0IGk9c3VwZXIuY3JlYXRlUmVuZGVyUm9vdCgpO3JldHVybiBudWxsIT09KHQ9KGU9dGhpcy5yZW5kZXJPcHRpb25zKS5yZW5kZXJCZWZvcmUpJiZ2b2lkIDAhPT10fHwoZS5yZW5kZXJCZWZvcmU9aS5maXJzdENoaWxkKSxpfXVwZGF0ZSh0KXtjb25zdCBpPXRoaXMucmVuZGVyKCk7dGhpcy5oYXNVcGRhdGVkfHwodGhpcy5yZW5kZXJPcHRpb25zLmlzQ29ubmVjdGVkPXRoaXMuaXNDb25uZWN0ZWQpLHN1cGVyLnVwZGF0ZSh0KSx0aGlzLl8kRG89ZShpLHRoaXMucmVuZGVyUm9vdCx0aGlzLnJlbmRlck9wdGlvbnMpfWNvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJERvKXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITApfWRpc2Nvbm5lY3RlZENhbGxiYWNrKCl7dmFyIHQ7c3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKSxudWxsPT09KHQ9dGhpcy5fJERvKXx8dm9pZCAwPT09dHx8dC5zZXRDb25uZWN0ZWQoITEpfXJlbmRlcigpe3JldHVybiBpfX1zLmZpbmFsaXplZD0hMCxzLl8kbGl0RWxlbWVudCQ9ITAsbnVsbD09PShsPWdsb2JhbFRoaXMubGl0RWxlbWVudEh5ZHJhdGVTdXBwb3J0KXx8dm9pZCAwPT09bHx8bC5jYWxsKGdsb2JhbFRoaXMse0xpdEVsZW1lbnQ6c30pO2NvbnN0IG49Z2xvYmFsVGhpcy5saXRFbGVtZW50UG9seWZpbGxTdXBwb3J0O251bGw9PW58fG4oe0xpdEVsZW1lbnQ6c30pO2NvbnN0IGg9e18kQUs6KHQsZSxpKT0+e3QuXyRBSyhlLGkpfSxfJEFMOnQ9PnQuXyRBTH07KG51bGwhPT0obz1nbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucykmJnZvaWQgMCE9PW8/bzpnbG9iYWxUaGlzLmxpdEVsZW1lbnRWZXJzaW9ucz1bXSkucHVzaChcIjMuMy4zXCIpO2V4cG9ydHtzIGFzIExpdEVsZW1lbnQsciBhcyBVcGRhdGluZ0VsZW1lbnQsaCBhcyBfJExFfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpdC1lbGVtZW50LmpzLm1hcFxuIiwiaW1wb3J0IHtMaXRFbGVtZW50LCBodG1sLCBjc3N9IGZyb20gJ2xpdCc7XG5cbnZhciBzaGFyZWRTdHlsZSA9IGNzc2BcbiAgICBsYWJlbCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICBsYWJlbCwgdGggeyBmb250OnZhcigtLWxhYmVsLWZvbnQpOyBiYWNrZ3JvdW5kOnZhcigtLWxhYmVsLWJhY2tncm91bmQpOyBjb2xvcjp2YXIoLS1sYWJlbC1pbnZlcnNlKTtwYWRkaW5nOnZhcigtLWxhYmVsLXBhZGRpbmcpOyB0ZXh0LXRyYW5zZm9ybTp2YXIoLS1sYWJlbC10ZXh0LXRyYW5zZm9ybSk7IH1cbiAgICBpbnB1dCwgdGV4dGFyZWEgeyBmb250OnZhcigtLWlucHV0LWZvbnQpOyB3aWR0aDoxMDAlOyBjb2xvcjp2YXIoLS1pbnB1dC1pbnZlcnNlKTsgYm9yZGVyOnZhcigtLWlucHV0LWJvcmRlcik7IHBhZGRpbmc6dmFyKC0taW5wdXQtcGFkZGluZyk7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyLXJhZGl1czp2YXIoLS1pbnB1dC1yYWRpdXMpOyBib3gtc2hhZG93Om5vbmU7IGZvbnQtc2l6ZTp2YXIoLS1pbnB1dC1mb250LXNpemUpOyBmb250LXdlaWdodDp2YXIoLS1pbnB1dC1mb250LXdlaWdodCk7ICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIGlucHV0LCB0ZXh0YXJlYSB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLW1vei1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9IC8qIHJlbW92ZSBpb3MgaW5zZXQgc2hhZG93ICovXG4gICAgaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHsgb3V0bGluZTpub25lOyB9XG4gICAgaW5wdXQ6aW52YWxpZCB7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0LWNvbG9yKTsgfVxuICAgIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLCBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgbWFyZ2luOiAwOyB9XG4gICAgOjpwbGFjZWhvbGRlciB7IGNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBvcGFjaXR5OjAuNjsgfVxuYDtcblxuZXhwb3J0IGNsYXNzIFJlc2l6ZUNvbnRyb2xsZXIge1xuICAgIGhvc3Q7IFxuXG4gICAgY29uc3RydWN0b3IoaG9zdCkge1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICBob3N0LmFkZENvbnRyb2xsZXIodGhpcyk7XG4gICAgICAgIHRoaXMucmVzaXplID0gdGhpcy5yZXNpemUuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBob3N0Q29ubmVjdGVkKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xuICAgIH1cbiAgICBcbiAgICBob3N0RGlzY29ubmVjdGVkKCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUpO1xuICAgIH1cblxuICAgIHJlc2l6ZSgpIHtcbiAgICAgICAgaWYod2luZG93LmlubmVyV2lkdGggPCA0NjApIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoXCJkZXNrdG9wXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoXCJkZXNrdG9wXCIpO1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5ob3N0Lm9uUmVzaXplZCkgdGhpcy5ob3N0Lm9uUmVzaXplZCh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gICAgfVxufVxuXG5jbGFzcyBCb3VuY2VyIHtcbiAgICBzdGF0aWMgZGVib3VuY2UoY29udGV4dCwgZnVuYywgd2FpdCkge1xuICAgICAgICBpZihmdW5jLnRpbWVvdXRJZCAhPSB1bmRlZmluZWQpIHdpbmRvdy5jbGVhclRpbWVvdXQoZnVuYy50aW1lb3V0SWQpO1xuICAgICAgICBmdW5jLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQpO1xuICAgICAgICB9LCB3YWl0KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIHtcbiAgICBzdGF0aWMgY29weUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgIGxldCBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29weVRleHQodGV4dCkge1xuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIGUuaW5uZXJUZXh0ID0gdGV4dDsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29weWluZ1wiLCBlKTtcbiAgICAgICAgdGhpcy5jb3B5RWxlbWVudChlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWwge1xuXG4gICAgc3RhdGljIGZvcm1hdFNob3J0KGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpOyBcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0V2tNb0RheShkYXRlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3dlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7IFxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRNb0RheShkYXRlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge21vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7IFxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRMb25nKGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFdpdGhUaW1lKGRhdGUpIHtcbiAgICAgICAgdmFyIGRhdGVvcHRzID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJzItZGlnaXQnIH07XG4gICAgICAgIGxldCB0aW1lb3B0cyA9IHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9O1xuICAgICAgICBsZXQgdmFsID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHJldHVybiB2YWwudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZW9wdHMpICsgXCIgXCIgKyAgZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHRpbWVvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0TWVkaXVtKGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnIH07XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTsgICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBkYXlEaWZmKGRhdGUxLCBkYXRlMikge1xuICAgICAgICB2YXIgZDEgPSBuZXcgRGF0ZShkYXRlMSk7XG4gICAgICAgIHZhciBkMiA9IG5ldyBEYXRlKGRhdGUyKTtcbiAgICAgICAgdmFyIGRpZmYgPSBkMSAtIGQyOyBcbiAgICAgICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0RGF5RGlmZihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBEYXRlVXRpbC5kYXlEaWZmKGRhdGUyLCBkYXRlMSk7XG4gICAgICAgIHJldHVybiAoZGlmZiA9PSAxKSA/IGRpZmYgKyBcIiBuaWdodFwiIDogZGlmZiArIFwiIG5pZ2h0c1wiO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaXJzdE9mV2VlayhkYXRlKSB7XG4gICAgICAgIHZhciBmb3cgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZm93LnNldERhdGUoZm93LmdldERhdGUoKSAtIGZvdy5nZXREYXkoKSk7XG4gICAgICAgIHJldHVybiBmb3c7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpcnN0T2ZNb250aChkYXRlKSB7XG4gICAgICAgIHZhciBmb20gPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZm9tLnNldERhdGUoMSk7XG4gICAgICAgIHJldHVybiBmb207IFxuICAgIH1cbn1cblxuY2xhc3MgQnJpZ2h0TmF2IGV4dGVuZHMgTGl0RWxlbWVudCB7ICAgXG4gICAgcmVzaXplciA9IG5ldyBSZXNpemVDb250cm9sbGVyKHRoaXMpO1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjsgd2lkdGg6MTAwJTsgbWF4LXdpZHRoOnZhcigtLWNvbnRlbnQtd2lkdGgpOyBtYXJnaW46YXV0bzsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cbiAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICNvdmVybGF5IHsgcG9zaXRpb246YWJzb2x1dGU7IHotaW5kZXg6MTAwOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjE2cHg7IGRpc3BsYXk6bm9uZTsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyBiYWNrZ3JvdW5kOnZhcigtLWJvZHktaW52ZXJzZSk7IGZpbGw6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgY29sb3I6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfSBcbiAgICAgICAgI2NsZWFyaWNvbiB7IGFsaWduLXNlbGY6ZmxleC1zdGFydDsgbWFyZ2luOjE2cHggMTZweCAwcHggMTZweDsgZmlsbDppbmhlcml0OyAgfVxuICAgICAgICAjbWVudWljb24geyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDoxNnB4OyBmaWxsOnZhcigtLWJhY2tncm91bmQtaW52ZXJzZSk7IH1cbiAgICAgICAgI21haW4geyB3aWR0aDoxMDAlOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuICAgICAgICA6OnNsb3R0ZWQoKikgeyBjb2xvcjppbmhlcml0OyBmaWxsOmluaGVyaXQ7IGJhY2tncm91bmQ6aW5oZXJpdDsgfVxuICAgICAgICAjbWFpbiA6OnNsb3R0ZWQoaW1nKSB7IHBhZGRpbmc6MjRweDsgfVxuICAgIGA7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgd2lkdGg6IHsgdHlwZTpOdW1iZXIgfVxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBtZW51ID0gaHRtbGBgO1xuICAgICAgICBpZih0aGlzLndpZHRoIDwgNDYwKSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluXCIgcGFydD1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJtZW51aWNvblwiIGljb249XCJtZW51XCIgQGNsaWNrPVwiJHt0aGlzLm1lbnVJY29uQ2xpY2t9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibG9nb1wiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cIm92ZXJsYXlcIiBwYXJ0PVwib3ZlcmxheVwiPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpZD1cImNsZWFyaWNvblwiIGljb249XCJjbGVhclwiIEBjbGljaz1cIiR7dGhpcy5jbG9zZUljb25DbGlja31cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxzbG90IEBjbGljaz1cIiR7dGhpcy5tZW51SXRlbUNsaWNrfVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsb2dvXCIgcGFydD1cImxvZ29cIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3QgQGNsaWNrPVwiJHt0aGlzLm1lbnVJdGVtQ2xpY2t9XCI+PC9zbG90PlxuICAgICAgICAgICAgYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIjb3ZlcmxheVwiKTtcbiAgICB9XG5cbiAgICBvblJlc2l6ZWQod2lkdGgpIHtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgIG1lbnVJdGVtQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2xvc2VJY29uQ2xpY2soKTtcbiAgICB9XG5cbiAgICBtZW51SWNvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICB0aGlzLm92ZXJsYXkuYW5pbWF0ZShbIFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVkoLTUwJSknLCBvcGFjaXR5OjAgfSxcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVZKDApJywgb3BhY2l0eToxIH0gXG4gICAgICAgIF0sIHsgZHVyYXRpb246MzAwLCBlYXNpbmc6J2Vhc2Utb3V0JywgZmlsbDogJ2JvdGgnIH0gKTtcbiAgICB9XG4gICAgY2xvc2VJY29uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheS5hbmltYXRlKFsgXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTondHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6MSB9LFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVkoLTUwJSknLCBvcGFjaXR5OjAgfSBcbiAgICAgICAgXSwgeyBkdXJhdGlvbjozMDAsIGVhc2luZzonZWFzZS1vdXQnLCBmaWxsOiAnYm90aCcgfSApLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LW5hdlwiLCBCcmlnaHROYXYpO1xuXG5jbGFzcyBCcmlnaHRJY29uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpY29uOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZnVsbHBhdGggPSBuZXcgVVJMKGltcG9ydC5tZXRhLnVybCkucGF0aG5hbWU7XG4gICAgICAgIHZhciBpeCA9IGZ1bGxwYXRoLmxhc3RJbmRleE9mKCcvJyk7XG4gICAgICAgIHZhciBwYXRoID0gZnVsbHBhdGguc3Vic3RyaW5nKDAsIGl4KzEpO1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyB3aWR0aDoyNHB4OyBoZWlnaHQ6MjRweDsgZmlsbDppbmhlcml0OyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHN2ZyBzdHlsZT1cImhlaWdodDoxMDAlOyB3aWR0aDoxMDAlXCIgdmlld2JveD1cIjAgMCAyNCAyNFwiPjx1c2UgaHJlZj1cIiR7cGF0aH1icmlnaHQuc3ZnIyR7dGhpcy5pY29ufVwiIHN0eWxlPVwiZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7XCI+PC91c2U+PC9zdmc+XG4gICAgICAgIGA7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1pY29uXCIsIEJyaWdodEljb24pO1xuXG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRUZXh0QXJlYSBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIC8vIHRoaXMgaXMgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGNvbXBvbmVudFxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi9tb3JlLWNhcGFibGUtZm9ybS1jb250cm9scy8gXG4gICAgc3RhdGljIGZvcm1Bc3NvY2lhdGVkID0gdHJ1ZTtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6dHJ1ZSB9LCBcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHR5cGU6Qm9vbGVhbiB9LCBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgbGFiZWw6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBwYXNzd29yZDogeyB0eXBlOkJvb2xlYW4gfSxcbiAgICAgICAgICAgIHR5cGU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlOyBcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAodmFsdWUgPT0gXCJudWxsXCIgfHwgdmFsdWUgPT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmludGVybmFsc18gPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbc2hhcmVkU3R5bGUsIGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cbiAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgIHdyYXAgeyB3aWR0aDoxMDAlOyBwYWRkaW5nOjBweDsgfVxuICAgICAgICB0ZXh0YXJlYSB7IHdpZHRoOjEwMCU7IG1hcmdpbjowcHggMHB4IC00cHggMHB4OyBtYXgtd2lkdGg6MTAwJTsgcmVzaXplOnZlcnRpY2FsOyAgfVxuICAgIGBdO1xuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IHBhcnQ9XCJ3cmFwXCIgaWQ9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgcGFydD1cImxhYmVsXCIgZm9yPVwiJHt0aGlzLm5hbWV9XCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGFydD1cImlucHV0XCIgdHlwZT1cIiR7dGhpcy50eXBlfVwiIG5hbWU9XCIke3RoaXMubmFtZX1cIiBAaW5wdXQ9XCIke3RoaXMudmFsdWVJbnB1dH1cIiBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBcIlwifVwiPiR7dGhpcy5fdmFsdWV9PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC12YWxpZGF0YWJsZVwiLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLCBcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB2YWx1ZUlucHV0KCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlIH0pKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5fdmFsdWUgPT0gXCJcIikgdmFsaWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWQgPyBcIlwiIDogXCJyZXF1aXJlZCBmaWVsZFwiKTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWxpZCA9IHZhbGlkOyBcbiAgICAgICAgcmV0dXJuIHZhbGlkOyBcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtdGV4dGFyZWFcIiwgQnJpZ2h0VGV4dEFyZWEpO1xuXG5leHBvcnQgY2xhc3MgQnJpZ2h0SW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAvLyB0aGlzIGlzIGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBjb21wb25lbnRcbiAgICAvLyBodHRwczovL3dlYi5kZXYvbW9yZS1jYXBhYmxlLWZvcm0tY29udHJvbHMvIFxuICAgIHN0YXRpYyBmb3JtQXNzb2NpYXRlZCA9IHRydWU7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOnRydWUgfSwgXG4gICAgICAgICAgICByZXF1aXJlZDogeyB0eXBlOkJvb2xlYW4gfSwgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIGxhYmVsOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHsgdHlwZTpCb29sZWFuIH0sXG4gICAgICAgICAgICB0eXBlOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgbmFtZTogeyB0eXBlOlN0cmluZyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWx1ZTsgXG4gICAgfVxuXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gKHZhbHVlID09IFwibnVsbFwiIHx8IHZhbHVlID09IFwidW5kZWZpbmVkXCIgfHwgdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQpID8gXCJcIiA6IHZhbHVlO1xuICAgICAgICB0aGlzLmludGVybmFsc18uc2V0Rm9ybVZhbHVlKHRoaXMuX3ZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfID0gdGhpcy5hdHRhY2hJbnRlcm5hbHMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gW3NoYXJlZFN0eWxlLCBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgYm94LXNpemluZzpib3JkZXItYm94OyB9XG4gICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICB3cmFwIHsgd2lkdGg6MTAwJTsgfVxuICAgIGBdO1xuXG4gICAgcmVuZGVyKCkgeyBcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IHBhcnQ9XCJ3cmFwXCIgaWQ9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgcGFydD1cImxhYmVsXCIgZm9yPVwiJHt0aGlzLm5hbWV9XCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYH1cbiAgICAgICAgICAgICAgICA8aW5wdXQgcGFydD1cImlucHV0XCIgdHlwZT1cIiR7dGhpcy50eXBlfVwiIG5hbWU9XCIke3RoaXMubmFtZX1cIiBAaW5wdXQ9XCIke3RoaXMudmFsdWVJbnB1dH1cIiBwbGFjZWhvbGRlcj1cIiR7dGhpcy5wbGFjZWhvbGRlciA/IHRoaXMucGxhY2Vob2xkZXIgOiBcIlwifVwiIC52YWx1ZT1cIiR7dGhpcy5fdmFsdWV9XCI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC12YWxpZGF0YWJsZVwiLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLCBcbiAgICAgICAgICAgIGNvbXBvc2VkOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB2YWx1ZUlucHV0KCkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuaW5wdXQudmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlIH0pKTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGhpcy5fdmFsdWUgPT0gXCJcIikgdmFsaWQgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWQgPyBcIlwiIDogXCJyZXF1aXJlZCBmaWVsZFwiKTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWxpZCA9IHZhbGlkOyBcbiAgICAgICAgcmV0dXJuIHZhbGlkOyBcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtaW5wdXRcIiwgQnJpZ2h0SW5wdXQpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlnaHRUb2FzdCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAjd3JhcCB7IHBvc2l0aW9uOmZpeGVkOyBvcGFjaXR5OjA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC41czsgdG9wOjA7IHJpZ2h0OjA7IGxlZnQ6MDsgYm90dG9tOjA7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyBkaXNwbGF5Om5vbmU7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgei1pbmRleDoxMDAwMDsgfVxuICAgICAgICAgICAgICAgICNtZXNzYWdlQm94IHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib2R5LWludmVyc2UpOyBtYXgtd2lkdGg6NDIwcHg7IGJvcmRlci1yYWRpdXM6M3B4OyBjb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBwYWRkaW5nOjMycHg7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJtZXNzYWdlQm94XCI+JHt0aGlzLm1lc3NhZ2V9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBzdGF0aWMgc2hvdyhtZXNzYWdlKSB7XG4gICAgICAgIC8vIGV4cG9ydCByZXNvbHZlIGFuZCByZWplY3QgdG8gdGhlIGV2ZW50XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJicmlnaHQtdG9hc3RcIiwge1xuICAgICAgICAgICAgICAgIGNvbXBvc2VkOnRydWUsIFxuICAgICAgICAgICAgICAgIGJ1YmJsZXM6dHJ1ZSwgXG4gICAgICAgICAgICAgICAgZGV0YWlsOiB7IFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLCBcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZSwgXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdDogcmVqZWN0IH1cbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpczsgXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IFwiVGVzdCB0b2FzdFwiO1xuICAgICAgICB0aGlzLm9uVG9hc3QgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAvLyB1bnBhY2sgcmVzb2x2ZSBhbmQgcmVqZWN0IGFuZCBzaG93IGRpYWxvZ1xuICAgICAgICAgICAgc2VsZi5yZXNvbHZlID0gZS5kZXRhaWwucmVzb2x2ZTsgXG4gICAgICAgICAgICBzZWxmLm1lc3NhZ2UgPSBlLmRldGFpbC5tZXNzYWdlOyBcbiAgICAgICAgICAgIHZhciB3cmFwID0gc2VsZi5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwid3JhcFwiKTtcbiAgICAgICAgICAgIHdyYXAuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgd3JhcC5zdHlsZS5vcGFjaXR5ID0gXCIxLjBcIjtcbiAgICAgICAgICAgIHNlbGYucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3JhcC5zdHlsZS5vcGFjaXR5ID0gXCIwLjBcIjtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JyaWdodC10b2FzdCcsIHRoaXMub25Ub2FzdCk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdicmlnaHQtdG9hc3QnLCB0aGlzLm9uVG9hc3QpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtdG9hc3RcIiwgQnJpZ2h0VG9hc3QpO1xuXG5jbGFzcyBCcmlnaHRGaWVsZCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IHsgdHlwZTogU3RyaW5nIH0sIFxuICAgICAgICAgICAgaWNvbjogeyB0eXBlOiBTdHJpbmcgfSwgXG4gICAgICAgICAgICBub3RleHQ6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICB3cmFwOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbGxpcHNpemVTdHlsZSA9IHsgbWluV2lkdGg6XCIwcHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiIH07XG4gICAgICAgIGNvbnN0IG5vcm1hbFN0eWxlID0geyB9O1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICAjY29udGVudCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICAuZWxsaXBzaXMgeyBtaW4td2lkdGg6MHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgICAgICAgICAgIGxhYmVsIHsgZGlzcGxheTpibG9jazsgdGV4dC10cmFuc2Zvcm06dmFyKC0tbGFiZWwtdGV4dC10cmFuc2Zvcm0pOyBmb250OnZhcigtLWxhYmVsLWZvbnQpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgJHsodGhpcy5sYWJlbCA9PSB1bmRlZmluZWQpID8gaHRtbGBgIDogaHRtbGA8bGFiZWwgZm9yPVwiY29udGVudFwiPiR7dGhpcy5sYWJlbH08L2Rpdj5gfVxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cIiR7dGhpcy53cmFwID8gXCJ3cmFwcGVkXCIgOiBcImVsbGlwc2lzXCJ9XCI+PHNsb3Q+PC9zbG90PiR7dGhpcy5ub3RleHR9PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHRoZSBzbG90IGNoYW5nZSBldmVudCBmaXJlcyB3aGVuIG5ldyBjaGlsZCBub2RlcyBhcmUgYWRkZWQgdG8gdGhlIHNsb3RcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICAgICAgc2VsZi5ub2RlcyA9IGUudGFyZ2V0LmFzc2lnbmVkTm9kZXMoKTtcbiAgICAgICAgICAgIHNlbGYubm9UZXh0ID0gc2VsZi5oYXNUZXh0KHRoaXMubm9kZXMpID8gXCJcIiA6IFwiTm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhlIG11dGF0aW9uIG9ic2VydmVyIGZpcmVzIHdoZW4gdGV4dCBpbnNpZGUgY2hpbGQgbm9kZXMgaXMgdXBkYXRlZFxuICAgICAgICBjb25zdCBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xuICAgICAgICAgICAgc2VsZi5ub1RleHQgPSBzZWxmLmhhc1RleHQoc2VsZi5ub2RlcykgPyBcIlwiIDogXCJOb25lXCI7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgaGFzVGV4dChub2Rlcykge1xuICAgICAgICB2YXIgcGF0ID0gL1xcdy87XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocGF0LnRlc3Qobm9kZXNbaV0udGV4dENvbnRlbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmKG5vZGVzW2ldLmNoaWxkTm9kZXMgJiYgdGhpcy5oYXNUZXh0KG5vZGVzW2ldLmNoaWxkTm9kZXMpKSByZXR1cm4gdHJ1ZTsgXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1maWVsZFwiLCBCcmlnaHRGaWVsZCk7XG5cbmNsYXNzIEJyaWdodFRhYnMgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXg6IHsgdHlwZTpOdW1iZXIgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7IFxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSAwO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgI3dyYXAgeyBkaXNwbGF5OmZsZXg7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLWJvZHktaW52ZXJzZSk7IGZvbnQ6dmFyKC0tYnV0dG9uLWZvbnQpOyAgIH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoZGl2KSB7IGZsZXg6MSAxIDgwcHg7IGNvbG9yOnZhcigtLWJvZHktY29sb3IpOyBkaXNwbGF5OmZsZXg7IHRyYW5zaXRpb246YmFja2dyb3VuZCAuNnM7ICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzp2YXIoLS1idXR0b24tcGFkZGluZyk7IHRleHQtdHJhbnNmb3JtOnZhcigtLWJ1dHRvbi10ZXh0LXRyYW5zZm9ybSk7IGN1cnNvcjpwb2ludGVyOyB1c2VyLXNlbGVjdDpub25lOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoZGl2OmhvdmVyKSB7IGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9keS1pbnZlcnNlKTsgY29sb3I6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIDo6c2xvdHRlZChkaXYudW5zZWxlY3RlZCkgeyBib3JkZXItYm90dG9tOjRweCBzb2xpZCB0cmFuc3BhcmVudDsgfSAgICBcbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoZGl2LnNlbGVjdGVkKSB7IGJvcmRlci1ib3R0b206NHB4IHNvbGlkIHZhcigtLWJvZHktaW52ZXJzZSk7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdmFyIHRhYnMgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0YWJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YWJzW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRhYnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZS5jdXJyZW50VGFyZ2V0ID09IHRhYnNbal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0ZWRJbmRleCAhPSBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNbal0uY2xhc3NOYW1lID0gXCJzZWxlY3RlZFwiO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFic1tqXS5jbGFzc05hbWUgPSBcInVuc2VsZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGFic1tpXS5jbGFzc05hbWUgPShpID09IHRoaXMuc2VsZWN0ZWRJbmRleCkgPyBcInNlbGVjdGVkXCIgOiBcInVuc2VsZWN0ZWRcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC10YWJzXCIsIEJyaWdodFRhYnMpO1xuXG5jbGFzcyBCcmlnaHRDYXJkIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kU3JjOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6XCJiYWNrZ3JvdW5kLXNyY1wiIH0sIFxuICAgICAgICAgICAganVzdGlmeUZvb3RlcjogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOlwianVzdGlmeS1mb290ZXJcIiB9LCBcbiAgICAgICAgICAgIGp1c3RpZnlIZWFkZXI6IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTpcImp1c3RpZnktaGVhZGVyXCIgfSwgXG4gICAgICAgICAgICBsb2FkaW5nOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuanVzdGlmeUZvb3RlciA9IFwiZmxleC1lbmRcIjtcbiAgICAgICAgdGhpcy5qdXN0aWZ5SGVhZGVyID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6ZmxleDsgcG9zaXRpb246cmVsYXRpdmU7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgYm94LXNpemluZzpib3JkZXItYm94OyBnYXA6MzJweDsgcGFkZGluZzozMnB4OyBhbGlnbi1pdGVtczpzdHJldGNoOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGJveC1zaGFkb3c6dmFyKC0tc2hhZG93KTsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHt0aGlzLmJhY2tncm91bmRTcmN9KTsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgICNib2R5IHsgb3ZlcmZsb3cteTphdXRvOyBmbGV4OjEgMSBhdXRvOyB9XG4gICAgICAgICAgICAgICAgI2Zvb3RlciB7IGRpc3BsYXk6bm9uZTsgcG9zaXRpb246cmVsYXRpdmU7IGp1c3RpZnktY29udGVudDoke3RoaXMuanVzdGlmeUZvb3Rlcn07IGFsaWduLWl0ZW1zOmNlbnRlcjsgZmxleC13cmFwOndyYXA7IGdhcDo0cHg7IGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IH1cbiAgICAgICAgICAgICAgICAjaGVhZGVyIHsgZGlzcGxheTpub25lOyBqdXN0aWZ5LWNvbnRlbnQ6JHt0aGlzLmp1c3RpZnlIZWFkZXJ9OyBhbGlnbi1pdGVtczpjZW50ZXI7IGZsZXgtd3JhcDp3cmFwOyBnYXA6NHB4OyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB9XG4gICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgd2lkdGg6NnB4OyB9IFxuICAgICAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBjb2xvcjpyZWQ7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1pbnZlcnNlKTsgYm9yZGVyLXJhZGl1czozcHg7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoKikgeyBtYXJnaW4tdG9wOjBweCAhaW1wb3J0YW50OyBtYXJnaW4tYm90dG9tOjBweCAhaW1wb3J0YW50OyB9XG4gICAgICAgICAgICAgICAgYnJpZ2h0LXByb2dyZXNzIHsgcG9zaXRpb246YWJzb2x1dGU7IGJvdHRvbTowcHg7IGxlZnQ6MHB4OyB3aWR0aDoxMDAlOyAgfVxuICAgICAgICAgICAgICAgICNibG9ja2VyIHsgZGlzcGxheToke3RoaXMubG9hZGluZz9cImJsb2NrXCI6XCJub25lXCJ9OyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjBweDsgbGVmdDowcHg7IHJpZ2h0OjBweDsgYm90dG9tOjBweDsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBvcGFjaXR5OjAuNTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImhlYWRlclwiIGlkPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiIEBzbG90Y2hhbmdlPVwiJHt0aGlzLnNsb3RDaGFuZ2V9XCI+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHBhcnQ9XCJib2R5XCIgaWQ9XCJib2R5XCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHBhcnQ9XCJmb290ZXJcIiBpZD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJibG9ja2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiIEBzbG90Y2hhbmdlPVwiJHt0aGlzLnNsb3RDaGFuZ2V9XCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnJpZ2h0LXByb2dyZXNzID92aXNpYmxlPVwiJHt0aGlzLmxvYWRpbmd9XCI+PC9icmlnaHQtcHJvZ3Jlc3M+XG4gICAgICAgIGA7IFxuICAgIH1cblxuICAgIHNsb3RDaGFuZ2UoZSkge1xuICAgICAgICBjb25zdCBjaGlsZE5vZGVzID0gZS50YXJnZXQuYXNzaWduZWROb2Rlcyh7ZmxhdHRlbjogdHJ1ZX0pO1xuICAgICAgICBpZihjaGlsZE5vZGVzLmxlbmd0aCA+IDApIGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtY2FyZFwiLCBCcmlnaHRDYXJkKTtcblxuXG5jbGFzcyBCcmlnaHREaWFsb2cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbc2hhcmVkU3R5bGUsIGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5Om5vbmU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYWxpZ24taXRlbXM6Y2VudGVyOyBoZWlnaHQ6MTAwJTsgd2lkdGg6MTAwJTsgcG9zaXRpb246Zml4ZWQ7IHRvcDowOyBsZWZ0OjA7IHotaW5kZXg6MTAwMDA7IGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjcpOyB9XG4gICAgICAgIGJyaWdodC1jYXJkIHsgbWF4LXdpZHRoOjUwMHB4OyBtYXgtaGVpZ2h0OjkwJTsgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgICAgIDpob3N0IHsgbWF4LWhlaWdodDoxMDAlOyBtYXgtd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgYnJpZ2h0LWNhcmQgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgbWluLWhlaWdodDoxMDAlOyBtaW4td2lkdGg6MTAwJTsgIG1heC1oZWlnaHQ6MTAwJTsgbWF4LXdpZHRoOjEwMCU7ICB9XG4gICAgICAgIH1cbiAgICBgXTtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBsb2FkaW5nOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxicmlnaHQtY2FyZCBwYXJ0PVwiY2FyZFwiID9sb2FkaW5nPVwiJHt0aGlzLmxvYWRpbmd9XCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIiBzbG90PVwiZm9vdGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9icmlnaHQtY2FyZD5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1kaWFsb2dcIiwgQnJpZ2h0RGlhbG9nKVxuXG5jbGFzcyBCcmlnaHRTZWN0aW9uIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgICAgICAgICAgaXRlbXdpZHRoOiB7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOiBcIml0ZW0td2lkdGhcIiB9LFxuICAgICAgICAgICAgaXRlbWhlaWdodDogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpdGVtLWhlaWdodFwiIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgd2lkdGg6MTAwJTsgYm94LXNpemluZzpib3JkZXItYm94OyBiYWNrZ3JvdW5kLWltYWdlOnVybCgke3RoaXMuYmFja2dyb3VuZH0pOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyAgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGRpdiB7IG1hcmdpbjphdXRvOyBoZWlnaHQ6MTAwJTsgZGlzcGxheTpmbGV4OyBmbGV4LXdyYXA6d3JhcDsgbWF4LXdpZHRoOnZhcigtLWNvbnRlbnQtd2lkdGgpOyBhbGlnbi1pdGVtczpzdHJldGNoOyBhbGlnbi1jb250ZW50OmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjMycHg7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoKikgeyBmbGV4OjEgMSBhdXRvOyBtYXgtd2lkdGg6JHt0aGlzLml0ZW13aWR0aH07IGhlaWdodDoke3RoaXMuaXRlbWhlaWdodH0gfVxuXG4gICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpdiB7IHBhZGRpbmc6MTZweCAhaW1wb3J0YW50OyBnYXA6MTZweCAhaW1wb3J0YW50OyAgfVxuICAgICAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoKikgeyBmbGV4OiAxIDEgYXV0bzsgbWF4LXdpZHRoOjEwMCU7IH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgOyBcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LXNlY3Rpb25cIiwgQnJpZ2h0U2VjdGlvbik7XG5cbmNsYXNzIEJyaWdodExpZ2h0Ym94IGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6XCJzcmNcIiB9LCBcbiAgICAgICAgICAgIGNhcHRpb246IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTpcImNhcHRpb25cIn0sIFxuICAgICAgICAgICAgcGFnaW5nOiB7IHR5cGU6Qm9vbGVhbiwgYXR0cmlidXRlOlwicGFnaW5nXCIgfSwgXG4gICAgICAgICAgICBjdXJyZW50OiB7IHR5cGU6T2JqZWN0IH0gLy8gY3VycmVudCBpbWcgb3IgZmlndXJlIGNoaWxkIG9mIHRoZSBsaWdodGJveFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnBhZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6bm9uZTsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IHRvcDowcHg7IGxlZnQ6MHB4OyB6LWluZGV4OjEwMDsgYm94LXNpemluZzpib3JkZXItYm94OyBwb3NpdGlvbjpmaXhlZDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJhY2tncm91bmQtY29sb3I6YmxhY2s7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICBpbWcgeyBtYXgtaGVpZ2h0OjkwJTsgbWF4LXdpZHRoOjEwMCU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgdXNlci1zZWxlY3Q6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGRpdiB7IGNvbG9yOndoaXRlOyBwYWRkaW5nOjE2cHg7IH1cbiAgICAgICAgICAgICAgICBicmlnaHQtaWNvbiB7IGhlaWdodDozMnB4OyB3aWR0aDozMnB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgZmlsbDp3aGl0ZTsgZmlsdGVyOiBkcm9wLXNoYWRvdygxcHggMXB4IDNweCAjMDAwMDAwKTsgfVxuICAgICAgICAgICAgICAgICNjbG9zZWljb24geyB0b3A6MTZweDsgcmlnaHQ6MTZweDsgei1pbmRleDoxNTA7IH1cbiAgICAgICAgICAgICAgICAjbmV4dGljb24geyByaWdodDoxNnB4OyB0b3A6NTAlOyB6LWluZGV4OjE1MDsgdHJhbnNsYXRlOjBweCAtNTAlOyBkaXNwbGF5OiR7IHRoaXMucGFnaW5nICYmIHRoaXMuaGFzTmV4dCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiIH07IH1cbiAgICAgICAgICAgICAgICAjcHJldmljb24geyBsZWZ0OjE2cHg7IHRvcDo1MCU7IHotaW5kZXg6MTUwOyB0cmFuc2xhdGU6MHB4IC01MCU7IGRpc3BsYXk6JHsgdGhpcy5wYWdpbmcgJiYgdGhpcy5oYXNQcmV2ID8gXCJibG9ja1wiIDogXCJub25lXCIgfTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpZD1cImNsb3NlaWNvblwiIGljb249XCJjbGVhclwiIEBjbGljaz1cIiR7dGhpcy5jbG9zZUNsaWNrfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJuZXh0aWNvblwiIGljb249XCJhcnJvdy1mb3J3YXJkXCIgQGNsaWNrPVwiJHt0aGlzLm5leHRDbGlja31cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGlkPVwicHJldmljb25cIiBpY29uPVwiYXJyb3ctYmFja1wiIEBjbGljaz1cIiR7dGhpcy5wcmV2Q2xpY2t9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLnNyY31cIi8+XG4gICAgICAgICAgICA8ZGl2PiR7dGhpcy5jYXB0aW9ufTwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5pbWcgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICB9XG5cbiAgICBzaG93KGVsZSkge1xuICAgICAgICB0aGlzLmxvYWQoZWxlKTtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCJcbiAgICAgICAgdGhpcy5hbmltYXRlKFsgXG4gICAgICAgICAgICB7IG9wYWNpdHk6MCB9LFxuICAgICAgICAgICAgeyBvcGFjaXR5OjEgfSBcbiAgICAgICAgXSwgeyBkdXJhdGlvbjozMDAsIGVhc2luZzonZWFzZS1vdXQnLCBmaWxsOiAnYm90aCcgfSApO1xuICAgIH1cblxuICAgIGxvYWQoZWxlKSB7XG4gICAgICAgIHRoaXMuY2FwdGlvbiA9IGVsZS5nZXRBdHRyaWJ1dGUoXCJ0aXRsZVwiKTsgXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGVsZTsgXG4gICAgICAgIHRoaXMuc3JjID0gZWxlLnNyYzsgXG4gICAgICAgIHRoaXMuaGFzTmV4dCA9IHRoaXMuY3VycmVudC5uZXh0RWxlbWVudFNpYmxpbmcgIT0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNQcmV2ID0gdGhpcy5jdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcgIT0gbnVsbDtcbiAgICB9XG5cbiAgICBjbG9zZUNsaWNrKCkge1xuICAgICAgICB0aGlzLmFuaW1hdGUoWyBcbiAgICAgICAgICAgIHsgb3BhY2l0eToxIH0sXG4gICAgICAgICAgICB7IG9wYWNpdHk6MCB9IFxuICAgICAgICBdLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLW91dCcsIGZpbGw6ICdib3RoJyB9ICkub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBuZXh0Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW1nLmFuaW1hdGUoWyB7IHRyYW5zZm9ybTondHJhbnNsYXRlWCgtNTAlKScsIG9wYWNpdHk6MCB9XSwgeyBkdXJhdGlvbjozMDAsIGVhc2luZzonZWFzZS1vdXQnLCBmaWxsOiAnYm90aCcgfSApLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuY3VycmVudC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdGhpcy5pbWcuYW5pbWF0ZShbIFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVYKDUwJSknLCBvcGFjaXR5OjAgfSxcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTondHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6MSB9IFxuICAgICAgICAgICAgXSwgeyBkdXJhdGlvbjozMDAsIGVhc2luZzonZWFzZS1pbicsIGZpbGw6ICdib3RoJyB9ICk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcHJldkNsaWNrKCkge1xuICAgICAgICB0aGlzLmltZy5hbmltYXRlKFsgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoNTAlKScsIG9wYWNpdHk6MCB9XSwgeyBkdXJhdGlvbjozMDAsIGVhc2luZzonZWFzZS1vdXQnLCBmaWxsOiAnYm90aCcgfSApLm9uZmluaXNoID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkKHRoaXMuY3VycmVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcbiAgICAgICAgICAgIHRoaXMuaW1nLmFuaW1hdGUoWyBcbiAgICAgICAgICAgICAgICB7IHRyYW5zZm9ybTondHJhbnNsYXRlWCgtNTAlKScsIG9wYWNpdHk6MCB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVYKDApJywgb3BhY2l0eToxIH0gXG4gICAgICAgICAgICBdLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLWluJywgZmlsbDogJ2JvdGgnIH0gKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtbGlnaHRib3hcIiwgQnJpZ2h0TGlnaHRib3gpO1xuXG5jbGFzcyBCcmlnaHRHYWxsZXJ5R3JpZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHJlc2l6ZXIgPSBuZXcgUmVzaXplQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICB0ZW1wbGF0ZTogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOlwidGVtcGxhdGVcIiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgOmhvc3QgeyB3aWR0aDoxMDAlOyBkaXNwbGF5OmdyaWQ7IGJveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KG1pbi1jb250ZW50KTsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7IGFsaWduLWl0ZW1zOnN0cmV0Y2g7IGdhcDo4cHg7IH1cbiAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKCopIHsgd2lkdGg6MTAwJTsgYm94LXNpemluZzpib3JkZXItYm94OyBvYmplY3QtZml0OmNvbnRhaW47IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHNsb3QgQGNsaWNrPVwiJHt0aGlzLml0ZW1DbGlja31cIj48L3Nsb3Q+XG4gICAgICAgIDxicmlnaHQtbGlnaHRib3g+PC9icmlnaHQtbGlnaHRib3g+XG4gICAgICAgIGA7IFxuICAgIH1cblxuICAgIGl0ZW1DbGljayhlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiYnJpZ2h0LWxpZ2h0Ym94XCIpLnNob3coZS5zcmNFbGVtZW50KTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWdhbGxlcnktZ3JpZFwiLCBCcmlnaHRHYWxsZXJ5R3JpZCk7XG5cbmNsYXNzIEJyaWdodEdhbGxlcnlTY3JvbGxlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHJlc2l6ZXIgPSBuZXcgUmVzaXplQ29udHJvbGxlcih0aGlzKTtcbiAgICBcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpdGVtd2lkdGg6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6XCJpdGVtLXdpZHRoXCIgfSwgXG4gICAgICAgICAgICBnYXA6IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTpcImdhcFwiIH0sIFxuICAgICAgICAgICAgX2luZGV4OiB7IHR5cGU6TnVtYmVyIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtd2lkdGggPSBcIjMwJVwiLCBcbiAgICAgICAgdGhpcy5nYXAgPSBcIjUlXCJcbiAgICAgICAgdGhpcy5faW5kZXggPSAwOyBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IHdpZHRoOjEwMCU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgcG9zaXRpb246cmVsYXRpdmU7ICB9XG4gICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICNtYWluIHsgbWF4LXdpZHRoOnZhcigtLWNvbnRlbnQtd2lkdGgpOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0OyBnYXA6JHt0aGlzLmdhcH07IG92ZXJmbG93LXg6c2Nyb2xsOyB9XG4gICAgICAgICAgICA6OnNsb3R0ZWQoaW1nKSB7IHdpZHRoOiR7dGhpcy5pdGVtd2lkdGh9OyBtYXgtd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgICAgICAgICNtYWluIHsgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IH1cbiAgICAgICAgICAgICNwcmV2LCAjbmV4dCB7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6NTAlO3RyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNTAlKTsgaGVpZ2h0OjMycHg7IHdpZHRoOjMycHg7IGZpbGw6d2hpdGU7IGZpbHRlcjogZHJvcC1zaGFkb3coM3B4IDNweCAycHggIzAwMDAwMCk7IH1cbiAgICAgICAgICAgICNwcmV2IHsgbGVmdDozMnB4OyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICNuZXh0IHsgcmlnaHQ6MzJweDsgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJwcmV2XCIgQGNsaWNrPVwiJHt0aGlzLnByZXZ9XCIgaWNvbj1cImFycm93LWJhY2tcIj48L2JyaWdodC1pY29uPlxuICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJuZXh0XCIgQGNsaWNrPVwiJHt0aGlzLm5leHR9XCIgaWNvbj1cImFycm93LWZvcndhcmRcIj48L2JyaWdodC1pY29uPlxuICAgICAgICA8ZGl2IGlkPVwibWFpblwiPlxuICAgICAgICAgICAgPHNsb3QgQGNsaWNrPVwiJHt0aGlzLml0ZW1DbGlja31cIj48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnJpZ2h0LWxpZ2h0Ym94PjwvYnJpZ2h0LWxpZ2h0Ym94PlxuICAgICAgICBgOyBcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICB0aGlzLmltZ3MgPSBzbG90LmFzc2lnbmVkRWxlbWVudHMoe2ZsYXR0ZW46IHRydWV9KTtcbiAgICAgICAgdGhpcy5wcmV2SWNvbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZcIik7XG4gICAgICAgIHRoaXMubmV4dEljb24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNuZXh0XCIpO1xuICAgICAgICB0aGlzLmluaXRTY3JvbGxlcigpOyBcbiAgICB9XG5cbiAgICBhc3luYyBpbml0U2Nyb2xsZXIoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMudXBkYXRlQ29tcGxldGU7IFxuICAgICAgICB2YXIgZ2FsbGVyeSA9IHRoaXMub2Zmc2V0V2lkdGg7XG4gICAgICAgIHZhciBpbWcgPSB0aGlzLmltZ3NbMF0ud2lkdGg7XG4gICAgICAgIHZhciBtYWluID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpblwiKTtcbiAgICAgICAgaWYoaW1nID4gZ2FsbGVyeSkge1xuICAgICAgICAgICAgdmFyIHRvd2lkdGggPSAoaW1nLWdhbGxlcnkpO1xuICAgICAgICAgICAgbWFpbi5zY3JvbGxUbyh0b3dpZHRoLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIGlmKHRoaXMuX2luZGV4IDwgdGhpcy5pbWdzLmxlbmd0aC0xKSB0aGlzLl9pbmRleCsrO1xuICAgICAgICB0aGlzLnNjcm9sbCgpO1xuICAgIH1cblxuICAgIHByZXYoKSB7XG4gICAgICAgIGlmKHRoaXMuX2luZGV4ID4gMCkgdGhpcy5faW5kZXgtLTtcbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG5cbiAgICBzY3JvbGwoKSB7XG4gICAgICAgIHRoaXMubmV4dEljb24uc3R5bGUuZGlzcGxheSA9ICh0aGlzLl9pbmRleCA9PSB0aGlzLmltZ3MubGVuZ3RoLTEpID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICAgIHRoaXMucHJldkljb24uc3R5bGUuZGlzcGxheSA9ICh0aGlzLl9pbmRleCA9PSAwKSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB0aGlzLmltZ3NbdGhpcy5faW5kZXhdLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ25lYXJlc3QnLCBpbmxpbmU6ICdjZW50ZXInIH0pO1xuICAgIH1cblxuICAgIGl0ZW1DbGljayhlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiYnJpZ2h0LWxpZ2h0Ym94XCIpLnNob3coZS5zcmNFbGVtZW50KTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWdhbGxlcnktc2Nyb2xsZXJcIiwgQnJpZ2h0R2FsbGVyeVNjcm9sbGVyKTtcblxuXG5jbGFzcyBCcmlnaHRFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICAvLyB0aGlzIGlzIGEgZm9ybS1hc3NvY2lhdGVkIGN1c3RvbSBjb21wb25lbnRcbiAgICAvLyBodHRwczovL3dlYi5kZXYvbW9yZS1jYXBhYmxlLWZvcm0tY29udHJvbHMvIFxuICAgIHN0YXRpYyBmb3JtQXNzb2NpYXRlZCA9IHRydWU7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgbGFiZWw6IHsgdHlwZTpTdHJpbmcgfSxcbiAgICAgICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH0sXG4gICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nIH1cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5lZGl0b3JSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLmludGVybmFsc18gPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IG1pbi13aWR0aDoxMDAlOyB9XG4gICAgICAgIGltZyB7IG1heC13aWR0aDogMTAwJTsgcmVzaXplO2JvdGg7IGhlaWdodDphdXRvOyB9XG4gICAgICAgICN0b29sYmFyIHsgZGlzcGxheTpmbGV4OyBnYXA6MnB4OyBmbGV4LXdyYXA6d3JhcDsganVzdGlmeS1jb250ZW50OnN0cmV0Y2g7IH1cbiAgICAgICAgI3Rvb2xiYXIgKiB7IGZsZXg6MSAxIGF1dG87IGJhY2tncm91bmQ6dmFyKC0tbGFiZWwtYmFja2dyb3VuZCk7IGZpbGw6dmFyKC0tbGFiZWwtaW52ZXJzZSk7IHBhZGRpbmc6NHB4OyAgfVxuICAgICAgICAjaHRtbHRleHQgeyBmbGV4OjEgMSBhdXRvOyB3aWR0aDoxMDAlOyBtaW4taGVpZ2h0OjE1MHB4OyBkaXNwbGF5OmJsb2NrOyAgYm94LXNpemluZzpib3JkZXItYm94OyBvdXRsaW5lOm5vbmU7IGJvcmRlcjp2YXIoLS1pbnB1dC1ib3JkZXIpO3BhZGRpbmc6dmFyKC0taW5wdXQtcGFkZGluZyk7ICB9XG4gICAgICAgICNlZGl0YWJsZSB7IGZsZXg6MSAxIGF1dG87IG1pbi1oZWlnaHQ6MTUwcHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgY3Vyc29yOnRleHQ7IGJhY2tncm91bmQ6dmFyKC0taW5wdXQtYmFja2dyb3VuZCk7cGFkZGluZzp2YXIoLS1pbnB1dC1wYWRkaW5nKTsgYm9yZGVyOnZhcigtLWlucHV0LWJvcmRlcik7IG91dGxpbmU6bm9uZTsgY29sb3I6dmFyKC0taW5wdXQtaW52ZXJzZSk7IGJvcmRlci1yYWRpdXM6dmFyKC0taW5wdXQtcmFkaXVzKTsgfVxuICAgICAgICBsYWJlbCB7IG1hcmdpbi1ib3R0b206MnB4OyBkaXNwbGF5OmJsb2NrOyBmb250OnZhcigtLWxhYmVsLWZvbnQpOyBiYWNrZ3JvdW5kOnZhcigtLWxhYmVsLWJhY2tncm91bmQpOyBjb2xvcjp2YXIoLS1sYWJlbC1pbnZlcnNlKTtwYWRkaW5nOnZhcigtLWxhYmVsLXBhZGRpbmcpOyB0ZXh0LXRyYW5zZm9ybTp2YXIoLS1sYWJlbC10ZXh0LXRyYW5zZm9ybSk7IH1cbiAgICBgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICR7dGhpcy5sYWJlbCA/IGh0bWxgPGxhYmVsIHBhcnQ9XCJsYWJlbFwiIGZvcj1cIiR7dGhpcy5uYW1lfVwiPiR7dGhpcy5sYWJlbH08L2xhYmVsPmAgOiBodG1sYGB9XG4gICAgICAgICAgICA8ZGl2IGlkPVwidG9vbGJhclwiIHBhcnQ9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJmb3JtYXQtYm9sZFwiIEBtb3VzZWRvd249XCIke3RoaXMub25Cb2xkfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJmb3JtYXQtaXRhbGljXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkl0YWxpY31cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwiZm9ybWF0LXVuZGVybGluZWRcIiBAbW91c2Vkb3duPVwiJHt0aGlzLm9uVW5kZXJsaW5lfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJpbnNlcnQtbGlua1wiIEBtb3VzZWRvd249XCIke3RoaXMub25MaW5rfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJ0aXRsZVwiIEBtb3VzZWRvd249XCIke3RoaXMub25IZWFkZXJ9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cImluc2VydC1waG90b1wiIEBtb3VzZWRvd249XCIke3RoaXMub25JbWFnZX1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwiZm9ybWF0LWFsaWduLWxlZnRcIiBAbW91c2Vkb3duPVwiJHt0aGlzLm9uTGVmdH1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwiZm9ybWF0LWFsaWduLWNlbnRlclwiIEBtb3VzZWRvd249XCIke3RoaXMub25DZW50ZXJ9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cImZvcm1hdC1hbGlnbi1yaWdodFwiIEBtb3VzZWRvd249XCIke3RoaXMub25SaWdodH1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwibW9kZS1lZGl0XCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbk1vZGV9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImVkaXRhYmxlXCIgY2xhc3M9XCJlZGl0YWJsZVwiIHBhcnQ9XCJlZGl0YWJsZVwiIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIiBAaW5wdXQ9XCIke3RoaXMub25JbnB1dH1cIj48L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImh0bWx0ZXh0XCIgbmFtZT1cIiR7dGhpcy5uYW1lfVwiIEBpbnB1dD1cIiR7dGhpcy5vblRleHRJbnB1dH1cIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPiR7dGhpcy52YWx1ZX08L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yUmVmID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdGFibGVcIik7XG4gICAgICAgIHRoaXMuZWRpdG9yUmVmLmlubmVySFRNTCA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25Nb2RlKCkge1xuICAgICAgICB0aGlzLl9lZGl0TW9kZSA9ICF0aGlzLl9lZGl0TW9kZTsgXG4gICAgICAgIHRoaXMuZWRpdG9yUmVmLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9lZGl0TW9kZSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNodG1sdGV4dFwiKS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZWRpdE1vZGUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcbiAgICB9XG5cbiAgICBvbklucHV0KCkge1xuICAgICAgICBpZiAodGhpcy5lZGl0b3JSZWYpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZWRpdG9yUmVmLmlubmVySFRNTDtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uVGV4dElucHV0KCkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5yZW5kZXJSb290LnF1ZXJ5U2VsZWN0b3IoXCIjaHRtbHRleHRcIikudmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgICAgIHRoaXMuZWRpdG9yUmVmLmlubmVySFRNTCA9IHRoaXMudmFsdWU7IFxuICAgIH1cblxuICAgIG9uQm9sZCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2JvbGQnLCBmYWxzZSwgbnVsbCk7XG4gICAgfVxuICAgIG9uSXRhbGljKCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnaXRhbGljJywgZmFsc2UsIG51bGwpO1xuICAgIH1cbiAgICBvblVuZGVybGluZSgpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ3VuZGVybGluZScsIGZhbHNlLCBudWxsKTtcbiAgICB9XG4gICAgb25MZWZ0KCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUxlZnQnLCBmYWxzZSwgbnVsbCk7XG4gICAgfVxuICAgIG9uQ2VudGVyKCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeUNlbnRlcicsIGZhbHNlLCBudWxsKTtcbiAgICB9XG4gICAgb25SaWdodCgpIHtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2p1c3RpZnlSaWdodCcsIGZhbHNlLCBudWxsKTtcbiAgICB9XG5cbiAgICBvbkxpbmsoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IHByb21wdChcIlVybCB0byBMaW5rXCIpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkNyZWF0ZUxpbmtcIiwgZmFsc2UsIGlucHV0KTtcbiAgICB9XG5cbiAgICBvbkhlYWRlcigpIHtcbiAgICAgICAgdmFyIHNlbGVjdGlvbiA9IHRoaXMucmVuZGVyUm9vdC5nZXRTZWxlY3Rpb24oKTtcbiAgICAgICAgdmFyIHJhbmdlID0gc2VsZWN0aW9uLmdldFJhbmdlQXQoMCk7XG4gICAgICAgIHZhciBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgcmFuZ2Uuc3Vycm91bmRDb250ZW50cyhoMSk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmVkaXRvclJlZi5pbm5lckhUTUw7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy52YWx1ZSk7XG4gICAgfVxuXG4gICAgb25JbWFnZSgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gcHJvbXB0KFwiVXJsIHRvIEltYWdlXCIpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcIkluc2VydEltYWdlXCIsIGZhbHNlLCBpbnB1dCk7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2JyaWdodC1lZGl0b3InLCBCcmlnaHRFZGl0b3IpO1xuICBcblxuY2xhc3MgQnJpZ2h0TG9hZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiB7IHR5cGU6IEJvb2xlYW4gfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHZpc2liaWxpdHk6JHt0aGlzLnZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9IH1cbiAgICAgICAgICAgIC53cmFwIHsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyAgfVxuICAgICAgICAgICAgc3ZnIHsgZmlsbDp2YXIoLS10ZXJ0aWFyeSk7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBcIiBzdHlsZT1cInZpc2liaWxpdHk6JHt0aGlzLnZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31cIj5cbiAgICAgICAgICAgIDxzdmcgaWQ9XCJsb2FkZXJcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMjQgMjQgNTAgNTBcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgdHlwZT1cInJvdGF0ZVwiIGR1cj1cIjFzXCIgZnJvbT1cIjAgNTAgNTBcInRvPVwiMzYwIDUwIDUwXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlxuICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtbG9hZGVyXCIsIEJyaWdodExvYWRlcik7XG5cbmNsYXNzIEJyaWdodFByb2dyZXNzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiB7IHR5cGU6IEJvb2xlYW4sIHJlZmxlY3Q6dHJ1ZSB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyB2aXNpYmlsaXR5OiR7dGhpcy52aXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicgfSB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgLnNsaWRlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyB3aWR0aDoxMDAlOyBoZWlnaHQ6NXB4OyBvdmVyZmxvdy14OiBoaWRkZW47IH1cbiAgICAgICAgICAgICAgICAubGluZSB7IHBvc2l0aW9uOmFic29sdXRlOyBvcGFjaXR5OiAwLjQ7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1pbnZlcnNlKTsgd2lkdGg6MTUwJTsgaGVpZ2h0OjVweDsgfVxuICAgICAgICAgICAgICAgIC5zdWJsaW5lIHsgcG9zaXRpb246YWJzb2x1dGU7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1pbnZlcnNlKTsgaGVpZ2h0OjVweDsgIH1cbiAgICAgICAgICAgICAgICAuaW5jIHsgYW5pbWF0aW9uOiBpbmNyZWFzZSAycyBpbmZpbml0ZTsgfVxuICAgICAgICAgICAgICAgIC5kZWMgeyBhbmltYXRpb246IGRlY3JlYXNlIDJzIDAuNXMgaW5maW5pdGU7IH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGluY3JlYXNlIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7IGxlZnQ6IC01JTsgd2lkdGg6IDUlOyB9XG4gICAgICAgICAgICAgICAgICAgIHRvIHsgbGVmdDogMTMwJTsgd2lkdGg6IDEwMCU7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGRlY3JlYXNlIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7IGxlZnQ6IC04MCU7IHdpZHRoOiA4MCU7IH1cbiAgICAgICAgICAgICAgICAgICAgdG8geyBsZWZ0OiAxMTAlOyB3aWR0aDogMTAlO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2xpZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdWJsaW5lIGluY1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibGluZSBkZWNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1wcm9ncmVzc1wiLCBCcmlnaHRQcm9ncmVzcyk7XG5cbmNsYXNzIEJyaWdodFNlbGVjdCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICByZXF1aXJlZDogeyB0eXBlOkJvb2xlYW4gfSwgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHRleHQ6IHsgdHlwZTpTdHJpbmcgfSxcbiAgICAgICAgICAgIGxhYmVsOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IFwiXCI7XG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbc2hhcmVkU3R5bGUsIGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBjdXJzb3I6cG9pbnRlcjsgYm94LXNpemluZzpib3JkZXItYm94OyB9XG4gICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAjd3JhcCB7IHBvc2l0aW9uOnJlbGF0aXZlOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IHdpZHRoOjEwMCU7IH1cbiAgICAgICAgaW5wdXQgeyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAjZHJvcGRvd24geyB6LWluZGV4OjEwOyBvdXRsaW5lOm5vbmU7IGNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlucHV0LWJhY2tncm91bmQpOyBkaXNwbGF5Om5vbmU7IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MzRweDsgbGVmdDowcHg7IHJpZ2h0OjBweDsgYm9yZGVyOnZhcigtLWlucHV0LWJvcmRlcik7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgI2Ryb3Bkb3duIDo6c2xvdHRlZCgqKSB7IHBhZGRpbmc6MTZweDsgfVxuICAgICAgICAjZHJvcGRvd24gOjpzbG90dGVkKCo6aG92ZXIpIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1pbnB1dC1pbnZlcnNlKTsgY29sb3I6dmFyKC0taW5wdXQtYmFja2dyb3VuZCk7IH1cbiAgICAgICAgI2ljb24geyBwb3NpdGlvbjphYnNvbHV0ZTsgaGVpZ2h0OjI0cHg7IHdpZHRoOjIwcHg7IHJpZ2h0OjRweDsgdG9wOjZweDsgZmlsbDpncmF5OyBwb2ludGVyLWV2ZW50czpub25lOyB9XG4gICAgYF07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAkeyB0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPiR7dGhpcy5sYWJlbH08L2xhYmVsPmAgOiBodG1sYGAgfVxuICAgICAgICA8ZGl2IGlkPVwid3JhcFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJpbnB1dFwiIHRhYmluZGV4PVwiLTFcIiBAbW91c2Vkb3duPVwiJHt0aGlzLmlucHV0TW91c2VEb3dufVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiLz5cbiAgICAgICAgICAgIDwhLS0gdGFiaW5kZXggbmVjZXNzYXJ5IGZvciBkaXYgdG8gZ2FpbiBmb2N1cyAtLT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiIEBibHVyPVwiJHt0aGlzLnNsb3RCbHVyfVwiIHRhYmluZGV4PVwiLTFcIj4gXG4gICAgICAgICAgICAgICAgPHNsb3QgQG1vdXNlZG93bj1cIiR7dGhpcy5zbG90TW91c2VEb3dufVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN2ZyB2aWV3Ym94PVwiMCAwIDI0IDI0XCIgaWQ9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJhcnJvdy1kcm9wLWRvd25cIj48cGF0aCBkPVwiTTcgMTBsNSA1IDUtNXpcIj48L3BhdGg+PC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93biA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImRyb3Bkb3duXCIpO1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiaW5wdXRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlOyBcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC12YWxpZGF0YWJsZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKTtcbiAgICB9XG5cbiAgICBpbnB1dE1vdXNlRG93bihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gKHRoaXMuZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzbG90Qmx1cihlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cblxuICAgIHNsb3RNb3VzZURvd24oZSkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICBpZih0aGlzLnZhbHVlID09IG51bGwpIHRoaXMuX3ZhbHVlID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgICAgICB0aGlzLmlucHV0LnZhbHVlID0gZS50YXJnZXQuaW5uZXJUZXh0OyBcbiAgICAgICAgdGhpcy50ZXh0ID0gZS50YXJnZXQuaW5uZXJUZXh0O1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiAodGhpcy5fdmFsdWUgPT0gXCJcIiB8fCB0aGlzLl92YWx1ZSA9PSB1bmRlZmluZWQpKSB2YWxpZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRDdXN0b21WYWxpZGl0eSh2YWxpZCA/IFwiXCIgOiBcInJlcXVpcmVkIGZpZWxkXCIpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbGlkID0gdmFsaWQ7IFxuICAgICAgICByZXR1cm4gdmFsaWQ7IFxuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtc2VsZWN0XCIsIEJyaWdodFNlbGVjdCk7XG5cbmNsYXNzIEJyaWdodERhdGVQaWNrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgZm9jdXNEYXk6IHsgdHlwZTpEYXRlIH0sIFxuICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICBtb2RlOiB7ICB0eXBlOk51bWJlciwgc3RhdGU6dHJ1ZSB9XG4gICAgfTtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbIHNoYXJlZFN0eWxlLCBjc3NgXG4gICAgICAgIDpob3N0IHsgfVxuICAgICAgICAuYnV0dG9ucyB7IGN1cnNvcjpwb2ludGVyOyBtYXJnaW46MnB4IDBweDsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7IGZpbGw6dmFyKC0tYnV0dG9uLWludmVyc2UpOyBwYWRkaW5nOjhweDsgZmxleDogMSAxIDIwMHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuICAgICAgICAudXAyIHsgZGlzcGxheTpmbGV4OyBnYXA6MnB4OyB9XG4gICAgICAgIC5ncmlkIHsgZGlzcGxheTpncmlkOyBoZWlnaHQ6MzAwcHg7IGdhcDoycHg7IGFsaWduLWl0ZW1zOnN0cmV0Y2g7IGp1c3RpZnktaXRlbXM6c3RyZXRjaDsgfVxuICAgICAgICAuZ3JpZCBkaXYgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuICAgICAgICAuZ3JpZCAudGggeyBjb2xvcjp2YXIoLS1sYWJlbC1jb2xvcik7IGJhY2tncm91bmQ6dmFyKC0tbGFiZWwtYmFja2dyb3VuZCk7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgLmdyaWQgLnRkIHsgY3Vyc29yOnBvaW50ZXI7IH1cbiAgICAgICAgLmdyaWQgLnRkOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7ICB9XG4gICAgYF07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mb2N1c0RheSA9IG5ldyBEYXRlOyBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgJHt0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgcGFydD1cImxhYmVsXCIgZm9yPVwiJHt0aGlzLm5hbWV9XCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cDJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7KCkgPT4ge3RoaXMubW9kZSA9IDF9fVwiPiR7dGhpcy5mb2N1c0RheS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7KCkgPT4ge3RoaXMubW9kZSA9IDJ9fVwiPiR7dGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuZ2V0VGVtcGxhdGUoKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cDJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7dGhpcy5iYWNrQ2xpY2t9XCI+PGJyaWdodC1pY29uIGljb249XCJhcnJvdy1iYWNrXCI+PC9icmlnaHQtaWNvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7dGhpcy5md3JkQ2xpY2t9XCI+PGJyaWdodC1pY29uIGljb249XCJhcnJvdy1mb3J3YXJkXCI+PC9icmlnaHQtaWNvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueWVhckdyaWQodGhpcy5mb2N1c0RheSk7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoR3JpZCgpO1xuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5R3JpZCh0aGlzLmZvY3VzRGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHllYXJHcmlkKHZhbHVlKSB7XG4gICAgICAgIHZhciB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKSAtIDEyO1xuICAgICAgICB2YXIgY2VsbHMgPSBbXTsgXG4gICAgICAgIGZvcih2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgeCA9IDA7IHggPCA1OyB4KyspIHtcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGh0bWxgPGRpdiBjbGFzcz1cInRkXCI+JHt5ZWFyfTwvZGl2PmApO1xuICAgICAgICAgICAgICAgIHllYXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgQGNsaWNrPVwiJHt0aGlzLnllYXJDbGlja31cIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmciAxZnIgMWZyOyBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmciAxZnIgMWZyIDFmcjtcIj5cbiAgICAgICAgICAgICAgICAke2NlbGxzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgbW9udGhHcmlkKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgQGNsaWNrPVwiJHt0aGlzLm1vbnRoQ2xpY2t9XCIgc3R5bGU9XCJncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgMWZyOyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1wiPlxuICAgICAgICAgICAgPGRpdiB2YWx1ZT1cIjBcIiBjbGFzcz1cInRkXCI+SmFuPC9kaXY+PGRpdiB2YWx1ZT1cIjFcIiBjbGFzcz1cInRkXCI+RmViPC9kaXY+PGRpdiB2YWx1ZT1cIjJcIiBjbGFzcz1cInRkXCI+TWFyPC9kaXY+PGRpdiB2YWx1ZT1cIjNcIiBjbGFzcz1cInRkXCI+QXByPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHZhbHVlPVwiNFwiIGNsYXNzPVwidGRcIj5NYXk8L2Rpdj48ZGl2IHZhbHVlPVwiNVwiIGNsYXNzPVwidGRcIj5KdW48L2Rpdj48ZGl2IHZhbHVlPVwiNlwiIGNsYXNzPVwidGRcIj5KdWw8L2Rpdj48ZGl2IHZhbHVlPVwiN1wiIGNsYXNzPVwidGRcIj5BdWc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdmFsdWU9XCI4XCIgY2xhc3M9XCJ0ZFwiPlNlcDwvZGl2PjxkaXYgdmFsdWU9XCI5XCIgY2xhc3M9XCJ0ZFwiPk9jdDwvZGl2PjxkaXYgdmFsdWU9XCIxMFwiIGNsYXNzPVwidGRcIj5Ob3Y8L2Rpdj48ZGl2IHZhbHVlPVwiMTEgY2xhc3M9XCJ0ZFwiXCI+RGVjPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBkYXlHcmlkKHZhbHVlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IERhdGVVdGlsLmZpcnN0T2ZXZWVrKERhdGVVdGlsLmZpcnN0T2ZNb250aCh2YWx1ZSkpOyBcbiAgICAgICAgbGV0IGRhdGUgPSBzdGFydDsgXG5cbiAgICAgICAgbGV0IGRheWNlbGxzID1bXTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCA2OyB4KyspIHsgICAgIFxuICAgICAgICAgICAgZm9yKHZhciB5ID0gMDsgeSA8IDc7IHkrKykge1xuICAgICAgICAgICAgICAgIGRheWNlbGxzLnB1c2goaHRtbGA8ZGl2IGNsYXNzPVwidGRcIiB2YWx1ZT1cIiR7ZGF0ZS50b0lTT1N0cmluZygpfVwiPiR7ZGF0ZS5nZXREYXRlKCl9PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cIiR7dGhpcy5kYXlDbGlja31cIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7IGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1wiIGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aFwiPlN1bjwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPk1vbjwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlR1ZTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPldlZDwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlRodTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPkZyaTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlNhdDwvZGl2PlxuICAgICAgICAgICAgICAgICR7ZGF5Y2VsbHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBiYWNrQ2xpY2soKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih0aGlzLmZvY3VzRGF5LmdldEZ1bGxZZWFyKCkgLSAyNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0RnVsbFllYXIodGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRGF5LnNldE1vbnRoKHRoaXMuZm9jdXNEYXkuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBmd3JkQ2xpY2soKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih0aGlzLmZvY3VzRGF5LmdldEZ1bGxZZWFyKCkgKyAyNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0RnVsbFllYXIodGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRGF5LnNldE1vbnRoKHRoaXMuZm9jdXNEYXkuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICB5ZWFyQ2xpY2soZSkge1xuICAgICAgICBsZXQgeXIgPSBOdW1iZXIoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih5cik7XG4gICAgICAgIHRoaXMubW9kZSA9IDA7XG4gICAgfVxuXG4gICAgbW9udGhDbGljayhlKSB7XG4gICAgICAgIGxldCBtbyA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0TW9udGgobW8pO1xuICAgICAgICB0aGlzLm1vZGUgPSAwOyBcbiAgICB9XG5cbiAgICBkYXlDbGljayhlKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZGF0ZXBpY2tlZFwiLCB7IGJ1YmJsZXM6dHJ1ZSwgY29tcG9zZWQ6dHJ1ZSwgZGV0YWlsOmRhdGUgfSkpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtZGF0ZXBpY2tcIiwgQnJpZ2h0RGF0ZVBpY2spO1xuXG5jbGFzcyBCcmlnaHREYXRlSW5wdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9XG4gICAgfSBcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgfVxuICAgICAgICBicmlnaHQtZGlhbG9nOjpwYXJ0KGNhcmQpIHsgd2lkdGg6NDAwcHg7IH1cbiAgICBgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxicmlnaHQtaW5wdXQgaWQ9XCJpbnB1dFwiIEBjbGljaz1cIiR7dGhpcy5pbnB1dENsaWNrfVwiIGxhYmVsPVwiJHt0aGlzLmxhYmVsfVwiPjwvYnJpZ2h0LWlucHV0PlxuICAgICAgICAgICAgPGJyaWdodC1kaWFsb2cgaWQ9XCJkaWFsb2dcIj5cbiAgICAgICAgICAgICAgICA8aDIgc2xvdD1cImhlYWRlclwiPlNlbGVjdCBBIERhdGU8L2gyPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtZGF0ZXBpY2sgQGRhdGVwaWNrZWQ9XCIke3RoaXMuZGF0ZVBpY2tlZH1cIj48L2JyaWdodC1kYXRlcGljaz5cbiAgICAgICAgICAgIDwvYnJpZ2h0LWRpYWxvZz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBkYXRlUGlja2VkKGUpIHtcbiAgICAgICAgdmFyIGRhdGUgPSBEYXRlVXRpbC5mb3JtYXRTaG9ydChlLmRldGFpbCk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0XCIpLnZhbHVlID0gZGF0ZTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nXCIpLmhpZGUoKTtcbiAgICB9XG5cbiAgICBpbnB1dENsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNkaWFsb2dcIikuc2hvdygpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtZGF0ZWlucHV0XCIsIEJyaWdodERhdGVJbnB1dClcblxuY2xhc3MgQnJpZ2h0VmlkZW8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgc3JjOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICBwb3N0ZXI6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIHZpZGVvIHsgbWF4LXdpZHRoOjEwMCU7IH1cbiAgICBgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDx2aWRlbyBAY2xpY2s9XCIke3RoaXMuY2xpY2t9XCIgc3JjPVwiJHt0aGlzLnNyY31cIiBjb250cm9scyBjb250cm9sc2xpc3Q9XCJub2Rvd25sb2FkXCIgcHJlbG9hZD1cIm5vbmVcIiBwb3N0ZXI9XCIke3RoaXMucG9zdGVyfVwiPjwvdmlkZW8+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgY2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwidmlkZW9cIikucGxheSgpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtdmlkZW9cIiwgQnJpZ2h0VmlkZW8pO1xuXG5jbGFzcyBCcmlnaHRJY29uTGluZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGljb246IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgIGhyZWY6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH07XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6ZmxleDsgaGVpZ2h0OjU2cHg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowcHggMTZweDsgZ2FwOjE2cHg7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgY29sb3I6dmFyKC0tYm9keS1pbnZlcnNlKTsgY3Vyc29yOnBvaW50ZXI7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgOmhvc3QoOmhvdmVyKSB7IGJhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQpOyBjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpOyB9XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBpZih0aGlzLmhyZWYpIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmOyB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtaWNvbmxpbmVcIiwgQnJpZ2h0SWNvbkxpbmUpO1xuXG5jbGFzcyBBcHBCYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmZsZXg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWludmVyc2UpOyBjb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBmaWxsOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IGhlaWdodDo1NnB4OyBhbGlnbi1pdGVtczpjZW50ZXI7IHBhZGRpbmc6MHB4IDE2cHg7IGdhcDoxNnB4OyA7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJtZW51XCIgQGNsaWNrPVwiJHt0aGlzLm1lbnVDbGlja31cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIG1lbnVDbGljaygpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImFwcGJhci10b2dnbGVcIiwgeyBidWJibGVzOnRydWUsIGNvbXBvc2VkOnRydWUgfSkpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcHAtYmFyXCIsIEFwcEJhcik7XG5cbmV4cG9ydCBjbGFzcyBBcHBMYXlvdXQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBjb2xsYXBzZWQ6IHsgdHlwZTpCb29sZWFuIH1cbiAgICB9O1xuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgI2FwcGJhciB7IHBvc2l0aW9uOmZpeGVkOyB3aWR0aDozMDBweDsgbGVmdDowcHg7IHRvcDowcHg7IGhlaWdodDo1NnB4OyB9XG4gICAgICAgICNhcHBuYXYgeyBwb3NpdGlvbjpmaXhlZDsgd2lkdGg6MzAwcHg7IGxlZnQ6MHB4OyB0b3A6NTZweDsgYm90dG9tOjBweDsgb3ZlcmZsb3cteTpoaWRkZW47IGJhY2tncm91bmQ6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgdHJhbnNpdGlvbjpib3R0b20gMC41czsgfVxuICAgICAgICAjYm9keSB7IHBvc2l0aW9uOmZpeGVkOyBsZWZ0OjMwMHB4OyB0b3A6MHB4OyByaWdodDowcHg7IGJvdHRvbTowcHg7IH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgICNhcHBiYXIgeyB3aWR0aDoxMDAlOyB9XG4gICAgICAgICAgICAjYXBwbmF2IHsgd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgI2FwcG5hdi5leHBhbmRlZCB7IGJvdHRvbTowcHg7IH1cbiAgICAgICAgICAgICNhcHBuYXYuY29sbGFwc2VkIHsgYm90dG9tOjEwMCU7IH1cbiAgICAgICAgICAgICNib2R5IHsgd2lkdGg6MTAwJTsgbGVmdDowcHg7IHRvcDo1NnB4OyAgfVxuICAgICAgICB9XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdhcHBiYXItdG9nZ2xlJywgKCkgPT4geyB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZCB9KTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PiB7IHRoaXMuY29sbGFwc2VkID0gdHJ1ZTsgfSk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBiYXJcIj48c2xvdCBuYW1lPVwiYXBwLWJhclwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJib2R5XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD1cImFwcG5hdlwiIGNsYXNzPVwiJHt0aGlzLmNvbGxhcHNlZD8nY29sbGFwc2VkJzonZXhwYW5kZWQnfVwiPjxzbG90IG5hbWU9XCJhcHAtbmF2XCI+PC9zbG90PjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImFwcC1sYXlvdXRcIiwgQXBwTGF5b3V0KTtcblxuZXhwb3J0IGNsYXNzIEFwcFJvdXRlciBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGNoaWxkcmVuOiB7IHR5cGU6QXJyYXkgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm9uSGFzaENoYW5nZSA9IHRoaXMub25IYXNoQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgdGhpcy5vbkhhc2hDaGFuZ2UpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgb25IYXNoQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2gobiA9PntcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN0YXJ0c1dpdGgobi5nZXRBdHRyaWJ1dGUoXCJyb3V0ZVwiKSkpIHtcbiAgICAgICAgICAgICAgICBuLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgLy8gY2FsbCBjaGlsZC5vblNob3cgaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgIGlmKG4ub25TaG93KSBuLm9uU2hvdyh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKG4uc3R5bGUuZGlzcGxheSA9PSBcImJsb2NrXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNhbGwgY2hpbGQub25IaWRlIGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgaWYobi5vbkhpZGUpIG4ub25IaWRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic2xvdFwiKS5hc3NpZ25lZEVsZW1lbnRzKHsgZmxhdHRlbjogdHJ1ZSB9KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG4gPT4geyBuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIiB9KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlblswXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB0aGlzLm9uSGFzaENoYW5nZSgpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcHAtcm91dGVyXCIsIEFwcFJvdXRlcik7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBCRUxPVyBIRVJFIElTIE5PVCBWQUxJREFURUQgVE8gV09SSyBVTkRFUiBNT05BUkNIIENTUy9KU1xuLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cblxuXG5jbGFzcyBCcmlnaHRGb3JtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgZXJyb3JzOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICA6aG9zdDpoaWRkZW4geyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+ICAgICAgICBcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGFibGVzID0gW107XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImJyaWdodC12YWxpZGF0YWJsZVwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGFibGVzLnB1c2goZS5jb21wb3NlZFBhdGgoKVswXSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWxpZGF0YWJsZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGlmKCFlLnZhbGlkYXRlKCkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlLmhhc0F0dHJpYnV0ZShcImVycm9yXCIpICYmIHRoaXMuZXJyb3IgPT0gbnVsbCA/IGUuZ2V0QXR0cmlidXRlKFwiZXJyb3JcIikgOiB0aGlzLmVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHZhbGlkOyBcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMob2JqKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGFibGVzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBvYmpbZS5pZF0gPSBlLnZhbHVlID09IFwiXCIgPyBudWxsIDogZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1mb3JtXCIsIEJyaWdodEZvcm0pO1xuXG5jbGFzcyBWaWV3UGFnZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQYWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmhpZGRlbiA9ICh0aGlzLmNoaWxkcmVuW2ldLmlkICE9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5oaWRkZW4gPSAoaSAhPSB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidmlldy1wYWdlclwiLCBWaWV3UGFnZXIpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFNpbmdsZVNlbGVjdG9yIHdyYXBzIHNpbmdsZS1zZWxlY3RhYmxlIGl0ZW1zXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuY2xhc3MgU2luZ2xlU2VsZWN0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBub2Rlc1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZENsaWNrKGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1cGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRyYXdTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBjaGlsZENsaWNrKGUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuICAgICAgICB0aGlzLmRyYXdTZWxlY3Rpb24oKTtcbiAgICB9XG5cbiAgICBkcmF3U2VsZWN0aW9uKCkge1xuICAgICAgICBsZXQgbm9kZXMgPSB0aGlzLmNoaWxkcmVuO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBub2Rlc1tpXS5jbGFzc05hbWUgPSBub2Rlc1tpXS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PSB0aGlzLnZhbHVlID8gXCJzZWxlY3RlZFwiIDogXCJub3RzZWxlY3RlZFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoLnNlbGVjdGVkKSB7IGJhY2tncm91bmQtY29sb3I6cmVkOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInNpbmdsZS1zZWxlY3RvclwiLCBTaW5nbGVTZWxlY3Rvcik7XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gTXVsdGlTZWxlY3RvciB3cmFwcyBtdWx0aS1zZWxlY3RhYmxlIGl0ZW1zXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuY2xhc3MgTXVsdGlTZWxlY3RvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIF9zZWxlY3RlZDogeyB0eXBlOiBBcnJheSB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgc2VsZWN0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZC5mb3JFYWNoKGUgPT4geyBlLnNlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuaW5jbHVkZXMoZS52YWx1ZSl9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7IGNvbXBvc2VkOnRydWUsIGJ1YmJsZXM6dHJ1ZSwgZGV0YWlsOnRoaXMuX3NlbGVjdGVkIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZCA9IFtdO1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IFtdO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibXVsdGktc2VsZWN0YWJsZVwiLCB0aGlzLnJlZ2lzdGVyKTtcbiAgICB9XG5cbiAgICByZWdpc3RlcihlKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWQucHVzaChlLnRhcmdldCk7XG4gICAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZSA9PiB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0ZWQgPSB0aGlzLl9yZWdpc3RlcmVkLmZpbHRlcihyID0+IHIuc2VsZWN0ZWQgPT0gdHJ1ZSkubWFwKHIgPT4gci52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlLCBkZXRhaWw6dGhpcy5fc2VsZWN0ZWQgfSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYoIXRoaXMuX3NlbGVjdGVkKSByZXR1cm47XG4gICAgICAgIGUudGFyZ2V0LnNlbGVjdGVkID0gdGhpcy5fc2VsZWN0ZWQuaW5jbHVkZXMoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cblxuICAgIGNsZWFyQWxsKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gW107XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZXM7IFxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlLCBkZXRhaWw6dGhpcy5fc2VsZWN0ZWQgfSkpO1xuICAgIH1cblxuICAgIHNlbGVjdEFsbCgpIHtcbiAgICAgICAgbGV0IHZhbHVlcyA9IFtdXG4gICAgICAgIHRoaXMuX3JlZ2lzdGVyZWQuZm9yRWFjaChlID0+IHsgdmFsdWVzLnB1c2goZS52YWx1ZSk7IH0pO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWVzO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlLCBkZXRhaWw6dGhpcy5fc2VsZWN0ZWQgfSkpO1xuICAgIH1cblxuICAgIHNlbGVjdEl0ZW0odmFsdWUpIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWQucHVzaCh2YWx1ZSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlLCBkZXRhaWw6dGhpcy5fc2VsZWN0ZWQgfSkpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm11bHRpLXNlbGVjdG9yXCIsIE11bHRpU2VsZWN0b3IpO1xuXG5jbGFzcyBTZWxlY3RMaW5lIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHsgdHlwZTpCb29sZWFuLCByZWZsZWN0OnRydWUgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IGN1cnNvcjpwb2ludGVyOyAgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtzZWxlY3RlZF0pIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saW5lLWJvcmRlcik7IH1cbiAgICAgICAgICAgICAgICBkaXYgeyAgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2ID9zZWxlY3RlZD1cIiR7dGhpcy5zZWxlY3RlZH1cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibXVsdGktc2VsZWN0YWJsZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XG4gICAgfVxuXG4gICAgY2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6dHJ1ZSwgY29tcG9zZWQ6dHJ1ZSB9KSk7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic2VsZWN0LWxpbmVcIiwgU2VsZWN0TGluZSk7XG5cbmNsYXNzIENoZWNrTGluZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbTogeyB0eXBlOiBPYmplY3QgfSwgXG4gICAgICAgICAgICBzZWxlY3RlZDogeyB0eXBlOiBCb29sZWFuIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzZXQgc2VsZWN0ZWQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgb2xkID0gdGhpcy5pdGVtLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLml0ZW0uc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgfVxuXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtID8gdGhpcy5pdGVtLnNlbGVjdGVkIDogZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGl0ZW0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtOyBcbiAgICB9XG5cbiAgICBzZXQgaXRlbSh2YWx1ZSkge1xuICAgICAgICBpZih2YWx1ZS5zZWxlY3RlZCA9PSB1bmRlZmluZWQpIHZhbHVlLnNlbGVjdGVkPWZhbHNlO1xuICAgICAgICB0aGlzLl9pdGVtID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OiBmbGV4OyBoZWlnaHQ6IDQ0cHg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGN1cnNvcjpwb2ludGVyOyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgc3ZnIHsgaGVpZ2h0OjEuNmVtOyB3aWR0aDogMS42ZW07IGNvbG9yOmdyZXk7IHBhZGRpbmctdG9wOjRweDsgfVxuICAgICAgICAgICAgICAgIC5jb250ZW50IHsgZmxleDogMSAxIGF1dG87IHBhZGRpbmctbGVmdDo4cHg7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAkeyh0aGlzLml0ZW0gJiYgdGhpcy5pdGVtLnNlbGVjdGVkKSA/IFxuICAgICAgICAgICAgaHRtbGA8ZGl2PjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGw9XCIjMzAzMDMwXCIgZD1cIk0xOSAzSDVjLTEuMTEgMC0yIC45LTIgMnYxNGMwIDEuMS44OSAyIDIgMmgxNGMxLjExIDAgMi0uOSAyLTJWNWMwLTEuMS0uODktMi0yLTJ6bS05IDE0bC01LTUgMS40MS0xLjQxTDEwIDE0LjE3bDcuNTktNy41OUwxOSA4bC05IDl6XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PmBcbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIGh0bWxgPGRpdj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsPVwiIzMwMzAzMFwiIGQ9XCJNMTkgNXYxNEg1VjVoMTRtMC0ySDVjLTEuMSAwLTIgLjktMiAydjE0YzAgMS4xLjkgMiAyIDJoMTRjMS4xIDAgMi0uOSAyLTJWNWMwLTEuMS0uOS0yLTItMnpcIj48L3BhdGg+PC9zdmc+PC9kaXY+YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuICAgIFxuICAgIGlzQ2hlY2tlZChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLnNlbGVjdGVkO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGljayk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJtdWx0aS1zZWxlY3RhYmxlXCIsIHsgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUgfSkpO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuaXRlbS5zZWxlY3RlZCA9ICF0aGlzLml0ZW0uc2VsZWN0ZWQ7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImNoZWNrLWxpbmVcIiwgQ2hlY2tMaW5lKTtcblxuXG5cbmNsYXNzIEJyaWdodE1lbnUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBwb3NpdGlvbjogcmVsYXRpdmU7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBmaWxsOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICBzdmcgeyBoZWlnaHQ6IDI0cHg7IHdpZHRoOjI0cHg7IGJvcmRlcjpub25lOyBvdXRsaW5lOm5vbmU7IH1cbiAgICAgICAgICAgICAgICAjd3JhcCB7IG92ZXJmbG93OmhpZGRlbjsgb3V0bGluZTpub25lOyB0cmFuc2l0aW9uOm1heC1oZWlnaHQgMC4zczsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1wcmltYXJ5KTsgd2lkdGg6MjAwcHg7IG1heC1oZWlnaHQ6MHB4OyBwb3NpdGlvbjphYnNvbHV0ZTsgei1pbmRleDoxMDAwOyBjb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyByaWdodDotMTZweDsgdG9wOjQxcHg7IGJvcmRlci1yYWRpdXM6M3B4OyBib3gtc2hhZG93OiAwcHggM3B4IDNweCByZ2JhKDAsMCwwLDAuNCk7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoZGl2KSB7IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgcGFkZGluZzoxNnB4OyB1c2VyLXNlbGVjdDpub25lOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIDo6c2xvdHRlZChkaXY6aG92ZXIpIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBjb2xvcjp2YXIoLS1wcmltYXJ5KTsgZmlsbDp2YXIoLS1wcmltYXJ5KTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdmcgQGNsaWNrPVwiJHt0aGlzLm9wZW59XCIgdmlld2JveD1cIjIgMiAyMCAyMFwiPlxuICAgICAgICAgICAgICAgIDxnIGlkPVwibW9yZS12ZXJ0XCI+PHBhdGggZD1cIk0xMiA4YzEuMSAwIDItLjkgMi0ycy0uOS0yLTItMi0yIC45LTIgMiAuOSAyIDIgMnptMCAyYy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnptMCA2Yy0xLjEgMC0yIC45LTIgMnMuOSAyIDIgMiAyLS45IDItMi0uOS0yLTItMnpcIj48L3BhdGg+PC9nPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8IS0tIHRhYmluZGV4IHJlcXVpcmVkIHRvIG1ha2UgZm9jdXMgd29yayAtLT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCIgdGFiaW5kZXg9XCIwXCIgQGJsdXI9XCIke3RoaXMuY2xvc2V9XCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuICAgIFxuICAgIGNsb3NlKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2VsZi5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwid3JhcFwiKS5zdHlsZS5tYXhIZWlnaHQgPSBcIjBweFwiO1xuICAgICAgICB9LCA1MDApO1xuICAgIH1cblxuICAgIG9wZW4oKSB7XG4gICAgICAgIGxldCBlID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwid3JhcFwiKTtcbiAgICAgICAgZS5zdHlsZS5tYXhIZWlnaHQgPSBcIjUwMHB4XCI7XG4gICAgICAgIGUuZm9jdXMoKTtcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtbWVudVwiLCBCcmlnaHRNZW51KTtcblxuY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGljb246IHsgdHlwZTogU3RyaW5nIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuaWNvbiA9ICcnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIC5yb3cgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzoxNnB4OyBjb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IH1cbiAgICAgICAgICAgICAgICAucm93OmhvdmVyIHsgY29sb3I6dmFyKC0tcHJpbWFyeSk7IGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIGJyaWdodC1pY29uIHsgcGFkZGluZy1yaWdodDo4cHg7IGZpbGw6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIC5yb3c6aG92ZXIgYnJpZ2h0LWljb24geyBmaWxsOnZhcigtLXByaW1hcnkpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPjxicmlnaHQtaWNvbiA/aGlkZGVuPVwiJHt0aGlzLmljb24gPT0gJyd9XCIgZmlsbD1cInJlZFwiIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPjxkaXYgY2xhc3M9XCJ0ZXh0XCI+PHNsb3Q+PC9zbG90PjwvZGl2PjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1lbnUtaXRlbVwiLCBNZW51SXRlbSk7XG5cblxuXG5cblxuXG5cbmNsYXNzIEJyaWdodFBhZ2VyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IHdpZHRoOjEwMCU7IGhlaWdodDoxMDAlOyBvdmVyZmxvdzpoaWRkZW47IHBvc2l0aW9uOnJlbGF0aXZlOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgICAgICAgICAgICAgI3dyYXAgeyBkaXNwbGF5OmZsZXg7IHBvc2l0aW9uOmFic29sdXRlOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgbGVmdDowJTsgdHJhbnNpdGlvbjogbGVmdCAwLjVzOyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKGRpdikgeyBmbGV4OjAgMCAxMDAlOyBtaW4td2lkdGg6MCU7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2IGlkPVwid3JhcFwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgc2hvd1BhZ2UodmFsdWUpIHtcbiAgICAgICAgdmFyIHBjdCA9IFwiLVwiICsgdmFsdWUgKyBcIjAwJVwiO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwXCIpLnN0eWxlLmxlZnQgPSBwY3Q7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LXBhZ2VyXCIsIEJyaWdodFBhZ2VyKTtcblxuY2xhc3MgQnJpZ2h0RmlsZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX3ZhbHVlOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgZmlsZXM6IHsgdHlwZTpBcnJheSB9LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTpCb29sZWFuIH0sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBtdWx0aXBsZTogeyB0eXBlOkJvb2xlYW4gfSwgXG4gICAgICAgICAgICBhY2NlcHQ6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHN1cGVyKCk7IFxuICAgICAgICB0aGlzLmFjY2VwdCA9IFwiKi8qXCI7XG4gICAgICAgIHRoaXMubXVsdGlwbGUgPSBmYWxzZTsgXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgYm94LXNpemluZzpib3JkZXItYm94OyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgOjpwbGFjZWhvbGRlciB7IGNvbG9yOnZhcigtLWJvZHktaW52ZXJzZSk7IG9wYWNpdHk6MC41OyB9XG4gICAgICAgICAgICAgICAgaW5wdXQgeyBoZWlnaHQ6MzZweDsgd2lkdGg6MTAwJTsgY29sb3I6dmFyKC0tYm9keS1pbnZlcnNlKTsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGluZS1ib3JkZXIpOyBwYWRkaW5nOjhweDsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXItcmFkaXVzOjJweDsgYm94LXNoYWRvdzpub25lOyBmb250LXNpemU6dmFyKC0tYm9keTEtc2l6ZSk7IGZvbnQtd2VpZ2h0OnZhcigtLWJvZHkxLXdlaWdodCk7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLW1vei1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXMgeyBib3JkZXI6IDFweCBzb2xpZCBncmV5OyBvdXRsaW5lOm5vbmU7IH1cbiAgICAgICAgICAgICAgICBpbnB1dDppbnZhbGlkIHsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWxlcnQpOyB9XG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT1maWxlXSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfSAvKiByZW1vdmUgaW9zIGluc2V0IHNoYWRvdyAqL1xuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXY+JHt0aGlzLl92YWx1ZX08L2Rpdj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGV4dElucHV0XCIgQGNsaWNrPVwiJHt0aGlzLnRleHRJbnB1dENsaWNrfVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IFwiXCJ9XCIgdmFsdWU9XCIke3RoaXMuX3ZhbHVlfVwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgaWQ9XCJmaWxlSW5wdXRcIiBuYW1lPVwiZmlsZXNcIiBAY2hhbmdlPVwiJHt0aGlzLmZpbGVJbnB1dENoYW5nZX1cIiBhY2NlcHQ9XCIke3RoaXMuYWNjZXB0fVwiID9tdWx0aXBsZT1cIiR7dGhpcy5tdWx0aXBsZX1cIi8+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsIFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHRleHRJbnB1dENsaWNrKGUpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiZmlsZUlucHV0XCIpLmNsaWNrKCk7XG4gICAgICAgIHRoaXMuYmx1cigpO1xuICAgIH1cblxuICAgIGZpbGVJbnB1dENoYW5nZSgpIHtcbiAgICAgICAgbGV0IGUgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlSW5wdXRcIik7XG4gICAgICAgIGlmKGUuZmlsZXMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmlsZXNcIiwgZS5maWxlcyk7XG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IEFycmF5LmZyb20oZS5maWxlcykubWFwKGYgPT4gZi5uYW1lKS5qb2luKCk7XG4gICAgICAgICAgICB0aGlzLmZpbGVzID0gZS5maWxlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0aGlzLl92YWx1ZSA9PSBcIlwiKSB2YWxpZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRDdXN0b21WYWxpZGl0eSh2YWxpZCA/IFwiXCIgOiBcInJlcXVpcmVkIGZpZWxkXCIpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbGlkID0gdmFsaWQ7IFxuICAgICAgICByZXR1cm4gdmFsaWQ7IFxuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtZmlsZVwiLCBCcmlnaHRGaWxlKTtcblxuY2xhc3MgQnJpZ2h0UmFkaW8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICBicmlnaHQtaWNvbiB7IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICR7IHRoaXMuc2VsZWN0ZWQgPyBcbiAgICAgICAgICAgICAgICBodG1sYDxicmlnaHQtaWNvbiBpY29uPVwicmFkaW8tYnV0dG9uLWNoZWNrZWRcIiBAY2xpY2s9XCIke3RoaXMucmFkaW9DbGlja31cIj48L2JyaWdodC1pY29uPmAgOlxuICAgICAgICAgICAgICAgIGh0bWxgPGJyaWdodC1pY29uIGljb249XCJyYWRpby1idXR0b24tdW5jaGVja2VkXCIgQGNsaWNrPVwiJHt0aGlzLnJhZGlvQ2xpY2t9XCI+PC9icmlnaHQtaWNvbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXJhZGlvLXJlZ2lzdGVyXCIsIHsgZGV0YWlsOnRoaXMsIGNvbXBvc2VkOnRydWUsIGJ1YmJsZXM6dHJ1ZSB9KSk7XG4gICAgfVxuXG4gICAgcmFkaW9DbGljaygpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC1yYWRpby1zZWxlY3RlZFwiLCB7IGRldGFpbDp0aGlzLCBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUgfSkpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtcmFkaW9cIiwgQnJpZ2h0UmFkaW8pO1xuXG5cbmNsYXNzIEJyaWdodFJhZGlvR3JvdXAgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7IHR5cGU6T2JqZWN0IH0sIFxuICAgICAgICAgICAgcmFkaW9zOiB7IHR5cGU6QXJyYXkgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7IFxuICAgICAgICB0aGlzLnJhZGlvcyA9IFtdO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwiYnJpZ2h0LXJhZGlvLXJlZ2lzdGVyXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yYWRpb3MucHVzaChlLmRldGFpbCk7XG4gICAgICAgIH0pO1xuICAgICAgICBhZGRFdmVudExpc3RlbmVyKFwiYnJpZ2h0LXJhZGlvLXNlbGVjdGVkXCIsIGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJhZGlvID0gZS5kZXRhaWw7IFxuICAgICAgICAgICAgdGhpcy5yYWRpb3MuZm9yRWFjaChyID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSAocmFkaW8gPT0gcik7XG4gICAgICAgICAgICAgICAgbGV0IGNoYW5nZWQgPSByLnNlbGVjdGVkICE9IHNlbGVjdGVkOyBcbiAgICAgICAgICAgICAgICByLnNlbGVjdGVkID0gKHJhZGlvID09IHIpO1xuICAgICAgICAgICAgICAgIGlmKGNoYW5nZWQpIHIuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGA8c2xvdD48L3Nsb3Q+YDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LXJhZGlvLWdyb3VwXCIsIEJyaWdodFJhZGlvR3JvdXApO1xuXG5jbGFzcyBCcmlnaHREYXRlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHRleHQ6IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICAjaGlkZSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzcGFuIGlkPVwiaGlkZVwiPjxzbG90Pjwvc2xvdD48L3NwYW4+XG4gICAgICAgICAgICA8c3Bhbj4ke3RoaXMudGV4dH08L3NwYW4+XG4gICAgICAgIGA7IFxuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgbGV0IHNkYXRlID0gdGhpcy5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50O1xuICAgICAgICBjb25zb2xlLmxvZyhcInN0cmluZ1wiLCBzZGF0ZSk7XG4gICAgICAgIGxldCBuZGF0ZSA9IG5ldyBEYXRlKHNkYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRlIG9ialwiLCBuZGF0ZSk7XG4gICAgICAgIGxldCBmb3JtYXR0ZWQgPSBEYXRlVXRpbC5mb3JtYXRXaXRoVGltZShuZXcgRGF0ZShzZGF0ZSkpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImxvY2FsXCIsIGZvcm1hdHRlZCk7XG4gICAgICAgIHRoaXMudGV4dCA9IGZvcm1hdHRlZDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWRhdGVcIiwgQnJpZ2h0RGF0ZSk7XG5cbmNsYXNzIEJyaWdodFN1Z2dlc3QgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTpCb29sZWFuIH0sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6Qm9vbGVhbiB9LFxuICAgICAgICAgICAgdHlwZTogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBzdWdnZXN0RnVuYzogeyB0eXBlOk9iamVjdCB9LCBcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7IHR5cGU6QXJyYXkgfSwgXG4gICAgICAgICAgICBsb2FkaW5nOiB7IHR5cGU6IEJvb2xlYW4gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIGlucHV0IHsgaGVpZ2h0OjM2cHg7IHdpZHRoOjEwMCU7IGNvbG9yOnZhcigtLWJvZHktaW52ZXJzZSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtYm9yZGVyKTsgcGFkZGluZzo4cHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyLXJhZGl1czoycHg7IGJveC1zaGFkb3c6bm9uZTsgZm9udC1zaXplOnZhcigtLWJvZHkxLXNpemUpOyBmb250LXdlaWdodDp2YXIoLS1ib2R5MS13ZWlnaHQpOyBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfSAvKiByZW1vdmUgaW9zIGluc2V0IHNoYWRvdyAqL1xuICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzIHsgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgb3V0bGluZTpub25lOyB9XG4gICAgICAgICAgICAgICAgaW5wdXQ6aW52YWxpZCB7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTsgfVxuICAgICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIgeyBjb2xvcjp2YXIoLS1ib2R5LWludmVyc2UpOyBvcGFjaXR5OjAuNTsgfVxuICAgICAgICAgICAgICAgIC5pdGVtIHsgcGFkZGluZzoxNnB4OyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIC5pdGVtOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1za3JpbS1ob3ZlcikgfVxuICAgICAgICAgICAgICAgICN3cmFwIHsgcG9zaXRpb246cmVsYXRpdmU7IH1cbiAgICAgICAgICAgICAgICAjbG9hZGVyIHsgcG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OjhweDsgdG9wOjRweDsgfVxuICAgICAgICAgICAgICAgICNub3Rmb3VuZCB7IHBhZGRpbmc6IDE2cHggMHB4OyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAkeyF0aGlzLmxvYWRpbmcgPyBodG1sYGAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibG9hZGVyXCIgP2hpZGRlbj1cIiR7dGhpcy5sb2FkaW5nfVwiIGZpbGw9XCJ2YXIoLS1saW5lLWJvcmRlcilcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMjQgMjQgNTAgNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoICBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiB0eXBlPVwicm90YXRlXCIgZHVyPVwiMXNcIiBmcm9tPVwiMCA1MCA1MFwidG89XCIzNjAgNTAgNTBcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlcnlcIiBAa2V5dXA9XCIke3RoaXMua2V5VXB9XCIgbmFtZT1cIiR7dGhpcy5uYW1lfVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiLz5cbiAgICAgICAgICAgICAgICAkeyB0aGlzLnN1Z2dlc3Rpb25zID09IHVuZGVmaW5lZCA/IGh0bWxgYCA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHsgdGhpcy5zdWdnZXN0aW9ucy5tYXAociA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgLmRhdGFpdGVtPVwiJHtyLnZhbHVlfVwiIEBjbGljaz1cIiR7dGhpcy5pdGVtQ2xpY2t9XCI+JHtyLmtleX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub3Rmb3VuZFwiID9oaWRkZW49XCIkeyEodGhpcy5zdWdnZXN0aW9ucyAmJiB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCA9PSAwKX1cIj5ObyBSZXN1bHRzIEZvdW5kPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsIFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGtleVVwKCkge1xuICAgICAgICBCb3VuY2VyLmRlYm91bmNlKHRoaXMsIHRoaXMuY2hhbmdlLCAxNTAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDsgXG4gICAgICAgIGxldCBxdWVyeSA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpLnZhbHVlOyBcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLnN1Z2dlc3RGdW5jKHF1ZXJ5KTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IHJlc3VsdHM7IFxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdHNcIiwgcmVzdWx0cyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICBpdGVtQ2xpY2soZSkge1xuICAgICAgICBsZXQga2V5ID0gZS50YXJnZXQuaW5uZXJUZXh0OyBcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwicXVlcnlcIikudmFsdWUgPSBrZXk7IFxuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQuZGF0YWl0ZW07IFxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gdW5kZWZpbmVkOyBcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PSB1bmRlZmluZWQpIHZhbGlkID0gZmFsc2U7IFxuICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeVwiKTtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWQgPyBcIlwiIDogXCJyZXF1aXJlZCBmaWVsZFwiKTtcbiAgICAgICAgaW5wdXQudmFsaWQgPSB2YWxpZDsgXG4gICAgICAgIHJldHVybiB2YWxpZDsgXG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LXN1Z2dlc3RcIiwgQnJpZ2h0U3VnZ2VzdCk7XG4iLCJpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWwsIGNzc30gZnJvbSAnbGl0JztcbmltcG9ydCB7QnJpZ2h0SW5wdXQsIEJyaWdodFNlY3Rpb24gfSBmcm9tICcuLi9icmlnaHRqcy9icmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgUmVzaXplQ29udHJvbGxlciB7XG4gICAgaG9zdDsgXG5cbiAgICBjb25zdHJ1Y3Rvcihob3N0KSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIGhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIFxuICAgIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDQ2MCkge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcImRlc2t0b3BcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZChcImRlc2t0b3BcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvc3Qub25SZXNpemVkKSB0aGlzLmhvc3Qub25SZXNpemVkKCk7XG4gICAgfVxufVxuXG5jbGFzcyBTb2NpYWxCYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICByZXNpemVyID0gbmV3IFJlc2l6ZUNvbnRyb2xsZXIodGhpcyk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBjdXJzb3I6cG9pbnRlcjsgei1pbmRleDoxMDsgfVxuICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgYDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic29jaWFsLWJhclwiLCBTb2NpYWxCYXIpO1xuXG5jbGFzcyBJY29uTGluayBleHRlbmRzIExpdEVsZW1lbnQgeyBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBpY29uOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICBocmVmOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICB0YXJnZXQ6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlci1yYWRpdXM6NTAlOyBjdXJzb3I6cG9pbnRlcjsgcGFkZGluZzo0cHg7IG1hcmdpbjo0cHg7IGN1cnNvcjpwb2ludGVyOyBiYWNrZ3JvdW5kOmdyZXk7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGJyaWdodC1pY29uIHsgZmlsbDppbmhlcml0OyB9ICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBpZih0aGlzLnRhcmdldCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmhyZWY7IFxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLmhyZWYsIHRoaXMudGFyZ2V0KTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaWNvbi1saW5rXCIsIEljb25MaW5rKTtcblxuY2xhc3MgTGlua0J1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGhyZWY6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgIHRhcmdldDogeyB0eXBlOlN0cmluZyB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICAgICAgZGl2IHsgdXNlci1zZWxlY3Q6bm9uZTsgdHJhbnNpdGlvbjpjb2xvciAxcywgYmFja2dyb3VuZC1jb2xvciAxczt0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6dmFyKC0tYnV0dG9uLWludmVyc2UpOyB3aWR0aDoxMDAlOyBwYWRkaW5nOnZhcigtLWJ1dHRvbi1wYWRkaW5nKTsgZm9udDp2YXIoLS1idXR0b24tZm9udCk7IGJvcmRlcjp2YXIoLS1idXR0b24tYm9yZGVyKTsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgICAgICAgICAgICAgICAgZGl2OmZvY3VzIHsgb3V0bGluZTpub25lOyB9XG4gICAgICAgICAgICAgICAgICAgIGRpdjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1pbnZlcnNlKTsgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuaHJlZjsgXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgdGhpcy50YXJnZXQpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaW5rLWJ1dHRvblwiLCBMaW5rQnV0dG9uKTtcblxuXG5jbGFzcyBTcGxhc2hQYW5lbCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogeyB0eXBlOiBTdHJpbmcgfVxuICAgICAgICB9O1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgaGVpZ2h0OjEwMCU7IH1cbiAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgI3dyYXAgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgfVxuICAgICAgICAgICAgI2NvcmUgeyBtYXgtd2lkdGg6dmFyKC0tY29udGVudC13aWR0aCk7IGhlaWdodDoxMDAlOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgke3RoaXMuYmFja2dyb3VuZH0pOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBkaXNwbGF5OmZsZXg7IG1hcmdpbjphdXRvOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3JlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDsgXG4gIH1cblxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInNwbGFzaC1wYW5lbFwiLCBTcGxhc2hQYW5lbCk7XG5cbmNsYXNzIEVtYWlsU3Vic2NyaWJlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgY2FtcGFpZ25LZXk6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7ICB9XG4gICAgICAgICNpbnB1dGFyZWEgeyBkaXNwbGF5OmZsZXg7IHdpZHRoOjEwMCU7IG1heC13aWR0aDo2MDBweDsgZmxleC13cmFwOndyYXA7IGdhcDo0cHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgIH1cbiAgICAgICAgaW5wdXQgeyBmbGV4OiAxIDEgMzAwcHg7IHBhZGRpbmc6dmFyKC0taW5wdXQtcGFkZGluZyk7IGZvbnQ6dmFyKC0taW5wdXQtZm9udCk7IGNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czp2YXIoLS1pbnB1dC1yYWRpdXMpOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJhY2tncm91bmQ6dmFyKC0taW5wdXQtYmFja2dyb3VuZCk7IH1cbiAgICAgICAgYnV0dG9uIHsgZmxleDogMSAxIDIwMHB4OyB1c2VyLXNlbGVjdDpub25lOyB0cmFuc2l0aW9uOmNvbG9yIDFzLCBiYWNrZ3JvdW5kLWNvbG9yIDFzOyBiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kKTsgY29sb3I6dmFyKC0tYnV0dG9uLWludmVyc2UpOyBwYWRkaW5nOnZhcigtLWJ1dHRvbi1wYWRkaW5nKTsgZm9udDp2YXIoLS1idXR0b24tZm9udCk7IGJvcmRlcjp2YXIoLS1idXR0b24tYm9yZGVyKTsgfVxuICAgICAgICBpbnB1dDpmb2N1cyB7IG91dGxpbmU6bm9uZTsgfVxuICAgICAgICBidXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1pbnZlcnNlKTsgY29sb3I6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQpOyB9XG4gICAgICAgICNhZnRlcnRleHQgeyBkaXNwbGF5Om5vbmU7IHBhZGRpbmc6OHB4OyBmb250OnZhcigtLWJvZHktZm9udCk7IH1cbiAgICBgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dGFyZWFcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgaWQ9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7dGhpcy5vbkNsaWNrfVwiIGNsYXNzPVwicHJpbWFyeVwiPlN1YnNjcmliZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWZ0ZXJ0ZXh0XCI+VGhhbmsgWW91IEZvciBTdWJzY3JpYmluZyE8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB2YXIgZW1haWwgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKS52YWx1ZTsgXG4gICAgICAgIHZhciByZWZlcnJlciA9IGRvY3VtZW50LnJlZmVycmVyO1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNpbnB1dGFyZWFcIikuc3R5bGUub3BhY2l0eSA9IFwiMC4yXCI7XG4gICAgICAgIEFwcFV0aWwuYWRkU3Vic2NyaWJlcih0aGlzLmNhbXBhaWduS2V5LCBlbWFpbCwgcmVmZXJyZXIpLnRoZW4oc3ViID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0YXJlYVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNhZnRlcnRleHRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVtYWlsLXN1YnNjcmliZVwiLCBFbWFpbFN1YnNjcmliZSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBVdGlsIHtcblxuICAgIC8vIGhhbmRsZSBlcnJvcnMgaW4gdGhlIHJlc3BvbnNlIHN0cmVhbSBzbyB0aGV5IGNhbiBiZSBjYXVnaHRcbiAgICAvLyBvdGhlcndpc2UgNDAxLDUwMCBlcnJvcnMsIGV0YyBkb24ndCBjYXRjaFxuICAgIC8vIHRoaXMgd29ya3Mgd2l0aCB0aGUgQyMgRXJyb3JSZXNwb25zZSByZXN1bHQgb2JqZWN0XG4gICAgLy8gZXhhbXBsZTogIC50aGVuKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgIHN0YXRpYyBoYW5kbGVFcnJvcnMocmVzKSB7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGUgPT4geyB0aHJvdyBFcnJvcihlLm1lc3NhZ2UpOyB9KTtcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICByZXR1cm4gcmVzOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBhZGRTdWJzY3JpYmVyKGNhbXBhaWduS2V5LCBlbWFpbCwgcmVmZXJyZXIpIHtcbiAgICAgICAgY29uc3QgYXBpYmFzZSA9ICdodHRwczovL2x1c2Npb3Vzc3R1ZGlvcy5henVyZXdlYnNpdGVzLm5ldC9hcGknO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpYmFzZX0vc3Vic2NyaWJlP2NhbXBhaWduS2V5PSR7Y2FtcGFpZ25LZXl9JmVtYWlsPSR7ZW1haWx9JnJlZmVycmVyPSR7cmVmZXJyZXJ9YClcbiAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ0IiwiZSIsInMiLCJuIiwiciIsIm8iLCJpIiwiUyIsImMiLCJoIiwiYSIsImwiLCJkIiwidSIsImNzcyIsIkxpdEVsZW1lbnQiLCJSZXNpemVDb250cm9sbGVyIiwiaHRtbCIsIngiXSwibWFwcGluZ3MiOiI7OztFQUFBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxNQUFNQSxHQUFDLENBQUMsTUFBTSxDQUFDQyxHQUFDLENBQUNELEdBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxRQUFRLEVBQUVBLEdBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQ0UsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDQyxHQUFDLENBQUMsSUFBSSxPQUFPLFdBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0QsR0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0QsR0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsTUFBTUMsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJQyxHQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDSCxHQUFDLENBQUMsQ0FBQ0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUlELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsQ0FBQyxDQUFDSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDUSxHQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQ0oveUM7RUFDQTtFQUNBO0VBQ0E7RUFDQSxHQUFHLElBQUlGLEdBQUMsQ0FBQyxNQUFNRCxHQUFDLENBQUMsTUFBTSxDQUFDRyxHQUFDLENBQUNILEdBQUMsQ0FBQyxZQUFZLENBQUNRLEdBQUMsQ0FBQ0wsR0FBQyxDQUFDQSxHQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDSixHQUFDLENBQUMsOEJBQThCLENBQUNFLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUNSLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDTyxHQUFDLENBQUMsQ0FBQ0UsR0FBQyxDQUFDLFdBQVcsV0FBQyxNQUFNLENBQUMsU0FBUyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFdBQVcsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUNSLEdBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUNBLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFTyxHQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDRyxHQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUNBLEdBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDQSxHQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFUixHQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSVgsR0FBQyxDQUFDRCxHQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBR0MsR0FBQyxDQUFDQSxHQUFDLENBQUNELEdBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7RUNMcmlMO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJLENBQUMsQ0FBTSxNQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQSxHQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0csR0FBQyxDQUFDLE9BQU8sQ0FBQ0YsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxHQUFHLENBQUNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRixHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQ0UsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUNFLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQ0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUNELEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUdTLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0QsR0FBQyxDQUFDQSxHQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFNLE1BQTZELENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQ0pudVA7RUFDQTtFQUNBO0VBQ0E7RUFDQSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBVyxNQUFNLENBQUMsU0FBU0YsR0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsRUFBRSxDQUFD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
