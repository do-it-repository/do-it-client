import TodoType, { SubTodoType } from '../types'

export const defaultNewTodo: TodoType = {
  id: 0 ,
  plan: '',
  isDoneMain: false,
  category: {
    emoji: '👀',
    name: 'Category',
  },
  durationHour: 0,
  subTodoList: [
    {
      id: 1,
      plan: '',
      isDone: false,
      },
  ],
}

export const defaultSubTodoList1: SubTodoType[] = [
  {
    id: 1,
    plan: '리덕스와의 차이점 조사하기',
    isDone:false,
  },
  {
    id: 2,
    plan: '리덕스 툴킷 함수 사용법 공부하기',
    isDone:false,
  },
  {
    id: 3,
    plan: '현 프로젝트에 리덕스 툴킷 도입하기',
    isDone:false,
  },
]

export const defaultSubTodoList2: SubTodoType[] = [
  {
    id: 1,
    plan: 'RNN 조사 및 보고서 작성',
    isDone:false,
  },
  {
    id: 2,
    plan: 'ROC 이진분류 성능지표 예제 풀이',
    isDone:false,
  },
  {
    id: 3,
    plan: 'Q-Learning 실습 과제 수행',
    isDone:false,
  },
]

export const defaultSubTodoList3: SubTodoType[] = [
  {
    id: 1,
    plan: '라잉 트라이셉스 익스텐션 3set',
    isDone:false,
  },
  {
    id: 2,
    plan: '원 암 덤벨 익스텐션 3set',
    isDone:false,
  },
  {
    id: 3,
    plan: '덤벨 킥백 3set',
    isDone:false,
  },
]

export const defaultTodoList: TodoType[] = [
  {
    id: 1,
    plan: '리덕스 툴킷 조사 및 공부',
    isDoneMain: false,
    category: {
      emoji: '💻',
      name: 'Dev',
    },
    durationHour: 1,
    subTodoList: defaultSubTodoList1,
  },
  {
    id: 2,
    plan: '머신러닝 복습',
    isDoneMain: false,
    category: {
      emoji: '📖',
      name: 'Univ',
    },
    durationHour: 2,
    subTodoList: defaultSubTodoList2,
  },
  {
    id: 3,
    plan: '삼두 하는날 ',
    isDoneMain: false,
    category: {
      emoji: '💪',
      name: 'Work out',
    },
    durationHour: 2,
    subTodoList: defaultSubTodoList3,
  },
]
