import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiHandlerService {
  constructor(private httpClient: HttpClient) { }

    callApi() {
        return this.httpClient.get('https://funkyd.art/api/test')
    }

}
