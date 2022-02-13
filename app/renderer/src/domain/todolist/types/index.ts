/* Todo 및 SubTodo 최소단위 객체정의 */

export interface SubTodoType {
  id: number
  plan: string
  progress: {
    percentage: number
    done: boolean
  }
}

export default interface TodoType {
  id: number
  plan: string
  category: {
    emoji: string
    name: string
  }
  durationHour: number
  detailedText?: string
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
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  innerRef: any
}

export interface ButtonModeParam {
  onClick: (e: React.MouseEvent<HTMLInputElement>) => void
}

export interface TodoAddButtonParam {
  onEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
