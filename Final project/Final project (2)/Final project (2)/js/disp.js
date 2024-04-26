let disCat = () => {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    let tr = ''
    let total = 0
    
    cartdata.map((i,index) => {
        tr += `
      <tr>
      <td class="shoping__cart__item">
          <img src="${i.image}" alt="" height="50px" width="50px"> 
          <h5>${i.prname}</h5>  
      </td>
      <td class="shoping__cart__price">
          ${i.price}
      </td>
      <td class="shoping__cart__quantity">
          <div class="quantity">
              <div class="pro-qty">
                  <input type="number" value="${i.qty}" id="qty-${index}">
              </div>
          </div>
      </td>
      <td class="shoping__cart__total">
          $ ${i.total}
      </td>
      <td class="shoping__cart__item__close">
          <span class="icon_close" onclick="deleteItem(${index})"></span>
      </td>
  </tr>
      `
      total += i.total
    
    }
    )
     
    document.getElementById("cartid").innerHTML = tr;
    let tt = `<li>Total <span>$${total}</span></li>`
    document.getElementById("total").innerHTML = tt;
}

function updatecart(){
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    cartdata.map((i,index)=>{
        let newQty = document.getElementById(`qty-${index}`).value;
        cartdata[index].qty = parseInt(newQty);
        cartdata[index].total = i.price * parseInt(newQty);
    })
localStorage.setItem("addToCartInfo",JSON.stringify(cartdata));
alert(`updatecart successfully`);

disCat()
}
function deleteItem(index) {
    let cartdata = JSON.parse(localStorage.getItem("addToCartInfo"));
    cartdata.splice(index, 1); // Remove the item at the specified index
    localStorage.setItem("addToCartInfo", JSON.stringify(cartdata));
    alert(`delete cart successfully `)

    disCat();
}


disCat()

