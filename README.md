//routing

special files
page.js
layout.js
templates.js
not-found.js
loading.js
error.js
global-error.js

file based routing
app
-about->page.js
-profile->page.js

nested routes
app
-product->page.js
-firstproduct->page.js

dynamic route
app
-product->page.js -[productId]->page.js

[...slug] catch all segment
app
- docs -[...slug]->page.js

(slug) routing groups
app
-(auth)
-login->page.js
-register->page.js

if any folder in app.js not have page.js or in page.js not have a default export component until that that route will not work

Private folder (do not serve in route)
_ add _ defore the folder name
app -[_lib]

use %5F if you want \_ in your route
app -[%5Flib]->page.js

Layout
layout is the ui that is shared with the multipe pages in the app

if we want diff layout for diff layout we can implement using routing group
ensure you sholud remove the layout.js and page.js from app folder (root files) and move
them into any one route group that you want
(auth)
-login->page.js
-register->page.js
-layout.js->authlayout
(marketing)
-revenue->page.js
-customer->page.js
-layout.js->marketinglayout

templates in nextjs
Templates in Next.js are similar to layouts, but unlike layouts they re-render when their children change.
Layouts are persistent and do not re-render during navigation between pages inside the same layout.

Templates are useful when you want shared UI (like a header or wrapper) but need it to reset or re-render on each navigation.

For example, if you want to show a user profile in the header on the homepage, but not on the login or register pages, you can use templates to control this behavior.



