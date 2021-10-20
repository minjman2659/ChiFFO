SELECT cart_id
FROM cart_products
where name = 'Yogurt' and cart_id IN (
    SELECT cart_id
    FROM cart_products
    where name = 'Milk'
)
ORDER BY cart_id;