import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../models/quote';
import { User } from '../models/user';
import { catchError, tap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  baseUrl : string = environment.api_url;

  constructor(private http: HttpClient) { }

  createQuote(quote: Quote):Observable<any> {
        return this.http.post<any>(this.baseUrl + "/user/quote", quote)
      }
  
  readQuote(quote: Quote):Observable<any> {
        return this.http.get<any>(this.baseUrl + "/user/quote/:id")
      }

  readAllQuotes(quote: Quote):Observable<any> {
        return this.http.get<any>(this.baseUrl + "/user/quote")
      }

  updateQuote(quote: Quote):Observable<any> {
        return this.http.patch<any>(this.baseUrl + "/user/quote/:id", quote);
      }   

  deleteQuote(quote: Quote):Observable<any> {
        return this.http.delete<any>(this.baseUrl + "/user/quote/:id")
      }

  findRandom(quote: Quote): Observable<any>{
        return this.http.get<any>(this.baseUrl + "/user/quote/random");
      } 

  readByuserId(quote: Quote):Observable<any> {
        return this.http.get<any>(this.baseUrl + "/user/quote/account")
      }
 


}

//   save(quote: Quote):Observable<any> {
//     return this.http.post<any>(this.baseUrl + "/quote", quote)
//   }

//   showById(quote: Quote):Observable<any> {
//     return this.http.get<any>(this.baseUrl + "/quote/:id")
//   }

//   showAll(quote: Quote):Observable<any> {
//     return this.http.get<any>(this.baseUrl + "/quote")
//   }

//   update(quote: Quote):Observable<any> {
//     return this.http.patch<any>(this.baseUrl + "/quote/:id", quote)
//   }

//   destroy(quote: Quote):Observable<any> {
//     return this.http.delete<any>(this.baseUrl + "/quote/:id")
//   }

//   getQuote(quote: Quote): Observable<any>{
//     return this.http.get<any>(this.baseUrl + "/quote/random");
//   }

//   showAllbyUser(UserId : User): Observable<any>{
//     return this.http.get<any>(this.baseUrl + "/quote?userid=${UserId}")
//   }

//   getUserId(UserId: User): Observable<any>{
//     return this.http.get<any>(this.baseUrl + "/account/quote?userid=${UserId}")
//   }

//   fetchAll(): Observable<Quote[]> {
//     return this.http
//       .get<Quote[]>(this.baseUrl + "/account", { responseType: "json" })
//       .pipe(
//         tap((_) => console.log("fetched quotes")),
//       );
//   }
// }
