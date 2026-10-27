import ProductCard from "@/components/ProductCard";

export default async function ProductsPage({searchParams}) {

    const query = await searchParams
    const q = query.q 
    const url = q ? `https:dummyjson.com/products/search?q=${encodeURIComponent(q)}&limit=24` : "https:dummyjson.com/products?limit=24"

    const response = await fetch(url, {cache: "no-store"})

    if (!response.ok) throw new Error ("Couldnot load products from DummyJson")
    const data = await response.json()
    const products = data.products ?? []

    return <section className="mx-auto max-w-6xl px-5 py-12 md:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
                <p className="text-sm font-bold uppercase text-indigo-600 tracking-widest">The Catalog</p>
                <h1 className="mt-2 text-4xl font-extrabold tracking-light">Shop Products</h1>
                <p className="mt-3 text-slate-600">fetched on the server from DummyJson.</p>
            </div>
            <form action="/products" method="GET" className="flex w-full gap-2 sm:max-w-md">
                <input type="search" name="q" defaultValue={q}  placeholder="Search for a product..." className="min-w-0 flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 foxus:ring-indigo-100"/>
                <button type="submit" className="rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white">Search</button>
            </form>
        </div>
        <p>{products.length} Product{products.length === 1 ? "" : "s"} </p>
        {products.length ? 
        (<div>
            {products.map((product) => <ProductCard key={product.id} product={product}/>)}
        </div>) :
        (<div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-xenter text-slate-600">
            No Products found. Try another search
        </div>)
        }
    </section>
}