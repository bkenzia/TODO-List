import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  url: any;
  constructor(private location: Location) {}

  ngOnInit(): void {
    this.location.onUrlChange((urlActive) => (this.url = urlActive));
  }
}
