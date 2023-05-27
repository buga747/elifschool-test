import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addOrder } from 'services/shopsApi';

const CartPage = ({ items }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });
  const [shopId, setShopId] = useState('');

  useEffect(() => {
    if (items.length > 0) {
      setShopId(items[0].shopId);
    }
  }, [items]);

  const [cartItems, setCartItems] = useState(items);
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price based on item quantities
  useEffect(() => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (itemId, quantity) => {
    const updatedItems = cartItems.map(item => {
      if (item._id === itemId) {
        const total = item.price * quantity; // Calculate the total for the item
        return {
          ...item,
          quantity,
          total,
        };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleDeleteItem = itemId => {
    const updatedItems = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedItems);
  };

  // Handle form input changes
  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      user: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
      },
      shopId: shopId,
      items: cartItems.map(item => ({
        name: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: totalPrice,
      date: new Date().toISOString(),
    };

    console.log(items[0]);
    console.log(data);

    try {
      const response = await addOrder(data);
      if (response) {
        toast.success('Thank you for your order. Wait for the delivery');
      }

      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
      });
      setCartItems([]);
    } catch (error) {
      console.error(error.message);
      toast.error('Something wrong. Please try again later');
    }
  };

  return (
    <div>
      <div>
        <h2>User Information</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2>Ordered Items</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item._id}>
              <div>
                <strong>{item.title}</strong>
              </div>
              <div>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={e =>
                    handleQuantityChange(item._id, parseInt(e.target.value))
                  }
                  min="1"
                />
              </div>
              <div>Price: ${item.price}</div>
              <div>Total: ${(item.quantity * item.price).toFixed(2)}</div>{' '}
              {/* Calculate and display the total price with two decimal places */}
              <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
