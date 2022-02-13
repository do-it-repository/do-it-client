import { atom } from 'recoil'
import { defaultTodoList } from '../../domain/todolist/constants'
import { defaultNewTodo } from '../../domain/todolist/constants'

export const todoListState = atom({
  key: 'todoListState',
  default: defaultTodoList,
})

export const newTodoState = atom({
  key: 'newTodoState',
  default: defaultNewTodo,
})

export const newPlanState = atom({
  key: 'newPlanState',
  default: '',
})
