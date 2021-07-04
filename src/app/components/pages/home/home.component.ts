import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, FormArrayName, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	formulario: FormGroup;
	// estados: Observable<EstadoBr[]>;
	cargos: any[];
	tecnologias: any[];
	newsletterOp: any[];

	frameworks = ['0002 - ADMIN', '0005 - MATERNO', '0004 - RRHH', '0007 - LOGISTICA', '0001 - elAmado', ];

	constructor(private formBuilder: FormBuilder) { }
	
	ngOnInit(): void {
		this.formulario = this.formBuilder.group({
			primerNombre: ['Edwin'],
			frameworks: this.buildFrameworks(),
		});
	}
	
	
	buildFrameworks() {
		const values = this.frameworks.map(v => new FormControl(false));
		return this.formBuilder.array(values);
		
		// return [
		// 	new FormControl(false), // Angular
		// 	new FormControl(false), // React
		// 	new FormControl(false), // Vue
		// 	new FormControl(false), // Sencha
		// ];
	}
	
	resetear() {}

	setarCargo() {
		this.formulario.patchValue({primerNombre: '@m@do'});
	}

	setarTecnologias() {
		// console.log(this.formulario);
		let valueSubmit = Object.assign({}, this.formulario.value);
		valueSubmit = Object.assign(valueSubmit, {
			frameworks: valueSubmit.frameworks
				.map((v, i) => v ? this.frameworks[i] : null)
				.filter(v => v !== null)
		});

		console.log(valueSubmit);
		
		
		// console.log('Valor del FORMULARIO =>  ', JSON.stringify(this.formulario.value));
	}
}
