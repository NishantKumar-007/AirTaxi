import { Component, OnInit } from '@angular/core';
import { faFacebook,faInstagram,faLinkedin,faDribbble } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;
  faDribbble = faDribbble;

}
