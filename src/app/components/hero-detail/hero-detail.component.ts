import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../models/hero';
import { HeroPaneComponent } from '../hero-pane/hero-pane.component';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input() heroData: Hero
  
  private modalRef:NgbModalRef

  constructor(public modalService: NgbModal) { }

  open(){
    this.modalRef = this.modalService.open(HeroPaneComponent);
  }

  ngOnInit() {
  }

}
