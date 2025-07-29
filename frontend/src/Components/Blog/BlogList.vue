<script setup>
import { ref, computed } from 'vue';
import blogImg1 from '../../assets/Image/blogImg1.png';
import BlogPost from './BlogPost.vue';
import Pagination from './Pagination.vue';

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
})

// Reactive data
const currentPage = ref(1);
const postsPerPage = ref(6); // 6 bài mỗi trang
const totalPages = computed(() => Math.ceil(props.posts.length / postsPerPage.value));

// Tính toán bài viết hiển thị trên trang hiện tại
const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage.value
  const endIndex = startIndex + postsPerPage.value
  return props.posts.slice(startIndex, endIndex)
})

// Methods
const handlePageChange = (page) => {
  currentPage.value = page
  // Scroll lên đầu trang
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
<template>
    
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="post in displayedPosts" :key="post.id">
                <blog-post :post="post" />
            </div>
        </div>

        <div class="mt-8">
            <pagination 
                :current-page="currentPage" 
                :total-pages="totalPages" 
                @page-change="handlePageChange" 
            />
        </div>
    </div>
    
</template>