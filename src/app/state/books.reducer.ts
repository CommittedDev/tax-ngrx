import { createReducer, on, Action } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../books.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { Book }) => [...Book])
);