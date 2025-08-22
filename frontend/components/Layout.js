import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <aside className="sidebar">
        <div className="header">Panel</div>
        <div className="subtle">Servicios</div>
        <div style={{marginTop:8, fontWeight:700}}>Registro de Marca</div>
        <div style={{marginTop:18}}>
          <Link href="/" className="btn btn-ghost" style={{display:"block", marginBottom:8}}>Listado</Link>
          <Link href="/nueva" className="btn btn-primary" style={{display:"block"}}>Nuevo Registro</Link>
        </div>
      </aside>
      <main className="content">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
