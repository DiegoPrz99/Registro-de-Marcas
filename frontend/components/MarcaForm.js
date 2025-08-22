import { useState } from "react";

export default function MarcaForm({ initial = { nombre:"", titular:"", estado:"Activo" }, onSubmit, onCancel }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ ...initial });

  const next = () => setStep(s => Math.min(3, s + 1));
  const back = () => setStep(s => Math.max(1, s - 1));

  const handle = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const Stepper = () => (
    <div className="stepper">
      {[1,2,3].map(n => (
        <div key={n} className={`step ${step === n ? "active" : step > n ? "done" : ""}`}>{n}</div>
      ))}
    </div>
  );

  return (
    <div className="card">
      <div className="header">Servicios / Registro de Marca</div>
      <Stepper/>
      {step === 1 && (
        <>
          <div className="subtle">Información de la Marca</div>
          <label>Marca a Registrar</label>
          <input className="input mt" name="nombre" value={form.nombre} onChange={handle} placeholder="p. ej. Marca X"/>
          <div className="mt">
            <button className="btn btn-secondary" onClick={onCancel}>Cancelar</button>{" "}
            <button className="btn btn-primary" onClick={next} disabled={!form.nombre.trim()}>Continuar →</button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="subtle">Información del Titular</div>
          <label>Titular de la marca</label>
          <input className="input mt" name="titular" value={form.titular} onChange={handle} placeholder="Nombre del titular"/>
          <div className="row mt">
            <div>
              <label>Estado</label>
              <select className="input mt" name="estado" value={form.estado} onChange={handle}>
                <option>Activo</option>
                <option>Inactivo</option>
              </select>
            </div>
          </div>
          <div className="mt">
            <button className="btn btn-secondary" onClick={back}>Atrás</button>{" "}
            <button className="btn btn-primary" onClick={next} disabled={!form.titular.trim()}>Continuar →</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="subtle">Resumen</div>
          <div className="row">
            <div>
              <label>Marca a Registrar</label>
              <input className="input mt" value={form.nombre} disabled/>
            </div>
            <div>
              <label>Titular de la marca</label>
              <input className="input mt" value={form.titular} disabled/>
            </div>
          </div>
          <div className="row mt">
            <div>
              <label>Estado</label>
              <input className="input mt" value={form.estado} disabled/>
            </div>
          </div>
          <div className="mt">
            <button className="btn btn-secondary" onClick={back}>Atrás</button>{" "}
            <button className="btn btn-primary" onClick={() => onSubmit(form)}>Crear</button>
          </div>
        </>
      )}
    </div>
  );
}
