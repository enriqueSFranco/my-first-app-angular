import { NgModule } from '@angular/core';
import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list.component';



@NgModule({
  declarations: [TaskListComponent],
  imports: [FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase, NgClass, NgStyle],
  exports: [TaskListComponent]
})
export class TaskListModule {}
