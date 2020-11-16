---
id: User Model
title: User Model
sidebar_label: User Model
---

## Description

The user model will consist of all the primary actions that are taken with the user data like store, fetch, update etc..

---

## Functional Description

#### Constants

The constant variables for the functions are declared here

1. `USER_MEMORY_KEY` - This is the key where all the user details are stored after being fetched
2. `USER_PRIMARY_KEY` - This is defined in the constants and obtained in the config file. It indicates whether the primary key is `email` or `mobile`

#### Queries

The quries required for fetching the user details are declared here

#### User Options

This user options is used to convert the default keys of the user object into custom keys with the same values mapped to it

#### User Instance

The user instance is used to frame the user object after it has been returned by the query. It handles all the functions like parsing it if needed, or changing the response into a specific format for some particular fields

#### User Method

This is where the functions are declared and from where the queries are called and all sort of actions are performed

---

## Key Definitions

| Keys                      | Type             | Description                                                              | Strict Field Entried Allowed    |
| ------------------------- | ---------------- | ------------------------------------------------------------------------ | ------------------------------- |
| **`user_id`**             | string / integer | A unique key to identify the user                                        | -                               |
| **`name`**                | string           | name of the user                                                         | -                               |
| **`email`**               | string           | Email of the user                                                        | -                               |
| **`mobile`**              | string           | Mobile number of the user                                                | -                               |
| **`otp`**                 | string           | An entry whether the otp is authenticated or not for the user            | authenticated / unauthenticated |
| **`pincode`**             | string           | Pincode of the user                                                      | -                               |
| **`city`**                | string           | City of the user                                                         | -                               |
| **`region`**              | string           | Region where the user belong to ( Usually the state )                    | -                               |
| **`country`**             | string           | Country of the user                                                      | -                               |
| **`country_code`**        | string           | Country code of the user                                                 | -                               |
| **`offers`**              | array            | All the offers that are applicable to the user                           | -                               |
| **`adderss`**             | array            | Address is an array containing pincode, region, city, building, lat_long | -                               |
| **`lat_long`**            | string           | lat_long of the user                                                     | -                               |
| **`optin`**               | array            | An array of which all channels the user has opted in                     | -                               |
| **`locale`**              | string           | Default language of the user ( Only the language to be entered )         | -                               |
| **`user_type`**           | string           | User type - The designation of a user in the bot                         | -                               |
| **`user_status`**         | string           | Status of the user                                                       | Active / Inactive               |
| **`channels_interacted`** | array            | All the channels that user has interacted with                           | -                               |
| **`store_id`**            | string           | Nearest store id of the user                                             | -                               |
| **`store`**               | string           | Address of the nearest store selected                                    | -                               |
| **`last_interacted`**     | integer          | The time when the user last interacted with the bot                      | -                               |
| **`building`**            | string           | Building number of the address                                           | -                               |
| **`recent_orders`**       | array            | Last 5 order ids of the user                                             | -                               |
| **`open_cart`**           | array            | Any open cart that the user has                                          | -                               |

---

## Functions

### Functions List

---

1. getAll ( )

2. get (`primaryKey`)

3. getUserData (`data`, `primaryKey`)

4. addUser (`data`)

5. update (`data`, `primaryKey`)

---

### Parameters Description

---

| Parameters       | Type             | Description                                                              |
| ---------------- | ---------------- | ------------------------------------------------------------------------ |
| **`primaryKey`** | string / integer | The primary key of the user. Either userId (or) mobile (or) email        |
| **`data`**       | object           | An object containing the data that has to be inseted / updated / deleted |

---

### Request and Response Details

---

**1. `getAll()`** : `Fetched all the users from the db`

```
let users = await app.User.getAll();

users = [
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
  },
  {
    "user_id": "45678",
    "name": "Tony",
    "email": "tony@yellowmessenger.com",
    "mobile": "8610222522",
    "otp": "authenticated",
    "pincode": "123456",
    "city": "Vizag",
    "region": "CAP",
    "country": "India",
    "country_code": "91",
    "offers": [],
    "address": [
      {
        "pincode": "123455",
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
]
```

**2. `get(primaryKey)`** : `Fetched particular user from the db with the with that primary key`

```
let user = await app.User.get(`9487813680`);

user = {
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

**3. `getUserData(array of columns, primaryKey)`** : `Fetches only thoose particular columns which are sent as parameters from the db`

```
let user = await app.User.getUserData(["name", "email", "pincode"], "9487813680");

user = {
  "name": "Nitin",
  "email": "nitin@yellowmessenger.com",
  "mobile": "9487813680",
  "pincode": "authenticated",
}
```

**4. `addUser(data)`** : `Add the user into the database`

```
let addUser = await app.User.addUser(`complete object of the user data`);

addUser = {
  "_id": "5123dsadqweca234234",
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

**5. `update(data, primaryKey)`** : `Updates the details of the user`

```
let dataToUpdate = {
  "name": "Nithilesh",
  "pincode": "625012"
}

let updateUser = await app.User.update(dataToUpdate, `9487813680`);

updateUser = {
  "name": "Nithilesh",
  "pincode": "625012",
  "_id": "5123dsadqweca234234"
}
```
