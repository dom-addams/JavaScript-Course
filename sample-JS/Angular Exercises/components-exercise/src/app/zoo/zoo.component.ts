import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../serivces/animals/animals.service';

@Component({
  selector: 'app-zoo',
  templateUrl: './zoo.component.html',
  styleUrls: ['./zoo.component.css'],
})
export class ZooComponent implements OnInit {
  // empty array to store the animal list
  animalList: object[] = [];

  constructor( private animalService: AnimalsService ) {}

  // on init, add some animals to the list
  ngOnInit(): void {
    this.animalList = this.animalService.getAnimals();
  }
}
