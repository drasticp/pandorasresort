import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

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
        icon: { type: String }, 
        href: { type: String }
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
        window.open(this.href, "_blank");
    }
}
window.customElements.define("icon-link", IconLink);

class LinkButton extends LitElement {

    static properties = {
        href: { type:String }
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
                    div { user-select:none; transition:color 1s, background-color 1s; text-align:center; color:var(--action-inverse); width:100%; padding: 12px 12px 12px 12px; font-size:var(--button-font-size); font-weight:var(--button-font-weight); border:none; background-color:var(--action); box-sizing: border-box; }
                    div:focus { outline:none; }
                    div:hover { background-color: var(--action-inverse); color: var(--action); }
                </style>
                <div><slot></slot></div>
        `;
    }

    onClick(e) {
        window.location = this.href;
    }
}
window.customElements.define("link-button", LinkButton);

class NavBar extends LitElement {   
    resizer = new ResizeController(this);

    static properties = {
        width: { type:Number }
    };

    render() {
        
        var menu = html`<slot @click="${this.menuItemClick}"></slot>`;

        if(this.width < 460) {
            return html`
            <style>
                :host { display:block; }
                :host([hidden]) { display:none; }
                #overlay { position:absolute; flex-direction:column; align-items:center; gap:16px; display:none; height:100%; width:100%; top:0px; left:0px; background-color:var(--action); fill:var(--action-inverse); color:var(--action-inverse); } 
                #clearicon { align-self:flex-start; margin:16px 16px 0px 16px; height:var(--icon-size); width:var(--icon-size); fill:inherit;  }
                #menuicon { position:absolute; left:16px; fill:var(--background-inverse); }
                #main { display:flex; align-items:center; justify-content:center; }
                ::slotted(*) { color:inherit; fill:inherit; background:inherit; }
            </style>
            <div id="main">
                <bright-icon id="menuicon" icon="menu" @click="${this.menuIconClick}"></bright-icon>
                <slot name="left"></slot>
                <slot name="top"></slot>
                <slot name="right"></slot>
            </div>
            <div id="overlay">
                <bright-icon id="clearicon" icon="clear" @click="${this.closeIconClick}"></bright-icon>
                ${menu}
            </div>
            `;
        } else {
            return html`
                <style>
                    :host { display:block; }
                    :host([hidden]) { display:none; }
                    #top { margin:auto; display:flex; max-width:var(--content-width); box-sizing:border-box; gap:16px; flex-wrap:no-wrap; align-items:center; }
                    #main { margin:auto; display:flex; max-width:var(--content-width); box-sizing:border-box; gap:32px; flex-wrap:no-wrap; align-items:center; }
                    #menu { flex:1 1 0; justify-content:space-between; display:flex; }
                    #left { display:flex; align-items:center;  }
                    ::slotted(a) { color:var(--background-inverse); }
                </style>
                <div id="top">
                    <slot name="top"></slot>
                </div>
                <div id="main">
                    <slot name="left"></slot>
                    <div id="menu">
                        ${menu}
                    </div>
                    <slot name="right"></slot>
                </div>
            `;
        }
    }

    onResized() {
        this.width = window.innerWidth;
    }

    menuItemClick() {
        this.closeIconClick();
    }

    menuIconClick() {
        var overlay = this.renderRoot.querySelector("#overlay");
        overlay.style.display = "flex";
        this.classList.add("overlaid");
    }
    closeIconClick() {
        var overlay = this.renderRoot.querySelector("#overlay");
        overlay.style.display = "none";
        this.classList.remove("overlaid");
    }
}
window.customElements.define("nav-bar", NavBar);

class GalleryGrid extends LitElement {
    static get properties() {
        return {
            itemwidth: { type: String, attribute:"item-width" }, 
            gap: { type:String, attribute:"gap" }
        };
    }

    constructor() {
        super();
        this.itemwidth = "30%", 
        this.gap = "5%"
    }

    render() {
        return html`
        <style>
            :host { display:block; width:100%; box-sizing:border-box; }
            :host([hidden]) { display:none; }
            #main { max-width:var(--content-width); display:flex; flex-wrap:wrap; justify-content:center; gap:${this.gap}; }
            ::slotted(img) { max-width:${this.itemwidth} }
        </style>
        <div id="main">
            <slot @click="${this.itemClick}"></slot>
        </div>
        <gallery-overlay></gallery-overlay>
        `; 
    }

    itemClick(e) {
        this.renderRoot.querySelector("gallery-overlay").show(e.srcElement.src);
    }

}
window.customElements.define("gallery-grid", GalleryGrid);

class GalleryScroller extends LitElement {
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
        this.gap = "5%"
        this._index = 0; 
    }

    render() {
        return html`
        <style>
            :host { display:block; width:100%; box-sizing:border-box; position:relative;  }
            :host([hidden]) { display:none; }
            #main { max-width:var(--content-width); display:flex; justify-content:flex-start; gap:${this.gap}; overflow-x:scroll; }
            ::slotted(img) { max-width:${this.itemwidth}; margin:8px; }
            ::-webkit-scrollbar { display: none; }
            #main { -ms-overflow-style: none; scrollbar-width: none; }
            #prev, #next { position:absolute; top:48%; height:var(--icon-size); width:var(--icon-size); fill:white; filter: drop-shadow(3px 3px 2px #000000); }
            #prev { left:32px; display:none; }
            #next { right:32px; }
        </style>
        <bright-icon id="prev" @click="${this.prev}" icon="arrow-back"></bright-icon>
        <bright-icon id="next" @click="${this.next}" icon="arrow-forward"></bright-icon>
        <div id="main">
            <slot @click="${this.itemClick}"></slot>
        </div>
        <gallery-overlay id="overlay"></gallery-overlay>
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
        this.renderRoot.querySelector("gallery-overlay").show(e.srcElement.src);
    }
}
window.customElements.define("gallery-scroller", GalleryScroller);

