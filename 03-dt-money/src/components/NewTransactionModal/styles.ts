import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

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
  background: ${({ theme }) => theme['gray-800']};

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
      background-color: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};

      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      margin-top: 1.5rem;
      height: 58px;
      border: none;
      border-radius: 6px;
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.2s;

      &:not(:disabled):hover {
        background-color: ${({ theme }) => theme['green-300']};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
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

  color: ${({ theme }) => theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`
interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  border: 0;
  line-height: 0;
  cursor: pointer;

  padding: 1rem 1.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-700']};
  color: ${({ theme }) => theme['gray-300']};

  transition: background-color 0.2s;

  svg {
    color: ${({ variant, theme }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${({ theme }) => theme['gray-600']};
  }

  &[data-state='checked'] {
    color: ${({ theme }) => theme.white};

    svg {
      color: ${({ theme }) => theme.white};
    }

    background-color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-700'] : theme['red-700']};
  }
`
