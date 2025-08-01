import { Controller, Get, Post, Delete, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@UseGuards(AuthGuard('jwt'))
@Controller('cart')
export class CartController {
    // ✅ Xem giỏ hàng
    @Get()
    async getCart(@Req() req) {
        return prisma.cartItem.findMany({
            where: { userId: req.user.sub },
            include: { product: true },
        });
    }

    // ✅ Thêm vào giỏ hàng
    @Post()
    async addToCart(
        @Req() req,
        @Body() body: { productId: string; quantity?: number },
    ) {
        console.log('🔐 req.user:', req.user); // 🔥 In ra để kiểm tra
        console.log('🧩 req.headers.authorization:', req.headers.authorization);
        // ✅ Kiểm tra req.user
        if (!req.user || !req.user.userId) {
            throw new Error('User not authenticated');
        }
        const { productId, quantity = 1 } = body;
        const userId = req.user.userId;

        return prisma.cartItem.upsert({
            where: { userId_productId: { userId, productId } },
            update: { quantity: { increment: quantity } },
            create: { userId, productId, quantity },
        });
    }

    // ✅ Xóa khỏi giỏ hàng
    @Delete()
    async removeFromCart(@Req() req, @Body() body: { productId: string }) {
        const { productId } = body;
        const userId = req.user.sub;

        const result = await prisma.cartItem.deleteMany({
            where: { userId, productId },
        });

        return { message: `${result.count} item(s) removed from cart` };
    }
}