class GalleryOverlay extends LitElement {
    static get properties() {
        return {
            open: { type:Boolean, attribute:"open" }, 
            src: { type:String, attribute:"src" }
        };
    }

    render() {
        return html`
            <style>
                :host { display:none; width:100%; height:100%; top:0px; left:0px; z-index:100; box-sizing:border-box; position:fixed; flex-direction:column; align-items:center; justify-content:center; background-color:var(--background); }
                :host([hidden]) { display:none; }
                img { max-height:90%; max-width:100%; box-sizing:border-box;  }
                bright-icon { height:var(--icon-size); width:var(--icon-size); position:absolute; top:16px; right:16px; fill:var(--background-inverse); }
            </style>
            <bright-icon id="clearicon" icon="clear" @click="${this.closeIconClick}"></bright-icon>
            <img src="${this.src}"/>
        `;
    }

    show(url) {
        this.renderRoot.querySelector("img").src = url; 
        this.style.display = "flex"
    }

    closeIconClick() {
        this.style.display = "none";
    }

}
window.customElements.define("gallery-overlay", GalleryOverlay);

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

class FlexPanel extends LitElement {

    static get properties() {
        return {
            background: { type: String },
            itemwidth: { type: String, attribute: "item-width" },
            itemheight: { type: String, attribute: "item-height" }
        };
    }

    render() {
        return html`
            <style>
                :host { margin:auto; display:flex; flex-wrap:wrap; max-width:var(--content-width); align-items:stretch; align-content:center; justify-content:center; gap:32px; box-sizing:border-box; background-image:url(${this.background}); background-position:center; background-size:cover;  }
                :host([hidden]) { display:none; }
                ::slotted(*) { flex: 1 0 auto; max-width:${this.itemwidth}; min-height:${this.itemheight} }

                @media (max-width: 460px) {
                    :host { padding:16px !important; gap:16px !important;  }
                    ::slotted(*) { flex: 1 1 auto; max-width:100%; }
                }
            </style>
            <slot></slot>
        `; 
    }

}
window.customElements.define("flex-panel", FlexPanel);

class PaperCard extends LitElement {

    static get properties() {
        return {
            background: { type: String }
        };
    }

    render() {
        return html`
            <style>
                :host { display:block; box-sizing:border-box; }
                :host([hidden]) { display:none; }
                #card { display:flex; height:100%; width:100%; box-sizing:border-box; align-items:center; flex-direction:column; background-image:url(${this.background}); background-position:center; background-size:cover; padding:32px; }
                #bottom { display:flex; justify-content:center; flex-wrap:wrap;  }
            </style>
            <div id="card">
                <div><slot></slot></div>
                <div style="flex: 1 1 auto"></div>
                <div id="bottom"><slot name="bottom"></slot></div>
            </div>
        `; 
    }

}
window.customElements.define("paper-card", PaperCard);

class BrightIcon extends LitElement {

    static get properties() {
        return {
            icon: { type:String }
        }
    }

    render() {
        return html`
            <style>
                :host { display:inline-block; width:24px; height:24px; fill:grey;  }
                :host([hidden]) { display:none; }
            </style>
            <svg style="height:100%; width:100%" viewbox="0 0 24 24">
                <use href="monarch.svg#${this.icon}"></use>
            </svg>
        `;
    }
}
window.customElements.define("bright-icon", BrightIcon);