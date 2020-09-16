import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HKR0lD1kNfSH2FBy13lISHvIDsBN9lYcYKJUaigaFdeHTzqwczrq5QcthegsNfGwnNrx95szTTLCfqYbcCPKN6i00aVKa1Tta";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label="Pay Now"
        name="CRWN Clothing"
        billingAddress
        shippingAddress
        image="https://sendeyo.com/up/d/f3eb2117da"
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
};

export default StripeCheckoutButton;
