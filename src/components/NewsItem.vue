<script setup lang="ts">
import { DEFAULT_BANNER, LOAD_DELAY, NEWS_LIST } from '@/constants'
import { state } from '@/state'
import { useToast } from 'vue-toastification'

const props = defineProps<{
  news: NewsItemData
  showBanner: boolean
  showDateWeek: boolean
  game: string
  channal: string
}>()

let timer: NodeJS.Timeout | null = null
const loadImage = ref(false)
const imageLoaded = ref(false)
const imageKey = `${props.game}_${props.channal}_${props.news.id}`

onMounted(() => {
  if (state.imageLoaded.has(imageKey)) {
    loadImage.value = true
    return
  }
  timer = setTimeout(() => {
    loadImage.value = true
    timer = null
  }, LOAD_DELAY)
})

onUnmounted(() => {
  if (timer)
    clearTimeout(timer)
})

function openVideo(link: string) {
  window.open(link, '_blank')
}

function copyVideoLink(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  useToast().success('已复制视频链接')
}

function getWeek(date: string) {
  const week = ['日', '一', '二', '三', '四', '五', '六']
  return week[new Date(date).getDay()]
}

function onImageLoaded() {
  imageLoaded.value = true
  state.imageLoaded.add(imageKey)
}
</script>

<template>
  <li
    :style="{
      transform: `translateY(${news.top}px)`,
    }"
    class="absolute mb-2 w-full"
  >
    <a
      :href="NEWS_LIST[game].channals[channal].newsDetailLink.replace('{id}', String(news.id))"
      :title="news.title"
      class="group flex rounded-md border-2 border-transparent bg-white p-2 transition-colors hover:border-blue-500 sm:p-3 "
      target="_blank"
    >
      <div
        v-if="showBanner"
        class="relative mr-2 flex size-[75px] items-center justify-center sm:w-[150px] md:mr-4 md:h-[150px] md:w-[300px]"
      >
        <svg
          v-if="!imageLoaded"
          class="w-10"
          version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 52 100" enable-background="new 0 0 0 0" xml:space="preserve"
        >
          <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.1"
            />
          </circle>
          <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.2"
            />
          </circle>
          <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
            <animate
              attributeName="opacity"
              dur="1s"
              values="0;1;0"
              repeatCount="indefinite"
              begin="0.3"
            />
          </circle>
        </svg>
        <Transition name="fade">
          <img
            v-show="imageLoaded"
            :src="loadImage ? (news.cover || DEFAULT_BANNER) : ''"
            class="absolute size-full rounded-md object-cover" alt="banner"
            referrerpolicy="no-referrer"
            @load="onImageLoaded"
          >
        </Transition>
      </div>
      <div class="flex-1 overflow-hidden">
        <h2
          :title="news.title"
          class="w-full truncate font-bold transition-colors group-hover:text-blue-500 md:text-lg"
        >
          {{ news.title }}
        </h2>
        <div class="text-sm">
          新闻ID: {{ news.id }}
        </div>
        <div class="text-ellipsis whitespace-nowrap text-sm">
          新闻类型: {{ news.tag }}
          <span v-if="news.video" class="text-blue-500">
            <span class="ml-2" @click.stop.prevent="openVideo(news.video)">打开视频</span>
            <span class="ml-2" @click.stop.prevent="copyVideoLink(news.video)">复制链接</span>
          </span>
        </div>
        <div class="text-sm">
          发布时间: {{ news.startTime }} <span v-if="showDateWeek">星期{{ getWeek(news.startTime) }}</span>
        </div>
      </div>
    </a>
  </li>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
