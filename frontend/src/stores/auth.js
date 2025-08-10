// stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        currentUser: null
    }),

    actions: {
        login(user) {
            this.currentUser = user
            // Lưu vào localStorage để persist
            localStorage.setItem('user', JSON.stringify(user))
        },

        logout() {
            this.currentUser = null
            localStorage.removeItem('user')
        },

        // Dùng để khởi tạo khi app chạy
        initialize() {
            const savedUser = localStorage.getItem('user')
            if (savedUser) {
                this.currentUser = JSON.stringify(savedUser)
            }
        }
    },

    getters: {
        isLoggedIn: (state) => !!state.currentUser
    }
})