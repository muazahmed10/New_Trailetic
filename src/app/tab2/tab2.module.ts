import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
//import { Component } from '@angular/core';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  declarations: [Tab2Page]
})

// @Component({
//  selector: 'app-tab2',
//  templateUrl: 'tab2.page.html',
//  styleUrls: ['tab2.page.scss'],
// })

// export class Tab2PageModule {
//   actor= [
//     {name: 'Athlete', isChecked:false},
//     {name: 'Trainer', isChecked:false},
//   ];

// }

export class Tab2PageModule {}
