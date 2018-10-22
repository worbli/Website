import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';

class WorbliTelegram extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        div {
            flex-grow: 1;
            color: var(--grey-text);
            font-size: 12px;
        }
        .container{
            position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
          cursor: pointer;
        }
        .title {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .faq-text {
          font-size: 13px;
          font-weight: 200;
          line-height: 16px;
          padding: 12px;
        }
        .button{
          display: block;
          box-shadow: inset 0 0 0 1px #c8d6e8;
          padding: 6px;
          max-width: 210px;
          border-radius: 3px;
          text-align: center;
          padding-top:12px;
          height: 25px;
          margin-left: 25px;
          text-decoration: none;
          color: #4978b3;
          font-size: 12px;
          font-weight: 600;
          width: 100%;
        }
        .bottom-space {
          padding-bottom: 20px;
        }
      </style>
        <div class="container">
            <div class="title">Telegram</div>
            <p class="faq-text">Chat live with the WORBLI team</p>
            <a href="https://t.me/worblicommunity" class="button" target="_blank">Open Telegram</a>
            <p class="bottom-space"></p>
        </div>
    `;
  }
  static get properties() {
    return {
      init: {
        type: String,
        observer: '_doOnfido',
      },
    };
  }

} window.customElements.define('worbli-telegram', WorbliTelegram);