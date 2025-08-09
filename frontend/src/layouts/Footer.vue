<script setup>
import logo from "../assets/Image/logo-1-black.png";
</script>

<template>
  <div class="pl-[30px] pr-[30px] pt-[80px] bg-[#e2dfcc] text-black">
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
                <a>Trang chủ</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Danh mục</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Giới thiệu</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Tin tức</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Liên hệ</a>
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
                <a>Điều khoản dịch vụ</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Thông tin giao hàng</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Theo dõi đơn hàng</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Phương thức thanh toán</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Vận chuyển và giao hàng</a>
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
                <a>Chính sách quyền riêng tư</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Chính sách vận chuyển</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Chính sách giao hàng</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Chính sách thanh toán</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a>Chính sách đổi trả</a>
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
                <a>
                  <font-awesome-icon
                    :="['fas', 'location-dot']"
                    class="pr-[5px]"
                  />Địa chỉ: 1073/23 CMT8, p.7, Q.Tân Bình, TP.HCM
                  </a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a><font-awesome-icon
                    :icon="['fas', 'phone-volume']"
                    class="pr-[5px]"
                  />(+84) 0313-728-397</a>
              </li>
              <li class="pt-[6px] pb-[6px] font-light hover-primary cursor-pointer">
                <a><font-awesome-icon
                    :icon="['fas', 'envelope']"
                    class="pr-[5px]"
                  />info@themona.global</a>
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
