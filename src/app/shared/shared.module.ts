import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedComponent } from './shared.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { NotificationModule } from '../notification/notification.module';

@NgModule({
  declarations: [HeaderComponent, MenuComponent, SharedComponent],
  imports: [CommonModule, NotificationModule, FormsModule],
  exports: [SharedComponent],
})
export class SharedModule {}
