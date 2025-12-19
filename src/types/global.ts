import { LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'uptime-card-with-outages-editor': LovelaceCardEditor;
  }
}
