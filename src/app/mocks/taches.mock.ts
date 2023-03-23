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
export interface ICategorie {
  categorie: CategoryType;
}
export const CATEGORIES: ICategorie[] = [
  {
    categorie: 'shopping',
  },
  {
    categorie: 'health',
  },
  {
    categorie: 'work',
  },
  {
    categorie: 'bills',
  },
  {
    categorie: 'cleaning',
  },
  {
    categorie: 'other',
  },
];
