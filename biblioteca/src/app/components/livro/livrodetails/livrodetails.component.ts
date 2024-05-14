import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { Livro } from '../../../models/livro';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-livrodetails',
  standalone: true,
  imports: [FormsModule,CommonModule,MdbFormsModule],
  templateUrl: './livrodetails.component.html',
  styleUrl: './livrodetails.component.scss'
})
export class LivrodetailsComponent {

  @Input("livro") livro: Livro = new Livro();
  @Output("return") return: EventEmitter<any> = new EventEmitter();

  router = inject(Router);

  constructor(){

  }

  save(){

    Swal.fire("Livro salvo com sucesso!","success");

    this.return.emit(this.livro);
    this.router.navigate(['admin/livro']);

  }

}
