export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <h1>YemekApp Ana Sayfa</h1>
      <p>Bu sayfa geçici olarak duruyor. Alt sayfaları test edebilirsin.</p>

      <ul style={{ marginTop: 20 }}>
        <li><a href="/(customer)/home">Müşteri Ana Sayfası</a></li>
        <li><a href="/(customer)/order/123">Müşteri Sipariş Detay (örnek)</a></li>
        <li><a href="/(restaurant)/orders">Restoran Sipariş Listesi</a></li>
      </ul>
    </main>
  );
}
