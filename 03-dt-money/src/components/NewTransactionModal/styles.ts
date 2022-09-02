import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 35rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: grid;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      margin-top: 2.5rem;
      height: 58px;
      border: none;
      border-radius: 6px;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      cursor: pointer;
      font-weight: bold;
      transition: background-color .2s;

      &:hover {
        background-color: ${({ theme }) => theme["green-300"]};

      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  border: 0;
  background-color: transparent;
  line-height: 0;
  
  cursor: pointer;

  color: ${({ theme }) => theme["gray-500"]};
`