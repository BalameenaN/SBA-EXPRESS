# SBA-EXPRESS
- Created a E-commerce store API using **express**.
- Implemented REST APIs **CRUD** operation for different path.
- Created error-handling middleware.
- Used **body-parser** middleware to parse the values received in the request.
- Used **three** different data catagories such as **user,product,cart**
- Used **GET,POST,PATCH,DELETEE** routes for different data categories.
- Included **query parameters** for data filtering.
- Created and rendered a **view template** using **ejs**
- Used **CSS** to style the reendered views.
- Included a form within a rendered view **signup & login** page.

- Following is the documentation for different routes and their usage:
  * http://localhost:5000/ - **Home page**
  * http://localhost:5000/login  - **login page**(view rendering)
  * http://localhost:5000/signup - **Registration page**
  * http://localhost:5000/user - **user route for GET & POST**
  * http://localhost:5000/user/1 - **Retrieving used using route parameter**
  * http://localhost:5000/product - **Product route**
  * http://localhost:5000/product/1 - **Retrieving product using route parameter**
  * http://localhost:5000/product/update/1 - **Updating the price of the product for given id**
  * http://localhost:5000/cart - **getting cart information**
  * http://localhost:5000/cart/1 - **Retrieving user information using id as query parameter**
  -  http:// localhost:5000/cart/delete/3 -
  **Deleting the given id from cart**
  
