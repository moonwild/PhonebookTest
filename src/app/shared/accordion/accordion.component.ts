import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  // We use this property to set a different CSS class on the contact panel
  // if we have just viewed his details
  @Input() hasJustViewed: boolean;

  // Sets the panel title, in our case the name of the contact
  @Input() title: string;

  // Controls hiding and showing panel body and footer
  @Input() isHidden = false;

  constructor() { }

  ngOnInit() {
  }

}
