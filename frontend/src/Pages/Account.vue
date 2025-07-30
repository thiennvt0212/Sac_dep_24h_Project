<script setup>
import { ref } from 'vue'
import imageCard1 from '../assets/Image/CA-bnr-1.webp'
import imageCard2 from '../assets/Image/CA-bnr-2.webp'
import bgImage from '../assets/Image/homeHeadImg.jpg';

const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)
</script>

<template>
 
  <div class="min-h-screen bg-[#fdf3f2] pt-[100px] pb-[20px]">
    <div :style="{ backgroundImage: `url(${bgImage})` }">
    <div class=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] pr-[30px] pl-[30px]">
      <div>
        <h2 class="text-2xl font-semibold mb-6">Đăng nhập</h2>
        <form class="">
          <input
            type="text"
            placeholder="Tên đăng nhập hoặc Email"
            class="w-full border  pt-[10px] pb-[10px] pl-[20px] pr-[20px] outline-none bg-transparent action-input leading-[38px] text-[16px] font-light"
          />
          <div class="relative mt-[30px]">
            <input
              :type="showLoginPassword ? 'text' : 'password'"
              placeholder="Mật khẩu"
              class="w-full border p-3 pr-10 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
            />
            <span
              class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              @click="showLoginPassword = !showLoginPassword"
            >
              👁️
            </span>
          </div>

          <div class="flex items-center justify-between  mt-[30px]">
            <button type="submit" class="bg-[#b8743d] text-white px-6 py-2 font-semibold">
              ĐĂNG NHẬP
            </button>
            <div class="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label for="remember" class="text-sm">Ghi nhớ</label>
            </div>
          </div>
          <div class="text-right mt-2">
            <a href="#" class="text-sm underline">Quên mật khẩu?</a>
          </div>
        </form>
      </div>

      <div >
        <h2 class="text-2xl font-semibold mb-6">Đăng ký</h2>
        <form class="">
          <input
            type="text"
            placeholder="Tên người dùng"
            class="w-full border p-3 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
          />
          <input
            type="email"
            placeholder="Địa chỉ Email"
            class="w-full border p-3 outline-none bg-transparent mt-[30px] action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
          />
          <div class="relative mt-[30px]">
            <input
              :type="showRegisterPassword ? 'text' : 'password'"
              placeholder="Mật khẩu"
              class="w-full border p-3 pr-10 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
            />
            <span
              class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              @click="showRegisterPassword = !showRegisterPassword"
            >
              👁️
            </span>
          </div>
          <p class="text-sm mt-[30px]">
            Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này,
            để quản lý quyền truy cập vào tài khoản của bạn và cho các mục đích khác được mô tả trong
            <a href="#" class="underline">chính sách riêng tư</a> của chúng tôi.
          </p>
          <button type="submit" class="bg-[#b8743d] text-white px-6 py-2 font-semibold mt-[30px]">
            ĐĂNG KÝ
          </button>
        </form>
      </div>
    </div>
     <div class="pt-[80px] pb-[80px] mx-auto grid md:grid-cols-2 gap-6">
      <!-- Card 1 -->
      <div
        class="relative rounded-r-[30px] overflow-hidden text-white h-[400px] flex items-center justify-center text-center p-6"
        :style="{ backgroundImage: `url(${imageCard1})` }"
        style="background-size: cover; background-position: center"
      >
        <div class="bg-black/40 absolute inset-0"></div>
        <div class="relative z-10 max-w-md">
          <h2 class="text-2xl font-semibold mb-4">
            Join Our nature & organic cannabiz
          </h2>
          <p class="text-sm mb-6">
            “NullaMorbi ut libero sit amet justo tempus pellentesque. Duis
            maximus Morbi ut libero sit amet justo tempus pellentesque. Duis
            maximus lacinia quamelementum pretium. Nulla nec purus vel orci
            pellentesque
          </p>
          <button class="bg-[#b8743d] text-white font-semibold px-5 py-2">
            JOIN OUR TEAM
          </button>
        </div>
      </div>

      <!-- Card 2 -->
      <div
        class="relative rounded-l-[30px] overflow-hidden text-white h-[400px] flex items-center justify-center text-center p-6"
        :style="{ backgroundImage: `url(${imageCard2})` }"
        style="background-size: cover; background-position: center"
      >
        <div class="bg-black/40 absolute inset-0"></div>
        <div class="relative z-10 max-w-md">
          <h2 class="text-2xl font-semibold mb-4">
            Tie up nature & organic cannabiz
          </h2>
          <p class="text-sm mb-6">
            “NullaMorbi ut libero sit amet justo tempus pellentesque. Duis
            maximus Morbi ut libero sit amet justo tempus pellentesque. Duis
            maximus lacinia quamelementum pretium. Nulla nec purus vel orci
            pellentesque
          </p>
          <button class="bg-[#b8743d] text-white font-semibold px-5 py-2">
            TIE UP WITH US
          </button>
        </div>
    </div>
  </div>
  </div>
 </div>
   
</template>