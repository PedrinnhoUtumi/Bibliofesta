import { Menu } from "../components/Menu";
import { Pagina } from "../components/Pagina";

export function GerenciarDividas() {
    return (
        <div>
            <Pagina>
                <div className="flex flex-row w-screen h-screen font-poppins">
                    <Menu />
                    <div className="flex-1 p-8">
                        <div className="overflow-x-auto w-full flex flex-col items-center bg-[#03588C] h-full">
                            <h1 className="text-center text-2xl font-semibold mb-6 ">Gerenciar Dívidas</h1>
                            <table className="w-[90%] table-auto border-collapse border border-gray-300 shadow-md rounded-md">
                                <thead className="bg-[#48D1A0]/45 size-bold">
                                    <tr>
                                        <th>Nome</th>
                                        <th>Multa</th>
                                        <th>Valor</th>
                                        <th>Data</th>
                                        <th>Funções</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-[#c7e6ff] text-black text-center">
                                    <tr>
                                        <td>asddss</td>
                                        <td>sdsdsad</td>
                                        <td>sfddfdf</td>
                                        <td>dfdfgdgf</td>
                                        <td>
                                            <button className="bg-red-700 w-20 h-10 rounded-2xl text-white">Cancelar</button>

                                        </td>
                                    </tr>
                                    <tr>
                                        <td>dfdfsdfsd</td>
                                        <td>dfdsfdfd</td>
                                        <td>dfdfdfdf</td>
                                        <td>dsfsdfdff</td>
                                        <td>
                                            <button className="bg-red-700 w-20 h-10 rounded-2xl text-white">Cancelar</button>

                                        </td>
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