import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { addOrder } from 'services/shopsApi';
import { Container } from './OrderPage.styled';
import UserForm from '../../components/UserForm/UserForm';
import OrderedList from '../../components/OrderedList/OrderedList';

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
        const total = item.price * quantity;
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

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

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
    <Container>
      {cartItems.length > 0 ? (
        <>
          <UserForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
          <OrderedList
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleDeleteItem={handleDeleteItem}
            totalPrice={totalPrice}
          />
        </>
      ) : (
        <div>
          <p>Add more items to the cart</p>
        </div>
      )}
    </Container>
  );
};

export default CartPage;
