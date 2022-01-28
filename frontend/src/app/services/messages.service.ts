import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) {
  }

  encodeMessage(data: Data) {
    const encodeData = {
      password: data.password,
      message: data.message
    };
    return this.http.post<{ encoded: string }>(environment.apiUrl + '/encode', encodeData);
  }

  decodeMessage(data: Data) {
    const decodeMessage = {
      password: data.password,
      message: data.message
    };
    return this.http.post<{ decoded: string }>(environment.apiUrl + '/decode', decodeMessage);
  }
}
