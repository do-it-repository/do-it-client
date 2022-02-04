import TodoType from '../type'

export interface ShowTodoListPropType {
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

// export interface SecondaryPropType {
//   detailedText: string
// }
