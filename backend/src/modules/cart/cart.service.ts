// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { CreateCartDto } from './dto/create-cart.dto';
// import { UpdateCartDto } from './dto/update-cart.dto';

// @Injectable()
// export class CartService {
//   constructor(private prisma: PrismaService) {}

//   // async create(data: CreateCartDto) {
//   //   return this.prisma.cart.create({
//   //     data: {
//   //       userId: data.userId,
//   //       items: data.items.map((item) => ({
//   //         productId: item.productId,
//   //         quantity: item.quantity,
//   //         price: item.price,
//   //       })),
//   //     },
//   //     include: { items: true },
//   //   });
//   // }

//   async findAll() {
//     return this.prisma.cart.findMany({
//       include: { items: true },
//     });
//   }

//   async findOne(id: string) {
//     const cart = await this.prisma.cart.findUnique({
//       where: { id },
//       include: { items: true },
//     });
//     if (!cart) throw new NotFoundException('Cart not found');
//     return cart;
//   }

//   async update(id: string, data: UpdateCartDto) {
//     await this.findOne(id); // check exists
//     return this.prisma.cart.update({
//       where: { id },
//       data: {
//         userId: data.userId,
//         items: data.items
//           ? {
//               deleteMany: {},
//               create: data.items.map((item) => ({
//                 productId: item.productId,
//                 quantity: item.quantity,
//                 price: item.price,
//               })),
//             }
//           : undefined,
//       },
//       include: { items: true },
//     });
//   }

//   async remove(id: string) {
//     await this.findOne(id);
//     return this.prisma.cart.delete({ where: { id } });
//   }
// }
