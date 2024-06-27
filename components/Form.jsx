import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full h-screen flex flex-col items-center justify-center mt-20 mb-20" id='contato'>
      <style>
        {`
          .gradient-text {
            font-size: 5.5rem; /* 40px */
            font-weight: bold;
            background: linear-gradient(to left, #ff7f46, #ff2368);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            margin-bottom: 25px;
            margin-top: 100px;
          }
          .swiper-slide {
            display: flex; /* Enables flexbox */
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center vertically */
            height: 100%; /* Use full height to ensure vertical centering */
          }
          .swiper-slide img {
            max-height: 100%; /* Ensure the image is not larger than the container */
            object-fit: contain; /* Adjusts the size of the image to fit within the container while maintaining aspect ratio */
          }
          .submit-btn {
            transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
          }
          .submit-btn:hover {
            background-color: white !important;
            color: black !important;
          }
          .form-input {
            width: 30vw;
            height: 80px;
            font-size: 20px;
            background-color: rgba(0, 0, 0, 0.5);
          }
          @media (max-width: 768px) {
            .gradient-text {
              font-size: 3rem; /* Smaller font size for mobile */
              margin-top: 50px;
              margin-bottom: 15px;
            }
            .form-input {
              width: 90vw !important;
              height: 60px !important;
              font-size: 16px !important;
              margin: 10px 0 !important;
            }
            .submit-btn {
              width: 90vw !important;
              height: 60px !important;
              font-size: 16px !important;
            }
          }
          @media (max-width: 1224px) {
            .form-input {
              width: 80vw !important;
              min-height: 75px !important;
              margin: 10px 10vw;
              padding: 10px
            }
          }
        `}
      </style>
      <h1 className="gradient-text text-center text-white">Contato</h1>
      <input
        type="text"
        placeholder="Qual o seu nome?"
        {...register("Qual o seu nome?", { required: true })}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 form-input"
      />
      <input
        type="text"
        placeholder="E o seu email?"
        {...register("E o seu email?", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i })}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 form-input"
      />
      <input
        type="tel"
        placeholder="Qual seu telefone/WhatsApp?"
        {...register("Qual seu telefone/WhatsApp?", {})}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 form-input"
      />
      <input
        type="text"
        placeholder="Qual o nome da sua empresa?"
        {...register("Qual o nome da sua empresa?", { required: true })}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 form-input"
      />
      <select
        {...register("Em que seguimento atua?", { required: true })}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 focus:bg-black focus:text-white form-input"
      >
        <option value="Serviço">Serviço</option>
        <option value="Varejo">Varejo</option>
        <option value="Industria">Industria</option>
        <option value="E-Commerce">E-Commerce</option>
        <option value="Educação">Educação</option>
        <option value="Outro">Outro</option>
      </select>
      <textarea
        {...register("Message", { required: true })}
        className="text-white border-white border-2 rounded-lg p-2 mb-8 form-input"
      />
      <input
        type="submit"
        className="submit-btn cursor-pointer border-white border-2 rounded-lg p-2 text-white form-input"
      />
    </form>
  );
}
