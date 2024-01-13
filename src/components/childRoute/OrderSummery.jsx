import { useNavigate } from "react-router-dom"

export const OrderSummery = () => {

    const back = useNavigate()

    return(
        <>
            <h1>order confirm</h1>

            <button onClick={()=> back(-1)}>Back</button>
        </>
    )

}