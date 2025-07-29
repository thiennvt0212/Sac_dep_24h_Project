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
            <h3>Danh mục</h3>
            <ul>
                <li><a href="#">Beauty Serum <span>(4)</span></a></li>
                <li><a href="#">CBD Cookies <span>(4)</span></a></li>
                <li><a href="#">CBD Pastries <span>(4)</span></a></li>
                <li><a href="#">Face Cream <span>(4)</span></a></li>
                <li><a href="#">Hemp Edibles <span>(4)</span></a></li>
                <li><a href="#">Medication <span>(4)</span></a></li>
            </ul>
        </div>

        <div>
            <h3>Bài viết mới nhất</h3>
            <div>
                <div v-for="post in props.posts.slice(0, 5)" :key="post.id" class="mb-6 flex justify-between items-center pb-2 border-b-2 border-dashed">
                    <img :src="post.image" alt="" class="w-20 h-20 object-cover mb-2">
                    <p class="text-xl px-3 mb-2">{{ post.title }}</p>
                </div>
            </div>
            <div class="flex justify-end">
                <a href="#" class="hover-underline  relative inline-block uppercase text-[14px] tracking-widest hover:text-[#b67e53] leading-1 transition ease delay-75">Xem tất cả</a>

            </div>
        </div>
    </div>
</template>
<style scoped>
.hover-underline::after {
  /* Tạo thanh gạch chân bằng ::after */
  content: '';
  position: absolute;
  bottom: 5px; /* cách chữ một chút */
  left: 0;
  width: 100%;
  height: 8px;
  background: rgba(182, 126, 83, 0.3); /* cùng màu với chữ */
  
  /* Ban đầu: thanh co lại (không thấy) */
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease-in-out;
}

/* Khi hover: thanh mở rộng từ trái sang phải */
.hover-underline:hover::after {
  transform: scaleX(1);
}
</style>