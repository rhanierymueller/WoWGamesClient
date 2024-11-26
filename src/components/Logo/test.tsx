import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from 'utils/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente `render`
    // selecionar o elemento a ser testado `screen`(queries) - getByLabel ...
    // expect - assertion - asserção - comparação - analise
    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a normal logo', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '11rem'
    })
  })

  it('should render a biggger logo', () => {
    renderWithTheme(<Logo color="black" size="large" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      width: '20rem'
    })
  })

  it('should render a a bigger logo without text if hidenOnMobile', () => {
    renderWithTheme(<Logo color="black" hideOnMobile />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      { media: '(max-width: 768px)' }
    )
  })
})
