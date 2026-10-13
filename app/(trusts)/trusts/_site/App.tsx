'use client'

import { TrustHeader } from './components/TrustHeader'
import { TrustHero } from './components/TrustHero'
import { Footer } from './components/Footer'
import { FinanceSection } from './components/sections/FinanceSection'
import { DonationsSection } from './components/sections/DonationsSection'
import { OperationsSection } from './components/sections/OperationsSection'
import { GovernanceSection } from './components/sections/GovernanceSection'
import { DocumentsSection } from './components/sections/DocumentsSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { BeforeAfter } from './components/sections/BeforeAfter'
import { HowItWorks } from './components/sections/HowItWorks'
import { ProductShowcase } from './components/sections/ProductShowcase'
import { ProofSection, Testimonial } from './components/sections/ProofSection'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'
import { useReveal } from './useReveal'
import './App.css'

function App() {
  useReveal()
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <TrustHeader/>
      <main id="main">
        <TrustHero/>
        <FinanceSection/>
        <DonationsSection/>
        <OperationsSection/>
        <GovernanceSection/>
        <DocumentsSection/>
        <ProjectsSection/>
        <BeforeAfter/>
        <HowItWorks/>
        <ProductShowcase/>
        <ProofSection/>
        <Testimonial/>
        <FAQ/>
        <Contact/>
      </main>
      <Footer/>
    </>
  )
}

export default App
