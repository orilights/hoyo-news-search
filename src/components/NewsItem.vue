<template>
  <li
    :style="{
      transform: `translateY(${news.top}px)`,
    }"
    class="absolute w-full mb-2"
  >
    <a
      :href="`https://ys.mihoyo.com/main/news/detail/${news.contentId}`"
      :title="news.title"
      class="flex p-3 transition-colors bg-white border-2 border-transparent rounded-md hover:border-blue-500 group"
      target="_blank"
    >
      <div
        v-if="showBanner"
        class="w-[150px] h-[75px] md:w-[300px] md:h-[150px] mr-4 relative flex items-center justify-center"
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
            :src="loadImage ? getBanner(news.ext) : ''"
            class="w-full h-full object-cover rounded-md absolute" alt="banner"
            @load="imageLoaded = true"
          >
        </Transition>
      </div>
      <div class="flex-1 overflow-hidden">
        <h2
          :title="news.title"
          class="w-full overflow-hidden text-lg font-bold transition-colors group-hover:text-blue-500 whitespace-nowrap overflow-ellipsis"
        >
          {{ news.title }}
        </h2>
        <div class="text-sm">
          新闻ID: {{ news.contentId }}
        </div>
        <div class="text-sm">
          新闻类型: {{ news.tag }}
        </div>
        <div class="text-sm">
          发布时间: {{ news.start_time }}
        </div>
      </div>
    </a>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  news: NewsItemData
  showBanner: boolean
}>()

const DEFAULT_BANNER = 'https://icdn.amarea.cn/upload/2023/06/6491c83b6fa65.jpg'
const LOAD_DELAY = 300

let timer: NodeJS.Timeout | null = null
const loadImage = ref(false)
const imageLoaded = ref(false)

onMounted(() => {
  timer = setTimeout(() => {
    loadImage.value = true
    timer = null
  }, LOAD_DELAY)
})

onUnmounted(() => {
  if (timer)
    clearTimeout(timer)
})

function getBanner(exts: NewsExt[]): string {
  for (const ext of exts) {
    if (ext.arrtName === 'banner' && Array.isArray(ext.value)) {
      if (ext.value.length > 0)
        return ext.value[0].url
    }
  }
  return DEFAULT_BANNER
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
