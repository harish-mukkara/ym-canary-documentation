---
id: app.log
title: app.log
sidebar_label: app.log
---

## Input Parameters

| Params           | Type   | Description                 |
| ---------------- | ------ | --------------------------- |
| **`log`**        | any    | The values to be logged     |
| **`identifier`** | string | Identifier of the log value |

---

## Output Parameters

You will receive the log along with the intent slug and step slug

---

## Function

```javascript
let _log = app.log;
app.log = function (a, b) {
  let intent = app._.get(app, "context.intent", "");
  let step = app._.get(app, "context.paramExpected", "");
  let logprefix = `\nlog at Intent::${intent} - ${
    step ? "Step::" + step + "\n" : "\n"
  }`;
  if (!intent) {
    return _log(a, b);
  }
  if (!b) {
    return _log(a, logprefix);
  }
  /**converting to string to avoid any "type" errors  */
  b = String(b);
  return _log(a, `${logprefix}${b}`);
};
```

---

## Example

```javascript
app.log(options, "Options ");
```

The above code will be logged as below along with the step and intent slugs

![](https://cdn.yellowmessenger.com/8Rq89akJcFIO1605546408870.png)
