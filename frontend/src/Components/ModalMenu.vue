<script setup>
import image1 from "../assets/Image/image-modal-menu-1.webp";
import image2 from "../assets/Image/image-modal-menu-2.webp";
</script>

<template>
    <div class="flex flex-row  pt-[40px] pb-[40px] border-t-[1px] border-t-[var(--button-color)] bg-white absolute left-0 z-10 right-0 top-[100px]">
        <div class="basis-1/5 flex p-[10px] flex flex-col pl-[20px] pr-[20px]">
            <div >
                <h3 class="text-[18px] pb-[10px] border-b-[1px] border-black border-dashed font-medium text-black">Chăm sóc gia mặt</h3>
            </div>
            <div>
                <ul>
                <li class="pt-[5px] mb-[10px]"><a>Tẩy tế bào da</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Kem dưỡng</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Tẩy trang</a></li>
                <li class="pt-[5px] mb-[10px]"><a>chống nắng</a></li>
                <li class="pt-[5px] mb-[10px]"><a>sửa rửa mặt</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Tinh chất/serum</a></li>
            </ul>
            </div>
        </div>
        <div class="basis-1/5 flex">
            <div>
                <img :src="image1" alt="image" class="w-[280px] h-[270px]"/>
            </div>
        </div>
        <div class="basis-1/5 flex p-[10px] flex flex-col pl-[20px] pr-[20px]">
            <div >
                <h3 class="text-[18px] pb-[10px] border-b-[1px] border-black border-dashed font-medium text-black">Bộ trang điểm</h3>
            </div>
            <div>
                <ul>
                <li class="pt-[5px] mb-[10px]"><a>Tẩy trang</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Sữa rửa mặt</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Chống nắng</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Phấn nước</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Kem nền</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Má hồng</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Phấn phủ</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Kem lót</a></li>
            </ul>
            </div>
        </div>
        <div class="basis-1/5 flex p-[10px] flex flex-col pl-[20px] pr-[20px]">
            <div >
                <h3 class="text-[18px] pb-[10px] border-b-[1px] border-black border-dashed font-medium text-black">Vấn đề da</h3>
            </div>
            <div>
                <ul>
                <li class="pt-[5px] mb-[10px]"><a>Mụn thâm</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Da khô</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Da nhạy cảm</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Sắc tố</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Lỗ chân lông to</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Quầng thâm</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Đỏ & ửng da</a></li>
                <li class="pt-[5px] mb-[10px]"><a>Nếp nhăn</a></li>
            </ul>
            </div>
        </div>
        <div class="basis-1/5 flex">
            <img :src="image2" alt="image" class="w-[280px] h-[270px]"/>
        </div>
    </div>
</template>

<style></style>
