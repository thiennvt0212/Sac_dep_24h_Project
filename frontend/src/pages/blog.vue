<script setup>
import { ref } from 'vue';
import BlogList from '@/Components/Blog/BlogList.vue';
import BlogSidebar from '@/Components/Blog/BlogSidebar.vue';
const allPost = ref([
    {
        id: 1,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 2,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 3,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 4,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 5,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 6,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 7,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 8,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 9,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 10,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 11,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 12,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg2.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 13,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 14,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 15,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 16,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 17,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
    {
        id: 18,
        type: 'cbd pastries',
        title: 'Making CBD-Infused Pastries And Cupcakes',
        description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
        image: new URL('../assets/Image/blogImg1.png', import.meta.url).href,
        date: '10/03/2003'
    },
]);

</script>
<template>
    <img src="" alt="">
    <h1>Blog pages</h1>
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-9/12 px-4">
                <BlogList :posts="allPost"/>
            </div>

            <div class="w-full lg:w-3/12 px-4 ">
                <BlogSidebar :posts="allPost" />
            </div>

        </div>
    </div>
</template>