const dbProducts = [
  {
    id: "1",
    image: "/img/aoKhoac-muaDong-nu.jpg",
    nameProduct: "Áo khoác mùa đông",
    price: "250.000",
    quantity: "10",
  },
  {
    id: "2",
    image: "/img/aothun-angel-xxii.jpg",
    nameProduct: "Áo thun angel",
    price: "50.000",
    quantity: "10",
  },
  {
    id: "3",
    image: "/img/Aokhoac-dongphuc-1980-1.jpg",
    nameProduct: "Áo khoác đồng phục",
    price: "550.000",
    quantity: "10",
  },
  {
    id: "4",
    image: "/img/aothun-nu-basic-mautrang-be.jpg",
    nameProduct: "Áo thun nữ",
    price: "70.000",
    quantity: "10",
  },
  {
    id: "5",
    image: "/img/bo-quan-ao-khoac-ni-co-mu-nam.jpg",
    nameProduct: "Bộ quân áo khoác có mũ (nam)",
    price: "650.000",
    quantity: "10",
  },
];
const productsDb = localStorage.getItem("products");
if (!productsDb) {
  localStorage.setItem("products", JSON.stringify(dbProducts));
}
