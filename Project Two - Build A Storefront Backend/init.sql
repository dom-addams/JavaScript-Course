CREATE USER store_test WITH PASSWORD 'password';
CREATE DATABASE storefront_test;
ALTER DATABASE storefront_test OWNER TO store_test;
GRANT ALL PRIVILEGES ON DATABASE storefront_test TO store_test;
