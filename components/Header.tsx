export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" className="brand">
          <img src="/placeholder-logo.svg" alt="Prompt.OS AI" className="logo" />
          <span className="brand-name">Prompt.OS AI</span>
        </a>
        <nav className="nav">
          <a href="/docs/roadmap.md">Roadmap</a>
          <a href="/docs/PRD.md">Docs</a>
          <a href="/auth" className="btn small">Sign in</a>
        </nav>
      </div>
    </header>
  )
}
