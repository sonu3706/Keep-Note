import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '../../../../services/app-config.service';
import { ConfigService } from '@ngx-config/core';
import { RestService } from '../../../../services/rest.service';
import { Note } from '../../../../models/note';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public appConfig: AppConfigService;
  public notes: Note[] = [];

  constructor(
    private configService: ConfigService,
    private getNotes: RestService<Note[]>,
    private logger: NGXLogger
  ) {
    this.appConfig = new AppConfigService(this.configService);
    this.getNotesByUserId();
  }

  ngOnInit(): void {}

  private getNotesByUserId(): void {
    const userId = window.sessionStorage.getItem('userId');
    this.getNotes
      .http_get(
        this.appConfig.basUrl.note,
        this.appConfig.restUrl.getNotesByUserId.concat(userId)
      )
      .subscribe(
        (data) => {
          console.log(data['notes']);
          this.notes = data['notes'];
        },
        (error) => {
          this.logger.error('Unable to get notes for user :- ', userId);
        }
      );
  }
}
