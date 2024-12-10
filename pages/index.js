import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Instituto Blue Horizon - Início</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <Image 
              src="/baleia.png" 
              alt="Logo Instituto Blue Horizon" 
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className={styles.textNavContainer}>
            <div className={styles.logoText}>
              Instituto<br /><br />
              Blue Horizon
            </div>
            <nav className={styles.navigation}>
              <ul>
                <li><a href="/">Início</a></li>
                <li><a href="/importancia">Importância</a></li>
                <li><a href="/como-contribuir">Como Contribuir</a></li>
                <li><a href="/fale-conosco">Fale Conosco</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main>
        <h1>Conheça o Instituto Blue Horizon</h1>
       
      </main>
      <footer>
        <div className={styles.footerContent}>
          
          <div className={styles.logoFooter}>
          
            <p class="p1">
            O Instituto Blue Horizon é uma organização não governamental sem fins lucrativos (ONG), <br></br>fundada em 2020 nasceu da visão de um grupo de cientistas marinhos, ambientalistas <br></br> e educadores comprometidos em enfrentar os desafios globais que ameaçam nossos oceanos. <br></br>Localizado na cidade costeira de Florianópolis, no Brasil, o instituto se dedica à preservação e <br></br>restauração dos ecossistemas marinhos através de pesquisa científica, educação pública e <br></br>ações comunitárias. <br></br>
            Tem como objetivo apoiar e desenvolver uma série de iniciativas, incluindo projetos de pesquisa<br></br> científica, programas de resgate e reabilitação da fauna marinha, e campanhas de educação<br></br> ambiental. Além disso, promove a conscientização sobre o manejo e a redução de resíduos<br></br> sólidos no ambiente marinho.<br>
            </br> Em parceria com o Aquário de Ubatuba, criou e mantém o CRETA (Centro de Reabilitação e Triagem <br></br>de Animais Aquáticos), que atua no resgate, reabilitação e reintrodução da fauna aquática nas<br></br> regiões da Ilhabela, Ubatuba, Caraguá e São Sebastião.            </p>
            <p class="p1">Através de nossas atividades e da atuação em rede com instituições parceiras buscamos:</p>
          </div>
          
        
          <img src="/nos.png" alt="nos" class="img" />
            
           <img src="/raza.png" alt="raza" class="img2" />
            
            <img src="/valor.png" alt="valor" class="img3" />
          
          <img src="/local.png" alt="local" class="img4" />

          <img src="/parceiro.png" alt="parceiro" class="img5" />

          <img src="/rodap.png" alt="rodap" class="img6" />
           
            

          <div className={styles.contactInfo}>
            <p class="p4"><strong>Contato:</strong><br></br> contato@institutobluehorizon.org.br</p>
            <p class="p4"><strong><br></br>Telefone:</strong><br></br> (12) 3833-6859 | (12) 3833-8759</p>
            <p class="p4"><strong>Endereço:</strong><br></br> Av. Guarani, 1200 - Costeira do Pirajicaú<br></br> COSTEIRA, Florianópolis - SC, 88401-001</p>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/BlueHorizon"><Image src="/facebook-icon.png" alt="Facebook" width={70} height={70} /></a>
            <a href="https://www.instagram.com/InstitutoBlueHorizon"><Image src="/instagram-icon.png" alt="Instagram" width={100} height={100} /></a>
            <a href="https://www.linkedin.com/company/BlueHorizon"><Image src="/linkedin-icon.png" alt="LinkedIn" width={60} height={60} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
