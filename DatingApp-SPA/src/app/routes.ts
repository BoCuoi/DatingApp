import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// Array of Routes and each Route is an object
export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '', // '' ~> 'dummy' => localhost:4200/dummymembers
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
