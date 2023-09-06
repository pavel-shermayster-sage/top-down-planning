let runningId = 99;
const communications = [
{expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 500},
    {    expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 500},
    {expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 500},
    {   expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 500},
    {expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 500},
    {expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 500},
    {expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 1000},
    {expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 1000},
    {expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 1000},
    {expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 600},
];
const snacks = [
    {expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 230},
    {   expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total:  210},
    {   expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 237},
    {   expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 210},
    {   expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 35},
    {   expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 210},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 279},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 212},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 252},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total:  212},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 239},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total:  212},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 213},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total:  207},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total:  227},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total:  207},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 213},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total:  207}
]
const entertainment = [
    {  expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total:  350},
    {expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total:  350},
{expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total:  350},
{   expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total:  350},
{   expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total:  350},
{   expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total:  350},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total:  350},
]
const furniture = [
    {   expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 1700} ,
    {   expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 1700},
    {expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 1700},
    {expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 1700},
    {expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 1700},
    {expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 1700},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 1700},
]
const computers = [
    {    expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 3300},
    {expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 3000},
    {  expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total:3400},
    {    expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 380},
    { expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 4000},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 3600},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 3400},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 3100},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total:3300},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total:3100},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 1700}
]
const flights = [
    {    expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total:2000},
    {    expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total:2000},
    { expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 7000},
    {expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total:6000},
    {    expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total:3500},
    {expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total:3500},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total:2000},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total:2000},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 7000},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total:6000},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total:3500},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total:3500},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total:2200},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total:2100},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 7500},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 6400},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 3800},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 3600}
]
const conferences = [
    {expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 400},
        {    expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 350},
        {expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 1700},
        {   expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 1800},
        {   expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 600},
        {   expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 600},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total:300},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total:300},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total:450},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total:450},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total:300},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total:300},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total:450},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total:450}
]
const hotels=    [
        {    expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 800},
        {    expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 800},
        {    expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 2500},
        {expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 2500},
        {expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 1200},
        {expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 1200},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 900},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 3000},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 3100},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 1400},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 800},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 800},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 2500},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 2500},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 1200},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 1200}
]
const insurance   = [

    {   expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 1150 },
        {   expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 1050 },
        {    expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 1183 },
        {    expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 1050 },
        {    expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 177 },
        {    expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 1050 },
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 1393 },
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 1060 },
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 1260 },
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 1060 },
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 1193 },
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 1060 },
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 1067 },
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 1033 },
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 1133 },
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 1033 },
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 1067 },
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 1033 },
]
const salary = [
    { expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 33000 },
    {    expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 30000},
    {expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 34000 },
    {expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 30000},
    {  expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 3800 },
    { expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 40000 },
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 36000 },
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 34000 },
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 31000 },
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 33000 },
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 30000},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 31000 },
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 30000},
]
const benefits = [
    {   expenseId: 888, expenseName: "London - R&D - Accelerate ", sibling: [] , total: 1500},
        {  expenseId: 888, expenseName: "London - R&D - SIP", sibling: [] , total: 1500},
        {  expenseId: 888, expenseName: "London - Sales - Accelerate", sibling: [] , total: 1500},
        {  expenseId: 888, expenseName: "London - Sales - SIP", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "London-Product-Accelerate ", sibling: [] , total: 1500},
    {expenseId: 888, expenseName: "London Product  SIP", sibling: [] , total: 1500},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D - Accelerate ", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Tel-Aviv - R&D SIP", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Tel-Aviv - Sales - Accelerate", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Tel-Aviv Sales - SIP", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Tel-Aviv Product  - Accelerate ", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Tel-Aviv Product  SIP", sibling: [] , total: 1800},
    { expenseId: 888, expenseName: "Chicago - R&D - Accelerate ", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago - R&D SIP", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago - Sales - Accelerate", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago Sales - SIP", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago Product  - Accelerate ", sibling: [] , total: 1000},
    { expenseId: 888, expenseName: "Chicago Product  SIP", sibling: [] , total: 1000},
]

const processor = (arr) => {
    return arr.map(item => {
        runningId = runningId + 1;
        return Object.assign(item, {expenseId:runningId})
    })
}

export const data = [
    {
        expenseId: 0,
        expenseName: "Total Expenses",
        expenseAmount: "calc",
        sibling: [
            {
            expenseId: 1,
            expenseName: "Office Expenses",
            expenseAmount: "calc",
            sibling: [
                {
                    expenseId: 11,
                    expenseName: "Communications",
                    sibling: processor(communications),
                    total: 12600
                },
                {
                    expenseId: 12,
                    expenseName: "Snacks",
                    sibling: processor(snacks),
                    total: 3812
                },
                {
                    expenseId: 13,
                    expenseName: "Entertainment",
                    sibling: processor(entertainment),
                    total: 6300
                },
                {
                    expenseId: 14,
                    expenseName: "Furniture",
                    sibling: processor(furniture),
                    total: 30600
                },
                {
                    expenseId: 15,
                    expenseName: "Computers",
                    sibling: processor(computers),
                    total: 54580
                },
            ],
            total: 107892
            },
            {
                expenseId: 2,
                expenseName: "Travel Expenses",
                expenseAmount: "calc",
                sibling: [
                    {
                        expenseId: 21,
                        expenseName: "Flights",
                        sibling: processor(flights),
                        total: 73600
                    },
                    {
                        expenseId: 22,
                        expenseName: "Conferences",
                        sibling: processor(conferences),
                        total: 14450
                    },
                    {
                        expenseId: 23,
                        expenseName: "Hotels",
                        sibling: processor(hotels),
                        total: 28900
                    },
                ],
                total: 116950
            },
            {
                expenseId: 3,
                expenseName: "Admin Expenses",
                expenseAmount: "calc",
                sibling: [
                    {
                        expenseId: 31,
                        expenseName: "Insurance",
                        sibling: processor(insurance),
                        total: 19052
                    },
                    {
                        expenseId: 32,
                        expenseName: "Salary",
                        sibling: processor(salary),
                        total: 545800
                    },
                    {
                        expenseId: 33,
                        expenseName: "Benefits",
                        sibling: processor(benefits),
                        total: 25800
                    },
                ],
                total: 590652
            },
        ],
        total: 815494
    }
];
