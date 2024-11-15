const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});
const moneyFormat = Intl.NumberFormat("es-ES");
const productData = [
  {
    productName: "Áo vest Menlong",
    productPrice: 400000,
    productImage: "menlong",
    productIngredient: "",
    productDescription:
      "Chiếc áo vest tối giản mang lại sự dễ chịu cho ai sở hữu vô cùng thanh lịch.Với thành phần vải cotton tự nhiên đảm bảo hài lòng mang lại trải nghiệm tốt cho khách hàng.",
    state: 1,
  },
  {
    productName: "Họa Tiết Sơ Mi",
    productPrice: 599000,
    productImage: "somi",
    productDescription:
      "Chiếc áo sơ mi này là một lựa chọn hoàn hảo cho những ai yêu thích sự đơn giản, thoải mái và năng động. Với màu sắc tươi sáng và họa tiết kẻ ca rô nhẹ nhàng, chiếc áo sẽ giúp bạn nổi bật hơn trong những ngày hè.",
    state: 1,
  },
  {
    productName: "Áo khoác Sweater",
    productPrice: 315000,
    productImage: "sweater",
    productDescription: "Chiếc áo sweater len cổ tròn này có thiết kế đơn giản nhưng không kém phần tinh tế. Chất liệu len tự nhiên mềm mại, ấm áp, mang đến cảm giác thoải mái khi mặc. Màu xám trung tính dễ dàng phối hợp với nhiều trang phục khác nhau. Áo có túi kangaroo tiện lợi để đựng đồ và giữ ấm đôi tay. Form áo rộng rãi, phù hợp với nhiều dáng người.",
    state: 1,
  },
  {
    productName: "Áo Thun Korea",
    productPrice: 320000,
    productImage: "aothun",
    productDescription: "Với thiết kế đơn giản nhưng không cầu kì, chiếc áo với sự phối hợp giữa áo thun trắng bên ngoài kèm ống tay thun sọc trắng đen mang lại phong cách trẻ trung, đa dạng.",
    state: 1,
  },
  {
    productName: "Áo khoác Kaki",
    productPrice: 320000,
    productImage: "kaki",
    productDescription:
      "Chiếc áo khoác kaki nam dáng dài này có thiết kế cổ bẻ, tay dài và túi hộp trước ngực. Chất liệu kaki cotton dày dặn, bền màu, giúp giữ ấm cơ thể tốt trong mùa đông. Màu xanh navy trầm ấm, dễ phối đồ. Áo có đường may tỉ mỉ, form dáng rộng rãi, tạo cảm giác thoải mái khi mặc. Bạn có thể kết hợp áo với áo thun, quần jean và giày sneaker để có một set đồ năng động, trẻ trung.",
    state: 0,
  },
  {
    productName: "Áo Cardigan",
    productPrice: 320000,
    productImage: "cardigan",
    productDescription: "Chiếc áo len này như một đám mây mềm mại bao bọc cơ thể bạn, mang đến cảm giác ấm áp và thư thái trong những ngày đông giá lạnh. Với thiết kế cổ đứng tinh tế và màu đen huyền bí, bạn sẽ trở nên nổi bật và cuốn hút hơn bao giờ hết.",
    state: 1,
  },
  {
    productName: "Set áo Sport",
    productPrice: 268000,
    productImage: "sport",
    productDescription: "Đây là một bộ đồ thể thao nam rất đáng để sở hữu. Với thiết kế trẻ trung, màu sắc bắt mắt và chất liệu thoải mái, bộ đồ sẽ giúp bạn tự tin thể hiện phong cách cá nhân của mình.",
    state: 1,
  },
  {
    productName: "Quần Jean Baggy",
    productPrice: 300000,
    productImage: "baggy",
    productDescription: "Quần jean baggy là một kiểu quần jean có thiết kế đặc trưng với phần hông rộng rãi, thoải mái và ống quần thường thuôn dần từ đùi xuống mắt cá chân. Từ baggy trong tiếng Anh có nghĩa là rộng thùng thình, và đúng như tên gọi, quần baggy mang lại cảm giác thoải mái, phóng khoáng cho người mặc.",
    state: 0,
  },
];

$(document).ready(function () {
  let productList = "";
  productData.forEach((item) => {
    productList += `<div class="main__product__item m-4">
         <div class="main__product__item__top">
             <img class="main__product__item__top--image" src="../assets/imgs/products/${
               item.productImage
             }.png">
             <span class="main__product__item__top--text">T1 Dracular</span>
         </div>
         <div class="main__product__item__bottom">
             <span class="main__product__item__bottom__productName">${
               item.productName
             }</span>
             <span class="main__product__item__bottom__productPrice">${moneyFormat.format(
               item.productPrice
             )}₫</span>
             <img src="../assets/imgs/products/cartIcon.png" class="main__product__item__bottom__addProduct">
         </div>
     </div>`;
    $(".main__product").html("");
    $(".main__product").html(productList);

    
  });
  
  $(".main__product").on("click", ".main__product__item__top", function () {
    productData.find((item) => {
      if (
        item.productName ===
        $(this)
          .parent()
          .find(".main__product__item__bottom__productName")
          .text()
      ) {
        localStorage.setItem("currentProduct", JSON.stringify(item));
        window.location.href = "productDetail.html";
      }
    });
  });
  $(".main__product").on(
    "click",
    ".main__product__item__bottom__addProduct",
    function () {
      productData.find((item) => {
        if (
          item.productName ===
          $(this)
            .parent()
            .find(".main__product__item__bottom__productName")
            .text()
        ) {
          const cartCount = localStorage.getItem("cartCount");
          const newCartCount = cartCount ? parseInt(cartCount) + 1 : 1;
          const cart = localStorage.getItem("cartList");
          let newCart = cart ? JSON.parse(cart) : [];
          const foundItem = newCart.find(
            (element) => item.productName === element.productName
          );
          if (foundItem === undefined) {
            Toast.fire({
              icon: "success",
              title: "Đã thêm sản phẩm vào giỏ hàng!",
            });
            localStorage.setItem("cartCount", newCartCount);
            $(".header__iconBox__cartCount").text(newCartCount);
            newCart.push(item);
            localStorage.setItem("cartList", JSON.stringify(newCart));
          } else {
            Toast.fire({
              icon: "error",
              title: "Sản phẩm đã có trong giỏ hàng!",
            });
          }
        }
      });
    }
  );

  const searchValue = localStorage.getItem("searchValue");
  if (searchValue) {
    $(".main__product__item__bottom__productName").each(function () {
      if ($(this).text().toLowerCase().includes(searchValue.toLowerCase())) {
        $(this).parent().parent().show();
      } else {
        $(this).parent().parent().hide();
      }
    });
    localStorage.removeItem("searchValue");
  }
});
