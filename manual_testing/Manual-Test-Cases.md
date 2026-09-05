# Manual Test Cases

> These test cases cover manual testing scenarios that are not included in the UI automation scope.

## Authentication

### TC-03 — Login User with Incorrect Credentials

**Priority:** High
**Type:** Negative

**Preconditions:**

* User account is already registered.

**Steps:**

1. Navigate to the Login page.
2. Enter a registered email address.
3. Enter an incorrect password.
4. Click the Login button.

**Expected Result:**

* The user is not logged in.
* An appropriate error message is displayed.

**Actual Result:**

**Status:** Not Executed

---

### TC-04 — Logout User

**Priority:** Medium
**Type:** Functional

**Preconditions:**

* User is logged in.

**Steps:**

1. Click the Logout button.

**Expected Result:**

* The user is logged out successfully.
* The Login page is displayed.

**Actual Result:**

**Status:** Not Executed

---

### TC-05 — Register User with Existing Email

**Priority:** High
**Type:** Negative

**Preconditions:**

* An account already exists with the entered email address.

**Steps:**

1. Navigate to the Signup page.
2. Enter an existing email address.
3. Enter the required registration information.
4. Submit the form.

**Expected Result:**

* Registration is rejected.
* An appropriate error message is displayed.

**Actual Result:**

**Status:** Not Executed

---

## Contact Us

### TC-07 — Submit Contact Us Form with Missing Required Information

**Priority:** Medium
**Type:** Negative

**Steps:**

1. Navigate to the Contact Us page.
2. Leave one or more required fields empty.
3. Submit the form.

**Expected Result:**

* The form is not submitted successfully.
* Appropriate validation is displayed.

**Actual Result:**

**Status:** Not Executed

---

## Products

### TC-08 — Verify Product Search Results

**Priority:** Medium
**Type:** Functional

**Steps:**

1. Navigate to the Products page.
2. Search for a valid product name.
3. Click the Search button.

**Expected Result:**

* Products related to the search term are displayed.
* The displayed products match the search criteria.

**Actual Result:**

**Status:** Not Executed

---

### TC-18 — Verify Product Details

**Priority:** Medium
**Type:** Functional

**Steps:**

1. Navigate to the Products page.
2. Select any product.
3. Click View Product.

**Expected Result:**

* The product details page is displayed.
* Product name, price, category, availability, and other relevant information are displayed correctly.

**Actual Result:**

**Status:** Not Executed

---

## Subscription

### TC-11 — Subscribe with Invalid Email

**Priority:** Medium
**Type:** Negative

**Steps:**

1. Navigate to the homepage.
2. Scroll to the Subscription section.
3. Enter an invalid email address.
4. Click the subscription button.

**Expected Result:**

* The invalid email is rejected.
* Appropriate validation or error behavior is displayed.

**Actual Result:**

**Status:** Not Executed

---

### TC-19 — Subscribe with Existing Email

**Priority:** Low
**Type:** Negative

**Steps:**

1. Navigate to the Subscription section.
2. Enter an email address that has already been subscribed.
3. Submit the subscription form.

**Expected Result:**

* The system handles the existing email appropriately.
* A suitable message is displayed.

**Actual Result:**

**Status:** Not Executed

---

## Shopping Cart

### TC-20 — Verify Cart Contents

**Priority:** High
**Type:** Functional

**Preconditions:**

* At least one product has been added to the cart.

**Steps:**

1. Open the Shopping Cart.
2. Review the products displayed.

**Expected Result:**

* Added products are displayed correctly.
* Product names, prices, quantities, and totals are displayed correctly.

**Actual Result:**

**Status:** Not Executed

---

### TC-21 — Verify Cart Product Price

**Priority:** Medium
**Type:** Functional

**Preconditions:**

* A product has been added to the cart.

**Steps:**

1. Open the Shopping Cart.
2. Compare the product price with the displayed price on the product page.

**Expected Result:**

* The product price in the cart matches the product page.

**Actual Result:**

**Status:** Not Executed

---

## Checkout & Order

### TC-23 — Place Order After Registering During Checkout

**Priority:** High
**Type:** End-to-End

**Steps:**

1. Add a product to the cart.
2. Proceed to Checkout.
3. Create a new account when prompted.
4. Complete the required account information.
5. Continue with checkout.
6. Enter payment information.
7. Place the order.

**Expected Result:**

* The order is placed successfully.
* An order confirmation message is displayed.

**Actual Result:**

**Status:** Not Executed

---

### TC-24 — Place Order as a Guest / Existing User Flow

**Priority:** High
**Type:** End-to-End

**Steps:**

1. Add a product to the cart.
2. Proceed to checkout.
3. Follow the available authentication/checkout flow.
4. Enter the required information.
5. Complete payment.
6. Place the order.

**Expected Result:**

* Checkout is completed successfully.
* The order confirmation is displayed.

**Actual Result:**

**Status:** Not Executed

---

### TC-25 — Verify Payment Information Validation

**Priority:** High
**Type:** Negative

**Steps:**

1. Add a product to the cart.
2. Proceed to Checkout.
3. Enter invalid payment information.
4. Attempt to place the order.

**Expected Result:**

* Invalid payment information is rejected.
* The order is not completed unless valid information is provided.

**Actual Result:**

**Status:** Not Executed

---

### TC-26 — Checkout with Missing Required Information

**Priority:** High
**Type:** Negative

**Steps:**

1. Add a product to the cart.
2. Proceed to Checkout.
3. Leave one or more required fields empty.
4. Attempt to continue or place the order.

**Expected Result:**

* The user cannot complete the checkout.
* Appropriate validation is displayed.

**Actual Result:**

**Status:** Not Executed
