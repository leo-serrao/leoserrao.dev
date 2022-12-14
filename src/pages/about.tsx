import Head from 'next/head'
import Image from 'next/image'
import { AboutContainer, AboutMe, Footer } from '../styles/pages/about'

import { AiOutlineDownload } from 'react-icons/ai'

import me from '../assets/about/me.png'
import moon from '../assets/about/moon.svg'
import line from '../assets/projects/title-line.svg'
import ContactForm from '../components/contact/contacts'

import quotationPurple from '../assets/footer/quotation-purple.svg'
import { IoIosArrowUp } from 'react-icons/io'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Leonardo Serrão</title>
      </Head>

      <AboutContainer>
        <AboutMe>
          <div className="photo-container">
            <Image
              src={moon}
              alt=""
              width={100}
              height={100}
              className="moon"
            />
            <div className="photo">
              <Image src={me} alt="" width={350} height={350} className="me" />
            </div>
          </div>

          <div className="info">
            <span>
              <Image src={line} alt="" />
              About Me
            </span>

            <h1>Leonardo Serrão</h1>
            <h2>Front-End Dev</h2>

            <p>
              Hello! <br /> I’m an System Analysis and Development student in
              Universidade Norte do Paraná (UNOPAR) and i’m currently working at
              TATA Consultancy Services (TCS) at Londrina - PR. The technologie
              i enjoy the most working with is ReactJS. Looking forward for
              great collaboration!
            </p>

            <div className="downloads">
              <a className="download" href="cv-leonardo-serrao-pt.pdf" download>
                <AiOutlineDownload className="download-icon" /> Download CV
                (PT-BR)
              </a>
              <a className="download" href="cv-leonardo-serrao-en.pdf" download>
                <AiOutlineDownload className="download-icon" /> Download CV
                (EN-US)
              </a>
            </div>
          </div>
        </AboutMe>

        <ContactForm />

        <Footer>
          <div className="quote">
            <Image
              src={quotationPurple}
              alt="quotation marks"
              width={158}
              height={124}
              className="quotation"
            />

            <p>
              <span>Experience</span>, is the name
              <span> everyone</span> gives to their
              <span> mistakes</span>.
            </p>

            <span className="copyright">
              Copyright Leonardo Serrão Munaretto. All rights Reserved
            </span>
          </div>

          <a href="#top">
            <IoIosArrowUp color={'#5F49BF'} className="arrow-up-icon" />
          </a>
        </Footer>
      </AboutContainer>
    </>
  )
}
