import { Component, OnInit, ViewChild } from '@angular/core';
import { UnitConvertorComponent } from "./../unit-convertor/unit-convertor.component";

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.scss']
})

export class UnitTypeComponent implements OnInit {
  changeLength: boolean = true;
  changeTemperature: boolean = false;
  changeVolume: boolean = false;
  length: string = 'card card-length';
  onLength: boolean = true;
  temperature: string = 'card card-temperature';
  onTemperature: boolean = false;
  volume: string = 'card card-volume';
  onVolume: boolean = false;
  subUnits = ['FEET', 'INCH', 'YARD', 'CENTIMETER'];
  primaryUnit: string = 'LENGTH';

  @ViewChild(UnitConvertorComponent) conversionComponent: UnitConvertorComponent;

  constructor() { }

  onClickLength(value) {
    this.primaryUnit = value;
    this.changeLength = true;
    this.temperature = 'card card-temperature';
    this.volume = 'card card-volume';
    this.length = 'card-hold-length';
    this.onLength = true;
    this.changeTemperature = false;
    this.changeVolume = false;
    this.onTemperature = false;
    this.onVolume = false;
    this.subUnits = ['FEET', 'INCH', 'YARD', 'CENTIMETER'];
    this.conversionComponent.settingUpFlag(1,12);
  }

  onMouseOutLength() {
    this.onLength ? this.changeLength = true : this.changeLength = false;
  }

  onClickTemperature(value) {
    this.primaryUnit = value;
    this.changeTemperature = true;
    this.length = 'card card-length';
    this.volume = 'card card-volume';
    this.temperature = 'card-hold-temperature';
    this.onTemperature = true;
    this.changeLength = false;
    this.changeVolume = false;
    this.onLength = false;
    this.onVolume = false;
    this.subUnits = ['CELSIUS', 'FAHRENHEIT'];
    this.conversionComponent.settingUpFlag(0,32);
  }

  onMouseOutTemperature() {
    this.onTemperature ? this.changeTemperature = true : this.changeTemperature = false;
  }

  onClickVolume(value) {
    this.primaryUnit = value;
    this.changeVolume = true;
    this.temperature = 'card card-temperature';
    this.length = 'card card-length';
    this.volume = 'card-hold-volume';
    this.onVolume = true;
    this.changeLength = false;
    this.changeTemperature = false;
    this.onLength = false;
    this.onTemperature = false;
    this.subUnits = ['LITER', 'MILLILITRE', 'GALLON'];
    this.conversionComponent.settingUpFlag(1,1000);
  }

  onMouseOutVolume() {
    this.onVolume ? this.changeVolume = true : this.changeVolume = false;
  }

  ngOnInit(): void {
  }
}
