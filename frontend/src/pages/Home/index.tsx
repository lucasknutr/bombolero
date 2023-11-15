import './style.css';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import ChecklistIcon from '@mui/icons-material/Checklist';


const Home = () => {
  return (
    <>
    <div className="flex items-center justify-center h-screen">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <div className="home-options">
                    <CurrencyExchangeIcon className='icons' style={{ fontSize: 60 }}/>
                    {/* <p>CAIXA</p> */}
                </div>
                <div className="home-options">
                    <ChecklistIcon className='icons' style={{ fontSize: 60 }}/>
                    {/* <p>ESTOQUE</p> */}
                </div>
                <div className="home-options" >
                    ESTOQUE
                </div>
                <div className="home-options" >
                    VER CARDÁPIO
                </div>
        </div>
    </div>
    </>
  )
}

export default Home;