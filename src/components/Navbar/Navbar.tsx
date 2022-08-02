import Logo from './Logo';
import Search from './Search';
import ButtonGroup from './ButtonGroup';

export default function Navbar() {
  return (
    <div className="border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Logo />
          <Search />
          <ButtonGroup />
        </div>
      </div>
    </div>
  );
}
