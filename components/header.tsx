import Link from "next/link"

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
