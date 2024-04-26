import { v4 as uuid } from 'uuid'
import axios from "axios" 
import { useEffect, useState } from "react"
import { ButtonModel } from "../../components/button/buttonModel"

const id = uuid()

//console.log(id)

const box = [
    { id: id, content: '' }
]

interface Data {
    message: string
    status: string
}

const HomePage = () => {
    const [data, setData] = useState<Data>()

    const connection = async () => {
        try {
            const res = await axios.get('https://dog.ceo/api/breeds/image/random')
            const datas = res.data
            setData(datas)
            console.log(datas)

        } catch (error) {
            console.error(error)
        }
    }
    //renderiza o componente uma vez ao montar o componente
    useEffect(() => {
        connection()
    }, [])

    return (
        <>
            <section className='general-content'>
            {box.map(item => (
                <div key={item.id} className="default-div">
                    <span>
                        <h2 key={'index'}>#{item.id}</h2>
                        <div>
                            <span><img src={data?.message} alt='' /></span>
                            <p>status: {data?.status}</p>
                            <p>{item.content} loading...</p>
                        </div>
                    </span>
                </div>
            ))}
            <ButtonModel>Clique aqui</ButtonModel>
            </section>
                {/**<div className="default-div">
                    <h2>box-2</h2>
                    <div>
                        <p>line</p>
                    </div>
                </div>
                <div className="default-div">
                    <h2>box-3</h2>
                </div>
                <div className="default-div">
                    <h2>box-4</h2>
                </div> */}
        </>
    )
}

export default HomePage