/* Todo 및 SubTodo 최소단위 객체정의 */

export interface SubTodoType {
  id: number
  plan: string
  isDone: boolean
  }


export default interface TodoType {
  id: number
  plan: string
  isDoneMain: boolean
  category: {
    emoji: string
    name: string
  }
  durationHour: number
  subTodoList: SubTodoType[]
}

/*  */

export interface TodoPropType {
  todo: TodoType
}

export interface PrimaryPropType {
  durationHour: number
  category: {
    name: string
    emoji: string
  }
  plan: string
}

/*  */

export interface SubTodoPropType {
  subTodoList: SubTodoType[]
}

/*  TodoAddButton 관련 types */

export interface InputModeParam {
  innerRef: any
}

export interface ButtonModeParam {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

export interface TodoAddButtonParam {}
