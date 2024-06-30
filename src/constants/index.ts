export * from './rule'

export const APP_ABBR = 'GNS'
export const NEWS_API = 'https://api.amarea.cn/game/{game}/news'
export const NEWS_REFRESH_API = 'https://api.amarea.cn/game/{game}/news?force_refresh=1'
export const NEWS_LIST: Record<string, GameInfo> = {
  genshin: {
    displayName: '原神',
    newsDetailLink: 'https://ys.mihoyo.com/main/news/detail/{id}',
  },
  starrail: {
    displayName: '崩坏：星穹铁道',
    newsDetailLink: 'https://sr.mihoyo.com/news/{id}',
  },
  honkai3: {
    displayName: '崩坏3',
    newsDetailLink: 'https://bh3.mihoyo.com/news/693/{id}',
  },
  zzz: {
    displayName: '绝区零',
    newsDetailLink: 'https://zzz.mihoyo.com/news/{id}',
  },
  mihoyo: {
    displayName: '米哈游',
    newsDetailLink: 'https://www.mihoyo.com/news/{id}',
  },
  genshin_os: {
    displayName: '原神 国际服',
    newsDetailLink: 'https://genshin.hoyoverse.com/zh-tw/news/detail/{id}',
  },
  starrail_os: {
    displayName: '崩坏：星穹铁道 国际服',
    newsDetailLink: 'https://hsr.hoyoverse.com/zh-cn/news/{id}',
  },
  honkai3_os: {
    displayName: '崩坏3 国际服',
    newsDetailLink: 'https://honkaiimpact3.hoyoverse.com/global/zh-cn/news/{id}',
  },
  zzz_os: {
    displayName: '绝区零 国际服',
    newsDetailLink: 'https://zenless.hoyoverse.com/zh-cn/news/{id}',
  },
  hoyoverse: {
    displayName: 'Hoyoverse',
    newsDetailLink: 'https://www.hoyoverse.com/zh-cn/news/{id}',
  },
}
