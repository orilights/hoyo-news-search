export { }

declare global {
  interface NewsData {
    id: number
    title: string
    startTime: string
    createTime: string
    tag: string
    banner: string
    video: string | null
  }

  interface NewsItemData extends NewsData {
    top: number
  }

  interface GameInfo {
    displayName: string,
    newsDetailLink: string,
  }

  interface ClassifyRule {
    keyword: (string | RegExp)[]
    include: number[]
    exclude: number[]
  }
}