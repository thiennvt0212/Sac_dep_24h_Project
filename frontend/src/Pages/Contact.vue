
<template>
<img :src="bgImage" alt="banner"/>
  <section class="bg-pink-50 py-12">
    <div class="max-w-5xl mx-auto px-4">
      <div class="flex flex-col items-center mb-2">
        <span class="text-base text-gray-800 tracking-wide mb-2">LIÊN HỆ</span>
        <div class="flex items-center w-full mb-8">
          <hr class="flex-1 border-t border-dashed border-gray-400 mx-4" />
          <span class="text-4xl font-semibold text-gray-900 text-center whitespace-nowrap">Thông tin cửa hàng</span>
          <hr class="flex-1 border-t border-dashed border-gray-400 mx-4" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div class="bg-white rounded shadow p-8 text-center">
          <h3 class="text-3xl font-normal mb-8 text-gray-900">Hà Nội</h3>
          <div class="flex flex-col items-start gap-6 text-left">
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">1073/23 Cách Mạng Tháng 8, P.7,<br/>Q.Tân Bình, TP.HCM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0118 0c0 5-9 9-9 9s-9-4-9-9z"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">(+84) 0313-728-397</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M3 8l9 7 9-7"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">info@themona.global</span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-8 text-center">
          <h3 class="text-3xl font-normal mb-8 text-gray-900">Đà Nẵng</h3>
          <div class="flex flex-col items-start gap-6 text-left">
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">1073/23 Cách Mạng Tháng 8, P.7,<br/>Q.Tân Bình, TP.HCM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0118 0c0 5-9 9-9 9s-9-4-9-9z"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">(+84) 0313-728-397</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M3 8l9 7 9-7"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">info@themona.global</span>
            </div>
          </div>
        </div>
        <div class="bg-white rounded shadow p-8 text-center">
          <h3 class="text-3xl font-normal mb-8 text-gray-900">Hồ Chí Minh</h3>
          <div class="flex flex-col items-start gap-6 text-left">
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">1073/23 Cách Mạng Tháng 8, P.7,<br/>Q.Tân Bình, TP.HCM</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 12a9 9 0 0118 0c0 5-9 9-9 9s-9-4-9-9z"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">(+84) 0313-728-397</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="text-[#b5855b]">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/><path d="M3 8l9 7 9-7"/></svg>
              </span>
              <span class="text-[#b5855b] text-lg">info@themona.global</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Thêm phần liên hệ dưới đây -->
      <div class="flex flex-wrap gap-8 mb-8">
        <!-- Form liên hệ -->
        <div class="bg-pink-50 p-8 flex-1 min-w-[320px]">
          <div class="text-base text-gray-900 mb-2 tracking-wide">FORM LIÊN HỆ</div>
          <div class="text-4xl font-light mb-8 text-gray-900">Liên hệ ngay nếu có thắc mắc</div>
          <form @submit.prevent="onSubmit" class="flex flex-col gap-6">
            <input
              v-model="form.name"
              type="text"
              placeholder="Họ tên"
              required
              class="border border-[#b5855b] px-4 py-3 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
              class="border border-[#b5855b] px-4 py-3 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            />
            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Nội dung"
              required
              class="border border-[#b5855b] px-4 py-3 bg-white text-base text-gray-700 placeholder-gray-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              :disabled="loading"
              class="bg-[#b5855b] text-white uppercase font-semibold text-lg w-[180px] h-[60px] flex items-center justify-center rounded-none mt-4 focus:outline-none"
            >
              {{ loading ? 'Đang gửi...' : 'LIÊN HỆ' }}
            </button>
            <div v-if="submitted" class="text-green-600 mt-2">Gửi thành công! Chúng tôi sẽ liên hệ lại sớm nhất.</div>
          </form>
        </div>
        <!-- Google Map -->
        <div class="rounded-xl overflow-hidden flex-1 min-w-[320px] h-[500px] shadow">
          <iframe
            src="https://www.google.com/maps?q=1073/23+Cách+Mạng+Tháng+Tám,+P.7,+Tân+Bình,+Hồ+Chí+Minh&output=embed"
            width="100%"
            height="100%"
            class="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <!-- Kết thúc phần liên hệ -->
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';


</script>
<template>
    <h1>Contact us pages</h1>
</template>