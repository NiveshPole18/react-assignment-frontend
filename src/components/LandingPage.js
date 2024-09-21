import { useEffect, useState } from 'react';
import { CheckIcon, PlayCircleIcon, ChevronDownIcon } from 'lucide-react';

function LandingPage() {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [useCasesDropdownOpen, setUseCasesDropdownOpen] = useState(false);
  const [helpDropdownOpen, setHelpDropdownOpen] = useState(false);
  const [howItWorksDropdownOpen, setHowItWorksDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown')) {
        setServicesDropdownOpen(false);
        setUseCasesDropdownOpen(false);
        setHelpDropdownOpen(false);
        setHowItWorksDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-sky-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-sky-100/50 bg-[size:20px_20px] [mask-image:linear-gradient(to_bottom,white,transparent,transparent,white)]" />
      <header className="relative container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="text-green-500 h-8 w-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" x2="12" y1="22.08" y2="12" />
          </svg>
          <span className="text-2xl font-bold ml-10 text-green-500">Printify</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a className="text-gray-600 hover:text-gray-900" href="#">Catalog</a>

          {/* How it works Dropdown */}
          <div className="relative dropdown" onMouseEnter={() => setHowItWorksDropdownOpen(true)} onMouseLeave={() => setHowItWorksDropdownOpen(false)}>
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              How it works <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {howItWorksDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 rounded-lg z-20">
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">How Printify Works</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Print On Demand</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Printify Quality Promise</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">What to Sell?</a>
              </div>
            )}
          </div>

          <a className="text-gray-600 hover:text-gray-900" href="#">Pricing</a>
          <a className="text-gray-600 hover:text-gray-900" href="#">Blog</a>

          {/* Services Dropdown */}
          <div className="relative dropdown" onMouseEnter={() => setServicesDropdownOpen(true)} onMouseLeave={() => setServicesDropdownOpen(false)}>
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              Services <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 rounded-lg z-20">
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Printify Studio</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Printify Express Delivery</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Transfer Products</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Order In Bulk</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Experts Program</a>
              </div>
            )}
          </div>

          {/* Use-cases Dropdown */}
          <div className="relative dropdown" onMouseEnter={() => setUseCasesDropdownOpen(true)} onMouseLeave={() => setUseCasesDropdownOpen(false)}>
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              Use-cases <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {useCasesDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 rounded-lg z-20">
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Merch for Fans</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Merch for eCommerce</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Merch for Enterprises</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Grow Your Store</a>
              </div>
            )}
          </div>

          {/* Help Dropdown */}
          <div className="relative dropdown" onMouseEnter={() => setHelpDropdownOpen(true)} onMouseLeave={() => setHelpDropdownOpen(false)}>
            <button className="text-gray-600 hover:text-gray-900 flex items-center">
              Need help? <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            {helpDropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 rounded-lg z-20">
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Help Center</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">Contacts</a>
                <a className="block px-4 py-1 text-gray-700 hover:bg-gray-100">My Requests</a>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="border border-gray-300 px-4 py-2 rounded">Log in</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign up</button>
        </div>
      </header>

      <main className="relative container mx-auto ml-10 px-4 py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Create and sell custom products</h1>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-green-500" />
              <span className="text-lg text-gray-700">100% Free to use</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-green-500" />
              <span className="text-lg text-gray-700">900+ High-Quality Products</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckIcon className="text-green-500" />
              <span className="text-lg text-gray-700">Largest global print network</span>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">Start for free</button>
            <button className="border border-gray-300 px-4 py-2 rounded flex items-center space-x-2">
              <PlayCircleIcon className="h-5 w-5" />
              <span>How it works?</span>
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500">Trusted by over 8M sellers around the world</p>
        </div>
        <div className="md:w-1/2 relative flex mr-20 justify-center items-center">
          <dotlottie-player
            src="https://lottie.host/c76ba387-2032-4c68-9998-3f192a009273/Ygx956vEfy.json"
            background="transparent"
            speed="1"
            style={{ width: '100%', height: '500px', maxWidth: '600px' }}
            loop
            autoplay
          ></dotlottie-player>
          <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
