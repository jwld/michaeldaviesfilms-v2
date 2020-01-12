import styled from 'styled-components'

export const Awards = styled.div`
  display: grid;
  grid-gap: 0.5rem;
`

export const CategoryHeader = styled.span`
  font-weight: 400;
  text-align: center;
`

export const CategoryList = styled.div`
  display: grid;
`

export const Award = styled.div`
  border-radius: 0.3rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0.7rem;
  text-align: center;

  :nth-child(odd) {
    background: #2a2f37;
  }

  > span:first-child {
    margin-right: 1.5rem;
  }
`
