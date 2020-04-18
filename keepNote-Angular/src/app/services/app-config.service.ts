import { Injectable } from '@angular/core';
import { ConfigService } from '@ngx-config/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  public getBaseUrl(serviceName: string): string {
    return this.configService.getSettings().baseUrl.serviceName;
  }
}
