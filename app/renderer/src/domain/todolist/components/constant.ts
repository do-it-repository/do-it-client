import TodoType, { SubTodoType } from './type'

const defaultSubTodo: SubTodoType[] = [
  {
    id: 1,
    plan: '리덕스와의 차이점 조사하기',
    progress: {
      percentage: 0,
      done: false,
    },
  },
  {
    id: 2,
    plan: '리덕스 툴킷 함수 사용법 공부하기',
    progress: {
      percentage: 0,
      done: false,
    },
  },
  {
    id: 3,
    plan: '현 프로젝트에 리덕스 툴킷 도입하기',
    progress: {
      percentage: 0,
      done: false,
    },
  },
]

export const defaultTodoList: TodoType[] = [
  {
    id: 1,
    plan: '리덕스 툴킷 조사 및 공부',
    category: {
      emoji: '💻',
      name: 'Dev',
    },
    durationHour: 1,
    detailedText: '리덕스와의 차이점 및 사용법 조사하기',
    subTodoList: defaultSubTodo,
  },
  {
    id: 2,
    plan: '머신러닝 복습',
    category: {
      emoji: '📚',
      name: 'Univ',
    },
    durationHour: 2,
    detailedText: 'Confusion Matrix 의 정확도,정밀도,재현율 계산법 복습',
    subTodoList: defaultSubTodo,
  },
  {
    id: 3,
    plan: '삼두 하는날 ',
    category: {
      emoji: '🏃',
      name: 'Work out',
    },
    durationHour: 2,
    detailedText: '삼두 루틴 15회 4세트',
    subTodoList: defaultSubTodo,
  },
]
