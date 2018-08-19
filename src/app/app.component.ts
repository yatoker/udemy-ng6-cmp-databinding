import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Test Server', content: 'Just a test!' }];

  // When serverCreated event is triggered in the app-cockpit component, push to serverElements array the data passed in.
  onServerAdded(serverData: { serverName: string, serverContent: string }){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  // When blueprintCreated event is triggered in the app-cockpit component, push to serverElements array the data passed in.
  onBlueprintAdded(serverData: { serverName: string, serverContent: string }){
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

}

