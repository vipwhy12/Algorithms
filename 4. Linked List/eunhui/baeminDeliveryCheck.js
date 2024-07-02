const shop_menus = ['떡볶이', '만두', '오뎅', '사이다', '콜라'];
const shop_orders = ['오뎅', '콜라', '만두'];

function is_available_to_order(menus, orders) {
    return orders.every((order) => menus.includes(order));
}

const result = is_available_to_order(shop_menus, shop_orders);
console.log(result);
