import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { AutordetailsComponent } from '../autordetails/autordetails.component';
import { Autor } from '../../../models/autor';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';

@Component({
  selector: 'app-autorlist',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,MdbModalModule, AutordetailsComponent,MdbAccordionModule],
  templateUrl: './autorlist.component.html',
  styleUrls: ['./autorlist.component.scss']
})
export class AutorlistComponent {

  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Autor[] = [];
  autorEdit!: Autor;

  constructor() {
    this.findAll();
  }

  findAll() {
    let autor1 = new Autor();
    autor1.id = 1;
    autor1.nome = 'Autor 1';
    autor1.dataNascimento = '01/01/1991';
    autor1.nacionalidade = 'Brasileiro';
    autor1.email = 'autor1@email.com';

    let autor2 = new Autor();
    autor2.id = 2;
    autor2.nome = 'Autor 2';
    autor2.dataNascimento = '01/02/1991';
    autor2.nacionalidade = 'Americano';
    autor2.email = 'autor2@email.com';

    let autor3 = new Autor();
    autor3.id = 3;
    autor3.nome = 'Autor 3';
    autor3.dataNascimento = '01/03/1991';
    autor3.nacionalidade = 'Alemão';
    autor3.email = 'autor3@email.com';

    let autor4 = new Autor();
    autor4.id = 4;
    autor4.nome = 'Autor 4';
    autor4.dataNascimento = '01/04/1991';
    autor4.nacionalidade = 'Ingles';
    autor4.email = 'autor4@email.com';

    this.lista.push(autor1, autor2, autor3,autor4);
  }

  save() {
    this.autorEdit = new Autor();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  update(autor: Autor) {
    this.autorEdit = Object.assign({}, autor);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  returnDetail(autor :  Autor) {

    if(this.autorEdit.id > 0){
 
     let indice = this.lista.findIndex((autor  ) => {
       return autor.id == this.autorEdit.id;
     });
     
     this.lista[indice] = autor;
 
    } else {
    
     autor.id = 5;
     autor.nome = 'Livro 5';
     autor.dataNascimento = '01/05/1991';
     autor.nacionalidade = 'Japônes';
     autor.email = 'autor5@email.com';
     this.lista.push(autor);
     
    }
 
    this.modalRef.close();
 
   }

   delete(autor : Autor){

    Swal.fire({

      title: 'Deseja excluir o livro?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',

    }).then((result) => {

      if(result.isConfirmed){

        let indice = this.lista.findIndex((autor) => {
        return autor.id == this.autorEdit.id;
        });

        this.lista.splice(indice,1);

        Swal.fire('Livro excluído com sucesso!','','success');

      }

    })

  }
}
