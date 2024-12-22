export * from './rule'

export const API_ENDPOINT = {
  dev: 'http://localhost:8000',
  prod_cn: 'https://api.amarea.cn/game_news',
  prod_os: 'https://api.hk4e.com/game_news',
}

export const APP_ABBR = 'GNS'
export const NEWS_LIST: Record<string, GameInfo> = {
  genshin: {
    displayName: '原神',
    channals: {
      web_cn: {
        displayName: '官网',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://ys.mihoyo.com/main/news/detail/{id}',
      },
      web_os: {
        displayName: '国际服(zh-tw) 官网',
        apiBase: API_ENDPOINT.prod_os,
        newsDetailLink: 'https://genshin.hoyoverse.com/zh-tw/news/detail/{id}',
      },
      bbs_cn_1: {
        displayName: '米游社 公告',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/ys/article/{id}',
      },
      bbs_cn_2: {
        displayName: '米游社 活动',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/ys/article/{id}',
      },
      bbs_cn_3: {
        displayName: '米游社 资讯',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/ys/article/{id}',
      },
    },
  },
  starrail: {
    displayName: '崩坏：星穹铁道',
    channals: {
      web_cn: {
        displayName: '官网',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://sr.mihoyo.com/news/{id}',
      },
      web_os: {
        displayName: '国际服 官网',
        apiBase: API_ENDPOINT.prod_os,
        newsDetailLink: 'https://hsr.hoyoverse.com/zh-cn/news/{id}',
      },
      bbs_cn_1: {
        displayName: '米游社 公告',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/sr/article/{id}',
      },
      bbs_cn_2: {
        displayName: '米游社 活动',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/sr/article/{id}',
      },
      bbs_cn_3: {
        displayName: '米游社 资讯',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/sr/article/{id}',
      },
    },
  },
  honkai3: {
    displayName: '崩坏3',
    channals: {
      web_cn: {
        displayName: '官网',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://bh3.mihoyo.com/news/693/{id}',
      },
      web_os: {
        displayName: '国际服 官网',
        apiBase: API_ENDPOINT.prod_os,
        newsDetailLink: 'https://honkaiimpact3.hoyoverse.com/global/zh-cn/news/{id}',
      },
      bbs_cn_1: {
        displayName: '米游社 公告',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/bh3/article/{id}',
      },
      bbs_cn_2: {
        displayName: '米游社 活动',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/bh3/article/{id}',
      },
      bbs_cn_3: {
        displayName: '米游社 资讯',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/bh3/article/{id}',
      },
    },
  },
  zzz: {
    displayName: '绝区零',
    channals: {
      web_cn: {
        displayName: '官网',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://zzz.mihoyo.com/news/{id}',
      },
      web_os: {
        displayName: '国际服 官网',
        apiBase: API_ENDPOINT.prod_os,
        newsDetailLink: 'https://zenless.hoyoverse.com/zh-cn/news/{id}',
      },
      bbs_cn_1: {
        displayName: '米游社 公告',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/zzz/article/{id}',
      },
      bbs_cn_2: {
        displayName: '米游社 活动',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/zzz/article/{id}',
      },
      bbs_cn_3: {
        displayName: '米游社 资讯',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.miyoushe.com/zzz/article/{id}',
      },
    },
  },
  mihoyo: {
    displayName: '米哈游',
    channals: {
      web_cn: {
        displayName: '米哈游',
        apiBase: API_ENDPOINT.prod_cn,
        newsDetailLink: 'https://www.mihoyo.com/news/{id}',
      },
      web_os: {
        displayName: 'Hoyoverse',
        apiBase: API_ENDPOINT.prod_os,
        newsDetailLink: 'https://www.hoyoverse.com/zh-cn/news/{id}',
      },
    },
  },
}
