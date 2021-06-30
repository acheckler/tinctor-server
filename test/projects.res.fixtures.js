function makeProjectsResArray() {
    return [
        {
            id: 1,
            name: '1000mg',
            tincVolume: 30,
            cannaId: 'I055',
            cannaConcentration: 1000,
            carrierId: 'I001',
            carrierConcentration: "100",
            flavorId: 'I003',
            bottleId: 'BT05',
            dropperId: 'D01',
            totalCPU: 6.00
        },
        {
            id: 2,
            name: '2000mg',
            tincVolume: 30,
            cannaId: 'I052',
            cannaConcentration: 2000,
            carrierId: 'I001',
            carrierConcentration: "100",
            flavorId: 'I005',
            bottleId: 'BT02',
            dropperId: 'D01',
            totalCPU: 1.00
        },
    ]
}

module.exports = {makeProjectsResArray}