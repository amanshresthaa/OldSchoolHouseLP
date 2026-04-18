export interface SourceMenuBadge {
  text: string
  type: "gold" | "dark"
}

export interface SourceMenuItem {
  name: string
  price: string
  desc?: string
  labels?: string[]
  badges?: SourceMenuBadge[]
}

export interface SourceMenuCategory {
  slug: string
  title: string
  intro: string
  items: SourceMenuItem[]
}

export interface MenuServiceHour {
  day: string
  hours: string
}

export interface MenuVenueDetails {
  name: string
  subtitle: string
  description: string
  allergyNote: string
  spiceNote: string
  drinksNote: string
  socialHandle: string
  address: string
  phone: string
  website: string
  kitchenHours: MenuServiceHour[]
  barHours: MenuServiceHour[]
}

export interface LunchMenuService {
  lunchHours: string
  sundayRoastHours: string
  note: string
}

export const menuVenueDetails: MenuVenueDetails = {
  name: "The Old School House",
  subtitle: "Pub and Nepalese Dining",
  description:
    "British pub comfort and Himalayan kitchen flavours come together at The Old School House, Stony Stratford. Expect sizzling grills, warming curries, pub favourites, and family-friendly service all week.",
  allergyNote:
    "Please tell us before ordering if you have any food allergies. Every care is taken, but traces of allergens may remain.",
  spiceNote: "Bespoke spice levels available - just ask.",
  drinksNote:
    "Please see our drinks menu for exclusive drinks, seasonal pours, and bar specials.",
  socialHandle: "@oldschoolhousestony",
  address: "London Rd, Stony Stratford, Milton Keynes MK11 1JA",
  phone: "07588 864819",
  website: "oldschoolhousestony.co.uk",
  kitchenHours: [
    { day: "Monday - Friday", hours: "12 pm - 3 pm / 5 pm - 10 pm" },
    { day: "Saturday", hours: "12 pm - 10 pm" },
    { day: "Sunday", hours: "12 pm - 9 pm" },
  ],
  barHours: [
    { day: "Monday - Saturday", hours: "12 pm - 11 pm" },
    { day: "Sunday", hours: "12 pm - 10 pm" },
  ],
}

export const lunchMenuService: LunchMenuService = {
  lunchHours: "Mon - Sat 12 pm - 3 pm",
  sundayRoastHours: "Sunday 12 pm - 4 pm",
  note: "Lunch keeps the pub classics, mixed grills, wraps, and lighter plates easy to browse before you book or order.",
}

