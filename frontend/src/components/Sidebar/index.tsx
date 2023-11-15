import './style.css';
import logo from '../../assets/logo.png';

const Sidebar = () => {
    const options = ["Cardapio", "Pagamentos", "Pedidos"];

    return (
        <div>
            <div className="side-bar-body w-[20%] h-[100svh] flex flex-col fixed justify-start items-start gap-10 text-2xl text-white pt-48">
                <div className="w-[100%] h-[10%] flex justify-center items-center px-10">
                    <img src={logo} alt="" />
                </div>
                {options.map((option, index) => (
                    <div key={index} className="w-[100%] py-10 hover:bg-yellow-900 cursor-pointer pl-5">
                        {option}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar