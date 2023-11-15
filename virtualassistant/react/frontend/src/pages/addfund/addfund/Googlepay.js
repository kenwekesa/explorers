// import React, { useState } from 'react';
// import GooglePayButton from "@google-pay/button-react"

// const Googlepay = ({ isOpen, onClose }) =>{

//     if (!isOpen) return null;


//   return (
//     <div className="dialog-background">
//       <div className="dialog-box dialog-box-elevation">
//         <h3>Add funds <span>using credit card!</span></h3>
//         <GooglePayButton
//         environment="TEST"
//         paymentRequest={{
//           apiVersion: 2,
//           apiVersionMinor: 0,
//           allowedPaymentMethods: [
//             {
//               type: 'CARD',
//               parameters: {
//                 allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//                 allowedCardNetworks: ['MASTERCARD', 'VISA'],
//               },
//               tokenizationSpecification: {
//                 type: 'PAYMENT_GATEWAY',
//                 parameters: {
//                   gateway: 'example',
//                   gatewayMerchantId: 'exampleGatewayMerchantId',
//                 },
//               },
//             },
//           ],
//           merchantInfo: {
//             merchantId: '12345678901234567890',
//             merchantName: 'Demo Merchant',
//           },
//           transactionInfo: {
//             totalPriceStatus: 'FINAL',
//             totalPriceLabel: 'Total',
//             totalPrice: '100.00',
//             currencyCode: 'USD',
//             countryCode: 'US',
//           },
//           shippingAddressRequired: true,
//           callbackIntents: ["PAYMENT_AUTHORIZATION"]
//         }}
//         onLoadPaymentData={paymentRequest => {
//           console.log('load payment data', paymentRequest);
//         }}
//           onPaymentAuthorized={paymentData => {
//             console.log(paymentData)
//           return {transactionState: "SUCCESS"}
//           }}
//           existingPaymentMethodRequired='false'
//           buttonColor='Black'
//           buttonType='buy'
//         />
//         <button className="close-button" onClick={onClose}>
//           X
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Googlepay

import React, { useState } from 'react';
import GooglePayButton from "@google-pay/button-react";

const Googlepay = ({ isOpen, onClose }) => {
  const [totalPrice, setTotalPrice] = useState('0.00');

  if (!isOpen) return null;

  return (
    <div className="dialog-background">
      <div className="dialog-box dialog-box-elevation">
        <h3>Add funds <span>using credit card!</span></h3>
        <hr></hr>
        {/* <label htmlFor="totalPriceInput">Enter Total Price:</label> */}
        <input
          type="text"
          id="totalPriceInput"
          value={totalPrice}
          className='paypal_input_main'
          placeholder='Enter amount in $'
          onChange={(e) => setTotalPrice(e.target.value)}
        />
        {totalPrice > 0 && (
        <GooglePayButton
          environment="PRODUCTION"
          paymentRequest={{
            apiVersion: 2,
            apiVersionMinor: 0,
            allowedPaymentMethods: [
              {
                type: 'CARD',
                parameters: {
                  allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                  allowedCardNetworks: ['MASTERCARD', 'VISA'],
                },
                tokenizationSpecification: {
                  type: 'PAYMENT_GATEWAY',
                  parameters: {
                    gateway: 'example',
                    gatewayMerchantId: 'exampleGatewayMerchantId',
                  },
                },
              },
            ],
            // merchantInfo: {
            //   merchantId: '12345678901234567890',
            //   merchantName: 'Demo Merchant',
            // },
            merchantInfo: {
              merchantId: 'BCR2DN4TQ3KYDMZW',
              merchantName: 'Geek triplets',
            },
            transactionInfo: {
              totalPriceStatus: 'FINAL',
              totalPriceLabel: 'Total',
              totalPrice: totalPrice,
              currencyCode: 'USD',
              countryCode: 'US',
            },
            shippingAddressRequired: true,
            callbackIntents: ["PAYMENT_AUTHORIZATION"]
          }}
          onLoadPaymentData={paymentRequest => {
            console.log('load payment data', paymentRequest);
          }}
          onPaymentAuthorized={paymentData => {
            console.log(paymentData);
            return { transactionState: "SUCCESS" };
          }}
          existingPaymentMethodRequired={false} // Note: 'false' should not be a string
          buttonColor='Black'
          buttonType='buy'
        />
        )}
        <button className="close-button" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default Googlepay;
