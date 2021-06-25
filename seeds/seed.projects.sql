-- INSERT INTO cannabinoids (id, name, ppg)
-- VALUES
-- ('I053', 'Crude CBD Extract',0.64),
-- ('I055','Broad Spectrum CBD Distillate', 2.27),
-- ('I052', 'CBD Isolate', 0.56),
-- ('I084', 'CBG Isolate', 2.04),
-- ('I085', 'CBN Isolate', 9.18),
-- ('I086', 'CBC Isolate', 15.31),
-- ('I087', 'CBD Distillate', 0.75);

-- INSERT INTO carriers (id, name, ppg)
-- VALUES
-- ('I001', 'Organic MCT Oil', 0.011),
-- ('I004', 'Organic Hemp Seed Oil', 0.011);

-- INSERT INTO flavors (id, name, ppg)
-- VALUES
-- ('I002', 'Organic Orange Oil', 0.029),
-- ('I003', 'Organic Lemon Oil', 0.100),
-- ('I005', 'Organic Black Seed Oil', 0.026),
-- ('I006', 'Organic Peppermint Oil', 0.173);

-- INSERT INTO bottles (id, name, cpu)
-- VALUES
-- ('BT01', '30mL Amber Boston Round', 0.09),
-- ('BT02', '30mL Frosted Amber Boston Round', 0.24),
-- ('BT03', '60mL Amber Boston Round', 0.12),
-- ('BT05', '30mL Frosted Rectangle', 0.31),
-- ('BT06', '10mL Amber Boston Round', 0.09),
-- ('BT07', '5mL BATCH Sample', 0.09);

-- INSERT INTO droppers (id, name, cpu)
-- VALUES
-- ('D01', '30mL Graduated', 0.48),
-- ('D02', '60mL Graduated', 0.16),
-- ('D03', '30mL Graduated TE', 0.38),
-- ('D04', '10mL Graduated TE', 0.33),
-- ('D05', '5mL BATCH Sample', 0.12),
-- ('D06', '30mL Graduated CR', 0.21);

INSERT INTO ingredients (id, name, ppg, category)
VALUES
('I053', 'Crude CBD Extract',0.64, 'cannabinoid'),
('I055','Broad Spectrum CBD Distillate', 2.27, 'cannabinoid'),
('I052', 'CBD Isolate', 0.56, 'cannabinoid'),
('I084', 'CBG Isolate', 2.04, 'cannabinoid'),
('I085', 'CBN Isolate', 9.18, 'cannabinoid'),
('I086', 'CBC Isolate', 15.31, 'cannabinoid'),
('I087', 'CBD Distillate', 0.75, 'cannabinoid'),
('I001', 'Organic MCT Oil', 0.011, 'carrier'),
('I004', 'Organic Hemp Seed Oil', 0.011, 'carrier'),
('I002', 'Organic Orange Oil', 0.029, 'flavor'),
('I003', 'Organic Lemon Oil', 0.100, 'flavor'),
('I005', 'Organic Black Seed Oil', 0.026, 'flavor'),
('I006', 'Organic Peppermint Oil', 0.173, 'flavor');

INSERT INTO packaging (id, name, cpu, category)
VALUES
('BT01', '30mL Amber Boston Round', 0.09, 'bottle'),
('BT02', '30mL Frosted Amber Boston Round', 0.24, 'bottle'),
('BT03', '60mL Amber Boston Round', 0.12, 'bottle'),
('BT05', '30mL Frosted Rectangle', 0.31, 'bottle'),
('BT06', '10mL Amber Boston Round', 0.09, 'bottle'),
('BT07', '5mL BATCH Sample', 0.09, 'bottle'),
('D01', '30mL Graduated', 0.48, 'dropper'),
('D02', '60mL Graduated', 0.16, 'dropper'),
('D03', '30mL Graduated TE', 0.38, 'dropper'),
('D04', '10mL Graduated TE', 0.33, 'dropper'),
('D05', '5mL BATCH Sample', 0.12, 'dropper'),
('D06', '30mL Graduated CR', 0.21, 'dropper');

INSERT INTO projects (id, name, t_volume, canna_id, canna_concentration, carrier_id, carrier_percentage, flavor_id, bottle_id, dropper_id, total_cpu)
VALUES
(1, 'Clarity 1000mg', 30, 'I055', 1000, 'I001', 100.00, 'I003', 'BT05', 'D01', 6.39);

