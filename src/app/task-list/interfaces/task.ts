export interface Task {
  id: string;
  title: string;
  status: 'progress' | 'completed' | 'pending';
  priority: 'high' | 'medium' | 'low';
}
