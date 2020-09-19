import { Component, OnInit, Input } from '@angular/core';
import { QuantityMeasurementService } from 'src/app/services/quantity-measurement-service/quantity-measurement.service';

@Component({
  selector: 'app-unit-convertor',
  templateUrl: './unit-convertor.component.html',
  styleUrls: ['./unit-convertor.component.scss']
})
export class UnitConvertorComponent implements OnInit {

  constructor(private httpPost: QuantityMeasurementService) { }

  @Input() subUnits: any[];
  @Input() firstInput: number;
  @Input() secondInput: number;

  units: string;
  baseUnit: string;
  targetUnit: string;
  valueOfInitialUnit: number;
  outputValue;
  finalResult = 0;

  ngOnInit(): void {
  }

  ConvertedValue() {
    var data = {
      valueOfInitialUnit: this.valueOfInitialUnit,
      baseUnit: this.baseUnit,
      targetUnit: this.targetUnit,
      //units: this.primaryUnit,
    };
    console.log('Dat:  ', data);
    this.httpPost.conversionUrl(data).subscribe(
      (resp: Response) => {
        console.log('Response Data : ', resp);
        this.outputValue = resp;
        console.log('Data : ',this.outputValue.value)
        this.finalResult = this.outputValue.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  Conversion(data) {
    this.valueOfInitialUnit = data.target.value;
    this.ConvertedValue();
  }

  firstSubUnit(unitOne) {
    this.baseUnit = unitOne.target.value;
  }

  secondSubUnit(unitTwo) {
    this.targetUnit = unitTwo.target.value;
  }

}
