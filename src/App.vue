<template>
  <div class="min-h-screen bg-gray-200">
    <div class="px-4 py-2 xl:px-0 xl:w-[1200px] mx-auto">
      <h1 class="py-6 text-4xl font-bold">
        原神官网新闻检索
      </h1>
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
        class="w-full px-4 py-2 transition-colors border rounded-full hover:border-blue-500 focus:border-blue-500 outline-blue-500"
      >
      <ul class="flex flex-wrap gap-1 py-4">
        <li
          v-for="tag in Object.keys(tags)" :key="tag"
          class="inline-block px-3 py-1 text-sm transition-colors border border-gray-400 rounded-full cursor-pointer hover:text-blue-500 hover:border-blue-400"
          :class="{
            '!text-white !bg-blue-500 !border-blue-500': filterTag === tag,
          }"
          @click="filterTag = filterTag === tag ? '全部' : tag"
        >
          {{ tag }} {{ tags[tag] }}
        </li>
      </ul>
      <!-- <div>
        <input id="show-banner" v-model="showBanner" type="checkbox"><label for="show-banner">显示Banner图片</label>
      </div> -->
      <div v-show="searchStr !== ''">
        搜索结果：{{ filteredNewsData.length }}
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
        class="relative"
        :style="{
          height: `${filteredNewsData.length * 190 - 8}px`,
        }"
      >
        <li
          v-for="news in itemRenderList" :key="news.contentId"
          :style="{
            transform: `translateY(${news.top}px)`,
          }"
          class="flex p-4 mb-2 bg-white rounded-md h-[182px] absolute w-full"
        >
          <img
            v-show="showBanner" :src="getBanner(news.ext)"
            class="w-[150px] h-[75px] md:w-[300px] md:h-[150px] object-cover" alt=""
          >
          <div class="flex-1 px-4 overflow-hidden">
            <a :href="`https://ys.mihoyo.com/main/news/detail/${news.contentId}`" target="_blank">
              <h2
                :title="news.title"
                class="w-full overflow-hidden text-2xl font-bold transition-colors hover:text-blue-500 whitespace-nowrap overflow-ellipsis"
              >
                {{ news.title }}
              </h2>
            </a>
            <div>新闻ID: {{ news.contentId }}</div>
            <div>新闻类型: {{ news.tag }}</div>
            <div>发布时间: {{ news.start_time }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebounce, useElementBounding } from '@vueuse/core'
import { useToast } from 'vue-toastification'

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
interface NewsItem extends NewsData {
  top: number
}
const apiUrl = 'https://api.amarea.cn/ys/news'

const toast = useToast()

const newsData = ref<NewsData[]>([])
const newsUpdateTime = ref(0)
const tags = ref<{ [index: string]: number }>({})
const container = ref<HTMLElement>()
const { top: containerTopO } = useElementBounding(container)
const containerTop = useDebounce(containerTopO, 200, { maxWait: 400 })
const filterTag = ref('全部')
const searchStr = ref('')
const showBanner = ref(true)
const loading = ref(false)

const filteredNewsData = computed(() => {
  let _list = []
  if (searchStr.value !== '')
    _list = newsData.value.filter(news => news.title.includes(searchStr.value))

  else if (filterTag.value === '全部')
    _list = newsData.value

  else
    _list = newsData.value.filter(news => news.tag === filterTag.value)

  _list.forEach((v, i) => {
    (v as NewsItem).top = 190 * i
  })
  return _list as NewsItem[]
})

const itemRenderList = computed(() => {
  const preload = 5
  return filteredNewsData.value.filter((item: NewsItem) => {
    if (item.top > (-containerTop.value - preload * window.innerHeight) && item.top < (-containerTop.value + (preload + 1) * window.innerHeight))
      return true
    return false
  })
})

onMounted(() => {
  fetchData()
})

