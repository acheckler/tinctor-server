CREATE TYPE ingredient_category AS ENUM ('cannabinoid', 'carrier', 'flavor');
CREATE TYPE packaging_category AS ENUM ('bottles', 'droppers');

CREATE TABLE IF NOT EXISTS ingredients (
    id VARCHAR(4) PRIMARY KEY,
    name Text NOT NULL,
    ppg DECIMAL NOT NULL,
    category ingredient_category
);

CREATE TABLE IF NOT EXISTS packaging (
    id VARCHAR(4) PRIMARY KEY,
    name VARCHAR NOT NULL,
    cpu DECIMAL NOT NULL,
    category packaging_category
);

CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    t_volume INTEGER NOT NULL,
    canna_id VARCHAR(4) REFERENCES ingredients(id),
    canna_concentration INTEGER NOT NULL,
    carrier_id VARCHAR(4) REFERENCES ingredients(id),
    carrier_percentage DECIMAL NOT NULL, 
    flavor_id VARCHAR(4) REFERENCES ingredients(id),
    bottle_id VARCHAR(4) REFERENCES packaging(id),
    dropper_id VARCHAR(4) REFERENCES packaging(id),
    total_cpu DECIMAL NOT NULL
);
