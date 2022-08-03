import { Disclosure } from '@headlessui/react';

export default function MobileMenu() {
  return (
    <Disclosure.Panel className="lg:hidden">
      <div className="px-2 pt-2 pb-3 border-t border-gray">
        <Disclosure.Button className="block px-3 py-2 rounded-md text-base font-medium text-gray-400">
          Activity
        </Disclosure.Button>
        <Disclosure.Button className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400">
          Home
        </Disclosure.Button>
      </div>
    </Disclosure.Panel>
  );
}
