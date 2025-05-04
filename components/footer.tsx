export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#FFD700] rounded-md flex items-center justify-center">
                <span className="text-black font-bold text-lg">A</span>
              </div>
              <span className="text-lg font-bold text-white">
                <span className="text-[#FFD700] font-mono">ARCADE</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/70">
              Google Cloud Skills Boost Arcade helps you master cloud skills through interactive challenges and quests.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-white">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Help Center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Cookies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-white/70 hover:text-white">
                    Licenses
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Subscribe to our newsletter</h3>
            <p className="mt-4 text-sm text-white/70">
              Get the latest updates on new quests, challenges, and exclusive rewards.
            </p>
            <form className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-[#FFD700]/50"
                />
                <button className="rounded-md bg-gradient-to-r from-[#FFD700] to-[#FFA500] px-4 py-2 text-sm font-medium text-black hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Google LLC. All rights reserved. Google Cloud and the Google Cloud logo are
            trademarks of Google LLC.
          </p>
        </div>
      </div>
    </footer>
  )
}
