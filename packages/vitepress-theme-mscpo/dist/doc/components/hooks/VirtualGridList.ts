import type { Ref } from 'vue'
import { computed, nextTick, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'

export interface VirtualGridListConfig<T> {
  containerRef: Ref<HTMLElement | undefined>
  data: Ref<T[]>
  itemMinWidth: Ref<number>
  itemMinHeight: Ref<number>
  rowGap: Ref<number>
  columnGap: Ref<number>
}

export const useVirtualGridList = <T>({
  containerRef,
  itemMinWidth,
  itemMinHeight,
  rowGap,
  columnGap,
  data,
}: VirtualGridListConfig<T>) => {
  const phantomElement = document.createElement('div')
  phantomElement.style.position = 'absolute'
  phantomElement.style.left = '0'
  phantomElement.style.top = '0'
  phantomElement.style.right = '0'
  phantomElement.style.zIndex = '-1'
  phantomElement.style.willChange = 'height'

  const containerHeight = ref<number>(0)
  const containerWidth = ref<number>(0)
  const startIndex = ref<number>(0)
  const endIndex = ref<number>(0)
  const startOffset = ref<number>(0)

  /** 计算列数 */
  const columnNum = computed(() => {
    return Math.max(
      Math.floor((containerWidth.value - itemMinWidth.value) / (itemMinWidth.value + columnGap.value)) + 1,
      1
    )
  })
  /** 计算行数 */
  const rowNum = computed<number>(() => Math.ceil(data.value.length / columnNum.value))
  /** 计算总高度 */
  const listHeight = computed<number>(() =>
    Math.max(rowNum.value * itemMinHeight.value + (rowNum.value - 1) * rowGap.value, 0)
  )
  /** 可见行数 */
  const visibleRowNum = computed<number>(
    () => Math.ceil((containerHeight.value - itemMinHeight.value) / (itemMinHeight.value + rowGap.value)) + 1
  )
  /** 可见item数量 */
  const visibleCount = computed<number>(() => visibleRowNum.value * columnNum.value)

  watch(
    () => listHeight.value,
    () => {
      phantomElement.style.height = `${listHeight.value}px`
    }
  )

  watchEffect(() => {
    endIndex.value = startIndex.value + visibleCount.value
  })

  const handleContainerResize = () => {
    nextTick(() => {
      if (containerRef.value) {
        containerHeight.value = containerRef.value.clientHeight
        containerWidth.value = containerRef.value.clientWidth
      }
    })
  }

  const handleScroll = () => {
    if (!containerRef.value) {
      return
    }
    const scrollTop = containerRef.value.scrollTop
    const startRowNum = Math.max(0, Math.ceil(scrollTop / (itemMinHeight.value + rowGap.value) - 1))
    startIndex.value = startRowNum * columnNum.value
    startOffset.value = scrollTop - (scrollTop % (itemMinHeight.value + rowGap.value))
  }
  const onScroll = () => {
    requestAnimationFrame(handleScroll)
  }
  const resizeObserver = new ResizeObserver(handleContainerResize)

  onMounted(() => {
    if (containerRef.value) {
      containerRef.value.appendChild(phantomElement)
      resizeObserver.observe(containerRef.value)
      containerRef.value.addEventListener('scroll', onScroll)
      handleContainerResize()
      handleScroll()
    }
  })

  onUnmounted(() => {
    resizeObserver.disconnect()
    if (containerRef.value) {
      containerRef.value.removeEventListener('scroll', onScroll)
      containerRef.value.removeChild(phantomElement)
    }
  })

  return {
    startIndex,
    endIndex,
    startOffset,
    listHeight,
  }
}

export default useVirtualGridList