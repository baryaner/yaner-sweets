// Product Catalog Data - ממתקי ינר
// This file contains all products and categories for the candy shop

// Product Categories
const CATEGORIES = {
  'pick-and-mix': {
    nameHe: 'בחר ומזג',
    nameEn: 'Pick & Mix',
    slug: 'pick-and-mix'
  },
  'mixed-bags': {
    nameHe: 'שקיות מעורבות',
    nameEn: 'Mixed Bags',
    slug: 'mixed-bags'
  },
  'personal-extras': {
    nameHe: 'תוספות אישיות',
    nameEn: 'Personal Extras',
    slug: 'personal-extras'
  },
  'gift-ideas': {
    nameHe: 'רעיונות למתנה',
    nameEn: 'Gift Ideas',
    slug: 'gift-ideas'
  },
  'holiday-specials': {
    nameHe: 'מבצעי חגים',
    nameEn: 'Holiday Specials',
    slug: 'holiday-specials'
  }
};

// Products Array
const PRODUCTS = [
  {
    id: 1,
    nameHe: 'דובוני גומי',
    nameEn: 'Gummy Bears',
    descriptionHe: 'גומי דובים צבעוניים ומתוקים בטעמי פירות שונים',
    descriptionEn: 'Colorful sweet gummy bears in various fruit flavors',
    price: 12,
    category: 'pick-and-mix',
    image: 'https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400&h=400&fit=crop',
    inStock: true,
    featured: true
  },
  {
    id: 2,
    nameHe: 'סוכריות חמוצות',
    nameEn: 'Sour Candies',
    descriptionHe: 'סוכריות חמוצות מרעננות בציפוי סוכר',
    descriptionEn: 'Refreshing sour candies with sugar coating',
    price: 15,
    category: 'pick-and-mix',
    image: 'https://d3m9l0v76dty0.cloudfront.net/system/photos/2522434/large/362d4e9349c224e26f1048e2a70c1a06.jpg',
    inStock: true,
    featured: false
  },
  {
    id: 3,
    nameHe: 'שוקולד חלב',
    nameEn: 'Milk Chocolate',
    descriptionHe: 'שוקולד חלב איכותי במילוי אגוזים',
    descriptionEn: 'Premium milk chocolate with nut filling',
    price: 25,
    category: 'gift-ideas',
    image: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&h=400&fit=crop',
    inStock: true,
    featured: true
  },
  {
    id: 4,
    nameHe: 'מרשמלו ענק',
    nameEn: 'Giant Marshmallows',
    descriptionHe: 'מרשמלו רך וגדול בטעמי וניל ותות',
    descriptionEn: 'Soft giant marshmallows in vanilla and strawberry flavors',
    price: 18,
    category: 'pick-and-mix',
    image: 'https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/2023/05/07162246/shutterstock_1892464693-Medium.jpg',
    inStock: true,
    featured: false
  },
  {
    id: 6,
    nameHe: 'וופלים בציפוי שוקולד',
    nameEn: 'Chocolate Coated Wafers',
    descriptionHe: 'וופלים פריכים מצופים בשוקולד מריר',
    descriptionEn: 'Crispy wafers coated in dark chocolate',
    price: 20,
    category: 'gift-ideas',
    image: 'https://static.wixstatic.com/media/30a029_8d81de7167304db787805dfa4272cad9~mv2.jpeg/v1/fill/w_1500,h_300,al_c,q_85,enc_avif,quality_auto/30a029_8d81de7167304db787805dfa4272cad9~mv2.jpeg',
    inStock: true,
    featured: false
  },
  {
    id: 7,
    nameHe: 'שקית מעורבת קלאסית',
    nameEn: 'Classic Mixed Bag',
    descriptionHe: 'מגוון סוכריות ממתקים - מיקס מושלם לכל אירוע',
    descriptionEn: 'Variety of candies and sweets - perfect mix for any occasion',
    price: 35,
    category: 'mixed-bags',
    image: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/mixed-candies-munir-alawi.jpg',
    inStock: true,
    featured: true
  },
  {
    id: 9,
    nameHe: 'מתנה לחג',
    nameEn: 'Holiday Gift Package',
    descriptionHe: 'חבילת מתנה מיוחדת עם מבחר ממתקים לחגים',
    descriptionEn: 'Special gift package with selection of holiday candies',
    price: 50,
    category: 'holiday-specials',
    image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=400&fit=crop',
    inStock: true,
    featured: true
  },
  {
    id: 10,
    nameHe: 'טופי קרמל',
    nameEn: 'Caramel Toffee',
    descriptionHe: 'טופי קרמל רך עם טעם עשיר',
    descriptionEn: 'Soft caramel toffee with rich flavor',
    price: 16,
    category: 'pick-and-mix',
    image: 'https://www.mashed.com/img/gallery/how-are-toffee-and-caramel-different/intro-1608641383.jpg',
    inStock: true,
    featured: false
  },
  {
    id: 11,
    nameHe: 'שקית ממתקים לימי הולדת',
    nameEn: 'Birthday Candy Bag',
    descriptionHe: 'שקית ממתקים מעוצבת במיוחד לימי הולדת',
    descriptionEn: 'Specially designed candy bag for birthdays',
    price: 40,
    category: 'gift-ideas',
    image: 'https://fyf.tac-cdn.net/images/products/large/C-119.jpg?auto=webp&quality=80&width=690',
    inStock: true,
    featured: false
  },
  {
    id: 5,
    nameHe: 'סוכרת צבעונית',
    nameEn: 'Colorful Lollipops',
    descriptionHe: 'סוכריות על מקל בצבעים עזים וטעמים מגוונים',
    descriptionEn: 'Colorful lollipops with vibrant colors and various flavors',
    price: 8,
    category: 'pick-and-mix',
    image: 'https://images.unsplash.com/photo-1558954157-aa76c0d246c6?w=400&h=400&fit=crop',
    inStock: true,
    featured: false
  },
  {
    id: 8,
    nameHe: 'ג׳לי פירות',
    nameEn: 'Fruit Jellies',
    descriptionHe: 'ג׳לי פירות רך בטעמים טבעיים',
    descriptionEn: 'Soft fruit jellies with natural flavors',
    price: 14,
    category: 'pick-and-mix',
    image: 'https://images.unsplash.com/photo-1581798459219-c8f585c098b7?w=400&h=400&fit=crop',
    inStock: true,
    featured: false
  },
  {
    id: 12,
    nameHe: 'סוכריות נענע',
    nameEn: 'Mint Candies',
    descriptionHe: 'סוכריות נענע מרעננות',
    descriptionEn: 'Refreshing mint candies',
    price: 10,
    category: 'pick-and-mix',
    image: 'https://images.unsplash.com/photo-1626197578139-edaef3c7e7b9?w=400&h=400&fit=crop',
    inStock: true,
    featured: false
  }
];
