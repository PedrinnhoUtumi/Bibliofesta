import { MenuTelaPrincipal } from "../components/MenuTelaPrincipal";
import { Pagina } from "../components/Pagina";

export function Emprestimo() {
    return (
        <div>
            <Pagina showMenu={false}>
                <MenuTelaPrincipal/>
            </Pagina>
        </div>
    )
}