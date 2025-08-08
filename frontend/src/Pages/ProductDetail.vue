<template>
  <div class="max-w-screen-2xl w-full bg-[#fdf3f2]">
    <div
      class="relative bg-cover bg-center h-[500px]"
      :style="{ backgroundImage: `url(${bannerImage})` }"
    >
      <!-- Tiêu đề banner -->
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center"
      >
        <h1
          class="text-6xl font-light text-white mb-30 tracking-wide capitalize pb-8"
        >
          Sản Phẩm
        </h1>
        <p class="text-white text-sm mt-2">
          <a
            href="/"
            class="hover:underline opacity-80 text-white capitalize pr-4"
            >TRANG CHỦ</a
          >
          /
          <router-link to="/products" class="capitalize px-4"
            >Beauty Products</router-link
          >
          /
          <span class="opacity-70 text-orange-400 capitalize pl-4"
            >Anti Pigmentation Combo</span
          >
        </p>
      </div>
    </div>
    <div class="flex py-24 px-8">
      <div class="flex w-full gap-3">
        <div class="flex flex-col gap-2">
          <div class="aspect-[138/133] w-[138px]">
            <img
              src="../assets//Image//blogImg2.png"
              alt=""
              class="w-full h-full rounded-xl bg-contain bg-no-repeat"
            />
          </div>
          <div class="aspect-[138/133] w-[138px]">
            <img
              src="../assets//Image//blogImg2.png"
              alt=""
              class="w-full h-full rounded-xl bg-contain bg-no-repeat"
            />
          </div>
          <div class="aspect-[138/133] w-[138px]">
            <img
              src="../assets//Image//blogImg2.png"
              alt=""
              class="w-full h-full rounded-xl bg-contain bg-no-repeat"
            />
          </div>
          <div class="aspect-[138/133] w-[138px]">
            <img
              src="../assets//Image//blogImg2.png"
              alt=""
              class="w-full h-full rounded-xl bg-contain bg-no-repeat"
            />
          </div>
        </div>
        <div class="aspect-[577/561] w-[577px]">
          <img
            src="../assets//Image//blogImg2.png"
            alt=""
            class="w-full h-full rounded-xl bg-contain bg-no-repeat"
          />
        </div>
      </div>
      <div class="flex flex-col text-black ml-14 justify-start">
        <div class="flex flex-col justify-start border-b border-gray-600">
          <h1 class="text-black text-4xl font-medium">
            Anti Pigmentation Combo
          </h1>
          <div class="flex py-5 text-2xl">
            <span class="text-[#8d8d8d] relative font-medium"
              >500,000 đ
              <div
                class="absolute h-[2px] w-full rotate-[170deg] bottom-3 bg-[#cf2e2e]"
              ></div>
            </span>
            <span class="text-[#cf2e2e] ml-3 font-medium">419,000 ₫</span>
          </div>
        </div>
        <div class="flex flex-col justify-start border-b border-gray-600">
          <p class="py-6 text-md font-medium">
            Rhoncus est pellentesque elit ullamcorper. Consequat ac felis donec
            et odio pellentesque diam. Elementum nibh tellus molestie nunc non
            blandit massa enim nec. Ipsum consequat nisl vel pretium.
          </p>
          <div class="flex">
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fa', 'minus']"
                class="text-xs p-3 border border-[#d8cfce] rounded-tl-lg rounded-bl-lg hover:text-[#B67E53] transition duration-300 cursor-pointer"
              />
              <span
                class="text-lg border-y h-[38px] w-[38px] text-center border-[#d8cfce] content-center hover:text-[#B67E53] transition duration-300"
                >1</span
              >
              <font-awesome-icon
                :icon="['fa', 'plus']"
                class="text-xs p-3 border border-[#d8cfce] rounded-tr-lg rounded-br-lg hover:text-[#B67E53] transition duration-300 cursor-pointer"
              />
            </div>
            <button
              class="flex items-center uppercase ml-4 px-4 py-2 bg-[#B67E53] text-white rounded-lg text-sm font-medium hover:bg-[#86b85e] transition duration-300"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          <div class="flex mt-5">
            <button
              class="uppercase cursor-pointer px-4 py-2 bg-[#B67E53] text-white rounded-lg text-sm font-medium hover:bg-[#86b85e] transition duration-300"
            >
              Yêu thích
            </button>
            <button
              class="uppercase cursor-pointer ml-4 px-4 py-2 bg-[#B67E53] text-white rounded-lg text-sm font-medium hover:bg-[#86b85e] transition duration-300"
            >
              Mua ngay
            </button>
          </div>
          <div class="flex items-center my-6">
            <font-awesome-icon
              :icon="['fa', 'cart-shopping']"
              class="text-xs text-[#B67E53] mr-2"
            />
            <span>
              Đặt hàng trong
              <span class="underline text-[#B67E53]">11 hours 01 minutes</span>
              tiếp theo để nhận hàng trước
              <span class="underline text-[#B67E53]">16/08/2025</span>
            </span>
          </div>
          <div class="flex items-center mb-6">
            <font-awesome-icon
              :icon="['fa', 'cart-shopping']"
              class="text-xs text-[#B67E53] mr-2"
            />
            <span>
              Khách truy cập
              <span class="bg-[#B67E53] p-1 rounded-lg text-white">209</span>
              theo thời gian thực ngay bây giờ
            </span>
          </div>
        </div>
        <div class="flex flex-col">
          <img
            src="https://sacdep24.monamedia.net/wp-content/uploads/2023/03/product-payment.png"
            alt=""
            class="h-[23px] w-[340px] mt-4"
          />
          <span class="font-medium mt-2"
            >Mã sản phẩm: Woo-tshirt-logo-1-8
          </span>
          <span class="font-medium">Danh mục: Beauty Products</span>
        </div>
      </div>
    </div>
    <div class="flex pb-24 px-8 justify-between text-black">
      <div class="aspect-[647/430] w-[647px] h-[430px]">
        <img
          src="../assets/Image/CA-bnr-2.webp"
          alt=""
          class="w-full h-full bg-contain bg-no-repeat"
        />
      </div>
      <transition name="fade" mode="out-in">
        <div class="flex flex-col w-[657px] gap-3">
          <div class="flex flex-col bg-[#e1dfcc] px-6 py-3">
            <h3
              @click="activeTab = 'tab1'"
              class="text-xl font-medium flex justify-between items-center"
              ref="element"
            >
              Mô tả
              <font-awesome-icon
                :class="{ hidden: activeTab != 'tab1' }"
                :icon="['fa', 'minus']"
              />
              <font-awesome-icon
                :class="{ hidden: activeTab == 'tab1' }"
                :icon="['fa', 'plus']"
              />
            </h3>
            <p class="mt-8 mb-2" v-show="activeTab == 'tab1'">
              Est ullamcorper eget nulla facilisi etiam dignissim diam quis.
              Suspendisse faucibus interdum posuere lorem ipsum dolor. Nisl
              condimentum id venenatis a. Ultricies lacus sed turpis tincidunt
              id aliquet risus. Nibh sed pulvinar proin gravida hendrerit lectus
              a. Phasellus vestibulum lorem sed risus ultricies. Ipsum dolor sit
              amet consectetur adipiscing elit duis tristique. Eu non diam
              phasellus vestibulum. Risus viverra adipiscing at in congue
              quisque egestas tellus. Viverra nam libero justo laoreet sit amet
              cursus sit. Eu mi bibendum neque egestas congue quisque egestas
              diam in. Netus et malesuada fames ac turpis egestas sed. Ultrices
              gravida dictum fusce ut placerat orci nulla. Consectetur lorem
              donec massa sapien faucibus. Consectetur lorem donec massa sapien.
            </p>
          </div>
          <div class="flex flex-col bg-[#e1dfcc] px-6 py-3">
            <h3
              @click="activeTab = 'tab2'"
              class="text-xl font-medium flex justify-between items-center"
            >
              Mô tả
              <font-awesome-icon
                :class="{ hidden: activeTab != 'tab2' }"
                :icon="['fa', 'minus']"
              />
              <font-awesome-icon
                :class="{ hidden: activeTab == 'tab2' }"
                :icon="['fa', 'plus']"
              />
            </h3>
            <p class="mt-8 mb-2" v-show="activeTab == 'tab2'">
              Est ullamcorper eget nulla facilisi etiam dignissim diam quis.
              Suspendisse faucibus interdum posuere lorem ipsum dolor. Nisl
              condimentum id venenatis a. Ultricies lacus sed turpis tincidunt
              id aliquet risus. Nibh sed pulvinar proin gravida hendrerit lectus
              a. Phasellus vestibulum lorem sed risus ultricies. Ipsum dolor sit
              amet consectetur adipiscing elit duis tristique. Eu non diam
              phasellus vestibulum. Risus viverra adipiscing at in congue
              quisque egestas tellus. Viverra nam libero justo laoreet sit amet
              cursus sit. Eu mi bibendum neque egestas congue quisque egestas
              diam in. Netus et malesuada fames ac turpis egestas sed. Ultrices
              gravida dictum fusce ut placerat orci nulla. Consectetur lorem
              donec massa sapien faucibus. Consectetur lorem donec massa sapien.
            </p>
          </div>
          <div class="flex flex-col bg-[#e1dfcc] px-6 py-3">
            <h3
              @click="activeTab = 'tab3'"
              class="text-xl font-medium flex justify-between items-center"
            >
              Mô tả
              <font-awesome-icon
                :class="{ hidden: activeTab != 'tab3' }"
                :icon="['fa', 'minus']"
              />
              <font-awesome-icon
                :class="{ hidden: activeTab == 'tab3' }"
                :icon="['fa', 'plus']"
              />
            </h3>
            <p class="mt-8 mb-2" v-show="activeTab == 'tab3'">
              Est ullamcorper eget nulla facilisi etiam dignissim diam quis.
              Suspendisse faucibus interdum posuere lorem ipsum dolor. Nisl
              condimentum id venenatis a. Ultricies lacus sed turpis tincidunt
              id aliquet risus. Nibh sed pulvinar proin gravida hendrerit lectus
              a. Phasellus vestibulum lorem sed risus ultricies. Ipsum dolor sit
              amet consectetur adipiscing elit duis tristique. Eu non diam
              phasellus vestibulum. Risus viverra adipiscing at in congue
              quisque egestas tellus. Viverra nam libero justo laoreet sit amet
              cursus sit. Eu mi bibendum neque egestas congue quisque egestas
              diam in. Netus et malesuada fames ac turpis egestas sed. Ultrices
              gravida dictum fusce ut placerat orci nulla. Consectetur lorem
              donec massa sapien faucibus. Consectetur lorem donec massa sapien.
            </p>
          </div>
        </div>
      </transition>
    </div>
    <div class="flex flex-col text-black pb-24 px-8">
      <div class="flex flex-col items-center justify-center mb-8">
        <h2 class="uppercase text-xl">top-rated</h2>
        <h1 class="text-5xl font-normal">
          -------------------------Sản phẩm tương tự------------------------
        </h1>
      </div>
      <div class="flex gap-7">
        <div class="flex flex-col items-center group">
          <div class="relative aspect-[342/333] w-full max-w-[342px]">
            <img
              src="../assets/Image/shop-23-1.webp "
              alt="skin"
              class="object-cover rounded-md w-full h-full"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex opacity-0 group-hover:opacity-100 justify-center items-center transition duration-500 uppercase"
            >
              <div
                class="cursor-pointer bg-[#B67E53] px-3 py-2 text-xs text-white rounded-sm uppercase font-medium"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
            <div
              class="absolute top-2 right-2 bg-[#B67E53] px-2 py-1 text-[8px] text-white rounded-sm uppercase font-medium"
            >
              Sale
            </div>
          </div>

          <h2 class="uppercase text-sm pt-4 font-medium">
            Skin Nourishing Serum
          </h2>
          <p class="capitalize text-xs py-1">Beauty Products</p>
          <div class="flex">
            <span class="text-[#8d8d8d] relative font-medium"
              >500,000 đ
              <div
                class="absolute h-[2px] w-full rotate-[170deg] bottom-3 bg-[#cf2e2e]"
              ></div>
            </span>
            <span class="text-[#cf2e2e] ml-3 font-medium">419,000 ₫</span>
          </div>
        </div>
        <div class="flex flex-col items-center group">
          <div class="relative aspect-[342/333] w-full max-w-[342px]">
            <img
              src="../assets/Image/shop-23-1.webp "
              alt="skin"
              class="object-cover rounded-md w-full h-full"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex opacity-0 group-hover:opacity-100 justify-center items-center transition duration-500 uppercase"
            >
              <div
                class="cursor-pointer bg-[#B67E53] px-3 py-2 text-xs text-white rounded-sm uppercase font-medium"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
            <div
              class="absolute top-2 right-2 bg-[#B67E53] px-2 py-1 text-[8px] text-white rounded-sm uppercase font-medium"
            >
              Sale
            </div>
          </div>

          <h2 class="uppercase text-sm pt-4 font-medium">
            Skin Nourishing Serum
          </h2>
          <p class="capitalize text-xs py-1">Beauty Products</p>
          <div class="flex">
            <span class="text-[#8d8d8d] relative font-medium"
              >500,000 đ
              <div
                class="absolute h-[2px] w-full rotate-[170deg] bottom-3 bg-[#cf2e2e]"
              ></div>
            </span>
            <span class="text-[#cf2e2e] ml-3 font-medium">419,000 ₫</span>
          </div>
        </div>
        <div class="flex flex-col items-center group">
          <div class="relative aspect-[342/333] w-full max-w-[342px]">
            <img
              src="../assets/Image/shop-23-1.webp "
              alt="skin"
              class="object-cover rounded-md w-full h-full"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex opacity-0 group-hover:opacity-100 justify-center items-center transition duration-500 uppercase"
            >
              <div
                class="cursor-pointer bg-[#B67E53] px-3 py-2 text-xs text-white rounded-sm uppercase font-medium"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
            <div
              class="absolute top-2 right-2 bg-[#B67E53] px-2 py-1 text-[8px] text-white rounded-sm uppercase font-medium"
            >
              Sale
            </div>
          </div>

          <h2 class="uppercase text-sm pt-4 font-medium">
            Skin Nourishing Serum
          </h2>
          <p class="capitalize text-xs py-1">Beauty Products</p>
          <div class="flex">
            <span class="text-[#8d8d8d] relative font-medium"
              >500,000 đ
              <div
                class="absolute h-[2px] w-full rotate-[170deg] bottom-3 bg-[#cf2e2e]"
              ></div>
            </span>
            <span class="text-[#cf2e2e] ml-3 font-medium">419,000 ₫</span>
          </div>
        </div>
        <div class="flex flex-col items-center group">
          <div class="relative aspect-[342/333] w-full max-w-[342px]">
            <img
              src="../assets/Image/shop-23-1.webp "
              alt="skin"
              class="object-cover rounded-md w-full h-full"
            />
            <div
              class="absolute top-0 left-0 right-0 bottom-0 flex opacity-0 group-hover:opacity-100 justify-center items-center transition duration-500 uppercase"
            >
              <div
                class="cursor-pointer bg-[#B67E53] px-3 py-2 text-xs text-white rounded-sm uppercase font-medium"
              >
                Thêm vào giỏ hàng
              </div>
            </div>
            <div
              class="absolute top-2 right-2 bg-[#B67E53] px-2 py-1 text-[8px] text-white rounded-sm uppercase font-medium"
            >
              Sale
            </div>
          </div>

          <h2 class="uppercase text-sm pt-4 font-medium">
            Skin Nourishing Serum
          </h2>
          <p class="capitalize text-xs py-1">Beauty Products</p>
          <div class="flex">
            <span class="text-[#8d8d8d] relative font-medium"
              >500,000 đ
              <div
                class="absolute h-[2px] w-full rotate-[170deg] bottom-3 bg-[#cf2e2e]"
              ></div>
            </span>
            <span class="text-[#cf2e2e] ml-3 font-medium">419,000 ₫</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import bannerImage from "@/assets/Image/banner-san-pham.png";
import { ref } from "vue";

const activeTab = ref("tab1");
</script>
<style></style>
