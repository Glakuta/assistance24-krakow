import './globals.css';

export const metadata = {
  title: 'Assistance24 - POMOC DROGOWA KRAKÓW - Laweta Kraków',
  description: '▶️  Pomoc drogowa Kraków ▶️ 24H ▶️  Laweta Kraków ▶️  Auto Pomoc ▶️  Osobowe ▶️  Ciężarowe ▶️  TIR ▶️  Pomagamy 24/7. 📞 604 944 755',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
