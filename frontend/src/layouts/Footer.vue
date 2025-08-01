
<script setup>
import logo from "../assets/Image/logo-1-black.png";
</script>

<template>
  <div class="pl-[30px] pr-[30px] pt-[80px] bg-[#e2dfcc]">
    <div class="flex flex-row pb-[50px]">
      <div class="flex-[2] flex">
        <div class="pr-[36px]">
          <router-link to="/">
            <img :src="logo" alt="logo" class="w-[200px] h-auto mb-[20px]" />
        </router-link>
          <p>
            Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Hac
            habitasse platea dictumst quisque.
          </p>
        </div>
      </div>
      <div class="flex-[6] flex flex-row">
        <div class="basis-1/4">
          <div>
            <h3 class="text-[18px] pb-[10px] font-medium text-black">
              Danh mục
            </h3>
          </div>
          <div>
            <ul>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Trang chủ</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/products">Danh mục</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/introduce">Giới thiệu</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/news">Tin tức</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/contact">Liên hệ</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="basis-1/4">
          <div>
            <h3 class="text-[18px] pb-[10px] font-medium text-black">
              Liên kết
            </h3>
          </div>
          <div>
            <ul>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Điều khoản dịch </router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Thông tin giao hàng</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Theo dõi đơn hàng</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Phương thức thanh toán</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Vận chuyển và giao</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="basis-1/4">
          <div>
            <h3 class="text-[18px] pb-[10px] font-medium text-black">
              Hỗ trợ khách hàng
            </h3>
          </div>
          <div>
            <ul>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Chính sách quyền riêng tư</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Chính sách vận chuyển</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Chính sách giao hàng</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Chính sách thanh toán</router-link>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/">Chính sách đổi trả</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="basis-1/4">
          <div>
            <h3 class="text-[18px] pb-[10px] font-medium text-black">
              Liên hệ
            </h3>
          </div>
          <div>
            <ul>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/"></router-link>
                  <font-awesome-icon
                    :="['fas', 'location-dot']"
                    class="pr-[5px]"
                  /><a>Địa chỉ: 1073/23 CMT8, p.7, Q.Tân Bình, TP.HCM
                  </a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/"></router-link><font-awesome-icon
                    :="['fas', 'phone-volume']"
                    class="pr-[5px]"
                  /><a>(+84) 0313-728-397</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <router-link to="/"></router-link><font-awesome-icon
                    :="['fas', 'envelope']"
                    class="pr-[5px]"
                  /><a>info@themona.global</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t-[1px] border-[#cbc8b7]">
      <p class="pt-[20px] pb-[20px] text-center font-normal">
        Thiết kế và lập trình bởi: 404 Not found
      </p>
    </div>
  </div>
</template>

<style scoped></style>

