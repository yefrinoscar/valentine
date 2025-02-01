"use client"

import { useState } from "react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
  } from "@heroui/react";

const images = [
  { src: "1.jpg", text: "You're my sunshine ☀️" },
  { src: "2.jpg", text: "I love your smile 😊" },
  { src: "3.jpg", text: "Every moment with you is special ❤️" },
  { src: "4.jpg", text: "You make my heart race 💓" },
  { src: "5.jpg", text: "Life is better with you 🥰" },
  { src: "6.jpg", text: "Will you be my Valentine? 💘" },
];
const mensajes = [
  "¿Estás inseguro?",
  "¿Tienes dudas?",
  "¿No estás convencido?",
  "¿No lo tienes claro?",
  "¿Estás indeciso?",
  "¿No estás seguro?",
  "¿Estás vacilando?",
  "¿No estás persuadido?",
  "¿Estás titubeando?",
  "¿No estás confiado?",
  "¿Estás desconfiando?",
  "¿No estás seguro del todo?",
  "¿Estás en la incertidumbre?",
  "¿No estás plenamente seguro?",
  "¿Estás en la duda?",
  "¿No estás completamente seguro?",
  "¿Estás en la indecisión?",
  "¿No estás totalmente seguro?",
  "¿Estás en la ambivalencia?",
  "¿No estás seguro al 100%?",
];

export default function ValentineGrid() {
  const [value, setValue] = useState("");
  const {isOpen, onOpen, onOpenChange, onClose} = useDisclosure();
  const {isOpen: isOpenSuccess, onOpen: onOpenSuccess, onOpenChange: onOpenChangeSuccess} = useDisclosure();

  const onClouseRecurvise = () => {
    const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];

    onClose()

    setTimeout(() => {
      setValue(mensajeAleatorio)
      onOpen()
    }, 500);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  p-6">
      <h1 className="text-4xl font-bold text-pink-900 mb-6">Mi amor, Quieres ser mi san valentin? 💖</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img src={item.src} alt="Valentine Image" className="w-full h-40 object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white font-semibold text-center p-2">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex space-x-2">
        <button
          onClick={onOpenSuccess}
          className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-red-700 transition"
        >
          Si 💝
        </button>

        <button
          onClick={onClouseRecurvise}
          className="mt-6 px-6 py-3 bg-gray-700 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-900 transition"
        >
          No 😥
        </button>

      </div>


      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p>
                 ¿Quieres ser mi San Valentín? 💖 
                </p>
              </ModalBody>
              <ModalFooter>
                <button
                  onClick={onOpenSuccess}
                  className="mt-6 px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-full shadow-lg hover:bg-red-700 transition"
                >
                  Si 💝
                </button>

                <button
                  onClick={onClouseRecurvise}
                  className="mt-6 px-6 py-3 bg-gray-700 text-white text-lg font-bold rounded-full shadow-lg hover:bg-gray-900 transition"
                >
                  {value}
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <Modal isOpen={isOpenSuccess} onOpenChange={onOpenChangeSuccess}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <p>
                Sabia que dirias que SIII mi vida. En la puerta tienes una sorpresa mi amor 💌 
                </p>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
