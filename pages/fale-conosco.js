import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/FaleConosco.module.css";

export default function FaleConosco() {
  return (
    <>
      <Head>
        <title>Instituto Blue Horizon - Fale Conosco</title>
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
      
      <main className={styles.main}>
        <h1 className={styles.title}>Fale Conosco</h1>
        <p class="p30">Estamos aqui para ajudar! Se você tiver dúvidas, sugestões ou precisar de mais<br></br> informações sobre o Instituto Blue Horizon e nossas iniciativas, por favor, entre<br></br> em contato conosco através dos seguintes canais ou preencha o formulário ao<br></br> lado:</p>
        <img src="/golfinho.png" alt="golfinho" class="img30" />

        <form className={styles.form}>
          <label className={styles.label} htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            className={styles.input}
          />

          <label className={styles.label} htmlFor="telefone">Telefone:</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Digite seu telefone"
            className={styles.input}
          />

          <label className={styles.label} htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu e-mail"
            className={styles.input}
          />

          <label className={styles.label} htmlFor="mensagem">Como podemos ajudar?</label>
          <textarea
            id="mensagem"
            name="mensagem"
            placeholder="Descreva sua dúvida ou solicitação"
            className={styles.textarea}
          ></textarea>

          <button type="submit" className={styles.submitBtn}>Enviar</button>
        </form>
      </main>

      <footer>
        <div className={styles.footerContent}>
          <div className={styles.logoFooter}>
            
            <img src="/rodap.png" alt="rodap" class="img40" />
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
