export * from './rule'

export const APP_ABBR = 'GNS'
export const NEWS_LIST: Record<string, GameInfo> = {
  genshin: {
    displayName: '原神',
    apiBase: 'https://api.amarea.cn/game_news/genshin',
    newsDetailLink: 'https://ys.mihoyo.com/main/news/detail/{id}',
  },
  starrail: {
    displayName: '崩坏：星穹铁道',
    apiBase: 'https://api.amarea.cn/game_news/starrail',
    newsDetailLink: 'https://sr.mihoyo.com/news/{id}',
  },
  honkai3: {
    displayName: '崩坏3',
    apiBase: 'https://api.amarea.cn/game_news/honkai3',
    newsDetailLink: 'https://bh3.mihoyo.com/news/693/{id}',
  },
  zzz: {
    displayName: '绝区零',
    apiBase: 'https://api.amarea.cn/game_news/zzz',
    newsDetailLink: 'https://zzz.mihoyo.com/news/{id}',
  },
  mihoyo: {
    displayName: '米哈游',
    apiBase: 'https://api.amarea.cn/game_news/mihoyo',
    newsDetailLink: 'https://www.mihoyo.com/news/{id}',
  },
  genshin_os: {
    displayName: '原神 国际服',
    apiBase: 'https://api.hk4e.com/game_news/genshin_os',
    newsDetailLink: 'https://genshin.hoyoverse.com/zh-tw/news/detail/{id}',
  },
  starrail_os: {
    displayName: '崩坏：星穹铁道 国际服',
    apiBase: 'https://api.hk4e.com/game_news/starrail_os',
    newsDetailLink: 'https://hsr.hoyoverse.com/zh-cn/news/{id}',
  },
  honkai3_os: {
    displayName: '崩坏3 国际服',
    apiBase: 'https://api.hk4e.com/game_news/honkai3_os',
    newsDetailLink: 'https://honkaiimpact3.hoyoverse.com/global/zh-cn/news/{id}',
  },
  zzz_os: {
    displayName: '绝区零 国际服',
    apiBase: 'https://api.hk4e.com/game_news/zzz_os',
    newsDetailLink: 'https://zenless.hoyoverse.com/zh-cn/news/{id}',
  },
  hoyoverse: {
    displayName: 'Hoyoverse',
    apiBase: 'https://api.hk4e.com/game_news/hoyoverse',
    newsDetailLink: 'https://www.hoyoverse.com/zh-cn/news/{id}',
  },
}
