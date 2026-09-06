---
title: Simple Harmonic Motion & Oscillations
order: 1
tags: [physics, oscillations]
---

# Simple Harmonic Motion & Oscillations

## The defining equation

Simple harmonic motion (SHM) occurs when the restoring force is proportional to displacement and directed toward equilibrium:

```
F = −kx,    a = −ω²x
```

Solution:

```
x(t) = A cos(ωt + φ)
```

- A = amplitude
- ω = angular frequency
- φ = phase constant
- T = 2π/ω = period
- f = 1/T = frequency

## Energy in SHM

Total energy is constant and shared between kinetic and potential:

```
E = ½ k A²            (at all times)
K = ½ m v²,   U = ½ k x²
```

At extremes: energy is all potential. At equilibrium: all kinetic.

## Damped oscillations

A resistance term proportional to velocity (damping, damping coefficient b) modifies the equation:

```
m x'' + b x' + k x = 0
```

Three regimes:

| Condition | Behaviour |
| --- | --- |
| b² < 4mk | Underdamped — decays with slow exponential fall |
| b² = 4mk | Critically damped — fastest return without oscillation |
| b² > 4mk | Overdamped — slow, no oscillation |

## Examples engineers meet

- Vibrating machinery — target **critical damping**
- Suspension springs — aim **underdamped but close to critical**
- Earthquake dampers in tall buildings — deliberately tuned damping
- Atomic vibration in solids — SHM is the foundation of temperature (lattice vibrations)

> Remember the amplitude decay: x(t) = A₀ e^(−bt/2m) cos(ωt + φ) — the exponential decides how quickly energy is drained from the system.