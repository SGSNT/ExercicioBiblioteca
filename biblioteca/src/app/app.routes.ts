import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { LivrolistComponent } from './components/livro/livrolist/livrolist.component';
import { AutorlistComponent } from './components/autor/autorlist/autorlist.component';
import { EditoralistComponent } from './components/editora/editoralist/editoralist.component';
import { LivrodetailsComponent } from './components/livro/livrodetails/livrodetails.component';

export const routes: Routes = [

    {path: "", redirectTo: "login", pathMatch: "full"},
    {path:"login",component:LoginComponent},
    {path:"admin",component:PrincipalComponent,children:[
        {path:"livro",component:LivrolistComponent},
        {path:"autor",component:AutorlistComponent},
        {path:"editora",component:EditoralistComponent},
        {path:"livro/save",component:LivrodetailsComponent},
        {path:"livro/update/:id",component:LivrodetailsComponent}
    ]}
];
