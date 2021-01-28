import { Component, Input, OnChanges } from "@angular/core";
declare var $:any;

@Component ({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})

export class StarComponent implements OnChanges {

  @Input()
  rating: number = 0;

  starWidth: number;

  ngOnInit(){
    $('[data-toggle="tooltip"]').tooltip();
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 74 / 5;
  }

}
