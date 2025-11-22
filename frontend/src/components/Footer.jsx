import React from 'react';

const Footer = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Soluções', href: '#modulos' },
    { name: 'Tecnologia', href: '#como-funciona' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <footer className="py-12 px-6 lg:px-8" style={{ backgroundColor: '#39843e' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://customer-assets.emergentagent.com/job_9f917dfd-7d45-4bf4-adb2-bb1447b07e5c/artifacts/kdssqrbg_Logo.png"
              alt="VeriGuard AI"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold" style={{ color: '#FFFFFF' }}>
              VeriGuard AI
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="font-medium transition-opacity duration-200 hover:opacity-80"
                style={{ color: '#FFFFFF' }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <p className="text-sm" style={{ color: '#f7ede1' }}>
            © 2025 VeriGuard AI. Startup em desenvolvimento. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;