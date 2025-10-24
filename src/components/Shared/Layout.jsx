import Navigation from './Navigation'
import Footer from './Footer'
import BackToTop from './BackToTop'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-tech-gray">
      <Navigation />
      <main>
        <BackToTop/>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout