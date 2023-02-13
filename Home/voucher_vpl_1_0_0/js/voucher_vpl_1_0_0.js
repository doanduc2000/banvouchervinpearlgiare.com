const voucher_vpl_1_0_0Url = 'Home/voucher_vpl_1_0_0/'
const voucher_vpl_1_0_0Data = [{
    id: '1',
    name: 'voucher vinpearl nha trang',
    vouchers: [{
        name: 'vinpearl nha trang bay',
        price: '2.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl nha trang bay',
        price: '2.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl nha trang bay',
        price: '2.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl nha trang bay',
        price: '2.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl nha trang bay',
        price: '2.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '2',
    name: 'voucher vinpearl phú quốc',
    vouchers: [{
        name: 'vinpearl discovery phú quốc',
        price: '3.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl discovery phú quốc',
        price: '3.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl discovery phú quốc',
        price: '3.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl discovery phú quốc',
        price: '3.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl discovery phú quốc',
        price: '3.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '3',
    name: 'voucher vinpearl đà nẵng',
    vouchers: [{
        name: 'vinpearl đà nẵng resort',
        price: '5.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl đà nẵng resort',
        price: '5.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl đà nẵng resort',
        price: '5.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl đà nẵng resort',
        price: '5.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl đà nẵng resort',
        price: '5.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '4',
    name: 'voucher tại vinpearl khác ',
    vouchers: [{
        name: 'vinpearl hạ long resort',
        price: '6.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl hạ long resort',
        price: '6.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl hạ long resort',
        price: '6.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl hạ long resort',
        price: '6.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl hạ long resort',
        price: '6.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '5',
    name: 'voucher khách sạn vinpearl',
    vouchers: [{
        name: 'vinpearl cần thơ hotel',
        price: '4.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'vinpearl cần thơ hotel',
        price: '4.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'vinpearl cần thơ hotel',
        price: '4.000.000',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}]
const voucher_vpl_1_0_0Temp = (data) => {
        var vouchers = []
        let voucherItem = ''
        let limit = 4
        if (window.innerWidth < 913 && window.innerWidth > 767) {
            limit = 3
        } else if (window.innerWidth < 768) {
            limit = 2
        } else {
            limit = 4
        }
        if (data.vouchers.length <= limit) {
            vouchers = data.vouchers
        } else {
            for (let i = 0; i < limit; i++) {
                vouchers.push(data.vouchers[i])
            }
        }
        vouchers.forEach(item => {
            voucherItem += ` <a href="${item.link}" class="voucher_vpl_1_0_0__item">
            <div class="voucher_vpl_1_0_0__promo">Giảm 1 Triệu ĐK Trước 30 ngày</div>
        <div class="voucher_vpl_1_0_0__img">
            <img width="219" height="148" src="${item.img}" alt="">
        </div>
        <div class="voucher_vpl_1_0_0__text"> 
        <p>${item.name}</p>
        <span>${item.price} 
        <small>VND</small>
        </span>
        </div>
    </a>`
        })
        return `
        <div class="voucher_vpl_1_0_0__wrapper">
        <div class="container">
    <h2 class="voucher_vpl_1_0_0__title">${data.name}</h2>
    <div class="voucher_vpl_1_0_0__box">
      ${voucherItem}
    </div>
    ${data.vouchers.length > limit ? `<div class="voucher_vpl_1_0_0__viewMore"><button onclick="">Xem thêm </button><span>➤</span></div>`:''}
    </div>
</div>`
}

const render=()=>{
    document.getElementById('voucher_vpl_1_0_0__root').innerHTML=''
for (let i = 0; i < voucher_vpl_1_0_0Data.length; i++) {
   document.getElementById('voucher_vpl_1_0_0__root').insertAdjacentHTML("beforeend", voucher_vpl_1_0_0Temp(voucher_vpl_1_0_0Data[i]))
}
}
render()