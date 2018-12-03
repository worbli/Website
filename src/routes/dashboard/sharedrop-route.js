import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../../css/shared-styles.js';
import '../../components/worbli-footer.js';
import '../../components/side-bar/worbli-snapshot.js';
import '@polymer/app-route/app-location.js';
import '../../worbli-env.js';
import '../../components/side-bar/worbli-dashnav.js';

class SharedropRoute extends PolymerElement {
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
        .secondary{
          background: white;
          color: #62656F;
          border: 0px solid #EBEBEC;
          margin-right: 0;
          font-weight: 200;
        }
        .input-area {
          display: flex;
        }
        .intro{
          padding: 12px;
          display: block;
        }
        ol {
          width: 92%;
          margin: auto;
        }
        li {
          margin-bottom: 20px;
        }
        .footer {
          margin-top: 24px;
          display: block;
          height: 63px;
          border-top: 1px solid #f5f5f5;
          text-align: right;
        }
        b {
          color: #62656F;
          font-weight: 700;
        }
        pre {
          background-color: #EBEBEC;
          overflow: auto;
          font-family: 'Monaco', monospace;
          padding: 0 1em;
        }
        code {
            font-family: Monaco, monospace;
            font-size: $base-font-size;
            line-height: 100%;
            background-color: #eee;
            padding: 0.2em;
            letter-spacing: -0.05em;
            word-break: normal;
            border-radius: 5px;
            display: block;
            padding: 25px;
            line-height: 25px;
        }
        pre code {
            border: none;
            background: none;
            font-size: $base-font-size * 0.875;
            line-height: 1em;
            letter-spacing: normal;
            word-break: break-all;
          }
      </style>
      
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]"></app-location>
      <worbli-env api-path="{{apiPath}}""></worbli-env>
      <div class="split">
        <div class="side">
          <worbli-dashnav></worbli-dashnav>
        </div>
        <div class="main">

          <h1>Claim Sharedrop</h1>
          <p class="intro">
            <ol>
              <li>You are going to be using Scatter in order to claim your sharedrop. Make sure you have the <b>Scatter Desktop</b> application open.</li>
              <li>Click on the "<b>Attach Scatter to EOS</b>" button.</li>
              <li>A pop-up window may appear, choose “<b>Link</b>”.</li>
              <li>Click on the “<b>Claim Sharedrop</b>” button.</li>
              <li>A pop-up window will appear, click on the tick to sign the transaction on the EOS network.</li>
            </ol>
          </p>
          <br /><br />
          <template is="dom-if" if="{{advanced}}">
          <h1>Advanced: Claim sharedrop manually</h1>
          <p class="intro">
          You can use cleos or another third-party client that allows you to sign custom transactions by executing the following action to the '<b>worbliworbli</b>' contract on EOS Mainnet:<br /><br />
      <code>
      cleos push action worbliworbli reg '["YOUR_EOS_ACCOUNT_NAME", "{{securityCode}}"]' -p YOUR_EOS_ACCOUNT_NAME@active
      </code>
          </p>
          </template>

          <div class="footer">
            <template is="dom-if" if="{{!scatterConnected}}">
              <template is="dom-if" if="{{!advanced}}">
                <button type="button" class="secondary" on-click="_startAdvanved">Advanced: Claim sharedrop manually</button>
              </template>
              <button type="button" on-click="_startVerificatoin">Attach Scatter to EOS</button>
            </template>
            <template is="dom-if" if="{{scatterConnected}}">
              <button type="button" on-click="_signScatter">Claim Sharedrop</button>
            </template>
          </div>
        </div>
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
      scatterConnected: {
        type: Boolean,
        value: false, 
      },
      eos: {
        type: Object,
      },
      scatter: {
        type: Object,
      },
      securityCode: {
        type: Text,
      },
      route: {
        type: Object,
        observer: "_routeChanged"
      },
      onPage: {
        type: Boolean,
        value: false, 
      },
      interval: {
        type: Number,
        value: 3000
      },
      refreshIntervalId:{
        type: Object
      },
      advanced: {
        type: Boolean,
        value: false, 
      }
    };
  }

  _routeChanged(){
    this.securityCode = "";
    this.advanced = false;
    this.started = false;
    const location = this.route.path.split("/");
    if(location[2] === 'sharedrop'){
      this.onPage = true;
      this._checkShareDrop();
    } else {
        clearInterval(this.refreshIntervalId);
        this.onPage = false; 
    }
  }


  _checkShareDrop(){ 
    if(this.onPage){
      this.refreshIntervalId = setInterval(()=>{
        const token = localStorage.getItem("token");
        const url = `${this.apiPath}/user/sharedrop/`;
        fetch(url, {
          method: 'GET',
          headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        })
        .then((response) => {return response.json()})
        .then((response) => {
          if(response && response.data === true){
            const newjwt = response.newjwt;
            localStorage.setItem("token", newjwt);
            this.set('route.path', '/dashboard/account')
            clearInterval(this.refreshIntervalId);
          }
        })
      }, this.interval)
    }
  }

  _startVerificatoin(){
    const token = localStorage.getItem("token");
    const url = `${this.apiPath}/user/security/`;
    fetch(url, {
      method: 'GET',
      headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })
    .then((response) => {return response.json()})
    .then((response) => {
      if(response && response.data === true && response.security_code){
        this.securityCode = response.security_code;
        this.started = true;
        this._connectScatter();
      }
    })
  }

  _startAdvanved(){
    this.advanced = true;
    const token = localStorage.getItem("token");
    const url = `${this.apiPath}/user/security/`;
    fetch(url, {
      method: 'GET',
      headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })
    .then((response) => {return response.json()})
    .then((response) => {
      if(response && response.data === true && response.security_code){
        this.securityCode = response.security_code;
      }
    })
  }

  _getCode(){
    const token = localStorage.getItem("token");
    const url = `${this.apiPath}/user/security/`;
    fetch(url, {
      method: 'GET',
      headers:{'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
    })
    .then((response) => {return response.json()})
    .then((response) => {
      if(response && response.data === true && response.security_code){
        this.securityCode = response.security_code;
      }
    })
  }

  _connectScatter(){
    let scatter, eos;
    const network = {
      blockchain:'eos',
      protocol:'https',
      host:'nodes.get-scatter.com',
      port:443,
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    }
    const options = {expireInSeconds:60};
    const reqFields = {accounts:[network]};
    ScatterJS.plugins(new ScatterEOS());
    ScatterJS.scatter.connect("worbli")
    .then(connected => {
      if (!connected) return false;
      scatter = ScatterJS.scatter;
      scatter.getIdentity(reqFields)
      .then(() => {
        eos = scatter.eos(network, Eos, options) 
        this.scatterConnected = true;
        this.eos = eos;
        this.scatter = scatter; 
      })
      .catch((error) => {
        alert('Scatter not found, Open it and try again');
      });
    })
    .catch(error => console.log(error));

  }

  _signScatter(){
    const account = this.scatter.identity.accounts.find(x => x.blockchain === 'eos');
    const options = { authorization:[`${account.name}@${account.authority}`]};
    const contractAccount = 'worbliworbli';
    const functionName = 'reg';
    const owner = account.name;
    const securitycode = this.securityCode;
    const args = {owner, securitycode}
    this.eos.transaction([contractAccount], sendTx => {
      sendTx[contractAccount][functionName](args, options)
    })
    .then(trx => console.log('trx', trx))
    .catch(err => console.error(err));
  }

} window.customElements.define('sharedrop-route', SharedropRoute);
