const voucher_vpl_1_0_0Url = 'Home/voucher_vpl_1_0_0/'
const voucher_vpl_1_0_0Data = [{
    id: '1',
    name: 'VOUCHER VINPEARL NHA TRANG',
    vouchers: [{
        name: 'VINPEARL NHA TRANG BAY',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL NHA TRANG BAY',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL NHA TRANG BAY',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL NHA TRANG BAY',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL NHA TRANG BAY',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '2',
    name: 'VOUCHER VINPEARL PHÚ QUỐC',
    vouchers: [{
        name: 'VINPEARL DISCOVERY PHÚ QUỐC',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL DISCOVERY PHÚ QUỐC',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL DISCOVERY PHÚ QUỐC',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL DISCOVERY PHÚ QUỐC',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL DISCOVERY PHÚ QUỐC',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '3',
    name: 'VOUCHER VINPEARL Đà nẵng',
    vouchers: [{
        name: 'VINPEARL ĐÀ NẴNG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL ĐÀ NẴNG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL ĐÀ NẴNG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL ĐÀ NẴNG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL ĐÀ NẴNG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '4',
    name: 'VOUCHER TẠI VINPEARL KHÁC ',
    vouchers: [{
        name: 'VINPEARL HẠ LONG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL HẠ LONG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL HẠ LONG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL HẠ LONG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL HẠ LONG RESORT',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }]
}, {
    id: '5',
    name: 'VOUCHER KHÁCH SẠN VINPEARL',
    vouchers: [{
        name: 'VINPEARL CẦN THƠ HOTEL',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic1.jpg`
    }, {
        name: 'VINPEARL CẦN THƠ HOTEL',
        link: '#',
        img: `${voucher_vpl_1_0_0Url}images/voucher_vpl_1_0_0-pic2.jpg`
    }, {
        name: 'VINPEARL CẦN THƠ HOTEL',
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
        <div class="voucher_vpl_1_0_0__img">
            <img width="219" height="148" src="${item.img}" alt="">
        </div>
        <p>${item.name}</p>
    </a>`
        })


        return `<div class="voucher_vpl_1_0_0__wrapper">
    <h2 class="voucher_vpl_1_0_0__title">${data.name}</h2>
    <div class="voucher_vpl_1_0_0__box">
      ${voucherItem}
    </div>
    ${data.vouchers.length > limit ? `<div class="voucher_vpl_1_0_0__viewMore"><button onclick="">Xem thêm >></button></div>`:''}
</div>`
}

const render=()=>{
for (let i = 0; i < voucher_vpl_1_0_0Data.length; i++) {
    document.getElementById('voucher_vpl_1_0_0__root').insertAdjacentHTML("beforeend", voucher_vpl_1_0_0Temp(voucher_vpl_1_0_0Data[i]))
}
}
render()