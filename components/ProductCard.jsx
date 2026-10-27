import Link from 'next/link'
export default function ProductCard({product}) {
    return <><div>
        <Link href={`/products/${product.id}`}>{product.title}</Link></div></>
}