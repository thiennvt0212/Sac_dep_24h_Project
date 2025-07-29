<script setup>
import { ref, computed } from 'vue';
import blogImg1 from '../../assets/Image/blogImg1.png';
import BlogPost from './BlogPost.vue';
const allPost = ref([
    {
        id: 1,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 2,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 3,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 4,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 5,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 6,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 7,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 8,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 9,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 10,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 11,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 12,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 13,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 14,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 15,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 16,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 17,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 18,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
]);

// Reactive data
const currentPage = ref(1);
const postsPerPage = ref(6); // 6 bài mỗi trang
const totalPages = computed(() => Math.ceil(allPost.value.length / postsPerPage.value));

// Tính toán bài viết hiển thị trên trang hiện tại
const displayedPosts = computed(() => {
  const startIndex = (currentPage.value - 1) * postsPerPage.value
  const endIndex = startIndex + postsPerPage.value
  return allPost.value.slice(startIndex, endIndex)
})
</script>
<template>
    
    <div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="post in displayedPosts" :key="post.id">
                <blog-post :post="post" />
            </div>
        </div>
    </div>
    
</template>