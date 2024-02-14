/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import {
  MoreCard,
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
import device2 from '../assets/projects/pomodoro-device.svg'
import device3 from '../assets/projects/serrao-seguros-device.svg'
import device4 from '../assets/projects/link-shortener-device.svg'
import device5 from '../assets/projects/zip-search-device.svg'

import background1 from '../assets/projects/dt-money-background.svg'
import background2 from '../assets/projects/pomodoro-background.svg'
import background3 from '../assets/projects/serrao-seguros-background.svg'
import background4 from '../assets/projects/link-shortener-background.svg'
import background5 from '../assets/projects/zip-search-background.svg'
import background6 from '../assets/projects/view-more.svg'
import ContactForm from '../components/Contact/contacts'
import ProjectCard from '../components/ProjectCard/cards'
import { IoIosArrowUp } from 'react-icons/io'

export default function Projects() {
  console.log(typeof(device1))
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
          <ProjectCard 
            DeviceImg = {device1} 
            BackgroundImg = {background1} 
            LiveLink = "https://financial-manager-system.vercel.app" 
            GithubLink = "https://github.com/leo-serrao/finances-management-reactjs"
            Title = "Financial Manager"
            Description = "In this project i developed an application to manage outcomes and incomes in personal financial life, you can insert and vizualize your total incomes, total outcomes, and total money after all the transactions. You can also make a search for specific transactions! 🤑💸"
          />

          <ProjectCard 
            DeviceImg = {device2} 
            BackgroundImg = {background2} 
            LiveLink = "https://pomodorotimerreact.vercel.app"
            GithubLink = "https://github.com/leo-serrao/serrao-seguros"
            Title = "Pomodoro Timer"
            Description = "This one is a timer where you can especify the task you are working on and the time of your Pomodoro cycle, you can even see your history of cycles, how long ago that cycle was done ad if it was completed, interrupted or if it's on progress. ⏱⏱"
          />  

          <ProjectCard 
            DeviceImg = {device3} 
            BackgroundImg = {background3} 
            LiveLink = "https://serrao-seguros.vercel.app"            
            GithubLink = "https://github.com/leo-serrao/ignite-shop/tree/master"
            Title = "Serrão Seguros"
            Description = "Website developed as a landing page for Serrão Seguros, which is an insurance company, describing the company values, the products and contacts for them and their partners. This one's repo is private but feel free to check the live page"
          />

          <ProjectCard 
            DeviceImg = {device4} 
            BackgroundImg = {background4} 
            LiveLink = "https://link-shortener-web.vercel.app"
            GithubLink = "https://github.com/leo-serrao/link-shortener"
            Title = "Link Shortener"
            Description = "This application is a simple link shortener where you paste your long link and it returns to you a shortened link, and you can see a history of all the links you have shortened."
          />

          <ProjectCard 
            DeviceImg = {device5} 
            BackgroundImg = {background5} 
            LiveLink = "https://zipcode-searcher.vercel.app"
            GithubLink = "https://github.com/leo-serrao/zipcode-searcher"
            Title = "Zip Code Searcher"
            Description = "Here you can type your zip code (brazilian) and the application will return all information available about it, such as city, neighbourhood, street and complements. 🔍"
          />

          <MoreCard>
            <div className="info">
              <a href="https://github.com/leo-serrao" target="__blank">
                <HiOutlineArrowNarrowRight className="arrow-icon" />
                Want More?
              </a>
            </div>
            <div className="bg-image">
              <Image src={background6} alt="" width={574} height={350} />
            </div>
          </MoreCard>
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
