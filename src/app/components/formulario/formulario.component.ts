import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente.model';
import { ClienteService } from '../../services/tutorial.service';
import { Turno } from '../../models/turno.model';
import { TurnoService } from '../../services/turno.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent  {
  
  profesionalSeleccionado: string | null = null;
  servicioSeleccionado:  string | null = null;
  profesionales = [
    { id: '1', nombre: 'Alejandro' },
    { id: '2', nombre: 'Julian' },
    { id: '3', nombre: 'Marcos' }
  ];

  servicios = [
    { id: '1', nombre: 'Barberia', profesional: 'Alejandro' },
    { id: '2', nombre: 'Uñas', profesional: 'Julian' },
    { id: '3', nombre: 'Teñido', profesional: 'Marcos' }
  ];
  
  
  
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    dni: '',
    telefono: '',
    mail: '', 
  };

  turno: Turno = {
    fecha: new Date(),
    hora: '',
    cliente: this.cliente,
    profesional: '',
    servicio: '',
  };
  submitted = false;

  

  constructor(private clienteService: ClienteService , private turnoService: TurnoService) {}

  saveCliente(): void {
    const data = {
      nombre: this.cliente.nombre,
      apellido: this.cliente.apellido,
      dni: this.cliente.dni,
      telefono: this.cliente.telefono,
      mail: this.cliente.mail
      
    };

    console.log('Datos a enviar2:', data);


    this.clienteService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
 }



  newCliente(): void {
  this.submitted = false;
  this.cliente = {
        nombre: '',
        apellido: '',
        dni: '',
        telefono: '',
        mail: '', 
  };
 }


 saveTurno(): void {
    const dato = {
    fecha: this.turno.fecha,
    hora: this.turno.hora,
    cliente: this.cliente,
    profesional: this.profesionalSeleccionado,
    servicio: this.servicioSeleccionado
    
  };

  console.log('Datos a enviar2:', dato);


  this.turnoService.crear(dato)
    .subscribe({
      next: (les) => {
        console.log(les);
        this.submitted = true;
      },
      error: (k) => console.error(k)
    });

 }


 newTurno(): void {
  this.submitted = false;
  this.turno = {
        fecha: new Date(),
        hora: '',
        cliente: this.cliente,
        profesional: '',
        servicio: '', 
  };
 }

 submitForm() {
  this.saveCliente();
  this.saveTurno();
}

newForm(){
 this.newCliente();
 this.newTurno();
}
}