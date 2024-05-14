import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { EditoradetailsComponent } from '../editoradetails/editoradetails.component';
import Swal from 'sweetalert2';
import { Editora } from '../../../models/editora';

@Component({
  selector: 'app-editoralist',
  standalone: true,
  imports: [FormsModule,MdbModalModule,EditoradetailsComponent],
  templateUrl: './editoralist.component.html',
  styleUrl: './editoralist.component.scss'
})
export class EditoralistComponent {

  modalService = inject(MdbModalService);
  @ViewChild('modalDetalhe') modalDetalhe!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;

  lista: Editora[] = [];
  editoraEdit!: Editora;

  constructor(){

    this.findAll();

  }

  findAll(){
     
    let editora1 = new Editora();
    editora1.id = 1;
    editora1.nome = 'Editora 1';
    editora1.cnpj = '12345678901234';
    editora1.email = 'editora1@email.com';
    editora1.telefone = '(55)5555-5555';
    editora1.endereco = 'Rua 1, 123';

    let editora2 = new Editora();
    editora2.id = 2;
    editora2.nome = 'Editora 2';
    editora2.cnpj = '11.222.333/0001-44';
    editora2.email = 'editora2@email.com';
    editora2.telefone = '(44)44444-4444';
    editora2.endereco = 'Rua 2, 124';

    let editora3 = new Editora();
    editora3.id = 3;
    editora3.nome = 'Editora 3';
    editora3.cnpj = '11.222.343/0000-45';
    editora3.email = 'editora1@email.com';
    editora3.telefone = '(87)55667-5575';
    editora3.endereco = 'Rua 3, 125';

    let editora4 = new Editora();
    editora4.id = 4;
    editora4.nome = 'Editora 4';
    editora4.cnpj = '22.222.222/2222-22';
    editora4.email = 'editora4@email.com';
    editora4.telefone = '(97)78989-5885';
    editora4.endereco = 'Rua 4, 126';

    this.lista.push(editora1, editora2, editora3, editora4);
  }

  save() {
    this.editoraEdit = new Editora();
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

  update(editora : Editora) {
    this.editoraEdit = Object.assign({}, editora);
    this.modalRef = this.modalService.open(this.modalDetalhe);
  }

 returnDetail(editora :  Editora) {

   if(this.editoraEdit.id > 0){

    let indice = this.lista.findIndex((editora  ) => {
      return editora.id == this.editoraEdit.id;
    });
    
    this.lista[indice] = editora;

   } else {
   
    editora.id = 5;
    editora.nome = 'Editora 5';
    editora.cnpj = '33.333.333/3333-33';
    editora.email = 'editora5@email.com';
    editora.telefone = '(98)98989-9898';
    editora.endereco = 'Rua 5, 127';

    this.lista.push(editora);
    
   }

   this.modalRef.close();

  }

  delete(editora : Editora){

    Swal.fire({

      title: 'Deseja excluir o livro?',
      showDenyButton: true,
      confirmButtonText: 'Sim',
      denyButtonText: 'Não',

    }).then((result) => {

      if(result.isConfirmed){

          let indice = this.lista.findIndex((editora) => {
          return editora.id ==  this.editoraEdit.id;
        });

        this.lista.splice(indice,1);

        Swal.fire('Livro excluído com sucesso!','','success');

      }

    })

  }
}
