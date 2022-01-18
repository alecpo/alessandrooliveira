import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 40px;
  }

  p {
    font-size: 24px;
    margin-top: 40px;
    line-height: 32px;
  }
`

export const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  display: flex;
  flex: 1;
  width: 80vw;
  background-color: ${({ theme }) => theme.colors.contentBackground};
  border-radius: 8px;
  margin-top: 16px;
  margin-bottom: 16px;
  a { color: ${({ theme }) => theme.colors.text} };
  a:visited { color: ${({ theme }) => theme.colors.text} };
  a:hover { color: ${({ theme }) => theme.colors.text} };
  a:active { color: ${({ theme }) => theme.colors.text} };
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.dracula.background};
`
