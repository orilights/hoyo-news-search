<template>
  <div class="min-h-screen bg-gray-200">
    <div class="mx-4 py-2 xl:px-0 lg:w-[960px] lg:mx-auto relative">
      <Transition name="popup">
        <div
          v-show="showSetting"
          class="absolute top-[75px] right-0 bg-white p-4 rounded-lg shadow-md"
          @mouseleave="showSetting = false"
        >
          <div class="flex items-center my-1">
            <span class="flex-1">显示Banner图片</span> <Switch v-model="showBanner" class="ml-2" />
          </div>
          <div class="flex items-center my-1">
            <span class="flex-1">根据发布时间排序</span> <Switch v-model="sortNews" class="ml-2" />
          </div>
        </div>
      </Transition>

      <div class="flex items-center justify-between">
        <h1 class="py-6 text-4xl font-bold">
          原神官网新闻检索
        </h1>
        <div class="flex gap-4">
          <a href="https://github.com/orilights/genshin-news-search" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1024 1024" stroke="currentColor" class="w-6 h-6">
              <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
            </svg>
          </a>
          <button @click="showSetting = !showSetting">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path fill-rule="evenodd" d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <div class="flex items-center mb-2">
        数据更新于：
        <template v-if="loading">
          加载中
        </template>
        <template v-else>
          {{ formatTime(newsUpdateTime) }}
          <button class="ml-2 hover:text-blue-500" @click="fetchData(true)">
            <svg
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-4 h-4"
            >
              <path
                stroke-linecap="round" stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </button>
        </template>
      </div>
      <input
        v-model="searchStr" type="text" placeholder="搜些什么吧"
        class="w-full px-4 py-2 transition-colors border rounded-full hover:border-blue-500 outline-blue-500"
      >
      <ul v-show="!searchEnabled" class="flex flex-wrap gap-1 py-4">
        <li
          v-for="tag in Object.keys(tags).sort((a, b) => tags[b] - tags[a])" :key="tag"
          class="inline-block px-3 py-1 text-sm transition-colors border border-gray-400 rounded-full cursor-pointer hover:text-blue-500 hover:border-blue-400"
          :class="{
            '!text-white !bg-blue-500 !border-blue-500': filterTag === tag,
          }"
          @click="handleClickTag(tag)"
        >
          {{ tag }} {{ tags[tag] }}
        </li>
      </ul>

      <div v-show="searchEnabled" class="py-2">
        <span class="pr-4">
          搜索结果：{{ filteredNewsData.length }}
        </span>
        <button class="hover:text-blue-500" @click="searchStr = ''">
          取消搜索
        </button>
      </div>
      <div v-if="loading" class="flex flex-col items-center gap-2 py-4">
        <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" class="w-[60px] h-[60px]">
          <defs>
            <linearGradient id="a" x1="8.042%" y1="0%" x2="65.682%" y2="23.865%">
              <stop stop-color="#000" stop-opacity="0" offset="0%" />
              <stop stop-color="#000" stop-opacity=".631" offset="63.146%" />
              <stop stop-color="#000" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(1 1)">
              <path id="Oval-2" d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2">
                <animateTransform
                  attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"
                  repeatCount="indefinite"
                />
              </path>
              <circle fill="#000" cx="36" cy="18" r="1">
                <animateTransform
                  attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.9s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        </svg>
        <span class="text-lg">数据加载中</span>
      </div>
      <ul
        ref="container"
        class="relative overflow-hidden"
        :style="{
          height: `${filteredNewsData.length * (itemHeight + 8) - 8}px`,
        }"
      >
        <li
          ref="shadowItem"
          class="absolute w-full mb-2 translate-x-[9999px] translate-y-[9999px] opacity-0"
        >
          <a
            class="flex p-3 transition-colors bg-white border-2 border-transparent rounded-md hover:border-blue-500 group"
          >
            <img
              v-if="showBanner"
              class="w-[150px] h-[75px] md:w-[300px] md:h-[150px] object-cover mr-4 rounded-md"
              alt="banner"
            >
            <div class="flex-1 overflow-hidden">
              <a href="https://ys.mihoyo.com/main/news/detail/" target="_blank">
                <h2
                  class="w-full overflow-hidden text-lg font-bold transition-colors group-hover:text-blue-500 whitespace-nowrap overflow-ellipsis"
                >
                  Shadow
                </h2>
              </a>
              <div class="text-sm">
                新闻ID: Shadow
              </div>
              <div class="text-sm">
                新闻类型: Shadow
              </div>
              <div class="text-sm">
                发布时间: 2023-06-13 18:02:00
              </div>
            </div>
          </a>
        </li>
        <NewsItem
          v-for="news in itemRenderList" :key="news.contentId"
          :news="news" :show-banner="showBanner"
        />
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useElementBounding, useThrottle, useUrlSearchParams } from '@vueuse/core'
import { SettingType, Settings } from '@orilight/vue-settings'
import { useToast } from 'vue-toastification'
import Switch from './components/Switch.vue'
import NewsItem from './components/NewsItem.vue'

