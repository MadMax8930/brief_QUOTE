import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genquote',
  templateUrl: './genquote.component.html',
  styleUrls: ['./genquote.component.css']
})
export class GenquoteComponent implements OnInit {

  constructor(private quoteService: QuoteService, private router: Router) { }
  
  quote : {
    title: string,
    content: string,
    userId: number
  };

  ngOnInit(): void {
  }

  randomQuote(){
    this.quoteService.findRandom(this.quote)
    .subscribe((quote) => {
      console.log(quote);
      this.quote = quote
    });
  };
}
