---
category: HTML
---

# CSP 非官方指南

# 1. 介绍

内容安全策略（Content Security Policy，CSP）是一种用于增强网页安全性的机制，主要在前端应用中使用。

有两个作用：

1. 防止跨站脚本攻击（XSS）：
   - 通过限制可以加载和执行的资源来源，CSP 可以有效地减少恶意脚本注入的风险。例如，限制只允许从特定的域名加载脚本，防止攻击者通过注入恶意脚本从不可信的来源加载代码。
2. 防止数据注入攻击：
   - 可以限制网页能够加载的外部资源，如图片、样式表、脚本等，确保这些资源来自可信任的来源，从而防止攻击者通过注入恶意资源来获取用户数据或执行恶意操作。

# 2. 原理

指定浏览器仅渲染或执行来自白名单中的资源。即便是被恶意注入了脚本，因为脚本并不在白名单中，因此不会执行。 🌝

通过 HTTP 响应头或 `<meta>` 标签来设置 CSP 策略。例如，在服务器响应中添加以下 HTTP 头：

语法规则如下 ：

```html
Content-Security-Policy: <policy-directive>; <policy-directive>
```

举例，限制 img 标签的 src 只能使用同源的：

```js
Content-Security-Policy: img-src 'self'
```

那么如果服务器返回一个html，且响应头中包含了上面的内容，并且hmtl中有一个img标签，src指向的是其他网站，那么根据同源策略，这个图片不会被显示出来，但是当我们设置响应头

```js
res.set('Content-Security-Policy', img-src http://httpbin.org")
```

此时图片就会被加载出来。

