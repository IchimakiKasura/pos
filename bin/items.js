const items = [
    {
        image: "images/items/monitor.jpg",
        title: "ROG Swift OLED PG32UCDM",
        price: 74360,
        tags: "monitor asus rog oled swift gaming"
    },
    {
        image: "images/items/monitor2.jpg",
        title: "Nvision 27 Inch IPS Monitor 100Hz Framless Flat FHD Gaming Monitor Computer Pc Monitor",
        price: 5690,
        tags: "monitor 27 inch ips 100hz frameless flas gaming nvision"
    },
    {
        image: "images/items/keyboard.jpg",
        title: "Rakk Ilis Outemu Red or Blue / Huano Blue or Red PBT Keycaps Mechanical, and Ilis Type-C Gaming",
        price: 1295,
        tags: "keyboard mechanical red blue switch rakk ilis outemu type c keycaps pbt"
    },
    {
        image: "images/items/mouse.jpg",
        title: "Logitech G102",
        price: 1150,
        tags: "mouse logitech g102"
    },
    {
        image: "images/items/PC case.webp",
        title: "Corsair iCUE 7000X RGB Tempered Glass Full-Tower ATX PC Case (Black)",
        price: 16500,
        tags: "tower atx full-tower case Corsair icue rgb tempered glass"
    },
    {
        image: "images/items/PC case 2.webp",
        title: "Corsair 5000D Tempered Glass Mid-Tower ATX PC Case (Black)",
        price: 8650,
        tags: "tower atx mid-tower case Corsair 5000D tempered glass black"
    },
    {
        image: "images/items/PC case 3.jpg",
        title: "Buy LIAN LI LANCOOL 216RX Black Steel",
        price: 8650,
        tags: "tower atx mid-tower case lian li 216rx tempered glass black"
    },
    {
        image: "images/items/PC case 4.webp",
        title: "Thermaltake The Tower 300 Micro ATX Tempered Glass",
        price: 8195,
        tags: "tower atx tower case thermaltake 300 tempered glass mirco"
    },
    // {
    //     image: "images/items/bata.jpg",
    //     title: "John Aldrine Gabion",
    //     price: 69420,
    //     tags: "bata"
    // },
    {
        image: "images/items/ram.jpg",
        title: "Corsair VENGEANCE® 32GB (2x16GB) DDR5 DRAM 4800MHz C40 Memory Kit — Black",
        price: 17998,
        tags: "random access memory ram corsair vengeance 32gb 32 dram ddr5 memory"
    },
    {
        image: "images/items/psu.jpg",
        title: "NZXT C1200 Gold 1200W Gold Fully-Modular ATX 3.0 PSU",
        price: 10995,
        tags: "nzxt c1200 psu power supply full modular atx gold"
    },
    {
        image: "images/items/gpu1.jpg",
        title: "Asus Dual GeForce RTX™ 4060 OC Edition 8GB GDDR6 Graphics Card",
        price: 20595,
        tags: "gtx rtx gpu 4060 40series 8gb gddr3 graphics card asus oc edition geforce"
    },
    {
        image: "images/items/gpu2.jpg",
        title: "Gigabyte Geforce RTX™ 3060 Ti EAGLE OC 8GB (rev. 1.0)",
        price: 21950,
        tags: "gtx rtx gpu 3060 ti eagle oc 8gb gddr6 rev 1 gigabyte geforce graphics card"
    },
    {
        image: "images/items/lmao.jpg",
        title: "Potion of Immortality",
        price: 50000,
        tags: ""
    },
    {
        image: "images/items/chair.webp",
        title: "Vergil's Chair [WORKING!! 100% TESTED]",
        price: 90000000,
        tags: "dmc devly may cry vergil dante nero"
    },
    {
        image: "images/items/aio.webp",
        title: "ASUS ROG Strix LC 240 II ARGB | RGB AIO Liquid CPU Cooler 240mm Radiator",
        price: 7495,
        tags: "aio water cool radiator rgb all-in-one cooler cpu liquid asus rog strix 240mm"
    },
    {
        image: "images/items/98k.jpg",
        title: "Karabiner 98k [AMMO NOT INCLUDED]",
        price: 25500,
        tags: "kar98k german ww2 world war 2"
    },
    {
        image: "images/items/aio2.webp",
        title: "EK Water Blocks 280mm AIO Cooler D-RGB All-in-One CPU Cooler (EK-AIO 280 D-RGB)",
        price: 11500,
        tags: "aio water cool radiator rgb all-in-one cooler cpu liquid EK water blocks 280mm"
    },
    {
        image: "images/items/phone.webp",
        title: "OnePlus Ace Pro [HUTAO EDITION]",
        price: 34200,
        tags: "phone cellphone mobile oneplus ace pro hutao genshins"
    },
    {
        image: "images/items/belle.webp",
        title: "Gamer Girl Bath Water",
        price: 1500,
        tags: "belle delphine"
    },
    {
        image: "images/items/car.avif",
        title: "Tesla Model S (BASE)",
        price: 4397425,
        tags: "tesla elon musk model s car electric"
    },
    {
        image: "images/items/setup.jpg",
        title: "Computer setup | complete",
        price: 534032,
        tags: "intel celeron setup full build computer pc"
    },
    {
        image: "images/items/america.gif",
        title: "AMERICA YA",
        price: 999999999999999,
        tags: "america ya hallo"
    },
    {
        image: "images/items/nani.jpg",
        title: "[real] KIDNEY",
        price: 1000000,
        tags: "kidney real"
    },
    {
        image: "images/items/gcash.png",
        title: "gcash apk infinite money mod",
        price: 1,
        tags: "android"
    },
    {
        image: "images/items/elfu.jpg",
        title: "[real] Elf slave",
        price: 5000000,
        tags: "elf slave real"
    },
    {
        image: "images/items/dakimakura.jpg",
        title: "Fate Apocrypha Astolfo Pillow Body Case Zipper Pillow Cases 20 X 54 in (140 X 50 cm)",
        price: 980,
        tags: "Fate Apocrypha astoflo dakimakura pillow body"
    },
    {
        image: "images/items/resort.jpg",
        title: "Resort | 10k per night",
        price: 10000,
        tags: "chocolate hills resort"
    },
    {
        image: "images/items/horseconch.jpg",
        title: "horse CONCH",
        price: 5000,
        tags: "shell sea ocean"
    },
    {
        image: "images/items/doit.jpg",
        title: "He's gonna do it for you",
        price: 10,
        tags: "long dog"
    }
]