import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 1.5rem;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  gap: 2rem;

  margin-top: -5rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  ${({ variant }) =>
    variant === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']} !important;
    `}

  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme['gray-600']};
  border-radius: 6px;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    > span {
      font-size: 1rem;
      line-height: 1.6;
      color: ${({ theme }) => theme['gray-300']};
    }
  }

  strong {
    display: block;
    margin-top: 0.75rem;

    font-size: 2rem;
    line-height: 1.4;
    color: ${({ theme }) => theme['gray-100']};
  }
`
