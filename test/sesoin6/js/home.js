// let products=[
//     {
//         image:"../sesoin6/asset/images/images.jpg",
//         name:"Iphone 15",
//         price:"50000",
//         id:1,
//         stock:20

//     },{
//         image:"../sesoin6/asset/images/images (1).jpg",
//         name:"Iphone 14",
//         price:"50000",
//         id:1,
//         stock:20
//     }
//     ,{
//         image:"../sesoin6/asset/images/op-lung-flipcover-17-800x450.webp",
//         name:"Iphone 13",
//         price:"50000",
//         id:1,
//         stock:20
//     },{
//         image:"../sesoin6/asset/images/2015085.webp",
//         name:"Iphone 12",
//         price:"50000",
//         id:1,
//         stock:20
//     },{
//         image:"../sesoin6/asset/images/download (1).jpg",
//         name:"Iphone 11",
//         price:"50000",
//         id:1,
//         stock:20
//     },{
//         image:"../sesoin6/asset/images/download (2).jpg",
//         name:"Iphone 10",
//         price:"50000",
//         id:1,
//         stock:20
//     },{
//         image:"../sesoin6/asset/images/download (3).jpg",
//         name:"Iphone 9",
//         price:"50000",
//         id:1,
//         stock:20
//     },{
//         image:"../sesoin6/asset/images/images.jpg",
//         name:"Iphone 8",
//         price:"50000",
//         id:1,
//         stock:20
//     }
// ]
// localStorage.setItem("products",JSON.stringify(products));
let products = JSON.parse(localStorage.getItem("products"));
console.log("11111", products);
//
function renderProduct() {
  let element = "";
  for (let i = 0; i < products.length; i++) {
    element += `
        <div>
              <img
                style="height: 180px; width: 180px"
                src="${products[i].image}"
                alt=""
              />
            </div>
            <div style="padding: 5px; padding-top: 0px">
              ${products[i].name}
            </div>

            <div class="textSp" style="padding: 5px"><u>đ</u>72.194</div>
            <p>price:${products[i].price}</p>
            <button>Mua</button>
          </div>
          
        `;
  }
  // console.log(element);
  document.getElementById("super0").innerHTML = element;
}
renderProduct();
