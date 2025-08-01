import { Controller, Get, Post, Delete, Body, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@UseGuards(AuthGuard('jwt'))
@Controller('favorites')
export class FavoriteController {
    // ✅ Xem danh sách sản phẩm yêu thích
    @Get()
    async getFavorites(@Req() req) {
        console.log('🔐 req.user:', req.user); // Debug

        if (!req.user || !req.user.userId) {
            throw new Error('User not authenticated');
        }
        const user = await prisma.user.findUnique({
            where: { id: req.user.userId },
            include: { favorites: true },
        });

        if (!user) {
            throw new Error('User not found');
        }

        return user.favorites;
    }

    // ✅ Thêm vào yêu thích
    @Post()
    async addToFavorites(@Req() req, @Body() body: { productId: string }) {
        if (!req.user) {
            throw new Error('User not authenticated');
        }
        const { productId } = body;
        const userId = req.user.userId;

        // Kiểm tra sản phẩm tồn tại
        const product = await prisma.product.findUnique({
            where: { id: productId },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        // Cập nhật danh sách yêu thích
        return prisma.user.update({
            where: { id: userId },
            data: {
                favoriteIds: {
                    push: productId,
                },
            },
        });
    }

    // ✅ Xóa khỏi yêu thích
    @Delete()
    async removeFromFavorites(@Req() req, @Body() body: { productId: string }) {
        const { productId } = body;
        const userId = req.user.userId;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { favoriteIds: true },
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Lọc bỏ productId cần xóa
        const newFavoriteIds = user.favoriteIds.filter(id => id !== productId);

        await prisma.user.update({
            where: { id: userId },
            data: {
                favoriteIds: newFavoriteIds,
            },
        });

        return { message: 'Removed from favorites' };
    }
}