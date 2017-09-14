import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Dojo Mail';
    test: string = 'hello world';
    users = [
        {
            email: 'bill@gates.com',
            important: true,
            subject: 'fhjsdhflk',
            content: 'fkdjshfkj'
        },
        {
            email: 'bill@gates.com',
            important: true,
            subject: 'ksjahflksdj',
            content: ';ksdjxjnjkfhd'
        },
        {
            email: 'bill@gates.com',
            important: false,
            subject: 'ieijffidosi',
            content: 'oituroidfji'
        },
        {
            email: 'bill@gates.com',
            important: false,
            subject: 'ncjdfkjndk',
            content: 'jcdnkajdk'
        }
    ];
    numbers = [1,2,3,4,5];
}
