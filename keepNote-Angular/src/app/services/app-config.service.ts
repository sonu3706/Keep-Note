import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';
import { BaseUrl, RestUrl } from '../models/base-url';
import { Configuration } from '../models/configuration';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  public get basUrl(): BaseUrl {
    return (this.configService.getSettings() as Configuration).baseUrl;
  }

  public get restUrl(): RestUrl {
    return (this.configService.getSettings() as Configuration).restUrl;
  }
}
