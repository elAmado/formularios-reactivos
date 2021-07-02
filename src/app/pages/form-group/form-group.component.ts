import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {

	formContacto = this.fb.group({
		primerNombre: ['', [Validators.min(4), Validators.max(88)]],
		nombreDeUsuario: [''],
		ciudad: [''],
		estado: [''],
		codigoPostal: [''],
	});

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {}

	enviarFormContacto(): void {
		console.log('Valor del formContacto =>  ', JSON.stringify(this.formContacto.value));
	}

	valoresPorDefecto(): void {
		const contacto = {
			primerNombre: 'Edwin',
			nombreDeUsuario: "elamado",
			ciudad: "Cutervo",
			estado: "Perú",
			codigoPostal: '51',
		}
		this.formContacto.setValue(contacto);
	}

	onPatchValue(): void {
		this.formContacto.patchValue({ ciudad: 'Payac' });
	}

	onSetValue(): void {
		this.formContacto.setValue({ primerNombre: 'ppp', nombreDeUsuario: "nnn", ciudad: "ccc", estado: "eee"}); //xxx
	}

	limpiarCampos(): void {
		this.formContacto.reset();
	}
}
