const Footer = () => (
  <footer className="py-6 pb-32 text-left text-xs text-hacker-muted border-t border-hacker-border mt-16 max-w-[1440px] mx-auto px-6 lg:px-12 xl:px-16 font-mono">
    <span>&copy; {new Date().getFullYear()} Bhabesh Behera</span>
    <span className="ml-4 text-hacker-border">|</span>
    <span className="ml-4">built with caffeine & ctrl+c ctrl+v</span>
  </footer>
);

export default Footer; 
