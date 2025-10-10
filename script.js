/*
Task 1: Customer Lifetime Value Analysis
Requirements
 - Calculate total spending per customer
 - Compute average order value
 - Track customer order history
 - Identify high-value customers


  Expected Output: 
  {
    "CUST-101": {
      "name": "Alice Johnson",
      "tier": "premium",
      "totalOrders": 2,
      "totalSpent": 609.93,
      "average  OrderValue": 304.97,
      "orders": [
        { "orderId": "ORD-001", "amount": 249.97, "date": "2024-01-15" },
        { "orderId": "ORD-003", "amount": 359.96, "date": "2024-02-05" }
      ]
    }
  }

*/

const ecommerceData = {
  store: "TechCorp",
  period: "Q1 2024",
  orders: [
    {
      orderId: "ORD-001",
      customer: {
        id: "CUST-101",
        name: "Alice Johnson",
        tier: "premium",
        joinDate: "2022-03-15",
      },
      date: "2024-01-15",
      status: "delivered",
      items: [
        {
          productId: "P-101",
          name: "Wireless Headphones",
          category: "Electronics",
          price: 199.99,
          quantity: 1,
          rating: 4.5,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 24.99,
          quantity: 2,
          rating: 4.0,
        },
      ],
      payment: { method: "credit_card", amount: 249.97, currency: "USD" },
    },
    {
      orderId: "ORD-002",
      customer: {
        id: "CUST-102",
        name: "Bob Smith",
        tier: "standard",
        joinDate: "2023-07-20",
      },
      date: "2024-01-18",
      status: "processing",
      items: [
        {
          productId: "P-305",
          name: "Gaming Mouse",
          category: "Electronics",
          price: 79.99,
          quantity: 1,
          rating: 4.8,
        },
        {
          productId: "P-410",
          name: "Mechanical Keyboard",
          category: "Electronics",
          price: 129.99,
          quantity: 1,
          rating: 4.7,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 24.99,
          quantity: 1,
          rating: 4.0,
        },
      ],
      payment: { method: "paypal", amount: 234.97, currency: "USD" },
    },
    {
      orderId: "ORD-003",
      customer: {
        id: "CUST-101",
        name: "Alice Johnson",
        tier: "premium",
        joinDate: "2022-03-15",
      },
      date: "2024-02-05",
      status: "delivered",
      items: [
        {
          productId: "P-520",
          name: "Smart Watch",
          category: "Electronics",
          price: 299.99,
          quantity: 1,
          rating: 4.2,
        },
        {
          productId: "P-615",
          name: "Screen Protector",
          category: "Accessories",
          price: 19.99,
          quantity: 3,
          rating: 3.8,
        },
      ],
      payment: { method: "credit_card", amount: 359.96, currency: "USD" },
    },
    {
      orderId: "ORD-004",
      customer: {
        id: "CUST-103",
        name: "Carol Davis",
        tier: "standard",
        joinDate: "2024-01-10",
      },
      date: "2024-02-20",
      status: "cancelled",
      items: [
        {
          productId: "P-305",
          name: "Gaming Mouse",
          category: "Electronics",
          price: 79.99,
          quantity: 2,
          rating: 4.8,
        },
      ],
      payment: { method: "credit_card", amount: 159.98, currency: "USD" },
    },
  ],
  products: {
    "P-101": {
      name: "Wireless Headphones",
      category: "Electronics",
      cost: 120.0,
      stock: 45,
    },
    "P-205": {
      name: "Phone Case",
      category: "Accessories",
      cost: 8.0,
      stock: 200,
    },
    "P-305": {
      name: "Gaming Mouse",
      category: "Electronics",
      cost: 45.0,
      stock: 78,
    },
    "P-410": {
      name: "Mechanical Keyboard",
      category: "Electronics",
      cost: 80.0,
      stock: 32,
    },
    "P-520": {
      name: "Smart Watch",
      category: "Electronics",
      cost: 180.0,
      stock: 15,
    },
    "P-615": {
      name: "Screen Protector",
      category: "Accessories",
      cost: 5.0,
      stock: 300,
    },
  },
};

