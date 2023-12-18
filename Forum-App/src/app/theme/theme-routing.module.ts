import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';
import { Auth } from '../core/guards/auth';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':themeId',
        component: CurrentThemeComponent,
      },
    ],
  },
  {
    path: 'new-theme',
    component: NewThemeComponent,
    canActivate: [Auth],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