export const mainMenuSource: SourceMenuCategory[] = [
  {
    slug: "main-starters",
    title: "Starters",
    intro:
      "Onion bhaji, momo, samosas, and sharers that give the table both pub comfort and Nepalese character from the start.",
    items: [
      { name: "Onion Bhaji", price: "4.25", labels: ["veg", "GF"] },
      { name: "Samosas (Veg / Meat)", price: "4.50" },
      {
        name: "Stuffed Tandoori Mushroom",
        price: "6.25",
        labels: ["veg", "GF"],
      },
      {
        name: "Chilli Mogo",
        price: "5.25",
        labels: ["veg", "GF", "spice-2"],
      },
      {
        name: "Chilli Paneer",
        price: "6.25",
        labels: ["veg", "GF", "spice-2"],
      },
      { name: "Garlic Mushroom", price: "5.75", labels: ["veg", "GF"] },
      { name: "Paneer Tikki", price: "6.00", labels: ["veg"] },
      { name: "Honey Chilli Gobi", price: "5.75", labels: ["veg", "GF"] },
      { name: "Garlic Chilli Okra", price: "6.25", labels: ["veg"] },
      {
        name: "Veg Momo (Steam / Chilli)",
        price: "6.25 / 7.50",
        labels: ["veg"],
        desc: "Famous traditional Nepalese dumplings made with various seasonal vegetables",
      },
      {
        name: "Chicken Momo (Steam / Chilli)",
        price: "6.75 / 8.00",
        desc: "Made with chicken mince and herbs",
      },
      {
        name: "Mixed Platter",
        price: "8.50",
        desc: "Includes Onion Bhaji, Chicken Tikka, Seekh Kebab",
        badges: [{ text: "Sharing Platter", type: "dark" }],
      },
    ],
  },
  {
    slug: "main-crispy-starters",
    title: "Crispy & Tandoori Starters",
    intro:
      "Crispy bites, wings, kebabs, tikka, and seafood starters for tables that want something hotter, smokier, or built for sharing.",
    items: [
      {
        name: "Honey Chilli Chicken",
        price: "6.75",
        labels: ["GF", "spice-2"],
      },
      { name: "Chicken Wings", price: "6.75", labels: ["GF"] },
      { name: "Crispy Hot Wings", price: "7.25", labels: ["spice-2"] },
      { name: "Chicken Tikka", price: "7.50", labels: ["GF"] },
      { name: "Chicken Pakora", price: "6.25" },
      { name: "Chilli Chicken", price: "7.00", labels: ["spice-2"] },
      { name: "Sheek Kebab", price: "7.50", labels: ["GF"] },
      { name: "Lamb Chops", price: "8.25", labels: ["GF"] },
      { name: "Fish Pakora", price: "6.25" },
      { name: "Battered King Prawn", price: "8.50" },
      { name: "Crispy Squid", price: "6.50" },
    ],
  },
  {
    slug: "main-chef-selection",
    title: "Chef's Selection",
    intro:
      "House signatures and richer Nepalese mains, from goat curry to butter chicken, for guests who want the kitchen's point of difference.",
    items: [
      {
        name: "Himali Lamb",
        price: "14.50",
        labels: ["GF"],
        desc: "Green curry seasoned with Himalayan salt and yoghurt blend with fresh mint, green chilli and Nepalese spice",
      },
      {
        name: "Khasi Ko Masu (Goat Curry)",
        price: "14.50",
        labels: ["GF"],
        desc: "A rich and flavoursome slow cooked goat on the bone / off the bone with unique blend of Nepalese spices",
      },
      {
        name: "Pokhareli Fish Curry",
        price: "15.00",
        labels: ["GF"],
        desc: "Traditional flavourful curry with a hint of mustard and coconut milk",
      },
      {
        name: "Chicken Rum Rum",
        price: "13.00",
        labels: ["GF", "spice-2"],
        desc: "Must try Nepalese dish — chicken cooked with Himalayan herbs and Nepalese black peppers (timur)",
      },
      {
        name: "Rara King Prawn",
        price: "15.00",
        desc: "King prawn cooked in coconut based medium sauce with blend of Nepalese spices, tamarind and mustard",
      },
      {
        name: "Lasun Kukhura Khursani (LKK / LLK)",
        price: "13.00 / 14.00",
        labels: ["GF", "spice-2"],
        desc: "Tender pieces of chicken or lamb cooked with garlic, crushed chilli, spring onions, fresh cream in the chef's special Nepalese sauce",
        badges: [{ text: "Chicken / Lamb", type: "dark" }],
      },
      {
        name: "Bhutuwa (Chicken / Lamb)",
        price: "12.00 / 13.00",
        labels: ["GF"],
        desc: "Traditional Nepalese speciality cooked with dried crushed chilli and crushed garlic",
      },
      {
        name: "Special Butter (Paneer / Chicken)",
        price: "13.00 / 14.00",
        labels: ["GF", "spice-1"],
        desc: "Succulent paneer or chicken in a luxurious butter-infused tomato sauce, slow-cooked with cashews, cream, and fragrant spices",
      },
      {
        name: "Kathmandu Tikka Masala",
        price: "14.00",
        labels: ["GF"],
        desc: "Absolutely delicious and succulent chicken dish",
      },
      {
        name: "Special Veggie Tarkari",
        price: "13.00",
        labels: ["veg", "GF"],
        desc: "Nepalese style vegetarian semi dry curry cooked with aromatic spices and herbs",
      },
    ],
  },
  {
    slug: "main-clay-oven",
    title: "Clay Oven Specialities",
    intro:
      "Chargrilled tandoor dishes served with a smokier, drier finish and built for guests who want the grill to lead the meal.",
    items: [
      {
        name: "Kathmandu Tikka",
        price: "14.00",
        labels: ["GF", "dry"],
        desc: "Succulent chicken breast cubes marinated in cheese and cream with a hint of crushed black peppers",
        badges: [{ text: "Served in Grill", type: "dark" }],
      },
      {
        name: "Rack of Lamb",
        price: "17.00",
        labels: ["GF", "dry"],
        desc: "Lamb chops marinated overnight for extra softness and tenderness, cooked in tandoor",
        badges: [{ text: "Signature", type: "gold" }],
      },
      {
        name: "Paneer Saslick",
        price: "13.00",
        labels: ["veg", "GF", "dry"],
        desc: "Soft cheese cooked in tandoor oven, served in sizzler with onion and peppers",
      },
      {
        name: "Salmon Tikka",
        price: "17.00",
        labels: ["GF", "dry"],
        desc: "Pieces of salmon flavoured with cumin seeds and chargrilled in tandoor",
      },
      {
        name: "Tandoori King Prawn",
        price: "18.00",
        labels: ["GF", "dry"],
        desc: "King prawn marinated in Nepalese spices and herbs and cooked in tandoor",
      },
    ],
  },
  {
    slug: "main-biryani",
    title: "Biryani",
    intro:
      "Fragrant one-pot rice dishes layered with basmati rice and spiced fillings for a fuller, slower main.",
    items: [
      { name: "Veggie Biryani", price: "13.00", labels: ["veg"] },
      { name: "Chicken Biryani", price: "14.00" },
      { name: "Lamb Biryani", price: "15.00" },
      { name: "King Prawn Biryani", price: "16.00" },
    ],
  },
  {
    slug: "main-mixed-grills",
    title: "Mixed Grills",
    intro:
      "Sizzling grills built for sharing, celebration, and tables that want a lot of range in one order.",
    items: [
      {
        name: "Veg Grill",
        price: "12.00",
        labels: ["veg"],
        desc: "Onion bhaji, mogo, samosas and paneer",
      },
      {
        name: "Small Mixed Grill",
        price: "13.00",
        desc: "Chicken wings, chicken tikka, sheekh kebab, chicken pakora",
      },
      {
        name: "Regular Mixed Grill",
        price: "16.00",
        desc: "Same as Small plus lamb chops",
      },
      {
        name: "Large Mixed Grill",
        price: "20.00",
        desc: "Same as Regular plus Kathmandu Tikka and fish pakora",
      },
      {
        name: "Xtra Large Special Mixed Grill",
        price: "24.00",
        desc: "Same as Large plus king prawn",
        badges: [{ text: "Best Value", type: "gold" }],
      },
    ],
  },
  {
    slug: "main-curry-house",
    title: "Curry House Classics",
    intro:
      "Choose your style and protein across curry house staples, from korma and masala through to bhuna, madras, vindaloo, and phaal.",
    items: [
      { name: "Veg Curry", price: "10.00", labels: ["veg", "GF"] },
      { name: "Chicken Curry", price: "11.00", labels: ["GF"] },
      { name: "Lamb Curry", price: "12.00", labels: ["GF"] },
      { name: "King Prawn Curry", price: "14.00", labels: ["GF"] },
      { name: "Veg Korma", price: "11.00", labels: ["veg", "GF"] },
      { name: "Chicken Korma", price: "12.00", labels: ["GF"] },
      { name: "Lamb Korma", price: "13.00", labels: ["GF"] },
      { name: "King Prawn Korma", price: "15.00", labels: ["GF"] },
      { name: "Veg Masala", price: "12.00", labels: ["veg", "GF"] },
      { name: "Chicken Masala", price: "13.00", labels: ["GF"] },
      { name: "Lamb Masala", price: "14.00", labels: ["GF"] },
      { name: "King Prawn Masala", price: "16.00", labels: ["GF"] },
      {
        name: "Veg Balti / Karahi / Bhuna / Saag / Dhansak / Jalfrezi / Madras / Vindaloo / Phaal",
        price: "11.00",
        labels: ["veg", "GF"],
      },
      {
        name: "Chicken Balti / Karahi / Bhuna / Saag / Dhansak / Jalfrezi / Madras / Vindaloo / Phaal",
        price: "12.00",
        labels: ["GF"],
      },
      {
        name: "Lamb Balti / Karahi / Bhuna / Saag / Dhansak / Jalfrezi / Madras / Vindaloo / Phaal",
        price: "13.00",
        labels: ["GF"],
      },
      {
        name: "King Prawn Balti / Karahi / Bhuna / Saag / Dhansak / Jalfrezi / Madras / Vindaloo / Phaal",
        price: "15.00",
        labels: ["GF"],
      },
    ],
  },
  {
    slug: "main-rice",
    title: "Rice",
    intro:
      "Kitchen staples for curries, mixed grills, and longer-table meals that need the right side support.",
    items: [
      { name: "Boiled Rice", price: "4.00" },
      { name: "Pilau Rice", price: "4.50" },
      { name: "Mushroom Rice", price: "4.75" },
      { name: "Egg Fried Rice", price: "4.75" },
      { name: "Keema Rice", price: "4.95" },
      { name: "Special Rice", price: "5.50" },
    ],
  },
  {
    slug: "main-naan",
    title: "Naan & Roti",
    intro:
      "Warm breads that balance heat, sauce, and grilled dishes, from plain naan to keema and signature options.",
    items: [
      { name: "Plain Naan", price: "3.75", labels: ["veg"] },
      { name: "Roti", price: "3.50", labels: ["veg"] },
      { name: "Garlic Naan", price: "4.25", labels: ["veg"] },
      {
        name: "Garlic Chilli Naan",
        price: "4.75",
        labels: ["veg", "spice-1"],
      },
      { name: "Peshwari Naan", price: "4.75", labels: ["veg"] },
      { name: "Cheese Naan", price: "4.75", labels: ["veg"] },
      { name: "Keema Naan", price: "4.75" },
      { name: "Signature Naan", price: "5.25" },
    ],
  },
  {
    slug: "main-sides",
    title: "Sides",
    intro:
      "Vegetable dishes and Nepalese kitchen staples for rounding out a curry spread or adding more variety to the table.",
    items: [
      { name: "Tadka Daal", price: "6.00", desc: "Lentil", labels: ["veg"] },
      {
        name: "Gurkha Aalo",
        price: "6.00",
        desc: "Dry potato cooked in Nepalese special herbs",
        labels: ["veg"],
      },
      {
        name: "Saag Aalo",
        price: "6.00",
        desc: "Spinach and potato",
        labels: ["veg"],
      },
      {
        name: "Chana Masala",
        price: "6.00",
        desc: "Chickpeas",
        labels: ["veg"],
      },
      { name: "Saag Bhaji", price: "6.00", desc: "Spinach", labels: ["veg"] },
      { name: "Mushroom Bhaji", price: "6.00", labels: ["veg"] },
      {
        name: "Saag Paneer",
        price: "6.50",
        desc: "Fresh spinach and cottage cheese",
        labels: ["veg"],
      },
      {
        name: "Matar Paneer",
        price: "6.50",
        desc: "Green peas and cottage cheese",
        labels: ["veg"],
      },
      { name: "Bhindi Bhaji", price: "6.50", desc: "Okra", labels: ["veg"] },
    ],
  },
  {
    slug: "main-chips",
    title: "Chips",
    intro:
      "Quick add-ons and casual pub extras, from skinny chips to loaded and sweet potato versions.",
    items: [
      { name: "Skinny Chips", price: "3.50", labels: ["veg"] },
      { name: "Chunky Chips", price: "4.50", labels: ["veg"] },
      {
        name: "Peri-Peri Chips",
        price: "3.75",
        labels: ["veg", "spice-2"],
      },
      {
        name: "Chilli Chips",
        price: "4.75",
        labels: ["veg", "spice-2"],
      },
      { name: "Cheesy Chips", price: "4.75", labels: ["veg"] },
      { name: "Sweet Potato Chips", price: "4.95", labels: ["veg"] },
      { name: "Loaded Chips", price: "7.25", labels: ["veg"] },
    ],
  },
  {
    slug: "main-chowmein",
    title: "Chowmein",
    intro:
      "Wok-style noodle dishes that keep the menu broad for guests who want something outside the curry and grill format.",
    items: [
      { name: "Chowmein Veg", price: "9.50", labels: ["veg"] },
      { name: "Chowmein Chicken", price: "10.50" },
      { name: "Chowmein Prawn", price: "12.00" },
      { name: "Chowmein Mixed", price: "13.50" },
    ],
  },
  {
    slug: "main-wraps",
    title: "Wraps",
    intro:
      "Straightforward lunch-and-pint plates that keep the menu easy when you want something quick but still satisfying.",
    items: [
      { name: "Paneer Wrap", price: "9.50", labels: ["veg"] },
      { name: "Sweet Chilli Wrap", price: "10.95" },
      { name: "Chicken Tikka Wrap", price: "10.95" },
      { name: "Kebab Wrap", price: "11.50" },
      { name: "Special Wrap (Mix)", price: "12.50" },
    ],
  },
  {
    slug: "main-pub-classics",
    title: "Pub Classics",
    intro:
      "Familiar pub comfort for guests who want haddock, burgers, or chicken-and-chips without leaning into the Nepalese side of the menu.",
    items: [
      {
        name: "Fish & Chips",
        price: "14.00",
        desc: "Medium battered haddock, served with tartar sauce",
        badges: [{ text: "Pub Classic", type: "dark" }],
      },
      { name: "Scampi and Chips", price: "14.50" },
      { name: "Veg / Vegan Burger", price: "10.00", labels: ["veg"] },
      { name: "Chicken Bacon Burger", price: "13.95" },
      { name: "8oz Beef Burger", price: "13.95" },
      { name: "Chicken Strips with Chips", price: "12.95" },
    ],
  },
  {
    slug: "main-salads",
    title: "Salads",
    intro:
      "Lighter plates that keep the all-day menu flexible through lunch, warmer days, and mixed-table plans.",
    items: [
      { name: "Chicken and Bacon Salad", price: "11.95" },
      { name: "Prawn Salad", price: "11.95" },
    ],
  },
  {
    slug: "main-kids",
    title: "Kids Menu",
    intro:
      "Short, easy kids choices that work well for family tables and keep ordering simple.",
    items: [
      { name: "Popcorn Chicken", price: "6.25" },
      { name: "Nuggets", price: "7.00" },
      { name: "Scampi", price: "7.00" },
      { name: "Chicken Pakora", price: "7.00" },
      { name: "CTM / Korma", price: "8.50" },
    ],
  },
  {
    slug: "main-desserts",
    title: "Desserts",
    intro:
      "A concise finish of Nepalese sweets, ice cream, fondant, and cake for guests who want to stay a little longer.",
    items: [
      { name: "Gulab Jamun", price: "4.50", labels: ["veg"] },
      {
        name: "Nepalese Rice Pudding",
        price: "5.25",
        desc: "Kheer",
        labels: ["veg"],
      },
      {
        name: "Vanilla and Honey Toffee Ice Cream",
        price: "6.50",
        labels: ["veg"],
      },
      {
        name: "Chocolate Fondant",
        price: "6.50",
        desc: "Chocolate sponge with liquid chocolate centre, served with ice cream or cream",
        labels: ["veg"],
      },
      {
        name: "Cake of the Day",
        price: "6.50",
        desc: "Served with ice cream or cream",
        labels: ["GF"],
      },
    ],
  },
]

