<script setup>

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
})
</script>
<template>
    <div>
        <div>
            <h3 class="text-[22px] border-b-[1px] border-solid border-black pb-2">Danh mục</h3>
            <ul class="mt-7">
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">Beauty Serum </a><span class="font-light">(4)</span></li>
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">CBD Cookies </a><span class="font-light">(4)</span></li>
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">CBD Pastries </a><span class="font-light">(4)</span></li>
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">Face Cream </a><span class="font-light">(4)</span></li>
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">Hemp Edibles </a><span class="font-light">(4)</span></li>
                <li class="mt-2 "><a class="font-light hover:text-[#b67e53]" href="#">Medication </a><span class="font-light">(4)</span></li>
            </ul>
        </div>

        <div class="mt-10">
            <h3 class="text-[22px] border-b-[1px] border-solid border-black pb-2">Bài viết mới nhất</h3>
            <div class="mt-7">
                <div v-for="post in props.posts.slice(0, 5)" :key="post.id" class="mb-6 flex justify-between items-center pb-2 border-b-2 border-dashed cursor-pointer">
                    <img :src="post.image" alt="" class="w-20 h-20 object-cover mb-2">
                    <p class="text-xl px-3 mb-2 hover:text-[#b67e53] transition ease delay-75">{{ post.title }}</p>
                </div>
            </div>
            <div class="flex justify-end">
                <a href="#" class="hover-underline  relative inline-block uppercase text-[14px] tracking-widest hover:text-[#b67e53] leading-1 transition ease delay-75">Xem tất cả</a>

            </div>
        </div>

        <div class="mt-10">
            <h3 class="text-[22px] border-b-[1px] border-solid border-black pb-2">Instagram</h3>
            <div class="mt-7">
                <div class="grid grid-cols-3 gap-3">
                    <a href="#" v-for="post in props.posts.slice(6,12)" :key="post.id">
                        <img :src="post.image" alt="" class="w-full h-30 object-cover">
                    </a>
                </div>
            </div>
        </div>

        <div class="mt-10">
            <h3 class="text-[22px] border-b-[1px] border-solid border-black pb-2">Từ khoá phổ biến</h3>
            <div class="mt-7">
                <a class="bg-[#3a3737] mr-3 py-2 px-4 text-white font-light text-[15px] hover:bg-[#b67e53] transition-all ease-in delay-75" href="#">Edible</a>
                <a class="bg-[#3a3737] py-2 px-4 text-white font-light text-[15px] hover:bg-[#b67e53] transition-all ease-in delay-75" href="#">Non-Edible</a>
            </div>
        </div>
    </div>
</template>
