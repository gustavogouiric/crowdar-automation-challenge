Funcionalidad: Inicio de Sesión

CP01 - Login Exitoso: Ingresar credenciales válidas (standard_user / secret_sauce), hacer clic en login y verificar que el usuario es redirigido a la página de inventario.

CP02 - Login Fallido (Error Intencional para el punto 4): Ingresar credenciales inválidas (locked_out_user / secret_sauce), hacer clic en login y verificar que se muestra el mensaje de error "Epic sadface: Sorry, this user has been locked out.". (Haremos que este falle en la automatización esperando un mensaje distinto).

Funcionalidad: Agregado de productos al carrito
3.  CP03 - Agregar producto desde inventario: Desde la pantalla de productos, hacer clic en "Add to cart" en cualquier ítem y verificar que el contador del ícono del carrito cambie a "1".
4.  CP04 - Verificación de producto en el carrito: Tras agregar un producto, hacer clic en el ícono del carrito y verificar que el nombre y precio del producto coinciden con el seleccionado previamente.