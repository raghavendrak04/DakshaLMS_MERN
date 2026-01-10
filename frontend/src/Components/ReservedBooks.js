import React from 'react'
import './ReservedBooks.css'

const RESERVED_DATA = [
    { id: 1, name: "Arun Kumar", rollNo: "S20220010001", book: "Clean Code", date: "05/01/2026" },
    { id: 2, name: "Priya Sharma", rollNo: "S20220010024", book: "Introduction to Algorithms", date: "04/01/2026" },
    { id: 3, name: "Vikram Singh", rollNo: "S20210010156", book: "Microelectronic Circuits", date: "03/01/2026" },
    { id: 4, name: "Neha Reddy", rollNo: "S20230010089", book: "Operating System Concepts", date: "02/01/2026" },
    { id: 5, name: "Rahul Verma", rollNo: "S20210010342", book: "Deep Learning", date: "01/01/2026" },
    { id: 6, name: "Ananya Iyer", rollNo: "S20220010567", book: "Database System Concepts", date: "31/12/2025" },
    { id: 7, name: "Siddharth Das", rollNo: "S20220010012", book: "Signals and Systems", date: "30/12/2025" },
    { id: 8, name: "Meera Nair", rollNo: "S20230010421", book: "Artificial Intelligence", date: "29/12/2025" },
    { id: 9, name: "Karthik Raja", rollNo: "S20210010789", book: "Digital Design", date: "28/12/2025" },
    { id: 10, name: "Ishani Gupta", rollNo: "S20220010234", book: "Embedded Systems", date: "27/12/2025" },
    { id: 11, name: "Sameer Joshi", rollNo: "S20210010045", book: "Computer Networks", date: "26/12/2025" },
    { id: 12, name: "Tanvi Bhat", rollNo: "S20230010112", book: "The Pragmatic Programmer", date: "25/12/2025" },
    { id: 13, name: "Aditya Roy", rollNo: "S20220010901", book: "VLSI Design", date: "24/12/2025" },
    { id: 14, name: "Sneha Patil", rollNo: "S20210010667", book: "Renewable Energy Systems", date: "23/12/2025" },
    { id: 15, name: "Rohan Mehtre", rollNo: "S20220010334", book: "JavaScript: The Good Parts", date: "22/12/2025" }, // eslint-disable-line no-script-url
    { id: 16, name: "Divya Kapoor", rollNo: "S20230010778", book: "Cryptography", date: "21/12/2025" },
    { id: 17, name: "Abhishek Pal", rollNo: "S20210010889", book: "Switchgear", date: "20/12/2025" },
    { id: 18, name: "Pooja Hegde", rollNo: "S20220010445", book: "Machine Learning", date: "19/12/2025" },
    { id: 19, name: "Manish Tiwari", rollNo: "S20230010223", book: "Smart Grid", date: "18/12/2025" },
    { id: 20, name: "Shreya Ghosal", rollNo: "S20220010056", book: "Compiler Design", date: "17/12/2025" },
    { id: 21, name: "Varun Dhawan", rollNo: "S20210010991", book: "Electronic Machines", date: "16/12/2025" },
    { id: 22, name: "Alia Bhatt", rollNo: "S20230010665", book: "Fundamentals of Electric Circuits", date: "15/12/2025" },
    { id: 23, name: "Ranbir Kapoor", rollNo: "S20220010113", book: "Software Engineering", date: "14/12/2025" },
    { id: 24, name: "Kiara Advani", rollNo: "S20210010554", book: "Cyber Security", date: "13/12/2025" },
    { id: 25, name: "Vicky Kaushal", rollNo: "S20230010009", book: "Discrete Mathematics", date: "12/12/2025" }
];

function ReservedBooks() {
    return (
        <div className='reservedbooks-container'>
            <div className="reserved-header">
                <h2 className='reservedbooks-title'>Reservation Log</h2>
                <p className="reserved-subtitle">IIIT Library - Active Holds for B.Tech Students</p>
            </div>

            <div className="table-wrapper">
                <table className='reservedbooks-table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>Roll Number</th>
                            <th>Book Reserved</th>
                            <th>Reservation Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {RESERVED_DATA.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td className="student-name">{item.name}</td>
                                <td className="roll-no">{item.rollNo}</td>
                                <td className="book-name">{item.book}</td>
                                <td>{item.date}</td>
                                <td><span className="status-badge">On Hold</span></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReservedBooks
