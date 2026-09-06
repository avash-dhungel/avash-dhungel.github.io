---
title: Limits, Continuity & Differentiability
order: 1
tags: [mathematics, calculus]
---

# Limits, Continuity & Differentiability

## Limits — the idea

The limit of a function `lim(f(x)) as x → a` is the value f(x) *approaches* as x gets arbitrarily close to a (from both sides). It may exist even when f(a) is undefined.

Useful algebra:

```
lim (sin x / x) = 1  as x → 0
lim ((1 + x)^(1/x)) = e  as x → 0
```

## Continuity

f is continuous at a when all three hold:

1. f(a) is defined
2. lim f(x) as x→a exists
3. lim f(x) as x→a = f(a)

A discontinuity is jump, infinite, or removable.

## Differentiability

f is differentiable at a when the derivative exists there:

```
f'(a) = lim [f(a+h) − f(a)] / h  as h → 0
```

**Differentiability implies continuity, but not vice versa.** Classic counterexample: f(x) = |x| at x = 0 — continuous, not differentiable (a corner).

## How they're examined

- Find whether a function is continuous at a point (check the three requirements).
- Show a function is differentiable and find the derivative (two-sided limit of the difference quotient).
- Justify where continuity fails — essential discontinuities, asymptotes, etc.

> Standard IOE pattern: a piecewise function is given; you check continuity by matching left/right limits to f(a), then differentiability by matching left/right derivatives.