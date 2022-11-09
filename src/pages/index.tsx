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
import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

import introImg from '../assets/introductionIlustration/intro.svg'
import javascriptIcon from '../assets/skills/javascript.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import backgroundVector from '../assets/footer/backgroundVector.svg'
import quotation from '../assets/footer/quotation.svg'
import viewMore from '../assets/showcase/viewMore.svg'
import device1 from '../assets/showcase/device1.svg'
import circle3 from '../assets/showcase/circle3.svg'
import circle2 from '../assets/showcase/circle2.svg'
import circle from '../assets/showcase/circle.svg'
import english from '../assets/skills/english.png'
import reactIcon from '../assets/skills/react.svg'
import htmlIcon from '../assets/skills/html.svg'
import planet from '../assets/skills/planet.png'
import cssIcon from '../assets/skills/css.svg'
import dots from '../assets/skills/dots.svg'

import planet1 from '../assets/contactForm/planet1.svg'
import planet2 from '../assets/contactForm/planet2.svg'
import planet3 from '../assets/contactForm/planet3.svg'

import { Contact, ContactContainer } from '../components/contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Leonardo Serrão</title>
      </Head>

      <HomeContainer id="top">
        <Introduction>
          <Info>
            <span className="intro">Introduction</span>

            <h1>Hello, i'm Leonardo.</h1>
            <h2>
              I'm a <span>Front-End Dev.</span>
            </h2>

            <p>
              I enjoy creating user-centric, delightful, and human experiences
              with touch of visual and digital. I am Looking forward to
              collaborate with you!
            </p>

            <button>Hire Me</button>
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
          <span>Showcase</span>
          <h1>My Latest Projects</h1>

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
                    <h1>Título do Projeto</h1>
                    <p>Personal Project | Web Design</p>
                  </div>
                  <a href="/projects">
                    <IoIosArrowForward className="arrow-icon" />
                  </a>
                </header>
                <Image src={device1} alt="device1" width={483} height={292} />
              </div>

              <div className="card two">
                <header>
                  <div>
                    <h1>Título do Projeto</h1>
                    <p>Personal Project | Web Design</p>
                  </div>
                  <a href="/projects">
                    <IoIosArrowForward className="arrow-icon" />
                  </a>
                </header>
                <Image
                  src={circle2}
                  alt="device1"
                  width={450}
                  height={450}
                  className="background-circle"
                />
                <Image src={device1} alt="device1" width={483} height={292} />
              </div>
            </div>
            <div className="view-more">
              <div className="title">
                <h1>View more projects</h1>
                <a href="/projects">
                  <IoIosArrowForward className="arrow-icon" />
                </a>
              </div>

              <Image src={viewMore} alt="html5" width={484} height={526} />
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

        <Contact>
          <ContactContainer>
            <div className="info">
              <span>Contact Me</span>
              <h1>Let's Get in Touch.</h1>

              <p className="feel-free-message">
                Feel free to reach out for collaborations or just a friendly
                hello!
              </p>

              <div className="contact-info first">
                <AiOutlineMail className="contact-icon" />
                <p>leoserraom@gmail.com</p>
              </div>
              <div className="contact-info">
                <FaGithubSquare className="contact-icon" />
                <a
                  href="https://github.com/leo-serrao"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Github
                </a>
              </div>
              <div className="contact-info">
                <AiFillLinkedin className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/leonardo-serrão-171332104/"
                  target="_blank"
                  rel="noreferrer"
                >
                  My Linkedin
                </a>
              </div>
            </div>

            <div className="form-container">
              <Image
                src={planet1}
                alt="html5"
                width={623}
                height={553}
                className="big-planet"
              />
              <Image
                src={planet2}
                alt="html5"
                width={152}
                height={173}
                className="small-planet-1"
              />
              <Image
                src={planet3}
                alt="html5"
                width={102}
                height={133}
                className="small-planet-2"
              />

              <form action="">
                <input type="text" name="name" id="name" placeholder="Name" />
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                />

                <button>Lets' talk!</button>
              </form>
            </div>
          </ContactContainer>
        </Contact>

        <Footer>
          <div className="quote">
            <Image
              src={quotation}
              alt="quotation marks"
              width={158}
              height={124}
              className="quotation"
            />

            <p>
              Great things happen to those who don't stop <span>believing</span>
              , <span>trying</span>, <span>learning</span>, and being
              <span> grateful</span>.
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
