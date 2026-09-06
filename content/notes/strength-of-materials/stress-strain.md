---
title: Stress, Strain & Hooke's Law
order: 1
tags: [strength-of-materials, mechanics]
---

# Stress, Strain & Hooke's Law

## Definitions

- **Stress** is the internal resistance per unit area to an applied load:

  σ = P / A

  Units: N/mm², MPa, Pa.

- **Strain** is deformation per unit length, a dimensionless ratio:

  ε = ΔL / L

- **Hooke's law**: within the elastic limit, stress is proportional to strain.

  σ = E·ε  →  E is the modulus of elasticity (Young's modulus)

## The stress–strain curve (ductile material)

1. Proportional limit — linear region, Hooke's law holds.
2. Elastic limit — still recoverable; beyond it lies permanent deformation.
3. Yield point — large strain without increase in stress.
4. Ultimate strength — maximum stress the material carries.
5. Fracture — the material breaks (below ultimate for ductile materials).

## Axial deformation of a bar

For a uniform bar under axial load P, length L, area A, modulus E:

```
δ = (P · L) / (A · E)
```

Compound / composite bars (two materials) share the load so their **deformations are equal**, which lets you solve for the load distribution:

```
δ1 = δ2  →  (P1 · L1) / (A1 · E1) = (P2 · L2) / (A2 · E2)
```

> Formula-hunting is a trap: practically every SOM question reduces to δ = PL/AE plus one equilibrium equation.