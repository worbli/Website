import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '@polymer/app-route/app-location.js';
import '../../components/side-bar/worbli-dashnav.js';
import '../../worbli-env.js';

class StatusRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-right: 30px;
        }
        .main {
          max-width: 850px;
          flex-grow: 1;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
        }
        .navigation {
          color: #3a3e46;
          font-size: 11px;
          font-weight: 600;
          line-height: 16px;
          padding: 13px 12px;
          border-bottom: 1px solid #f5f5f5;
          background: none;
          text-shadow: none;
        }
        .navigation:hover {
          background-color: #F6F6F7;
        }
        .footer {
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        h1 {
          color: var(--blue-text);
          font-weight: 600;
          margin-bottom: 12px;
          font-size: 13px;
          border-bottom: 1px solid #f5f5f5;
          padding: 12px;
        }

        button {
          display: inline-block;
          vertical-align: middle;
          background: #4f7eb8;
          border: 1px solid #4b77ad;
          border-radius: 3px;
          box-shadow: none;
          text-shadow: none;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          padding: 0 13px;
          line-height: 29px;
          text-align: center;
          margin: 16px;
          cursor: pointer;
        }
        .input-area {
          display: flex;
        }
        .section-name {
          display: inline-block;
          min-width: 200px;
          padding: 12px;
          font-size: 15px;
          color: #6f727d;
          font-weight: normal;
        }
        .form-inputs {
          display: inline-block;
          padding: 12px;
        }
        label {
          display: block;
          font-size: 12px;
          color: #393d4d;
          font-weight: 600;
          padding: 17px 0 7px;
          width: 340px;
        }
        .label{
          font-size: 12px;
          color: #393d4d;
          font-weight: 600; 
          text-transform: capitalize; 
        }
        input {
          width: 307px;
          background: #f8f8f8;
          border: 1px solid #d1d5d7;
          border-radius: 2px;
          margin: 0;
          padding: 5px 7px;
          line-height: 19px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          font-size: 13px;
          color: #393D4D;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(255, 255, 255, 0.075);
          -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.02),0 1px 0 rgba(255, 255, 255, 0.075);
        }
        .comment {
          display: block;
          line-height: 18px;
          color: #9da1ab;
          padding: 9px 0 0;
          margin: 0 0 -2px 0;
          font-size: 12px;
        }
        hr {
          display: block;
          border-top: 1px solid #f5f5f5;
        }
        .dropdown {
          background-color: #f8f8f8;
          border-color: #d1d5d7;
          -webkit-appearance: none;
          appearance: none;
          -moz-appearance: none;
          -moz-appearance: none;
          line-height: 15px;
          padding: 5px 5px 5px 7px;
          -webkit-padding-end: 20px;
          height: 31px;
          font-size: 13px;
          border: 1px solid #D9DBDE;
          border-radius: 3px;
          background: url(./images/dropdown.gif) no-repeat;
          background-size: 18px 22px;
          background-position: 100% 50%;
          width: 320px;
        }

        .intro{
          padding: 12px;
        }

        @media only screen and (max-width: 600px){
          .split {
            margin-top: 40px;
          }
          .section-name{
            width:0px;
            height:0px;
            display: none;
          }
          .side {
            width: 100vw;
            padding-right: 0px;
            margin-top: 63px;
          }
        }

      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>


        <template is="dom-if" if="{{!showSupport}}">
          <div class="main">
            <h1>Status</h1>
            <p class="intro">Thank you for your submission! We are processing your application, please check back in 48hrs.</p>
            <div class="input-area">
              <div class="section-name">Document Report</div>
              <div class="form-inputs">
                <p class="label">Reviewing</p>
              </div>
            </div>
            <hr>
            <div class="input-area">
              <div class="section-name">Facial Similarity Report</div>
                  <div class="form-inputs">
                      <p class="label">Reviewing</p>
                  </div>
              </div>
              <hr>
            <div class="input-area">
              <div class="section-name">Watchlist Report</div>
                  <div class="form-inputs">
                  <p class="label">Reviewing</p>
              </div>
            </div>
            <div class="footer">
              <button type="button" on-click="_checkStatus">[[btnText]]</button>
            </div>
          </div>
       
      </template>

      <template is="dom-if" if="{{showSupport}}">
          <div class="main">
            <h1>Status</h1>
            <p class="intro">Unfortunately, we failed to verify your identity. If you believe this is due to an error, please <a href="https://worbli.zendesk.com" target="_blank">contact support.</a></p>
          </div>
     
      </template>


 </div>

      </br></br>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }

  static get properties() {
    return {
      complete: {
        type: Boolean,
        value: false,
      },
      started: {
        type: Boolean,
        value: false,
      },
      readonly: {
        type: Text,
      },
      apiPath: {
        type: Text,
      },
      kycToken2: {
        type: Text,
      },
      showIframe: {
        type: Boolean,
        value: false,
      },
      btnText: {
        type: Text,
        value: 'Check Status'
      },
      showSupport: {
        type: Boolean,
        value: false,
      },
      route: {
        type: Text,
        observer: '_routeChanged'
      }
    };
  }

  _routeChanged(){
    if(this.route.path === '/dashboard/status'){
      this._checkStatus();
    }
  }

  _checkStatus(){
    this.btnText = 'Checking...';
    const token = localStorage.getItem("token");
    if(token) {
      const url = `${this.apiPath}/kyc/status/`;
      fetch(url, {
        method: 'GET',
        headers: {'Authorization': `Bearer ${token}`},
      })
      .then((response) => {return response.json()})
      .then((response) => {
        if(response.data === true && response.action === 'redirect'){
          this.btnText = 'Check Status';
          localStorage.setItem("token", response.token);
          this.set('route.path', '/dashboard/account')
        } else if(response.data === true && response.action === 'support'){
          this.showSupport = true;
        } else {
          this.btnText = 'Check Status';
        }
      })
      .catch((err) => {
        this.btnText = 'Check Status';
      });
    } else {this.set('route.path', '/')}
  }

} window.customElements.define('status-route', StatusRoute);
