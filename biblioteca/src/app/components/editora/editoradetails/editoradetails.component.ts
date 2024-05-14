import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Editora } from '../../../models/editora';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editoradetails',
  standalone: true,
  imports: [FormsModule,CommonModule,MdbFormsModule],
  templateUrl: './editoradetails.component.html',
  styleUrl: './editoradetails.component.scss'
})
export class EditoradetailsComponent {

  @Input("editora") editora : Editora = new Editora();
  @Output("return") return : EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor(){

  }

  save(){

    Swal.fire("Editora salva com sucesso!","success");

    this.return.emit(this.editora);
    this.router.navigate(['admin/editora']);
  }
}
