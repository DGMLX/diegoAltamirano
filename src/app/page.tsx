import SeccionSobreMi from "@/components/principal/SeccionSobreMi";
import SeccionContacto from "@/components/principal/SeccionContacto";
import SeccionInvestigaciones from "@/components/principal/SeccionInvestigaciones";
import SeccionProyectos from "@/components/principal/SeccionProyectos";
import SeccionServicios from "@/components/principal/SeccionServicios";
import SeccionTrayectoria from "@/components/principal/SeccionTrayectoria";
import SeccionInfo from "@/components/principal/SeccionInfo";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="mt-10 mx-28  "  >
    <a id="sobreMi"></a>
    <SeccionSobreMi/>
    <SeccionInfo/>
    <SeccionInvestigaciones/>
    <a id="trayectoria"></a>
    <SeccionTrayectoria/>
    <a id="servicios"></a>
    <SeccionServicios/>
    <a id="proyectos"></a>
    <SeccionProyectos/>
    <a id="contacto"></a>
    <SeccionContacto/>
    <Footer/>
    </main>
  );
}
