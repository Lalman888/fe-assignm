export type OrderStatus = "Pending" | "Preparing" | "Out for Delivery" | "Delivered" | "Cancelled";

export interface PizzaOrder {
  id: string;
  customer: string;
  pizzaType: string;
  quantity: number;
  orderDate: string;
  status: OrderStatus;
}

export const pizzaOrders: PizzaOrder[] = [
  {
    id: "PZA001",
    customer: "John Doe",
    pizzaType: "Pepperoni",
    quantity: 2,
    orderDate: "2023-05-22T10:30:00Z",
    status: "Delivered"
  },
  {
    id: "PZA002",
    customer: "Jane Smith",
    pizzaType: "Margherita",
    quantity: 1,
    orderDate: "2023-05-22T11:45:00Z",
    status: "Preparing"
  },
  {
    id: "PZA003",
    customer: "Bob Johnson",
    pizzaType: "Hawaiian",
    quantity: 3,
    orderDate: "2023-05-22T12:15:00Z",
    status: "Pending"
  },
  {
    id: "PZA004",
    customer: "Alice Williams",
    pizzaType: "Vegetarian",
    quantity: 1,
    orderDate: "2023-05-22T13:00:00Z",
    status: "Out for Delivery"
  },
  {
    id: "PZA005",
    customer: "Charlie Brown",
    pizzaType: "Meat Lovers",
    quantity: 2,
    orderDate: "2023-05-22T09:20:00Z",
    status: "Delivered"
  },
  {
    id: "PZA006",
    customer: "Diana Prince",
    pizzaType: "Supreme",
    quantity: 1,
    orderDate: "2023-05-21T18:30:00Z",
    status: "Delivered"
  },
  {
    id: "PZA007",
    customer: "Tony Stark",
    pizzaType: "BBQ Chicken",
    quantity: 4,
    orderDate: "2023-05-22T14:15:00Z",
    status: "Pending"
  },
  {
    id: "PZA008",
    customer: "Bruce Wayne",
    pizzaType: "Buffalo",
    quantity: 2,
    orderDate: "2023-05-22T15:45:00Z",
    status: "Preparing"
  },
  {
    id: "PZA009",
    customer: "Clark Kent",
    pizzaType: "Cheese",
    quantity: 1,
    orderDate: "2023-05-21T20:00:00Z",
    status: "Cancelled"
  },
  {
    id: "PZA010",
    customer: "Peter Parker",
    pizzaType: "Mushroom",
    quantity: 2,
    orderDate: "2023-05-22T16:30:00Z",
    status: "Pending"
  },
  {
    id: "PZA011",
    customer: "Wade Wilson",
    pizzaType: "Pepperoni",
    quantity: 5,
    orderDate: "2023-05-22T17:00:00Z",
    status: "Pending"
  },
  {
    id: "PZA012",
    customer: "Stephen Strange",
    pizzaType: "Supreme",
    quantity: 1,
    orderDate: "2023-05-21T19:15:00Z",
    status: "Delivered"
  },
  {
    id: "PZA013",
    customer: "Natasha Romanoff",
    pizzaType: "Vegetarian",
    quantity: 2,
    orderDate: "2023-05-22T13:45:00Z",
    status: "Out for Delivery"
  },
  {
    id: "PZA014",
    customer: "Steve Rogers",
    pizzaType: "Meat Lovers",
    quantity: 3,
    orderDate: "2023-05-22T12:30:00Z",
    status: "Preparing"
  },
  {
    id: "PZA015",
    customer: "T'Challa",
    pizzaType: "BBQ Chicken",
    quantity: 2,
    orderDate: "2023-05-21T21:00:00Z",
    status: "Delivered"
  }
]; 