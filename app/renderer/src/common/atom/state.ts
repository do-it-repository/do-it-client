import { atom } from 'recoil'
import { defaultTodoList } from '../../domain/todolist/constants'
import { defaultNewTodo } from '../../domain/todolist/constants'
import { defaultSubTodoList } from '../../domain/todolist/constants'
import TodoType from '../../domain/todolist/types'

export const todoListState = atom<TodoType[]>({
  key: 'todoListState',
  default: defaultTodoList,
})

export const newTodoState = atom<TodoType>({
  key: 'newTodoState',
  default: defaultNewTodo,
})

export const newPlanState = atom<string>({
  key: 'newPlanState',
  default: '',
})
