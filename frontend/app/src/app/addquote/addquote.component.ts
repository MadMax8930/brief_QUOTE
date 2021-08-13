import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../services/quote.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addquote',
  templateUrl: './addquote.component.html',
  styleUrls: ['./addquote.component.css']
})
export class AddquoteComponent implements OnInit {


  quoteForm = new FormGroup({

  content: new FormControl(''),
  title: new FormControl(''),

  });

  constructor(private formBuilder: FormBuilder, private quoteService: QuoteService, private router: Router) { }


  ngOnInit(): void {
    this.initForm;
  }

  initForm() {
    this.quoteForm = this.formBuilder.group({
    content: this.formBuilder.control(""),
    title: this.formBuilder.control(""),
    UserId: this.formBuilder.control("")
    })
    
  }


  submitQuote() {
    const formValues = this.quoteForm.value;
    this.quoteService.save(formValues)
    .subscribe((response) => {
      console.log('Quote created successfully!');
      console.log(response);
      });
  }

}
