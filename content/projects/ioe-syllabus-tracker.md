---
title: IOE Syllabus & Exam Tracker
status: ongoing
year: 2026
tech: [React, Vite, Tailwind]
tags: [study-tool, syllabus]
excerpt: A syllabus-to-checklist tracker that pairs each IOE unit with its past questions and tracks exam-readiness per subject.
links:
  github: https://github.com/avashdhungel
  live: https://avashdhungel.com.np
---

A lightweight tool that maps the IOE (Pulchowk) syllabus into a checklist, pairs each unit with past questions, and tracks exam-readiness per subject as the semester runs.

## Why I built it

Syllabus PDFs are dense and easy to lose. I wanted a single place where "have I covered Unit 3 of Geology?" is answerable in two seconds — and where previous-year questions are attached to the unit they came from.

## What it does

- Subject syllabus broken into units and sub-topics
- Per-unit past-question backlog
- Status tracking: not-started / in-progress / revision
- Progress estimate for the whole subject

## Lessons so far

- Data modelling matters more than the UI — the syllabus structure drove every design decision.
- Just-in-time beats just-in-case: I only entered the units I needed this week, and the tool grew with me.

## Stack

React + Vite + Tailwind. Static data in JSON, so it deploys anywhere for free.

## Next steps

Persist progress locally (localStorage) and add a mobile-friendly "quick update" flow for after classes.