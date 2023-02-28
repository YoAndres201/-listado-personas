import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginService } from "./login/login.service";
import { Persona } from "./persona.model";

@Injectable()
export class DataServices {
    constructor(private httpClient: HttpClient,
                private loginService: LoginService) {}

    cargarPersonas(){
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-fed8d-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    //Guardar Personas
    guardarPersonas(personas: Persona[]){
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-fed8d-default-rtdb.firebaseio.com/datos.json?auth=' + token, personas)
        .subscribe(
            response => console.log('Resultado de Guardar las Personas' + response),  
            error => console.log('Error al Guardar las Personas' + error)
            )
    }

    modificarPersona(index: number, persona: Persona){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-fed8d-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this,this.httpClient.put(url, persona)
            .subscribe(
                response => console.log('Resultado de Modificar Persona: ' + response),
                error => console.log('Error en Modificar Persona')
            )  
    }

    eliminarPersona(index: number){
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-fed8d-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this,this.httpClient.delete(url)
            .subscribe(
                response => console.log('Resultado de Eliminar Persona: ' + response),
                error => console.log('Error en Eliminar Persona')
            )  
    }


}