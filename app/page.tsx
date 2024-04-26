import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/app/components/product-card/ProductCard";
export default function Home() {
  return (
      <>
      <h1 className="text-4xl text-center">Welcome to Next.js!</h1>
          <nav>
                <ul className="flex-col justify-center items-center">
                    <li>
                        <Link  href="/users">Users</Link>
                    </li>
                    <li>
                        <Link href="/users/new">New User</Link>
                    </li>
                </ul>
          </nav>
      </>
  );
}
