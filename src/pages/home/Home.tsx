import ListarProdutosHome from "../../components/produtos/listarprodutoshome/ListarProdutosHome"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto"
import './Home.css'
function Home() {
    return (
        <>
            <div className="fundo
                bg-slate-800 
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2
                    text-white
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-2
                        items-center 
                        justify-center 
                        py-4
                        ">
                        
                        <p className='text-xl'>Aqui você encontra os melhores Games!</p>

                        <div className="flex justify-around gap-4">
                            <button className='
                                    rounded
                                    bg-slate-800 
                                    text-white 
                                    py-2
                                    px-4
                                    '>
                                <ModalProduto />
                            </button>
                        </div>
                    </div>

                    <div className="flex content-left ">
                        <img
                            src="https://ik.imagekit.io/vzr6ryejm/games/home.png?updatedAt=1705970755605"
                            alt="Imagem Página Home"
                            className='w-2/1'
                        />
                    </div>
                </div>
            </div>
            <ListarProdutosHome />
        </>
    )
}

export default Home