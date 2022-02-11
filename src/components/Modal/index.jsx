import React, { useContext } from "react"
import { ModalContext } from "../Layout"
import styled, { css } from "styled-components"

import ProjectPageTemplate from "../../templates/ProjectPageTemplate"

const ModalBackground = styled.div`
  position: fixed;
  cursor: pointer;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(90deg, hsla(0, 0%, 0%, .5), hsla(0, 0%, 33%, .5)), linear-gradient(0deg, hsla(287, 76%, 50%, .5), hsla(253, 100%, 61%, .5));
  background-blend-mode: difference;
  z-index: 10;

  backdrop-filter: blur(2px);

  opacity: ${({$state}) => $state === "entered" ? 1 : 0};

  transition: opacity 300ms;
`

const ModalWrapper = styled.div`
  z-index: 11;
  position: fixed;
  top: 0,
  left: 0;
`

const ModalCardWrapper = styled.div`
  position: relative;
  z-index: 11;
  width: ${({$length}) => $length * 100}vw;
  transform: translateX(-${({$activeIndex}) => $activeIndex * 100}vw);
  transition: transform 300ms;
`

const ModalCard = styled.div`
  position: absolute;
  top: 50vh;
  left: ${({$i}) => $i * 100 + 50}vw;
  width: 70vw;
  height: 95vh;
  background: white;
  padding: 0 var(--padding-default) var(--padding-default) var(--padding-default);
  border-radius: var(--rounded-corners);
  overflow-y: auto;

  opacity: ${({$state}) => $state === "entered" ? 1 : 0};
  transform: translate3d(-50%, ${({$state}) => $state === "entered" ? "-50%" : "calc(-1 * 50% + 50px)"}, 0);
  transition: opacity 300ms, transform 300ms;

  @media (max-width: 481px) {
    width: 100vw;
    height: 100vh;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: white;
  z-index: 2;
  padding-top: var(--padding-default);
`

const buttonCSS = css`
  max-width: 300px;
  border-radius: var(--rounded-corners);
  background: white;
  color: black;
  cursor: pointer;
  border: none;
  padding: 5px 5px;

  &:hover > p:nth-of-type(2) {
    font-weight: 700;
  }
`

const NextButton = styled.button`
  ${buttonCSS}
  right: 10px;
`

const PrevButton = styled.button`
  ${buttonCSS}
  left: 10px;
`

const SubTitleP = styled.p`
  line-height: 1;
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
`

const ButtonTitle = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

const CloseButton = styled.button`
  border: none;
  background-color: #ddd;
  width: 40px;
  height: 40px;
  border-radius: 9999px;
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 14;
  cursor: pointer;
  opacity: ${({$state}) => $state === "entered" ? 1 : 0};
  transition: opacity 300ms;

  &::after,
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60%;
    height: 4px;
    border-radius: 9999px;
    background-color: #555;
  }

  &::after {
    transform: translate3d(-50%, -50%, 0) rotate(45deg);
  }

  &::before {
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
  }

  @media (hover) {
    &:hover {

      & {
        background-color: var(--ruby);
      }

      &::after,
      &::before {
        background-color: var(--amber);
      }
    }
  }
`

const Modal = ({ state, cards }) => {
  const modal = useContext(ModalContext)

  return (
    <>

      <ModalWrapper>
        <ModalCardWrapper
          $activeIndex={modal.activeIndex}
          $length={cards.length}
        >
          {cards.map((c, i) => (
            <ModalCard
              key={i}
              $state={state}
              $i={i}
            >

              <ButtonWrapper>
                {modal.activeIndex > 0 ? <PrevButton
                  onClick={() => modal.setActiveIndex((a) => a - 1)}
                  $state={state}
                >
                  <SubTitleP>Previous</SubTitleP>
                  <ButtonTitle>{cards[modal.activeIndex - 1].node.frontmatter.title}</ButtonTitle>
                </PrevButton> : <span></span>}

                {modal.activeIndex < cards.length - 1 ? <NextButton
                  onClick={() => modal.setActiveIndex((a) => a + 1)}
                  $state={state}
                >
                  <SubTitleP>Next</SubTitleP>
                  <ButtonTitle>{cards[modal.activeIndex + 1].node.frontmatter.title}</ButtonTitle>
                </NextButton> : <span></span>}
              </ButtonWrapper>

              <ProjectPageTemplate
                key={c.node.id}
                title={c.node.frontmatter.title}
                body={c.node.html}
                inModal={true}
              />

            </ModalCard>
          ))}
        </ModalCardWrapper>
      </ModalWrapper>

      <CloseButton
        $state={state}
        onClick={modal.toggleModal}
      />

      <ModalBackground
        $state={state}
        onClick={modal.toggleModal}
      />
    </>
  )
}

export default Modal
