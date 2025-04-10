import imagemLogin from '../assets/imagemLogin.png'
export function MenuTelaLogin() {

return (
    <aside className="bg-[#FFAA00] flex flex-col w-2/3 h-screen items-center justify-center">
        <img src={imagemLogin} alt='login' className='w-3xl'/>
    </aside>
);
}