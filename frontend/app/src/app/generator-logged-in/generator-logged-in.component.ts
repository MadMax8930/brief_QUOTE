import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-generator-logged-in',
  templateUrl: './generator-logged-in.component.html',
  styleUrls: ['./generator-logged-in.component.css']
})

export class GeneratorLoggedInComponent implements OnInit {

  constructor(private quoteService: QuoteService, private router: Router, private authService: AuthService) { }

  quote : any;
  name : any;

  ngOnInit(): void {
   this.name = this.authService.getName();
   console.log(this.name);   
  }

  randomQuote(){
    this.quoteService.findRandom(this.quote)
    .subscribe((quote) => {
      console.log(quote);
      this.quote = quote
    });
  };

}

