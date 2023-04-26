import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 border-b　z-10 bg-cyan-700">
			<div className="max-w-4xl mx-auto flex justify-between items-center h-12">
				<Link href="/">
					<div>
						<HeaderImage />
					</div>
				</Link>
				<h3 className="w-11/12">kanium.me</h3>
				<Link href="/about">
					<h4 className="">about</h4>
				</Link>
			</div>
		</header>
	);
}

function HeaderImage() {
	return (
		<div>
			<Image src="/kanium.png" alt="icon" width={48} height={48} ></Image>
		</div>
	);
}
