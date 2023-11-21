import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based
  name ='keshav';
}
