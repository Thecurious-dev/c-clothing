import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';



const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51KXsnNDKxL7ZUSkl2VY0gqJgqeRJ32SBUF2c3l0iD0dIpCTnESSAtLvCwJIHUDyTEDpxt8CLder9xlE5kxlh7NVA00F77zWAJI";
   
       const onToken = token =>{
           axios({
               url:'payment',
               method: 'post',
               data:{
                   amount: priceForStripe,
                   token
               }
           }).then(response =>{
               alert('payment successful')
           }).catch(error =>{
               console.log('payment error: ', JSON.parse(error));
               alert(
                   'there was an issue with your payment.Please make sure you use the provided credit card'
               );
           });

        };
        
    return(
        <StripeCheckout 
            label = "pay now"
            name ="c-clothing"
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