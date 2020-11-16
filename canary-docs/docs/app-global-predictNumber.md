---
id: app.global.predictNumber
title: app.global.predictNumber
sidebar_label: app.global.predictNumber
---

## Input Parameters

None - The input will be automatically taken from prediction since the bot will predict with the `app.data.message`

---

## Output Parameters

Returns the number if any number is predicted from `app.data.message`

---

## Function

```
app.global.predictNumber = (returnDefault = undefined) => {
  let number = app._.get(app, "prediction.numbers[0].value", returnDefault);
  if (!isNaN(number)) {
    number = Math.abs(number);
  }
  return number;
};
```

---

## Example

**Input** : The user types `Please add seven quantities`

**Usage** : Below is a example of how to pass params and get the returned valuen from the function

```
let predictNumber = await app.global.predictNumber(app.data.message);
```

**Output** : Now you will get `7` as the value in predictNumber variable in your normal function
