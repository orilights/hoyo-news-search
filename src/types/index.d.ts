export {}

declare global {
  interface NewsData {
    id: number
    title: string
    startTime: string
    createTime: string
    tag: string
    banner: string
  }

  interface NewsItemData extends NewsData {
    top: number
  }
}