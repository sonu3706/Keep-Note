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

  constructor(
    private configService: ConfigService,
    private getNotes: RestService<Note[]>,
    private logger: NGXLogger
  ) {
    this.appConfig = new AppConfigService(this.configService);
  }

  ngOnInit(): void {
    this.getNotesByUserId();
  }

  private getNotesByUserId(): void {
    const userId = window.sessionStorage.getItem('userId');
    this.getNotes
      .http_get(
        this.appConfig.basUrl.note,
        this.appConfig.restUrl.getNotesByUserId.concat(userId)
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.logger.error('Unable to get notes for user :- ', userId);
        }
      );
  }
}
