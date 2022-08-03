import { Disclosure } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';

export default function MobileIconGroup(props: { open: boolean }) {
  return (
    <div className="flex md:hidden">
      <Disclosure.Button className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400">
        <span className="sr-only">Open main menu</span>
        {props.open ? (
          <XIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <MenuAlt1Icon className="block h-6 w-6" aria-hidden="true" />
        )}
      </Disclosure.Button>
    </div>
  );
}
