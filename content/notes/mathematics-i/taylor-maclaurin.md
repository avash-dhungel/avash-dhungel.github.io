---
title: Taylor & Maclaurin Series
order: 2
tags: [mathematics, calculus, series]
---

# Taylor & Maclaurin Series

## The expansions

Maclaurin series (about x = 0):

```
f(x) = f(0) + f'(0)x/1! + f''(0)x²/2! + f'''(0)x³/3! + …
```

Taylor series (about x = a):

```
f(x) = f(a) + f'(a)(x−a)/1! + f''(a)(x−a)²/2! + …
```

## Standard Maclaurin results to know cold

| Function | Series |
| --- | --- |
| eˣ | 1 + x + x²/2! + x³/3! + … |
| sin x | x − x³/3! + x⁵/5! − x⁷/7! + … |
| cos x | 1 − x²/2! + x⁴/4! − … |
| ln(1+x) | x − x²/2 + x³/3 − … |
| (1+x)ⁿ | 1 + nx + n(n−1)x²/2! + … |

## Worked: expand tan x up to x⁵

Use sin/cos series and long division:

```
tan x = x + x³/3 + 2x⁵/15 + …
```

Method: write sin x and cos x series, divide term-by-term, keep powers ≤ x⁵.

## When to use which

- **Maclaurin** when expanding about zero (most IOE questions).
- **Taylor** when expanding about a ≠ 0.
- Substitution trick: expand e^(−x²) by replacing x with −x² in the eˣ series — much faster than differentiating.

> Half the marks in this chapter are won by recognizing a standard series and substituting. The rest by carrying enough terms to match the asked power.