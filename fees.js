document.addEventListener('DOMContentLoaded', function() {
    const paymentMethodSelect = document.getElementById('paymentMethod');
    const paymentDetailsDiv = document.getElementById('paymentDetails');

    paymentMethodSelect.addEventListener('change', function() {
        const selectedMethod = paymentMethodSelect.value;

        let htmlContent = '';

        switch (selectedMethod) {
            case 'creditCard':
                htmlContent = `
                    <h3>Credit/Debit Card Details</h3>
                    <label for="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" required>
                    <label for="expiryDate">Expiry Date:</label>
                    <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required>
                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required>
                    <p><button type="submit" class="btn">Pay with Credit/Debit Card</button></p>
                `;
                break;
            case 'paypal':
                htmlContent = `
                    <h3>PayPal Payment</h3>
                    <p>You will be redirected to PayPal to complete your payment.</p>
                    <p><button type="submit" class="btn">Pay with PayPal</button></p>
                `;
                break;
            case 'bankTransfer':
                htmlContent = `
                    <h3>Bank Transfer Details</h3>
                    <p>Please transfer the amount to the following bank account:</p>
                    <p><strong>Bank Name:</strong> Example Bank</p>
                    <p><strong>Account Number:</strong> 123456789</p>
                    <p><strong>IFSC Code:</strong> EXAMPLE123</p>
                    <label for="transactionId">Transaction ID:</label>
                    <input type="text" id="transactionId" name="transactionId" placeholder="Enter your transaction ID" required>
                    <p><button type="submit" class="btn">Submit Transfer Details</button></p>
                `;
                break;
            case 'upi':
                htmlContent = `
                    <h3>UPI Payment</h3>
                    <p>Please pay using the UPI ID: example@upi</p>
                    <label for="upiId">UPI ID:</label>
                    <input type="text" id="upiId" name="upiId" placeholder="Enter your UPI ID" required>
                    <label for="upiTransactionId">UPI Transaction ID:</label>
                    <input type="text" id="upiTransactionId" name="upiTransactionId" placeholder="Enter UPI Transaction ID" required>
                    <p><button type="submit" class="btn">Submit UPI Payment</button></p>
                `;
                break;
            default:
                htmlContent = '';
        }

        paymentDetailsDiv.innerHTML = htmlContent;
    });
});