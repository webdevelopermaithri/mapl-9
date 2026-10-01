import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

describe('Media house navigation from Home side card', () => {
  it('renders MediaHouse content (not blank) when landing on /media-house#news', () => {
    render(
      <MemoryRouter initialEntries={['/media-house#news']}>
        <App />
      </MemoryRouter>,
    )

    // Content that should exist once MediaHouse actually renders.
    expect(screen.getByText(/Maithri in the news/i)).toBeInTheDocument()
    expect(screen.getByText(/Signals from the field/i)).toBeInTheDocument()

    // The whole page shouldn't be visually blank: at minimum the news
    // section itself should not be stuck at opacity 0 forever.
    const newsSection = document.getElementById('news')
    expect(newsSection).toBeTruthy()
  })

  it('actually clicking the "Explore media house" card from Home lands on a rendered MediaHouse page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )

    if (!document.body.innerHTML.includes('Explore media house')) {
      throw new Error('DEBUG: text not found. HTML snippet: ' + document.body.innerHTML.slice(0, 3000))
    }
    const link = screen.getByText(/Explore media house/i).closest('a')
    expect(link).toBeTruthy()
    fireEvent.click(link)

    // After the click-driven navigation (Home unmounts, MediaHouse mounts
    // in the same commit), the destination content must actually render.
    expect(screen.getByText(/Maithri in the news/i)).toBeInTheDocument()
    expect(screen.getByText(/Signals from the field/i)).toBeInTheDocument()

    // And the scroll-lock Home applies to <html>/<body> while its
    // full-bleed carousel is mounted must be released once we've
    // navigated away — otherwise the destination page can never
    // actually be scrolled to the #news section, leaving it stuck
    // off-screen at opacity 0 (i.e. visually blank).
    expect(document.documentElement.style.overflow).not.toBe('hidden')
    expect(document.body.style.overflow).not.toBe('hidden')
  })
})
