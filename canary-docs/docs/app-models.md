---
id: app.models
title: app.models
sidebar_label: app.models
---

## Description

The trigger word for the models will be written in the globals. It will be something like `app.{{modelName}}`

---

## Trigger Words For Models

```javascript
app.product == Product Model
app.User == User Model
app.LoggedInUser == Loggedin User Model
app.appointment == Appointments Model
app.appointmentServices == Appointment Services Model
app.therapist == Therapist Model ( Related to Appointment )
app.calendar == Calendar Model ( YM Calendar )
app.store == Store Model
app.cart == Cart Model
app.subscription = Product Subscription Model
app.coupon == Coupon Model
```

---

## Example

**Usage** : Below is a example of how to use this trigger word of models in functions

**Scenario** : Consider a scenerio in which you want the details of the user and you have the mobile number of the user in hand

```javascript
let mobile = "9487XXXX80";
let userDetails = await app.User.get(mobile);
```

**Output** : The complete object of the user as below

```javascript
{
  "user_id": "12345",
  "name": "Nitin",
  "email": "nitin@yellowmessenger.com",
  "mobile": "9487813680",
  "otp": "authenticated",
  "pincode": "authenticated",
  "city": "Vizag",
  "region": "CAP",
  "country": "India",
  "country_code": "91",
  "offers": [],
  "address": [
    {
      "pincode": "530013",
      "region": "CAP",
      "city": "Vizag",
      "building": "1, road vizag",
      "lat_long": "17.7415669,83.3121281"
    }
  ],
  "lat_long": "17.7415669,83.3121281",
  "optin": [],
  "locale": "en",
  "user_type": "Normal",
  "user_status": "Active",
  "channels_interacted": [
    "yellowmessenger",
    "whatsapp"
  ],
  "store_id": "X007",
  "store": "Maharani Peta Daily, MAHARANI PETA- DAILY KRISHNA NAGAR,VISAKHAPATNAM",
  "last_interacted": 0,
  "building": "1, road vizag  ",
  "recent_orders": [],
  "open_cart": [],
}
```
