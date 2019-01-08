import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/shared-styles.js';
import '../components/worbli-footer.js';
import '../components/worbli-roadmap.js';
import '../components/side-bar/worbli-whitepaper.js';
import '../components/side-bar/worbli-partners.js';
import '../components/side-bar/worbli-telegram.js';
import '../components/worbli-title.js';

class RoadmapRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
        }
        iframe {
          margin-top: 50px;
          margin-bottom: 50px;
        }
        .split {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .side {
          width: 280px;
          padding-left: 30px;
        }
        .main {
          flex-grow: 1;
          max-width: 850px;
        }
        .container {
          position: relative;
          background: #FFF;
          border-radius: 3px;
          box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -webkit-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          -moz-box-shadow: 0 1px 0px 0px rgba(208, 209, 213, 0.5), 0 0px 0px 1px rgba(220, 221, 224, 0.4);
          margin-bottom: 18px;
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
        h1 {
          color: var(--blue-text);
          font-weight: 200;
          margin-bottom: 12px;
        }
        h2 {
          color: var(--blue-text);
          font-size: 21px;
          font-weight: 600;
          margin-top: 12px;
          margin-bottom: 12px;
        }
        .center {
          margin: 0 auto;
        }
        .roadmap-container{
          display: flex;
          flex-wrap: wrap;
        }
        @media only screen and (max-width: 600px){
          .center{
            margin:12px;
          }
          .side{
            width: 100vw;
            padding-left: 0px;
          }
        }
      </style>
      <worbli-title title="Roadmap"></worbli-title>
      <div class="split">
      <div class="main">
          <div class="center">
            <h2>Product</h2>
              <div class="roadmap-container">
                <worbli-roadmap title="AML/KYC to WORBLI Accounts" status="complete"></worbli-roadmap>
                <worbli-roadmap title="Facilitate Ongoing dApp Launches" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="dApp 1 - Recruit Lead BP Dev Team" status="complete"></worbli-roadmap>
                <worbli-roadmap title="dApp 2 - Recruit Lead BP Dev Team" status="complete"></worbli-roadmap>
                <worbli-roadmap title="dApp 1 - Spec For Development" status="complete"></worbli-roadmap>
                <worbli-roadmap title="dApp 2 - Spec For Development" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Portal - Launch Block Explorer" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Portal - Refine Signup Process" status="complete"></worbli-roadmap>
                <worbli-roadmap title="Portal - FAQ’s & Support Desk" status="complete"></worbli-roadmap>
                <worbli-roadmap title="Portal - Launch WBI Bounty" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Portal - Dashboard News Feed" status="testing"></worbli-roadmap>
                <worbli-roadmap title="Portal - Community Chat Box" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Portal - Engagement Hub" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Portal - UI/UX Updates" status="complete"></worbli-roadmap>
                <worbli-roadmap title="Portal - Launch Friend Get Friend" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="WORBLI Wallet - V1" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="WORBLI Wallet - Insured Multi Asset Wallet" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="WORBLI Toolkit" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="WORBLI Network Monitor" status="complete"></worbli-roadmap>
                <worbli-roadmap title="WORBLI Block Explorer" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Integrate Multi Payment Gateway" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Gamma - MVP" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Gamma - Test MVP" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Alternative Product Development" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Gamma - Team Recruitment" status="inprogress"></worbli-roadmap>
                <worbli-roadmap title="Launch Gamma" status="inprogress"></worbli-roadmap>
              </div>
            <h2>Network</h2>
            <div class="roadmap-container">
              <worbli-roadmap title="Help Launch EOS Mainnet" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Confirm All Block Producers" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Conduct Sharedrop Snapshot" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Launch Sharedrop Smart Contract" status="complete"></worbli-roadmap>
              <worbli-roadmap title="List WORBLI (WBI) on Exchanges" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Partner Development Network" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Blockchain Education Hub" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Launch WORBLI" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Launch Sharedrop" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Integrate Onfido" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Add Reserve Block Producers" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Enable Support For Chintai" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Enable Support For Scatter Wallet" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Integrate With Scatter Wallet" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Enable Support For MEET.ONE Wallet" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Integrate With MEET.ONE Wallet" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Enable Support For Token Pocket Wallet" status="complete"></worbli-roadmap>       
              <worbli-roadmap title="Integrate With Token Pocket Wallet" status="inprogress"></worbli-roadmap> 
              <worbli-roadmap title="Enable Support For Greymass Wallet" status="inprogress"></worbli-roadmap>  
              <worbli-roadmap title="Integrate With Greymass Wallet" status="inprogress"></worbli-roadmap>
            </div>
            <h2>Governance</h2>
            <div class="roadmap-container">
              <worbli-roadmap title="Define WORBLI Governance Model" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Draft WORBLI Governance Model" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Publish WORBLI Governance Model" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Commence Lobbying Efforts" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Incorporate WORBLI Foundation" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Recruit Governance Team" status="complete"></worbli-roadmap>
              <worbli-roadmap title="Develop Banking Relationships" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Secure Banking Partnerships" status="testing"></worbli-roadmap>
              <worbli-roadmap title="Create Company Structure" status="inprogress"></worbli-roadmap>
              <worbli-roadmap title="Governance Committee Creation" status="inprogress"></worbli-roadmap>
              </div>
          </div>
        </div>
        <div class="side">
          <worbli-whitepaper></worbli-whitepaper>
          <worbli-partners></worbli-partners>
          <worbli-telegram></worbli-telegram>
        </div>
      </div>
      <worbli-footer name="footer"></worbli-footer>
    `;
  }
} window.customElements.define('roadmap-route', RoadmapRoute);
