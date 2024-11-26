export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="admin-layout">
          <div className="navbar bg-base-100">
            <a className="btn btn-ghost text-xl">Shawn Rice | Makes Websites</a>
          </div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
