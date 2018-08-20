import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  //Define serverCreated and blueprintCreated events to be triggered at a later time.
  @Output('srvCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  //newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {

    //Trigger/Emit serverCreated event and subscribers will get to know that a server is created and will access serverName and serverContent values.
    this.serverCreated.emit(
      {
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
      });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    //Trigger/Emit blueprintCreated event and subscribers will get to know that a server is created and will access serverName and serverContent values.
    this.blueprintCreated.emit(
      {
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
      });
  }
}
