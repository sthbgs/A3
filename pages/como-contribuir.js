import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Contribuir.module.css";

export default function Contribuir() {
  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    cep: "",
    telefone: "",
    email: "",
    valorDoacao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    setFormData({
      nome: "",
      dataNascimento: "",
      cep: "",
      telefone: "",
      email: "",
      valorDoacao: "",
    });
  };

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
        <h1>Contribua com a Blue Horizon</h1>
        <p class="p20">A Blue Horizon está completamente aberta a receber ajuda externa! Nós<br></br> aceitamos diversas formas de contribuições que são fundamentais para o<br></br> sucesso de nossos projetos de conservação. Desde doações financeiras que<br></br> financiam diretamente nossas iniciativas de proteção dos ecossistemas<br></br> marinhos, até oportunidades de voluntariado em ações de limpeza e<br></br> monitoramento.</p>
        <p class="p21">Além disso, empresas podem se tornar parceiras corporativas, promovendo<br></br> nossas campanhas e adotando práticas sustentáveis que beneficiam a vida<br></br> marinha. Junte-se a nós e descubra como você pode fazer a diferença na<br></br> preservação dos oceanos e na promoção de um futuro mais sustentável para<br></br> todos. Cada pequena ação conta, e com sua ajuda, podemos alcançar grandes<br></br> resultados. Seja um guardião dos oceanos com a Blue Horizon!  :whale:</p>


        <p class="p88"><strong>DOE E <br></br>SE TORNE <br></br>UM GUARDIÃO</strong></p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome Completo</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input
              type="date"
              id="dataNascimento"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cep">CEP</label>
            <input
              type="text"
              id="cep"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="telefone">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="valorDoacao">Valor da Doação (R$)</label>
            <input
              type="number"
              id="valorDoacao"
              name="valorDoacao"
              value={formData.valorDoacao}
              onChange={handleChange}
              required
              min="1"
              step="0.01"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Enviar
          </button>
        </form>
        <img src="/tartaruga.png" alt="tartaruga" class="img88" />
        <p class="p22"><strong>VOLUNTARIADO</strong></p>
        <p class="p23">Para se voluntariar em nossos projetos, acesse nosso Instagram<br></br><strong> @InstitutoBlueHorizon</strong> onde você encontrará todas as informações necessárias e<br></br> poderá entrar em contato com nosso suporte especializado. Eles estarão prontos<br></br> para te ajudar a escolher a atividade de voluntariado que melhor se encaixa no<br></br> seu perfil e disponibilidade. Além disso, fornecerão orientações detalhadas sobre<br></br> como se preparar para as atividades e como você pode contribuir efetivamente<br></br> para a preservação dos oceanos.</p>
        <p class="p24">Junte-se a nós e faça parte desta importante missão de proteger e restaurar<br></br> nossos ecossistemas marinhos. Cada ação conta, e com sua ajuda, podemos<br></br> fazer uma grande diferença!</p>
        <img src="/mao.png" alt="mao" class="img22" />
        
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
