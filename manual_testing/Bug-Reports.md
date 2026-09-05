# Bug Reports

## BUG-001 — Invalid Expiry Date Accepted During Checkout

**Severity:** Medium
**Priority:** High
**Status:** Open
**Type:** Validation

### Related Test Case

**TC-25 — Verify Payment Information Validation**

### Preconditions

* User is logged in.
* At least one product is added to the cart.
* User has reached the Payment section during checkout.

### Steps to Reproduce

1. Add a product to the cart.
2. Proceed to Checkout.
3. Enter invalid payment information.
4. Enter non-numeric characters in the Expiry Date field.
5. Attempt to place the order.
6. Repeat the test using an expired card year.
7. Attempt to place the order.

### Expected Result

* The Expiry Date field should accept only valid numeric date values.
* An expired card date should be rejected.
* The order should not be placed when invalid or expired payment information is provided.

### Actual Result

* The Expiry Date field accepted non-numeric values.
* An expired card year was accepted.
* The order was successfully placed despite the invalid payment information.

### Impact

The payment form does not properly validate the card expiry date, allowing orders to be submitted with invalid or expired expiry information.

### Environment

* Website: Automation Exercise
* Browser: Chrome
* Environment: Demo / Web
