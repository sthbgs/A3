import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Importancia.module.css";


export default function Importancia() {
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
        <h1>A Importância</h1>
        <p class="p7"><strong>Biodiversidade Marinha e Impacto Global</strong></p>
        <p class="p2">A importância da biodiversidade marinha para a saúde do planeta</p>
        <p class="p3">Os oceanos cobrem 70% da superfície terrestre e são responsáveis pela<br></br> produção de mais da metade do oxigênio que respiramos, além de regularem o <br></br>clima global e absorverem grande parte do CO₂ emitido. A biodiversidade<br></br> marinha, composta por milhões de espécies de organismos que vivem nas águas<br></br> salgadas, é essencial para o equilíbrio dos ecossistemas e a sustentabilidade da<br></br> vida humana. No entanto, essa biodiversidade está ameaçada por fatores como a <br></br>acidificação dos oceanos, a poluição, a pesca predatória e a destruição de<br></br> habitats.</p>
        <p class="p6">Os efeitos da acidificação e poluição marinha </p>
        <p class="p5">A acidificação dos oceanos é um processo causado pelo aumento da absorção<br></br> de dióxido de carbono (CO₂) atmosférico pelas águas marinhas. Esse fenômeno<br></br> altera a química dos oceanos, prejudicando organismos como os corais e<br></br> espécies com conchas calcárias, essenciais para as cadeias alimentares<br></br> marinhas. Além disso, há consequências para a pesca e a saúde dos recifes de<br></br> corais</p>
        <p class="p10"><strong>ALGUMAS ESPÉCIES </strong></p>
        <p class="p11">Baleia-azul (Balaenoptera musculus)</p>
        <p class="p12">Status de Conservação: Criticamente Ameaçada (IUCN)</p>
        <p class="p13">O maior animal que já existiu na Terra, a baleia-azul é uma verdadeira gigante dos<br></br> oceanos. Elas desempenham um papel crucial no ciclo de nutrientes dos mares. <br></br>Seus movimentos ajudam a misturar e redistribuir nutrientes, que sustentam toda <br></br>a cadeia alimentar marinha. Sem as baleias-azuis, os oceanos seriam muito<br></br> menos produtivos.</p>
        <img src="/baleia2.png" alt="baleia2" class="img11" />

        <p class="p14">Tubarão-Branco (Carcharodon carcharias)</p>
        <p class="p15">Status de Conservação: Vulnerável (IUCN)</p>
        <p class="p16">Este predador de topo desempenha um papel essencial na manutenção do<br></br> equilíbrio das populações de presas. Sem os tubarões, haveria um aumento<br></br> descontrolado na população de certas espécies, o que poderia levar à degradação<br></br> dos recifes de corais e outras áreas marinhas.</p>
        <img src="/tubarao.png" alt="tubarao" class="img14" />

        <p class="p17"><strong>BENEFÍCIOS DO OCEANO</strong></p>
        <p class="p18">Os oceanos são essenciais para o equilíbrio ecológico e influenciam diretamente<br></br> nossas vidas. Eles produzem entre 50% e 70% do oxigênio que respiramos, regulam<br></br> o clima global e garantem a segurança alimentar de mais de 3 bilhões de pessoas.<br></br> A biodiversidade marinha também oferece compostos medicinais importantes e <br></br>sustenta economias inteiras por meio da pesca, turismo e transporte. Além disso,<br></br> os oceanos proporcionam benefícios culturais e espirituais, promovendo bem-estar<br></br> mental. Contudo, ameaças como a poluição, a sobrepesca e as mudanças<br></br> climáticas colocam esses benefícios em risco. A ONG Blue Horizon se dedica a <br></br>proteger os oceanos, promovendo a conservação e conscientização.</p>
        <img src="/colagem.png" alt="colagem" class="img17" />
        
       
      </main>
      <footer>
        <div className={styles.footerContent}>
          <div className={styles.logoFooter}>
          
            <img src="/rodap.png" alt="rodap" class="img20" />
          </div>
          <div className={styles.contactInfo}>
            <p class="p4"><strong>Contato:</strong><br></br> contato@institutobluehorizon.org.br</p>
            <p class="p4"><strong><br></br>Telefone:</strong><br></br> (12) 3833-6859 | (12) 3833-8759</p>
            <p class="p4"><strong>Endereço:</strong><br></br> Av. Guarani, 1200 - Costeira do Pirajicaú<br></br> COSTEIRA, Florianópolis - SC, 88401-001</p>
          </div>
          <div className={styles.socialMedia}>
            <a href="https://www.facebook.com/BlueHorizon"><Image src="/facebook-icon.png" alt="Facebook" width={60} height={60} /></a>
            <a href="https://www.instagram.com/InstitutoBlueHorizon"><Image src="/instagram-icon.png" alt="Instagram" width={80} height={80} /></a>
            <a href="https://www.linkedin.com/company/BlueHorizon"><Image src="/linkedin-icon.png" alt="LinkedIn" width={50} height={50} /></a>
          </div>
        </div>
        
      </footer>
    </>
  );
}
