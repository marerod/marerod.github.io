const tabsFunk = () => {
    const tabs = document.querySelectorAll('.card-detail__change')

    const tabsTitle = document.querySelector('.card-details__title')

    const tabsPrice = document.querySelector('.card-details__price')

    const tabsImage = document.querySelector('.card__image_item')

    const tabsOptions = [
        {
            name: "Graphite",
            memory: '128',
            price: 50000,
            Image: 'img/iPhone-graphite.webp'
        },
        {
            name: "Silver",
            memory: '256',
            price: 60000,
            Image: 'img/iPhone-silver.webp'
        },
        {
            name: "Sierra Blue",
            memory: '512',
            price: 70000,
            Image: 'img/iPhone-sierra_blue.webp'
        }
    ]

    const changeContent = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsOptions[index].memory} GB ${tabsOptions[index].name}`
        tabsPrice.textContent = ` ${tabsOptions[index].price}₽`

        tabsImage.setAttribute('src', tabsOptions[index].Image)
    }

    const ChangeActiveTabs = (indexClickedTab) => {
        tabs.forEach((tab, index) => {
            tab.classList.remove('active')

            if (index === indexClickedTab) {
                tab.classList.add('active')
            }
            changeContent(indexClickedTab)
        })
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            ChangeActiveTabs(index)
        })
    })

    changeContent(0)
}
tabsFunk()