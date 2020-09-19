import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpService } from './../http-service/http.service';

@Injectable({
  providedIn: 'root'
})
export class QuantityMeasurementService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpService) { }

  conversionUrl(data) {
    return this.http.postHttpService(data, this.baseUrl + `units/convert`);
  }
}