function fetchData(force_refresh = false) {
  loading.value = true
  newsData.value = []
  tags.value = {}
  fetch(force_refresh ? `${apiUrl}?force_refresh=1` : apiUrl)
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

function getBanner(exts: NewsExt[]): string {
  for (const ext of exts) {
    if (ext.arrtName === 'banner' && Array.isArray(ext.value)) {
      if (ext.value.length > 0)
        return ext.value[0].url
    }
  }
  return 'https://icdn.amarea.cn/upload/2023/06/6491c83b6fa65.jpg'
}

function getNewsType(title: string, id: number): string {
  if (title.includes('神铸赋形'))
    return '武器活动祈愿'
  if (title.includes('祈愿即将开启'))
    return '角色活动祈愿'
  if (title.includes('祈愿现已开启'))
    return '角色活动祈愿'
  if (title.includes('活动祈愿'))
    return '角色活动祈愿'
  if (title.includes('壁纸'))
    return '壁纸'
  if (title.includes('表情包'))
    return '表情包'
  if (title.includes('签到活动'))
    return '签到活动'
  if ([11473, 12502].includes(id))
    return '提瓦特美食札记'
  if (title.includes('提瓦特美食札记'))
    return '提瓦特美食札记'
  if ([10016].includes(id))
    return '生日贺图'
  if (title.match(/生日.*快乐/) && !title.includes('角色PV'))
    return '生日贺图'
  if (title.includes('生日贺图'))
    return '生日贺图'
  if (title.includes('同人绘画作品征集'))
    return '同人绘画作品征集'
  if (title.match(/(问题|异常).*说明/))
    return '问题说明'

  if (title.includes('音乐会'))
    return '音乐会'
  if (title.includes('音乐专辑'))
    return 'OST信息'
  if (title.includes('OST'))
    return 'OST信息'
  if (title.includes('音乐动态视频'))
    return 'EP'
  if (title.includes('EP'))
    return 'EP'

  if (title.includes('版本PV'))
    return '版本PV'
  if (title.match(/特别节目.*即将开启/))
    return '前瞻预告'
  if (title.includes('前瞻直播预告'))
    return '前瞻预告'
  if (title.includes('前瞻特别节目预告'))
    return '前瞻预告'
  if (title.match(/(前瞻|特别节目).*回顾长图/))
    return '前瞻回顾长图'
  if (title.includes('特别节目'))
    return '前瞻特别节目'
  if (title.includes('前瞻直播回顾'))
    return '前瞻特别节目'
  // if (title.includes('前瞻特别节目'))
  //   return '前瞻特别节目'

  if (title.includes('更新通知'))
    return '版本更新说明'
  if (title.includes('更新说明'))
    return '版本更新说明'
  if (title.includes('更新维护预告'))
    return '版本更新说明'

  if (title.includes('内容专题页'))
    return '版本专题页'
  if (title.includes('先行展示页'))
    return '版本专题页'
  if (title.includes('新系统'))
    return '系统更新'
  if (title.includes('系统更新'))
    return '系统更新'

  if (title.includes('预下载'))
    return '预下载公告'

  if (title.includes('幕后'))
    return '幕后花絮'
  if (title.includes('原来你也玩原神'))
    return '沙雕广告'
  if (title.includes('条漫'))
    return '漫画'
  if (title.includes('四格漫画'))
    return '漫画'
  if (title.includes('声优小剧场'))
    return '声优小剧场'
  if (title.includes('寻味之旅'))
    return '寻味之旅'
  if (title.includes('风物集短片'))
    return 'PV短片'
  if (title.includes('PV短片'))
    return 'PV短片'
  if (title.includes('CM'))
    return 'CM短片'
  if (title.includes('衣装PV'))
    return '衣装PV'
  if (title.includes('过场动画'))
    return '过场动画'
  if (title.includes('剧情PV'))
    return '剧情PV'
  if (title.includes('幕间PV'))
    return '剧情PV'
  if (title.includes('全新角色预告'))
    return '角色PV'
  if (title.match(/角色.*预告PV/))
    return '角色PV'
  if (title.includes('角色PV'))
    return '角色PV'
  if (title.includes('全新角色展示'))
    return '角色演示'
  if (title.includes('角色演示'))
    return '角色演示'
  if (title.includes('拾枝杂谈'))
    return '拾枝杂谈'

  if (title.includes('小贴士'))
    return '玩法介绍'
  if (title.includes('玩法介绍'))
    return '玩法介绍'
  if (title.includes('玩法说明'))
    return '玩法介绍'
  if (title.includes('玩法小贴士'))
    return '玩法介绍'

  if (title.includes('开发组座谈会'))
    return '开发组座谈会'
  if (title.includes('开发者共研计划'))
    return '开发者共研计划'

  if (title.includes('传说任务说明'))
    return '传说任务说明'
  if (title.includes('传说任务即将开启'))
    return '传说任务说明'

  if (title.match(/魔神任务.*即将开启/))
    return '主线任务说明'
  if (title.match(/开启.*魔神任务/))
    return '主线任务说明'

  if (title.includes('×原神') || title.includes('x 原神'))
    return '联动信息'
  if (title.includes('原神×') || title.includes('原神 x'))
    return '联动信息'
  if (title.includes('联名'))
    return '联动信息'
  if (title.includes('联动'))
    return '联动信息'

  if (title.includes('周边上新'))
    return '周边信息'
  if (title.includes('原神旗舰店'))
    return '周边信息'

  if (title.includes('H5'))
    return '网页活动'
  // if (title.match(/获.*奖/))
  //   return '获奖公告'

  if (title.includes('FAQ'))
    return 'FAQ'

  if (title.includes('PV') && !title.includes('活动'))
    return 'PV'
  if (title.includes('活动'))
    return '活动'
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
