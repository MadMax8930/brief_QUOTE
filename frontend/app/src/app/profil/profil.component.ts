import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  quotes : [];
  quote: any;
  userId: any;

  constructor(private quoteService : QuoteService, private router: Router, private authService: AuthService) { }
  // collection = {};

  ngOnInit(): void {
    this.getAllQuotes();
    
    }
    // this.quotes = this.fetchAll();
    //   console.warn(result)
    //   this.collection = result;
    // })
    getAllQuotes() {
      return this.quoteService.readByuserId(this.userId).subscribe(quotes => {
        this.quotes = quotes;
        console.log(quotes);
      });
    }

    updateOnClick(){
      return this.quoteService.updateQuote(this.quote).subscribe(quotes => {
        this.quotes = quotes;
        console.log(quotes);
      });
    
    };

    deleteOnClick(){
      return this.quoteService.deleteQuote(this.quote).subscribe(quotes => {
        this.quotes = quotes;
        console.log(quotes);
      });
    
    };

  }
  

  // fetchAll(): Observable<Quote[]> {
  //   return this.quoteService.fetchAll();
  // }
