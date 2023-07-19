import { Component, OnInit } from '@angular/core';
import * as pbi from 'powerbi-client';
@Component({
  selector: 'app-powerbi-report',
  templateUrl: './powerbi-report.component.html',
  styleUrls: ['./powerbi-report.component.css']
})
export class PowerbiReportComponent implements OnInit {

  reports: { accessToken: string, embedUrl: string, id: string }[] = [
    {
      accessToken: 'ACCESS_TOKEN_1',
      embedUrl: 'https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2F%3FnoSignUpCheck%3D1',
      id: 'REPORT_ID_1'
    },
    // {
    //   accessToken: 'ACCESS_TOKEN_2',
    //   embedUrl: 'EMBED_URL_2',
    //   id: 'REPORT_ID_2'
    // },
    // Add more reports as needed
  ];

  constructor() { }

  ngOnInit(): void {
    this.embedReports();
  }

  embedReports(): void {
    this.reports.forEach(reprt => {
      const config: pbi.IEmbedConfiguration = {
        type: 'report',
        tokenType: pbi.models.TokenType.Embed,
        accessToken: reprt.accessToken,
        embedUrl: reprt.embedUrl,
        id: reprt.id,
        settings: {
          filterPaneEnabled: false,
          navContentPaneEnabled: true
        }
      };

      const reportContainer = document.createElement('div');
      const containerElement = document.getElementById('powerbiContainer');
      containerElement.appendChild(reportContainer);
      let powerbi = new pbi.service.Service(pbi.factories.hpmFactory, pbi.factories.wpmpFactory, pbi.factories.routerFactory);
      const report = powerbi.embed(reportContainer, config);
    });
  }

}
