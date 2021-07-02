import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
	formContacto = new FormGroup({
		primerNombre: new FormControl(''),
		nombreDeUsuario: new FormControl(''),
		ciudad: new FormControl(''),
		estado: new FormControl(''),
		codigoPostal: new FormControl('')
	});

	constructor() {}

	ngOnInit(): void {}

}
