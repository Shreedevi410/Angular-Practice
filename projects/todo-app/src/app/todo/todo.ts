import { Component, ChangeDetectionStrategy, signal } from '@angular/core';

interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Todo {
  todos = signal<TodoItem[]>([
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build a todo app', completed: false },
    { id: 3, title: 'Learn TypeScript', completed: false },
    { id: 4, title: 'Practice debugging', completed: false },
  ]);
}
