import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { Autor } from '../../../models/autor';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-autordetails',
  standalone: true,
  imports: [FormsModule,CommonModule,MdbFormsModule],
  templateUrl: './autordetails.component.html',
  styleUrl: './autordetails.component.scss'
})
export class AutordetailsComponent {

  @Input("autor") autor: Autor = new Autor();
  @Output("return") return: EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor(){

  }

  save(){

    Swal.fire("Autor salvo com sucesso!","success");

    this.return.emit(this.autor);
    this.router.navigate(['admin/autor']);

  }

}
