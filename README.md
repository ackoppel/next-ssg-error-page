This is an example repository of SSG vs Dynamic page runtime error handling.

`/bar/[id]/page.tsx` -> Dynamic

`/foo/[id]/page.tsx` -> SSG


Issue:

`error.tsx` is resolved only for dynamic page error if running the `production` build. 
