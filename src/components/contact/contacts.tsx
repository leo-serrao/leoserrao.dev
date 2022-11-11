/* eslint-disable react/no-unescaped-entities */
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import * as z from 'zod'

import { Contact, ContactContainer } from './contact'
import Image from 'next/image'

import planet1 from '../../assets/contactForm/planet1.svg'
import planet2 from '../../assets/contactForm/planet2.svg'
import planet3 from '../../assets/contactForm/planet3.svg'

import { AiOutlineMail } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'

const newContactFormValidationSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string()
})

type NewContactFormDataProps = z.infer<typeof newContactFormValidationSchema>

export default function ContactForm() {
  const [emptyFieldMessage, setEmptyFieldMessage] = useState('')
  const [isSuccesMessageActive, setIsSuccesMessageActive] =
    useState('message inactive')
  const [isFailMessageActive, setIsFailMessageActive] =
    useState('message inactive')
  const { handleSubmit, register, reset } = useForm<NewContactFormDataProps>({
    resolver: zodResolver(newContactFormValidationSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  function clearEmptyFieldMessage() {
    setEmptyFieldMessage('')
  }

  function closeMessages() {
    setIsSuccesMessageActive('message inactive')
    setIsFailMessageActive('message inactive')
  }

  function handleSendNewMail(data: NewContactFormDataProps) {
    if (data.name == '' || data.email == '' || data.message == '') {
      setEmptyFieldMessage('Please, fill all the imput areas.')
      setTimeout(clearEmptyFieldMessage, 4000)
      return
    }

    const templateParams = {
      from_name: data.name,
      message: data.message,
      email: data.email
    }

    emailjs
      .send(
        'service_ebb52lm',
        'template_a5nu6dk',
        templateParams,
        'SQ-FAal1hw6npi-nL'
      )
      .then(
        response => {
          setIsSuccesMessageActive('message active')
          setTimeout(closeMessages, 5000)
        },
        err => {
          setIsSuccesMessageActive('message active fail')
          setTimeout(closeMessages, 5000)
        }
      )

    reset()
  }

  return (
    <Contact id="contact">
      <ContactContainer>
        <div className="info">
          <span>Contact Me</span>
          <h1>Let's Get in Touch.</h1>

          <p className="feel-free-message">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>

          <div className="contact-info first">
            <AiOutlineMail className="contact-icon"/>
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

          <form onSubmit={handleSubmit(handleSendNewMail)}>
            <p>{emptyFieldMessage}</p>
            <input
              type="text"
              {...register('name')}
              id="name"
              placeholder="Name"
            />
            <input
              type="text"
              {...register('email')}
              id="email"
              placeholder="Email"
            />
            <textarea
              {...register('message')}
              id="message"
              cols={30}
              rows={10}
              placeholder="Message"
            />

            <button type="submit">Lets' talk!</button>
          </form>
        </div>
      </ContactContainer>

      <div className={isSuccesMessageActive}>
        <h2>Email sent!</h2>
        <div className="progress-bar"></div>
      </div>

      <div className={isFailMessageActive}>
        <h2>Oops... something went wrong :(</h2>
        <div className="progress-bar"></div>
      </div>
    </Contact>
  )
}
