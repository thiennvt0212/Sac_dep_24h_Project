<script setup>
import { onMounted, ref } from "vue";
import imageCard1 from "../assets/Image/CA-bnr-1.webp";
import imageCard2 from "../assets/Image/CA-bnr-2.webp";
import bgImage from "../assets/Image/banner.png";
import bannerImage from "@/assets/Image/banner-san-pham.png";
import api from "../api/axiosClient";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
const users = ref([]);
onMounted( async ()=> {
  try{
    const response = await api.get("/users");
    users.value = response;
  }catch(error) {
    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
    alert("Lỗi khi lấy dữ liệu người dùng. Vui lòng thử lại sau.");
  }
  
})
const router = useRouter();
const auth = useAuthStore();

const showLoginPassword = ref(false);
const showRegisterPassword = ref(false);

const username = ref("");
const passwordLogin = ref("");

const registerFullName = ref("");
const registerUsername = ref("");
const registerEmail = ref("");
const registerPassword = ref("");

const handleLogin = () => {
  if(!username.value || !passwordLogin.value) {
    alert("Vui lòng nhập tên đăng nhập và mật khẩu.");
    return;
  }
  const matchedUser = users.value.find(
    (user) => (user.username === username.value) && (user.password === passwordLogin.value) 
  );

  if(matchedUser) {
    alert("Đăng nhập thành công!");
    auth.login(matchedUser);
    if(matchedUser.role === "admin") {
      router.push("/admin/product"); // Chuyển hướng đến trang quản trị nếu là admin
    } else {
      router.push("/"); // Chuyển hướng về trang chủ nếu là người dùng thường
    }
    

  } else {
    console.error("Tên đăng nhập hoặc mật khẩu không đúng.");
    alert("Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại.");
  }
};

const handleRegister = async () => {
  // Kiểm tra dữ liệu đầu vào
  if (!registerUsername.value || !registerEmail.value || !registerPassword.value) {
    console.log("registerUsername.value: ", registerUsername.value);
    console.log("registerEmail.value: ", registerEmail.value);
    console.log("registerPassword.value: ", registerPassword.value);
    alert("Vui lòng điền đầy đủ thông tin.");
    return;
  }
  // Kiểm tra định dạng email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(registerEmail.value)) {
    alert("Email không hợp lệ.");
    return;
  }
  // Kiểm tra mật khẩu (ít nhất 6 ký tự)
  if (registerPassword.value.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return;
  }
  try {
    // Kiểm tra xem email đã tồn tại chưa
    const response = await api.get("/users");
    const usersList = response;
    const existingUser = usersList.find(user => user.email === registerEmail.value);

    if (existingUser) {
      alert("Email này đã được sử dụng. Vui lòng dùng email khác.");
      return;
    }

    // Tạo user mới
    const newUser = {
      fullName: registerFullName.value,
      username: registerUsername.value,
      email: registerEmail.value,
      password: registerPassword.value, 
    };

    // Gửi lên API (nếu backend hỗ trợ)
    await api.post("/users", newUser);

    // Hoặc thêm vào danh sách tạm (frontend-only)
    //users.value.push(newUser);

    // Thông báo thành công
    auth.login(newUser); // Đăng nhập ngay sau khi đăng ký
    router.push("/"); // Chuyển hướng về trang chủ
    alert("Đăng ký thành công! Bạn có thể đăng nhập ngay.");

    // Reset form
    registerUsername.value = "";
    registerEmail.value = "";
    registerPassword.value = "";
    router.push("/")
    // Tự động chuyển sang tab đăng nhập (nếu có) hoặc đăng nhập luôn
    // Ví dụ: chuyển về login
    // Có thể emit event nếu dùng trong modal
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    alert("Đăng ký thất bại. Vui lòng thử lại sau.");
  }
};
</script>

<template>
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
        My account
      </h1>
      <p class="text-white text-sm mt-2">
        <a
          href="/"
          class="hover:underline opacity-80 text-white capitalize pr-4"
          >TRANG CHỦ</a
        >
        /
        <span class="opacity-70 text-orange-400 capitalize pl-4"
          >My ACCOUNT</span
        >
      </p>
    </div>
  </div>
  <div class="min-h-screen bg-[#fdf3f2] pt-[100px] pb-[20px]">
    <div
      class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-[80px] pr-[30px] pl-[30px]"
    >
      <div>
        <h2 class="text-2xl font-semibold mb-6">Đăng nhập</h2>
        <form @submit.prevent="handleLogin">
          <input
            v-model="username"
            type="text"
            placeholder="Tên đăng nhập hoặc Email"
            class="w-full border pt-[10px] pb-[10px] pl-[20px] pr-[20px] outline-none bg-transparent action-input leading-[38px] text-[16px] font-light"
          />
          <div class="relative mt-[30px]">
            <input
              v-model="passwordLogin"
              :type="showLoginPassword ? 'text' : 'password'"
              placeholder="Mật khẩu"
              class="w-full border p-3 pr-10 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
            />
            <span
              class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              @click="showLoginPassword = !showLoginPassword"
            >
            </span>
          </div>

          <div class="flex items-center justify-between mt-[30px]">
            <button
              type="submit"
              class="bg-[#b8743d] text-white px-6 py-2 font-semibold"
            >
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

      <div>
        <h2 class="text-2xl font-semibold mb-6">Đăng ký</h2>
        <form class="" @submit.prevent="handleRegister">
          <input
            v-model="registerFullName"
            type="text"
            placeholder="Full Name"
            class="w-full border p-3 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
          />
          <input
            v-model="registerUsername"
            type="text"
            placeholder="Tên người dùng"
            class="w-full border p-3 outline-none bg-transparent mt-[30px] action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
          />
          <input
            v-model="registerEmail"
            type="email"
            placeholder="Địa chỉ Email"
            class="w-full border p-3 outline-none bg-transparent mt-[30px] action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
          />
          <div class="relative mt-[30px]">
            <input
              v-model="registerPassword"
              :type="showRegisterPassword ? 'text' : 'password'"
              placeholder="Mật khẩu"
              class="w-full border p-3 pr-10 outline-none bg-transparent action-input pt-[10px] pb-[10px] pl-[20px] pr-[20px] leading-[38px] text-[16px] font-light"
            />
            <span
              class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              @click="showRegisterPassword = !showRegisterPassword"
            >
            </span>
          </div>
          <p class="text-sm mt-[30px]">
            Dữ liệu cá nhân của bạn sẽ được sử dụng để hỗ trợ trải nghiệm của
            bạn trên toàn bộ trang web này, để quản lý quyền truy cập vào tài
            khoản của bạn và cho các mục đích khác được mô tả trong
            <a href="#" class="underline">chính sách riêng tư</a> của chúng tôi.
          </p>
          <button
            type="submit"
            class="bg-[#b8743d] text-white px-6 py-2 font-semibold mt-[30px]"
          >
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
</template>
