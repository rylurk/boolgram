import { Disclosure } from '@headlessui/react';
import Logo from './Logo';
import Searchbar from './Searchbar';
import MobileMenuToggle from './MobileMenuToggle';
import IconGroup from './IconGroup';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="flex-shrink-0 bg-white border-b border-gray">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
            <div className="relative flex items-center justify-between h-16">
              <Logo />
              <Searchbar />
              <MobileMenuToggle open={open} />
              <IconGroup />
            </div>
          </div>
          <MobileMenu />
        </>
      )}
    </Disclosure>
  );
}
