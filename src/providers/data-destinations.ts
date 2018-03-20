let destinations: Array<any> = [
    {
        id: 1,
        city: "Dubai",
        country: "United Arab Emirates",
        price: "$3500.00",
        title: "Burj Al Arab",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel13_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 3,
        agent: {
            id: 1,
            name: "Caroline Herrera",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_01.jpg"
        }
    },
    {
        id: 2,
        city: "Santorini",
        country: "Greece",
        price: "$2500.00",
        title: "Charisma Suites",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel14_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel14_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 4,
        agent: {
            id: 1,
            name: "Caroline Herrera",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_01.jpg"
        }
    },
    {
        id: 3,
        city: "Constance",
        country: "Italy",
        price: "$2300.00",
        title: "Constance Belle",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel15_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel15_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 6,
        agent: {
            id: 2,
            name: "Michael Phelp",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_02.jpg"
        }
    },
    {
        id: 4,
        city: "Island",
        country: "Maldivas",
        price: "$4500.00",
        title: "Reethi Rah",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel16_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel16_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 5,
        agent: {
            id: 3,
            name: "Jonathan Heinz",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_04.jpg"
        }
    },
    {
        id: 5,
        city: "Udaipur",
        country: "India",
        price: "$3500.00",
        title: "Taj Lake Palace",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel17_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel17_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 10,
        agent: {
            id: 4,
            name: "Isabel Wu",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_03.jpg"
        }
    },
    {
        id: 6,
        city: "Santorini",
        country: "Greece",
        price: "$2500.00",
        title: "Charisma Suites",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel18_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel18_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 4,
        agent: {
            id: 5,
            name: "Olivia Newton",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_05.jpg"
        }
    },
    {
        id: 7,
        city: "Riviera Maya",
        country: "Mexico",
        price: "$2000.00",
        title: "Azul Beach Resort",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel19_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel19_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 7,
        agent: {
            id: 6,
            name: "Miriam Kenneth",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_07.jpg"
        }
    },
    {
        id: 8,
        city: "Cayo Alto",
        country: "Aruba",
        price: "$2000.00",
        title: "The Meridian Club",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel20_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel20_picture.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 5,
        agent: {
            id: 7,
            name: "Michelle Lambert",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_08.jpg"
        }
    },
    {
        id: 9,
        city: "Santorini",
        country: "Greece",
        price: "$2600.00",
        title: "Seaport District Retreat",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel09_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel09_thumbnail.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 3,
        agent: {
            id: 2,
            name: "Michael Phelp",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_02.jpg"
        }
    },
    {
        id: 10,
        city: "Briens",
        country: "Switzerland",
        price: "$3000.00",
        title: "City Living",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel10_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel10_thumbnail.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 5,
        agent: {
            id: 1,
            name: "Caroline Herrera",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_01.jpg"
        }
    },
    {
        id: 11,
        city: "Island",
        country: "Thailand",
        price: "$3600.00",
        title: "James Bond Island",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel11_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel11_thumbnail.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 3,
        agent: {
            id: 4,
            name: "Isabel Wu",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_03.jpg"
        }
    },
    {
        id: 12,
        city: "Phi Phi Island",
        country: "Thailand",
        price: "$3500.00",
        title: "Contemporary Beach",
        picture: "http://johnnyflores.net/wp-content/uploads/2018/03/travel12_picture.jpg",
        thumbnail: "http://johnnyflores.net/wp-content/uploads/2018/03/travel12_thumbnail.jpg",
        type: "All Inclusive",
        date:"12 mars 2018",
        duration: 4,
        agent: {
            id: 5,
            name: "Olivia Newton",
            title: "Agent",
            picture: "http://johnnyflores.net/wp-content/uploads/2018/03/agent_05.jpg"
        }
    }
];

export default destinations;
