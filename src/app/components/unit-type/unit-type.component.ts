import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unit-type',
  templateUrl: './unit-type.component.html',
  styleUrls: ['./unit-type.component.scss']
})
export class UnitTypeComponent implements OnInit {
  changeLength: boolean = false;
  changeTemperature: boolean = false;
  changeVolume: boolean = false;
  length: string = 'card card-length';
  onLength: boolean = false;
  temperature: string = 'card card-temperature';
  onTemperature: boolean = false;
  volume: string = 'card card-volume';
  onVolume: boolean = false;

  constructor() { 
  }

  onClickVolume() {
    this.changeVolume = true;
    this.temperature = 'card card-temperature';
    this.length = 'card card-length';
    this.volume = 'card-hold-volume';
    this.onVolume = true;
    this.changeLength = false;
    this.changeTemperature = false;
    this.onLength = false;
    this.onTemperature = false;
  }

  onMouseOutVolume() {
    if (this.onVolume == true) {
      this.changeVolume = true;
    } else {
      this.changeVolume = false;
    }
  }

  onClickTemperature() {
    this.changeTemperature = true;
    this.length = 'card card-length';
    this.volume = 'card card-volume';
    this.temperature = 'card-hold-temperature';
    this.onTemperature = true;
    this.changeLength = false;
    this.changeVolume = false;
    this.onLength = false;
    this.onVolume = false;
  }

  onMouseOutTemperature() {
    if (this.onTemperature == true) {
      this.changeTemperature = true;
    } else {
      this.changeTemperature = false;
    }
  }

  onClickLength() {
    this.changeLength = true;
    this.temperature = 'card card-temperature';
    this.volume = 'card card-volume';
    this.length = 'card-hold-length';
    this.onLength = true;
    this.changeTemperature = false;
    this.changeVolume = false;
    this.onTemperature = false;
    this.onVolume = false;
  }

  onMouseOutLength() {
    if (this.onLength == true) {
      this.changeLength = true;
    } else {
      this.changeLength = false;
    }
  }

  ngOnInit(): void {
  }

}
