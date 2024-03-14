function cartpagedisplay()
{
    var cartpagediv=document.querySelector('.cart_page')
    if(cartpagediv.style.display=="block")
    {
        cartpagediv.style.display="none"
    }
    else{
        cartpagediv.style.display="block"
    }
}
function ShowAll()
{
    var sideNav=document.querySelector('.sidenav')
    var productDiv=document.querySelector('.products')
    if(sideNav.style.left=="0%")
    {
        sideNav.style.left="-100%"
        productDiv.style.width="100%"
    }
    else{
        sideNav.style.left="0%"
        productDiv.style.width="80%"
    }
}

function showProducts(n)
{
    var num=Number(n)
    var ProductItemDiv=document.querySelectorAll('.product_items')
    var addsDiv=document.querySelector('.product_adds')
    for(var i=0;i<ProductItemDiv.length;i++)
    {
        if(i==num)
        {
            ProductItemDiv[i].style.display="block"
            addsDiv.style.display="none"
        }
        else{
            ProductItemDiv[i].style.display="none"
            addsDiv.style.display="none"
        }
    }
}

function home_page()
{
    var ProductItemDiv=document.querySelectorAll('.product_items')
    var addsDiv=document.querySelector('.product_adds')
    var sideNav=document.querySelector('.sidenav')
    var productDiv=document.querySelector('.products')
    addsDiv.style.display="block"
    for(var i=0;i<ProductItemDiv.length;i++)
    {
            ProductItemDiv[i].style.display="none"
    }
    sideNav.style.left="-100%"
    productDiv.style.width="100%"
}

// Items added into cartpage...

var item_btns=document.querySelectorAll('.item_btn')
var cartitems_page=document.querySelector('.cart_items')
var cartcount=document.querySelector('.cartcount')
var count=0
var carttotal=document.querySelector('.total_amount')
var total=0
item_btns.forEach(item_btn=>{
    item_btn.addEventListener("click",()=>{
        var productDivItem=item_btn.parentNode
       var product={
        img:productDivItem.getElementsByClassName('img_item')[0].getAttribute('src'),
        name:productDivItem.getElementsByClassName('item_name')[0].innerHTML,
        price:productDivItem.getElementsByClassName('item_price')[0].textContent,
        qnty:1
       }
       var Numprice=product.price.substr(3,product.price.length)

       ++count
       cartcount.innerHTML=count

       total+=Number(Numprice)
       carttotal.innerHTML=total


       cartitems_page.innerHTML+=`
       <div class="item_page">
       <div>
       <img src="${product.img}" class='cartimg_item'>
       </div>
       <div>
       <h4 class="cartitem_name">${product.name}</h4>
       </div>
       <div>
       <h4 class="cartitem_price">${Numprice}</h4>
       </div>
       <div>
       <button class="cartitem_decrbtn">-</button>
       <span class="cartitem_qnty">${product.qnty}</span>
       <button class="cartitem_incrbtn">+</button>
       </div>
       <div>
       <h4 class="cartitemtotal_price">${Numprice}</h4>
       </div>
       <div>
       <button class="cartitem_clsbtn">X</button>
       </div>
       </div>
       `
       // Update products in a cart

       var Allcartitems=document.querySelectorAll('.item_page')
       Allcartitems.forEach(cartitem=>{
         var incr_btn=cartitem.getElementsByClassName('cartitem_incrbtn')[0]
         var decr_btn=cartitem.getElementsByClassName('cartitem_decrbtn')[0]
         var close_btn=cartitem.getElementsByClassName('cartitem_clsbtn')[0]
         var cartitem_price=cartitem.getElementsByClassName('cartitem_price')[0].innerHTML
         var cartitem_total=cartitem.getElementsByClassName('cartitemtotal_price')[0]
         var item_qnty=cartitem.getElementsByClassName('cartitem_qnty')[0].innerHTML

      // Increment qnty in cart
      incr_btn.addEventListener("click",()=>{
                ++item_qnty
                cartitem.getElementsByClassName('cartitem_qnty')[0].innerHTML=item_qnty
                cartitem_total.innerHTML=item_qnty*cartitem_price
                total+=Number(cartitem_price)
                carttotal.innerHTML=total
      })

       // Decrement qnty in cart
       decr_btn.addEventListener("click",()=>{
        --item_qnty
        if(item_qnty<1)
        {
                carttotal.innerHTML=total
        }
        else{
            total-=Number(cartitem_price)
            carttotal.innerHTML=total
        }
       


        if(item_qnty<=0)
        {
            item_qnty=1
        }
        cartitem.getElementsByClassName('cartitem_qnty')[0].innerHTML=item_qnty
        cartitem_total.innerHTML=item_qnty*cartitem_price


        })

        //Remove Cartitem in cart
        close_btn.addEventListener("click",()=>{
            cartitem.remove()
            total-=Number(cartitem_total.innerHTML)
            carttotal.innerHTML=total

            --count
            cartcount.innerHTML=count
        })

       })
    })
})


// Cart clear
function cartclear()
{
    var Allcartitems=document.querySelectorAll('.item_page')
    Allcartitems.forEach(cartItem=>{
        cartItem.remove()
    })
    total=0
    carttotal.innerHTML=total

    count=0
    cartcount.innerHTML=count

}

//Place order function !!

function placeorder()
{
    if(count>0)
    {
        alert("Order Placed Successfully !!\n Total amount has been Paid : Rs."+total )
    }
    else{
        alert("Please Add atleast one item into cart first !!")
    }
}

