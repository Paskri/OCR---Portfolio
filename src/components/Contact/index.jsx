import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import './contact.css'
import Scramble from '../Scramble'

export default function Contact(user, validate) {
  // watch, formState, reset
  const [successMessage, setSuccessMessage] = useState('')

  const schema = yup
    .object({
      name: yup
        .string()
        .max(50)
        .required('Veuillez rentrer votre nom et prénom'),
      email: yup
        .string()
        .max(255)
        .email('Veuillez entrer un email valide')
        .required('Veuillez indiquer votre adresse email'),
      message: yup.string().max(5000).required('merci de rentrer un message'),
    })
    .required()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    fetch('https://formsubmit.co/ajax/81fcdaf394195eea7a58b0db7f5c7fb9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((datas) => {
        console.log(datas)
        reset()
        setSuccessMessage(
          'Votre demande à bien été envoyé, vous recevrez une réponse au plus vite.'
        )
      })
      .catch((error) => console.log(error))
  }
  return (
    <section id="contact" className="section">
      <h2 className="reveal-up">
        <Scramble text="Contact" className="reveal-0" />
      </h2>
      {successMessage && <p className="success">{successMessage}</p>}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="contact-form reveal-up"
      >
        <label htmlFor="name" className="reveal-1">
          <p>Nom</p>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom et prénom"
            {...register('name')}
          />
        </label>
        {errors.name && <p className="c-yup">{errors.name.message}</p>}
        <label htmlFor="email" className="reveal-2">
          <p>Email</p>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre@email.com"
            {...register('email')}
          />
        </label>
        {errors.email && <p className="c-yup">{errors.email.message}</p>}
        <label htmlFor="message" className="reveal-3">
          <p>Message</p>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            {...register('message')}
          />
        </label>
        {errors.message && <p className="c-yup">{errors.message.message}</p>}
        <button type="submit" className="reveal-4">
          Envoyer
        </button>
      </form>
    </section>
  )
}
