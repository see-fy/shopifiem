import Product from "./Product"

function ProductFeed({ products }) {
    return (
        <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
            {products.slice(0,4).map(({ id, title, category, description, image, price }) => {
                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        image={image}
                        category={category}
                        price={price}
                      />
                )
            })}
            <img className="md:col-span-full ml-5" src="https://links.papareact.com/dyz" alt="" />
            <div className="md:col-span-2">
                {products.slice(4,5).map(({ id, title, category, description, image, price }) => {
                    return (
                        <Product
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            image={image}
                            category={category}
                            price={price}
                        />
                    )
                })}
            </div>
            {products.slice(5,products.length).map(({ id, title, category, description, image, price }) => {
                return (
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        description={description}
                        image={image}
                        category={category}
                        price={price}
                    />
                )
            })}
        </div>

    )
}

export default ProductFeed
