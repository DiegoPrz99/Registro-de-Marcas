import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import MarcaTable from "../components/MarcaTable";
import { MarcaAPI } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [rows, setRows] = useState([]);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({ nombre:"", titular:"", estado:"Activo" });
  const [theme, setTheme] = useState("dark");

  const load = async () => {
    const data = await MarcaAPI.list();
    setRows(data);
  };

  useEffect(() => { 
    load(); 
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const del = async (id) => {
    if (confirm("¿Eliminar este registro?")) {
      await MarcaAPI.remove(id);
      await load();
    }
  };

  const startEdit = (m) => {
    setEditing(m);
    setForm({ nombre: m.nombre, titular: m.titular, estado: m.estado });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submitEdit = async (e) => {
    e.preventDefault();
    if (!editing) return;
    await MarcaAPI.update(editing.id, form);
    setEditing(null);
    setForm({ nombre:"", titular:"", estado:"Activo" });
    await load();
  };

  return (
    <Layout>
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16}}>
        <h1>Registro de Marcas</h1>
        
        <div style={{display:"flex", gap:"8px"}}>
          <button 
            className="btn btn-ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? "🌞 Claro" : "🌙 Oscuro"}
          </button>
          <Link className="btn btn-primary" href="/nueva">Nuevo Registro</Link>
        </div>
      </div>

      {editing && (
        <div className="card" style={{marginBottom:16}}>
          <div className="header">Editar registro #{editing.id}</div>
          <form onSubmit={submitEdit}>
            <div className="row">
              <div>
                <label>Marca</label>
                <input className="input mt" value={form.nombre} onChange={e=>setForm({...form, nombre:e.target.value})}/>
              </div>
              <div>
                <label>Titular</label>
                <input className="input mt" value={form.titular} onChange={e=>setForm({...form, titular:e.target.value})}/>
              </div>
            </div>
            <div className="row mt">
              <div>
                <label>Estado</label>
                <select className="input mt" value={form.estado} onChange={e=>setForm({...form, estado:e.target.value})}>
                  <option>Activo</option>
                  <option>Inactivo</option>
                </select>
              </div>
            </div>
            <div className="mt">
              <button type="button" className="btn btn-secondary" onClick={()=>setEditing(null)}>Cancelar</button>{" "}
              <button className="btn btn-success" type="submit">Guardar cambios</button>
            </div>
          </form>
        </div>
      )}

      <MarcaTable rows={rows} onEdit={startEdit} onDelete={del}/>
    </Layout>
  );
}
