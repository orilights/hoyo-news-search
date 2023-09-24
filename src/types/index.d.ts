export {}

declare global {
  interface ExtValue {
    name: string
    url: string
  }

  interface NewsExt {
    arrtName: string
    keyId: number
    value: string | ExtValue[]
  }

  interface NewsData {
    contentId: string
    title: string
    ext: NewsExt[]
    tag: string
    start_time: string
  }

  interface NewsItemData extends NewsData {
    top: number
  }
}