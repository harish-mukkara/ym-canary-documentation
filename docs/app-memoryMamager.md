---
id: app.memory
title: app.memory
sidebar_label: app.memory
---

## Description

The trigger word for the models will be written in the globals. It will be something like `app.{{memoryKey}}`

---

## Trigger Words For Memory

These are the default trigger words for the memories used in canary. You can also create you own trigger word and use that as a memory in your functions

```javascript
app.paginationMemory = new MemoryManager("pagination_memory");
app.userBrowsingChoices = new MemoryManager("browsing_choices_memory");
app.userDetailsCollectionMemory = new MemoryManager(
  "user_detials_collection_memory"
);
app.subscriptionDetailsMemory = new MemoryManager(
  "subscription_details_memory"
);
app.appointmentDetailsMemory = new MemoryManager("appointment_details_memory");
app.calendarMemory = new MemoryManager("calendar_memory");
```

---

## Functions with Example

Before using memory manager you will have to create a memory for that using the below code in the globals

```javascript
app.userMemory = new MemoryManager("user_memory");
```

**1. `set()`** : `Sets the data into the memory`

You can set the data in the memory manager using the below code

```javascript
let user = {
  mobile: "948XXXX680",
  name: "Nitin",
};

await app.userMemory.set(user);
```

**2. `fetch()`** : `Get all the memory set in the memory`

```javascript
let userDetails = await app.userMemory.fetch();

userDetails = {
  mobile: "948XXXX680",
  name: "Nitin",
};
```

**3. `get()`** : `Get a specific key from the whole object that was set in the memory`

```javascript
let userMobile = await app.userMemory.get("mobile");

userMobile = "948XXXX680";
```

**3. `all()`** : `Same functionality of the fetch()`

```javascript
let userDetails = await app.userMemory.all();

userDetails = {
  mobile: "948XXXX680",
  name: "Nitin",
};
```

**4. `delete`** : `Deletes the mentioned key from the memory object`

```javascript
await app.userMemory.delete("mobile");

let userDetails = await app.userMemory.all();

userDetails = {
  name: "Nitin",
};
```

**5. `clear()`** : `Clears the entire memory ( Delets the memory )`

```javascript
await app.userMemory.clear();
```
