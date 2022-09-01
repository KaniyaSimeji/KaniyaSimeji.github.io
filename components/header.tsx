import Link from "next/link"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function Header() {
	return (
		<header className="sticky top-0 border-b　z-10 bg-cyan-700">
			<div className="max-w-4xl mx-auto flex justify-between items-center h-12">
				<Link href="/">
					<a>
						<img src="/kanium.png" alt="logo" width={50} height={50} />
					</a>
				</Link>
				<h3 className="w-11/12">kanium.me</h3>
			</div>
		</header>
	)
}

function HeaderMenu() {
	return (
		<div className="">
			<Menu as="div" className="relative inline-block text-left">
				<div>
					<Menu.Button className="bg-red-600 flex p-1.5 max-w-sm mx-auto rounded-xl items-center space-x-4"><button>Config</button></Menu.Button>
				</div>
				<Transition
					as={Fragment}
					enter="transition ease-out duration-100"
					enterFrom="transform opacity-0 scale-95"
					enterTo="transform opacity-100 scale-100"
					leave="transition ease-in duration-75"
					leaveFrom="transform opacity-100 scale-100"
					leaveTo="transform opacity-0 scale-95"
				/>
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<Menu.Item>
						{({ active }) => (
							<Link href="/about" className={`${active && 'bg-blue-500'}`}>
								<a className="text-black">About</a>
							</Link>
						)}
					</Menu.Item>
				</Menu.Items>
			</Menu>
		</div>
	)
}
