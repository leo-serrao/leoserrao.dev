/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Image from 'next/image'
import {
  HomeContainer,
  Illustration,
  Info,
  Introduction,
  SkillsContainer,
  Specializing
} from '../styles/pages/home'

import introImg from '../assets/introduction ilustration/intro.svg'
import javascriptIcon from '../assets/skills/javascript.svg'
import typescriptIcon from '../assets/skills/typescript.svg'
import english from '../assets/skills/english.png'
import reactIcon from '../assets/skills/react.svg'
import htmlIcon from '../assets/skills/html.svg'
import cssIcon from '../assets/skills/css.svg'
import dots from '../assets/skills/dots.svg'

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
      </HomeContainer>
    </>
  )
}