const APP_ABBR = 'GNS'
const NEWS_API = 'https://api.amarea.cn/ys/news'
const NEWS_REFRESH_API = 'https://api.amarea.cn/ys/news?force_refresh=1'
const settings = new Settings(APP_ABBR)

const toast = useToast()

const newsData = ref<NewsData[]>([])
const newsUpdateTime = ref(0)
const tags = ref<{ [index: string]: number }>({})
const container = ref<HTMLElement>()
const shadowItem = ref<HTMLElement>()
const containerTop = useThrottle(useElementBounding(container).top, 30, true)
const itemHeight = useElementBounding(shadowItem).height
const params = useUrlSearchParams('history')
const filterTag = ref('全部')
const searchStr = ref('')
const showSetting = ref(false)
const showBanner = ref(true)
const sortNews = ref(true)
const loading = ref(false)

const searchEnabled = computed(() => searchStr.value.trim() !== '')

const filteredNewsData = computed(() => {
  let data: NewsData[]
  if (searchEnabled.value) {
    data = newsData.value.filter(news =>
      searchStr.value.toLowerCase().trim().split(' ').every(v =>
        news.title.toLowerCase().includes(v),
      ),
    )
  }
  else if (filterTag.value === '全部') {
    data = newsData.value.slice()
  }
  else if (!Object.keys(tags.value).includes(filterTag.value)) {
    data = newsData.value.slice()
  }
  else {
    data = newsData.value.filter(news => news.tag === filterTag.value)
  }

  if (sortNews.value) {
    data = data.sort((a, b) => {
      const bt = new Date(b.start_time).getTime()
      const at = new Date(a.start_time).getTime()
      if (bt === at)
        return Number(b.contentId) - Number(a.contentId)
      return bt - at
    })
  }

  data.forEach((v, i) => {
    (v as NewsItemData).top = (itemHeight.value + 8) * i
  })

  return data as NewsItemData[]
})

const itemRenderList = computed(() => {
  const renderRange = {
    up: 0.5,
    down: 0.5,
  }
  const renderRangeTop = -containerTop.value - renderRange.up * window.innerHeight
  const renderRangeBottom = -containerTop.value + window.innerHeight + renderRange.down * window.innerHeight
  return filteredNewsData.value.filter((item: NewsItemData) => {
    return (item.top + itemHeight.value > renderRangeTop && item.top < renderRangeBottom)
  })
})

onMounted(() => {
  settings.register('showBanner', showBanner, SettingType.Bool)
  settings.register('sortNews', sortNews, SettingType.Bool)
  fetchData()
  if (params.filterTag)
    filterTag.value = params.filterTag as string
})

function fetchData(force_refresh = false) {
  loading.value = true
  newsData.value = []
  tags.value = {}
  fetch(force_refresh ? NEWS_REFRESH_API : NEWS_API)
    .then(res => res.json())
    .then((data) => {
      if (data.code !== 0) {
        toast.error(`服务器响应：${data.msg}`)
        return
      }
      const newsList = data.newsData
      tags.value['全部'] = newsList.length
      newsList.forEach((element: any) => {
        const _type = getNewsType(element.title, Number(element.contentId))
        if (tags.value[_type] === undefined)
          tags.value[_type] = 1
        else
          tags.value[_type] += 1
        element.tag = _type
      })
      newsData.value = newsList
      newsUpdateTime.value = data.updateTime
      toast.success('获取新闻数据成功')
    })
    .catch((err) => {
      toast.error('获取新闻数据失败')
      console.error(err)
    })
    .finally(() => {
      loading.value = false
    })
}

function handleClickTag(tag: string) {
  if (filterTag.value === tag) {
    filterTag.value = '全部'
    if (params.filterTag)
      delete params.filterTag
  }
  else {
    filterTag.value = tag
    params.filterTag = tag
  }
}

