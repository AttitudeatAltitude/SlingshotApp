import type { ReactNode } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <main className="flex-1">
        <div className="mx-auto w-full max-w-6xl px-5 py-12">{children}</div>
      </main>
      <Footer />
    </div>
  )
}
