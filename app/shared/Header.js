import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-center py-4 mb-6">
            <Link href="/">
                <Image
                    src="/international_pokémon_logo.svg"
                    alt="Next.js Logo"
                    width={180}
                    height={37}
                    priority
                />
            </Link>
        </header>
    )
}