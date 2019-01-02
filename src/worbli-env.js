
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class WorbliEnv extends PolymerElement {

  static get properties() {
    return {
      apiPath: {
        type: String,
        reflectToAttribute: true,
        notify: true,
        value: 'http://api.localhost:9000/api/v1'
      },
    };
  }
} window.customElements.define('worbli-env', WorbliEnv);