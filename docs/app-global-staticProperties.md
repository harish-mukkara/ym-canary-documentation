---
id: app.global.staticProperties
title: app.global.staticProperties
sidebar_label: app.global.staticProperties
---

## Input Parameters

None - Input will be automatically taken from `app.source`

---

## Output Parameters

A boolean response whether the static property checked is `true` or `false`

---

## Function

```javascript
app.global.isWA = app.source == "whatsapp" ? true : false;
app.global.isYM = app.source == "yellowmessenger" ? true : false;
app.global.isGA = app.source == "googleassistant" ? true : false;
app.global.isVB = app.source == "voice" ? true : false;
```

---

## Example

#### Example 1

```javascript
app.global.isWA;
```

The above code will give the response as `true` if it is _whatsapp_ and `false` if it is any channels other than _whatsapp_

#### Example 2

```javascript
app.global.isYM;
```

The above code will give the response as `true` if it is _yellowmessenger_ and `false` if it is any channels other than _yellowmessenger_