const ecommerceDataNew = {
  store: "TechCorp",
  period: "Q1 2024",
  orders: [
    {
      orderId: "ORD-001",
      customer: {
        id: "CUST-101",
        name: "Alice Johnson",
        tier: "premium",
        joinDate: "2022-03-15",
      },
      date: "2024-01-15",
      status: "delivered",
      items: [
        {
          productId: "P-101",
          name: "Wireless Headphones",
          category: "Electronics",
          price: 199.99,
          quantity: 1,
          rating: 4.5,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 24.99,
          quantity: 2,
          rating: 4.0,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 10,
          quantity: 2,
          rating: 4.0,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 10,
          quantity: 2,
          rating: 4.0,
        },
      ],
      payment: { method: "credit_card", amount: 280.97, currency: "USD" },
    },
    {
      orderId: "ORD-002",
      customer: {
        id: "CUST-102",
        name: "Bob Smith",
        tier: "standard",
        joinDate: "2023-07-20",
      },
      date: "2024-01-18",
      status: "processing",
      items: [
        {
          productId: "P-305",
          name: "Gaming Mouse",
          category: "Electronics",
          price: 79.99,
          quantity: 1,
          rating: 4.8,
        },
        {
          productId: "P-410",
          name: "Mechanical Keyboard",
          category: "Electronics",
          price: 129.99,
          quantity: 1,
          rating: 4.7,
        },
        {
          productId: "P-205",
          name: "Phone Case",
          category: "Accessories",
          price: 24.99,
          quantity: 1,
          rating: 4.0,
        },
      ],
      payment: { method: "paypal", amount: 234.97, currency: "USD" },
    },
    {
      orderId: "ORD-003",
      customer: {
        id: "CUST-101",
        name: "Alice Johnson",
        tier: "premium",
        joinDate: "2022-03-15",
      },
      date: "2024-02-05",
      status: "delivered",
      items: [
        {
          productId: "P-520",
          name: "Smart Watch",
          category: "Electronics",
          price: 299.99,
          quantity: 1,
          rating: 4.2,
        },
        {
          productId: "P-615",
          name: "Screen Protector",
          category: "Accessories",
          price: 19.99,
          quantity: 3,
          rating: 3.8,
        },
      ],
      payment: { method: "credit_card", amount: 359.96, currency: "USD" },
    },
    {
      orderId: "ORD-004",
      customer: {
        id: "CUST-103",
        name: "Carol Davis",
        tier: "standard",
        joinDate: "2024-01-10",
      },
      date: "2024-02-20",
      status: "cancelled",
      items: [
        {
          productId: "P-305",
          name: "Gaming Mouse",
          category: "Electronics",
          price: 79.99,
          quantity: 2,
          rating: 4.8,
        },
      ],
      payment: { method: "credit_card", amount: 159.98, currency: "USD" },
    },
    {
      orderId: "ORD-005",
      customer: {
        id: "CUST-101",
        name: "Alice Johnson",
        tier: "premium",
        joinDate: "2022-03-15",
      },
      date: "2024-02-05",
      status: "delivered",
      items: [
        {
          productId: "P-520",
          name: "Smart Watch",
          category: "Electronics",
          price: 299.99,
          quantity: 1,
          rating: 4.2,
        },
        {
          productId: "P-615",
          name: "Screen Protector",
          category: "Accessories",
          price: 19.99,
          quantity: 3,
          rating: 3.8,
        },
      ],
      payment: { method: "credit_card", amount: 359.96, currency: "USD" },
    },
  ],
  products: {
    "P-101": {
      name: "Wireless Headphones",
      category: "Electronics",
      cost: 120.0,
      stock: 45,
    },
    "P-205": {
      name: "Phone Case",
      category: "Accessories",
      cost: 8.0,
      stock: 200,
    },
    "P-305": {
      name: "Gaming Mouse",
      category: "Electronics",
      cost: 45.0,
      stock: 78,
    },
    "P-410": {
      name: "Mechanical Keyboard",
      category: "Electronics",
      cost: 80.0,
      stock: 32,
    },
    "P-520": {
      name: "Smart Watch",
      category: "Electronics",
      cost: 180.0,
      stock: 15,
    },
    "P-615": {
      name: "Screen Protector",
      category: "Accessories",
      cost: 5.0,
      stock: 300,
    },
  },
};

function getCustomerStats(ecommerceInputData) {
  let customerStats = {};

  // console.log(ecommerceInputData.orders);

  ecommerceInputData.orders.forEach((order) => {
    let customer = order.customer;

    if (customerStats[customer.id] !== undefined) {
      let customerExist = customerStats[customer.id];

      customerStats[customer.id] = {
        name: customer.name,
        tier: customer.tier,
        totalOrders: customerExist.totalOrders + 1,
        totalSpent: customerExist.totalSpent + order.payment.amount,
        orders: [...customerExist.orders],
      };
    } else {
      customerStats[customer.id] = {
        name: customer.name,
        tier: customer.tier,
        totalOrders: 1,
        totalSpent: order.payment.amount,
        orders: [],
      };
    }

    customerStats[customer.id].orders.push(order);
  });

  for (let customerId in customerStats) {
    let customer = customerStats[customerId];

    customer.averageOrderValue = (
      customer.totalSpent / customer.totalOrders
    ).toFixed(2);

    customer.totalSpent = customer.totalSpent.toFixed(2);
  }

  return customerStats;
}

const result = getCustomerStats(ecommerceData);
console.log({ result });

const result2 = getCustomerStats(ecommerceDataNew);
console.log({ result2 });
