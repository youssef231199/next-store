import { notFound } from "next/navigation"

export default async function ProductDetailsPage({params}) {
    const {id} = await params
    const response = await fetch(`https://dummyjson.com/products/${id}`, {cache: "no-store"})
    if(response.status === 404) notFound()
    if(!response.ok) throw Error("Could not load product details")
    const product = await response.json()
    const image = product.images[0] ?? product.thumbnail
    return <>
        <div>
        {product.id}

        </div>
        <div>

        {product.title}
        </div>
        <div>

        {product.category}
        </div>
        <div>
            <img src={image} alt="" />
        </div>
    </>
}