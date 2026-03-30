const scientists = [
    {
        name: "Albert",
        surname: "Einstein",
        born: 1879,
        dead: 1955,
        id: 1
    },
    {
        name: "Isaac",
        surname: "Newton",
        born: 1643,
        dead: 1727,
        id: 2
    },
    {
        name: "Galileo",
        surname: "Galilei",
        born: 1564,
        dead: 1642,
        id: 3
    },
    {
        name: "Marie",
        surname: "Curie",
        born: 1867,
        dead: 1934,
        id: 4
    },
    {
        name: "Johannes",
        surname: "Kepler",
        born: 1571,
        dead: 1630,
        id: 5
    },
    {
        name: "Nicolaus",
        surname: "Copernicus",
        born: 1473,
        dead: 1543,
        id: 6
    },
    {
        name: "Max",
        surname: "Planck",
        born: 1858,
        dead: 1947,
        id: 7
    },
    {
        name: "Katherine",
        surname: "Blodgett",
        born: 1898,
        dead: 1979,
        id: 8
    },
    {
        name: "Ada",
        surname: "Lovelace",
        born: 1815,
        dead: 1852,
        id: 9
    },
    {
        name: "Sarah E.",
        surname: "Goode",
        born: 1855,
        dead: 1905,
        id: 10
    },
    {
        name: "Lise",
        surname: "Meitner",
        born: 1878,
        dead: 1968,
        id: 11
    },
    {
        name: "Hanna",
        surname: "Hammarström",
        born: 1829,
        dead: 1909,
        id: 12
    }
];

const scientiestElement = document.querySelector('.scientiest__list')

const getScientists = () => scientists.map(scientist => ({ ...scientist }))

const renderScientiestList = (scientistsList) => {
    scientiestElement.innerHTML = ''
    scientistsList.forEach(scientist => {
        const scientistItem = document.createElement('li')
        scientistItem.classList.add('scientiest__item')
        scientistItem.innerHTML = `${scientist.name} ${scientist.surname} <br> ${scientist.born} - ${scientist.dead}`
        scientistItem.dataset.id = scientist.id
        scientiestElement.appendChild(scientistItem)
    })
}

renderScientiestList(getScientists())

const buttons = document.querySelectorAll('.scientiest__button')

const firstButtom = buttons[0]
firstButtom.addEventListener('click', (e) => {
    renderScientiestList(getScientists().filter(scientist => scientist.born >= 1801 && scientist.born <= 1900))
})


const secondButton = buttons[1]
secondButton.addEventListener('click', (e) => {
    const albertBirthYear = getScientists().find(scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein')
    renderScientiestList([albertBirthYear])
})


const thirdButton = buttons[2]
thirdButton.addEventListener('click', (e) => {
    const res = getScientists().sort((a, b) => `${a.name} ${a.surname}`.localeCompare(`${b.name} ${b.surname}`))
    renderScientiestList(res)
})


const fourthButton = buttons[3]
fourthButton.addEventListener('click', (e) => {
    renderScientiestList(getScientists().filter(scientist => scientist.surname[0].toUpperCase() === 'C'))
})


const fifthButton = buttons[4]
fifthButton.addEventListener('click', (e) => {
    const res = getScientists().sort((a, b) => (b.dead - b.born) - (a.dead - a.born))
    renderScientiestList(res)
})


const sixthButton = buttons[5]
sixthButton.addEventListener('click', (e) => {
    renderScientiestList(getScientists().filter(scientist => scientist.name[0] !== 'A'))
})


const seventhButton = buttons[6]
seventhButton.addEventListener('click', (e) => {
    const latestBorn = getScientists().reduce((prev, current) => {
        if (prev.born > current.born) {
            return prev
        } else {
            return current
        }
    })
    renderScientiestList([latestBorn])
})


const eighthButton = buttons[7]
eighthButton.addEventListener('click', (e) => {
    const list = getScientists()
    let longest = list[0]
    let shortest = list[0]

    list.forEach(scientist => {
        const yearsLived = scientist.dead - scientist.born
        const longestYears = longest.dead - longest.born
        const shortestYears = shortest.dead - shortest.born

        if (yearsLived > longestYears) longest = scientist
        if (yearsLived < shortestYears) shortest = scientist
    })

    renderScientiestList([longest, shortest])
})


const ninthButton = buttons[8]
ninthButton.addEventListener('click', (e) => {
    renderScientiestList(getScientists().filter(scientist => scientist.name[0].toUpperCase() === scientist.surname[0].toUpperCase()))
})  