export const lunchMenuSource: SourceMenuCategory[] = [
  {
    slug: "lunch-full-english",
    title: "Full English",
    intro:
      "A single-plate lunch service option for guests who want a classic full English between midday and three.",
    items: [
      {
        name: "Full English",
        price: "11.95",
        desc: "Jolly Hog treacle cured back bacon, sausage, hash brown, fried egg, grilled tomato, baked beans, black pudding, mushrooms, fried bread",
      },
    ],
  },
  {
    slug: "lunch-starters",
    title: "Lunch Starters",
    intro:
      "Smaller plates that let the lunch menu still start with onion bhaji, wings, tikka, squid, or prawns.",
    items: [
      { name: "Onion Bhaji", price: "4.50", labels: ["veg"] },
      { name: "Samosa", price: "4.50 / 4.75", desc: "Choose veg or meat" },
      { name: "Garlic Mushroom", price: "6.00", labels: ["veg"] },
      { name: "Crispy Squid", price: "6.50" },
      { name: "Chicken Wings", price: "6.75" },
      { name: "Chicken Tikka", price: "7.50" },
      { name: "Battered King Prawn", price: "8.50" },
    ],
  },
  {
    slug: "lunch-grills",
    title: "From the Grill",
    intro:
      "Lunch mixed grills and rack of lamb for tables that want the grill to carry the meal even during daytime service.",
    items: [
      {
        name: "Veg Grill",
        price: "12.00",
        desc: "Onion Bhaji, Mogo, Samosa, Paneer",
        labels: ["veg", "GF"],
      },
      {
        name: "Small Mix Grill",
        price: "13.00",
        desc: "Chicken Wings, Chicken Tikka, Sheekh Kebab, Chicken Pakora",
        labels: ["GF"],
      },
      {
        name: "Regular Mix Grill",
        price: "16.00",
        desc: "Small grill plus Lamb Chops",
        labels: ["GF"],
      },
      {
        name: "Large Mix Grill",
        price: "20.00",
        desc: "Regular grill plus Kathmandu Tikka & Fish Pakora",
        labels: ["GF"],
      },
      {
        name: "XLarge Mix Grill",
        price: "24.00",
        desc: "Large grill plus King Prawn",
        labels: ["GF"],
        badges: [{ text: "Best Value", type: "gold" }],
      },
      {
        name: "Rack of Lamb",
        price: "17.00",
        labels: ["GF"],
        badges: [{ text: "Signature", type: "gold" }],
      },
    ],
  },
  {
    slug: "lunch-wraps",
    title: "Wraps",
    intro:
      "Easy daytime wraps that fit a quick lunch, a pint stop, or a mixed-table order without much back and forth.",
    items: [
      { name: "Paneer Wrap", price: "9.50", labels: ["veg"] },
      { name: "Chicken Tikka Wrap", price: "10.95" },
      { name: "Sweet Chilli Wrap", price: "10.95" },
      { name: "Kebab Wrap", price: "11.50" },
      {
        name: "Special Wrap (Mixed)",
        price: "12.50",
        badges: [{ text: "Popular", type: "gold" }],
      },
    ],
  },
  {
    slug: "lunch-curries",
    title: "Lunch Curries",
    intro:
      "A tighter lunch curry list that keeps the strongest sellers available through the daytime service window.",
    items: [
      { name: "Chicken Korma", price: "12.00", labels: ["GF"] },
      { name: "Chicken Tikka Masala", price: "13.00", labels: ["GF"] },
      {
        name: "Special Butter Chicken",
        price: "13.00",
        desc: "Luxurious butter-infused tomato sauce with cashews, cream & fragrant spices.",
        labels: ["GF"],
        badges: [{ text: "Popular", type: "gold" }],
      },
      {
        name: "Goat Curry",
        price: "14.50",
        desc: "Slow cooked goat with a unique blend of Nepalese spices.",
        labels: ["GF"],
      },
      {
        name: "Himali Lamb",
        price: "14.50",
        desc: "Green curry with Himalayan salt, yoghurt, fresh mint & green chilli.",
        labels: ["GF"],
      },
    ],
  },
  {
    slug: "lunch-essentials",
    title: "The Essentials",
    intro:
      "Pub lunch essentials for guests who want fish, ham and eggs, salmon, or chicken strips without moving into the fuller all-day menu.",
    items: [
      { name: "Chicken Strips & Chips", price: "12.95" },
      { name: "Scampi, Chips & Peas", price: "14.50" },
      {
        name: "Beer-Battered Haddock",
        price: "14.95",
        desc: "With chips & peas or mushy peas",
      },
      { name: "Ham, Egg, Chips & Peas", price: "14.95" },
      {
        name: "Grilled Salmon",
        price: "17.95",
        desc: "With basmati rice & Mediterranean vegetables",
      },
    ],
  },
  {
    slug: "lunch-burgers",
    title: "Burger Bar",
    intro:
      "Straight pub burgers for guests who want a familiar daytime meal with chips and clear choices.",
    items: [
      {
        name: "Beef Burger & Chips",
        price: "12.95 / 13.95",
        desc: "4oz or 8oz — cheddar, lettuce, tomato & onion",
      },
      {
        name: "Chicken Bacon Burger",
        price: "13.95",
        desc: "Bacon, cheese, lettuce, tomato & onions",
      },
      {
        name: "Louisiana Cheeseburger",
        price: "14.95",
        desc: "Cheese, onion, lettuce, cajun & BBQ sauce",
      },
    ],
  },
  {
    slug: "lunch-salads",
    title: "Naked Greens",
    intro:
      "Lighter lunch plates for guests who want salad-led options rather than wraps, burgers, or grills.",
    items: [
      { name: "Tuna Salad", price: "10.95", labels: ["GF"] },
      { name: "Prawn Salad", price: "11.95", labels: ["GF"] },
      { name: "Chicken & Bacon Salad", price: "11.95", labels: ["GF"] },
    ],
  },
  {
    slug: "lunch-baguettes",
    title: "Baguettes",
    intro:
      "Quick baguette fillings that make sense for daytime visits, lighter lunches, and easier takeaway-style choices.",
    items: [
      { name: "English Cheddar & Pickle", price: "6.95", labels: ["veg"] },
      { name: "Tuna Mayonnaise", price: "6.95" },
      { name: "Bacon & English Cheddar", price: "7.25" },
      { name: "Butchers Sliced Ham", price: "7.95" },
      { name: "Prawn In Marie Rose", price: "7.95" },
      { name: "Southern Fried Chicken", price: "7.95" },
    ],
  },
  {
    slug: "lunch-jacket-potatoes",
    title: "Jacket Potatoes",
    intro:
      "Simple jacket potatoes with familiar toppings for guests who want the easiest possible lunch format.",
    items: [
      { name: "English Cheddar", price: "7.95", labels: ["veg", "GF"] },
      { name: "Baked Beans", price: "7.95", labels: ["veg", "GF"] },
      { name: "Tuna Mayonnaise", price: "7.95", labels: ["GF"] },
      { name: "Prawn In Marie Rose", price: "7.95" },
      { name: "Additional Toppings", price: "1.95" },
    ],
  },
  {
    slug: "lunch-rice",
    title: "Rice",
    intro:
      "Rice sides for curries, salmon, and mixed lunch orders that need a straightforward add-on.",
    items: [
      { name: "Boiled Rice", price: "3.50" },
      { name: "Pilau Rice", price: "4.50" },
      { name: "Mushroom Rice", price: "4.75" },
      { name: "Egg Fried Rice", price: "4.75" },
    ],
  },
  {
    slug: "lunch-naan",
    title: "Naan",
    intro: "Core bread choices to support the smaller daytime curry selection.",
    items: [
      { name: "Plain Naan", price: "3.75", labels: ["veg"] },
      { name: "Garlic Naan", price: "4.25", labels: ["veg"] },
      { name: "Peshwari Naan", price: "4.75", labels: ["veg"] },
      { name: "Keema Naan", price: "4.75" },
    ],
  },
  {
    slug: "lunch-sides",
    title: "Sides",
    intro:
      "Quick pub and curry sides that help lunch tables stay flexible without moving into the wider evening menu.",
    items: [
      { name: "Garlic Bread", price: "3.25", labels: ["veg"] },
      {
        name: "Skinny / Chunky Chips",
        price: "3.50 / 4.50",
        labels: ["veg"],
      },
      { name: "Sweet Potato Chips", price: "4.95", labels: ["veg"] },
      { name: "Side Salad", price: "4.95", labels: ["veg"] },
      { name: "Saag Aloo", price: "5.25", labels: ["veg"] },
    ],
  },
  {
    slug: "lunch-kids",
    title: "Kids Menu",
    intro: "Short lunch-friendly kids choices that keep family ordering easy.",
    items: [
      { name: "Nuggets", price: "7.00" },
      { name: "Scampi", price: "7.00" },
      { name: "CTM", price: "8.50", desc: "Chicken Tikka Masala" },
    ],
  },
  {
    slug: "lunch-sunday-roast",
    title: "Sunday Roast",
    intro:
      "The Sunday lunch choice for guests building their visit around a roast rather than the standard lunch menu.",
    items: [
      {
        name: "Traditional Roast",
        price: "15.95",
        desc: "Choice of Beef, Pork, Turkey, or Plant-Based (V). Served with roast potatoes, cabbage, green beans, roast carrots & parsnips, Yorkshire pudding and gravy.",
      },
    ],
  },
]
