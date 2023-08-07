import {LitElement, html, css} from 'lit';
import {BrightInput, BrightSection } from 'bright';

export class ResizeController {
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

class SocialBar extends LitElement {
    resizer = new ResizeController(this);

    render() {
    return html`
        <style>
            :host { display:flex; cursor:pointer; z-index:10; }
            :host([hidden]) { display:none; }
        </style>
        <slot></slot>
        `;
    }
}
window.customElements.define("social-bar", SocialBar);

class IconLink extends LitElement { 

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
        return html`
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

class LinkButton extends LitElement {

    static properties = {
        href: { type:String }, 
        target: { type:String }
    };

    constructor() {
        super();
        this.addEventListener("click", this.onClick);
    }

    render() {
        return html`
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


class SplashPanel extends LitElement {

    static get properties() {
        return {
            background: { type: String }
        };
    }

  render() {
    return html`
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

class EmailSubscribe extends LitElement {

    static properties = {
        campaignKey: { type:String }
    }

    static styles = css`
        :host { display:flex; justify-content:center; box-sizing:border-box;  }
        #inputarea { display:flex; width:100%; max-width:600px; flex-wrap:wrap; gap:4px; box-sizing:border-box;  }
        input { flex: 1 1 300px; padding:var(--input-padding); font:var(--input-font); color:var(--input-inverse); border:var(--input-border); border-radius:var(--input-radius); box-sizing:border-box; background:var(--input-background); }
        button { flex: 1 1 200px; user-select:none; transition:color 1s, background-color 1s; background:var(--button-background); color:var(--button-inverse); padding:var(--button-padding); font:var(--button-font); border:var(--button-border); }
        input:focus { outline:none; }
        button:hover { background:var(--button-inverse); color:var(--button-background); }
        #aftertext { display:none; padding:8px; font:var(--body-font); }
    `;

    render() {
        return html`
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

export class AppUtil {

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