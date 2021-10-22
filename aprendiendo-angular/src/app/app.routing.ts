// Importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

// Impotar componentes
import { HomeComponent } from './home/home.component';
import { ZapatillasComponent } from "./zapatillas/zapatillas.component";
import { VideojuegoComponent } from "./videojuego/videojuego.component";
import { CursosComponent } from "./cursos/cursos.component";
import { ExternoComponent } from "./externo/externo.component";
import { ContactoComponent } from "./contacto/contacto.component";

// Array de rutas
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'zapatillas', component: ZapatillasComponent },
    { path: 'videojuego', component: VideojuegoComponent },    
    { path: 'cursos', component: CursosComponent },
    { path: 'cursos/:nombre/:followers', component: CursosComponent },    
    { path: 'externo', component: ExternoComponent},
    { path: 'contacto', component: ContactoComponent }
];

// Exportar el modulo del router
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);




