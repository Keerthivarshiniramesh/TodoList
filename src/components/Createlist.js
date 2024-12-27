import React, { useContext, useEffect, useState } from 'react'
import cal from '../images/calender.png'
import { Contextuse } from '../Providerss'


export default function Createlist() {

    let { setLists } = useContext(Contextuse)

    let [tasks, setTask] = useState({ event: '', time: '' })
    let [click, setClick] = useState(false)

    useEffect(() => {
        setTask({ event: '', time: '' })
        console.log("Mount")

    }, [])

    function AddEvent() {
        setLists(prev =>
            [
                ...prev,
                tasks
            ])

        setTask({ event: '', time: '' })
        setClick(false)
    }

    let Stores = (e, keys) => {
        let values = e.target.value
        setTask(prev => (
            {
                ...prev,
                [keys]: values
            }
        ))
    }

    console.log(tasks)
    return (
        <div>
            <header>
                <h1 className=' text-primary text-center m-5'>TODO LIST </h1>
                <div className='d-flex justify-content-center align-items-center '>
                    <input type='text' className='add bg-white form-control border-0 rounded ' placeholder='Add new task...' value={tasks.event} onChange={(e) => Stores(e, "event")} />
                    <img src={cal} style={{ width: "30px", height: "30px" }} className='ms-3 img1 position-relative ' onClick={() => setClick(!click)} />
                    {
                        click &&
                        <input type="date" className=' position-absolute dates' onChange={(e) => Stores(e, "time")} />
                    }

                    {/* <i classname="bi bi-calendar2-check-fill"></i> */}
                    <button className='bg-primary border rounded text-white ms-3 p-1 add1 position-relative' onClick={() => AddEvent()}>ADD</button>
                </div>


            </header>


        </div>
    )
}


