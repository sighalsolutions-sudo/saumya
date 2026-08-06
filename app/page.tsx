import Header from '../components/Header'

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Prompt.OS AI</h1>
        <p className="hero-subtitle">
          Turn ideas into expert-level AI prompts. Fast, multilingual, and tailored for every platform.
        </p>
        <div className="hero-ctas">
          <a className="btn primary" href="/docs/roadmap.md">Explore the roadmap</a>
          <a className="btn secondary" href="/auth">Get started</a>
        </div>
      </div>
      <aside className="hero-visual">
        <div className="card">
          <h3>Instant mode</h3>
          <p>Generate a high-quality prompt in seconds — optimized for ChatGPT, Gemini, Midjourney, and more.</p>
        </div>
      </aside>
    </section>
  )
}
