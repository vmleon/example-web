import React from 'react';
import { Button, Form } from 'semantic-ui-react';

export default function OrderBook({ onPlaceOrder }) {
  return (
    <Form>
      <Form.Field>
        <label>Your email</label>
        <input placeholder="name@example.com" required error />
      </Form.Field>
      <Button onClick={onPlaceOrder}>Order</Button>
    </Form>
  );
}
