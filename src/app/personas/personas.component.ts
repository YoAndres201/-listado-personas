import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../persona.model';
import { PersonasService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(private personasService: PersonasService,
              private router: Router){
              }

  ngOnInit(): void {
    this.personasService.obtenerPersonas()
    .subscribe(
      res => {
        console.log('Resuesta DB: ' + res);
        this.personas = <Persona[]> res;
        this.personasService.setPersonas(<Persona[]> res)
      },
      error => console.log(error)

    )
  }

  agregar(){
    this.router.navigate(['personas/agregar']);
  }

}
