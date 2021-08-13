import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  baseUrl : string = environment.api_url;

  constructor(private http: HttpClient) { }

  save(quote: Quote):Observable<any> {
    return this.http.post<any>(this.baseUrl + "/quote", quote)
  }

  showById(quote: Quote):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/quote/:id")
  }

  showAll(quote: Quote):Observable<any> {
    return this.http.get<any>(this.baseUrl + "/quote")
  }

  update(quote: Quote):Observable<any> {
    return this.http.patch<any>(this.baseUrl + "/quote/:id", quote)
  }

  destroy(quote: Quote):Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/quote/:id")
  }

  getQuote(): Observable<any>{
    return this.http.get<any>(this.baseUrl + "/quote/random");
  }
  
}
