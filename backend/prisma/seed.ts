// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Xóa dữ liệu cũ (tùy chọn)
    await prisma.cartItem.deleteMany();
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
    await prisma.blog.deleteMany();
    // Tạo sản phẩm mẫu
    await prisma.product.createMany({
        data: [
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
            {
                name: "Skin Nourishing Serum",
                price: 419000,
                image: "https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-21-1.webp",
                description: "Beauty Products",
            },
        ],

    });
    //tạo blog
    await prisma.blog.createMany({
        data: [
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {
                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
            {

                type: 'cbd pastries',
                title: 'Making CBD-Infused Pastries And Cupcakes',
                description: 'Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Pretium lectus quam id...',
                image: 'https://sacdep24.monamedia.net/wp-content/uploads/2024/10/shop-12.webp',
                date: '10/03/2003'
            },
        ]
    });

    console.log('✅ Seed completed!');
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });