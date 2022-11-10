/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
  Card,
  CardsContainer,
  Footer,
  ProjectsContainer,
  Title
} from '../styles/pages/projects'

import Image from 'next/image'

import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

import quotationPurple from '../assets/footer/quotation-purple.svg'
import titleLine from '../assets/projects/title-line.svg'

import device1 from '../assets/projects/dt-money-device.svg'
import device2 from '../assets/projects/ignite-shop-device.svg'
import device3 from '../assets/projects/pomodoro-device.svg'
import device4 from '../assets/projects/link-shortener-device.svg'
import device5 from '../assets/projects/zip-search-device.svg'

import background1 from '../assets/projects/dt-money-background.svg'
import background2 from '../assets/projects/ignite-shop-background.svg'
import background3 from '../assets/projects/pomodoro-background.svg'
import background4 from '../assets/projects/link-shortener-background.svg'
import background5 from '../assets/projects/zip-search-background.svg'
import background6 from '../assets/projects/view-more.svg'
import ContactForm from '../components/contact/contacts'
import { IoIosArrowUp } from 'react-icons/io'

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Leonardo Serrão</title>
      </Head>
      <ProjectsContainer>
        <Title>
          <span>
            <Image src={titleLine} alt="" width={0} height={0} />
            My Projects
          </span>
          <h1>Creating Beautiful</h1>
          <h2>User Friendly Interface</h2>
        </Title>

        <CardsContainer>
          <Card>
            <div className="info">
              <h1>Financial Manager</h1>
              <span>Personal Project | Web Design</span>

              <p>
                In this project i developed an application to manage outcomes
                and incomes in personal financial life, you can insert and
                vizualize your total incomes, total outcomes, and total money
                after all the transactions. You can also make a search for
                specific transactions! 🤑💸
              </p>

              <a
                href="https://github.com/leo-serrao/finances-management-reactjs"
                target="__blank"
              >
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                See more
              </a>
            </div>
            <div className="device-image">
              <Image src={device1} alt="" width={514} height={297} />
            </div>
            <Image
              src={background1}
              alt=""
              width={804}
              height={520}
              className="background-img"
            />
          </Card>

          <Card className="card2">
            <div className="info">
              <h1>T-Shirt Store</h1>
              <span>Personal Project | Web Design</span>

              <p>
                This projects is a T-Shirt store, where you can see all the
                products through a carousel, see specifactions of each product
                and finish the purchase!
              </p>

              <a
                href="https://github.com/leo-serrao/ignite-shop/tree/master"
                target="__blank"
              >
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                See more
              </a>
            </div>
            <div className="device-image">
              <Image src={device2} alt="" width={514} height={297} />
            </div>
            <Image
              src={background2}
              alt=""
              width={804}
              height={520}
              className="background-img"
            />
          </Card>

          <Card className="card3">
            <div className="info">
              <h1>Pomodoro Timer</h1>
              <span>Personal Project | Web Design</span>

              <p>
                This one is timer where you can especify the task you are
                working on and the time of your Pomodoro cycle, you can even see
                your history of cycles, how long ago that cycle was ad if it was
                completed, interrupted or if it's on progress. ⏱⏱
              </p>

              <a
                href="https://github.com/leo-serrao/pomodoro-timer-reactjs"
                target="__blank"
              >
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                See more
              </a>
            </div>
            <div className="device-image">
              <Image src={device3} alt="" width={514} height={297} />
            </div>
            <Image
              src={background3}
              alt=""
              width={804}
              height={520}
              className="background-img"
            />
          </Card>

          <Card className="card4">
            <div className="info">
              <h1>Link Shortener</h1>
              <span>Personal Project | Web Design</span>

              <p>
                This application is a simple link shortener where you paste your
                long link and it returns to you a shortened link, and you can
                see a history of all the links you have shortened.
              </p>

              <a
                href="https://github.com/leo-serrao/react-projects/tree/main/encurtador-de-link"
                target="__blank"
              >
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                See more
              </a>
            </div>
            <div className="device-image">
              <Image src={device4} alt="" width={514} height={297} />
            </div>
            <Image
              src={background4}
              alt=""
              width={804}
              height={520}
              className="background-img"
            />
          </Card>

          <Card className="card5">
            <div className="info">
              <h1>Zip Code Searcher</h1>
              <span>Personal Project | Web Design</span>

              <p>
                Here you can type your zip code and the application will return
                all information available about it, such as city, neighbourhood,
                street and complements. 🔍
              </p>

              <a
                href="https://github.com/leo-serrao/react-projects/tree/main/buscador-de-cep"
                target="__blank"
              >
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                See more
              </a>
            </div>
            <div className="device-image">
              <Image src={device5} alt="" width={514} height={297} />
            </div>
            <Image
              src={background5}
              alt=""
              width={804}
              height={520}
              className="background-img"
            />
          </Card>

          <Card className="card6">
            <div className="info">
              <a href="https://github.com/leo-serrao" target="__blank">
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                Want More?
              </a>
            </div>
            <div className="device-image">
              <Image src={background6} alt="" width={574} height={350} />
            </div>
          </Card>
        </CardsContainer>

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
              Make it<span> work</span> , make it
              <span> right</span> make it
              <span> fast</span>.
            </p>

            <span className="copyright">
              Copyright Leonardo Serrão Munaretto. All rights Reserved
            </span>
          </div>

          <a href="#top">
            <IoIosArrowUp color={'#5F49BF'} className="arrow-up-icon" />
          </a>
        </Footer>
      </ProjectsContainer>
    </>
  )
}
