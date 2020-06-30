let obj = {
    data: {
        uuid: '9fbd3898-4d4d-4c65-a3cf-6af8511169fb',
        products: []
    },
    getData(){
        const vm = this;
        const url = `https://course-ec-api.hexschool.io/api/${vm.data.uuid}/ec/products`; //Frontend 前台 - Product list. 取得所有商品列表
        axios.get(url)
            .then(function (response) { //simple call
                vm.data.products = response.data.data;
                vm.render();
            })
            .catch(function (error) {
                console.log('錯誤', error);
            })
    },
    render(){
        const app = document.querySelector('.app');
        const title = document.querySelector('.category-title');
        const products = this.data.products;
        let string = '';
        products.forEach( item => {
            string += 
            `<li class="card">
                <a href="#">
                    <div class="card-img" style="background-image: url(${ item.imageUrl[0] })">
                        <button class="add-btn">Add to Cart</button>
                    </div>
                    <div class="card-text">
                        <h5 class="card-title">${ item.title }</h5>
                        <p class="sale-price">NT$${ item.price }<span class="sale-icon">sale</span></p>
                        <p class="origin-price">NT$${ item.origin_price }</p>
                    </div>
                </a>
            </li>`
        });
        title.innerHTML = `${products[0].category}`;
        app.innerHTML = string;
    }
};
obj.getData();


//非作業部份
const allProductBtn = document.querySelector('.all-product');
const allProductTop = document.querySelector('.all-product-top');
const hamBtn = document.querySelector('.ham-btn');
const topClass = document.querySelector('.top');

allProductBtn.addEventListener('click', subMenu, false);
hamBtn.addEventListener('click', showMainMenu, false);
allProductTop.addEventListener('click', topSubMenu, false);

function subMenu(e) {
    e.preventDefault();
    allProductBtn.classList.toggle('show');
}

function showMainMenu() {
    topClass.classList.toggle('show-menu');
}

function topSubMenu(e) {
    e.preventDefault();
    allProductTop.classList.toggle('show');
}