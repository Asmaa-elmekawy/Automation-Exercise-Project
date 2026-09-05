# Automation Test Cases

> UI test cases selected for automation using Playwright and TypeScript.

## TC-01 — Register User

**Priority:** High
**Type:** Functional / UI

**Steps:**

1. Navigate to the Automation Exercise website.
2. Click Signup / Login.
3. Enter a new user's name and email.
4. Click Signup.
5. Enter the required account information.
6. Submit the registration form.

**Expected Result:**

* The account is created successfully.
* The user is logged in.
* The account name is displayed in the navigation bar.

---

## TC-02 — Login User with Correct Credentials

**Priority:** High
**Type:** Functional / UI

**Preconditions:**

* A registered user account exists.

**Steps:**

1. Navigate to the Login page.
2. Enter valid email and password.
3. Click Login.

**Expected Result:**

* The user is logged in successfully.
* The account name is displayed.

---

## TC-06 — Contact Us Form

**Priority:** Medium
**Type:** Functional / UI

**Steps:**

1. Navigate to the Contact Us page.
2. Enter the required contact information.
3. Enter a message.
4. Submit the form.
5. Handle the confirmation dialog if displayed.

**Expected Result:**

* The Contact Us form is submitted successfully.
* A success confirmation message is displayed.

---

## TC-09 — Search Product

**Priority:** High
**Type:** Functional / UI

**Steps:**

1. Navigate to the Products page.
2. Enter a valid product name in the search field.
3. Click Search.

**Expected Result:**

* The searched products are displayed.
* The results are relevant to the search term.

---

## TC-10 — Subscription

**Priority:** Medium
**Type:** Functional / UI

**Steps:**

1. Navigate to the homepage.
2. Scroll to the Subscription section.
3. Enter a valid email address.
4. Click the subscription button.

**Expected Result:**

* The subscription is completed successfully.
* A success message is displayed.

---

## TC-12 — Add Products to Cart

**Priority:** High
**Type:** Functional / UI

**Steps:**

1. Navigate to the Products page.
2. Add a product to the cart.
3. Continue shopping.
4. Add another product to the cart.
5. Open the cart.

**Expected Result:**

* Both products are added successfully.
* Both products are displayed in the cart.

---

## TC-13 — Verify Product Quantity in Cart

**Priority:** High
**Type:** Functional / UI

**Steps:**

1. Open a product details page.
2. Change the product quantity to a specific value.
3. Add the product to the cart.
4. Open the cart.

**Expected Result:**

* The product is displayed in the cart.
* The quantity matches the value selected before adding the product.

---

## TC-16 — Place Order After Login

**Priority:** Critical
**Type:** End-to-End / UI

**Preconditions:**

* A registered user account exists.

**Steps:**

1. Log in using valid credentials.
2. Add a product to the cart.
3. Open the cart.
4. Proceed to Checkout.
5. Verify the checkout information.
6. Enter payment information.
7. Place the order.

**Expected Result:**

* The order is placed successfully.
* An order confirmation message is displayed.

---

## TC-17 — Remove Products From Cart

**Priority:** High
**Type:** Functional / UI

**Preconditions:**

* At least one product exists in the cart.

**Steps:**

1. Open the Shopping Cart.
2. Click the Remove button for a product.

**Expected Result:**

* The selected product is removed from the cart.
* The product no longer appears in the cart.

---

## TC-22 — Add Recommended Product to Cart

**Priority:** Medium
**Type:** Functional / UI

**Steps:**

1. Navigate to the homepage.
2. Scroll to the Recommended Items section.
3. Click Add to Cart for a recommended product.
4. Open the cart.

**Expected Result:**

* The recommended product is added successfully.
* The product is displayed in the cart.
