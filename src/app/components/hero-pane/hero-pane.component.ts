import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-hero-pane',
  templateUrl: './hero-pane.component.html',
  styleUrls: ['./hero-pane.component.css']
})
export class HeroPaneComponent implements OnInit {

  @Input() heroData: Hero

  constructor(public activeModal:NgbActiveModal) {
  }

  close(){
    this.activeModal.close();
  }

  ngOnInit() {
  }

}
