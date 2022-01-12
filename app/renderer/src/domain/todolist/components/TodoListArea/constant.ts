import { TodoPlanType } from './type'

export const defaultTodoPlan: TodoPlanType[] = [
  {
    id: 1,

    todoname: 'ICT 전략 및 기획 복습',
    durationHour: 3,
    category: '📖공부',
    detailedText: 'chapter3 지난 강의분 복습',
  },
  {
    id: 2,

    todoname: 'Styled Components 조사 및 공부',
    durationHour: 1,
    category: '💻개발',
    detailedText: '조사하고 velog에도 정리하여 올리기',
  },
  {
    id: 3,

    todoname: '헬스장 출석 및 3대 측정',
    durationHour: 2,
    category: '🏃운동',
    detailedText: '300 목표 화이팅!',
  },
]
