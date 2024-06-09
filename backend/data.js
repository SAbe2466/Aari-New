import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Abe',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sang',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: "1",
      name: 'deco',
      slug: 'nike-slim-shirt',
      category: 'decorations',
      image: '/images/deco.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      //_id: "2",
      name: 'makeup',
      slug: 'adidas-fit-shirt',
      category: 'Shirts',
      image: '/images/makeup.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //_id: "3",
      name: 'teddy',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/teddy.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //_id: "4",
      name: 'wedding',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/wedding.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
