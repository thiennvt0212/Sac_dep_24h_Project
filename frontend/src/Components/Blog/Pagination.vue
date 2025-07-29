<script setup>
import { computed } from 'vue';

const props = defineProps({
    currentPage: {
        type: Number,
        default: 1
    },
    totalPages: {
        type: Number,
        default: 1
    }
});

const emit = defineEmits(['page-change']);
const visiblePages = computed(() => {
  const pages = []
  const delta = 2 // Số trang hiển thị xung quanh trang hiện tại
  
  for (let i = Math.max(1, props.currentPage - delta); 
       i <= Math.min(props.totalPages, props.currentPage + delta); 
       i++) {
    pages.push(i)
  }
  
  return pages
})

const changePage = (page) => {
  if (page >= 1 && page <= props.totalPages && page !== props.currentPage) {
    emit('page-change', page)
  }
}
</script>
<template>
    <nav>
        <ul class="flex justify-center space-x-1">
            <li>
                <button
                    @click="changePage(currentPage - 1)"
                    :disabled="currentPage === 1"
                    class="px-3 py-2 "
                    :class="[
                        currentPage === 1 
                        ? 'hidden' 
                        : 'block'
                    ]"
                    >
                    <font-awesome-icon icon="fa-solid fa-arrow-left" />
                </button>
            </li>
            <li 
                v-for="page in visiblePages" 
                :key="page"

            >
                <button
                @click="changePage(page)"
                class="px-3 py-2 border-b-2"
                :class="[
                    page === currentPage
                    ? 'border-b-[#b67e53] text-[#b67e53] font-semibold'
                    : 'hover:border-b-[#b67e53] hover:text-[#b67e53] hover:font-semibold'
                ]"
                >
                {{ page }}
                </button>
            </li>

            <li>
                <button
                @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-2"
                :class="[
                    currentPage === totalPages
                    ? 'hidden'
                    : 'block'
                ]"
                >
                    <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    
                </button>
            </li>
        </ul>
    </nav>
</template>