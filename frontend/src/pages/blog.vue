<script setup>
import { ref } from 'vue';
import BlogList from '@/Components/Blog/BlogList.vue';
import BlogSidebar from '@/Components/Blog/BlogSidebar.vue';


</script>
<template>
    <h1>Blog pages</h1>
    <div class="container mx-auto px-4">
        <div class="flex flex-wrap -mx-4">
            <div class="w-full lg:w-9/12 px-4 bg-red-600">
                <BlogList />
            </div>

            <div class="w-full lg:w-3/12 px-4 bg-slate-600">
                <BlogSidebar />
            </div>

        </div>
    </div>
</template>