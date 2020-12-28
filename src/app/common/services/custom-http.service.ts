import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const baseUrl = `${environment.customerAPIUrl}`;

@Injectable({ providedIn: 'root' })
export class CustomHttpService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(baseUrl + url);
  }

  public post(url: string, params: any) {
    return this.httpClient.post(baseUrl + url, params);
  }

}
