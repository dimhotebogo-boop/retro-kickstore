
create table products(
  id uuid primary key default uuid_generate_v4(),
  name text,
  price numeric
);

create table orders(
  id uuid primary key default uuid_generate_v4(),
  status text,
  created_at timestamp default now()
);
