<template>
  <li
    :style="{
      transform: `translateY(${news.top}px)`,
    }"
    class="absolute w-full mb-2"
  >
    <a
      :href="NEWS_LIST[game].newsDetailLink.replace('{id}', String(news.id))"
      :title="news.title"
      class="flex p-2 sm:p-3 transition-colors bg-white border-2 border-transparent rounded-md hover:border-blue-500 group"
      target="_blank"
    >
      <div
        v-if="showBanner"
        class="w-[75px] h-[75px] sm:w-[150px] md:w-[300px] md:h-[150px] mr-2 md:mr-4 relative flex items-center justify-center"
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
            :src="loadImage ? (news.banner || DEFAULT_BANNER) : ''"
            class="w-full h-full object-cover rounded-md absolute" alt="banner"
            @load="imageLoaded = true;state.imageLoaded.add(game + String(news.id))"
          >
        </Transition>
      </div>
      <div class="flex-1 overflow-hidden">
        <h2
          :title="news.title"
          class="w-full overflow-hidden md:text-lg font-bold transition-colors group-hover:text-blue-500 whitespace-nowrap overflow-ellipsis"
        >
          {{ news.title }}
        </h2>
        <div class="text-sm">
          新闻ID: {{ news.id }}
        </div>
        <div class="text-sm whitespace-nowrap overflow-ellipsis">
          新闻类型: {{ news.tag }} <span v-if="news.video" class="text-blue-500 font-bold" @click.stop.prevent="copyToClipboard(news.video)">存在视频</span>
        </div>
        <div class="text-sm">
          发布时间: {{ news.startTime }}
        </div>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { state } from '@/state'
import { NEWS_LIST } from '@/constants'

const props = defineProps<{
  news: NewsItemData
  showBanner: boolean
  game: string
}>()

const DEFAULT_BANNER = 'https://icdn.amarea.cn/upload/2023/06/6491c83b6fa65.jpg'
const LOAD_DELAY = 300

let timer: NodeJS.Timeout | null = null
const loadImage = ref(false)
const imageLoaded = ref(false)

onMounted(() => {
  if (state.imageLoaded.has(props.game + props.news.id)) {
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

function copyToClipboard(text: string) {
  const input = document.createElement('input')
  input.value = text
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  useToast().success('已复制视频链接')
}
</script>

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
