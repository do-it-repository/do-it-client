/*  */

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

/* */
