import books from "../../../utils/books";
import { useRef } from "react";
import styles from "./Produk.module.css";

function Product() {
  let produkList = [...books];
  const produkContainerRef = useRef(null);
  const handleClick = () => {
    const newProduk = {
      id: produkList.length + 1,
      title: "Hinamatsuri",
      author: "Masao Ohtake",
      year: 2018,
      description:
        "While reveling in the successful clinching of a prized vase for his collection.....",
      image: "../../../../img/hina.jpg",
    };
    produkList.push(newProduk);
    if (produkContainerRef.current) {
      const newProductElement = document.createElement("div");
      newProductElement.className = styles.card;
      newProductElement.innerHTML = `
        <img src="${newProduk.image}" alt="${newProduk.title}" />
        <h3>${newProduk.title}</h3>
        <p>${newProduk.author}</p>
        <p>${newProduk.year}</p>
        <p>${newProduk.description}</p>
    `;
      produkContainerRef.current.appendChild(newProductElement);
    }
    console.log("Produk Terbaru", produkList);
    alert("Produk baru berhasil di tambahkan");
  };

  return (
    <>
      <div className={styles.produkContainer}>
        <h1 className={styles.title}>Daftar Produk</h1>
        <p className={styles.subtitle}>
          Koleksi Buku pilihan yang menajdi <strong>Best Seller</strong>.
        </p>
        <div className={styles.cardContainer} ref={produkContainerRef}>
          {produkList.map((item) => (
            <div key={item.id} className={styles.card}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.author}</p>
              <p>{item.year}</p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button onClick={handleClick} className={styles.addButton}>
          Tambah Produk
        </button>
      </div>
    </>
  );
}

export default Product;
