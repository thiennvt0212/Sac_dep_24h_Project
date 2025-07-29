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
        <div>
            <img :src="post.image" alt="">
            <p>
                {{ post.date }}
            </p>
        </div>
        <div>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
            <a href="#">Read More</a>
        </div>
    </div>
</template>