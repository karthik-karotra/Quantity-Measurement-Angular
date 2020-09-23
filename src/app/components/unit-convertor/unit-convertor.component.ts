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
  @Input() primaryUnit: string;

  flagOne: boolean = false;
  flagTwo: boolean = false;
  units: string;
  baseUnit: string;
  targetUnit: string;
  valueOfInitialUnit: number = 1;
  outputValue;
  finalResult : number = 12;
  boxValue: string = 'boxOne';
  data;

  ngOnInit(): void { }

  settingUpData(unitOne, unitTwo, initialValue) {
    this.baseUnit = unitOne;
    this.targetUnit = unitTwo;
    this.valueOfInitialUnit = initialValue;
    this.data = {
      baseUnit:
        this.boxValue === 'boxOne' ? this.baseUnit : this.targetUnit,
      valueOfInitialUnit: 
        this.valueOfInitialUnit,
      targetUnit:
        this.boxValue === 'boxOne' ? this.targetUnit : this.baseUnit,
    };
  }

  settingUpFlag(valueOne, valueTwo) {
    this.flagOne = false;
    this.flagTwo = false;
    this.valueOfInitialUnit = valueOne;
    this.finalResult = valueTwo;
  }

  convertedValue() {
    this.httpPost.conversionUrl(this.data).subscribe(
      (resp: Response) => {
        this.outputValue = resp;
        console.log('Output : ', this.outputValue.value)
        this.finalResult = this.outputValue.value;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  conversion(data, boxName) {
    this.boxValue = boxName;
    this.valueOfInitialUnit = data;
    if (!this.flagOne && !this.flagTwo) {
      this.settingUpData(this.subUnits[0], this.subUnits[1], data);
    }
    if (this.flagOne && !this.flagTwo) {
      this.settingUpData(this.baseUnit, this.subUnits[1], data);
    }
    if (!this.flagOne && this.flagTwo) {
      this.settingUpData(this.subUnits[0], this.targetUnit, data);
    }
    if (this.flagOne && this.flagTwo) {
      this.settingUpData(this.baseUnit, this.targetUnit, data);
    }
    this.convertedValue();
  }

  firstSubUnit(unitOne) {
    this.flagOne = true;
    this.baseUnit = unitOne.target.value;
  }

  secondSubUnit(unitTwo) {
    this.flagTwo = true;
    this.targetUnit = unitTwo.target.value;
  }
}
