import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link href="/csr_example">Go to CSR Page</Link>
            <br />
            <br />
            <Link href="/ssr_example">Go to SSR Page</Link>
        </>
    );
}
