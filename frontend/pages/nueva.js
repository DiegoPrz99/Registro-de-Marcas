import Layout from "../components/Layout";
import MarcaForm from "../components/MarcaForm";
import { MarcaAPI } from "../utils/api";
import { useRouter } from "next/router";

export default function Nueva() {
  const router = useRouter();

  const create = async (payload) => {
    await MarcaAPI.create(payload);
    router.push("/");
  };

  return (
    <Layout>
      <h1 style={{marginBottom:12}}>Crear Registro</h1>
      <MarcaForm onSubmit={create} onCancel={()=>router.push("/")}/>
    </Layout>
  );
}
