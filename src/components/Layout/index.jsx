import React, { createContext, useState, useEffect } from "react"

import { Transition } from "react-transition-group"

import { GlobalStyle } from "../../styles"

import Modal from "../Modal"
import Nav from "../Nav"
import Footer from "../Footer"

export const ModalContext = createContext()

const Layout = ({ children, location }) => {
  const [modal, setModal] = useState(false)
  const [cards, setCards] = useState([])
  const [activeIndex, setActiveIndex] = useState(0)

  console.log("location: ", location)

  useEffect(() => {
    if (typeof window !== undefined) {
      if (modal) {
        document.body.classList.add("modal-open")
      } else {
        document.body.classList.remove("modal-open")
      }
    }
  }, [modal])

  return (
    <ModalContext.Provider
      value={{
        modal,
        toggleModal: () => setModal(!modal),
        cards,
        setCards: (c) => setCards(c),
        activeIndex,
        setActiveIndex: setActiveIndex,
      }}
    >

      <Transition
        in={modal}
        unmountOnExit
        timeout={{
          exit: 300,
        }}
      >
        {(state) => (
          <Modal
            cards={cards}
            state={state}
          />
        )}
      </Transition>

      <GlobalStyle />
      {location.pathname !== "/" && <Nav />}
        {children}
      <Footer />
    </ModalContext.Provider>
  )
}

export default Layout
