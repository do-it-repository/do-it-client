import { atom } from 'recoil'
import { defaultTodoList } from '../../domain/todolist/constants'

export const todoState = atom({
  key: 'todoState',
  default: defaultTodoList,
})
