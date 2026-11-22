function Navbar() {
  return (
    <nav className="bg-card py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <span className="text-accent font-bold">Anime Discovery App</span>
        <ul className="flex-gap-6">
          <li>
            <a href="#" className="text-muted hover:text-slate-50">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-muted hover:text-slate-50">
              Search
            </a>
          </li>
          <li>
            <a href="#" className="text-muted hover:text-slate-50">
              Watchlist
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
