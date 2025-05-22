import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";

export function GerenciarDividas() {
    return (
        <div>
            <Pagina>
                <div className="flex flex-row w-screen h-screen font-poppins"> 
                    <Menu/>
                   <div className="flex-1 p-8">
                   <h1 className="text-center text-2xl font-semibold mb-6">Gerenciar Dívidas</h1>
                   <div className="overflow-x-auto w-full">
                        <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md rounded-md">
                            <thead className="bg-[#008cff] size-bold">
                                <tr>
                                    <th>Nome</th>
                                    <th>Multa</th>
                                    <th>Valor</th>
                                    <th>Data</th>
                                </tr>
                            </thead>
                            <tbody className="bg-[#c7e6ff] text-black text-center">
                            <tr>
                                <td>asddss</td>
                                <td>sdsdsad</td>
                                <td>sfddfdf</td>
                                <td>dfdfgdgf</td>
                            </tr>
                            <tr>
                                <td>dfdfsdfsd</td>
                                <td>dfdsfdfd</td>
                                <td>dfdfdfdf</td>
                                <td>dsfsdfdff</td>
                            </tr>
                            </tbody>
                        </table>
                   </div>
                   </div>
                </div>
            </Pagina>
        </div>
    )
}