CREATE TABLE order_info (
    id SERIAL PRIMARY KEY,
    order_id int REFERENCES orders(id),
    product_id int REFERENCES products(id),
    quantity int
);
