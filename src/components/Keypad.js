// Code Keypad Component Here

function Keypad (){
    return (
        <div>
            <input onChange={(e)=>console.log('Entering password...')} type="password" />
        </div>
    )
}

export default Keypad;