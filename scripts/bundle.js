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
            ::slotted(img) { max-width:${this.itemwidth}; }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L2Nzcy10YWcuanMiLCJub2RlX21vZHVsZXMvQGxpdC9yZWFjdGl2ZS1lbGVtZW50L3JlYWN0aXZlLWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvbGl0LWh0bWwvbGl0LWh0bWwuanMiLCJub2RlX21vZHVsZXMvbGl0LWVsZW1lbnQvbGl0LWVsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvYnJpZ2h0L2JyaWdodC5qcyIsIm1vbmFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG5jb25zdCB0PXdpbmRvdyxlPXQuU2hhZG93Um9vdCYmKHZvaWQgMD09PXQuU2hhZHlDU1N8fHQuU2hhZHlDU1MubmF0aXZlU2hhZG93KSYmXCJhZG9wdGVkU3R5bGVTaGVldHNcImluIERvY3VtZW50LnByb3RvdHlwZSYmXCJyZXBsYWNlXCJpbiBDU1NTdHlsZVNoZWV0LnByb3RvdHlwZSxzPVN5bWJvbCgpLG49bmV3IFdlYWtNYXA7Y2xhc3Mgb3tjb25zdHJ1Y3Rvcih0LGUsbil7aWYodGhpcy5fJGNzc1Jlc3VsdCQ9ITAsbiE9PXMpdGhyb3cgRXJyb3IoXCJDU1NSZXN1bHQgaXMgbm90IGNvbnN0cnVjdGFibGUuIFVzZSBgdW5zYWZlQ1NTYCBvciBgY3NzYCBpbnN0ZWFkLlwiKTt0aGlzLmNzc1RleHQ9dCx0aGlzLnQ9ZX1nZXQgc3R5bGVTaGVldCgpe2xldCB0PXRoaXMubztjb25zdCBzPXRoaXMudDtpZihlJiZ2b2lkIDA9PT10KXtjb25zdCBlPXZvaWQgMCE9PXMmJjE9PT1zLmxlbmd0aDtlJiYodD1uLmdldChzKSksdm9pZCAwPT09dCYmKCh0aGlzLm89dD1uZXcgQ1NTU3R5bGVTaGVldCkucmVwbGFjZVN5bmModGhpcy5jc3NUZXh0KSxlJiZuLnNldChzLHQpKX1yZXR1cm4gdH10b1N0cmluZygpe3JldHVybiB0aGlzLmNzc1RleHR9fWNvbnN0IHI9dD0+bmV3IG8oXCJzdHJpbmdcIj09dHlwZW9mIHQ/dDp0K1wiXCIsdm9pZCAwLHMpLGk9KHQsLi4uZSk9Pntjb25zdCBuPTE9PT10Lmxlbmd0aD90WzBdOmUucmVkdWNlKCgoZSxzLG4pPT5lKyh0PT57aWYoITA9PT10Ll8kY3NzUmVzdWx0JClyZXR1cm4gdC5jc3NUZXh0O2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KXJldHVybiB0O3Rocm93IEVycm9yKFwiVmFsdWUgcGFzc2VkIHRvICdjc3MnIGZ1bmN0aW9uIG11c3QgYmUgYSAnY3NzJyBmdW5jdGlvbiByZXN1bHQ6IFwiK3QrXCIuIFVzZSAndW5zYWZlQ1NTJyB0byBwYXNzIG5vbi1saXRlcmFsIHZhbHVlcywgYnV0IHRha2UgY2FyZSB0byBlbnN1cmUgcGFnZSBzZWN1cml0eS5cIil9KShzKSt0W24rMV0pLHRbMF0pO3JldHVybiBuZXcgbyhuLHQscyl9LFM9KHMsbik9PntlP3MuYWRvcHRlZFN0eWxlU2hlZXRzPW4ubWFwKCh0PT50IGluc3RhbmNlb2YgQ1NTU3R5bGVTaGVldD90OnQuc3R5bGVTaGVldCkpOm4uZm9yRWFjaCgoZT0+e2NvbnN0IG49ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpLG89dC5saXROb25jZTt2b2lkIDAhPT1vJiZuLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsbyksbi50ZXh0Q29udGVudD1lLmNzc1RleHQscy5hcHBlbmRDaGlsZChuKX0pKX0sYz1lP3Q9PnQ6dD0+dCBpbnN0YW5jZW9mIENTU1N0eWxlU2hlZXQ/KHQ9PntsZXQgZT1cIlwiO2Zvcihjb25zdCBzIG9mIHQuY3NzUnVsZXMpZSs9cy5jc3NUZXh0O3JldHVybiByKGUpfSkodCk6dDtleHBvcnR7byBhcyBDU1NSZXN1bHQsUyBhcyBhZG9wdFN0eWxlcyxpIGFzIGNzcyxjIGFzIGdldENvbXBhdGlibGVTdHlsZSxlIGFzIHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyxyIGFzIHVuc2FmZUNTU307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jc3MtdGFnLmpzLm1hcFxuIiwiaW1wb3J0e2dldENvbXBhdGlibGVTdHlsZSBhcyB0LGFkb3B0U3R5bGVzIGFzIGl9ZnJvbVwiLi9jc3MtdGFnLmpzXCI7ZXhwb3J0e0NTU1Jlc3VsdCxhZG9wdFN0eWxlcyxjc3MsZ2V0Q29tcGF0aWJsZVN0eWxlLHN1cHBvcnRzQWRvcHRpbmdTdHlsZVNoZWV0cyx1bnNhZmVDU1N9ZnJvbVwiLi9jc3MtdGFnLmpzXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi92YXIgcztjb25zdCBlPXdpbmRvdyxyPWUudHJ1c3RlZFR5cGVzLGg9cj9yLmVtcHR5U2NyaXB0OlwiXCIsbz1lLnJlYWN0aXZlRWxlbWVudFBvbHlmaWxsU3VwcG9ydCxuPXt0b0F0dHJpYnV0ZSh0LGkpe3N3aXRjaChpKXtjYXNlIEJvb2xlYW46dD10P2g6bnVsbDticmVhaztjYXNlIE9iamVjdDpjYXNlIEFycmF5OnQ9bnVsbD09dD90OkpTT04uc3RyaW5naWZ5KHQpfXJldHVybiB0fSxmcm9tQXR0cmlidXRlKHQsaSl7bGV0IHM9dDtzd2l0Y2goaSl7Y2FzZSBCb29sZWFuOnM9bnVsbCE9PXQ7YnJlYWs7Y2FzZSBOdW1iZXI6cz1udWxsPT09dD9udWxsOk51bWJlcih0KTticmVhaztjYXNlIE9iamVjdDpjYXNlIEFycmF5OnRyeXtzPUpTT04ucGFyc2UodCl9Y2F0Y2godCl7cz1udWxsfX1yZXR1cm4gc319LGE9KHQsaSk9PmkhPT10JiYoaT09aXx8dD09dCksbD17YXR0cmlidXRlOiEwLHR5cGU6U3RyaW5nLGNvbnZlcnRlcjpuLHJlZmxlY3Q6ITEsaGFzQ2hhbmdlZDphfSxkPVwiZmluYWxpemVkXCI7Y2xhc3MgdSBleHRlbmRzIEhUTUxFbGVtZW50e2NvbnN0cnVjdG9yKCl7c3VwZXIoKSx0aGlzLl8kRWk9bmV3IE1hcCx0aGlzLmlzVXBkYXRlUGVuZGluZz0hMSx0aGlzLmhhc1VwZGF0ZWQ9ITEsdGhpcy5fJEVsPW51bGwsdGhpcy5fJEV1KCl9c3RhdGljIGFkZEluaXRpYWxpemVyKHQpe3ZhciBpO3RoaXMuZmluYWxpemUoKSwobnVsbCE9PShpPXRoaXMuaCkmJnZvaWQgMCE9PWk/aTp0aGlzLmg9W10pLnB1c2godCl9c3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKXt0aGlzLmZpbmFsaXplKCk7Y29uc3QgdD1bXTtyZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5mb3JFYWNoKCgoaSxzKT0+e2NvbnN0IGU9dGhpcy5fJEVwKHMsaSk7dm9pZCAwIT09ZSYmKHRoaXMuXyRFdi5zZXQoZSxzKSx0LnB1c2goZSkpfSkpLHR9c3RhdGljIGNyZWF0ZVByb3BlcnR5KHQsaT1sKXtpZihpLnN0YXRlJiYoaS5hdHRyaWJ1dGU9ITEpLHRoaXMuZmluYWxpemUoKSx0aGlzLmVsZW1lbnRQcm9wZXJ0aWVzLnNldCh0LGkpLCFpLm5vQWNjZXNzb3ImJiF0aGlzLnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSh0KSl7Y29uc3Qgcz1cInN5bWJvbFwiPT10eXBlb2YgdD9TeW1ib2woKTpcIl9fXCIrdCxlPXRoaXMuZ2V0UHJvcGVydHlEZXNjcmlwdG9yKHQscyxpKTt2b2lkIDAhPT1lJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5wcm90b3R5cGUsdCxlKX19c3RhdGljIGdldFByb3BlcnR5RGVzY3JpcHRvcih0LGkscyl7cmV0dXJue2dldCgpe3JldHVybiB0aGlzW2ldfSxzZXQoZSl7Y29uc3Qgcj10aGlzW3RdO3RoaXNbaV09ZSx0aGlzLnJlcXVlc3RVcGRhdGUodCxyLHMpfSxjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMH19c3RhdGljIGdldFByb3BlcnR5T3B0aW9ucyh0KXtyZXR1cm4gdGhpcy5lbGVtZW50UHJvcGVydGllcy5nZXQodCl8fGx9c3RhdGljIGZpbmFsaXplKCl7aWYodGhpcy5oYXNPd25Qcm9wZXJ0eShkKSlyZXR1cm4hMTt0aGlzW2RdPSEwO2NvbnN0IHQ9T2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpO2lmKHQuZmluYWxpemUoKSx2b2lkIDAhPT10LmgmJih0aGlzLmg9Wy4uLnQuaF0pLHRoaXMuZWxlbWVudFByb3BlcnRpZXM9bmV3IE1hcCh0LmVsZW1lbnRQcm9wZXJ0aWVzKSx0aGlzLl8kRXY9bmV3IE1hcCx0aGlzLmhhc093blByb3BlcnR5KFwicHJvcGVydGllc1wiKSl7Y29uc3QgdD10aGlzLnByb3BlcnRpZXMsaT1bLi4uT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModCksLi4uT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0KV07Zm9yKGNvbnN0IHMgb2YgaSl0aGlzLmNyZWF0ZVByb3BlcnR5KHMsdFtzXSl9cmV0dXJuIHRoaXMuZWxlbWVudFN0eWxlcz10aGlzLmZpbmFsaXplU3R5bGVzKHRoaXMuc3R5bGVzKSwhMH1zdGF0aWMgZmluYWxpemVTdHlsZXMoaSl7Y29uc3Qgcz1bXTtpZihBcnJheS5pc0FycmF5KGkpKXtjb25zdCBlPW5ldyBTZXQoaS5mbGF0KDEvMCkucmV2ZXJzZSgpKTtmb3IoY29uc3QgaSBvZiBlKXMudW5zaGlmdCh0KGkpKX1lbHNlIHZvaWQgMCE9PWkmJnMucHVzaCh0KGkpKTtyZXR1cm4gc31zdGF0aWMgXyRFcCh0LGkpe2NvbnN0IHM9aS5hdHRyaWJ1dGU7cmV0dXJuITE9PT1zP3ZvaWQgMDpcInN0cmluZ1wiPT10eXBlb2Ygcz9zOlwic3RyaW5nXCI9PXR5cGVvZiB0P3QudG9Mb3dlckNhc2UoKTp2b2lkIDB9XyRFdSgpe3ZhciB0O3RoaXMuXyRFXz1uZXcgUHJvbWlzZSgodD0+dGhpcy5lbmFibGVVcGRhdGluZz10KSksdGhpcy5fJEFMPW5ldyBNYXAsdGhpcy5fJEVnKCksdGhpcy5yZXF1ZXN0VXBkYXRlKCksbnVsbD09PSh0PXRoaXMuY29uc3RydWN0b3IuaCl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+dCh0aGlzKSkpfWFkZENvbnRyb2xsZXIodCl7dmFyIGksczsobnVsbCE9PShpPXRoaXMuXyRFUykmJnZvaWQgMCE9PWk/aTp0aGlzLl8kRVM9W10pLnB1c2godCksdm9pZCAwIT09dGhpcy5yZW5kZXJSb290JiZ0aGlzLmlzQ29ubmVjdGVkJiYobnVsbD09PShzPXQuaG9zdENvbm5lY3RlZCl8fHZvaWQgMD09PXN8fHMuY2FsbCh0KSl9cmVtb3ZlQ29udHJvbGxlcih0KXt2YXIgaTtudWxsPT09KGk9dGhpcy5fJEVTKXx8dm9pZCAwPT09aXx8aS5zcGxpY2UodGhpcy5fJEVTLmluZGV4T2YodCk+Pj4wLDEpfV8kRWcoKXt0aGlzLmNvbnN0cnVjdG9yLmVsZW1lbnRQcm9wZXJ0aWVzLmZvckVhY2goKCh0LGkpPT57dGhpcy5oYXNPd25Qcm9wZXJ0eShpKSYmKHRoaXMuXyRFaS5zZXQoaSx0aGlzW2ldKSxkZWxldGUgdGhpc1tpXSl9KSl9Y3JlYXRlUmVuZGVyUm9vdCgpe3ZhciB0O2NvbnN0IHM9bnVsbCE9PSh0PXRoaXMuc2hhZG93Um9vdCkmJnZvaWQgMCE9PXQ/dDp0aGlzLmF0dGFjaFNoYWRvdyh0aGlzLmNvbnN0cnVjdG9yLnNoYWRvd1Jvb3RPcHRpb25zKTtyZXR1cm4gaShzLHRoaXMuY29uc3RydWN0b3IuZWxlbWVudFN0eWxlcyksc31jb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O3ZvaWQgMD09PXRoaXMucmVuZGVyUm9vdCYmKHRoaXMucmVuZGVyUm9vdD10aGlzLmNyZWF0ZVJlbmRlclJvb3QoKSksdGhpcy5lbmFibGVVcGRhdGluZyghMCksbnVsbD09PSh0PXRoaXMuXyRFUyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0Q29ubmVjdGVkKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpfWVuYWJsZVVwZGF0aW5nKHQpe31kaXNjb25uZWN0ZWRDYWxsYmFjaygpe3ZhciB0O251bGw9PT0odD10aGlzLl8kRVMpfHx2b2lkIDA9PT10fHx0LmZvckVhY2goKHQ9Pnt2YXIgaTtyZXR1cm4gbnVsbD09PShpPXQuaG9zdERpc2Nvbm5lY3RlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKX1hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodCxpLHMpe3RoaXMuXyRBSyh0LHMpfV8kRU8odCxpLHM9bCl7dmFyIGU7Y29uc3Qgcj10aGlzLmNvbnN0cnVjdG9yLl8kRXAodCxzKTtpZih2b2lkIDAhPT1yJiYhMD09PXMucmVmbGVjdCl7Y29uc3QgaD0odm9pZCAwIT09KG51bGw9PT0oZT1zLmNvbnZlcnRlcil8fHZvaWQgMD09PWU/dm9pZCAwOmUudG9BdHRyaWJ1dGUpP3MuY29udmVydGVyOm4pLnRvQXR0cmlidXRlKGkscy50eXBlKTt0aGlzLl8kRWw9dCxudWxsPT1oP3RoaXMucmVtb3ZlQXR0cmlidXRlKHIpOnRoaXMuc2V0QXR0cmlidXRlKHIsaCksdGhpcy5fJEVsPW51bGx9fV8kQUsodCxpKXt2YXIgcztjb25zdCBlPXRoaXMuY29uc3RydWN0b3Iscj1lLl8kRXYuZ2V0KHQpO2lmKHZvaWQgMCE9PXImJnRoaXMuXyRFbCE9PXIpe2NvbnN0IHQ9ZS5nZXRQcm9wZXJ0eU9wdGlvbnMociksaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiB0LmNvbnZlcnRlcj97ZnJvbUF0dHJpYnV0ZTp0LmNvbnZlcnRlcn06dm9pZCAwIT09KG51bGw9PT0ocz10LmNvbnZlcnRlcil8fHZvaWQgMD09PXM/dm9pZCAwOnMuZnJvbUF0dHJpYnV0ZSk/dC5jb252ZXJ0ZXI6bjt0aGlzLl8kRWw9cix0aGlzW3JdPWguZnJvbUF0dHJpYnV0ZShpLHQudHlwZSksdGhpcy5fJEVsPW51bGx9fXJlcXVlc3RVcGRhdGUodCxpLHMpe2xldCBlPSEwO3ZvaWQgMCE9PXQmJigoKHM9c3x8dGhpcy5jb25zdHJ1Y3Rvci5nZXRQcm9wZXJ0eU9wdGlvbnModCkpLmhhc0NoYW5nZWR8fGEpKHRoaXNbdF0saSk/KHRoaXMuXyRBTC5oYXModCl8fHRoaXMuXyRBTC5zZXQodCxpKSwhMD09PXMucmVmbGVjdCYmdGhpcy5fJEVsIT09dCYmKHZvaWQgMD09PXRoaXMuXyRFQyYmKHRoaXMuXyRFQz1uZXcgTWFwKSx0aGlzLl8kRUMuc2V0KHQscykpKTplPSExKSwhdGhpcy5pc1VwZGF0ZVBlbmRpbmcmJmUmJih0aGlzLl8kRV89dGhpcy5fJEVqKCkpfWFzeW5jIF8kRWooKXt0aGlzLmlzVXBkYXRlUGVuZGluZz0hMDt0cnl7YXdhaXQgdGhpcy5fJEVffWNhdGNoKHQpe1Byb21pc2UucmVqZWN0KHQpfWNvbnN0IHQ9dGhpcy5zY2hlZHVsZVVwZGF0ZSgpO3JldHVybiBudWxsIT10JiZhd2FpdCB0LCF0aGlzLmlzVXBkYXRlUGVuZGluZ31zY2hlZHVsZVVwZGF0ZSgpe3JldHVybiB0aGlzLnBlcmZvcm1VcGRhdGUoKX1wZXJmb3JtVXBkYXRlKCl7dmFyIHQ7aWYoIXRoaXMuaXNVcGRhdGVQZW5kaW5nKXJldHVybjt0aGlzLmhhc1VwZGF0ZWQsdGhpcy5fJEVpJiYodGhpcy5fJEVpLmZvckVhY2goKCh0LGkpPT50aGlzW2ldPXQpKSx0aGlzLl8kRWk9dm9pZCAwKTtsZXQgaT0hMTtjb25zdCBzPXRoaXMuXyRBTDt0cnl7aT10aGlzLnNob3VsZFVwZGF0ZShzKSxpPyh0aGlzLndpbGxVcGRhdGUocyksbnVsbD09PSh0PXRoaXMuXyRFUyl8fHZvaWQgMD09PXR8fHQuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0VXBkYXRlKXx8dm9pZCAwPT09aT92b2lkIDA6aS5jYWxsKHQpfSkpLHRoaXMudXBkYXRlKHMpKTp0aGlzLl8kRWsoKX1jYXRjaCh0KXt0aHJvdyBpPSExLHRoaXMuXyRFaygpLHR9aSYmdGhpcy5fJEFFKHMpfXdpbGxVcGRhdGUodCl7fV8kQUUodCl7dmFyIGk7bnVsbD09PShpPXRoaXMuXyRFUyl8fHZvaWQgMD09PWl8fGkuZm9yRWFjaCgodD0+e3ZhciBpO3JldHVybiBudWxsPT09KGk9dC5ob3N0VXBkYXRlZCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuY2FsbCh0KX0pKSx0aGlzLmhhc1VwZGF0ZWR8fCh0aGlzLmhhc1VwZGF0ZWQ9ITAsdGhpcy5maXJzdFVwZGF0ZWQodCkpLHRoaXMudXBkYXRlZCh0KX1fJEVrKCl7dGhpcy5fJEFMPW5ldyBNYXAsdGhpcy5pc1VwZGF0ZVBlbmRpbmc9ITF9Z2V0IHVwZGF0ZUNvbXBsZXRlKCl7cmV0dXJuIHRoaXMuZ2V0VXBkYXRlQ29tcGxldGUoKX1nZXRVcGRhdGVDb21wbGV0ZSgpe3JldHVybiB0aGlzLl8kRV99c2hvdWxkVXBkYXRlKHQpe3JldHVybiEwfXVwZGF0ZSh0KXt2b2lkIDAhPT10aGlzLl8kRUMmJih0aGlzLl8kRUMuZm9yRWFjaCgoKHQsaSk9PnRoaXMuXyRFTyhpLHRoaXNbaV0sdCkpKSx0aGlzLl8kRUM9dm9pZCAwKSx0aGlzLl8kRWsoKX11cGRhdGVkKHQpe31maXJzdFVwZGF0ZWQodCl7fX11W2RdPSEwLHUuZWxlbWVudFByb3BlcnRpZXM9bmV3IE1hcCx1LmVsZW1lbnRTdHlsZXM9W10sdS5zaGFkb3dSb290T3B0aW9ucz17bW9kZTpcIm9wZW5cIn0sbnVsbD09b3x8byh7UmVhY3RpdmVFbGVtZW50OnV9KSwobnVsbCE9PShzPWUucmVhY3RpdmVFbGVtZW50VmVyc2lvbnMpJiZ2b2lkIDAhPT1zP3M6ZS5yZWFjdGl2ZUVsZW1lbnRWZXJzaW9ucz1bXSkucHVzaChcIjEuNi4zXCIpO2V4cG9ydHt1IGFzIFJlYWN0aXZlRWxlbWVudCxuIGFzIGRlZmF1bHRDb252ZXJ0ZXIsYSBhcyBub3RFcXVhbH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZWFjdGl2ZS1lbGVtZW50LmpzLm1hcFxuIiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEJTRC0zLUNsYXVzZVxuICovXG52YXIgdDtjb25zdCBpPXdpbmRvdyxzPWkudHJ1c3RlZFR5cGVzLGU9cz9zLmNyZWF0ZVBvbGljeShcImxpdC1odG1sXCIse2NyZWF0ZUhUTUw6dD0+dH0pOnZvaWQgMCxvPVwiJGxpdCRcIixuPWBsaXQkJHsoTWF0aC5yYW5kb20oKStcIlwiKS5zbGljZSg5KX0kYCxsPVwiP1wiK24saD1gPCR7bH0+YCxyPWRvY3VtZW50LHU9KCk9PnIuY3JlYXRlQ29tbWVudChcIlwiKSxkPXQ9Pm51bGw9PT10fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdCxjPUFycmF5LmlzQXJyYXksdj10PT5jKHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZihudWxsPT10P3ZvaWQgMDp0W1N5bWJvbC5pdGVyYXRvcl0pLGE9XCJbIFxcdFxcblxcZlxccl1cIixmPS88KD86KCEtLXxcXC9bXmEtekEtWl0pfChcXC8/W2EtekEtWl1bXj5cXHNdKil8KFxcLz8kKSkvZyxfPS8tLT4vZyxtPS8+L2cscD1SZWdFeHAoYD58JHthfSg/OihbXlxcXFxzXCInPj0vXSspKCR7YX0qPSR7YX0qKD86W14gXFx0XFxuXFxmXFxyXCInXFxgPD49XXwoXCJ8Jyl8KSl8JClgLFwiZ1wiKSxnPS8nL2csJD0vXCIvZyx5PS9eKD86c2NyaXB0fHN0eWxlfHRleHRhcmVhfHRpdGxlKSQvaSx3PXQ9PihpLC4uLnMpPT4oe18kbGl0VHlwZSQ6dCxzdHJpbmdzOmksdmFsdWVzOnN9KSx4PXcoMSksYj13KDIpLFQ9U3ltYm9sLmZvcihcImxpdC1ub0NoYW5nZVwiKSxBPVN5bWJvbC5mb3IoXCJsaXQtbm90aGluZ1wiKSxFPW5ldyBXZWFrTWFwLEM9ci5jcmVhdGVUcmVlV2Fsa2VyKHIsMTI5LG51bGwsITEpO2Z1bmN0aW9uIFAodCxpKXtpZighQXJyYXkuaXNBcnJheSh0KXx8IXQuaGFzT3duUHJvcGVydHkoXCJyYXdcIikpdGhyb3cgRXJyb3IoXCJpbnZhbGlkIHRlbXBsYXRlIHN0cmluZ3MgYXJyYXlcIik7cmV0dXJuIHZvaWQgMCE9PWU/ZS5jcmVhdGVIVE1MKGkpOml9Y29uc3QgVj0odCxpKT0+e2NvbnN0IHM9dC5sZW5ndGgtMSxlPVtdO2xldCBsLHI9Mj09PWk/XCI8c3ZnPlwiOlwiXCIsdT1mO2ZvcihsZXQgaT0wO2k8cztpKyspe2NvbnN0IHM9dFtpXTtsZXQgZCxjLHY9LTEsYT0wO2Zvcig7YTxzLmxlbmd0aCYmKHUubGFzdEluZGV4PWEsYz11LmV4ZWMocyksbnVsbCE9PWMpOylhPXUubGFzdEluZGV4LHU9PT1mP1wiIS0tXCI9PT1jWzFdP3U9Xzp2b2lkIDAhPT1jWzFdP3U9bTp2b2lkIDAhPT1jWzJdPyh5LnRlc3QoY1syXSkmJihsPVJlZ0V4cChcIjwvXCIrY1syXSxcImdcIikpLHU9cCk6dm9pZCAwIT09Y1szXSYmKHU9cCk6dT09PXA/XCI+XCI9PT1jWzBdPyh1PW51bGwhPWw/bDpmLHY9LTEpOnZvaWQgMD09PWNbMV0/dj0tMjoodj11Lmxhc3RJbmRleC1jWzJdLmxlbmd0aCxkPWNbMV0sdT12b2lkIDA9PT1jWzNdP3A6J1wiJz09PWNbM10/JDpnKTp1PT09JHx8dT09PWc/dT1wOnU9PT1ffHx1PT09bT91PWY6KHU9cCxsPXZvaWQgMCk7Y29uc3Qgdz11PT09cCYmdFtpKzFdLnN0YXJ0c1dpdGgoXCIvPlwiKT9cIiBcIjpcIlwiO3IrPXU9PT1mP3MraDp2Pj0wPyhlLnB1c2goZCkscy5zbGljZSgwLHYpK28rcy5zbGljZSh2KStuK3cpOnMrbisoLTI9PT12PyhlLnB1c2godm9pZCAwKSxpKTp3KX1yZXR1cm5bUCh0LHIrKHRbc118fFwiPD8+XCIpKygyPT09aT9cIjwvc3ZnPlwiOlwiXCIpKSxlXX07Y2xhc3MgTntjb25zdHJ1Y3Rvcih7c3RyaW5nczp0LF8kbGl0VHlwZSQ6aX0sZSl7bGV0IGg7dGhpcy5wYXJ0cz1bXTtsZXQgcj0wLGQ9MDtjb25zdCBjPXQubGVuZ3RoLTEsdj10aGlzLnBhcnRzLFthLGZdPVYodCxpKTtpZih0aGlzLmVsPU4uY3JlYXRlRWxlbWVudChhLGUpLEMuY3VycmVudE5vZGU9dGhpcy5lbC5jb250ZW50LDI9PT1pKXtjb25zdCB0PXRoaXMuZWwuY29udGVudCxpPXQuZmlyc3RDaGlsZDtpLnJlbW92ZSgpLHQuYXBwZW5kKC4uLmkuY2hpbGROb2Rlcyl9Zm9yKDtudWxsIT09KGg9Qy5uZXh0Tm9kZSgpKSYmdi5sZW5ndGg8Yzspe2lmKDE9PT1oLm5vZGVUeXBlKXtpZihoLmhhc0F0dHJpYnV0ZXMoKSl7Y29uc3QgdD1bXTtmb3IoY29uc3QgaSBvZiBoLmdldEF0dHJpYnV0ZU5hbWVzKCkpaWYoaS5lbmRzV2l0aChvKXx8aS5zdGFydHNXaXRoKG4pKXtjb25zdCBzPWZbZCsrXTtpZih0LnB1c2goaSksdm9pZCAwIT09cyl7Y29uc3QgdD1oLmdldEF0dHJpYnV0ZShzLnRvTG93ZXJDYXNlKCkrbykuc3BsaXQobiksaT0vKFsuP0BdKT8oLiopLy5leGVjKHMpO3YucHVzaCh7dHlwZToxLGluZGV4OnIsbmFtZTppWzJdLHN0cmluZ3M6dCxjdG9yOlwiLlwiPT09aVsxXT9IOlwiP1wiPT09aVsxXT9MOlwiQFwiPT09aVsxXT96Omt9KX1lbHNlIHYucHVzaCh7dHlwZTo2LGluZGV4OnJ9KX1mb3IoY29uc3QgaSBvZiB0KWgucmVtb3ZlQXR0cmlidXRlKGkpfWlmKHkudGVzdChoLnRhZ05hbWUpKXtjb25zdCB0PWgudGV4dENvbnRlbnQuc3BsaXQobiksaT10Lmxlbmd0aC0xO2lmKGk+MCl7aC50ZXh0Q29udGVudD1zP3MuZW1wdHlTY3JpcHQ6XCJcIjtmb3IobGV0IHM9MDtzPGk7cysrKWguYXBwZW5kKHRbc10sdSgpKSxDLm5leHROb2RlKCksdi5wdXNoKHt0eXBlOjIsaW5kZXg6KytyfSk7aC5hcHBlbmQodFtpXSx1KCkpfX19ZWxzZSBpZig4PT09aC5ub2RlVHlwZSlpZihoLmRhdGE9PT1sKXYucHVzaCh7dHlwZToyLGluZGV4OnJ9KTtlbHNle2xldCB0PS0xO2Zvcig7LTEhPT0odD1oLmRhdGEuaW5kZXhPZihuLHQrMSkpOyl2LnB1c2goe3R5cGU6NyxpbmRleDpyfSksdCs9bi5sZW5ndGgtMX1yKyt9fXN0YXRpYyBjcmVhdGVFbGVtZW50KHQsaSl7Y29uc3Qgcz1yLmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtyZXR1cm4gcy5pbm5lckhUTUw9dCxzfX1mdW5jdGlvbiBTKHQsaSxzPXQsZSl7dmFyIG8sbixsLGg7aWYoaT09PVQpcmV0dXJuIGk7bGV0IHI9dm9pZCAwIT09ZT9udWxsPT09KG89cy5fJENvKXx8dm9pZCAwPT09bz92b2lkIDA6b1tlXTpzLl8kQ2w7Y29uc3QgdT1kKGkpP3ZvaWQgMDppLl8kbGl0RGlyZWN0aXZlJDtyZXR1cm4obnVsbD09cj92b2lkIDA6ci5jb25zdHJ1Y3RvcikhPT11JiYobnVsbD09PShuPW51bGw9PXI/dm9pZCAwOnIuXyRBTyl8fHZvaWQgMD09PW58fG4uY2FsbChyLCExKSx2b2lkIDA9PT11P3I9dm9pZCAwOihyPW5ldyB1KHQpLHIuXyRBVCh0LHMsZSkpLHZvaWQgMCE9PWU/KG51bGwhPT0obD0oaD1zKS5fJENvKSYmdm9pZCAwIT09bD9sOmguXyRDbz1bXSlbZV09cjpzLl8kQ2w9ciksdm9pZCAwIT09ciYmKGk9Uyh0LHIuXyRBUyh0LGkudmFsdWVzKSxyLGUpKSxpfWNsYXNzIE17Y29uc3RydWN0b3IodCxpKXt0aGlzLl8kQVY9W10sdGhpcy5fJEFOPXZvaWQgMCx0aGlzLl8kQUQ9dCx0aGlzLl8kQU09aX1nZXQgcGFyZW50Tm9kZSgpe3JldHVybiB0aGlzLl8kQU0ucGFyZW50Tm9kZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX11KHQpe3ZhciBpO2NvbnN0e2VsOntjb250ZW50OnN9LHBhcnRzOmV9PXRoaXMuXyRBRCxvPShudWxsIT09KGk9bnVsbD09dD92b2lkIDA6dC5jcmVhdGlvblNjb3BlKSYmdm9pZCAwIT09aT9pOnIpLmltcG9ydE5vZGUocywhMCk7Qy5jdXJyZW50Tm9kZT1vO2xldCBuPUMubmV4dE5vZGUoKSxsPTAsaD0wLHU9ZVswXTtmb3IoO3ZvaWQgMCE9PXU7KXtpZihsPT09dS5pbmRleCl7bGV0IGk7Mj09PXUudHlwZT9pPW5ldyBSKG4sbi5uZXh0U2libGluZyx0aGlzLHQpOjE9PT11LnR5cGU/aT1uZXcgdS5jdG9yKG4sdS5uYW1lLHUuc3RyaW5ncyx0aGlzLHQpOjY9PT11LnR5cGUmJihpPW5ldyBaKG4sdGhpcyx0KSksdGhpcy5fJEFWLnB1c2goaSksdT1lWysraF19bCE9PShudWxsPT11P3ZvaWQgMDp1LmluZGV4KSYmKG49Qy5uZXh0Tm9kZSgpLGwrKyl9cmV0dXJuIEMuY3VycmVudE5vZGU9cixvfXYodCl7bGV0IGk9MDtmb3IoY29uc3QgcyBvZiB0aGlzLl8kQVYpdm9pZCAwIT09cyYmKHZvaWQgMCE9PXMuc3RyaW5ncz8ocy5fJEFJKHQscyxpKSxpKz1zLnN0cmluZ3MubGVuZ3RoLTIpOnMuXyRBSSh0W2ldKSksaSsrfX1jbGFzcyBSe2NvbnN0cnVjdG9yKHQsaSxzLGUpe3ZhciBvO3RoaXMudHlwZT0yLHRoaXMuXyRBSD1BLHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFBPXQsdGhpcy5fJEFCPWksdGhpcy5fJEFNPXMsdGhpcy5vcHRpb25zPWUsdGhpcy5fJENwPW51bGw9PT0obz1udWxsPT1lP3ZvaWQgMDplLmlzQ29ubmVjdGVkKXx8dm9pZCAwPT09b3x8b31nZXQgXyRBVSgpe3ZhciB0LGk7cmV0dXJuIG51bGwhPT0oaT1udWxsPT09KHQ9dGhpcy5fJEFNKXx8dm9pZCAwPT09dD92b2lkIDA6dC5fJEFVKSYmdm9pZCAwIT09aT9pOnRoaXMuXyRDcH1nZXQgcGFyZW50Tm9kZSgpe2xldCB0PXRoaXMuXyRBQS5wYXJlbnROb2RlO2NvbnN0IGk9dGhpcy5fJEFNO3JldHVybiB2b2lkIDAhPT1pJiYxMT09PShudWxsPT10P3ZvaWQgMDp0Lm5vZGVUeXBlKSYmKHQ9aS5wYXJlbnROb2RlKSx0fWdldCBzdGFydE5vZGUoKXtyZXR1cm4gdGhpcy5fJEFBfWdldCBlbmROb2RlKCl7cmV0dXJuIHRoaXMuXyRBQn1fJEFJKHQsaT10aGlzKXt0PVModGhpcyx0LGkpLGQodCk/dD09PUF8fG51bGw9PXR8fFwiXCI9PT10Pyh0aGlzLl8kQUghPT1BJiZ0aGlzLl8kQVIoKSx0aGlzLl8kQUg9QSk6dCE9PXRoaXMuXyRBSCYmdCE9PVQmJnRoaXMuXyh0KTp2b2lkIDAhPT10Ll8kbGl0VHlwZSQ/dGhpcy5nKHQpOnZvaWQgMCE9PXQubm9kZVR5cGU/dGhpcy4kKHQpOnYodCk/dGhpcy5UKHQpOnRoaXMuXyh0KX1rKHQpe3JldHVybiB0aGlzLl8kQUEucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodCx0aGlzLl8kQUIpfSQodCl7dGhpcy5fJEFIIT09dCYmKHRoaXMuXyRBUigpLHRoaXMuXyRBSD10aGlzLmsodCkpfV8odCl7dGhpcy5fJEFIIT09QSYmZCh0aGlzLl8kQUgpP3RoaXMuXyRBQS5uZXh0U2libGluZy5kYXRhPXQ6dGhpcy4kKHIuY3JlYXRlVGV4dE5vZGUodCkpLHRoaXMuXyRBSD10fWcodCl7dmFyIGk7Y29uc3R7dmFsdWVzOnMsXyRsaXRUeXBlJDplfT10LG89XCJudW1iZXJcIj09dHlwZW9mIGU/dGhpcy5fJEFDKHQpOih2b2lkIDA9PT1lLmVsJiYoZS5lbD1OLmNyZWF0ZUVsZW1lbnQoUChlLmgsZS5oWzBdKSx0aGlzLm9wdGlvbnMpKSxlKTtpZigobnVsbD09PShpPXRoaXMuXyRBSCl8fHZvaWQgMD09PWk/dm9pZCAwOmkuXyRBRCk9PT1vKXRoaXMuXyRBSC52KHMpO2Vsc2V7Y29uc3QgdD1uZXcgTShvLHRoaXMpLGk9dC51KHRoaXMub3B0aW9ucyk7dC52KHMpLHRoaXMuJChpKSx0aGlzLl8kQUg9dH19XyRBQyh0KXtsZXQgaT1FLmdldCh0LnN0cmluZ3MpO3JldHVybiB2b2lkIDA9PT1pJiZFLnNldCh0LnN0cmluZ3MsaT1uZXcgTih0KSksaX1UKHQpe2ModGhpcy5fJEFIKXx8KHRoaXMuXyRBSD1bXSx0aGlzLl8kQVIoKSk7Y29uc3QgaT10aGlzLl8kQUg7bGV0IHMsZT0wO2Zvcihjb25zdCBvIG9mIHQpZT09PWkubGVuZ3RoP2kucHVzaChzPW5ldyBSKHRoaXMuayh1KCkpLHRoaXMuayh1KCkpLHRoaXMsdGhpcy5vcHRpb25zKSk6cz1pW2VdLHMuXyRBSShvKSxlKys7ZTxpLmxlbmd0aCYmKHRoaXMuXyRBUihzJiZzLl8kQUIubmV4dFNpYmxpbmcsZSksaS5sZW5ndGg9ZSl9XyRBUih0PXRoaXMuXyRBQS5uZXh0U2libGluZyxpKXt2YXIgcztmb3IobnVsbD09PShzPXRoaXMuXyRBUCl8fHZvaWQgMD09PXN8fHMuY2FsbCh0aGlzLCExLCEwLGkpO3QmJnQhPT10aGlzLl8kQUI7KXtjb25zdCBpPXQubmV4dFNpYmxpbmc7dC5yZW1vdmUoKSx0PWl9fXNldENvbm5lY3RlZCh0KXt2YXIgaTt2b2lkIDA9PT10aGlzLl8kQU0mJih0aGlzLl8kQ3A9dCxudWxsPT09KGk9dGhpcy5fJEFQKXx8dm9pZCAwPT09aXx8aS5jYWxsKHRoaXMsdCkpfX1jbGFzcyBre2NvbnN0cnVjdG9yKHQsaSxzLGUsbyl7dGhpcy50eXBlPTEsdGhpcy5fJEFIPUEsdGhpcy5fJEFOPXZvaWQgMCx0aGlzLmVsZW1lbnQ9dCx0aGlzLm5hbWU9aSx0aGlzLl8kQU09ZSx0aGlzLm9wdGlvbnM9byxzLmxlbmd0aD4yfHxcIlwiIT09c1swXXx8XCJcIiE9PXNbMV0/KHRoaXMuXyRBSD1BcnJheShzLmxlbmd0aC0xKS5maWxsKG5ldyBTdHJpbmcpLHRoaXMuc3RyaW5ncz1zKTp0aGlzLl8kQUg9QX1nZXQgdGFnTmFtZSgpe3JldHVybiB0aGlzLmVsZW1lbnQudGFnTmFtZX1nZXQgXyRBVSgpe3JldHVybiB0aGlzLl8kQU0uXyRBVX1fJEFJKHQsaT10aGlzLHMsZSl7Y29uc3Qgbz10aGlzLnN0cmluZ3M7bGV0IG49ITE7aWYodm9pZCAwPT09byl0PVModGhpcyx0LGksMCksbj0hZCh0KXx8dCE9PXRoaXMuXyRBSCYmdCE9PVQsbiYmKHRoaXMuXyRBSD10KTtlbHNle2NvbnN0IGU9dDtsZXQgbCxoO2Zvcih0PW9bMF0sbD0wO2w8by5sZW5ndGgtMTtsKyspaD1TKHRoaXMsZVtzK2xdLGksbCksaD09PVQmJihoPXRoaXMuXyRBSFtsXSksbnx8KG49IWQoaCl8fGghPT10aGlzLl8kQUhbbF0pLGg9PT1BP3Q9QTp0IT09QSYmKHQrPShudWxsIT1oP2g6XCJcIikrb1tsKzFdKSx0aGlzLl8kQUhbbF09aH1uJiYhZSYmdGhpcy5qKHQpfWoodCl7dD09PUE/dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpOnRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5uYW1lLG51bGwhPXQ/dDpcIlwiKX19Y2xhc3MgSCBleHRlbmRzIGt7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT0zfWoodCl7dGhpcy5lbGVtZW50W3RoaXMubmFtZV09dD09PUE/dm9pZCAwOnR9fWNvbnN0IEk9cz9zLmVtcHR5U2NyaXB0OlwiXCI7Y2xhc3MgTCBleHRlbmRzIGt7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpLHRoaXMudHlwZT00fWoodCl7dCYmdCE9PUE/dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLm5hbWUsSSk6dGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLm5hbWUpfX1jbGFzcyB6IGV4dGVuZHMga3tjb25zdHJ1Y3Rvcih0LGkscyxlLG8pe3N1cGVyKHQsaSxzLGUsbyksdGhpcy50eXBlPTV9XyRBSSh0LGk9dGhpcyl7dmFyIHM7aWYoKHQ9bnVsbCE9PShzPVModGhpcyx0LGksMCkpJiZ2b2lkIDAhPT1zP3M6QSk9PT1UKXJldHVybjtjb25zdCBlPXRoaXMuXyRBSCxvPXQ9PT1BJiZlIT09QXx8dC5jYXB0dXJlIT09ZS5jYXB0dXJlfHx0Lm9uY2UhPT1lLm9uY2V8fHQucGFzc2l2ZSE9PWUucGFzc2l2ZSxuPXQhPT1BJiYoZT09PUF8fG8pO28mJnRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLGUpLG4mJnRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMubmFtZSx0aGlzLHQpLHRoaXMuXyRBSD10fWhhbmRsZUV2ZW50KHQpe3ZhciBpLHM7XCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fJEFIP3RoaXMuXyRBSC5jYWxsKG51bGwhPT0ocz1udWxsPT09KGk9dGhpcy5vcHRpb25zKXx8dm9pZCAwPT09aT92b2lkIDA6aS5ob3N0KSYmdm9pZCAwIT09cz9zOnRoaXMuZWxlbWVudCx0KTp0aGlzLl8kQUguaGFuZGxlRXZlbnQodCl9fWNsYXNzIFp7Y29uc3RydWN0b3IodCxpLHMpe3RoaXMuZWxlbWVudD10LHRoaXMudHlwZT02LHRoaXMuXyRBTj12b2lkIDAsdGhpcy5fJEFNPWksdGhpcy5vcHRpb25zPXN9Z2V0IF8kQVUoKXtyZXR1cm4gdGhpcy5fJEFNLl8kQVV9XyRBSSh0KXtTKHRoaXMsdCl9fWNvbnN0IGo9e086byxQOm4sQTpsLEM6MSxNOlYsTDpNLFI6dixEOlMsSTpSLFY6ayxIOkwsTjp6LFU6SCxGOlp9LEI9aS5saXRIdG1sUG9seWZpbGxTdXBwb3J0O251bGw9PUJ8fEIoTixSKSwobnVsbCE9PSh0PWkubGl0SHRtbFZlcnNpb25zKSYmdm9pZCAwIT09dD90OmkubGl0SHRtbFZlcnNpb25zPVtdKS5wdXNoKFwiMi44LjBcIik7Y29uc3QgRD0odCxpLHMpPT57dmFyIGUsbztjb25zdCBuPW51bGwhPT0oZT1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PWU/ZTppO2xldCBsPW4uXyRsaXRQYXJ0JDtpZih2b2lkIDA9PT1sKXtjb25zdCB0PW51bGwhPT0obz1udWxsPT1zP3ZvaWQgMDpzLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PW8/bzpudWxsO24uXyRsaXRQYXJ0JD1sPW5ldyBSKGkuaW5zZXJ0QmVmb3JlKHUoKSx0KSx0LHZvaWQgMCxudWxsIT1zP3M6e30pfXJldHVybiBsLl8kQUkodCksbH07ZXhwb3J0e2ogYXMgXyRMSCx4IGFzIGh0bWwsVCBhcyBub0NoYW5nZSxBIGFzIG5vdGhpbmcsRCBhcyByZW5kZXIsYiBhcyBzdmd9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWh0bWwuanMubWFwXG4iLCJpbXBvcnR7UmVhY3RpdmVFbGVtZW50IGFzIHR9ZnJvbVwiQGxpdC9yZWFjdGl2ZS1lbGVtZW50XCI7ZXhwb3J0KmZyb21cIkBsaXQvcmVhY3RpdmUtZWxlbWVudFwiO2ltcG9ydHtyZW5kZXIgYXMgZSxub0NoYW5nZSBhcyBpfWZyb21cImxpdC1odG1sXCI7ZXhwb3J0KmZyb21cImxpdC1odG1sXCI7XG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXG4gKiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQlNELTMtQ2xhdXNlXG4gKi92YXIgbCxvO2NvbnN0IHI9dDtjbGFzcyBzIGV4dGVuZHMgdHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyksdGhpcy5yZW5kZXJPcHRpb25zPXtob3N0OnRoaXN9LHRoaXMuXyREbz12b2lkIDB9Y3JlYXRlUmVuZGVyUm9vdCgpe3ZhciB0LGU7Y29uc3QgaT1zdXBlci5jcmVhdGVSZW5kZXJSb290KCk7cmV0dXJuIG51bGwhPT0odD0oZT10aGlzLnJlbmRlck9wdGlvbnMpLnJlbmRlckJlZm9yZSkmJnZvaWQgMCE9PXR8fChlLnJlbmRlckJlZm9yZT1pLmZpcnN0Q2hpbGQpLGl9dXBkYXRlKHQpe2NvbnN0IGk9dGhpcy5yZW5kZXIoKTt0aGlzLmhhc1VwZGF0ZWR8fCh0aGlzLnJlbmRlck9wdGlvbnMuaXNDb25uZWN0ZWQ9dGhpcy5pc0Nvbm5lY3RlZCksc3VwZXIudXBkYXRlKHQpLHRoaXMuXyREbz1lKGksdGhpcy5yZW5kZXJSb290LHRoaXMucmVuZGVyT3B0aW9ucyl9Y29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpLG51bGw9PT0odD10aGlzLl8kRG8pfHx2b2lkIDA9PT10fHx0LnNldENvbm5lY3RlZCghMCl9ZGlzY29ubmVjdGVkQ2FsbGJhY2soKXt2YXIgdDtzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpLG51bGw9PT0odD10aGlzLl8kRG8pfHx2b2lkIDA9PT10fHx0LnNldENvbm5lY3RlZCghMSl9cmVuZGVyKCl7cmV0dXJuIGl9fXMuZmluYWxpemVkPSEwLHMuXyRsaXRFbGVtZW50JD0hMCxudWxsPT09KGw9Z2xvYmFsVGhpcy5saXRFbGVtZW50SHlkcmF0ZVN1cHBvcnQpfHx2b2lkIDA9PT1sfHxsLmNhbGwoZ2xvYmFsVGhpcyx7TGl0RWxlbWVudDpzfSk7Y29uc3Qgbj1nbG9iYWxUaGlzLmxpdEVsZW1lbnRQb2x5ZmlsbFN1cHBvcnQ7bnVsbD09bnx8bih7TGl0RWxlbWVudDpzfSk7Y29uc3QgaD17XyRBSzoodCxlLGkpPT57dC5fJEFLKGUsaSl9LF8kQUw6dD0+dC5fJEFMfTsobnVsbCE9PShvPWdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zKSYmdm9pZCAwIT09bz9vOmdsb2JhbFRoaXMubGl0RWxlbWVudFZlcnNpb25zPVtdKS5wdXNoKFwiMy4zLjNcIik7ZXhwb3J0e3MgYXMgTGl0RWxlbWVudCxyIGFzIFVwZGF0aW5nRWxlbWVudCxoIGFzIF8kTEV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGl0LWVsZW1lbnQuanMubWFwXG4iLCJpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWwsIGNzc30gZnJvbSAnbGl0JztcblxudmFyIHNoYXJlZFN0eWxlID0gY3NzYFxuICAgIGxhYmVsIHsgZGlzcGxheTpibG9jazsgfVxuICAgIGxhYmVsLCB0aCB7IGZvbnQ6dmFyKC0tbGFiZWwtZm9udCk7IGJhY2tncm91bmQ6dmFyKC0tbGFiZWwtYmFja2dyb3VuZCk7IGNvbG9yOnZhcigtLWxhYmVsLWludmVyc2UpO3BhZGRpbmc6dmFyKC0tbGFiZWwtcGFkZGluZyk7IHRleHQtdHJhbnNmb3JtOnZhcigtLWxhYmVsLXRleHQtdHJhbnNmb3JtKTsgfVxuICAgIGlucHV0LCB0ZXh0YXJlYSB7IGZvbnQ6dmFyKC0taW5wdXQtZm9udCk7IHdpZHRoOjEwMCU7IGNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyKTsgcGFkZGluZzp2YXIoLS1pbnB1dC1wYWRkaW5nKTsgYm94LXNpemluZzpib3JkZXItYm94OyBib3JkZXItcmFkaXVzOnZhcigtLWlucHV0LXJhZGl1cyk7IGJveC1zaGFkb3c6bm9uZTsgZm9udC1zaXplOnZhcigtLWlucHV0LWZvbnQtc2l6ZSk7IGZvbnQtd2VpZ2h0OnZhcigtLWlucHV0LWZvbnQtd2VpZ2h0KTsgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLW1vei1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgaW5wdXQsIHRleHRhcmVhIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH0gLyogcmVtb3ZlIGlvcyBpbnNldCBzaGFkb3cgKi9cbiAgICBpbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMgeyBvdXRsaW5lOm5vbmU7IH1cbiAgICBpbnB1dDppbnZhbGlkIHsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWxlcnQtY29sb3IpOyB9XG4gICAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBtYXJnaW46IDA7IH1cbiAgICA6OnBsYWNlaG9sZGVyIHsgY29sb3I6dmFyKC0taW5wdXQtaW52ZXJzZSk7IG9wYWNpdHk6MC42OyB9XG5gO1xuXG5leHBvcnQgY2xhc3MgUmVzaXplQ29udHJvbGxlciB7XG4gICAgaG9zdDsgXG5cbiAgICBjb25zdHJ1Y3Rvcihob3N0KSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIGhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIFxuICAgIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDQ2MCkge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcImRlc2t0b3BcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZChcImRlc2t0b3BcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvc3Qub25SZXNpemVkKSB0aGlzLmhvc3Qub25SZXNpemVkKHdpbmRvdy5pbm5lcldpZHRoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuY2VyIHtcbiAgICBzdGF0aWMgZGVib3VuY2UoY29udGV4dCwgZnVuYywgd2FpdCkge1xuICAgICAgICBpZihmdW5jLnRpbWVvdXRJZCAhPSB1bmRlZmluZWQpIHdpbmRvdy5jbGVhclRpbWVvdXQoZnVuYy50aW1lb3V0SWQpO1xuICAgICAgICBmdW5jLnRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQpO1xuICAgICAgICB9LCB3YWl0KTtcbiAgICB9O1xufVxuXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIHtcbiAgICBzdGF0aWMgY29weUVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICBsZXQgc2VsZWN0aW9uID0gd2luZG93LmdldFNlbGVjdGlvbigpO1xuICAgICAgICBzZWxlY3Rpb24ucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgICAgIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAgIHJhbmdlLnNlbGVjdE5vZGUoZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdGlvbi5hZGRSYW5nZShyYW5nZSk7XG4gICAgICAgIGxldCBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgc2VsZWN0aW9uLnJlbW92ZUFsbFJhbmdlcygpO1xuICAgICAgICByZXR1cm4gc3VjY2Vzc2Z1bDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY29weVRleHQodGV4dCkge1xuICAgICAgICBsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZSk7XG4gICAgICAgIGUuaW5uZXJUZXh0ID0gdGV4dDsgXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29weWluZ1wiLCBlKTtcbiAgICAgICAgdGhpcy5jb3B5RWxlbWVudChlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGF0ZVV0aWwge1xuXG4gICAgc3RhdGljIGZvcm1hdFNob3J0KGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHllYXI6ICdudW1lcmljJywgbW9udGg6ICcyLWRpZ2l0JywgZGF5OiAnMi1kaWdpdCcgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIG9wdGlvbnMpOyBcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0V2tNb0RheShkYXRlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3dlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7IFxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRNb0RheShkYXRlKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge21vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7IFxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRMb25nKGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdsb25nJywgeWVhcjogJ251bWVyaWMnLCBtb250aDogJ2xvbmcnLCBkYXk6ICcyLWRpZ2l0JyB9O1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgc3RhdGljIGZvcm1hdFdpdGhUaW1lKGRhdGUpIHtcbiAgICAgICAgdmFyIGRhdGVvcHRzID0geyB5ZWFyOiAnbnVtZXJpYycsIG1vbnRoOiAnMi1kaWdpdCcsIGRheTogJzItZGlnaXQnIH07XG4gICAgICAgIGxldCB0aW1lb3B0cyA9IHsgaG91cjogJzItZGlnaXQnLCBtaW51dGU6ICcyLWRpZ2l0JyB9O1xuICAgICAgICBsZXQgdmFsID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgICAgIHJldHVybiB2YWwudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgZGF0ZW9wdHMpICsgXCIgXCIgKyAgZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHRpbWVvcHRzKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0TWVkaXVtKGRhdGUpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7IHdlZWtkYXk6ICdzaG9ydCcsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICcyLWRpZ2l0JywgeWVhcjogJ251bWVyaWMnIH07XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCBvcHRpb25zKTsgICAgICAgIFxuICAgIH1cblxuICAgIHN0YXRpYyBkYXlEaWZmKGRhdGUxLCBkYXRlMikge1xuICAgICAgICB2YXIgZDEgPSBuZXcgRGF0ZShkYXRlMSk7XG4gICAgICAgIHZhciBkMiA9IG5ldyBEYXRlKGRhdGUyKTtcbiAgICAgICAgdmFyIGRpZmYgPSBkMSAtIGQyOyBcbiAgICAgICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKGRpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgICAgICByZXR1cm4gZGF5cztcbiAgICB9XG5cbiAgICBzdGF0aWMgZm9ybWF0RGF5RGlmZihkYXRlMSwgZGF0ZTIpIHtcbiAgICAgICAgdmFyIGRpZmYgPSBEYXRlVXRpbC5kYXlEaWZmKGRhdGUyLCBkYXRlMSk7XG4gICAgICAgIHJldHVybiAoZGlmZiA9PSAxKSA/IGRpZmYgKyBcIiBuaWdodFwiIDogZGlmZiArIFwiIG5pZ2h0c1wiO1xuICAgIH1cblxuICAgIHN0YXRpYyBmaXJzdE9mV2VlayhkYXRlKSB7XG4gICAgICAgIHZhciBmb3cgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZm93LnNldERhdGUoZm93LmdldERhdGUoKSAtIGZvdy5nZXREYXkoKSk7XG4gICAgICAgIHJldHVybiBmb3c7XG4gICAgfVxuXG4gICAgc3RhdGljIGZpcnN0T2ZNb250aChkYXRlKSB7XG4gICAgICAgIHZhciBmb20gPSBuZXcgRGF0ZShkYXRlKTtcbiAgICAgICAgZm9tLnNldERhdGUoMSk7XG4gICAgICAgIHJldHVybiBmb207IFxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEJyaWdodE5hdiBleHRlbmRzIExpdEVsZW1lbnQgeyAgIFxuICAgIHJlc2l6ZXIgPSBuZXcgUmVzaXplQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IHdpZHRoOjEwMCU7IG1heC13aWR0aDp2YXIoLS1jb250ZW50LXdpZHRoKTsgbWFyZ2luOmF1dG87IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XG4gICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAjb3ZlcmxheSB7IHBvc2l0aW9uOmFic29sdXRlOyB6LWluZGV4OjEwMDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDoxNnB4OyBkaXNwbGF5Om5vbmU7IGhlaWdodDoxMDAlOyB3aWR0aDoxMDAlOyB0b3A6MHB4OyBsZWZ0OjBweDsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWludmVyc2UpOyBmaWxsOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IGNvbG9yOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IH0gXG4gICAgICAgICNjbGVhcmljb24geyBhbGlnbi1zZWxmOmZsZXgtc3RhcnQ7IG1hcmdpbjoxNnB4IDE2cHggMHB4IDE2cHg7IGZpbGw6aW5oZXJpdDsgIH1cbiAgICAgICAgI21lbnVpY29uIHsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MTZweDsgZmlsbDp2YXIoLS1iYWNrZ3JvdW5kLWludmVyc2UpOyB9XG4gICAgICAgICNtYWluIHsgd2lkdGg6MTAwJTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IH1cbiAgICAgICAgOjpzbG90dGVkKCopIHsgY29sb3I6aW5oZXJpdDsgZmlsbDppbmhlcml0OyBiYWNrZ3JvdW5kOmluaGVyaXQ7IH1cbiAgICAgICAgI21haW4gOjpzbG90dGVkKGltZykgeyBwYWRkaW5nOjI0cHg7IH1cbiAgICBgO1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIHdpZHRoOiB7IHR5cGU6TnVtYmVyIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbWVudSA9IGh0bWxgYDtcbiAgICAgICAgaWYodGhpcy53aWR0aCA8IDQ2MCkge1xuICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpblwiIHBhcnQ9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGlkPVwibWVudWljb25cIiBpY29uPVwibWVudVwiIEBjbGljaz1cIiR7dGhpcy5tZW51SWNvbkNsaWNrfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxvZ29cIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJvdmVybGF5XCIgcGFydD1cIm92ZXJsYXlcIj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJjbGVhcmljb25cIiBpY29uPVwiY2xlYXJcIiBAY2xpY2s9XCIke3RoaXMuY2xvc2VJY29uQ2xpY2t9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8c2xvdCBAY2xpY2s9XCIke3RoaXMubWVudUl0ZW1DbGlja31cIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwibG9nb1wiIHBhcnQ9XCJsb2dvXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzbG90IEBjbGljaz1cIiR7dGhpcy5tZW51SXRlbUNsaWNrfVwiPjwvc2xvdD5cbiAgICAgICAgICAgIGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheSA9IHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiI292ZXJsYXlcIik7XG4gICAgfVxuXG4gICAgb25SZXNpemVkKHdpZHRoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcbiAgICB9XG5cbiAgICBtZW51SXRlbUNsaWNrKCkge1xuICAgICAgICB0aGlzLmNsb3NlSWNvbkNsaWNrKCk7XG4gICAgfVxuXG4gICAgbWVudUljb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgdGhpcy5vdmVybGF5LmFuaW1hdGUoWyBcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVZKC01MCUpJywgb3BhY2l0eTowIH0sXG4gICAgICAgICAgICB7IHRyYW5zZm9ybTondHJhbnNsYXRlWSgwKScsIG9wYWNpdHk6MSB9IFxuICAgICAgICBdLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLW91dCcsIGZpbGw6ICdib3RoJyB9ICk7XG4gICAgfVxuICAgIGNsb3NlSWNvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLm92ZXJsYXkuYW5pbWF0ZShbIFxuICAgICAgICAgICAgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVkoMCknLCBvcGFjaXR5OjEgfSxcbiAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVZKC01MCUpJywgb3BhY2l0eTowIH0gXG4gICAgICAgIF0sIHsgZHVyYXRpb246MzAwLCBlYXNpbmc6J2Vhc2Utb3V0JywgZmlsbDogJ2JvdGgnIH0gKS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH07XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1uYXZcIiwgQnJpZ2h0TmF2KTtcblxuZXhwb3J0IGNsYXNzIEJyaWdodEljb24gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGljb246IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBmdWxscGF0aCA9IG5ldyBVUkwoaW1wb3J0Lm1ldGEudXJsKS5wYXRobmFtZTtcbiAgICAgICAgdmFyIGl4ID0gZnVsbHBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgICAgdmFyIHBhdGggPSBmdWxscGF0aC5zdWJzdHJpbmcoMCwgaXgrMSk7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTppbmxpbmUtYmxvY2s7IHdpZHRoOjI0cHg7IGhlaWdodDoyNHB4OyBmaWxsOmluaGVyaXQ7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8c3ZnIHN0eWxlPVwiaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCVcIiB2aWV3Ym94PVwiMCAwIDI0IDI0XCI+PHVzZSBocmVmPVwiJHtwYXRofWJyaWdodC5zdmcjJHt0aGlzLmljb259XCIgc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgYDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWljb25cIiwgQnJpZ2h0SWNvbik7XG5cblxuZXhwb3J0IGNsYXNzIEJyaWdodFRleHRBcmVhIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgLy8gdGhpcyBpcyBhIGZvcm0tYXNzb2NpYXRlZCBjdXN0b20gY29tcG9uZW50XG4gICAgLy8gaHR0cHM6Ly93ZWIuZGV2L21vcmUtY2FwYWJsZS1mb3JtLWNvbnRyb2xzLyBcbiAgICBzdGF0aWMgZm9ybUFzc29jaWF0ZWQgPSB0cnVlO1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTp0cnVlIH0sIFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTpCb29sZWFuIH0sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6Qm9vbGVhbiB9LFxuICAgICAgICAgICAgdHlwZTogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7IFxuICAgIH1cblxuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl92YWx1ZSA9ICh2YWx1ZSA9PSBcIm51bGxcIiB8fCB2YWx1ZSA9PSBcInVuZGVmaW5lZFwiIHx8IHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSA/IFwiXCIgOiB2YWx1ZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0eWxlcyA9IFtzaGFyZWRTdHlsZSwgY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgfVxuICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgd3JhcCB7IHdpZHRoOjEwMCU7IHBhZGRpbmc6MHB4OyB9XG4gICAgICAgIHRleHRhcmVhIHsgd2lkdGg6MTAwJTsgbWFyZ2luOjBweCAwcHggLTRweCAwcHg7IG1heC13aWR0aDoxMDAlOyByZXNpemU6dmVydGljYWw7ICB9XG4gICAgYF07XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgcGFydD1cIndyYXBcIiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMubGFiZWwgPyBodG1sYDxsYWJlbCBwYXJ0PVwibGFiZWxcIiBmb3I9XCIke3RoaXMubmFtZX1cIj4ke3RoaXMubGFiZWx9PC9sYWJlbD5gIDogaHRtbGBgfVxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBwYXJ0PVwiaW5wdXRcIiB0eXBlPVwiJHt0aGlzLnR5cGV9XCIgbmFtZT1cIiR7dGhpcy5uYW1lfVwiIEBpbnB1dD1cIiR7dGhpcy52YWx1ZUlucHV0fVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IFwiXCJ9XCI+JHt0aGlzLl92YWx1ZX08L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgOyBcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsIFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHZhbHVlSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUgfSkpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0aGlzLl92YWx1ZSA9PSBcIlwiKSB2YWxpZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRDdXN0b21WYWxpZGl0eSh2YWxpZCA/IFwiXCIgOiBcInJlcXVpcmVkIGZpZWxkXCIpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbGlkID0gdmFsaWQ7IFxuICAgICAgICByZXR1cm4gdmFsaWQ7IFxuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC10ZXh0YXJlYVwiLCBCcmlnaHRUZXh0QXJlYSk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRJbnB1dCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIC8vIHRoaXMgaXMgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGNvbXBvbmVudFxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi9tb3JlLWNhcGFibGUtZm9ybS1jb250cm9scy8gXG4gICAgc3RhdGljIGZvcm1Bc3NvY2lhdGVkID0gdHJ1ZTtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6dHJ1ZSB9LCBcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHR5cGU6Qm9vbGVhbiB9LCBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgbGFiZWw6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBwYXNzd29yZDogeyB0eXBlOkJvb2xlYW4gfSxcbiAgICAgICAgICAgIHR5cGU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBuYW1lOiB7IHR5cGU6U3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlOyBcbiAgICB9XG5cbiAgICBzZXQgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSAodmFsdWUgPT0gXCJudWxsXCIgfHwgdmFsdWUgPT0gXCJ1bmRlZmluZWRcIiB8fCB2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCkgPyBcIlwiIDogdmFsdWU7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXy5zZXRGb3JtVmFsdWUodGhpcy5fdmFsdWUpO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmludGVybmFsc18gPSB0aGlzLmF0dGFjaEludGVybmFscygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbc2hhcmVkU3R5bGUsIGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cbiAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgIHdyYXAgeyB3aWR0aDoxMDAlOyB9XG4gICAgYF07XG5cbiAgICByZW5kZXIoKSB7IFxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgcGFydD1cIndyYXBcIiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAke3RoaXMubGFiZWwgPyBodG1sYDxsYWJlbCBwYXJ0PVwibGFiZWxcIiBmb3I9XCIke3RoaXMubmFtZX1cIj4ke3RoaXMubGFiZWx9PC9sYWJlbD5gIDogaHRtbGBgfVxuICAgICAgICAgICAgICAgIDxpbnB1dCBwYXJ0PVwiaW5wdXRcIiB0eXBlPVwiJHt0aGlzLnR5cGV9XCIgbmFtZT1cIiR7dGhpcy5uYW1lfVwiIEBpbnB1dD1cIiR7dGhpcy52YWx1ZUlucHV0fVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyID8gdGhpcy5wbGFjZWhvbGRlciA6IFwiXCJ9XCIgLnZhbHVlPVwiJHt0aGlzLl92YWx1ZX1cIj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgOyBcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsIFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHZhbHVlSW5wdXQoKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5pbnB1dC52YWx1ZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUgfSkpO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlOyBcbiAgICAgICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0aGlzLl92YWx1ZSA9PSBcIlwiKSB2YWxpZCA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5pbnB1dC5zZXRDdXN0b21WYWxpZGl0eSh2YWxpZCA/IFwiXCIgOiBcInJlcXVpcmVkIGZpZWxkXCIpO1xuICAgICAgICB0aGlzLmlucHV0LnZhbGlkID0gdmFsaWQ7IFxuICAgICAgICByZXR1cm4gdmFsaWQ7IFxuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1pbnB1dFwiLCBCcmlnaHRJbnB1dCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyaWdodFRvYXN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICN3cmFwIHsgcG9zaXRpb246Zml4ZWQ7IG9wYWNpdHk6MDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzOyB0b3A6MDsgcmlnaHQ6MDsgbGVmdDowOyBib3R0b206MDsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IGRpc3BsYXk6bm9uZTsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyB6LWluZGV4OjEwMDAwOyB9XG4gICAgICAgICAgICAgICAgI21lc3NhZ2VCb3ggeyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJvZHktaW52ZXJzZSk7IG1heC13aWR0aDo0MjBweDsgYm9yZGVyLXJhZGl1czozcHg7IGNvbG9yOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IHBhZGRpbmc6MzJweDsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm1lc3NhZ2VCb3hcIj4ke3RoaXMubWVzc2FnZX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHN0YXRpYyBzaG93KG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gZXhwb3J0IHJlc29sdmUgYW5kIHJlamVjdCB0byB0aGUgZXZlbnRcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC10b2FzdFwiLCB7XG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6dHJ1ZSwgXG4gICAgICAgICAgICAgICAgYnViYmxlczp0cnVlLCBcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHsgXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsIFxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlOiByZXNvbHZlLCBcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0OiByZWplY3QgfVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzOyBcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJUZXN0IHRvYXN0XCI7XG4gICAgICAgIHRoaXMub25Ub2FzdCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIC8vIHVucGFjayByZXNvbHZlIGFuZCByZWplY3QgYW5kIHNob3cgZGlhbG9nXG4gICAgICAgICAgICBzZWxmLnJlc29sdmUgPSBlLmRldGFpbC5yZXNvbHZlOyBcbiAgICAgICAgICAgIHNlbGYubWVzc2FnZSA9IGUuZGV0YWlsLm1lc3NhZ2U7IFxuICAgICAgICAgICAgdmFyIHdyYXAgPSBzZWxmLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwXCIpO1xuICAgICAgICAgICAgd3JhcC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB3cmFwLnN0eWxlLm9wYWNpdHkgPSBcIjEuMFwiO1xuICAgICAgICAgICAgc2VsZi5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3cmFwLnN0eWxlLm9wYWNpdHkgPSBcIjAuMFwiO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3cmFwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYnJpZ2h0LXRvYXN0JywgdGhpcy5vblRvYXN0KTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JyaWdodC10b2FzdCcsIHRoaXMub25Ub2FzdCk7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC10b2FzdFwiLCBCcmlnaHRUb2FzdCk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRGaWVsZCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWw6IHsgdHlwZTogU3RyaW5nIH0sIFxuICAgICAgICAgICAgaWNvbjogeyB0eXBlOiBTdHJpbmcgfSwgXG4gICAgICAgICAgICBub3RleHQ6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICB3cmFwOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlbGxpcHNpemVTdHlsZSA9IHsgbWluV2lkdGg6XCIwcHhcIiwgd2hpdGVTcGFjZTogXCJub3dyYXBcIiwgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHRleHRPdmVyZmxvdzogXCJlbGxpcHNpc1wiIH07XG4gICAgICAgIGNvbnN0IG5vcm1hbFN0eWxlID0geyB9O1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICAjY29udGVudCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICAuZWxsaXBzaXMgeyBtaW4td2lkdGg6MHB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgICAgICAgICAgIGxhYmVsIHsgZGlzcGxheTpibG9jazsgdGV4dC10cmFuc2Zvcm06dmFyKC0tbGFiZWwtdGV4dC10cmFuc2Zvcm0pOyBmb250OnZhcigtLWxhYmVsLWZvbnQpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgJHsodGhpcy5sYWJlbCA9PSB1bmRlZmluZWQpID8gaHRtbGBgIDogaHRtbGA8bGFiZWwgZm9yPVwiY29udGVudFwiPiR7dGhpcy5sYWJlbH08L2Rpdj5gfVxuICAgICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIiBjbGFzcz1cIiR7dGhpcy53cmFwID8gXCJ3cmFwcGVkXCIgOiBcImVsbGlwc2lzXCJ9XCI+PHNsb3Q+PC9zbG90PiR7dGhpcy5ub3RleHR9PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIC8vIHRoZSBzbG90IGNoYW5nZSBldmVudCBmaXJlcyB3aGVuIG5ldyBjaGlsZCBub2RlcyBhcmUgYWRkZWQgdG8gdGhlIHNsb3RcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoXCJzbG90Y2hhbmdlXCIsIGUgPT4ge1xuICAgICAgICAgICAgc2VsZi5ub2RlcyA9IGUudGFyZ2V0LmFzc2lnbmVkTm9kZXMoKTtcbiAgICAgICAgICAgIHNlbGYubm9UZXh0ID0gc2VsZi5oYXNUZXh0KHRoaXMubm9kZXMpID8gXCJcIiA6IFwiTm9uZVwiO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhlIG11dGF0aW9uIG9ic2VydmVyIGZpcmVzIHdoZW4gdGV4dCBpbnNpZGUgY2hpbGQgbm9kZXMgaXMgdXBkYXRlZFxuICAgICAgICBjb25zdCBjb25maWcgPSB7IGNoYXJhY3RlckRhdGE6IHRydWUsIHN1YnRyZWU6IHRydWUgfTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihtdXRhdGlvbnNMaXN0LCBvYnNlcnZlcikge1xuICAgICAgICAgICAgc2VsZi5ub1RleHQgPSBzZWxmLmhhc1RleHQoc2VsZi5ub2RlcykgPyBcIlwiIDogXCJOb25lXCI7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoY2FsbGJhY2spO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMsIGNvbmZpZyk7XG4gICAgfVxuXG4gICAgaGFzVGV4dChub2Rlcykge1xuICAgICAgICB2YXIgcGF0ID0gL1xcdy87XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYocGF0LnRlc3Qobm9kZXNbaV0udGV4dENvbnRlbnQpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGlmKG5vZGVzW2ldLmNoaWxkTm9kZXMgJiYgdGhpcy5oYXNUZXh0KG5vZGVzW2ldLmNoaWxkTm9kZXMpKSByZXR1cm4gdHJ1ZTsgXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmYWxzZTsgXG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1maWVsZFwiLCBCcmlnaHRGaWVsZCk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRUYWJzIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZEluZGV4OiB7IHR5cGU6TnVtYmVyIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICN3cmFwIHsgZGlzcGxheTpmbGV4OyBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS1ib2R5LWludmVyc2UpOyBmb250OnZhcigtLWJ1dHRvbi1mb250KTsgICB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKGRpdikgeyBmbGV4OjEgMSA4MHB4OyBjb2xvcjp2YXIoLS1ib2R5LWNvbG9yKTsgZGlzcGxheTpmbGV4OyB0cmFuc2l0aW9uOmJhY2tncm91bmQgLjZzOyAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBhbGlnbi1pdGVtczpjZW50ZXI7IHBhZGRpbmc6dmFyKC0tYnV0dG9uLXBhZGRpbmcpOyB0ZXh0LXRyYW5zZm9ybTp2YXIoLS1idXR0b24tdGV4dC10cmFuc2Zvcm0pOyBjdXJzb3I6cG9pbnRlcjsgdXNlci1zZWxlY3Q6bm9uZTsgYm94LXNpemluZzpib3JkZXItYm94OyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKGRpdjpob3ZlcikgeyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJvZHktaW52ZXJzZSk7IGNvbG9yOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IH1cbiAgICAgICAgICAgICAgICA6OnNsb3R0ZWQoZGl2LnVuc2VsZWN0ZWQpIHsgYm9yZGVyLWJvdHRvbTo0cHggc29saWQgdHJhbnNwYXJlbnQ7IH0gICAgXG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKGRpdi5zZWxlY3RlZCkgeyBib3JkZXItYm90dG9tOjRweCBzb2xpZCB2YXIoLS1ib2R5LWludmVyc2UpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHZhciB0YWJzID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGFicy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFic1tpXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0YWJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGUuY3VycmVudFRhcmdldCA9PSB0YWJzW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkSW5kZXggIT0gaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGo7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChcImNoYW5nZVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJzW2pdLmNsYXNzTmFtZSA9IFwic2VsZWN0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNbal0uY2xhc3NOYW1lID0gXCJ1bnNlbGVjdGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRhYnNbaV0uY2xhc3NOYW1lID0oaSA9PSB0aGlzLnNlbGVjdGVkSW5kZXgpID8gXCJzZWxlY3RlZFwiIDogXCJ1bnNlbGVjdGVkXCI7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtdGFic1wiLCBCcmlnaHRUYWJzKTtcblxuZXhwb3J0IGNsYXNzIEJyaWdodENhcmQgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRTcmM6IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTpcImJhY2tncm91bmQtc3JjXCIgfSwgXG4gICAgICAgICAgICBqdXN0aWZ5Rm9vdGVyOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6XCJqdXN0aWZ5LWZvb3RlclwiIH0sIFxuICAgICAgICAgICAganVzdGlmeUhlYWRlcjogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOlwianVzdGlmeS1oZWFkZXJcIiB9LCBcbiAgICAgICAgICAgIGxvYWRpbmc6IHsgdHlwZTpCb29sZWFuIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5qdXN0aWZ5Rm9vdGVyID0gXCJmbGV4LWVuZFwiO1xuICAgICAgICB0aGlzLmp1c3RpZnlIZWFkZXIgPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBwb3NpdGlvbjpyZWxhdGl2ZTsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGdhcDozMnB4OyBwYWRkaW5nOjMycHg7IGFsaWduLWl0ZW1zOnN0cmV0Y2g7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgYm94LXNoYWRvdzp2YXIoLS1zaGFkb3cpOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgke3RoaXMuYmFja2dyb3VuZFNyY30pOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgI2JvZHkgeyBvdmVyZmxvdy15OmF1dG87IGZsZXg6MSAxIGF1dG87IH1cbiAgICAgICAgICAgICAgICAjZm9vdGVyIHsgZGlzcGxheTpub25lOyBwb3NpdGlvbjpyZWxhdGl2ZTsganVzdGlmeS1jb250ZW50OiR7dGhpcy5qdXN0aWZ5Rm9vdGVyfTsgYWxpZ24taXRlbXM6Y2VudGVyOyBmbGV4LXdyYXA6d3JhcDsgZ2FwOjRweDsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgfVxuICAgICAgICAgICAgICAgICNoZWFkZXIgeyBkaXNwbGF5Om5vbmU7IGp1c3RpZnktY29udGVudDoke3RoaXMuanVzdGlmeUhlYWRlcn07IGFsaWduLWl0ZW1zOmNlbnRlcjsgZmxleC13cmFwOndyYXA7IGdhcDo0cHg7IGJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyOyBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7IH1cbiAgICAgICAgICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyB3aWR0aDo2cHg7IH0gXG4gICAgICAgICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGNvbG9yOnJlZDsgYmFja2dyb3VuZDp2YXIoLS1ib2R5LWludmVyc2UpOyBib3JkZXItcmFkaXVzOjNweDsgfVxuICAgICAgICAgICAgICAgIDo6c2xvdHRlZCgqKSB7IG1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7IG1hcmdpbi1ib3R0b206MHB4ICFpbXBvcnRhbnQ7IH1cbiAgICAgICAgICAgICAgICBicmlnaHQtcHJvZ3Jlc3MgeyBwb3NpdGlvbjphYnNvbHV0ZTsgYm90dG9tOjBweDsgbGVmdDowcHg7IHdpZHRoOjEwMCU7ICB9XG4gICAgICAgICAgICAgICAgI2Jsb2NrZXIgeyBkaXNwbGF5OiR7dGhpcy5sb2FkaW5nP1wiYmxvY2tcIjpcIm5vbmVcIn07IHBvc2l0aW9uOmFic29sdXRlOyB0b3A6MHB4OyBsZWZ0OjBweDsgcmlnaHQ6MHB4OyBib3R0b206MHB4OyBiYWNrZ3JvdW5kOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IG9wYWNpdHk6MC41OyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwiaGVhZGVyXCIgaWQ9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCIgQHNsb3RjaGFuZ2U9XCIke3RoaXMuc2xvdENoYW5nZX1cIj48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImJvZHlcIiBpZD1cImJvZHlcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImZvb3RlclwiIGlkPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImJsb2NrZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCIgQHNsb3RjaGFuZ2U9XCIke3RoaXMuc2xvdENoYW5nZX1cIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxicmlnaHQtcHJvZ3Jlc3MgP3Zpc2libGU9XCIke3RoaXMubG9hZGluZ31cIj48L2JyaWdodC1wcm9ncmVzcz5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgc2xvdENoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkTm9kZXMgPSBlLnRhcmdldC5hc3NpZ25lZE5vZGVzKHtmbGF0dGVuOiB0cnVlfSk7XG4gICAgICAgIGlmKGNoaWxkTm9kZXMubGVuZ3RoID4gMCkgZS50YXJnZXQucGFyZW50RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1jYXJkXCIsIEJyaWdodENhcmQpO1xuXG5cbmV4cG9ydCBjbGFzcyBCcmlnaHREaWFsb2cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbc2hhcmVkU3R5bGUsIGNzc2BcbiAgICAgICAgOmhvc3QgeyBkaXNwbGF5Om5vbmU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYWxpZ24taXRlbXM6Y2VudGVyOyBoZWlnaHQ6MTAwJTsgd2lkdGg6MTAwJTsgcG9zaXRpb246Zml4ZWQ7IHRvcDowOyBsZWZ0OjA7IHotaW5kZXg6MTAwMDA7IGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwwLjcpOyB9XG4gICAgICAgIGJyaWdodC1jYXJkIHsgbWF4LXdpZHRoOjUwMHB4OyBtYXgtaGVpZ2h0OjkwJTsgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgICAgICAgICAgIDpob3N0IHsgbWF4LWhlaWdodDoxMDAlOyBtYXgtd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgYnJpZ2h0LWNhcmQgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgbWluLWhlaWdodDoxMDAlOyBtaW4td2lkdGg6MTAwJTsgIG1heC1oZWlnaHQ6MTAwJTsgbWF4LXdpZHRoOjEwMCU7ICB9XG4gICAgICAgIH1cbiAgICBgXTtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBsb2FkaW5nOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxicmlnaHQtY2FyZCBwYXJ0PVwiY2FyZFwiID9sb2FkaW5nPVwiJHt0aGlzLmxvYWRpbmd9XCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImhlYWRlclwiIHNsb3Q9XCJoZWFkZXJcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIiBzbG90PVwiZm9vdGVyXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9icmlnaHQtY2FyZD5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1kaWFsb2dcIiwgQnJpZ2h0RGlhbG9nKVxuXG5leHBvcnQgY2xhc3MgQnJpZ2h0U2VjdGlvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgICAgIGl0ZW13aWR0aDogeyB0eXBlOiBTdHJpbmcsIGF0dHJpYnV0ZTogXCJpdGVtLXdpZHRoXCIgfSxcbiAgICAgICAgICAgIGl0ZW1oZWlnaHQ6IHsgdHlwZTogU3RyaW5nLCBhdHRyaWJ1dGU6IFwiaXRlbS1oZWlnaHRcIiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IHdpZHRoOjEwMCU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYmFja2dyb3VuZC1pbWFnZTp1cmwoJHt0aGlzLmJhY2tncm91bmR9KTsgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXI7IGJhY2tncm91bmQtc2l6ZTpjb3ZlcjsgIH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICBkaXYgeyBtYXJnaW46YXV0bzsgaGVpZ2h0OjEwMCU7IGRpc3BsYXk6ZmxleDsgZmxleC13cmFwOndyYXA7IG1heC13aWR0aDp2YXIoLS1jb250ZW50LXdpZHRoKTsgYWxpZ24taXRlbXM6c3RyZXRjaDsgYWxpZ24tY29udGVudDpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGdhcDozMnB4OyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKCopIHsgZmxleDoxIDEgYXV0bzsgbWF4LXdpZHRoOiR7dGhpcy5pdGVtd2lkdGh9OyBoZWlnaHQ6JHt0aGlzLml0ZW1oZWlnaHR9IH1cblxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0NjBweCkge1xuICAgICAgICAgICAgICAgICAgICBkaXYgeyBwYWRkaW5nOjE2cHggIWltcG9ydGFudDsgZ2FwOjE2cHggIWltcG9ydGFudDsgIH1cbiAgICAgICAgICAgICAgICAgICAgOjpzbG90dGVkKCopIHsgZmxleDogMSAxIGF1dG87IG1heC13aWR0aDoxMDAlOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDsgXG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1zZWN0aW9uXCIsIEJyaWdodFNlY3Rpb24pO1xuXG5leHBvcnQgY2xhc3MgQnJpZ2h0TGlnaHRib3ggZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmM6IHsgdHlwZTpTdHJpbmcsIGF0dHJpYnV0ZTpcInNyY1wiIH0sIFxuICAgICAgICAgICAgY2FwdGlvbjogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOlwiY2FwdGlvblwifSwgXG4gICAgICAgICAgICBwYWdpbmc6IHsgdHlwZTpCb29sZWFuLCBhdHRyaWJ1dGU6XCJwYWdpbmdcIiB9LCBcbiAgICAgICAgICAgIGN1cnJlbnQ6IHsgdHlwZTpPYmplY3QgfSAvLyBjdXJyZW50IGltZyBvciBmaWd1cmUgY2hpbGQgb2YgdGhlIGxpZ2h0Ym94XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucGFnaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpub25lOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgdG9wOjBweDsgbGVmdDowcHg7IHotaW5kZXg6MTAwOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IHBvc2l0aW9uOmZpeGVkOyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYmFja2dyb3VuZC1jb2xvcjpibGFjazsgdXNlci1zZWxlY3Q6bm9uZTsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGltZyB7IG1heC1oZWlnaHQ6OTAlOyBtYXgtd2lkdGg6MTAwJTsgYm94LXNpemluZzpib3JkZXItYm94OyB1c2VyLXNlbGVjdDpub25lOyB9XG4gICAgICAgICAgICAgICAgZGl2IHsgY29sb3I6d2hpdGU7IHBhZGRpbmc6MTZweDsgfVxuICAgICAgICAgICAgICAgIGJyaWdodC1pY29uIHsgaGVpZ2h0OjMycHg7IHdpZHRoOjMycHg7IHBvc2l0aW9uOmFic29sdXRlOyBmaWxsOndoaXRlOyBmaWx0ZXI6IGRyb3Atc2hhZG93KDFweCAxcHggM3B4ICMwMDAwMDApOyB9XG4gICAgICAgICAgICAgICAgI2Nsb3NlaWNvbiB7IHRvcDoxNnB4OyByaWdodDoxNnB4OyB6LWluZGV4OjE1MDsgfVxuICAgICAgICAgICAgICAgICNuZXh0aWNvbiB7IHJpZ2h0OjE2cHg7IHRvcDo1MCU7IHotaW5kZXg6MTUwOyB0cmFuc2xhdGU6MHB4IC01MCU7IGRpc3BsYXk6JHsgdGhpcy5wYWdpbmcgJiYgdGhpcy5oYXNOZXh0ID8gXCJibG9ja1wiIDogXCJub25lXCIgfTsgfVxuICAgICAgICAgICAgICAgICNwcmV2aWNvbiB7IGxlZnQ6MTZweDsgdG9wOjUwJTsgei1pbmRleDoxNTA7IHRyYW5zbGF0ZTowcHggLTUwJTsgZGlzcGxheTokeyB0aGlzLnBhZ2luZyAmJiB0aGlzLmhhc1ByZXYgPyBcImJsb2NrXCIgOiBcIm5vbmVcIiB9OyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGlkPVwiY2xvc2VpY29uXCIgaWNvbj1cImNsZWFyXCIgQGNsaWNrPVwiJHt0aGlzLmNsb3NlQ2xpY2t9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpZD1cIm5leHRpY29uXCIgaWNvbj1cImFycm93LWZvcndhcmRcIiBAY2xpY2s9XCIke3RoaXMubmV4dENsaWNrfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICA8YnJpZ2h0LWljb24gaWQ9XCJwcmV2aWNvblwiIGljb249XCJhcnJvdy1iYWNrXCIgQGNsaWNrPVwiJHt0aGlzLnByZXZDbGlja31cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuc3JjfVwiLz5cbiAgICAgICAgICAgIDxkaXY+JHt0aGlzLmNhcHRpb259PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmltZyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgIH1cblxuICAgIHNob3coZWxlKSB7XG4gICAgICAgIHRoaXMubG9hZChlbGUpO1xuICAgICAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIlxuICAgICAgICB0aGlzLmFuaW1hdGUoWyBcbiAgICAgICAgICAgIHsgb3BhY2l0eTowIH0sXG4gICAgICAgICAgICB7IG9wYWNpdHk6MSB9IFxuICAgICAgICBdLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLW91dCcsIGZpbGw6ICdib3RoJyB9ICk7XG4gICAgfVxuXG4gICAgbG9hZChlbGUpIHtcbiAgICAgICAgdGhpcy5jYXB0aW9uID0gZWxlLmdldEF0dHJpYnV0ZShcInRpdGxlXCIpOyBcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZWxlOyBcbiAgICAgICAgdGhpcy5zcmMgPSBlbGUuc3JjOyBcbiAgICAgICAgdGhpcy5oYXNOZXh0ID0gdGhpcy5jdXJyZW50Lm5leHRFbGVtZW50U2libGluZyAhPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1ByZXYgPSB0aGlzLmN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZyAhPSBudWxsO1xuICAgIH1cblxuICAgIGNsb3NlQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuYW5pbWF0ZShbIFxuICAgICAgICAgICAgeyBvcGFjaXR5OjEgfSxcbiAgICAgICAgICAgIHsgb3BhY2l0eTowIH0gXG4gICAgICAgIF0sIHsgZHVyYXRpb246MzAwLCBlYXNpbmc6J2Vhc2Utb3V0JywgZmlsbDogJ2JvdGgnIH0gKS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIG5leHRDbGljaygpIHtcbiAgICAgICAgdGhpcy5pbWcuYW5pbWF0ZShbIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTowIH1dLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLW91dCcsIGZpbGw6ICdib3RoJyB9ICkub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5jdXJyZW50Lm5leHRFbGVtZW50U2libGluZyk7XG4gICAgICAgICAgICB0aGlzLmltZy5hbmltYXRlKFsgXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoNTAlKScsIG9wYWNpdHk6MCB9LFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVYKDApJywgb3BhY2l0eToxIH0gXG4gICAgICAgICAgICBdLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLWluJywgZmlsbDogJ2JvdGgnIH0gKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBwcmV2Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuaW1nLmFuaW1hdGUoWyB7IHRyYW5zZm9ybTondHJhbnNsYXRlWCg1MCUpJywgb3BhY2l0eTowIH1dLCB7IGR1cmF0aW9uOjMwMCwgZWFzaW5nOidlYXNlLW91dCcsIGZpbGw6ICdib3RoJyB9ICkub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvYWQodGhpcy5jdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcpO1xuICAgICAgICAgICAgdGhpcy5pbWcuYW5pbWF0ZShbIFxuICAgICAgICAgICAgICAgIHsgdHJhbnNmb3JtOid0cmFuc2xhdGVYKC01MCUpJywgb3BhY2l0eTowIH0sXG4gICAgICAgICAgICAgICAgeyB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoMCknLCBvcGFjaXR5OjEgfSBcbiAgICAgICAgICAgIF0sIHsgZHVyYXRpb246MzAwLCBlYXNpbmc6J2Vhc2UtaW4nLCBmaWxsOiAnYm90aCcgfSApO1xuICAgICAgICB9O1xuICAgIH1cblxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1saWdodGJveFwiLCBCcmlnaHRMaWdodGJveCk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRHYWxsZXJ5R3JpZCBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHJlc2l6ZXIgPSBuZXcgUmVzaXplQ29udHJvbGxlcih0aGlzKTtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICB0ZW1wbGF0ZTogeyB0eXBlOlN0cmluZywgYXR0cmlidXRlOlwidGVtcGxhdGVcIiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgOmhvc3QgeyB3aWR0aDoxMDAlOyBkaXNwbGF5OmdyaWQ7IGJveC1zaXppbmc6Ym9yZGVyLWJveDtncmlkLXRlbXBsYXRlLXJvd3M6cmVwZWF0KG1pbi1jb250ZW50KTsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNTBweCwgMWZyKSk7IGFsaWduLWl0ZW1zOnN0cmV0Y2g7IGdhcDo4cHg7IH1cbiAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKCopIHsgd2lkdGg6MTAwJTsgYm94LXNpemluZzpib3JkZXItYm94OyBvYmplY3QtZml0OmNvbnRhaW47IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHNsb3QgQGNsaWNrPVwiJHt0aGlzLml0ZW1DbGlja31cIj48L3Nsb3Q+XG4gICAgICAgIDxicmlnaHQtbGlnaHRib3g+PC9icmlnaHQtbGlnaHRib3g+XG4gICAgICAgIGA7IFxuICAgIH1cblxuICAgIGl0ZW1DbGljayhlKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiYnJpZ2h0LWxpZ2h0Ym94XCIpLnNob3coZS5zcmNFbGVtZW50KTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWdhbGxlcnktZ3JpZFwiLCBCcmlnaHRHYWxsZXJ5R3JpZCk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRHYWxsZXJ5U2Nyb2xsZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICByZXNpemVyID0gbmV3IFJlc2l6ZUNvbnRyb2xsZXIodGhpcyk7XG4gICAgXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXRlbXdpZHRoOiB7IHR5cGU6IFN0cmluZywgYXR0cmlidXRlOlwiaXRlbS13aWR0aFwiIH0sIFxuICAgICAgICAgICAgZ2FwOiB7IHR5cGU6U3RyaW5nLCBhdHRyaWJ1dGU6XCJnYXBcIiB9LCBcbiAgICAgICAgICAgIF9pbmRleDogeyB0eXBlOk51bWJlciB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaXRlbXdpZHRoID0gXCIzMCVcIiwgXG4gICAgICAgIHRoaXMuZ2FwID0gXCI1JVwiXG4gICAgICAgIHRoaXMuX2luZGV4ID0gMDsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyB3aWR0aDoxMDAlOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IHBvc2l0aW9uOnJlbGF0aXZlOyAgfVxuICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAjbWFpbiB7IG1heC13aWR0aDp2YXIoLS1jb250ZW50LXdpZHRoKTsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDsgZ2FwOiR7dGhpcy5nYXB9OyBvdmVyZmxvdy14OnNjcm9sbDsgfVxuICAgICAgICAgICAgOjpzbG90dGVkKGltZykgeyBtYXgtd2lkdGg6JHt0aGlzLml0ZW13aWR0aH07IH1cbiAgICAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgICAgICAgICAjbWFpbiB7IC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyB9XG4gICAgICAgICAgICAjcHJldiwgI25leHQgeyBwb3NpdGlvbjphYnNvbHV0ZTsgdG9wOjUwJTt0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwJSwgLTUwJSk7IGhlaWdodDozMnB4OyB3aWR0aDozMnB4OyBmaWxsOndoaXRlOyBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggMnB4ICMwMDAwMDApOyB9XG4gICAgICAgICAgICAjcHJldiB7IGxlZnQ6MzJweDsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAjbmV4dCB7IHJpZ2h0OjMycHg7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGJyaWdodC1pY29uIGlkPVwicHJldlwiIEBjbGljaz1cIiR7dGhpcy5wcmV2fVwiIGljb249XCJhcnJvdy1iYWNrXCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgPGJyaWdodC1pY29uIGlkPVwibmV4dFwiIEBjbGljaz1cIiR7dGhpcy5uZXh0fVwiIGljb249XCJhcnJvdy1mb3J3YXJkXCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgPGRpdiBpZD1cIm1haW5cIj5cbiAgICAgICAgICAgIDxzbG90IEBjbGljaz1cIiR7dGhpcy5pdGVtQ2xpY2t9XCI+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJyaWdodC1saWdodGJveD48L2JyaWdodC1saWdodGJveD5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBjb25zdCBzbG90ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgICAgICAgdGhpcy5pbWdzID0gc2xvdC5hc3NpZ25lZEVsZW1lbnRzKHtmbGF0dGVuOiB0cnVlfSk7XG4gICAgICAgIHRoaXMucHJldkljb24gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNwcmV2XCIpO1xuICAgICAgICB0aGlzLm5leHRJY29uID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dFwiKTtcbiAgICAgICAgdGhpcy5pbml0U2Nyb2xsZXIoKTsgXG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdFNjcm9sbGVyKCkge1xuICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZUNvbXBsZXRlOyBcbiAgICAgICAgdmFyIGdhbGxlcnkgPSB0aGlzLm9mZnNldFdpZHRoO1xuICAgICAgICB2YXIgaW1nID0gdGhpcy5pbWdzWzBdLndpZHRoO1xuICAgICAgICB2YXIgbWFpbiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG4gICAgICAgIGlmKGltZyA+IGdhbGxlcnkpIHtcbiAgICAgICAgICAgIHZhciB0b3dpZHRoID0gKGltZy1nYWxsZXJ5KTtcbiAgICAgICAgICAgIG1haW4uc2Nyb2xsVG8odG93aWR0aCwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICBpZih0aGlzLl9pbmRleCA8IHRoaXMuaW1ncy5sZW5ndGgtMSkgdGhpcy5faW5kZXgrKztcbiAgICAgICAgdGhpcy5zY3JvbGwoKTtcbiAgICB9XG5cbiAgICBwcmV2KCkge1xuICAgICAgICBpZih0aGlzLl9pbmRleCA+IDApIHRoaXMuX2luZGV4LS07XG4gICAgICAgIHRoaXMuc2Nyb2xsKCk7XG4gICAgfVxuXG4gICAgc2Nyb2xsKCkge1xuICAgICAgICB0aGlzLm5leHRJY29uLnN0eWxlLmRpc3BsYXkgPSAodGhpcy5faW5kZXggPT0gdGhpcy5pbWdzLmxlbmd0aC0xKSA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgICB0aGlzLnByZXZJY29uLnN0eWxlLmRpc3BsYXkgPSAodGhpcy5faW5kZXggPT0gMCkgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgICAgdGhpcy5pbWdzW3RoaXMuX2luZGV4XS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICduZWFyZXN0JywgaW5saW5lOiAnY2VudGVyJyB9KTtcbiAgICB9XG5cbiAgICBpdGVtQ2xpY2soZSkge1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcImJyaWdodC1saWdodGJveFwiKS5zaG93KGUuc3JjRWxlbWVudCk7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1nYWxsZXJ5LXNjcm9sbGVyXCIsIEJyaWdodEdhbGxlcnlTY3JvbGxlcik7XG5cblxuZXhwb3J0IGNsYXNzIEJyaWdodEVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIC8vIHRoaXMgaXMgYSBmb3JtLWFzc29jaWF0ZWQgY3VzdG9tIGNvbXBvbmVudFxuICAgIC8vIGh0dHBzOi8vd2ViLmRldi9tb3JlLWNhcGFibGUtZm9ybS1jb250cm9scy8gXG4gICAgc3RhdGljIGZvcm1Bc3NvY2lhdGVkID0gdHJ1ZTtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICB2YWx1ZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICAgICAgbmFtZTogeyB0eXBlOiBTdHJpbmcgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmVkaXRvclJlZiA9IG51bGw7XG4gICAgICAgIHRoaXMuaW50ZXJuYWxzXyA9IHRoaXMuYXR0YWNoSW50ZXJuYWxzKCk7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlID0gZmFsc2U7IFxuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgbWluLXdpZHRoOjEwMCU7IH1cbiAgICAgICAgaW1nIHsgbWF4LXdpZHRoOiAxMDAlOyByZXNpemU7Ym90aDsgaGVpZ2h0OmF1dG87IH1cbiAgICAgICAgI3Rvb2xiYXIgeyBkaXNwbGF5OmZsZXg7IGdhcDoycHg7IGZsZXgtd3JhcDp3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6c3RyZXRjaDsgfVxuICAgICAgICAjdG9vbGJhciAqIHsgZmxleDoxIDEgYXV0bzsgYmFja2dyb3VuZDp2YXIoLS1sYWJlbC1iYWNrZ3JvdW5kKTsgZmlsbDp2YXIoLS1sYWJlbC1pbnZlcnNlKTsgcGFkZGluZzo0cHg7ICB9XG4gICAgICAgICNodG1sdGV4dCB7IGZsZXg6MSAxIGF1dG87IHdpZHRoOjEwMCU7IG1pbi1oZWlnaHQ6MTUwcHg7IGRpc3BsYXk6YmxvY2s7ICBib3gtc2l6aW5nOmJvcmRlci1ib3g7IG91dGxpbmU6bm9uZTsgYm9yZGVyOnZhcigtLWlucHV0LWJvcmRlcik7cGFkZGluZzp2YXIoLS1pbnB1dC1wYWRkaW5nKTsgIH1cbiAgICAgICAgI2VkaXRhYmxlIHsgZmxleDoxIDEgYXV0bzsgbWluLWhlaWdodDoxNTBweDsgYm94LXNpemluZzpib3JkZXItYm94OyBjdXJzb3I6dGV4dDsgYmFja2dyb3VuZDp2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kKTtwYWRkaW5nOnZhcigtLWlucHV0LXBhZGRpbmcpOyBib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyKTsgb3V0bGluZTpub25lOyBjb2xvcjp2YXIoLS1pbnB1dC1pbnZlcnNlKTsgYm9yZGVyLXJhZGl1czp2YXIoLS1pbnB1dC1yYWRpdXMpOyB9XG4gICAgICAgIGxhYmVsIHsgbWFyZ2luLWJvdHRvbToycHg7IGRpc3BsYXk6YmxvY2s7IGZvbnQ6dmFyKC0tbGFiZWwtZm9udCk7IGJhY2tncm91bmQ6dmFyKC0tbGFiZWwtYmFja2dyb3VuZCk7IGNvbG9yOnZhcigtLWxhYmVsLWludmVyc2UpO3BhZGRpbmc6dmFyKC0tbGFiZWwtcGFkZGluZyk7IHRleHQtdHJhbnNmb3JtOnZhcigtLWxhYmVsLXRleHQtdHJhbnNmb3JtKTsgfVxuICAgIGA7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICA8ZGl2IGlkPVwid3JhcFwiPlxuICAgICAgICAgICAgJHt0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgcGFydD1cImxhYmVsXCIgZm9yPVwiJHt0aGlzLm5hbWV9XCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYH1cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ0b29sYmFyXCIgcGFydD1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cImZvcm1hdC1ib2xkXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkJvbGR9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cImZvcm1hdC1pdGFsaWNcIiBAbW91c2Vkb3duPVwiJHt0aGlzLm9uSXRhbGljfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJmb3JtYXQtdW5kZXJsaW5lZFwiIEBtb3VzZWRvd249XCIke3RoaXMub25VbmRlcmxpbmV9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cImluc2VydC1saW5rXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkxpbmt9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWljb24gaWNvbj1cInRpdGxlXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkhlYWRlcn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwiaW5zZXJ0LXBob3RvXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkltYWdlfVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJmb3JtYXQtYWxpZ24tbGVmdFwiIEBtb3VzZWRvd249XCIke3RoaXMub25MZWZ0fVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJmb3JtYXQtYWxpZ24tY2VudGVyXCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vbkNlbnRlcn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwiZm9ybWF0LWFsaWduLXJpZ2h0XCIgQG1vdXNlZG93bj1cIiR7dGhpcy5vblJpZ2h0fVwiPjwvYnJpZ2h0LWljb24+XG4gICAgICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCJtb2RlLWVkaXRcIiBAbW91c2Vkb3duPVwiJHt0aGlzLm9uTW9kZX1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZWRpdGFibGVcIiBjbGFzcz1cImVkaXRhYmxlXCIgcGFydD1cImVkaXRhYmxlXCIgY29udGVudGVkaXRhYmxlPVwidHJ1ZVwiIEBpbnB1dD1cIiR7dGhpcy5vbklucHV0fVwiPjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiaHRtbHRleHRcIiBuYW1lPVwiJHt0aGlzLm5hbWV9XCIgQGlucHV0PVwiJHt0aGlzLm9uVGV4dElucHV0fVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+JHt0aGlzLnZhbHVlfTwvdGV4dGFyZWE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JSZWYgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNlZGl0YWJsZVwiKTtcbiAgICAgICAgdGhpcy5lZGl0b3JSZWYuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbk1vZGUoKSB7XG4gICAgICAgIHRoaXMuX2VkaXRNb2RlID0gIXRoaXMuX2VkaXRNb2RlOyBcbiAgICAgICAgdGhpcy5lZGl0b3JSZWYuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2VkaXRNb2RlID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiI2h0bWx0ZXh0XCIpLnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9lZGl0TW9kZSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuICAgIH1cblxuICAgIG9uSW5wdXQoKSB7XG4gICAgICAgIGlmICh0aGlzLmVkaXRvclJlZikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5lZGl0b3JSZWYuaW5uZXJIVE1MO1xuICAgICAgICB0aGlzLmludGVybmFsc18uc2V0Rm9ybVZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25UZXh0SW5wdXQoKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNodG1sdGV4dFwiKS52YWx1ZTtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5lZGl0b3JSZWYuaW5uZXJIVE1MID0gdGhpcy52YWx1ZTsgXG4gICAgfVxuXG4gICAgb25Cb2xkKCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnYm9sZCcsIGZhbHNlLCBudWxsKTtcbiAgICB9XG4gICAgb25JdGFsaWMoKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdpdGFsaWMnLCBmYWxzZSwgbnVsbCk7XG4gICAgfVxuICAgIG9uVW5kZXJsaW5lKCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgndW5kZXJsaW5lJywgZmFsc2UsIG51bGwpO1xuICAgIH1cbiAgICBvbkxlZnQoKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5TGVmdCcsIGZhbHNlLCBudWxsKTtcbiAgICB9XG4gICAgb25DZW50ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdqdXN0aWZ5Q2VudGVyJywgZmFsc2UsIG51bGwpO1xuICAgIH1cbiAgICBvblJpZ2h0KCkge1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnanVzdGlmeVJpZ2h0JywgZmFsc2UsIG51bGwpO1xuICAgIH1cblxuICAgIG9uTGluaygpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gcHJvbXB0KFwiVXJsIHRvIExpbmtcIik7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiQ3JlYXRlTGlua1wiLCBmYWxzZSwgaW5wdXQpO1xuICAgIH1cblxuICAgIG9uSGVhZGVyKCkge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gdGhpcy5yZW5kZXJSb290LmdldFNlbGVjdGlvbigpO1xuICAgICAgICB2YXIgcmFuZ2UgPSBzZWxlY3Rpb24uZ2V0UmFuZ2VBdCgwKTtcbiAgICAgICAgdmFyIGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICByYW5nZS5zdXJyb3VuZENvbnRlbnRzKGgxKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuZWRpdG9yUmVmLmlubmVySFRNTDtcbiAgICAgICAgdGhpcy5pbnRlcm5hbHNfLnNldEZvcm1WYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkltYWdlKCkge1xuICAgICAgICB2YXIgaW5wdXQgPSBwcm9tcHQoXCJVcmwgdG8gSW1hZ2VcIik7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiSW5zZXJ0SW1hZ2VcIiwgZmFsc2UsIGlucHV0KTtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYnJpZ2h0LWVkaXRvcicsIEJyaWdodEVkaXRvcik7XG4gIFxuXG5leHBvcnQgY2xhc3MgQnJpZ2h0TG9hZGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2aXNpYmxlOiB7IHR5cGU6IEJvb2xlYW4gfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IHZpc2liaWxpdHk6JHt0aGlzLnZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9IH1cbiAgICAgICAgICAgIC53cmFwIHsgaGVpZ2h0OjEwMCU7IHdpZHRoOjEwMCU7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyAgfVxuICAgICAgICAgICAgc3ZnIHsgZmlsbDp2YXIoLS10ZXJ0aWFyeSk7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBcIiBzdHlsZT1cInZpc2liaWxpdHk6JHt0aGlzLnZpc2libGUgPyAndmlzaWJsZScgOiAnaGlkZGVuJ31cIj5cbiAgICAgICAgICAgIDxzdmcgaWQ9XCJsb2FkZXJcIiB3aWR0aD1cIjQ4XCIgaGVpZ2h0PVwiNDhcIiB2aWV3Qm94PVwiMjQgMjQgNTAgNTBcIj5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiPlxuICAgICAgICAgICAgICAgIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9XCJ0cmFuc2Zvcm1cIiBhdHRyaWJ1dGVUeXBlPVwiWE1MXCIgdHlwZT1cInJvdGF0ZVwiIGR1cj1cIjFzXCIgZnJvbT1cIjAgNTAgNTBcInRvPVwiMzYwIDUwIDUwXCIgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCIvPlxuICAgICAgICAgICAgICAgIDwvcGF0aD5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj5cbiAgICBgO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtbG9hZGVyXCIsIEJyaWdodExvYWRlcik7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRQcm9ncmVzcyBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmlzaWJsZTogeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OnRydWUgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgdmlzaWJpbGl0eToke3RoaXMudmlzaWJsZSA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nIH0gfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIC5zbGlkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgd2lkdGg6MTAwJTsgaGVpZ2h0OjVweDsgb3ZlcmZsb3cteDogaGlkZGVuOyB9XG4gICAgICAgICAgICAgICAgLmxpbmUgeyBwb3NpdGlvbjphYnNvbHV0ZTsgb3BhY2l0eTogMC40OyBiYWNrZ3JvdW5kOnZhcigtLWJvZHktaW52ZXJzZSk7IHdpZHRoOjE1MCU7IGhlaWdodDo1cHg7IH1cbiAgICAgICAgICAgICAgICAuc3VibGluZSB7IHBvc2l0aW9uOmFic29sdXRlOyBiYWNrZ3JvdW5kOnZhcigtLWJvZHktaW52ZXJzZSk7IGhlaWdodDo1cHg7ICB9XG4gICAgICAgICAgICAgICAgLmluYyB7IGFuaW1hdGlvbjogaW5jcmVhc2UgMnMgaW5maW5pdGU7IH1cbiAgICAgICAgICAgICAgICAuZGVjIHsgYW5pbWF0aW9uOiBkZWNyZWFzZSAycyAwLjVzIGluZmluaXRlOyB9XG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBpbmNyZWFzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20geyBsZWZ0OiAtNSU7IHdpZHRoOiA1JTsgfVxuICAgICAgICAgICAgICAgICAgICB0byB7IGxlZnQ6IDEzMCU7IHdpZHRoOiAxMDAlO31cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBkZWNyZWFzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZyb20geyBsZWZ0OiAtODAlOyB3aWR0aDogODAlOyB9XG4gICAgICAgICAgICAgICAgICAgIHRvIHsgbGVmdDogMTEwJTsgd2lkdGg6IDEwJTt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VibGluZSBpbmNcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1YmxpbmUgZGVjXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtcHJvZ3Jlc3NcIiwgQnJpZ2h0UHJvZ3Jlc3MpO1xuXG5leHBvcnQgY2xhc3MgQnJpZ2h0U2VsZWN0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHJlcXVpcmVkOiB7IHR5cGU6Qm9vbGVhbiB9LCBcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgdGV4dDogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICAgICAgbGFiZWw6IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7IFxuICAgICAgICB0aGlzLnBsYWNlaG9sZGVyID0gXCJcIjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0eWxlcyA9IFtzaGFyZWRTdHlsZSwgY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IGN1cnNvcjpwb2ludGVyOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cbiAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICN3cmFwIHsgcG9zaXRpb246cmVsYXRpdmU7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgd2lkdGg6MTAwJTsgfVxuICAgICAgICBpbnB1dCB7IGN1cnNvcjpwb2ludGVyOyB9XG4gICAgICAgICNkcm9wZG93biB7IHotaW5kZXg6MTA7IG91dGxpbmU6bm9uZTsgY29sb3I6dmFyKC0taW5wdXQtaW52ZXJzZSk7IGJhY2tncm91bmQtY29sb3I6dmFyKC0taW5wdXQtYmFja2dyb3VuZCk7IGRpc3BsYXk6bm9uZTsgcG9zaXRpb246YWJzb2x1dGU7IHRvcDozNHB4OyBsZWZ0OjBweDsgcmlnaHQ6MHB4OyBib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyKTsgdXNlci1zZWxlY3Q6bm9uZTsgfVxuICAgICAgICAjZHJvcGRvd24gOjpzbG90dGVkKCopIHsgcGFkZGluZzoxNnB4OyB9XG4gICAgICAgICNkcm9wZG93biA6OnNsb3R0ZWQoKjpob3ZlcikgeyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBjb2xvcjp2YXIoLS1pbnB1dC1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAjaWNvbiB7IHBvc2l0aW9uOmFic29sdXRlOyBoZWlnaHQ6MjRweDsgd2lkdGg6MjBweDsgcmlnaHQ6NHB4OyB0b3A6NnB4OyBmaWxsOmdyYXk7IHBvaW50ZXItZXZlbnRzOm5vbmU7IH1cbiAgICBgXTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICR7IHRoaXMubGFiZWwgPyBodG1sYDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYCB9XG4gICAgICAgIDxkaXYgaWQ9XCJ3cmFwXCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImlucHV0XCIgdGFiaW5kZXg9XCItMVwiIEBtb3VzZWRvd249XCIke3RoaXMuaW5wdXRNb3VzZURvd259XCIgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXJ9XCIvPlxuICAgICAgICAgICAgPCEtLSB0YWJpbmRleCBuZWNlc3NhcnkgZm9yIGRpdiB0byBnYWluIGZvY3VzIC0tPlxuICAgICAgICAgICAgPGRpdiBpZD1cImRyb3Bkb3duXCIgQGJsdXI9XCIke3RoaXMuc2xvdEJsdXJ9XCIgdGFiaW5kZXg9XCItMVwiPiBcbiAgICAgICAgICAgICAgICA8c2xvdCBAbW91c2Vkb3duPVwiJHt0aGlzLnNsb3RNb3VzZURvd259XCI+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3ZnIHZpZXdib3g9XCIwIDAgMjQgMjRcIiBpZD1cImljb25cIj5cbiAgICAgICAgICAgICAgICA8ZyBpZD1cImFycm93LWRyb3AtZG93blwiPjxwYXRoIGQ9XCJNNyAxMGw1IDUgNS01elwiPjwvcGF0aD48L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRyb3Bkb3duID0gdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJpbnB1dFwiKTtcbiAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IHRoaXMudmFsdWU7IFxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHsgYnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWUgfSkpO1xuICAgIH1cblxuICAgIGlucHV0TW91c2VEb3duKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmRyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSAodGhpcy5kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID09IFwiYmxvY2tcIikgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5mb2N1cygpO1xuICAgIH1cblxuICAgIHNsb3RCbHVyKGUpIHtcbiAgICAgICAgdGhpcy5kcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuXG4gICAgc2xvdE1vdXNlRG93bihlKSB7XG4gICAgICAgIHRoaXMuZHJvcGRvd24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG4gICAgICAgIGlmKHRoaXMudmFsdWUgPT0gbnVsbCkgdGhpcy5fdmFsdWUgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBlLnRhcmdldC5pbm5lclRleHQ7IFxuICAgICAgICB0aGlzLnRleHQgPSBlLnRhcmdldC5pbm5lclRleHQ7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7IFxuICAgICAgICBpZih0aGlzLnJlcXVpcmVkICYmICh0aGlzLl92YWx1ZSA9PSBcIlwiIHx8IHRoaXMuX3ZhbHVlID09IHVuZGVmaW5lZCkpIHZhbGlkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmlucHV0LnNldEN1c3RvbVZhbGlkaXR5KHZhbGlkID8gXCJcIiA6IFwicmVxdWlyZWQgZmllbGRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSB2YWxpZDsgXG4gICAgICAgIHJldHVybiB2YWxpZDsgXG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1zZWxlY3RcIiwgQnJpZ2h0U2VsZWN0KTtcblxuZXhwb3J0IGNsYXNzIEJyaWdodERhdGVQaWNrIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgZm9jdXNEYXk6IHsgdHlwZTpEYXRlIH0sIFxuICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICBtb2RlOiB7ICB0eXBlOk51bWJlciwgc3RhdGU6dHJ1ZSB9XG4gICAgfTtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBbIHNoYXJlZFN0eWxlLCBjc3NgXG4gICAgICAgIDpob3N0IHsgfVxuICAgICAgICAuYnV0dG9ucyB7IGN1cnNvcjpwb2ludGVyOyBtYXJnaW46MnB4IDBweDsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7IGZpbGw6dmFyKC0tYnV0dG9uLWludmVyc2UpOyBwYWRkaW5nOjhweDsgZmxleDogMSAxIDIwMHB4OyB0ZXh0LWFsaWduOmNlbnRlcjsgfVxuICAgICAgICAudXAyIHsgZGlzcGxheTpmbGV4OyBnYXA6MnB4OyB9XG4gICAgICAgIC5ncmlkIHsgZGlzcGxheTpncmlkOyBoZWlnaHQ6MzAwcHg7IGdhcDoycHg7IGFsaWduLWl0ZW1zOnN0cmV0Y2g7IGp1c3RpZnktaXRlbXM6c3RyZXRjaDsgfVxuICAgICAgICAuZ3JpZCBkaXYgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuICAgICAgICAuZ3JpZCAudGggeyBjb2xvcjp2YXIoLS1sYWJlbC1jb2xvcik7IGJhY2tncm91bmQ6dmFyKC0tbGFiZWwtYmFja2dyb3VuZCk7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgLmdyaWQgLnRkIHsgY3Vyc29yOnBvaW50ZXI7IH1cbiAgICAgICAgLmdyaWQgLnRkOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7ICB9XG4gICAgYF07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5mb2N1c0RheSA9IG5ldyBEYXRlOyBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgJHt0aGlzLmxhYmVsID8gaHRtbGA8bGFiZWwgcGFydD1cImxhYmVsXCIgZm9yPVwiJHt0aGlzLm5hbWV9XCI+JHt0aGlzLmxhYmVsfTwvbGFiZWw+YCA6IGh0bWxgYH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cDJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7KCkgPT4ge3RoaXMubW9kZSA9IDF9fVwiPiR7dGhpcy5mb2N1c0RheS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgbW9udGg6ICdsb25nJyB9KX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7KCkgPT4ge3RoaXMubW9kZSA9IDJ9fVwiPiR7dGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpfTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuZ2V0VGVtcGxhdGUoKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ1cDJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7dGhpcy5iYWNrQ2xpY2t9XCI+PGJyaWdodC1pY29uIGljb249XCJhcnJvdy1iYWNrXCI+PC9icmlnaHQtaWNvbj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiIEBjbGljaz1cIiR7dGhpcy5md3JkQ2xpY2t9XCI+PGJyaWdodC1pY29uIGljb249XCJhcnJvdy1mb3J3YXJkXCI+PC9icmlnaHQtaWNvbj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMueWVhckdyaWQodGhpcy5mb2N1c0RheSk7XG4gICAgICAgICAgICBjYXNlIDE6IFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vbnRoR3JpZCgpO1xuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF5R3JpZCh0aGlzLmZvY3VzRGF5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHllYXJHcmlkKHZhbHVlKSB7XG4gICAgICAgIHZhciB5ZWFyID0gdmFsdWUuZ2V0RnVsbFllYXIoKSAtIDEyO1xuICAgICAgICB2YXIgY2VsbHMgPSBbXTsgXG4gICAgICAgIGZvcih2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgeCA9IDA7IHggPCA1OyB4KyspIHtcbiAgICAgICAgICAgICAgICBjZWxscy5wdXNoKGh0bWxgPGRpdiBjbGFzcz1cInRkXCI+JHt5ZWFyfTwvZGl2PmApO1xuICAgICAgICAgICAgICAgIHllYXIrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgQGNsaWNrPVwiJHt0aGlzLnllYXJDbGlja31cIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmciAxZnIgMWZyOyBncmlkLXRlbXBsYXRlLXJvd3M6MWZyIDFmciAxZnIgMWZyIDFmcjtcIj5cbiAgICAgICAgICAgICAgICAke2NlbGxzfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgbW9udGhHcmlkKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJncmlkXCIgQGNsaWNrPVwiJHt0aGlzLm1vbnRoQ2xpY2t9XCIgc3R5bGU9XCJncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmciAxZnIgMWZyOyBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1wiPlxuICAgICAgICAgICAgPGRpdiB2YWx1ZT1cIjBcIiBjbGFzcz1cInRkXCI+SmFuPC9kaXY+PGRpdiB2YWx1ZT1cIjFcIiBjbGFzcz1cInRkXCI+RmViPC9kaXY+PGRpdiB2YWx1ZT1cIjJcIiBjbGFzcz1cInRkXCI+TWFyPC9kaXY+PGRpdiB2YWx1ZT1cIjNcIiBjbGFzcz1cInRkXCI+QXByPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHZhbHVlPVwiNFwiIGNsYXNzPVwidGRcIj5NYXk8L2Rpdj48ZGl2IHZhbHVlPVwiNVwiIGNsYXNzPVwidGRcIj5KdW48L2Rpdj48ZGl2IHZhbHVlPVwiNlwiIGNsYXNzPVwidGRcIj5KdWw8L2Rpdj48ZGl2IHZhbHVlPVwiN1wiIGNsYXNzPVwidGRcIj5BdWc8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgdmFsdWU9XCI4XCIgY2xhc3M9XCJ0ZFwiPlNlcDwvZGl2PjxkaXYgdmFsdWU9XCI5XCIgY2xhc3M9XCJ0ZFwiPk9jdDwvZGl2PjxkaXYgdmFsdWU9XCIxMFwiIGNsYXNzPVwidGRcIj5Ob3Y8L2Rpdj48ZGl2IHZhbHVlPVwiMTEgY2xhc3M9XCJ0ZFwiXCI+RGVjPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBkYXlHcmlkKHZhbHVlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IERhdGVVdGlsLmZpcnN0T2ZXZWVrKERhdGVVdGlsLmZpcnN0T2ZNb250aCh2YWx1ZSkpOyBcbiAgICAgICAgbGV0IGRhdGUgPSBzdGFydDsgXG5cbiAgICAgICAgbGV0IGRheWNlbGxzID1bXTtcbiAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCA2OyB4KyspIHsgICAgIFxuICAgICAgICAgICAgZm9yKHZhciB5ID0gMDsgeSA8IDc7IHkrKykge1xuICAgICAgICAgICAgICAgIGRheWNlbGxzLnB1c2goaHRtbGA8ZGl2IGNsYXNzPVwidGRcIiB2YWx1ZT1cIiR7ZGF0ZS50b0lTT1N0cmluZygpfVwiPiR7ZGF0ZS5nZXREYXRlKCl9PC9kaXY+YCk7XG4gICAgICAgICAgICAgICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IEBjbGljaz1cIiR7dGhpcy5kYXlDbGlja31cIiBzdHlsZT1cImdyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7IGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1wiIGNsYXNzPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aFwiPlN1bjwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPk1vbjwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlR1ZTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPldlZDwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlRodTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPkZyaTwvZGl2PjxkaXYgY2xhc3M9XCJ0aFwiPlNhdDwvZGl2PlxuICAgICAgICAgICAgICAgICR7ZGF5Y2VsbHN9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBiYWNrQ2xpY2soKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih0aGlzLmZvY3VzRGF5LmdldEZ1bGxZZWFyKCkgLSAyNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0RnVsbFllYXIodGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpIC0gMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRGF5LnNldE1vbnRoKHRoaXMuZm9jdXNEYXkuZ2V0TW9udGgoKSAtIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICBmd3JkQ2xpY2soKSB7XG4gICAgICAgIHN3aXRjaCh0aGlzLm1vZGUpIHtcbiAgICAgICAgICAgIGNhc2UgMjogXG4gICAgICAgICAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih0aGlzLmZvY3VzRGF5LmdldEZ1bGxZZWFyKCkgKyAyNSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0RnVsbFllYXIodGhpcy5mb2N1c0RheS5nZXRGdWxsWWVhcigpICsgMSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7IFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmZvY3VzRGF5LnNldE1vbnRoKHRoaXMuZm9jdXNEYXkuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGJyZWFrOyBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICB5ZWFyQ2xpY2soZSkge1xuICAgICAgICBsZXQgeXIgPSBOdW1iZXIoZS50YXJnZXQuaW5uZXJUZXh0KTtcbiAgICAgICAgdGhpcy5mb2N1c0RheS5zZXRGdWxsWWVhcih5cik7XG4gICAgICAgIHRoaXMubW9kZSA9IDA7XG4gICAgfVxuXG4gICAgbW9udGhDbGljayhlKSB7XG4gICAgICAgIGxldCBtbyA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSk7XG4gICAgICAgIHRoaXMuZm9jdXNEYXkuc2V0TW9udGgobW8pO1xuICAgICAgICB0aGlzLm1vZGUgPSAwOyBcbiAgICB9XG5cbiAgICBkYXlDbGljayhlKSB7XG4gICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiZGF0ZXBpY2tlZFwiLCB7IGJ1YmJsZXM6dHJ1ZSwgY29tcG9zZWQ6dHJ1ZSwgZGV0YWlsOmRhdGUgfSkpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtZGF0ZXBpY2tcIiwgQnJpZ2h0RGF0ZVBpY2spO1xuXG5leHBvcnQgY2xhc3MgQnJpZ2h0RGF0ZUlucHV0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgbGFiZWw6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH0gXG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgYnJpZ2h0LWRpYWxvZzo6cGFydChjYXJkKSB7IHdpZHRoOjQwMHB4OyB9XG4gICAgYDtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8YnJpZ2h0LWlucHV0IGlkPVwiaW5wdXRcIiBAY2xpY2s9XCIke3RoaXMuaW5wdXRDbGlja31cIiBsYWJlbD1cIiR7dGhpcy5sYWJlbH1cIj48L2JyaWdodC1pbnB1dD5cbiAgICAgICAgICAgIDxicmlnaHQtZGlhbG9nIGlkPVwiZGlhbG9nXCI+XG4gICAgICAgICAgICAgICAgPGgyIHNsb3Q9XCJoZWFkZXJcIj5TZWxlY3QgQSBEYXRlPC9oMj5cbiAgICAgICAgICAgICAgICA8YnJpZ2h0LWRhdGVwaWNrIEBkYXRlcGlja2VkPVwiJHt0aGlzLmRhdGVQaWNrZWR9XCI+PC9icmlnaHQtZGF0ZXBpY2s+XG4gICAgICAgICAgICA8L2JyaWdodC1kaWFsb2c+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZGF0ZVBpY2tlZChlKSB7XG4gICAgICAgIHZhciBkYXRlID0gRGF0ZVV0aWwuZm9ybWF0U2hvcnQoZS5kZXRhaWwpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNpbnB1dFwiKS52YWx1ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI2RpYWxvZ1wiKS5oaWRlKCk7XG4gICAgfVxuXG4gICAgaW5wdXRDbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjZGlhbG9nXCIpLnNob3coKTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWRhdGVpbnB1dFwiLCBCcmlnaHREYXRlSW5wdXQpXG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRWaWRlbyBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBzcmM6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgIHBvc3RlcjogeyB0eXBlOlN0cmluZyB9XG4gICAgfVxuXG4gICAgc3RhdGljIHN0eWxlcyA9IGNzc2BcbiAgICAgICAgdmlkZW8geyBtYXgtd2lkdGg6MTAwJTsgfVxuICAgIGA7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHZpZGVvIEBjbGljaz1cIiR7dGhpcy5jbGlja31cIiBzcmM9XCIke3RoaXMuc3JjfVwiIGNvbnRyb2xzIGNvbnRyb2xzbGlzdD1cIm5vZG93bmxvYWRcIiBwcmVsb2FkPVwibm9uZVwiIHBvc3Rlcj1cIiR7dGhpcy5wb3N0ZXJ9XCI+PC92aWRlbz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBjbGljaygpIHtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJ2aWRlb1wiKS5wbGF5KCk7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC12aWRlb1wiLCBCcmlnaHRWaWRlbyk7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRJY29uTGluZSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGljb246IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgIGhyZWY6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH07XG5cbiAgICBzdGF0aWMgc3R5bGVzID0gY3NzYFxuICAgICAgICA6aG9zdCB7IGRpc3BsYXk6ZmxleDsgaGVpZ2h0OjU2cHg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowcHggMTZweDsgZ2FwOjE2cHg7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgY29sb3I6dmFyKC0tYm9keS1pbnZlcnNlKTsgY3Vyc29yOnBvaW50ZXI7IHVzZXItc2VsZWN0Om5vbmU7IH1cbiAgICAgICAgOmhvc3QoOmhvdmVyKSB7IGJhY2tncm91bmQ6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQpOyBjb2xvcjp2YXIoLS1idXR0b24tY29sb3IpOyB9XG4gICAgYDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyBpZih0aGlzLmhyZWYpIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmOyB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtaWNvbmxpbmVcIiwgQnJpZ2h0SWNvbkxpbmUpO1xuXG5leHBvcnQgY2xhc3MgQXBwQmFyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJhY2tncm91bmQ6dmFyKC0tYm9keS1pbnZlcnNlKTsgY29sb3I6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgZmlsbDp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyBoZWlnaHQ6NTZweDsgYWxpZ24taXRlbXM6Y2VudGVyOyBwYWRkaW5nOjBweCAxNnB4OyBnYXA6MTZweDsgOyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxicmlnaHQtaWNvbiBpY29uPVwibWVudVwiIEBjbGljaz1cIiR7dGhpcy5tZW51Q2xpY2t9XCI+PC9icmlnaHQtaWNvbj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBtZW51Q2xpY2soKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJhcHBiYXItdG9nZ2xlXCIsIHsgYnViYmxlczp0cnVlLCBjb21wb3NlZDp0cnVlIH0pKTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYXBwLWJhclwiLCBBcHBCYXIpO1xuXG5leHBvcnQgY2xhc3MgQXBwTGF5b3V0IGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgY29sbGFwc2VkOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgfTtcblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgICNhcHBiYXIgeyBwb3NpdGlvbjpmaXhlZDsgd2lkdGg6MzAwcHg7IGxlZnQ6MHB4OyB0b3A6MHB4OyBoZWlnaHQ6NTZweDsgfVxuICAgICAgICAjYXBwbmF2IHsgcG9zaXRpb246Zml4ZWQ7IHdpZHRoOjMwMHB4OyBsZWZ0OjBweDsgdG9wOjU2cHg7IGJvdHRvbTowcHg7IG92ZXJmbG93LXk6aGlkZGVuOyBiYWNrZ3JvdW5kOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IHRyYW5zaXRpb246Ym90dG9tIDAuNXM7IH1cbiAgICAgICAgI2JvZHkgeyBwb3NpdGlvbjpmaXhlZDsgbGVmdDozMDBweDsgdG9wOjBweDsgcmlnaHQ6MHB4OyBib3R0b206MHB4OyB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIFxuICAgICAgICB7XG4gICAgICAgICAgICAjYXBwYmFyIHsgd2lkdGg6MTAwJTsgfVxuICAgICAgICAgICAgI2FwcG5hdiB7IHdpZHRoOjEwMCU7IH1cbiAgICAgICAgICAgICNhcHBuYXYuZXhwYW5kZWQgeyBib3R0b206MHB4OyB9XG4gICAgICAgICAgICAjYXBwbmF2LmNvbGxhcHNlZCB7IGJvdHRvbToxMDAlOyB9XG4gICAgICAgICAgICAjYm9keSB7IHdpZHRoOjEwMCU7IGxlZnQ6MHB4OyB0b3A6NTZweDsgIH1cbiAgICAgICAgfVxuICAgIGA7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYXBwYmFyLXRvZ2dsZScsICgpID0+IHsgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQgfSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdoYXNoY2hhbmdlJywgKCkgPT4geyB0aGlzLmNvbGxhcHNlZCA9IHRydWU7IH0pO1xuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7IFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXBwYmFyXCI+PHNsb3QgbmFtZT1cImFwcC1iYXJcIj48L3Nsb3Q+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYm9keVwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBuYXZcIiBjbGFzcz1cIiR7dGhpcy5jb2xsYXBzZWQ/J2NvbGxhcHNlZCc6J2V4cGFuZGVkJ31cIj48c2xvdCBuYW1lPVwiYXBwLW5hdlwiPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJhcHAtbGF5b3V0XCIsIEFwcExheW91dCk7XG5cbmV4cG9ydCBjbGFzcyBBcHBSb3V0ZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBjaGlsZHJlbjogeyB0eXBlOkFycmF5IH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vbkhhc2hDaGFuZ2UgPSB0aGlzLm9uSGFzaENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMub25IYXNoQ2hhbmdlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIG9uSGFzaENoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKG4gPT57XG4gICAgICAgICAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaC5zdGFydHNXaXRoKG4uZ2V0QXR0cmlidXRlKFwicm91dGVcIikpKSB7XG4gICAgICAgICAgICAgICAgbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIC8vIGNhbGwgY2hpbGQub25TaG93IGlmIHByZXNlbnRcbiAgICAgICAgICAgICAgICBpZihuLm9uU2hvdykgbi5vblNob3cod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZihuLnN0eWxlLmRpc3BsYXkgPT0gXCJibG9ja1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsIGNoaWxkLm9uSGlkZSBpZiBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgIGlmKG4ub25IaWRlKSBuLm9uSGlkZSh3aW5kb3cubG9jYXRpb24uaGFzaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcInNsb3RcIikuYXNzaWduZWRFbGVtZW50cyh7IGZsYXR0ZW46IHRydWUgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4uZm9yRWFjaChuID0+IHsgbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIgfSk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW5bMF0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgdGhpcy5vbkhhc2hDaGFuZ2UoKTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYXBwLXJvdXRlclwiLCBBcHBSb3V0ZXIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQkVMT1cgSEVSRSBJUyBOT1QgVkFMSURBVEVEIFRPIFdPUksgVU5ERVIgTU9OQVJDSCBDU1MvSlNcbi8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG5cblxuZXhwb3J0IGNsYXNzIEJyaWdodEZvcm0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBlcnJvcnM6IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHsgXG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgfVxuICAgICAgICAgICAgICAgIDpob3N0OmhpZGRlbiB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgPC9zdHlsZT4gICAgICAgIFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICBgOyBcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy52YWxpZGF0YWJsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy52YWxpZGF0YWJsZXMucHVzaChlLmNvbXBvc2VkUGF0aCgpWzBdKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbGlkYXRhYmxlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgaWYoIWUudmFsaWRhdGUoKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGUuaGFzQXR0cmlidXRlKFwiZXJyb3JcIikgJiYgdGhpcy5lcnJvciA9PSBudWxsID8gZS5nZXRBdHRyaWJ1dGUoXCJlcnJvclwiKSA6IHRoaXMuZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFsaWQ7IFxuICAgIH1cblxuICAgIGdldFZhbHVlcyhvYmopIHtcbiAgICAgICAgdGhpcy52YWxpZGF0YWJsZXMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIG9ialtlLmlkXSA9IGUudmFsdWUgPT0gXCJcIiA/IG51bGwgOiBlLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LWZvcm1cIiwgQnJpZ2h0Rm9ybSk7XG5cbmV4cG9ydCBjbGFzcyBWaWV3UGFnZXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYDxzbG90Pjwvc2xvdD5gO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5baV0uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNob3dQYWdlKHZhbHVlKSB7XG4gICAgICAgIGlmKGlzTmFOKHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmhpZGRlbiA9ICh0aGlzLmNoaWxkcmVuW2ldLmlkICE9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXS5oaWRkZW4gPSAoaSAhPSB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwidmlldy1wYWdlclwiLCBWaWV3UGFnZXIpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFNpbmdsZVNlbGVjdG9yIHdyYXBzIHNpbmdsZS1zZWxlY3RhYmxlIGl0ZW1zXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuZXhwb3J0IGNsYXNzIFNpbmdsZVNlbGVjdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHsgdHlwZTogU3RyaW5nIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIGZpcnN0VXBkYXRlZCgpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbm9kZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRDbGljayhlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlZCgpIHtcbiAgICAgICAgdGhpcy5kcmF3U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgY2hpbGRDbGljayhlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKTtcbiAgICAgICAgdGhpcy5kcmF3U2VsZWN0aW9uKCk7XG4gICAgfVxuXG4gICAgZHJhd1NlbGVjdGlvbigpIHtcbiAgICAgICAgbGV0IG5vZGVzID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaTxub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbm9kZXNbaV0uY2xhc3NOYW1lID0gbm9kZXNbaV0uZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgPT0gdGhpcy52YWx1ZSA/IFwic2VsZWN0ZWRcIiA6IFwibm90c2VsZWN0ZWRcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyB9XG4gICAgICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKC5zZWxlY3RlZCkgeyBiYWNrZ3JvdW5kLWNvbG9yOnJlZDsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxkaXY+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzaW5nbGUtc2VsZWN0b3JcIiwgU2luZ2xlU2VsZWN0b3IpO1xuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIE11bHRpU2VsZWN0b3Igd3JhcHMgbXVsdGktc2VsZWN0YWJsZSBpdGVtc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdG9yIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgX3NlbGVjdGVkOiB7IHR5cGU6IEFycmF5IH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xuICAgIH1cblxuICAgIHNldCBzZWxlY3RlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkLmZvckVhY2goZSA9PiB7IGUuc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5pbmNsdWRlcyhlLnZhbHVlKX0pO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiY2hhbmdlXCIsIHsgY29tcG9zZWQ6dHJ1ZSwgYnViYmxlczp0cnVlLCBkZXRhaWw6dGhpcy5fc2VsZWN0ZWQgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlcmVkID0gW107XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gW107XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJtdWx0aS1zZWxlY3RhYmxlXCIsIHRoaXMucmVnaXN0ZXIpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKGUpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZC5wdXNoKGUudGFyZ2V0KTtcbiAgICAgICAgZS50YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHRoaXMuX3JlZ2lzdGVyZWQuZmlsdGVyKHIgPT4gci5zZWxlY3RlZCA9PSB0cnVlKS5tYXAociA9PiByLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUsIGRldGFpbDp0aGlzLl9zZWxlY3RlZCB9KSk7XG4gICAgICAgIH0pO1xuICAgICAgICBpZighdGhpcy5fc2VsZWN0ZWQpIHJldHVybjtcbiAgICAgICAgZS50YXJnZXQuc2VsZWN0ZWQgPSB0aGlzLl9zZWxlY3RlZC5pbmNsdWRlcyhlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuXG4gICAgY2xlYXJBbGwoKSB7XG4gICAgICAgIGxldCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IHZhbHVlczsgXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUsIGRldGFpbDp0aGlzLl9zZWxlY3RlZCB9KSk7XG4gICAgfVxuXG4gICAgc2VsZWN0QWxsKCkge1xuICAgICAgICBsZXQgdmFsdWVzID0gW11cbiAgICAgICAgdGhpcy5fcmVnaXN0ZXJlZC5mb3JFYWNoKGUgPT4geyB2YWx1ZXMucHVzaChlLnZhbHVlKTsgfSk7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZXM7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUsIGRldGFpbDp0aGlzLl9zZWxlY3RlZCB9KSk7XG4gICAgfVxuXG4gICAgc2VsZWN0SXRlbSh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZC5wdXNoKHZhbHVlKTtcbiAgICAgICAgdGhpcy5yZXF1ZXN0VXBkYXRlKCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJjaGFuZ2VcIiwgeyBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUsIGRldGFpbDp0aGlzLl9zZWxlY3RlZCB9KSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2PjxzbG90Pjwvc2xvdD48L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibXVsdGktc2VsZWN0b3JcIiwgTXVsdGlTZWxlY3Rvcik7XG5cbmV4cG9ydCBjbGFzcyBTZWxlY3RMaW5lIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogeyB0eXBlOlN0cmluZyB9LFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHsgdHlwZTpCb29sZWFuLCByZWZsZWN0OnRydWUgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6YmxvY2s7IGN1cnNvcjpwb2ludGVyOyAgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtzZWxlY3RlZF0pIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1saW5lLWJvcmRlcik7IH1cbiAgICAgICAgICAgICAgICBkaXYgeyAgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8ZGl2ID9zZWxlY3RlZD1cIiR7dGhpcy5zZWxlY3RlZH1cIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibXVsdGktc2VsZWN0YWJsZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jbGljayk7XG4gICAgfVxuXG4gICAgY2xpY2soKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImNoYW5nZVwiLCB7IGJ1YmJsZXM6dHJ1ZSwgY29tcG9zZWQ6dHJ1ZSB9KSk7XG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic2VsZWN0LWxpbmVcIiwgU2VsZWN0TGluZSk7XG5cbmV4cG9ydCBjbGFzcyBDaGVja0xpbmUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGl0ZW06IHsgdHlwZTogT2JqZWN0IH0sIFxuICAgICAgICAgICAgc2VsZWN0ZWQ6IHsgdHlwZTogQm9vbGVhbiB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc2V0IHNlbGVjdGVkKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IHRoaXMuaXRlbS5zZWxlY3RlZDtcbiAgICAgICAgdGhpcy5pdGVtLnNlbGVjdGVkID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGdldCBzZWxlY3RlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbSA/IHRoaXMuaXRlbS5zZWxlY3RlZCA6IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBpdGVtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXRlbTsgXG4gICAgfVxuXG4gICAgc2V0IGl0ZW0odmFsdWUpIHtcbiAgICAgICAgaWYodmFsdWUuc2VsZWN0ZWQgPT0gdW5kZWZpbmVkKSB2YWx1ZS5zZWxlY3RlZD1mYWxzZTtcbiAgICAgICAgdGhpcy5faXRlbSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTogZmxleDsgaGVpZ2h0OiA0NHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIHN2ZyB7IGhlaWdodDoxLjZlbTsgd2lkdGg6IDEuNmVtOyBjb2xvcjpncmV5OyBwYWRkaW5nLXRvcDo0cHg7IH1cbiAgICAgICAgICAgICAgICAuY29udGVudCB7IGZsZXg6IDEgMSBhdXRvOyBwYWRkaW5nLWxlZnQ6OHB4OyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgJHsodGhpcy5pdGVtICYmIHRoaXMuaXRlbS5zZWxlY3RlZCkgPyBcbiAgICAgICAgICAgIGh0bWxgPGRpdj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsPVwiIzMwMzAzMFwiIGQ9XCJNMTkgM0g1Yy0xLjExIDAtMiAuOS0yIDJ2MTRjMCAxLjEuODkgMiAyIDJoMTRjMS4xMSAwIDItLjkgMi0yVjVjMC0xLjEtLjg5LTItMi0yem0tOSAxNGwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5elwiPjwvcGF0aD48L3N2Zz48L2Rpdj5gXG4gICAgICAgICAgICA6XG4gICAgICAgICAgICBodG1sYDxkaXY+PHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbD1cIiMzMDMwMzBcIiBkPVwiTTE5IDV2MTRINVY1aDE0bTAtMkg1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6XCI+PC9wYXRoPjwvc3ZnPjwvZGl2PmBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbiAgICBcbiAgICBpc0NoZWNrZWQoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbS5zZWxlY3RlZDtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwibXVsdGktc2VsZWN0YWJsZVwiLCB7IGJ1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlIH0pKTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLml0ZW0uc2VsZWN0ZWQgPSAhdGhpcy5pdGVtLnNlbGVjdGVkO1xuICAgICAgICB0aGlzLnJlcXVlc3RVcGRhdGUoKTtcbiAgICB9XG59XG5cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjaGVjay1saW5lXCIsIENoZWNrTGluZSk7XG5cblxuXG5leHBvcnQgY2xhc3MgQnJpZ2h0TWVudSBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICA6aG9zdCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgZGlzcGxheTppbmxpbmUtYmxvY2s7IGZpbGw6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIHN2ZyB7IGhlaWdodDogMjRweDsgd2lkdGg6MjRweDsgYm9yZGVyOm5vbmU7IG91dGxpbmU6bm9uZTsgfVxuICAgICAgICAgICAgICAgICN3cmFwIHsgb3ZlcmZsb3c6aGlkZGVuOyBvdXRsaW5lOm5vbmU7IHRyYW5zaXRpb246bWF4LWhlaWdodCAwLjNzOyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXByaW1hcnkpOyB3aWR0aDoyMDBweDsgbWF4LWhlaWdodDowcHg7IHBvc2l0aW9uOmFic29sdXRlOyB6LWluZGV4OjEwMDA7IGNvbG9yOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IHJpZ2h0Oi0xNnB4OyB0b3A6NDFweDsgYm9yZGVyLXJhZGl1czozcHg7IGJveC1zaGFkb3c6IDBweCAzcHggM3B4IHJnYmEoMCwwLDAsMC40KTsgfVxuICAgICAgICAgICAgICAgIDo6c2xvdHRlZChkaXYpIHsgdmVydGljYWwtYWxpZ246bWlkZGxlOyBwYWRkaW5nOjE2cHg7IHVzZXItc2VsZWN0Om5vbmU7IGN1cnNvcjpwb2ludGVyOyB9XG4gICAgICAgICAgICAgICAgOjpzbG90dGVkKGRpdjpob3ZlcikgeyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLWJvZHktYmFja2dyb3VuZCk7IGNvbG9yOnZhcigtLXByaW1hcnkpOyBmaWxsOnZhcigtLXByaW1hcnkpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHN2ZyBAY2xpY2s9XCIke3RoaXMub3Blbn1cIiB2aWV3Ym94PVwiMiAyIDIwIDIwXCI+XG4gICAgICAgICAgICAgICAgPGcgaWQ9XCJtb3JlLXZlcnRcIj48cGF0aCBkPVwiTTEyIDhjMS4xIDAgMi0uOSAyLTJzLS45LTItMi0yLTIgLjktMiAyIC45IDIgMiAyem0wIDJjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yem0wIDZjLTEuMSAwLTIgLjktMiAycy45IDIgMiAyIDItLjkgMi0yLS45LTItMi0yelwiPjwvcGF0aD48L2c+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIDwhLS0gdGFiaW5kZXggcmVxdWlyZWQgdG8gbWFrZSBmb2N1cyB3b3JrIC0tPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBcIiB0YWJpbmRleD1cIjBcIiBAYmx1cj1cIiR7dGhpcy5jbG9zZX1cIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG4gICAgXG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZWxmLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwXCIpLnN0eWxlLm1heEhlaWdodCA9IFwiMHB4XCI7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgb3BlbigpIHtcbiAgICAgICAgbGV0IGUgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJ3cmFwXCIpO1xuICAgICAgICBlLnN0eWxlLm1heEhlaWdodCA9IFwiNTAwcHhcIjtcbiAgICAgICAgZS5mb2N1cygpO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1tZW51XCIsIEJyaWdodE1lbnUpO1xuXG5leHBvcnQgY2xhc3MgTWVudUl0ZW0gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGljb246IHsgdHlwZTogU3RyaW5nIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuaWNvbiA9ICcnO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIC5yb3cgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzoxNnB4OyBjb2xvcjp2YXIoLS1ib2R5LWJhY2tncm91bmQpOyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IH1cbiAgICAgICAgICAgICAgICAucm93OmhvdmVyIHsgY29sb3I6dmFyKC0tcHJpbWFyeSk7IGJhY2tncm91bmQtY29sb3I6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIGJyaWdodC1pY29uIHsgcGFkZGluZy1yaWdodDo4cHg7IGZpbGw6dmFyKC0tYm9keS1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIC5yb3c6aG92ZXIgYnJpZ2h0LWljb24geyBmaWxsOnZhcigtLXByaW1hcnkpOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPjxicmlnaHQtaWNvbiA/aGlkZGVuPVwiJHt0aGlzLmljb24gPT0gJyd9XCIgZmlsbD1cInJlZFwiIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPjxkaXYgY2xhc3M9XCJ0ZXh0XCI+PHNsb3Q+PC9zbG90PjwvZGl2PjwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1lbnUtaXRlbVwiLCBNZW51SXRlbSk7XG5cblxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRQYWdlciBleHRlbmRzIExpdEVsZW1lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgb3ZlcmZsb3c6aGlkZGVuOyBwb3NpdGlvbjpyZWxhdGl2ZTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgICAgICAgICAgICAgICN3cmFwIHsgZGlzcGxheTpmbGV4OyBwb3NpdGlvbjphYnNvbHV0ZTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgd2lkdGg6MTAwJTsgaGVpZ2h0OjEwMCU7IGxlZnQ6MCU7IHRyYW5zaXRpb246IGxlZnQgMC41czsgfVxuICAgICAgICAgICAgICAgIDo6c2xvdHRlZChkaXYpIHsgZmxleDowIDAgMTAwJTsgbWluLXdpZHRoOjAlOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIHNob3dQYWdlKHZhbHVlKSB7XG4gICAgICAgIHZhciBwY3QgPSBcIi1cIiArIHZhbHVlICsgXCIwMCVcIjtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwid3JhcFwiKS5zdHlsZS5sZWZ0ID0gcGN0O1xuICAgIH1cbn1cblxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1wYWdlclwiLCBCcmlnaHRQYWdlcik7XG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRGaWxlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBfdmFsdWU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBmaWxlczogeyB0eXBlOkFycmF5IH0sXG4gICAgICAgICAgICByZXF1aXJlZDogeyB0eXBlOkJvb2xlYW4gfSwgXG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIG11bHRpcGxlOiB7IHR5cGU6Qm9vbGVhbiB9LCBcbiAgICAgICAgICAgIGFjY2VwdDogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTpTdHJpbmcgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuYWNjZXB0ID0gXCIqLypcIjtcbiAgICAgICAgdGhpcy5tdWx0aXBsZSA9IGZhbHNlOyBcbiAgICAgICAgdGhpcy5fdmFsdWUgPSBcIlwiO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICA8c3R5bGU+XG4gICAgICAgICAgICAgICAgOmhvc3QgeyBkaXNwbGF5OmJsb2NrOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IH1cbiAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICA6OnBsYWNlaG9sZGVyIHsgY29sb3I6dmFyKC0tYm9keS1pbnZlcnNlKTsgb3BhY2l0eTowLjU7IH1cbiAgICAgICAgICAgICAgICBpbnB1dCB7IGhlaWdodDozNnB4OyB3aWR0aDoxMDAlOyBjb2xvcjp2YXIoLS1ib2R5LWludmVyc2UpOyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saW5lLWJvcmRlcik7IHBhZGRpbmc6OHB4OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlci1yYWRpdXM6MnB4OyBib3gtc2hhZG93Om5vbmU7IGZvbnQtc2l6ZTp2YXIoLS1ib2R5MS1zaXplKTsgZm9udC13ZWlnaHQ6dmFyKC0tYm9keTEtd2VpZ2h0KTsgZm9udC1mYW1pbHk6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyAtbW96LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAgICAgICAgICAgICBpbnB1dDpmb2N1cyB7IGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7IG91dGxpbmU6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGlucHV0OmludmFsaWQgeyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1hbGVydCk7IH1cbiAgICAgICAgICAgICAgICBpbnB1dFt0eXBlPWZpbGVdIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICAgICAgaW5wdXRbdHlwZT10ZXh0XSB7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgLW1vei1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9IC8qIHJlbW92ZSBpb3MgaW5zZXQgc2hhZG93ICovXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdj4ke3RoaXMuX3ZhbHVlfTwvZGl2PlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0ZXh0SW5wdXRcIiBAY2xpY2s9XCIke3RoaXMudGV4dElucHV0Q2xpY2t9XCIgcGxhY2Vob2xkZXI9XCIke3RoaXMucGxhY2Vob2xkZXIgPyB0aGlzLnBsYWNlaG9sZGVyIDogXCJcIn1cIiB2YWx1ZT1cIiR7dGhpcy5fdmFsdWV9XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVJbnB1dFwiIG5hbWU9XCJmaWxlc1wiIEBjaGFuZ2U9XCIke3RoaXMuZmlsZUlucHV0Q2hhbmdlfVwiIGFjY2VwdD1cIiR7dGhpcy5hY2NlcHR9XCIgP211bHRpcGxlPVwiJHt0aGlzLm11bHRpcGxlfVwiLz5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBmaXJzdFVwZGF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJicmlnaHQtdmFsaWRhdGFibGVcIiwge1xuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSwgXG4gICAgICAgICAgICBjb21wb3NlZDogdHJ1ZVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGV4dElucHV0Q2xpY2soZSkge1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlSW5wdXRcIikuY2xpY2soKTtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfVxuXG4gICAgZmlsZUlucHV0Q2hhbmdlKCkge1xuICAgICAgICBsZXQgZSA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcImZpbGVJbnB1dFwiKTtcbiAgICAgICAgaWYoZS5maWxlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJmaWxlc1wiLCBlLmZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gQXJyYXkuZnJvbShlLmZpbGVzKS5tYXAoZiA9PiBmLm5hbWUpLmpvaW4oKTtcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBlLmZpbGVzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7IFxuICAgICAgICBpZih0aGlzLnJlcXVpcmVkICYmIHRoaXMuX3ZhbHVlID09IFwiXCIpIHZhbGlkID0gZmFsc2U7IFxuICAgICAgICB0aGlzLmlucHV0LnNldEN1c3RvbVZhbGlkaXR5KHZhbGlkID8gXCJcIiA6IFwicmVxdWlyZWQgZmllbGRcIik7XG4gICAgICAgIHRoaXMuaW5wdXQudmFsaWQgPSB2YWxpZDsgXG4gICAgICAgIHJldHVybiB2YWxpZDsgXG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1maWxlXCIsIEJyaWdodEZpbGUpO1xuXG5leHBvcnQgY2xhc3MgQnJpZ2h0UmFkaW8gZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiB7IHR5cGU6Qm9vbGVhbiB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTsgXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTsgXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgICAgICBicmlnaHQtaWNvbiB7IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICR7IHRoaXMuc2VsZWN0ZWQgPyBcbiAgICAgICAgICAgICAgICBodG1sYDxicmlnaHQtaWNvbiBpY29uPVwicmFkaW8tYnV0dG9uLWNoZWNrZWRcIiBAY2xpY2s9XCIke3RoaXMucmFkaW9DbGlja31cIj48L2JyaWdodC1pY29uPmAgOlxuICAgICAgICAgICAgICAgIGh0bWxgPGJyaWdodC1pY29uIGljb249XCJyYWRpby1idXR0b24tdW5jaGVja2VkXCIgQGNsaWNrPVwiJHt0aGlzLnJhZGlvQ2xpY2t9XCI+PC9icmlnaHQtaWNvbj5gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXJhZGlvLXJlZ2lzdGVyXCIsIHsgZGV0YWlsOnRoaXMsIGNvbXBvc2VkOnRydWUsIGJ1YmJsZXM6dHJ1ZSB9KSk7XG4gICAgfVxuXG4gICAgcmFkaW9DbGljaygpIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChcImJyaWdodC1yYWRpby1zZWxlY3RlZFwiLCB7IGRldGFpbDp0aGlzLCBjb21wb3NlZDp0cnVlLCBidWJibGVzOnRydWUgfSkpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtcmFkaW9cIiwgQnJpZ2h0UmFkaW8pO1xuXG5cbmV4cG9ydCBjbGFzcyBCcmlnaHRSYWRpb0dyb3VwIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogeyB0eXBlOk9iamVjdCB9LCBcbiAgICAgICAgICAgIHJhZGlvczogeyB0eXBlOkFycmF5IH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpOyBcbiAgICAgICAgdGhpcy5yYWRpb3MgPSBbXTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcImJyaWdodC1yYWRpby1yZWdpc3RlclwiLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMucmFkaW9zLnB1c2goZS5kZXRhaWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcihcImJyaWdodC1yYWRpby1zZWxlY3RlZFwiLCBlID0+IHtcbiAgICAgICAgICAgIGxldCByYWRpbyA9IGUuZGV0YWlsOyBcbiAgICAgICAgICAgIHRoaXMucmFkaW9zLmZvckVhY2gociA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkID0gKHJhZGlvID09IHIpO1xuICAgICAgICAgICAgICAgIGxldCBjaGFuZ2VkID0gci5zZWxlY3RlZCAhPSBzZWxlY3RlZDsgXG4gICAgICAgICAgICAgICAgci5zZWxlY3RlZCA9IChyYWRpbyA9PSByKTtcbiAgICAgICAgICAgICAgICBpZihjaGFuZ2VkKSByLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwiY2hhbmdlXCIpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgPHNsb3Q+PC9zbG90PmA7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImJyaWdodC1yYWRpby1ncm91cFwiLCBCcmlnaHRSYWRpb0dyb3VwKTtcblxuZXhwb3J0IGNsYXNzIEJyaWdodERhdGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgdGV4dDogeyB0eXBlOlN0cmluZyB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICNoaWRlIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPHNwYW4gaWQ9XCJoaWRlXCI+PHNsb3Q+PC9zbG90Pjwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuPiR7dGhpcy50ZXh0fTwvc3Bhbj5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICBsZXQgc2RhdGUgPSB0aGlzLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQ7XG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RyaW5nXCIsIHNkYXRlKTtcbiAgICAgICAgbGV0IG5kYXRlID0gbmV3IERhdGUoc2RhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImRhdGUgb2JqXCIsIG5kYXRlKTtcbiAgICAgICAgbGV0IGZvcm1hdHRlZCA9IERhdGVVdGlsLmZvcm1hdFdpdGhUaW1lKG5ldyBEYXRlKHNkYXRlKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9jYWxcIiwgZm9ybWF0dGVkKTtcbiAgICAgICAgdGhpcy50ZXh0ID0gZm9ybWF0dGVkO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJicmlnaHQtZGF0ZVwiLCBCcmlnaHREYXRlKTtcblxuZXhwb3J0IGNsYXNzIEJyaWdodFN1Z2dlc3QgZXh0ZW5kcyBMaXRFbGVtZW50IHtcblxuICAgIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHsgdHlwZTpCb29sZWFuIH0sIFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBsYWJlbDogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIHBhc3N3b3JkOiB7IHR5cGU6Qm9vbGVhbiB9LFxuICAgICAgICAgICAgdHlwZTogeyB0eXBlOlN0cmluZyB9LCBcbiAgICAgICAgICAgIG5hbWU6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgICAgICBzdWdnZXN0RnVuYzogeyB0eXBlOk9iamVjdCB9LCBcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zOiB7IHR5cGU6QXJyYXkgfSwgXG4gICAgICAgICAgICBsb2FkaW5nOiB7IHR5cGU6IEJvb2xlYW4gfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIGlucHV0IHsgaGVpZ2h0OjM2cHg7IHdpZHRoOjEwMCU7IGNvbG9yOnZhcigtLWJvZHktaW52ZXJzZSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpbmUtYm9yZGVyKTsgcGFkZGluZzo4cHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgYm9yZGVyLXJhZGl1czoycHg7IGJveC1zaGFkb3c6bm9uZTsgZm9udC1zaXplOnZhcigtLWJvZHkxLXNpemUpOyBmb250LXdlaWdodDp2YXIoLS1ib2R5MS13ZWlnaHQpOyBmb250LWZhbWlseTogUm9ib3RvLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgICAgICAgICAgICAgIGlucHV0W3R5cGU9dGV4dF0geyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IC1tb3otYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfSAvKiByZW1vdmUgaW9zIGluc2V0IHNoYWRvdyAqL1xuICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzIHsgYm9yZGVyOiAxcHggc29saWQgZ3JleTsgb3V0bGluZTpub25lOyB9XG4gICAgICAgICAgICAgICAgaW5wdXQ6aW52YWxpZCB7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFsZXJ0KTsgfVxuICAgICAgICAgICAgICAgIDo6cGxhY2Vob2xkZXIgeyBjb2xvcjp2YXIoLS1ib2R5LWludmVyc2UpOyBvcGFjaXR5OjAuNTsgfVxuICAgICAgICAgICAgICAgIC5pdGVtIHsgcGFkZGluZzoxNnB4OyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgIC5pdGVtOmhvdmVyIHsgYmFja2dyb3VuZC1jb2xvcjp2YXIoLS1za3JpbS1ob3ZlcikgfVxuICAgICAgICAgICAgICAgICN3cmFwIHsgcG9zaXRpb246cmVsYXRpdmU7IH1cbiAgICAgICAgICAgICAgICAjbG9hZGVyIHsgcG9zaXRpb246YWJzb2x1dGU7IHJpZ2h0OjhweDsgdG9wOjRweDsgfVxuICAgICAgICAgICAgICAgICNub3Rmb3VuZCB7IHBhZGRpbmc6IDE2cHggMHB4OyB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgICAgICAkeyF0aGlzLmxvYWRpbmcgPyBodG1sYGAgOiBodG1sYFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGlkPVwibG9hZGVyXCIgP2hpZGRlbj1cIiR7dGhpcy5sb2FkaW5nfVwiIGZpbGw9XCJ2YXIoLS1saW5lLWJvcmRlcilcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMjQgMjQgNTAgNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoICBkPVwiTTczLDUwYzAtMTIuNy0xMC4zLTIzLTIzLTIzUzI3LDM3LjMsMjcsNTAgTTMwLjksNTBjMC0xMC41LDguNS0xOS4xLDE5LjEtMTkuMVM2OS4xLDM5LjUsNjkuMSw1MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT1cInRyYW5zZm9ybVwiIGF0dHJpYnV0ZVR5cGU9XCJYTUxcIiB0eXBlPVwicm90YXRlXCIgZHVyPVwiMXNcIiBmcm9tPVwiMCA1MCA1MFwidG89XCIzNjAgNTAgNTBcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicXVlcnlcIiBAa2V5dXA9XCIke3RoaXMua2V5VXB9XCIgbmFtZT1cIiR7dGhpcy5uYW1lfVwiIHBsYWNlaG9sZGVyPVwiJHt0aGlzLnBsYWNlaG9sZGVyfVwiLz5cbiAgICAgICAgICAgICAgICAkeyB0aGlzLnN1Z2dlc3Rpb25zID09IHVuZGVmaW5lZCA/IGh0bWxgYCA6IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJkcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHsgdGhpcy5zdWdnZXN0aW9ucy5tYXAociA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgLmRhdGFpdGVtPVwiJHtyLnZhbHVlfVwiIEBjbGljaz1cIiR7dGhpcy5pdGVtQ2xpY2t9XCI+JHtyLmtleX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJub3Rmb3VuZFwiID9oaWRkZW49XCIkeyEodGhpcy5zdWdnZXN0aW9ucyAmJiB0aGlzLnN1Z2dlc3Rpb25zLmxlbmd0aCA9PSAwKX1cIj5ObyBSZXN1bHRzIEZvdW5kPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDsgXG4gICAgfVxuXG4gICAgZmlyc3RVcGRhdGVkKCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFwiYnJpZ2h0LXZhbGlkYXRhYmxlXCIsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsIFxuICAgICAgICAgICAgY29tcG9zZWQ6IHRydWVcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIGtleVVwKCkge1xuICAgICAgICBCb3VuY2VyLmRlYm91bmNlKHRoaXMsIHRoaXMuY2hhbmdlLCAxNTAwKTtcbiAgICB9XG5cbiAgICBhc3luYyBjaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpLnZhbGlkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHVuZGVmaW5lZDsgXG4gICAgICAgIGxldCBxdWVyeSA9IHRoaXMuc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZChcInF1ZXJ5XCIpLnZhbHVlOyBcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLnN1Z2dlc3RGdW5jKHF1ZXJ5KTtcbiAgICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IHJlc3VsdHM7IFxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdHNcIiwgcmVzdWx0cyk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyBcbiAgICB9XG5cbiAgICBpdGVtQ2xpY2soZSkge1xuICAgICAgICBsZXQga2V5ID0gZS50YXJnZXQuaW5uZXJUZXh0OyBcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKFwicXVlcnlcIikudmFsdWUgPSBrZXk7IFxuICAgICAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQuZGF0YWl0ZW07IFxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlXCIsIHRoaXMudmFsdWUpO1xuICAgICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gdW5kZWZpbmVkOyBcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSgpIHtcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTsgXG4gICAgICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PSB1bmRlZmluZWQpIHZhbGlkID0gZmFsc2U7IFxuICAgICAgICBsZXQgaW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QuZ2V0RWxlbWVudEJ5SWQoXCJxdWVyeVwiKTtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkodmFsaWQgPyBcIlwiIDogXCJyZXF1aXJlZCBmaWVsZFwiKTtcbiAgICAgICAgaW5wdXQudmFsaWQgPSB2YWxpZDsgXG4gICAgICAgIHJldHVybiB2YWxpZDsgXG4gICAgfVxufVxuXG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYnJpZ2h0LXN1Z2dlc3RcIiwgQnJpZ2h0U3VnZ2VzdCk7XG4iLCJpbXBvcnQge0xpdEVsZW1lbnQsIGh0bWwsIGNzc30gZnJvbSAnbGl0JztcbmltcG9ydCB7QnJpZ2h0SW5wdXQsIEJyaWdodFNlY3Rpb24gfSBmcm9tICdicmlnaHQnO1xuXG5leHBvcnQgY2xhc3MgUmVzaXplQ29udHJvbGxlciB7XG4gICAgaG9zdDsgXG5cbiAgICBjb25zdHJ1Y3Rvcihob3N0KSB7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIGhvc3QuYWRkQ29udHJvbGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yZXNpemUgPSB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhvc3RDb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgICAgIHRoaXMucmVzaXplKCk7XG4gICAgfVxuICAgIFxuICAgIGhvc3REaXNjb25uZWN0ZWQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZSk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZih3aW5kb3cuaW5uZXJXaWR0aCA8IDQ2MCkge1xuICAgICAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcImRlc2t0b3BcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZChcImRlc2t0b3BcIik7XG4gICAgICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmhvc3Qub25SZXNpemVkKSB0aGlzLmhvc3Qub25SZXNpemVkKCk7XG4gICAgfVxufVxuXG5jbGFzcyBTb2NpYWxCYXIgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgICByZXNpemVyID0gbmV3IFJlc2l6ZUNvbnRyb2xsZXIodGhpcyk7XG5cbiAgICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBjdXJzb3I6cG9pbnRlcjsgei1pbmRleDoxMDsgfVxuICAgICAgICAgICAgOmhvc3QoW2hpZGRlbl0pIHsgZGlzcGxheTpub25lOyB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgYDtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic29jaWFsLWJhclwiLCBTb2NpYWxCYXIpO1xuXG5jbGFzcyBJY29uTGluayBleHRlbmRzIExpdEVsZW1lbnQgeyBcblxuICAgIHN0YXRpYyBwcm9wZXJ0aWVzID0ge1xuICAgICAgICBpY29uOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICBocmVmOiB7IHR5cGU6U3RyaW5nIH0sIFxuICAgICAgICB0YXJnZXQ6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5vbkNsaWNrKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJvcmRlci1yYWRpdXM6NTAlOyBjdXJzb3I6cG9pbnRlcjsgcGFkZGluZzo0cHg7IG1hcmdpbjo0cHg7IGN1cnNvcjpwb2ludGVyOyBiYWNrZ3JvdW5kOmdyZXk7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgfVxuICAgICAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgICAgIGJyaWdodC1pY29uIHsgZmlsbDppbmhlcml0OyB9ICB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPGJyaWdodC1pY29uIGljb249XCIke3RoaXMuaWNvbn1cIj48L2JyaWdodC1pY29uPlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZSkge1xuICAgICAgICBpZih0aGlzLnRhcmdldCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB0aGlzLmhyZWY7IFxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB3aW5kb3cub3Blbih0aGlzLmhyZWYsIHRoaXMudGFyZ2V0KTtcbiAgICB9XG59XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaWNvbi1saW5rXCIsIEljb25MaW5rKTtcblxuY2xhc3MgTGlua0J1dHRvbiBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIHByb3BlcnRpZXMgPSB7XG4gICAgICAgIGhyZWY6IHsgdHlwZTpTdHJpbmcgfSwgXG4gICAgICAgIHRhcmdldDogeyB0eXBlOlN0cmluZyB9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICAgICAgICAgICA6aG9zdCB7IGRpc3BsYXk6aW5saW5lLWJsb2NrOyBjdXJzb3I6cG9pbnRlcjsgfVxuICAgICAgICAgICAgICAgICAgICA6aG9zdChbaGlkZGVuXSkgeyBkaXNwbGF5Om5vbmU7IH1cbiAgICAgICAgICAgICAgICAgICAgZGl2IHsgdXNlci1zZWxlY3Q6bm9uZTsgdHJhbnNpdGlvbjpjb2xvciAxcywgYmFja2dyb3VuZC1jb2xvciAxczt0ZXh0LWFsaWduOmNlbnRlcjsgY29sb3I6dmFyKC0tYnV0dG9uLWludmVyc2UpOyB3aWR0aDoxMDAlOyBwYWRkaW5nOnZhcigtLWJ1dHRvbi1wYWRkaW5nKTsgZm9udDp2YXIoLS1idXR0b24tZm9udCk7IGJvcmRlcjp2YXIoLS1idXR0b24tYm9yZGVyKTsgYmFja2dyb3VuZDp2YXIoLS1idXR0b24tYmFja2dyb3VuZCk7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAgICAgICAgICAgICAgICAgZGl2OmZvY3VzIHsgb3V0bGluZTpub25lOyB9XG4gICAgICAgICAgICAgICAgICAgIGRpdjpob3ZlciB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1pbnZlcnNlKTsgY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kKTsgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdj48c2xvdD48L3Nsb3Q+PC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgb25DbGljayhlKSB7XG4gICAgICAgIGlmKHRoaXMudGFyZ2V0ID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IHRoaXMuaHJlZjsgXG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgdGhpcy50YXJnZXQpO1xuICAgIH1cbn1cbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJsaW5rLWJ1dHRvblwiLCBMaW5rQnV0dG9uKTtcblxuXG5jbGFzcyBTcGxhc2hQYW5lbCBleHRlbmRzIExpdEVsZW1lbnQge1xuXG4gICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogeyB0eXBlOiBTdHJpbmcgfVxuICAgICAgICB9O1xuICAgIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxzdHlsZT5cbiAgICAgICAgICAgIDpob3N0IHsgZGlzcGxheTpibG9jazsgaGVpZ2h0OjEwMCU7IH1cbiAgICAgICAgICAgIDpob3N0KFtoaWRkZW5dKSB7IGRpc3BsYXk6bm9uZTsgfVxuICAgICAgICAgICAgI3dyYXAgeyB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTsgfVxuICAgICAgICAgICAgI2NvcmUgeyBtYXgtd2lkdGg6dmFyKC0tY29udGVudC13aWR0aCk7IGhlaWdodDoxMDAlOyBiYWNrZ3JvdW5kLWltYWdlOnVybCgke3RoaXMuYmFja2dyb3VuZH0pOyBiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlcjsgYmFja2dyb3VuZC1zaXplOmNvdmVyOyBkaXNwbGF5OmZsZXg7IG1hcmdpbjphdXRvOyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBpZD1cIndyYXBcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb3JlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyO1wiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDsgXG4gIH1cblxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInNwbGFzaC1wYW5lbFwiLCBTcGxhc2hQYW5lbCk7XG5cbmNsYXNzIEVtYWlsU3Vic2NyaWJlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG5cbiAgICBzdGF0aWMgcHJvcGVydGllcyA9IHtcbiAgICAgICAgY2FtcGFpZ25LZXk6IHsgdHlwZTpTdHJpbmcgfVxuICAgIH1cblxuICAgIHN0YXRpYyBzdHlsZXMgPSBjc3NgXG4gICAgICAgIDpob3N0IHsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7ICB9XG4gICAgICAgICNpbnB1dGFyZWEgeyBkaXNwbGF5OmZsZXg7IHdpZHRoOjEwMCU7IG1heC13aWR0aDo2MDBweDsgZmxleC13cmFwOndyYXA7IGdhcDo0cHg7IGJveC1zaXppbmc6Ym9yZGVyLWJveDsgIH1cbiAgICAgICAgaW5wdXQgeyBmbGV4OiAxIDEgMzAwcHg7IHBhZGRpbmc6dmFyKC0taW5wdXQtcGFkZGluZyk7IGZvbnQ6dmFyKC0taW5wdXQtZm9udCk7IGNvbG9yOnZhcigtLWlucHV0LWludmVyc2UpOyBib3JkZXI6dmFyKC0taW5wdXQtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czp2YXIoLS1pbnB1dC1yYWRpdXMpOyBib3gtc2l6aW5nOmJvcmRlci1ib3g7IGJhY2tncm91bmQ6dmFyKC0taW5wdXQtYmFja2dyb3VuZCk7IH1cbiAgICAgICAgYnV0dG9uIHsgZmxleDogMSAxIDIwMHB4OyB1c2VyLXNlbGVjdDpub25lOyB0cmFuc2l0aW9uOmNvbG9yIDFzLCBiYWNrZ3JvdW5kLWNvbG9yIDFzOyBiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kKTsgY29sb3I6dmFyKC0tYnV0dG9uLWludmVyc2UpOyBwYWRkaW5nOnZhcigtLWJ1dHRvbi1wYWRkaW5nKTsgZm9udDp2YXIoLS1idXR0b24tZm9udCk7IGJvcmRlcjp2YXIoLS1idXR0b24tYm9yZGVyKTsgfVxuICAgICAgICBpbnB1dDpmb2N1cyB7IG91dGxpbmU6bm9uZTsgfVxuICAgICAgICBidXR0b246aG92ZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJ1dHRvbi1pbnZlcnNlKTsgY29sb3I6dmFyKC0tYnV0dG9uLWJhY2tncm91bmQpOyB9XG4gICAgICAgICNhZnRlcnRleHQgeyBkaXNwbGF5Om5vbmU7IHBhZGRpbmc6OHB4OyBmb250OnZhcigtLWJvZHktZm9udCk7IH1cbiAgICBgO1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnB1dGFyZWFcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgaWQ9XCJlbWFpbFwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cIiR7dGhpcy5vbkNsaWNrfVwiIGNsYXNzPVwicHJpbWFyeVwiPlN1YnNjcmliZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiYWZ0ZXJ0ZXh0XCI+VGhhbmsgWW91IEZvciBTdWJzY3JpYmluZyE8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB2YXIgZW1haWwgPSB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNlbWFpbFwiKS52YWx1ZTsgXG4gICAgICAgIHZhciByZWZlcnJlciA9IGRvY3VtZW50LnJlZmVycmVyO1xuICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNpbnB1dGFyZWFcIikuc3R5bGUub3BhY2l0eSA9IFwiMC4yXCI7XG4gICAgICAgIEFwcFV0aWwuYWRkU3Vic2NyaWJlcih0aGlzLmNhbXBhaWduS2V5LCBlbWFpbCwgcmVmZXJyZXIpLnRoZW4oc3ViID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUm9vdC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0YXJlYVwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclJvb3QucXVlcnlTZWxlY3RvcihcIiNhZnRlcnRleHRcIikuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImVtYWlsLXN1YnNjcmliZVwiLCBFbWFpbFN1YnNjcmliZSk7XG5cbmV4cG9ydCBjbGFzcyBBcHBVdGlsIHtcblxuICAgIC8vIGhhbmRsZSBlcnJvcnMgaW4gdGhlIHJlc3BvbnNlIHN0cmVhbSBzbyB0aGV5IGNhbiBiZSBjYXVnaHRcbiAgICAvLyBvdGhlcndpc2UgNDAxLDUwMCBlcnJvcnMsIGV0YyBkb24ndCBjYXRjaFxuICAgIC8vIHRoaXMgd29ya3Mgd2l0aCB0aGUgQyMgRXJyb3JSZXNwb25zZSByZXN1bHQgb2JqZWN0XG4gICAgLy8gZXhhbXBsZTogIC50aGVuKHRoaXMuaGFuZGxlRXJyb3JzKVxuICAgIHN0YXRpYyBoYW5kbGVFcnJvcnMocmVzKSB7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKGUgPT4geyB0aHJvdyBFcnJvcihlLm1lc3NhZ2UpOyB9KTtcbiAgICAgICAgfSBlbHNlIHsgXG4gICAgICAgICAgICByZXR1cm4gcmVzOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBhc3luYyBhZGRTdWJzY3JpYmVyKGNhbXBhaWduS2V5LCBlbWFpbCwgcmVmZXJyZXIpIHtcbiAgICAgICAgY29uc3QgYXBpYmFzZSA9ICdodHRwczovL2x1c2Npb3Vzc3R1ZGlvcy5henVyZXdlYnNpdGVzLm5ldC9hcGknO1xuICAgICAgICByZXR1cm4gZmV0Y2goYCR7YXBpYmFzZX0vc3Vic2NyaWJlP2NhbXBhaWduS2V5PSR7Y2FtcGFpZ25LZXl9JmVtYWlsPSR7ZW1haWx9JnJlZmVycmVyPSR7cmVmZXJyZXJ9YClcbiAgICAgICAgLnRoZW4odGhpcy5oYW5kbGVFcnJvcnMpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTsgXG4gICAgfVxufSJdLCJuYW1lcyI6WyJ0IiwiZSIsInMiLCJuIiwiciIsIm8iLCJpIiwiUyIsImMiLCJoIiwiYSIsImwiLCJkIiwidSIsImNzcyIsIkxpdEVsZW1lbnQiLCJSZXNpemVDb250cm9sbGVyIiwiaHRtbCIsIngiXSwibWFwcGluZ3MiOiI7OztFQUFBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxNQUFNQSxHQUFDLENBQUMsTUFBTSxDQUFDQyxHQUFDLENBQUNELEdBQUMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEdBQUdBLEdBQUMsQ0FBQyxRQUFRLEVBQUVBLEdBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsb0JBQW9CLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxTQUFTLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQ0UsR0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDQyxHQUFDLENBQUMsSUFBSSxPQUFPLFdBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBR0QsR0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLG1FQUFtRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBR0QsR0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDRSxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFhLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsTUFBTUMsR0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJQyxHQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDSCxHQUFDLENBQUMsQ0FBQ0ksR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQyxzRkFBc0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUlELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDSCxHQUFDLENBQUMsQ0FBQyxDQUFDSyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUUsQ0FBQyxDQUFDUSxHQUFDLENBQUNQLEdBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPRyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztFQ0oveUM7RUFDQTtFQUNBO0VBQ0E7RUFDQSxHQUFHLElBQUlGLEdBQUMsQ0FBQyxNQUFNRCxHQUFDLENBQUMsTUFBTSxDQUFDRyxHQUFDLENBQUNILEdBQUMsQ0FBQyxZQUFZLENBQUNRLEdBQUMsQ0FBQ0wsR0FBQyxDQUFDQSxHQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQ0MsR0FBQyxDQUFDSixHQUFDLENBQUMsOEJBQThCLENBQUNFLEdBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQ00sR0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUNSLEdBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDTyxHQUFDLENBQUMsQ0FBQ0UsR0FBQyxDQUFDLFdBQVcsV0FBQyxNQUFNLENBQUMsU0FBUyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRSxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFdBQVcsa0JBQWtCLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxPQUFPLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQ0MsR0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUNBLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDWixHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDQSxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxPQUFPTSxHQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNLLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUNSLEdBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUNBLEdBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFTyxHQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sSUFBSSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLGNBQWMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDRyxHQUFDLENBQUNELEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFDLENBQUMsaUJBQWlCLENBQUMsSUFBSSxHQUFHLENBQUNBLEdBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDQSxHQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFUixHQUFDLEVBQUVBLEdBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQ1EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSVgsR0FBQyxDQUFDRCxHQUFDLENBQUMsdUJBQXVCLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBR0MsR0FBQyxDQUFDQSxHQUFDLENBQUNELEdBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQzs7RUNMcmlMO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxJQUFJLENBQUMsQ0FBTSxNQUFDLENBQUMsQ0FBQyxNQUFNLENBQUNDLEdBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQ0EsR0FBQyxDQUFDQSxHQUFDLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQ0csR0FBQyxDQUFDLE9BQU8sQ0FBQ0YsR0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNRLEdBQUMsQ0FBQyxHQUFHLENBQUNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVRLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBRSxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNOLEdBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDRixHQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQ0EsR0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQ0UsR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQ0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUNFLEdBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQ0YsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQ0EsR0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUNELEdBQUMsQ0FBQ0EsR0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUdTLEdBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUNSLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUVBLEdBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUMsR0FBRSxDQUFDLENBQUMsT0FBTyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLFVBQVUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLElBQUksT0FBTyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ0QsR0FBQyxDQUFDQSxHQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFNLE1BQTZELENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxD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
