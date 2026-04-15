window.LUNCH_MENU_DATA = {
  venue: {
    name: "The Old School House",
    subtitle: "Pub and Nepalese Dining",
    allergyNote:
      "Please tell us before ordering if you have any food allergies. Every care is taken, but traces of allergens may remain.",
    spiceNote: "Bespoke spice levels available - just ask.",
    address: "London Rd, Stony Stratford, Milton Keynes MK11 1JA",
    phone: "01908 561936",
    website: "https://oldschoolhousestony.co.uk/",
    websiteLabel: "oldschoolhousestony.co.uk",
    locals: "Stony Stratford",
    lunchHours: "Mon–Sat 12 pm – 3 pm",
    sundayRoast: "Sunday 12 pm – 4 pm"
  },
  breakfast: {
    service: "12 pm – 3 pm",
    item: {
      name: "Full English",
      price: "11.95",
      desc: "Jolly Hog treacle cured back bacon, sausage, hash brown, fried egg, grilled tomato, baked beans, black pudding, mushrooms, fried bread"
    }
  },
  entree: [
    { name: "Onion Bhaji", price: "4.50", labels: ["veg"] },
    { name: "Samosa", price: "4.50 / 4.75", desc: "Choose veg or meat" },
    { name: "Garlic Mushroom", price: "6.00", labels: ["veg"] },
    { name: "Crispy Squid", price: "6.50" },
    { name: "Chicken Wings", price: "6.75" },
    { name: "Chicken Tikka", price: "7.50" },
    { name: "Battered King Prawn", price: "8.50" }
  ],
  fromTheGrill: [
    {
      name: "Veg Grill",
      price: "12.00",
      desc: "Onion Bhaji, Mogo, Samosa, Paneer",
      labels: ["veg", "GF"]
    },
    {
      name: "Small Mix Grill",
      price: "13.00",
      desc: "Chicken Wings, Chicken Tikka, Sheekh Kebab, Chicken Pakora",
      labels: ["GF"]
    },
    {
      name: "Regular Mix Grill",
      price: "16.00",
      desc: "Small grill plus Lamb Chops",
      labels: ["GF"]
    },
    {
      name: "Large Mix Grill",
      price: "20.00",
      desc: "Regular grill plus Kathmandu Tikka & Fish Pakora",
      labels: ["GF"]
    },
    {
      name: "XLarge Mix Grill",
      price: "24.00",
      desc: "Large grill plus King Prawn",
      labels: ["GF"],
      badges: [{ text: "Best Value", type: "gold" }]
    },
    {
      name: "Rack of Lamb",
      price: "17.00",
      labels: ["GF"],
      star: true,
      badges: [{ text: "Signature", type: "gold" }]
    }
  ],
  wraps: [
    { name: "Paneer Wrap", price: "9.50", labels: ["veg"] },
    { name: "Chicken Tikka Wrap", price: "10.95" },
    { name: "Sweet Chilli Wrap", price: "10.95" },
    { name: "Kebab Wrap", price: "11.50" },
    {
      name: "Special Wrap (Mixed)",
      price: "12.50",
      badges: [{ text: "Popular", type: "gold" }]
    }
  ],
  curries: [
    { name: "Chicken Korma", price: "12.00", labels: ["GF"] },
    { name: "Chicken Tikka Masala", price: "13.00", labels: ["GF"] },
    {
      name: "Special Butter Chicken",
      price: "13.00",
      desc: "Luxurious butter-infused tomato sauce with cashews, cream & fragrant spices.",
      labels: ["GF"],
      badges: [{ text: "Popular", type: "gold" }]
    },
    {
      name: "Goat Curry",
      price: "14.50",
      desc: "Slow cooked goat with a unique blend of Nepalese spices.",
      labels: ["GF"]
    },
    {
      name: "Himali Lamb",
      price: "14.50",
      desc: "Green curry with Himalayan salt, yoghurt, fresh mint & green chilli.",
      labels: ["GF"]
    }
  ],
  theEssentials: [
    { name: "Chicken Strips & Chips", price: "12.95" },
    { name: "Scampi, Chips & Peas", price: "14.50" },
    {
      name: "Beer-Battered Haddock",
      price: "14.95",
      desc: "With chips & peas or mushy peas"
    },
    { name: "Ham, Egg, Chips & Peas", price: "14.95" },
    {
      name: "Grilled Salmon",
      price: "17.95",
      desc: "With basmati rice & Mediterranean vegetables"
    }
  ],
  burgerBar: [
    {
      name: "Beef Burger & Chips",
      price: "12.95 / 13.95",
      desc: "4oz or 8oz — cheddar, lettuce, tomato & onion"
    },
    {
      name: "Chicken Bacon Burger",
      price: "13.95",
      desc: "Bacon, cheese, lettuce, tomato & onions"
    },
    {
      name: "Louisiana Cheeseburger",
      price: "14.95",
      desc: "Cheese, onion, lettuce, cajun & BBQ sauce"
    }
  ],
  nakedGreens: [
    { name: "Tuna Salad", price: "10.95", labels: ["GF"] },
    { name: "Prawn Salad", price: "11.95", labels: ["GF"] },
    { name: "Chicken & Bacon Salad", price: "11.95", labels: ["GF"] }
  ],
  baguettes: [
    { name: "English Cheddar & Pickle", price: "6.95", labels: ["veg"] },
    { name: "Tuna Mayonnaise", price: "6.95" },
    { name: "Bacon & English Cheddar", price: "7.25" },
    { name: "Butchers Sliced Ham", price: "7.95" },
    { name: "Prawn In Marie Rose", price: "7.95" },
    { name: "Southern Fried Chicken", price: "7.95" }
  ],
  jacketPotato: [
    { name: "English Cheddar", price: "7.95", labels: ["veg", "GF"] },
    { name: "Baked Beans", price: "7.95", labels: ["veg", "GF"] },
    { name: "Tuna Mayonnaise", price: "7.95", labels: ["GF"] },
    { name: "Prawn In Marie Rose", price: "7.95" },
    { name: "Additional Toppings", price: "1.95" }
  ],
  rice: [
    { name: "Boiled Rice", price: "3.50" },
    { name: "Pilau Rice", price: "4.50" },
    { name: "Mushroom Rice", price: "4.75" },
    { name: "Egg Fried Rice", price: "4.75" }
  ],
  naan: [
    { name: "Plain Naan", price: "3.75", labels: ["veg"] },
    { name: "Garlic Naan", price: "4.25", labels: ["veg"] },
    { name: "Peshwari Naan", price: "4.75", labels: ["veg"] },
    { name: "Keema Naan", price: "4.75" }
  ],
  sides: [
    { name: "Garlic Bread", price: "3.25", labels: ["veg"] },
    { name: "Skinny / Chunky Chips", price: "3.50 / 4.50", labels: ["veg"] },
    { name: "Sweet Potato Chips", price: "4.95", labels: ["veg"] },
    { name: "Side Salad", price: "4.95", labels: ["veg"] },
    { name: "Saag Aloo", price: "5.25", labels: ["veg"] }
  ],
  kids: [
    { name: "Nuggets", price: "7.00" },
    { name: "Scampi", price: "7.00" },
    { name: "CTM", price: "8.50", desc: "Chicken Tikka Masala" }
  ],
  roast: {
    name: "Traditional Roast",
    price: "15.95",
    desc: "Choice of Beef, Pork, Turkey, or Plant-Based (V). Served with roast potatoes, cabbage, green beans, roast carrots & parsnips, Yorkshire pudding and gravy.",
    note: "Served Sundays only, 12 pm – 4 pm"
  }
};
