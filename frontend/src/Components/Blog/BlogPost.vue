<script setup>
import { ref } from 'vue';
defineProps({
    post: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div>
        <!-- <div class="relative group">
            <img :src="post.image" alt="Image" class="h-[490px] hover:translate-x-[-10px] transition-transform duration-300 ease-in-out">
            <p class="absolute top-4 bg-bgDate py-2 px-4 text-xs tracking-widest group-hover:bg-bgDateHover group-hover:text-white transition ease delay-75">
                {{ post.date }}
            </p>
        </div> -->
        <div class="relative group w-full h-[490px] overflow-hidden rounded-lg">
            <!-- Container cố định, không di chuyển -->
            <div class="w-full h-full relative">
                <!-- Ảnh bên trong sẽ dịch chuyển -->
                <img 
                :src="post.image" 
                alt="Image" 
                class="w-full h-full object-cover 
                        group-hover:translate-x-[-10px] 
                        transition-transform duration-300 ease-in-out rounded-lg"
                >
            </div>

        
        <p class="absolute top-4 left-0 bg-bgDate py-2 px-4 text-xs tracking-widest 
                    group-hover:bg-bgDateHover group-hover:text-white 
                    transition duration-300 ease">
            {{ post.date }}
        </p>
        </div>
        <div>
            <a href="#" class="text-xs uppercase tracking-widest hover:text-[#b67e53] font-light transition ease delay-75 mt-10 mb-6 inline-block">{{ post.type }}</a>
            <h4 class="text-[26px] font-normal hover:text-[#b67e53] transition ease delay-75 leading-tight">
                <a href="#">{{ post.title }}</a>
            </h4>
            <p class="mt-2 mb-3 font-light">{{ post.description }}</p>
            <a href="#" class="uppercase text-[14px] tracking-widest hover:text-[#b67e53] hover:bg-red-50 leading-1 transition ease delay-75">Xem thêm</a>
        </div>
    </div>
</template>