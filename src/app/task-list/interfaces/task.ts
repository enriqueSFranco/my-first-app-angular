export enum TaskStatus {
  Progress = 'progress',
  Pending = 'pending',
  Completed = 'completed'
}

export enum TaskPriority {
  High = 'high',
  Medium = 'medium',
  Low = 'low'
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  priority: TaskPriority;
}
