import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KXsnNDKxL7ZUSkl2VY0gqJgqeRJ32SBUF2c3l0iD0dIpCTnESSAtLvCwJIHUDyTEDpxt8CLder9xlE5kxlh7NVA00F77zWAJI";
   
       const onToken = token =>{
            console.log(token);
            alert('payment successful')
        }
    return(
        <StripeCheckout 
            label = "pay now"
            name ="C-clothing"
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="pay now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton;