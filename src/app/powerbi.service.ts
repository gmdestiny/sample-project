import { Injectable } from '@angular/core';
import * as pbi from 'powerbi-client';
@Injectable({
  providedIn: 'root'
})
export class PowerbiService {

  constructor() { }
  private embedConfig: any = {
    type: 'report',
    id: '<YOUR_POWER_BI_REPORT_ID>',
    embedUrl: '<YOUR_POWER_BI_REPORT_EMBED_URL>',
    tokenType: pbi.models.TokenType.Embed,
    accessToken: '<YOUR_POWER_BI_ACCESS_TOKEN>',
    permissions: pbi.models.Permissions.All,
    settings: {
      filterPaneEnabled: false,
      navContentPaneEnabled: true,
    },
  };

  embedReport(reportContainer: HTMLElement) {
    let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);

    const report = powerbi.embed(reportContainer, this.embedConfig);
  }
}
