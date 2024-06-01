import { EnvelopeSimple, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-slate-800  text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Loja de Games Andrenas World | Copyright: {data}</p>
                  
          

          <p className="text-lg">Acesse nossas redes sociais</p>
          <div className="flex gap-7">
            <a href="https://www.linkedin.com/in/andrenas95/">
              <LinkedinLogo size={48} weight="bold" />
            </a>
            <a href="mailto:andrenas.nascimento95@gmail.com">
              <EnvelopeSimple size={48} weight="bold" />
            </a>

            <a href="https://www.github.com/andrenas95/">
              <GithubLogo size={48} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer