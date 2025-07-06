export const categories = [
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt' },
  { id: 'home', name: 'Home & Garden', icon: 'Home' },
  { id: 'sports', name: 'Sports & Outdoors', icon: 'Dumbbell' },
  { id: 'books', name: 'Books', icon: 'Book' },
  { id: 'beauty', name: 'Beauty & Health', icon: 'Heart' }
];

export const products = [
  {
    id: '1',
    name: 'Wireless Headphone',
    price: 299.99,
    originalPrice: 399.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.',
    features: ['Active Noise Cancellation', '30-hour battery life', 'Premium leather comfort', 'Hi-Res Audio certified'],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199.99,
    originalPrice: 249.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-day battery', 'Water resistant'],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Cotton T-Shirt',
    price: 49.99,
    originalPrice: 69.99,
    category: 'clothing',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2E3IhxwHHRDATbTRhgH_xdx1IRJ0mZ2oviZ6jfPu07tqHsjIgst3luJQpWP7YcJLXG7WYDgc44snOyAQb4MxOe1x6PxsUmRobQnw0Larg',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS2E3IhxwHHRDATbTRhgH_xdx1IRJ0mZ2oviZ6jfPu07tqHsjIgst3luJQpWP7YcJLXG7WYDgc44snOyAQb4MxOe1x6PxsUmRobQnw0Larg'
    ],
    description: 'Premium cotton t-shirt with modern fit and sustainable materials.',
    features: ['100% Organic Cotton', 'Modern Fit', 'Sustainable Materials', 'Machine Washable'],
    rating: 4.4,
    reviews: 324,
    inStock: true,
    featured: false
  },
  {
    id: '4',
    name: 'Professional Camera',
    price: 899.99,
    originalPrice: 1199.99,
    category: 'electronics',
    image: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Capture stunning photos with this professional-grade camera featuring advanced autofocus.',
    features: ['24MP Sensor', '4K Video Recording', 'Advanced Autofocus', 'Weather Sealed'],
    rating: 4.9,
    reviews: 567,
    inStock: true,
    featured: true
  },
  {
    id: '5',
    name: 'Luxury Leather Jacket',
    price: 299.99,
    originalPrice: 399.99,
    category: 'clothing',
    image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe87264e-7d08-4924-9277-571be9f2fa7d/AS+M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
    images: [
     'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fe87264e-7d08-4924-9277-571be9f2fa7d/AS+M+NK+DF+TCH+WVN+WR+FZ+JKT.png',
    ],
    description: 'Handcrafted leather jacket made from premium materials with timeless design.',
    features: ['Genuine Leather', 'Handcrafted', 'Timeless Design', 'Multiple Pockets'],
    rating: 4.7,
    reviews: 189,
    inStock: true,
    featured: false
  },
  {
    id: '6',
    name: 'Modern Coffee Table',
    price: 399.99,
    originalPrice: 499.99,
    category: 'home',
    image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant coffee table with modern design perfect for contemporary living spaces.',
    features: ['Solid Wood Construction', 'Modern Design', 'Easy Assembly', 'Scratch Resistant'],
    rating: 4.5,
    reviews: 234,
    inStock: true,
    featured: true
  },
  {
    id: '7',
    name: 'Running Shoes',
    price: 129.99,
    originalPrice: 159.99,
    category: 'sports',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'High-performance running shoes designed for comfort and durability.',
    features: ['Breathable Mesh', 'Cushioned Sole', 'Lightweight Design', 'Durable Construction'],
    rating: 4.3,
    reviews: 456,
    inStock: true,
    featured: false
  },
  {
    id: '8',
    name: 'Bestselling Novel',
    price: 19.99,
    originalPrice: 24.99,
    category: 'books',
    image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Captivating novel that has topped bestseller lists worldwide.',
    features: ['Bestseller', 'Award Winning', 'Paperback Edition', 'Free Shipping'],
    rating: 4.6,
    reviews: 1023,
    inStock: true,
    featured: false
  },
  {
  id: '9',
  name: '4K Ultra HD TV',
  price: 1099.99,
  originalPrice: 1399.99,
  category: 'electronics',
  image: 'https://m.media-amazon.com/images/I/81fTiaf5qCL._SL1500_.jpg',
  images: [
    'https://m.media-amazon.com/images/I/81fTiaf5qCL._SL1500_.jpg'
  ],
  description: 'Experience stunning visuals with this 4K Ultra HD smart TV with built-in streaming apps.',
  features: ['4K Resolution', 'Smart TV Features', 'HDR Support', 'Voice Control'],
  rating: 4.8,
  reviews: 678,
  inStock: true,
  featured: true
},
{
  id: '10',
  name: 'Ergonomic Office Chair',
  price: 249.99,
  originalPrice: 349.99,
  category: 'home',
  image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQB9sFtWwX3pLXsiqhJudneI_O4_gFCQQp_QOXSzPrp1Hl7L3dJ-Af7z42Ww8tjx0wpcMNd5xXXxZU6faBeb0uW_PJLGiKRxQ1ntNfjQnA&usqp=CAc',
  images: [
    'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  description: 'Stay comfortable all day with this ergonomic chair featuring lumbar support and adjustable height.',
  features: ['Lumbar Support', 'Adjustable Height', 'Mesh Back', 'Swivel Base'],
  rating: 4.5,
  reviews: 389,
  inStock: true,
  featured: false
},
{
  id: '11',
  name: 'Bluetooth Speaker',
  price: 79.99,
  originalPrice: 99.99,
  category: 'electronics',
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSInAPDeOA4f4r5M-TnC9noCpDTXSsGzGeX0zOph5n6e7_7OVLgHtxMl2yoh5CeFdk6IoQMr7zUSPluIQvJdXGARARKO5q7Xar4HAamMH86YryVYWng4_IH',
  images: [
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSInAPDeOA4f4r5M-TnC9noCpDTXSsGzGeX0zOph5n6e7_7OVLgHtxMl2yoh5CeFdk6IoQMr7zUSPluIQvJdXGARARKO5q7Xar4HAamMH86YryVYWng4_IH'
  ],
  description: 'Portable Bluetooth speaker with deep bass and water-resistant design.',
  features: ['Water Resistant', 'Deep Bass', '10-Hour Battery', 'Bluetooth 5.0'],
  rating: 4.4,
  reviews: 745,
  inStock: true,
  featured: true
},
{
  id: '12',
  name: 'Yoga Mat',
  price: 39.99,
  originalPrice: 49.99,
  category: 'sports',
  image: 'https://wiselife.in/cdn/shop/files/1_cbf6c673-8be2-447b-aa82-28db3863a443.png?v=1741087017&width=1946',
  images: [
    'https://wiselife.in/cdn/shop/files/1_cbf6c673-8be2-447b-aa82-28db3863a443.png?v=1741087017&width=1946'
  ],
  description: 'High-density yoga mat for improved balance and comfort during workouts.',
  features: ['Non-Slip Surface', 'Extra Thick', 'Eco-Friendly', 'Easy to Clean'],
  rating: 4.6,
  reviews: 298,
  inStock: true,
  featured: false
},
{
  id: '13',
  name: 'Noise Cancelling Headphone',
  price: 149.99,
  originalPrice: 199.99,
  category: 'electronics',
  image: 'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/373945/pexels-photo-373945.jpeg?auto=compress&cs=tinysrgb&w=800'
  ],
  description: 'Compact earbuds with industry-leading noise cancellation and crystal clear sound.',
  features: ['Noise Cancellation', 'Wireless Charging', '24-Hour Battery', 'Touch Controls'],
  rating: 4.7,
  reviews: 832,
  inStock: true,
  featured: true
},
{
  id: '14',
  name: 'Leather Wallet',
  price: 59.99,
  originalPrice: 89.99,
  category: 'clothing',
  image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_LNnNqNe97ztDlyv5yfpaKBxVTTexuniOf0XctpTY_RM2xW7UtJrbWibXUovyRYjxoRYWu_EBdNSbYTAJ-npb6k7C7-NkQSdTXVvz20xbJ_AmCNZ_UrxcWxhHZY22G9OeKiiD-vj8L6g&usqp=CAc',
  images: [
    'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT_LNnNqNe97ztDlyv5yfpaKBxVTTexuniOf0XctpTY_RM2xW7UtJrbWibXUovyRYjxoRYWu_EBdNSbYTAJ-npb6k7C7-NkQSdTXVvz20xbJ_AmCNZ_UrxcWxhHZY22G9OeKiiD-vj8L6g&usqp=CAc',
  ],
  description: 'Stylish genuine leather wallet with RFID blocking and multiple compartments.',
  features: ['Genuine Leather', 'RFID Blocking', 'Slim Design', 'Multiple Card Slots'],
  rating: 4.5,
  reviews: 476,
  inStock: true,
  featured: false
},
{
  id: '15',
  name: 'Smart Air Purifier',
  price: 229.99,
  originalPrice: 299.99,
  category: 'home',
  image: 'https://honeywellconnection.com/in/wp-content/uploads/2024/09/Air-Purifier-V1-05-scaled.jpg',
  images: [
    'https://honeywellconnection.com/in/wp-content/uploads/2024/09/Air-Purifier-V1-05-scaled.jpg'
  ],
  description: 'Keep your home fresh and allergen-free with this smart air purifier with HEPA filter.',
  features: ['HEPA Filter', 'Smart App Control', 'Air Quality Sensor', 'Quiet Operation'],
  rating: 4.8,
  reviews: 564,
  inStock: true,
  featured: true
},
{
  id: '16',
  name: 'Cookware Set',
  price: 179.99,
  originalPrice: 229.99,
  category: 'home',
  image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdGbV0jo_r_WrPQ33pC1iLyt_jpFxZa_MS_9uk3vF-cJgGDUgRkgBdl_lrd_F21UVUH0lDQBR3XiCqdE4i5Qj0n_A7YaNOvD5kiYbJCVIHAKuGebEWZqPo',
  images: [
    'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSdGbV0jo_r_WrPQ33pC1iLyt_jpFxZa_MS_9uk3vF-cJgGDUgRkgBdl_lrd_F21UVUH0lDQBR3XiCqdE4i5Qj0n_A7YaNOvD5kiYbJCVIHAKuGebEWZqPo'
  ],
  description: 'Non-stick 10-piece cookware set ideal for everyday cooking.',
  features: ['Non-Stick Coating', 'Dishwasher Safe', 'Heat Resistant Handles', 'Even Heat Distribution'],
  rating: 4.6,
  reviews: 654,
  inStock: true,
  featured: false
}
,

  {
    "id": "17",
    "name": "Sport Shoes",
    "price": 404.99,
    "originalPrice": 562.74,
    "category": "clothing",
    "image": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTw8lKJATd9DMm_FuS8ykZDZ2_mpn8wsxOmfrTAm_gn329p2AHp38tkFGmVHEBRynYzi2pgC1wEZki7dLIOJ2hlQSwQmmkvAVFpdFTalTFCTK91ZVZxq9k5ZQ&usqp=CAc",
    "images": [
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTw8lKJATd9DMm_FuS8ykZDZ2_mpn8wsxOmfrTAm_gn329p2AHp38tkFGmVHEBRynYzi2pgC1wEZki7dLIOJ2hlQSwQmmkvAVFpdFTalTFCTK91ZVZxq9k5ZQ&usqp=CAc"
    ],
    "description": "Comfortable running shoes with breathable mesh and arch support.",
    "features": [
      "Breathable Mesh",
      "Arch Support",
      "Lightweight",
      "Anti-Slip Sole"
    ],
    "rating": 4.6,
    "reviews": 983,
    "inStock": true,
    "featured": false
  },
  

];

export const featuredProducts = products.filter(product => product.featured);