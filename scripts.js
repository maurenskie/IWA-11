const STATUS_MAP = {
    order1: {
        biscuits: 10,
        donuts: 13,
        pancakes: 0,
        delivered: false,
    },
    order2: {
        biscuits: 5,
        donuts: 0,
        pancakes: 2,
        delivered: false,
    },
    order3: {
        biscuits: 12,
        donuts: 11,
        pancakes: 15,
        delivered: true,
    },
};

function updateCounts() {
    const orders = document.querySelectorAll('dl');

    for (const order of orders) {
        const key = order.dataset.key;
        const biscuits = STATUS_MAP[key].biscuits;
        const donuts = STATUS_MAP[key].donuts;
        const pancakes = STATUS_MAP[key].pancakes;

        const biscuitsCount = document.querySelector(`#${key} .biscuits .count`);
        biscuitsCount.textContent = biscuits;

        const donutsCount = document.querySelector(`#${key} .donuts .count`);
        donutsCount.textContent = donuts;

        const pancakesCount = document.querySelector(`#${key} .pancakes .count`);
        pancakesCount.textContent = pancakes;

        const status = order.querySelector('.status .count');
        status.textContent = STATUS_MAP[key].delivered ? 'Delivered' : 'Pending';
    }
}

updateCounts();
