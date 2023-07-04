# Configuration

`Config` file contains critical variables for layout development.

## Breakpoints

By default, breakpoints are:

| Breakpoint        | Class infix | Dimensions |
| ----------------- | ----------- | ---------- |
| Extra small       | None        | <576px     |
| Small             | sm          | ≥576px     |
| Medium            | md          | ≥768px     |
| Large             | lg          | ≥992px     |
| Extra large       | xl          | ≥1200px    |
| Extra extra large | xxl         | ≥1400px    |

However, you can customise breakpoints as SASS variables, in the next way:

```SASS
$breakpoints: ('sm': ..., 'md': ..., 'xl': ..., 'xxl': ... )
```
