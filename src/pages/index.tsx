/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import {
  Footer,
  HomeContainer,
  Illustration,
  Info,
  Introduction,
  Showcase,
  ShowcaseContainer,
  SkillsContainer,
  Specializing
} from '../styles/pages/home'

import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowUp } from 'react-icons/io'

import introImg from '../assets/introductionIlustration/intro.svg'

import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { LiaFlagUsaSolid } from "react-icons/lia";
import planet from '../assets/skills/planet.png'
import moon from '../assets/skills/moon.png'

import viewMore from '../assets/showcase/viewMore.svg'
import circle3 from '../assets/showcase/circle3.svg'
import circle2 from '../assets/showcase/circle2.svg'
import circle from '../assets/showcase/circle.svg'

import dtMoneyBackground2 from '../assets/projects/dt-money-background2.svg'
import dtMoneyDevice from '../assets/projects/dt-money-device.svg'
import SerraoSeguros from '../assets/projects/serrao-seguros-device.svg'

import quotationPurple from '../assets/footer/quotation-purple.svg'

import ContactForm from '../components/contact/contacts'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Leonardo Serrão</title>
      </Head>

      <HomeContainer>
        <Introduction>
          <Info>
            <span className="intro">Introduction</span>

            <h1>Hello, i'm Leonardo.</h1>
            <h2>
              I'm a <span>Front-End Dev.</span>
            </h2>

            <p>
              I enjoy bringing code to life through beautiful screens and
              challenging projects. I am Looking forward to collaborate with
              you!
            </p>

            <a href="#contact">Hire Me</a>
          </Info>
          <Illustration>
            <Image src={introImg} alt="" width={600} height={600} />
          </Illustration>
        </Introduction>

        <Specializing>
          <div className="title-container">
            <h1>SKILLS </h1>
            <span>Current areas of proficiency</span>
          </div>

          <Image
            src={planet}
            alt="html5"
            width={260}
            height={260}
            className="skills-planet"
          />
          <SkillsContainer>
            <div className="skill">
              <SiHtml5 />
            </div>

            <div className="skill">
              <SiCss3 />
            </div>

            <div className="skill">
              <SiJavascript />
            </div>

            <div className="skill">
              <SiTypescript />
            </div>

            <div className="skill">
              <SiReact />
            </div>

            <div className="skill">
              <LiaFlagUsaSolid />
            </div>

            <Image
            src={moon}
            alt="html5"
            width={180}
            height={180}
            className="skills-moon"
          />

          </SkillsContainer>
        </Specializing>

        <Showcase>
          <div className="showcase-title">
            <h1>PROJECTS</h1>
            <span>Featured Work and Project Showcase</span>
          </div>

          <ShowcaseContainer>
            <div className="cards-container">
              <div className="card">
                <header>
                  <div>
                    <h1>Financial Manager</h1>
                    <p>Personal Project | Web Design</p>
                  </div>
                  <Link href="/projects">
                    <IoIosArrowForward className="arrow-icon" />
                  </Link>
                </header>
                <Image
                  src={dtMoneyDevice}
                  alt="device1"
                  width={483}
                  height={292}
                />
                <Image
                  src={dtMoneyBackground2}
                  alt="device1"
                  width={607}
                  height={591}
                  className="dt-money-background"
                />
              </div>

              <div className="card two">
                <header>
                  <div>
                    <h1>Serrão Seguros</h1>
                    <p>Personal Project | Web Design</p>
                  </div>
                  <Link href="/projects">
                    <IoIosArrowForward className="arrow-icon" />
                  </Link>
                </header>
                <Image
                  src={circle2}
                  alt="device1"
                  width={450}
                  height={450}
                  className="background-circle"
                />
                <Image
                  src={SerraoSeguros}
                  alt="device1"
                  width={483}
                  height={292}
                />
              </div>
            </div>
            <div className="view-more">
              <div className="title">
                <Link href="/projects">
                  View more projects
                  <IoIosArrowForward className="arrow-icon" />
                </Link>
              </div>

              <Image
                src={viewMore}
                alt="html5"
                width={484}
                height={526}
                className="view-more-background"
              />
            </div>
          </ShowcaseContainer>
        </Showcase>

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
              <span>Programmer</span>, an organism that turns
              <span> coffee</span> into
              <span> software</span>.
            </p>

            <span className="copyright">
              Copyright Leonardo Serrão Munaretto. All rights Reserved
            </span>
          </div>

          <a href="#top">
            <IoIosArrowUp color={'#5F49BF'} className="arrow-up-icon" />
          </a>
        </Footer>
      </HomeContainer>
    </>
  )
}
