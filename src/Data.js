import React from 'react'

const Data = ({data}) => {
    const renderObj = () => {
        console.log(data)
        if (data) {
                return (
                    <div>
                        {"{  "}
                        <br />
                        Name : {data.Name} <br />
                        Designation : {data.Designation} <br />
                        Language : {data.Language}
                        <br />
                        {"}  "}
                    </div>
                )
            }
        }
    
    return (
        <div>
            {renderObj()}
        </div>
    )
}

export default Data
