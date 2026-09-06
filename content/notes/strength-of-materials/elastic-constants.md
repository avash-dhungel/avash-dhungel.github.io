---
title: Elastic Constants — E, G and K
order: 2
tags: [strength-of-materials, elastic-constants]
---

# Elastic Constants

## The three constants

| Constant | Symbol | Physical meaning | Units |
| --- | --- | --- | --- |
| Young's modulus | E | Stress / axial strain (stiffness) | N/mm² |
| Shear modulus | G | Shear stress / shear strain | N/mm² |
| Bulk modulus | K | Hydrostatic stress / volumetric strain | N/mm² |

All three measure elasticity — each in a different loading mode.

## Poisson's ratio

When you pull a bar axially it also thins laterally. Poisson's ratio connects them:

```
μ = − (lateral strain) / (axial strain)
```

Typical values are small (steel ~ 0.3, concrete ~ 0.15–0.2). Beyond ∼ 0.5 a solid is physically implausible.

## The relation between E, G and K

```
E = 2G (1 + μ)      — connects tensile & shear behaviour
E = 3K (1 − 2μ)     — connects tensile & volumetric behaviour
```

Combining them:

```
9 G K
E = ─────    and     a check:  E = G · 3 / (G/(3K)) ... use the first two.
3K + G
```

Practical use: given any two of E, G, K and μ, solve for the rest. Same goes for converting between shear-only and axial-only analyses.

## Worked shortcut

For steel with E = 200 GPa and μ = 0.3:

- G = E / [2(1 + μ)] = 200 / (2 × 1.3) ≈ 76.9 GPa
- K = E / [3(1 − 2μ)] = 200 / (3 × 0.4) ≈ 166.7 GPa

> Exam favourite: *"Derive the relation between E, G and K."* Write Poisson's ratio into σ = Eε under combined loading, then eliminate strain terms. Practise the derivation once and it never leaves you.