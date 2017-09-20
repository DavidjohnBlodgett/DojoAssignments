import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    quote = new Quote();
    quotes = [];

    onSubmit() {
        this.quotes.push(this.quote);
        this.quote = new Quote();
        this.sortQuotes();
    }
    dataFromChild(eventData){
        console.log(eventData);
    }
    upVote(obj) {
        obj.votes++;
        this.sortQuotes();
    }
    downVote(obj) {
        if(obj.votes !== 0){
            obj.votes--;
        }
        this.sortQuotes();
    }
    deleteQuote(obj) {
        this.remove(this.quotes,obj);
        this.sortQuotes();

    }
    remove(array, element) {
        const index = array.indexOf(element);

        if (index !== -1) {
            array.splice(index, 1);
        }
    }
    sortQuotes() {
        // sort by value
        // this.quotes = this.quotes.sort(function (a, b) {
            this.quotes.sort(function (a, b) {
                // return a.votes - b.votes;
                return b.votes - a.votes;
            });
        console.log(this.quotes);
    }

}
