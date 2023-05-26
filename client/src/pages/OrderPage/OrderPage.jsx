import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.number().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FormWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const CartWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ErrorMessageWrapper = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const OrderPage = ({ orderedItems }) => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <HomeContainer>
      <FormWrapper>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input type="text" id="name" name="name" />
              <ErrorMessageWrapper name="name" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" name="email" />
              <ErrorMessageWrapper name="email" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="phone">Phone:</Label>
              <Input type="text" id="phone" name="phone" />
              <ErrorMessageWrapper name="phone" component="div" />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="address">Address:</Label>
              <Input type="text" id="address" name="address" />
              <ErrorMessageWrapper name="address" component="div" />
            </FormGroup>

            <SubmitButton type="submit">Submit</SubmitButton>
          </Form>
        </Formik>
      </FormWrapper>
      <CartWrapper>
        {orderedItems.length > 0 ? (
          <ul>
            {orderedItems.map(item => (
              <li key={item._id}>
                {item.title} {item.quantity}
              </li>
            ))}
          </ul>
        ) : (
          <p>Add items to cart</p>
        )}
      </CartWrapper>
    </HomeContainer>
  );
};

export default OrderPage;
