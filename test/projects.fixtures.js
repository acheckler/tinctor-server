function makeProjectsArray() {
    return [
        {
            id: 1,
            name: '1000mg',
            t_volume: 30,
            canna_id: 'I055',
            canna_concentration: 1000,
            carrier_id: 'I001',
            carrier_percentage: 100.00,
            flavor_id: 'I003',
            bottle_id: 'BT05',
            dropper_id: 'D01',
            total_cpu: 6.00
        },
        {
            id: 2,
            name: '2000mg',
            t_volume: 30,
            canna_id: 'I052',
            canna_concentration: 2000,
            carrier_id: 'I001',
            carrier_percentage: 100.00,
            flavor_id: 'I005',
            bottle_id: 'BT02',
            dropper_id: 'D01',
            total_cpu: 1.00
        },
    ]
    
  }
  
  module.exports = { makeProjectsArray }
