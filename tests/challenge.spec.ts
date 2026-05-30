import { test, expect } from '@playwright/test';

test.describe('SauceDemo Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('CP01 - Login Exitoso', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page).toHaveURL(/.*inventory.html/);
  });

  // Este caso fallará intencionalmente segun consigna
  test('CP02 - Login Fallido (Falla Intencional)', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    // El mensaje real es "locked out" pero esperamos uno distinto para forzar el fallo
    await expect(page.locator('[data-test="error"]')).toHaveText('Error: Credenciales invalidas');
  });

  test('CP03 - Agregar producto y verificar contador', async ({ page }) => {
    // Precondición: Estar logueado
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });

  test('CP04 - Verificación de producto en el carrito', async ({ page }) => {
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('.shopping_cart_link').click();
    
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack');
  });
});

test.describe('Mercado Libre API Tests', () => {
  // Uso del request context para interactuar con servicios web 
  test('API - Verificar departamentos de Mercado Libre', async ({ request }) => {
    const response = await request.get('https://www.mercadolibre.com.ar/menu/departments'); // [cite: 9]
    expect(response.status()).toBe(200);
    
    const responseBody = await response.json();
    // Verifica que contenga la propiedad "departments" y que tenga elementos 
    expect(responseBody.departments).toBeDefined();
    expect(responseBody.departments.length).toBeGreaterThan(0);
  });
});