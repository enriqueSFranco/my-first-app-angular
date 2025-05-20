import { Component } from '@angular/core';
import { CommonModule, NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Task, TaskPriority, TaskStatus } from './interfaces/task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgFor, NgSwitch, NgSwitchCase],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  showClassSale = false; // se usa para agregar una clase de forma dinamica al componente [class.sale]="showClassSale"
  // NOTE: en este coso la clase .sale no se agregara por que esta en false.

  // enum TaskStatus
  TaskStatus = TaskStatus;

  readonly statuses = [
    { value: TaskStatus.Progress, label: 'Progress' },
    { value: TaskStatus.Pending, label: 'Pending' },
    { value: TaskStatus.Completed, label: 'Completed' },
  ];

  readonly priorities = [
    { value: TaskPriority.Low, label: 'Low' },
    { value: TaskPriority.Medium, label: 'Medium' },
    { value: TaskPriority.High, label: 'High' },
  ];

  testTasks = [
    {
      id: crypto.randomUUID(),
      title: 'Hacer ejercicio',
      status: TaskStatus.Progress,
      priority: TaskPriority.High,
    },
    {
      id: crypto.randomUUID(),
      title: 'Ir de comprar al super',
      status: TaskStatus.Pending,
      priority: TaskPriority.Low,
    },
    {
      id: crypto.randomUUID(),
      title: 'Salir de pase con mi mascota',
      status: TaskStatus.Pending,
      priority: TaskPriority.Medium,
    },
  ];

  getBgColorByPriority(priority: TaskPriority) {
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

  getStatusClass(status: TaskStatus) {
    return {
      [TaskStatus.Progress]: 'task--status-progress',
      [TaskStatus.Pending]: 'task--status-pending',
      [TaskStatus.Completed]: 'task--status-completed',
    }[status];
  }

  trackByTaskId(index: number, task: Task) {
    return task.id;
  }

  onStatusChange(task: Task, newStatus: TaskStatus) {
    task.status = newStatus;
    console.log(this.testTasks);
  }
}
