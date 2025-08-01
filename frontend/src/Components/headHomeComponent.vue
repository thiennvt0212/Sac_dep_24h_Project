<template>
  <div class="relative">
    <img
      src="../assets/Image/homeHeadImg.jpg"
      class="bg-no-repeat object-contain w-full brightness-75"
      alt="head"
    />
    <div
      class="flex items-center justify-between absolute top-0 right-0 left-0 bottom-0"
    >
      <span
        class="p-11 hidden lg:block cursor-pointer text-white text-3xl transition duration-500 hover:text-[#B67E53]"
        @click="onClickDecrSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </span>
      <div class="flex items-center justify-around lg:justify-between flex-1">
        <transition name="slide" mode="out-in">
          <div :key="visibleCount">
            <h1
              class="text-white text-5xl whitespace-normal text-center md:text-left w-[20rem] p-2 pb-4 md:pb-16 capitalize"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              {{ data[visibleCount]?.title }}
            </h1>
            <div
              class="flex p-2 items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <button
                class="text-white px-6 mr-4 py-2 rounded font-medium text-xs bg-[#B67E53] hover:bg-[#86B85E] transition duration-500 uppercase"
              >
                {{ data[visibleCount].btnBuy }}
              </button>
              <button
                class="text-white px-6 py-2 rounded font-medium text-xs bg-[#86B85E] hover:bg-[#B67E53] transition duration-500 uppercase"
              >
                {{ data[visibleCount].btnContent }}
              </button>
            </div>
          </div>
        </transition>
        <img
          src="../assets/Image/buyNowHome.png"
          alt="Buy now"
          class="h-[10rem] w-[11rem] bg-no-repeat object-contain hidden md:block"
          data-aos="flip-left"
          data-aos-duration="1000"
        />
      </div>
      <span
        class="p-11 hidden lg:block cursor-pointer text-white text-3xl transition duration-500 hover:text-[#B67E53]"
        @click="onClickAddSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div>
    <div
      class="hidden lg:flex flex-col absolute items-center bottom-10 right-0 left-0 text-center text-sm text-black font-medium hover:text-[#B67E53] duration-500 cursor-pointer animate-bounce"
    >
      <font-awesome-icon :icon="['fas', 'chevron-down']" class="relative" />
      <a href="#itd__product">SCROLL DOWN</a>
    </div>
    <div class="flex lg:hidden justify-center absolute bottom-0 right-0 left-0">
      <span
        class="p-3 cursor-pointer text-white text-xl transition duration-500 hover:text-[#B67E53]"
        @click="onClickDecrSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" />
      </span>
      <span
        class="p-3 cursor-pointer text-white text-xl transition duration-500 hover:text-[#B67E53]"
        @click="onClickAddSlide"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    data: { type: Array, required: true },
    visibleCount: { type: Number, required: true },
  },
  methods: {
    onClickAddSlide() {
      this.$emit("onClickAddSlide");
    },
    onClickDecrSlide() {
      this.$emit("onClickDecrSlide");
    },
  },
};
</script>
