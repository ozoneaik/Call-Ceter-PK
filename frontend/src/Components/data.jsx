export const users = [
    {
        name: 'ร้านอุ้งอิ้ง',
        username: '@คุยไม่ค่อยรู้เรื่อง',
        avatar: '/static/images/avatar/2.jpg',
        online: true,
    },
    {
        name: 'ร้านกลุล',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/3.jpg',
        online: false,
    },
    {
        name: 'บิ๊กซี่',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/1.jpg',
        online: true,
    },
    {
        name: 'ร้านคุรนายเต๋ว',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/4.jpg',
        online: false,
    },
    {
        name: 'ร้านคุรนายเต๋ว (สาขา 2)',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/5.jpg',
        online: true,
    },
    {
        name: 'ร้านคุรนายเต๋ว (สาขา 3)',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/6.jpg',
        online: true,
    },
    {
        name: 'ร้านคุรนายเต๋ว (สาขา 4)',
        username: '@คุยง่าย เข้าใจง่าย',
        avatar: '/static/images/avatar/7.jpg',
        online: false,
    },
];

export const chats = [
    {
        id: '1',
        sender: users[0],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:00am',
                sender: users[0],
            },
            {
                id: '2',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:10am',
                sender: 'You',
            },
            {
                id: '3',
                timestamp: 'Wednesday 11:30am',
                sender: users[0],
                content: "สวัสดีครับ",
            },
            {
                id: '4',
                timestamp: 'Wednesday 2:00pm',
                sender: 'You',
                content: "สวัสดีครับ",
            },
            {
                id: '5',
                timestamp: 'Wednesday 4:30pm',
                sender: users[0],
                content: "สวัสดีครับ",
            },
            {
                id: '6',
                content: "สวัสดีครับ",
                timestamp: 'Thursday 10:16am',
                sender: users[0],
            },
            {
                id: '7',
                content: "สวัสดีครับ",
                timestamp: 'Thursday 11:40am',
                sender: users[0],
            },
            {
                id: '3',
                timestamp: 'Thursday 11:40am',
                sender: users[0],
                content: "สวัสดีครับ",
                attachment: {
                    fileName: 'Tech requirements.pdf',
                    type: 'pdf',
                    size: '1.2 MB',
                },
            },
            {
                id: '8',
                timestamp: 'Thursday 11:41am',
                sender: 'You',
                content: "สวัสดีครับ",
            },
            {
                id: '9',
                timestamp: 'Thursday 11:44am',
                sender: users[0],
                content: "สวัสดีครับ",
            },
            {
                id: '10',
                timestamp: 'Today 2:20pm',
                sender: users[0],
                content: "สวัสดีครับ",
            },
        ],
    },
    {
        id: '2',
        sender: users[1],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:00am',
                sender: users[1],
            },
            {
                id: '2',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:05am',
                sender: 'You',
            },
            {
                id: '3',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:30am',
                sender: users[1],
            },
            {
                id: '4',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:35am',
                sender: 'You',
            },
            {
                id: '5',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 10:00am',
                sender: users[1],
            },
            {
                id: '6',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 10:05am',
                sender: 'You',
            },
        ],
    },
    {
        id: '3',
        sender: users[2],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: '5 mins ago',
                sender: users[2],
                unread: true,
            },
        ],
    },
    {
        id: '4',
        sender: users[3],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:00am',
                sender: users[3],
            },
            {
                id: '2',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:05am',
                sender: 'You',
            },
            {
                id: '3',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:15am',
                sender: users[3],
            },
            {
                id: '4',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:20am',
                sender: 'You',
            },
            {
                id: '5',
                content: "สวัสดีครับ",
                timestamp: 'Wednesday 9:30am',
                sender: users[3],
            },
        ],
    },

    {
        id: '5',
        sender: users[4],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: '5 mins ago',
                sender: users[4],
                unread: true,
            },
        ],
    },
    {
        id: '6',
        sender: users[5],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: '5 mins ago',
                sender: 'You',
                unread: true,
            },
        ],
    },

    {
        id: '7',
        sender: users[6],
        messages: [
            {
                id: '1',
                content: "สวัสดีครับ",
                timestamp: '5 mins ago',
                sender: users[6],
                unread: true,
            },
        ],
    },
];