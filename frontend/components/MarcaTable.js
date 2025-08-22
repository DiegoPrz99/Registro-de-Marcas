export default function MarcaTable({ rows, onEdit, onDelete }) {
    return (
      <div className="card">
        <div className="header">Servicios / Registro de Marca</div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Marca</th>
              <th>Titular</th>
              <th>Estado</th>
              <th style={{width:160}}>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 && (
              <tr><td colSpan="5" className="subtle">Sin registros</td></tr>
            )}
            {rows.map((m, i) => (
              <tr key={m.id}>
                <td>#{rows.length - i}</td>
                <td>{m.nombre}</td>
                <td>{m.titular}</td>
                <td>{m.estado}</td>
                <td>
                  <button className="btn btn-success" onClick={() => onEdit(m)}>Actualizar</button>{" "}
                  <button className="btn btn-danger" onClick={() => onDelete(m.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  