---
name: jsdoc-comments
description: Add JSDoc comments to TypeScript and JavaScript functions with proper type annotations, parameters, and return types
---

## What I do

When requested, I add comprehensive JSDoc comments to functions, components, and classes in TypeScript/JavaScript files.

## How to use me

Call me when you need to document functions. I will:
1. Analyze the function signature and parameters
2. Determine appropriate JSDoc tags based on context
3. Add a properly formatted JSDoc block above the function

## JSDoc template

```typescript
/**
 * Brief description of what the function does.
 * 
 * @param {type} paramName - Description of paramName
 * @param {type} paramName - Description of paramName
 * @returns {type} Description of return value
 * @throws {ErrorType} When this condition occurs
 */
```

## Guidelines

- Use `@param` with `{type}` and description for each parameter
- Use `@returns` or `@return` for the return value (omit if void)
- Use `@throws` for possible exceptions
- Use `@example` for usage examples when helpful
- Use `@see` for related references
- Use `{undefined}` for potentially undefined returns
- Use `{Promise<type>}` for async functions
- Keep descriptions concise but informative
- Use past tense for "What I do" summaries

## When to use me

- Before committing code that defines new functions
- When documenting API endpoints
- When creating reusable utility functions
- When adding type information for better IDE support
- When preparing code for public consumption
