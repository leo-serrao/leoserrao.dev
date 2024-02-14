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

import javascriptIcon from '../assets/skills/javascript.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import english from '../assets/skills/english.png'
import reactIcon from '../assets/skills/react.svg'
import htmlIcon from '../assets/skills/html.svg'
import planet from '../assets/skills/planet.png'
import cssIcon from '../assets/skills/css.svg'
import dots from '../assets/skills/dots.svg'

import viewMore from '../assets/showcase/viewMore.svg'
import circle3 from '../assets/showcase/circle3.svg'
import circle2 from '../assets/showcase/circle2.svg'
import circle from '../assets/showcase/circle.svg'

import dtMoneyBackground2 from '../assets/projects/dt-money-background2.svg'
import dtMoneyDevice from '../assets/projects/dt-money-device.svg'
import igniteShop from '../assets/projects/ignite-shop-device.svg'

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
          <span>Specializing</span>
          <h1>Skills</h1>

          <Image
            src={planet}
            alt="html5"
            width={280}
            height={280}
            className="skills-planet"
          />
          <SkillsContainer>
            <div className="skill">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image src={htmlIcon} alt="html5" width={80} height={80} />
            </div>

            <div className="skill">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image src={cssIcon} alt="css" width={80} height={80} />
            </div>

            <div className="skill">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image
                src={javascriptIcon}
                alt="javascript"
                width={80}
                height={80}
              />
            </div>

            <div className="skill typescript">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image
                src={typescriptIcon}
                alt="typescript"
                width={80}
                height={80}
              />
            </div>

            <div className="skill react">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image src={reactIcon} alt="react" width={80} height={80} />
            </div>

            <div className="skill english">
              <div className="skillBar">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
              <Image src={english} alt="english" width={80} height={80} />
            </div>
          </SkillsContainer>
          <Image
            src={dots}
            alt="html5"
            width={347}
            height={353}
            className="skills-dots"
          />
        </Specializing>

        <Showcase>
          <div className="showcase-title">
            <span>Showcase</span>
            <h1>My Latest Projects</h1>
          </div>

          <Image
            src={circle}
            alt="html5"
            width={574}
            height={583}
            className="skills-circle"
          />
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
                    <h1>T-Shirt Shop</h1>
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
                  src={igniteShop}
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
          <Image
            src={circle3}
            alt="html5"
            width={345}
            height={345}
            className="skills-circle2"
          />
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
