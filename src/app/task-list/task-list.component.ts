import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task } from './interfaces/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  prioritySelected = '';
  statusSelected = '';

  task: Task = {
    id: crypto.randomUUID(),
    title: 'Hacer ejercicio',
    status: 'pending',
    priority: 'low',
  };

  getBgColorByPriority(priority: 'high' | 'medium' | 'low') {
    switch (priority) {
      case 'high':
        return '#ffccd5';
      case 'medium':
        return '#fff3cd';
      case 'low':
        return '#d8f3dc';
      default:
        return '#e9ecef';
    }
  }

  changeStatus() {
    console.log(this.task)
  }
}
