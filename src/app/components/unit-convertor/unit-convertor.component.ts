import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-unit-convertor',
  templateUrl: './unit-convertor.component.html',
  styleUrls: ['./unit-convertor.component.scss']
})
export class UnitConvertorComponent implements OnInit {

  constructor() { }

  @Input() subUnits: any[];
  @Input() firstInput: number;
  @Input() secondInput: number;

  ngOnInit(): void {
  }

}
