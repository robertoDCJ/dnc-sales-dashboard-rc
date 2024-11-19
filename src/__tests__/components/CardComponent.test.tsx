/* eslint-disable no-undef */
import { CardComponent } from '@/components'
import { themesList } from '@/resources/themesList'
import { Theme } from '@/types'
import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

describe('CardComponent', () => {
  const renderComponent = (theme: Theme, className?: string) =>
    render(
      <ThemeProvider theme={theme}>
        <CardComponent className={className} />
      </ThemeProvider>
    )

  themesList.forEach(({ name, theme }) => {
    describe(`${name}`, () => {
      it('should match the snapshot without any class', () => {
        const { asFragment } = renderComponent(theme)
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with alert class', () => {
        const { asFragment } = renderComponent(theme, 'alert')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with success class', () => {
        const { asFragment } = renderComponent(theme, 'success')
        expect(asFragment()).toMatchSnapshot()
      })

      it('should match the snapshot with warning class', () => {
        const { asFragment } = renderComponent(theme, 'warning')
        expect(asFragment()).toMatchSnapshot()
      })
    })
  })
})
