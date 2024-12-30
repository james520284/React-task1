const {useState} = React;

// 元件
const ProductList = ({products,setUnitProduct}) => {
    return (<>
        {products.map(product => <tr key={product.id}>
            <td>{product.title}</td>
            <td>{product.origin_price}</td>
            <td>{product.price}</td>
            <td>{product.is_enabled ? '啟用':'不啟用'}</td>
            <td><button type="button" className="btn btn-primary" onClick={()=>{
                setUnitProduct(product);
            }}>查看細節</button></td>
        </tr> )
        }
    </>)
};

const Card = ({unitProduct}) => {
    return (<>
        <div className="card rounded-3">
            <img src={unitProduct.imageUrl} className="card-img  mx-auto " alt={unitProduct.title} />
            <div className="card-body">
                <h5 className="card-title">{unitProduct.title}<span className="badge bg-primary ms-2">{unitProduct.category}</span></h5>
                <p className="card-text mb-4">商品描述：{unitProduct.category}</p>
                <p className="card-text mb-4">商品內容：{unitProduct.content}</p>
                <p className="card-text mb-4"><del className="text-muted">{unitProduct.origin_price}</del>元 / {unitProduct.price} 元</p>
                <h5 className="mb-2">更多圖片：</h5>
                <div className="d-flex flex-wrap">
                    {
                        unitProduct.imagesUrl.map((photo,index) => <div className="w-50 img-h" key={index}>
                        <img src={photo} alt={unitProduct.title} className="img-cover" />
                        </div>)
                    }
                </div>
            </div>
        </div>
    </>)
};

const App = () => {
    // 資料
    const products = [
        {
        category: "甜甜圈",
        content: "尺寸：14x14cm",
        description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
        id: "-L9tH8jxVb2Ka_DYPwng",
        is_enabled: 1,
        origin_price: 150,
        price: 99,
        title: "草莓莓果夾心圈",
        unit: "元",
        num: 10,
        imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
        imagesUrl: [
            "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
            "https://images.unsplash.com/photo-1559656914-a30970c1affd"
        ]
        },
        {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
        id: "-McJ-VvcwfN1_Ye_NtVA",
        is_enabled: 1,
        origin_price: 1000,
        price: 900,
        title: "蜂蜜檸檬蛋糕",
        unit: "個",
        num: 1,
        imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
        imagesUrl: [
            "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
        ]
        },
        {
        category: "蛋糕",
        content: "尺寸：6寸",
        description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
        id: "-McJ-VyqaFlLzUMmpPpm",
        is_enabled: 0,
        origin_price: 700,
        price: 600,
        title: "暗黑千層",
        unit: "個",
        num: 15,
        imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
        imagesUrl: [
            "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
            "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
        ]
        }
    ];
    const [unitProduct,setUnitProduct] =useState(products[0]); 
    // 畫面
    return (<>
        <div className="container mt-5">
            <div className="row gx-4">
                <div className="col-md-6">
                    <h1 className="h2">產品列表</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>產品名稱</th>
                                <th>原價</th>
                                <th>售價</th>
                                <th>是否啟用</th>
                                <th>查看細節</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ProductList products={products} setUnitProduct={setUnitProduct} />
                        </tbody>
                    </table>
                </div>
                <div className="col-md-6">
                    <h2 className="h2">單一產品細節</h2>
                    <Card unitProduct={unitProduct}/>
                </div>
            </div>
        </div>
    </>)
};

// 渲染
ReactDOM.createRoot(document.querySelector('#root')).render(<App />);