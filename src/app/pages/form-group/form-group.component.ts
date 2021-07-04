import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
	selector: 'app-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
	private esCorreo = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';

	formContacto = this.fb.group({
		primerNombre: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(9)]],
		nombreDeUsuario: [
			'',
			[
				Validators.required,
				Validators.minLength(5),
				Validators.maxLength(30),
				Validators.pattern(this.esCorreo)
			]
		],
		ciudad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
		estado: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
		codigoPostal: [
			'',
			[
				Validators.required,
				Validators.minLength(5),
				Validators.pattern('^[0-9]*$')
			]
		],
	});

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void { }

	enviarFormContacto(): void {
		console.log('Valor del formContacto =>  ', JSON.stringify(this.formContacto.value));
	}
	
	campoValido(campo: string): boolean {
		const nombreCampo = this.formContacto.get(campo);
		// return (nombreCampo?.touched || (nombreCampo?.dirty && !nombreCampo.valid)); da error
		return (nombreCampo.invalid && nombreCampo.touched);
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
		this.formContacto.setValue({ primerNombre: 'ppp', nombreDeUsuario: "nnn", ciudad: "ccc", estado: "eee" }); //xxx
	}

	limpiarCampos(): void {
		this.formContacto.reset();
	}
}
