import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../Quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
    @Input() quote: Quote;
    // @Output() aQuoteEventEmitter = new EventEmitter();
    @Output() aUpVoteEventEmitter = new EventEmitter();
    @Output() aDownVoteEventEmitter = new EventEmitter();
    @Output() aDeleteQuoteEventEmitter = new EventEmitter();
    constructor() {

    }

    ngOnInit() {
    }
    // triggerEvent(){
    //     this.aQuoteEventEmitter.emit(7); //we can pass in any data type
    // }
    triggerUpVoteEvent(){
        // console.log(this.quote);
        this.aUpVoteEventEmitter.emit(this.quote); //we can pass in any data type
        // this.aUpVoteEventEmitter.emit(this.quote); //we can pass in any data type
    }
    triggerDownVoteEvent(){
        this.aDownVoteEventEmitter.emit(this.quote); //we can pass in any data type
    }
    triggerDeleteQuoteEvent(){
        // this.quote.id
        this.aDeleteQuoteEventEmitter.emit(this.quote); //we can pass in any data type
    }
}
