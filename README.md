# next-styled-link
### Next.js Link component to be styled with styled-components

## The problem
When you style a link with styled component you loose the `href="…"` meaning that there is no "open in a new tap" and no SEO for indexing links.

Example:
```js
const StyledLink = styled.a`
  color: red;
  background: blue;
`

export default () => (
  <Link prefetch href={'index'}>
    <StyledLink>My styled link</StyledLink>
  </Link>
)
```
In this example above Zeit Next.js Link will not pass the `href` to the styled-component `StyledLink`.

Because in the render function of source of the `next/link` we found this:
```js
if (child.type === 'a' && !('href' in child.props)) {
```
Styled components are not `child.type = a`.

## Usage

```js
const Link = require('next-styled-link');
```
Instead of
```js
const Link = require('next/link');
```
