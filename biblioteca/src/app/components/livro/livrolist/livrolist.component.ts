import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LivrodetailsComponent } from '../livrodetails/livrodetails.component';
import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService,
} from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { Livro } from '../../../models/livro';


@Component({
  selector: 'app-livrolist',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,MdbModalModule,LivrodetailsComponent,MdbAccordionModule],
  templateUrl: './livrolist.component.html',
  styleUrl: './livrolist.component.scss'
})
export class LivrolistComponent {

  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Livro[]=[];
  livroEdit!: Livro;

  constructor() {

    this.findAll();

  }

  findAll() {

    let livro = new Livro();
    livro.id = 1;
    livro.titulo = 'Livro 1';
    livro.dataPublicacao = '01/01/2021';

    let livro1 = new Livro();
    livro1.id = 2;
    livro1.titulo = 'Livro 2';
    livro1.dataPublicacao = '01/02/2021';

    let livro2 = new Livro();
    livro2.id = 3;
    livro2.titulo = 'Livro 3';
    livro2.dataPublicacao = '01/03/2021';

    let livro3 = new Livro();
    livro3.id = 4;
    livro3.titulo = 'Livro 4';
    livro3.dataPublicacao = '01/04/2021';

    let livro4 = new Livro();
    livro4.id = 5;
    livro4.titulo = 'Livro 5';
    livro4.dataPublicacao = '01/05/2021';

    let livro5 = new Livro();
    livro5.id = 6;
    livro5.titulo = 'Livro 6';
    livro5.dataPublicacao = '01/06/2021';

    let livro6 = new Livro();
    livro6.id = 7;
    livro6.titulo = 'Livro 7';
    livro6.dataPublicacao = '01/07/2021';

    this.lista.push(livro);
    this.lista.push(livro1);
    this.lista.push(livro2);
    this.lista.push(livro3);
    this.lista.push(livro4);
    this.lista.push(livro5);
    this.lista.push(livro6);
  }

  save() {
    
    this.livroEdit = new Livro();
    this.modalRef = this.modalService.open(this.modalDetalhe);

  }

  update(livro:Livro) {

    this.livroEdit = Object.assign({},livro);
    this.modalRef = this.modalService.open(this.modalDetalhe);

  }

  returnDetail(livro :  Livro) {

   if(this.livroEdit.id > 0){

    let indice = this.lista.findIndex((livro  ) => {
      return livro.id == this.livroEdit.id;
    });
    
    this.lista[indice] = livro;

   } else {
   
    livro.id = 8;
    livro.titulo = 'Livro 8';
    livro.dataPublicacao = '01/08/2021';
    this.lista.push(livro);
    
   }

   this.modalRef.close();

  }

  delete(livro : Livro){

    Swal.fire({

      title: 'Deseja excluir o livro?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',

    }).then((result) => {

      if(result.isConfirmed){

        let indice = this.lista.findIndex((livro) => {
         return livro.id == this.livroEdit.id;
        });

        this.lista.splice(indice,1);

        Swal.fire('Livro excluído com sucesso!','','success');

      }

    })

  }
}
