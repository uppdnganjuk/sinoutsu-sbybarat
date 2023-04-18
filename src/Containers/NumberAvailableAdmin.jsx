import React from "react";
import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import './NumberAvailable.css'


class NumberAvailableAdmin extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            datas : []
        }
    }
    changeNumber = (data)=>{
        document.getElementById("nomorSurat").value = data;
    }
    render(){
        return(
            <div>
                <div className="d-flex justify-content-start align-items-start flex-wrap mt-1 mb-4">
                    {this.props.number.map(data =>{ 
                                  return  <Card style={{ width: '40px', textAlign:"center" }} className="m-1 numberAvailable" id={`numop${data}`}>{data}</Card>
                    })}
                </div>
            </div>
            
        )
    }
}

export default NumberAvailableAdmin;