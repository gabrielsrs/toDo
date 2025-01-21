export const columns = [
    {id: "todo", title: "To do"},
    {id: "inProgress", title: "In progress"},
    {id: "done", title: "Done"}
]

export function cardData() {
    const data = [
        {   
            id: 0,
            title: "Design new ui presentation",
            description: "Dribbble marketing",
            totalQuests: 10,
            tasksComplete: 7,
            progressStatusColor: "customYellowProgress",
            messages: 7,
            attachment: 2,
            usersCont: 0,
            date: "24 Aug 2022",
            status: "todo"
        },
        {
            id: 1,
            title: "Add more ui/ux mockups",
            description: "Pinterest promotion",
            totalQuests: 10,
            tasksComplete: 4,
            progressStatusColor: "customYellowProgress",
            messages: 0,
            attachment: 0,
            usersCont: 2,
            date: "24 Aug 2022",
            status: "todo"
        },
        {
            id: 2,
            title: "Design few mobile screens",
            description: "Dropbox mobile app",
            totalQuests: 10,
            tasksComplete: 3,
            progressStatusColor: "customRedProgress",
            messages: 6,
            attachment: 4,
            usersCont: 0,
            date: "24 Aug 2022",
            status: "todo"
        },
        {
            id: 3,
            title: "Create a tweet and promote",
            description: "Twitter marketing",
            totalQuests: 14,
            tasksComplete: 2,
            progressStatusColor: "customRedProgress",
            progressCustomBar: 20,
            messages: 0,
            attachment: 0,
            usersCont: 2,
            date: "24 Aug 2022",
            status: "todo"
        },
        {
            id: 4,
            title: "Design system update",
            description: "Oreo website project",
            totalQuests: 10,
            tasksComplete: 3,
            progressStatusColor: "customYellowProgress",
            messages: 0,
            attachment: 0,
            usersCont: 2,
            date: "12 Nov 2022",
            status: "inProgress"
        },
        {
            id: 5,
            title: "Create brand guideline",
            description: "Oreo branding project",
            totalQuests: 10,
            tasksComplete: 7,
            progressStatusColor: "customYellowProgress",
            messages: 2,
            attachment: 13,
            usersCont: 0,
            date: "13 Nov 2022",
            status: "inProgress"
        },
        {
            id: 6,
            title: "Create wireframe for ios app",
            description: "Oreo ios app project",
            totalQuests: 10,
            tasksComplete: 4,
            progressStatusColor: "customRedProgress",
            messages: 0,
            attachment: 0,
            usersCont: 2,
            date: "14 Nov 2022",
            status: "inProgress"
        },
        {
            id: 7,
            title: "Create ui kit for layout",
            description: "Crypto mobile app",
            totalQuests: 10,
            tasksComplete: 3,
            progressStatusColor: "customRedProgress",
            messages: 23,
            attachment: 12,
            usersCont: 0,
            date: "15 Nov 2022",
            status: "inProgress"
        },
        {
            id: 8,
            title: "Add product to the market",
            description: "Ui8 marketplace",
            totalQuests: 10,
            tasksComplete: 10,
            progressStatusColor: "customGreenProgress",
            messages: 1,
            attachment: 5,
            usersCont: 0,
            date: "6 Jan 2022",
            status: "done"
        },
        {
            id: 9,
            title: "Launch product promotion",
            description: "Kickstarter campaign",
            totalQuests: 10,
            tasksComplete: 10,
            progressStatusColor: "customGreenProgress",
            messages: 17,
            attachment: 3,
            usersCont: 0,
            date: "7 Jan 2022",
            status: "done"
        },
        {
            id: 10,
            title: "Make twitter banner",
            description: "Twitter marketing",
            totalQuests: 10,
            tasksComplete: 10,
            progressStatusColor: "customGreenProgress",
            messages: 0,
            attachment: 0,
            usersCont: 2,
            date: "8 Jan 2022",
            status: "done"
        }
    ]

    return data
}