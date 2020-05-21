class Order {
    constructor(id, name, cost) {
        this.id = id;
        this.name = name;
        this.cost = cost;
    }
}

class OrderList {
    constructor() {
            this.orders = [];
        }
        // add an order
    addOrder(order) {
            this.orders.push(order);
        }
        // print the orders
    printOrders() {
            console.log(this.orders);
        }
        // update an order
    updateOrder(order) {
            for (let i = 0; i < this.orders.length; i++) {
                if (order.id === this.orders[i].id) {
                    this.orders[i] = order;
                }
            }
        }
        // delete an order
    deleteOrder(id) {
        this.orders.forEach((o, index) => {
            if (o.id === id) {
                this.orders.splice(index, 1);
            }
        })
    }
}

// make 3 orders
const order1 = new Order(1, 'basketball', 9.99);
const order2 = new Order(2, 'orange', 1);
const order3 = new Order(3, 'ice cream', 3);

const orderList = new OrderList();

orderList.printOrders();

orderList.addOrder(order1);
orderList.addOrder(order2);
orderList.addOrder(order3);

orderList.printOrders();


orderList.deleteOrder(3);
orderList.updateOrder(new Order(2, 'orange', 2));
orderList.printOrders();