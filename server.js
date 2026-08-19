const express = require("express");

const app = express();

app.use(express.json());

const products = [
  {
    id: "prod_001",
    title: "🍔 Classic Burger - SAR 25"
  },
  {
    id: "prod_002",
    title: "🍔 Double Cheese Burger - SAR 32"
  },
  {
    id: "prod_003",
    title: "🍗 Crispy Chicken Burger - SAR 27"
  },
  {
    id: "prod_004",
    title: "🍕 Margherita Pizza - SAR 29"
  },
  {
    id: "prod_005",
    title: "🍕 Pepperoni Pizza - SAR 35"
  },
  {
    id: "prod_006",
    title: "🍕 Chicken BBQ Pizza - SAR 38"
  },
  {
    id: "prod_007",
    title: "🍗 Chicken Strips - SAR 24"
  },
  {
    id: "prod_008",
    title: "🍟 French Fries - SAR 10"
  },
  {
    id: "prod_009",
    title: "🧀 Cheese Fries - SAR 15"
  },
  {
    id: "prod_010",
    title: "🥤 Pepsi - SAR 5"
  },
  {
    id: "prod_011",
    title: "🥤 7UP - SAR 5"
  },
  {
    id: "prod_012",
    title: "💧 Mineral Water - SAR 2"
  }
];

app.get("/products", (req, res) => {
  res.json({
    products
  });
});

app.listen(3000, () => {
  console.log("Mock API running on http://localhost:3000");
});