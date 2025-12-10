interface Props {
  params: { orderId: string };
}

export default function OrderDetailPage({ params }: Props) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Sipariş Durumu</h1>
      <p>Sipariş ID: {params.orderId}</p>
      <p>Bu ekranda sipariş durumu, doğrulama kodu ve konum bilgileri gösterilecek.</p>
    </div>
  );
}
