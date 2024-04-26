let disData = JSON.parse(localStorage.getItem('catInfo'));
let catList = JSON.parse(localStorage.getItem('productInfo'));

let tr =` <li class="active" data-filter="*">All</li>`

disData.map((i) => {
    
    tr+=`<li data-filter=".${i.name}">${i.name}</li>`
})

document.getElementById("name").innerHTML = tr

td=''

disData.map((i)=>{
    catList.filter((j)=>{
        if(i.id==j.cid){
            td+=`<div class="col-lg-3 col-md-4 col-sm-6 mix oranges ${i.name}">
            <div class="featured__item">
                <div class="featured__item__pic set-bg">
                    <img  src="${j.image}" alt="" height="200px" width="200px">
                    <ul class="featured__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#" onclick="addToCart(${j.id})"><i class="fa fa-shopping-cart" ></i></a></li>
                    </ul>
                </div>
                <div class="featured__item__text">
                    <h6><a href="#">${j.prname}</a></h6>
                    <h5>$${j.price}</h5>
                </div>
            </div>
        </div>`
        }
    })
})

document.getElementById('cname').innerHTML=td

//insert

let cart = [];
const addToCart = (id) => {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    let obj = {};
    let image = "";
    let prname = "";
    let price = "";
    

    catList.filter((i) => {
        if (i.id == id) {
            image = i.image;
            price = i.price;
            prname = i.prname;
        }
    });

    if (cartdata != null) {

        let ans = cartdata.filter((i) => {
            return i.id == id;
        });

        if (ans.length > 0) {
            cartdata.map((i) => {
                if (i.id == id) {
                    i.qty += 1;
                    i.total=i.total+i.price
                }
            })

        } else {
            console.log("else part");
            obj = {
                category: cartdata.length + 1,
                id: id,
                image: image,
                prname: prname,
                price: parseInt(price),
                qty: 1 ,
                total:parseInt(price)
            }
            cartdata.push(obj);
        }
        localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
        alert(`${prname}  Added successfully`);


    } else {
        obj = {
            category: 1,
            id: id,
            image: image,
            prname: prname,
            price: parseInt(price),
            qty: 1,
            total:parseInt(price)
        }

        cart.push(obj);
        localStorage.setItem("addToCartInfo", JSON.stringify(cart));
        alert(`${prname}  Added successfully`);

    }
    disCat()

}













































