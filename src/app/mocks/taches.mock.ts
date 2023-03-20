export type CategoryType =
  | 'shopping'
  | 'health'
  | 'work'
  | 'bills'
  | 'cleaning'
  | 'other'
  | 'init';

export interface ITodo {
  id: number;
  content: string;
  category: CategoryType;
  isUrgent: boolean;
  doneDate: Date | null;
}
