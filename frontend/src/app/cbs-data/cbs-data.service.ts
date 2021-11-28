import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Postcode2020 } from '../model/postcode2020';


@Injectable()
export class CbsDataService {

  constructor(private http: HttpClient) {
  }

  /**
   * Get a list of postcode data
   */
  getPostCodeData(postcode: number): Observable<Postcode2020> {
    return this.http.get<Postcode2020>(environment.postcodeDataUrl + postcode);
  }

  /**
   * Get a list of bevolking data by gemeente and year
   */
   getBevolkingData(gemeente: string, jaar: number): Observable<Object> {
    return this.http.get<Object>(environment.bevolkingDataUrl + gemeente + '/' + jaar);
  }

   /**
   * Get a list of bevolking data all years by gemeente
   */
    getBevolkingJaarData(gemeente: string): Observable<Object> {
      return this.http.get<Object>(environment.bevolkingJaarDataUrl + gemeente);
    }
}