function getNewsType(title: string, id: number): string {
  interface Rule {
    keyword: (string | RegExp)[]
    include: number[]
    exclude: number[]
  }
  const rules: { [index: string]: Rule } = {
    壁纸: {
      keyword: ['壁纸'],
      include: [],
      exclude: [],
    },
    网页活动: {
      keyword: ['H5', '网页活动'],
      include: [],
      exclude: [],
    },
    新区域展示页: {
      keyword: ['新区域展示页'],
      include: [],
      exclude: [],
    },
    武器活动祈愿: {
      keyword: ['神铸赋形'],
      include: [],
      exclude: [],
    },
    角色活动祈愿: {
      keyword: ['祈愿即将开启', '祈愿现已开启', '活动祈愿'],
      include: [],
      exclude: [],
    },
    表情包: {
      keyword: ['表情包'],
      include: [],
      exclude: [],
    },
    签到活动: {
      keyword: ['签到活动'],
      include: [],
      exclude: [],
    },
    提瓦特美食札记: {
      keyword: ['提瓦特美食札记'],
      include: [11473, 12502],
      exclude: [],
    },
    生日贺图: {
      keyword: ['生日贺图', /生日.*快乐/],
      include: [10016],
      exclude: [24417],
    },
    同人绘画作品征集: {
      keyword: ['同人绘画作品征集'],
      include: [],
      exclude: [],
    },
    问题说明: {
      keyword: [/(问题|异常|补偿|回退|维护|调整).*说明/],
      include: [],
      exclude: [],
    },
    音乐会: {
      keyword: ['音乐会'],
      include: [],
      exclude: [],
    },
    OST信息: {
      keyword: ['音乐专辑', 'OST'],
      include: [],
      exclude: [],
    },
    EP: {
      keyword: ['音乐动态视频', 'EP'],
      include: [],
      exclude: [],
    },
    版本PV: {
      keyword: ['版本PV'],
      include: [],
      exclude: [],
    },
    前瞻预告: {
      keyword: [/特别节目.*即将开启/, '前瞻直播预告', '前瞻特别节目预告'],
      include: [],
      exclude: [],
    },
    前瞻回顾长图: {
      keyword: [/(前瞻|特别节目).*回顾长图/],
      include: [],
      exclude: [],
    },
    前瞻特别节目: {
      keyword: ['特别节目'],
      include: [11442],
      exclude: [],
    },
    版本更新说明: {
      keyword: ['更新通知', '更新说明', '更新维护预告'],
      include: [],
      exclude: [],
    },
    版本专题页: {
      keyword: ['内容专题页', '先行展示页'],
      include: [],
      exclude: [],
    },
    系统更新: {
      keyword: ['新系统', '系统更新'],
      include: [],
      exclude: [],
    },
    预下载公告: {
      keyword: ['预下载'],
      include: [],
      exclude: [],
    },
    幕后花絮: {
      keyword: ['的幕后', '合作幕后'],
      include: [],
      exclude: [],
    },
    沙雕广告: {
      keyword: ['原来你也玩原神'],
      include: [],
      exclude: [],
    },
    漫画: {
      keyword: ['条漫', '四格漫画'],
      include: [],
      exclude: [],
    },
    声优小剧场: {
      keyword: ['声优小剧场'],
      include: [],
      exclude: [],
    },
    寻味之旅: {
      keyword: ['寻味之旅'],
      include: [],
      exclude: [],
    },
    PV短片: {
      keyword: ['PV短片'],
      include: [],
      exclude: [],
    },
    风物集短片: {
      keyword: ['风物集短片'],
      include: [],
      exclude: [],
    },
    流光拾遗之旅: {
      keyword: ['流光拾遗之旅'],
      include: [],
      exclude: [],
    },
    CM短片: {
      keyword: ['CM'],
      include: [],
      exclude: [],
    },
    衣装PV: {
      keyword: ['衣装PV'],
      include: [],
      exclude: [],
    },
    过场动画: {
      keyword: ['过场动画'],
      include: [],
      exclude: [],
    },
    剧情PV: {
      keyword: ['剧情PV'],
      include: [],
      exclude: [],
    },
    角色PV: {
      keyword: ['全新角色预告', /角色.*预告PV/, '角色PV'],
      include: [],
      exclude: [],
    },
    角色演示: {
      keyword: ['全新角色展示', '角色演示'],
      include: [],
      exclude: [],
    },
    拾枝杂谈: {
      keyword: ['拾枝杂谈'],
      include: [],
      exclude: [],
    },
    玩法介绍: {
      keyword: ['小贴士', '玩法介绍', '玩法说明', '玩法小贴士'],
      include: [],
      exclude: [],
    },
    开发组座谈会: {
      keyword: ['开发组座谈会'],
      include: [],
      exclude: [],
    },
    开发者共研计划: {
      keyword: ['开发者共研计划'],
      include: [],
      exclude: [],
    },
    传说任务说明: {
      keyword: ['传说任务说明', '传说任务即将开启'],
      include: [],
      exclude: [],
    },
    主线任务说明: {
      keyword: [/魔神任务.*即将开启/, /开启.*魔神任务/],
      include: [],
      exclude: [],
    },
    联动信息: {
      keyword: ['×原神', 'x 原神', '原神×', '原神 x', '联名', '联动'],
      include: [28470],
      exclude: [28785],
    },
    周边信息: {
      keyword: ['周边上新', '原神旗舰店'],
      include: [],
      exclude: [],
    },
    FAQ: {
      keyword: ['FAQ'],
      include: [],
      exclude: [],
    },
    PV: {
      keyword: ['PV'],
      include: [],
      exclude: [14282, 14353],
    },
    活动: {
      keyword: ['活动'],
      include: [],
      exclude: [],
    },
  }

  for (const [type, rule] of Object.entries(rules)) {
    if (rule.include.includes(id))
      return type
    if (rule.exclude.includes(id))
      continue
    for (const keyword of rule.keyword) {
      if (typeof keyword === 'string') {
        if (title.includes(keyword))
          return type
      }
      else if (keyword instanceof RegExp) {
        if (keyword.test(title))
          return type
      }
    }
  }
  return '其他'
}

function formatTime(timestamp: number) {
  if (timestamp.toString().length === 10)
    timestamp *= 1000
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')
  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
</script>

<style>
.popup-enter-active,
.popup-leave-active {
  transition: all .3s;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(10px)
}
</style>
