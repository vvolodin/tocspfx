import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';
// import '../../dev/chart/TeamOrgChart.WebUI.DirectoryApp/TeamOrgChart.WebUI.DirectoryApp/build/client/polyfills';
// import '../../dev/chart/TeamOrgChart.WebUI.DirectoryApp/TeamOrgChart.WebUI.DirectoryApp/build/client/runtime-es2015';
// import '../../dev/chart/TeamOrgChart.WebUI.DirectoryApp/TeamOrgChart.WebUI.DirectoryApp/build/client/scripts-es2015';
// import '../../dev/chart/TeamOrgChart.WebUI.DirectoryApp/TeamOrgChart.WebUI.DirectoryApp/build/client/styles-es2015';
// import '../../dev/chart/TeamOrgChart.WebUI.DirectoryApp/TeamOrgChart.WebUI.DirectoryApp/build/client/main-es2015';
// import '../../client/polyfills-es2015';
// import '../../client/runtime-es2015';
// import '../../client/scripts-es2015';
// import '../../client/styles-es2015';
// import '../../client/main-es2015';
// import '../../client/runtime-es2015';
// import '../../client/polyfills-es2015';
// import '../../client/scripts';
// import '../../client/styles-es2015';
// import '../../client/main-es2015';

// import 'runtime';
// import 'scripts';
// import 'styles';
// import 'main';
import 'polyfills';
import 'scripts';
import 'spfx';


export interface IHelloWorldWebPartProps {
  description: string;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart <IHelloWorldWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `<h2>TOC</h2><chart-element></chart-element>
      <div class="${ styles.helloWorld }">
    <div class="${ styles.container }">
      <div class="${ styles.row }">
        <div class="${ styles.column }">
          <span class="${ styles.title }">Welcome to SharePoint!</span>
  <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
    <p class="${ styles.description }">${escape(this.properties.description)}</p>
      <a href="https://aka.ms/spfx" class="${ styles.button }">
        <span class="${ styles.label }">Learn more</span>
          </a>
          </div>
          </div>
          </div>
          </div>`;
  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
  return {
    pages: [
      {
        header: {
          description: strings.PropertyPaneDescription
        },
        groups: [
          {
            groupName: strings.BasicGroupName,
            groupFields: [
              PropertyPaneTextField('description', {
                label: strings.DescriptionFieldLabel
              })
            ]
          }
        ]
      }
    ]
  };
}
}
