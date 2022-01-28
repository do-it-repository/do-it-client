export default interface TodoType {
  id: number
  plan: string
  done: boolean
  category: {
    emoji: string
    name: string
  }
  durationHour: number
  detailedText: string
  progress?: number
}
