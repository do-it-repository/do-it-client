import TodoType from './type'

export const defaultTodoList: TodoType[] = [
  {
    id: 1,
    plan: '리덕스 툴킷 조사 및 공부',
    done: false,
    category: {
      emoji: '💻',
      name: 'Dev',
    },
    durationHour: 1,
    detailedText: '리덕스와의 차이점 및 사용법 조사하기',
    progress: 0,
  },
  {
    id: 2,
    plan: '머신러닝 복습',
    done: false,
    category: {
      emoji: '📚',
      name: 'Univ',
    },
    durationHour: 2,
    detailedText: 'Confusion Matrix 의 정확도,정밀도,재현율 계산법 복습',
    progress: 0,
  },
  {
    id: 3,
    plan: '삼두 하는날 ',
    done: false,
    category: {
      emoji: '🏃',
      name: 'Work out',
    },
    durationHour: 2,
    detailedText: '삼두 루틴 15회 4세트',
    progress: 0,
  },
]
